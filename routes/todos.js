/* eslint-disable no-case-declarations */
const express = require('express')
const router = express.Router()
const api = require('../api')
const env = require('../env.js')
const fs = require('fs')
const path = require('path')

let files, counter

function resetFiles () {
  files = fs.readdirSync(env.filePath)
  counter = 0
}

resetFiles()

router.route('/todos')
/* query for items quantity, reset and retrieve */
  .get((req, res, next) => {
    const headers = req.headers
    const request = Number(headers.req_code)
    /* handle request accordingly */
    switch (request) {
      /* request: Send entries existing over File System */
      case api.Q_ENTRIES:
        res.status(api.HTTP_STATUS_OK).json({
          data: JSON.stringify(files)
        })

        res.end()
        break

      /* request: How many items are there in todo queue
         those can be requested by client for send */
      case api.Q_REMAINING:
        res.status(api.HTTP_STATUS_OK).json({
          remaining: files.length - counter
        })

        res.end()
        break

      /* request: Send the item specified by entry */
      case api.Q_ENTRY:
        let contents = ''
        const rs = fs.createReadStream(
          path.join(env.filePath, headers.id), 'utf8')

        rs.on('error', (err) => next(err))

        rs.on('data', (chunk) => {
          contents += chunk
        })

        rs.on('end', () => {
          res.status(api.HTTP_STATUS_OK).json({
            data: contents
          })
          res.end()
        })

        break

      /* request: Send the next item in todo queue */
      case api.Q_NEXT:
        /* there is nothing in queue, sorry - say it invalid */
        if (counter >= files.length) {
          res.status(api.HTTP_ERROR_BAD_REQUEST).json({
            res_code: api.R_QUERY_FAILURE,
            code: api.E_EMPTY
          })
          res.end()
        } else {
          /* read next item from file and send that as data field
             in responce */
          let contents = ''

          const rs = fs.createReadStream(
            path.join(env.filePath, files[counter]), 'utf8')
          rs.on('error', (err) => next(err))
          rs.on('data', (chunk) => {
            contents += chunk
          })
          rs.on('end', () => {
            res.status(api.HTTP_STATUS_OK).json({
              res_code: api.R_QUERY_SUCCESS,
              data: contents,
              remaining: files.length - ++counter
            })
            res.end()
          })
        }
        break

        /* request: reset the queue, re-reading file items */
      case api.Q_RESET:
        resetFiles()
        res.status(api.HTTP_STATUS_OK).send({
          remaining: files.length
        })
        break

        /* unknown request, reject */
      default:
        res.status(api.HTTP_ERROR_BAD_REQUEST).json({
          res_code: api.R_QUERY_FAILURE,
          code: api.E_UNKNOWN_REQUEST
        })
        res.end()
    }
  })

/* request for adding an item to server database(files) */
  .post((req, res, next) => {
    const object = req.body
    const fileName = `${object.id}`
    if (fileName === '') {
      res.status(api.HTTP_ERROR_INTERNEL_SERVER).json({
        res_code: api.R_ADD_FAILURE,
        code: api.E_MISSING_UNIQUE_ATTRIBUTE
      })
    }
    const ws = fs.createWriteStream(path.join(env.filePath, fileName))
    ws.on('error', (err) => {
      if (err) {
        /* request failed due to File System error */
        res.status(api.HTTP_ERROR_INTERNEL_SERVER).json({
          res_code: api.R_ADD_FAILURE,
          code: api.E_FILE_SYSTEM
        })
        res.end()
      }
    })
    ws.on('close', () => {
      files.push(fileName)
      if (counter >= files.length) {
        counter--
      }
      res.status(api.HTTP_STATUS_OK).json({
        res_code: api.R_ADD_SUCCESS,
        id: object.id
      })
      res.end()
    })
    ws.write(JSON.stringify(object), () => {
      ws.close()
    })
  })

/* request for updating an exisiting todo item */
  .put((req, res, next) => {
    const object = req.body
    const fileName = `${object.id}`
    if (fileName === '') {
      res.status(api.HTTP_ERROR_INTERNEL_SERVER).json({
        res_code: api.R_ADD_FAILURE,
        code: api.E_MISSING_UNIQUE_ATTRIBUTE
      })
    }
    const ws = fs.createWriteStream(path.join(env.filePath, `.${fileName}`))
    /* request failed due to File System error */
    ws.on('error', (err) => {
      if (err) {
        res.status(api.HTTP_ERROR_INTERNEL_SERVER).json({
          res_code: api.R_UPDATE_FAILURE,
          code: api.E_FILE_SYSTEM
        })
        res.end()
      }
    })
    ws.on('close', () => {
      fs.copyFile(
        path.join(env.filePath, `.${fileName}`),
        path.join(env.filePath, `${fileName}`),
        (err) => {
          fs.unlink(path.join(env.filePath, `.${fileName}`), (err) => {
            if (err) {
              console.log(err)
            }
          })
          if (err) {
            /* request failed due to File System error */
            res.status(api.HTTP_ERROR_INTERNEL_SERVER).json({
              res_code: api.R_UPDATE_FAILURE,
              code: api.E_FILE_SYSTEM
            })
            res.end()
          } else {
            res.status(api.HTTP_STATUS_OK).json({
              res_code: api.R_UPDATE_SUCCESS,
              id: object.id
            })
            res.end()
          }
        }
      )
    })
    ws.write(JSON.stringify(object), () => {
      ws.close()
    })
  })

/* request for deleting a todo item from files database */
  .delete((req, res) => {
    const headers = req.headers
    const fileName = `${headers.id}`
    fs.stat(
      path.join(env.filePath, fileName),
      (err, stats) => {
        if (err) {
          /* request failed due since item not found */
          if (err.code === 'ENOENT') {
            res.status(api.HTTP_ERROR_INTERNEL_SERVER).json({
              res_code: api.R_DELETE_FAILURE,
              code: api.HTTP_ERROR_NOT_FOUND
            })
            res.end()
          } else {
            console.log(err)
            /* request failed due to File System error */
            res.status(api.HTTP_ERROR_INTERNEL_SERVER).json({
              res_code: api.R_DELETE_FAILURE,
              code: api.E_FILE_SYSTEM
            })
            res.end()
          }
        } else {
          if (stats.isFile()) {
            fs.unlink(path.join(env.filePath, fileName), (err) => {
              if (err) {
                /* request failed due to File System error */
                res.status(api.HTTP_ERROR_BAD_REQUEST).json({
                  res_code: api.R_DELETE_FAILURE,
                  code: api.E_FILE_SYSTEM
                })
                res.end()
              } else {
                resetFiles()
                res.status(api.HTTP_STATUS_OK).json({
                  res_code: api.R_DELETE_SUCCESS,
                  id: headers.id
                })
                res.end()
              }
            })
          } else {
            /* request failed due to File System error */
            res.status(api.HTTP_ERROR_INTERNEL_SERVER).json({
              res_code: api.R_DELETE_FAILURE,
              code: api.E_FILE_SYSTEM
            })
            res.end()
          }
        }
      }
    )
  })

module.exports = router
