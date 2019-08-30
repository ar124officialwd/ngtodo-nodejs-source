/*
  A SIMPLE TODO APPLICATION - NGTODO
  Copyright (C) 2019 'Ahmad Raza'

  This program is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.

  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

module.exports.HTTP_STATUS_OK = 200
module.exports.HTTP_STATUS_PROCESSING = 102

module.exports.HTTP_ERROR_BAD_REQUEST = 400
module.exports.HTTP_ERROR_NOT_FOUND = 404
module.exports.HTTP_ERROR_INTERNEL_SERVER = 500

module.exports.Q_RESET = 1050
module.exports.Q_REMAINING = 1051
module.exports.Q_NEXT = 1052
module.exports.Q_ENTRIES = 1053
module.exports.Q_ENTRY = 1054

module.exports.E_UNKNOWN_REQUEST = (-1100)
module.exports.E_EMPTY = (-1101)
module.exports.E_FILE_SYSTEM = (-1102)
module.exports.E_MISSING_UNIQUE_ATTRIBUTE = (-1103)

module.exports.R_QUERY_SUCCESS = 1200
module.exports.R_QUERY_FAILURE = (-1200)
module.exports.R_ADD_SUCCESS = 1201
module.exports.R_ADD_FAILURE = (-1201)
module.exports.R_UPDATE_SUCCESS = 1202
module.exports.R_UPDATE_FAILURE = (-1202)
module.exports.R_DELETE_SUCCESS = 1203
module.exports.R_DELETE_FAILURE = (-1203)
