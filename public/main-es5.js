(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/about/about.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/about/about.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"about\">\n  <div id=\"app\" class=\"card\">\n    <div class=\"card-body\">\n      <img src=\"../../assets/icon.svg\"\n        class=\"d-block mx-auto card-img-top\">\n      <div>\n        <h3 class=\"card-title text-center p-2\">NG TODO</h3>\n        <h5 class=\"card-title text-center\">Todo Application</h5>\n      </div>\n      <div class=\"card-text\">\n        NG Todo is simple yet working todo saving application\n        created by developer for testing Angular and NodeJS skills.\n        This app is not to be deployed but you may clone and tweak\n        it for deployment.\n      </div>\n      <div>\n        <a href=\"\" class=\"card-link\">Angular Source</a>\n        <a href=\"\" class=\"card-link\">NodeJS Source</a>\n      </div>\n    </div>\n  </div>\n  <div id=\"developer\" class=\"card\">\n    <div class=\"card-body\">\n      <img src=\"../../assets/developer.jpg\"\n        class=\"d-block mx-auto card-img-top\">\n      <div>\n        <h3 class=\"card-title text-center p-2\">Ahmad Raza</h3>\n        <h5 class=\"card-title text-center\">Application Developer</h5>\n      </div>\n      <div class=\"card-text\">\n        Hi everyone! I'm a student of Software Engineering (3rd year in 2019).\n        My main interest is JavaScript for developing Softwares for\n        different platforms. This app is result of my Angular and NodeJS\n        learnings!<br>\n        <b>Skills:</b> HTML5, CSS3, PHP, JavaScript (NodeJS, Angular)\n      </div>\n      <div>\n        <a href=\"\" class=\"card-link\">Github</a>\n        <a href=\"\" class=\"card-link\">Twitter</a>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/actions/actions.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/actions/actions.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex justify-content-center flex-row mb-1 bg-light p-1\">\n  <div class=\"flex-item\">\n    <button class=\"btn btn-sm btn-outline-dark m-1\">\n      <i class=\"nf-fa-check\"></i>\n    </button>\n    <button class=\"btn btn-sm btn-outline-dark m-1\">\n      <i class=\"nf-fa-star\"></i>\n    </button>\n    <button class=\"btn btn-sm btn-outline-dark m-1\">\n      <i class=\"nf-fa-star_o\"></i>\n    </button>\n    <button class=\"btn btn-sm btn-outline-dark m-1\">\n      <i class=\"nf-fa-eye\"></i>\n    </button>\n    <button class=\"btn btn-sm btn-outline-dark m-1\">\n      <i class=\"nf-fa-eye_slash\"></i>\n    </button>\n    <button class=\"btn btn-sm btn-outline-dark m-1\">\n      <i class=\"nf-fa-trash\"></i>\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"appContainer appGrid\">\n  <div class=\"appNav\">\n    <app-dashboard></app-dashboard>\n  </div>\n  <div class=\"appRoutes\">\n    <router-outlet></router-outlet>\n  </div>\n  <div class=\"appMessage\">\n    <app-message></app-message>\n  </div>\n  <footer class=\"appFooter bg-dark text-secondary p-3 text-center bottomBar\">\n    <a routerLink=\"/about\"><img id=\"about\" src=\"../favicon.ico\"\n      width=\"16vw\" height=\"16vh\" style=\"margin-right: 1vw\"></a>\n    <i class=\"nf-mdi-code_braces text-light\"></i>ed with\n    <i class=\"nf nf-fa-heart text-danger\"></i> using\n    <i class=\"nf-mdi-nodejs text-success\"></i>\n    <i class=\"nf-dev-angular text-danger\"></i>\n    <i class=\"nf-dev-visualstudio text-primary\"></i>\n    <i class=\"nf-custom-vim text-success\"></i> on\n    <i class=\"nf-linux-archlinux text-primary\"></i>\n  </footer>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"appNavigation bg-primary no-space\">\n  <div class=\"navbar no-space\">\n    <a routerLink=\"/\"\n      class=\"btn btn-primary py-1 px-2\" title=\"Add new todo\">\n      <img src=\"../../favicon.ico\" width=16 height=16></a>\n    <a routerLink=\"/new\" routerLinkActive=\"text-dark btn-outline-light\"\n      class=\"btn btn-primary py-1 px-2\" title=\"Add new todo\">\n      <i class=\"nf-fa-plus\"></i></a>\n    <a routerLink=\"/all\" routerLinkActive=\"text-dark btn-outline-light\"\n      class=\"btn btn-primary py-1 px-2\" title='View all visible todos'>\n      <i class=\"nf-fa-asterisk\"></i></a>\n    <a routerLink=\"/normal\" routerLinkActive=\"text-dark btn-outline-light\"\n      class=\"btn btn-primary py-1 px-2\" title='View unstared todos only'>\n      <i class=\"nf-fa-star_o\"></i></a>\n    <a routerLink=\"/important\" routerLinkActive=\"text-dark btn-outline-light\"\n      class=\"btn btn-primary py-1 px-2\" title=\"View stared todos only\">\n      <i class=\"nf-fa-star\"></i></a>\n    <a routerLink=\"/hidden\" routerLinkActive=\"text-dark btn-outline-light\"\n      class=\"btn btn-primary py-1 px-2\" title=\"View all hidden todos\">\n      <i class=\"nf-fa-eye_slash\"></i></a>\n    <a routerLink=\"/about\" routerLinkActive=\"text-dark btn-outline-light\"\n      class=\"btn btn-primary py-1 px-2\" title=\"View all hidden todos\">\n      <i class=\"nf-mdi-information\"></i></a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/edit-todo/edit-todo.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/edit-todo/edit-todo.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"writeTodoContainer\">\n  <h6 class=\"text-center\"><b>Edit Todo</b> [{{editLabel}}: {{dateString}} - {{timeString}}]</h6>\n  <div class=\"editTodo\">\n    <div class=\"toolbar\">\n      <div class=\"NF\">\n        <button (click)=\"toggleStared()\" [class]=\"staredClass\" [title]=\"staredTitle\"></button>\n      </div>\n      <div class=\"NF\">\n        <button (click)=\"toggleHidden()\" [class]=\"hiddenClass\" [title]=\"hiddenTitle\"></button>\n      </div>\n      <div class=\"NF\">\n        <button class=\"btn btn-sm btn-light nf-fa-undo\" (click)=\"clearText()\" title=\"Clear todo text!\"></button>\n      </div>\n      <div class=\"NF\">\n        <button (click)=\"updateTodo()\" [disabled]=\"unchanged\"\n          class=\"btn btn-sm btn-light nf-fa-save\" title=\"Save changes!\"></button>\n      </div>\n      <div class=\"NF\">\n        <button class=\"btn btn-sm btn-light nf-mdi-cancel\" (click)=\"goBack()\" title=\"Cancel and go back\"></button>\n      </div>\n    </div>\n  </div>\n  <textarea [formControl]=\"text\" (change)=\"saveTemporary()\"\n    class=\"form-control textArea\" aria-label=\"Text input with checkbox\"\n    maxlength=1024 rows=6 required autofocus>\n  </textarea>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/hidden-todo-view/hidden-todo-view.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/hidden-todo-view/hidden-todo-view.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"routeGrid\">\n  <div class=\"d-flex flex-row justify-content-center bg-light p-1 actions\">\n    <span class=\"flex-item p-0 m-0\">\n      <button *ngIf=\"!allSelected; else select\" (click)=\"selectAll()\"\n        class=\"btn btn-sm btn-outline-dark m-1\">\n        <i class=\"nf-fa-check\"></i>\n      </button>\n    </span>\n    <ng-template #select>\n      <button (click)=\"deselectAll()\"\n        class=\"btn btn-sm btn-outline-dark m-1\">\n        <i class=\"nf-fa-check_circle\"></i>\n      </button>\n    </ng-template>\n    <span class=\"flex-item p-0 m-0\">\n      <button (click)=\"starSelected()\" class=\"btn btn-sm btn-outline-dark m-1\">\n        <i class=\"nf-fa-star\"></i>\n      </button>\n    </span>\n    <span class=\"flex-item p-0 m-0\">\n      <button (click)=\"unstarSelected()\" class=\"btn btn-sm btn-outline-dark m-1\">\n        <i class=\"nf-fa-star_o\"></i>\n      </button>\n    </span>\n    <span class=\"flex-item p-0 m-0\">\n      <button (click)=\"unhideSelected()\" class=\"btn btn-sm btn-outline-dark m-1\">\n        <i class=\"nf-fa-eye\"></i>\n      </button>\n    </span>\n    <span class=\"flex-item p-0 m-0\">\n      <button (click)=\"deleteSelected()\" class=\"btn btn-sm btn-outline-dark m-1\">\n        <i class=\"nf-fa-trash\"></i>\n      </button>\n    </span>\n    <span *ngIf=\"!ascending; else descending\" class=\"flex-item p-0 m-0\">\n      <button (click)=\"sortAscending()\" class=\"btn btn-sm btn-outline-dark m-1\">\n        <i class=\"nf-mdi-sort_ascending\"></i>\n      </button>\n    </span>\n    <ng-template #descending>\n      <span class=\"flex-item p-0 m-0\">\n        <button (click)=\"sortDescending()\" class=\"btn btn-sm btn-outline-dark m-1\">\n          <i class=\"nf-mdi-sort_descending\"></i>\n        </button>\n      </span>\n    </ng-template>\n  </div>\n\n  <div *ngIf=\"todos.length; else emptyMessage\" class=\"todoView\">\n    <div *ngFor=\"let todo of todos\" [class]=\"classes[todo.id] || todoItemClass\">\n      <div class=\"todoItemText\">\n        <span *ngIf=\"todo.stared\" class=\"nf-fa-star\"></span> {{todo.text}}\n      </div>\n      <div class=\"todoItemInfo\">\n        <span *ngIf=\"todo.updated\"><b>Updated</b>:\n            {{todo.updated.dateString}} - {{todo.updated.timeString}}\n        </span>\n        <span *ngIf=\"!todo.updated\"><b>Created</b>:\n          {{todo.created.dateString}} - {{todo.created.timeString}}\n        </span>\n      </div>\n      <div class=\"todoItemActions\">\n        <button *ngIf=\"!isSelected(todo.id); else deSelect\"\n          (click)=\"toggleChecked(todo.id)\" title=\"select todo\"\n          class=\"card-link btn btn-sm m-1 btn-outline-dark\">\n          <i class=\"nf-fa-check\"></i></button>\n        <ng-template #deSelect>\n          <button  title=\"de-select todo\" (click)=\"toggleChecked(todo.id)\"\n            class=\"card-link btn btn-sm m-1 btn-outline-dark\">\n            <i class=\"nf-fa-check_circle\"></i></button>\n        </ng-template>\n        <button *ngIf=\"todo.stared == true; else star\"\n          (click)=\"unsetStar(todo.id)\" title=\"mark as not stared\"\n          class=\"card-link btn btn-sm m-1 btn-outline-primary\">\n          <i class=\"nf-fa-star_o\"></i></button>\n        <ng-template #star>\n          <button (click)=\"setStar(todo.id)\" title=\"mark as stared\"\n          class=\"card-link btn btn-sm m-1 btn-outline-primary\">\n          <i class=\"nf-fa-star\"></i></button>\n        </ng-template>\n        <button (click)=\"unhide(todo.id)\" title=\"mark as hidden\"\n          class=\"card-link btn btn-sm m-1 btn-outline-primary\">\n          <i class=\"nf-fa-eye_slash\"></i></button>\n        <button (click)=\"edit(todo.id)\" title=\"edit todo\"\n          class=\"card-link btn btn-sm m-1 btn-outline-secondary\">\n          <i class=\"nf-fa-edit\"></i></button>\n        <button (click)=\"delete(todo.id)\" title=\"delete todo\"\n          class=\"card-link btn btn-sm m-1 btn-outline-danger\">\n          <i class=\"nf-fa-trash\"></i></button>\n      </div>\n    </div>\n  </div>\n  <ng-template #emptyMessage>\n    <div class=\"m-auto text-center\">\n      <i class=\"nf-fa-flushed\"></i>There is nothing to-do<br>\n      <a routerLink=\"/new\"><i class=\"nf-fa-plus\"></i> Add New</a>\n    </div>\n  </ng-template>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/important-todo-view/important-todo-view.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/important-todo-view/important-todo-view.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"routeGrid\">\n  <div class=\"d-flex flex-row justify-content-center bg-light p-1 actions\">\n    <span class=\"flex-item p-0 m-0\">\n      <button *ngIf=\"!allSelected; else select\" (click)=\"selectAll()\" class=\"btn btn-sm btn-outline-dark m-1\">\n        <i class=\"nf-fa-check\"></i>\n      </button>\n    </span>\n    <ng-template #select>\n      <button (click)=\"deselectAll()\" class=\"btn btn-sm btn-outline-dark m-1\">\n        <i class=\"nf-fa-check_circle\"></i>\n      </button>\n    </ng-template>\n    <span class=\"flex-item p-0 m-0\">\n      <button (click)=\"unstarSelected()\" class=\"btn btn-sm btn-outline-dark m-1\">\n        <i class=\"nf-fa-star_o\"></i>\n      </button>\n    </span>\n    <span class=\"flex-item p-0 m-0\">\n      <button (click)=\"hideSelected()\" class=\"btn btn-sm btn-outline-dark m-1\">\n        <i class=\"nf-fa-eye_slash\"></i>\n      </button>\n    </span>\n    <span class=\"flex-item p-0 m-0\">\n      <button (click)=\"deleteSelected()\" class=\"btn btn-sm btn-outline-dark m-1\">\n        <i class=\"nf-fa-trash\"></i>\n      </button>\n    </span>\n    <span *ngIf=\"!ascending; else descending\" class=\"flex-item p-0 m-0\">\n      <button (click)=\"sortAscending()\" class=\"btn btn-sm btn-outline-dark m-1\">\n        <i class=\"nf-mdi-sort_ascending\"></i>\n      </button>\n    </span>\n    <ng-template #descending>\n      <span class=\"flex-item p-0 m-0\">\n        <button (click)=\"sortDescending()\" class=\"btn btn-sm btn-outline-dark m-1\">\n          <i class=\"nf-mdi-sort_descending\"></i>\n        </button>\n      </span>\n    </ng-template>\n  </div>\n\n  <div *ngIf=\"todos.length; else emptyMessage\" class=\"todoView\">\n    <div *ngFor=\"let todo of todos\" [class]=\"classes[todo.id] || todoItemClass\">\n      <div class=\"todoItemText\">\n        {{todo.text}}\n      </div>\n      <div class=\"todoItemInfo\">\n        <span *ngIf=\"todo.updated\"><b>Updated</b>:\n          {{todo.updated.dateString}} - {{todo.updated.timeString}}\n        </span>\n        <span *ngIf=\"!todo.updated\"><b>Created</b>:\n          {{todo.created.dateString}} - {{todo.created.timeString}}\n        </span>\n      </div>\n      <div class=\"todoItemActions\">\n        <button *ngIf=\"!isSelected(todo.id); else deSelect\" (click)=\"toggleChecked(todo.id)\" title=\"select todo\"\n          class=\"card-link btn btn-sm m-1 btn-outline-dark\">\n          <i class=\"nf-fa-check\"></i></button>\n        <ng-template #deSelect>\n          <button title=\"de-select todo\" (click)=\"toggleChecked(todo.id)\"\n            class=\"card-link btn btn-sm m-1 btn-outline-dark\">\n            <i class=\"nf-fa-check_circle\"></i></button>\n        </ng-template>\n        <button (click)=\"unsetStar(todo.id)\" title=\"mark as stared\" class=\"card-link btn btn-sm m-1 btn-outline-primary\">\n          <i class=\"nf-fa-star_o\"></i></button>\n        <button (click)=\"hide(todo.id)\" title=\"mark as hidden\" class=\"card-link btn btn-sm m-1 btn-outline-primary\">\n          <i class=\"nf-fa-eye_slash\"></i></button>\n        <button (click)=\"edit(todo.id)\" title=\"edit todo\" class=\"card-link btn btn-sm m-1 btn-outline-secondary\">\n          <i class=\"nf-fa-edit\"></i></button>\n        <button (click)=\"delete(todo.id)\" title=\"delete todo\" class=\"card-link btn btn-sm m-1 btn-outline-danger\">\n          <i class=\"nf-fa-trash\"></i></button>\n      </div>\n    </div>\n  </div>\n  <ng-template #emptyMessage>\n    <div class=\"m-auto text-center\">\n      <i class=\"nf-fa-flushed\"></i>There is nothing to-do<br>\n      <a routerLink=\"/new\"><i class=\"nf-fa-plus\"></i> Add New</a>\n    </div>\n  </ng-template>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/message/message.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/message/message.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"messages.length\" class=\"messageComponent bg-dark\">\n  <div *ngFor=\"let message of messages\" class=\"message\">\n    <div class=\"messageText text-light text-sm\">\n      {{message.message}}\n    </div>\n    <div class=\"messageClose\">\n      <button (click)=\"remove(message.id)\"\n        class=\"btn btn-outline-primary btn-sm\">\n        <i class=\"nf-mdi-cancel\"></i></button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/new-todo/new-todo.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/new-todo/new-todo.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"writeTodoContainer\">\n  <h6 class=\"text-center\"><b>New Todo</b></h6>\n  <div class=\"newTodo\">\n    <div class=\"toolbar\">\n      <div class=\"NF\">\n        <button (click)=\"toggleStared()\" [class]=\"staredClass\"></button>\n      </div>\n      <div class=\"NF\">\n        <button (click)=\"toggleHidden()\" [class]=\"hiddenClass\"></button>\n      </div>\n      <div class=\"NF\">\n        <button class=\"btn btn-sm btn-light nf-fa-undo\" (click)=\"clearText()\"></button>\n      </div>\n      <div class=\"NF\">\n        <button class=\"btn btn-sm btn-light nf-fa-save\" (click)=\"saveTodo()\"></button>\n      </div>\n      <div class=\"NF\">\n        <button class=\"btn btn-sm btn-light nf-mdi-cancel\" (click)=\"goBack()\"></button>\n      </div>\n    </div>\n    <textarea  [formControl]=\"text\" class=\"form-control textArea\"\n      aria-label=\"Text input with checkbox\" placeholder=\"Enter your todo text here\"\n      maxlength=1024 rows=6 required autofocus>\n    </textarea>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/normal-todo-view/normal-todo-view.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/normal-todo-view/normal-todo-view.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"routeGrid\">\n  <div class=\"d-flex flex-row justify-content-center bg-light p-1 actions\">\n    <span class=\"flex-item p-0 m-0\">\n      <button *ngIf=\"!allSelected; else select\" (click)=\"selectAll()\"\n        class=\"btn btn-sm btn-outline-dark m-1\">\n        <i class=\"nf-fa-check\"></i>\n      </button>\n    </span>\n    <ng-template #select>\n      <button (click)=\"deselectAll()\"\n        class=\"btn btn-sm btn-outline-dark m-1\">\n        <i class=\"nf-fa-check_circle\"></i>\n      </button>\n    </ng-template>\n    <span class=\"flex-item p-0 m-0\">\n      <button (click)=\"starSelected()\" class=\"btn btn-sm btn-outline-dark m-1\">\n        <i class=\"nf-fa-star\"></i>\n      </button>\n    </span>\n    <span class=\"flex-item p-0 m-0\">\n      <button (click)=\"hideSelected()\" class=\"btn btn-sm btn-outline-dark m-1\">\n        <i class=\"nf-fa-eye_slash\"></i>\n      </button>\n    </span>\n    <span class=\"flex-item p-0 m-0\">\n      <button (click)=\"deleteSelected()\" class=\"btn btn-sm btn-outline-dark m-1\">\n        <i class=\"nf-fa-trash\"></i>\n      </button>\n    </span>\n    <span *ngIf=\"!ascending; else descending\" class=\"flex-item p-0 m-0\">\n      <button (click)=\"sortAscending()\" class=\"btn btn-sm btn-outline-dark m-1\">\n        <i class=\"nf-mdi-sort_ascending\"></i>\n      </button>\n    </span>\n    <ng-template #descending>\n      <span class=\"flex-item p-0 m-0\">\n        <button (click)=\"sortDescending()\" class=\"btn btn-sm btn-outline-dark m-1\">\n          <i class=\"nf-mdi-sort_descending\"></i>\n        </button>\n      </span>\n    </ng-template>\n  </div>\n\n  <div *ngIf=\"todos.length; else emptyMessage\" class=\"todoView\">\n    <div *ngFor=\"let todo of todos\" [class]=\"classes[todo.id] || todoItemClass\">\n      <div class=\"todoItemText\">\n        {{todo.text}}\n      </div>\n      <div class=\"todoItemInfo\">\n        <span *ngIf=\"todo.updated\"><b>Updated</b>:\n            {{todo.updated.dateString}} - {{todo.updated.timeString}}\n        </span>\n        <span *ngIf=\"!todo.updated\"><b>Created</b>:\n          {{todo.created.dateString}} - {{todo.created.timeString}}\n        </span>\n      </div>\n      <div class=\"todoItemActions\">\n        <button *ngIf=\"!isSelected(todo.id); else deSelect\"\n          (click)=\"toggleChecked(todo.id)\" title=\"select todo\"\n          class=\"card-link btn btn-sm m-1 btn-outline-dark\">\n          <i class=\"nf-fa-check\"></i></button>\n        <ng-template #deSelect>\n          <button  title=\"de-select todo\" (click)=\"toggleChecked(todo.id)\"\n            class=\"card-link btn btn-sm m-1 btn-outline-dark\">\n            <i class=\"nf-fa-check_circle\"></i></button>\n        </ng-template>\n        <button (click)=\"setStar(todo.id)\" title=\"mark as stared\"\n          class=\"card-link btn btn-sm m-1 btn-outline-primary\">\n          <i class=\"nf-fa-star_o\"></i></button>\n        <button (click)=\"hide(todo.id)\" title=\"mark as hidden\"\n          class=\"card-link btn btn-sm m-1 btn-outline-primary\">\n          <i class=\"nf-fa-eye_slash\"></i></button>\n        <button (click)=\"edit(todo.id)\" title=\"edit todo\"\n          class=\"card-link btn btn-sm m-1 btn-outline-secondary\">\n          <i class=\"nf-fa-edit\"></i></button>\n        <button (click)=\"delete(todo.id)\" title=\"delete todo\"\n          class=\"card-link btn btn-sm m-1 btn-outline-danger\">\n          <i class=\"nf-fa-trash\"></i></button>\n      </div>\n    </div>\n  </div>\n  <ng-template #emptyMessage>\n    <div class=\"m-auto text-center\">\n      <i class=\"nf-fa-flushed\"></i>There is nothing to-do<br>\n      <a routerLink=\"/new\"><i class=\"nf-fa-plus\"></i> Add New</a>\n    </div>\n  </ng-template>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/todo-view/todo-view.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/todo-view/todo-view.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"routeGrid\">\n  <div class=\"d-flex flex-row justify-content-center bg-light p-1 actions\">\n    <span class=\"flex-item p-0 m-0\">\n      <button *ngIf=\"!allSelected; else select\" (click)=\"selectAll()\"\n        class=\"btn btn-sm btn-outline-dark m-1\">\n        <i class=\"nf-fa-check\"></i>\n      </button>\n    </span>\n    <ng-template #select>\n      <span class=\"flex-item p-0 m-0\">\n        <button (click)=\"deselectAll()\"\n          class=\"btn btn-sm btn-outline-dark m-1\">\n          <i class=\"nf-fa-check_circle\"></i>\n        </button>\n      </span>\n    </ng-template>\n    <span class=\"flex-item p-0 m-0\">\n      <button (click)=\"starSelected()\" class=\"btn btn-sm btn-outline-dark m-1\">\n        <i class=\"nf-fa-star\"></i>\n      </button>\n    </span>\n    <span class=\"flex-item p-0 m-0\">\n      <button (click)=\"unstarSelected()\" class=\"btn btn-sm btn-outline-dark m-1\">\n        <i class=\"nf-fa-star_o\"></i>\n      </button>\n    </span>\n    <span class=\"flex-item p-0 m-0\">\n      <button (click)=\"hideSelected()\" class=\"btn btn-sm btn-outline-dark m-1\">\n        <i class=\"nf-fa-eye_slash\"></i>\n      </button>\n    </span>\n    <span class=\"flex-item p-0 m-0\">\n      <button (click)=\"deleteSelected()\" class=\"btn btn-sm btn-outline-dark m-1\">\n        <i class=\"nf-fa-trash\"></i>\n      </button>\n    </span>\n    <span *ngIf=\"!ascending; else descending\" class=\"flex-item p-0 m-0\">\n      <button (click)=\"sortAscending()\" class=\"btn btn-sm btn-outline-dark m-1\">\n        <i class=\"nf-mdi-sort_ascending\"></i>\n      </button>\n    </span>\n    <ng-template #descending>\n      <span class=\"flex-item p-0 m-0\">\n        <button (click)=\"sortDescending()\" class=\"btn btn-sm btn-outline-dark m-1\">\n          <i class=\"nf-mdi-sort_descending\"></i>\n        </button>\n      </span>\n    </ng-template>\n  </div>\n\n  <div *ngIf=\"todos.length; else emptyMessage\" class=\"todoView\">\n    <div *ngFor=\"let todo of todos\" [class]=\"classes[todo.id] || todoItemClass\">\n      <div class=\"todoItemText\">\n        <i *ngIf=\"todo.stared\" class=\"nf-fa-star\"></i> {{todo.text}}\n      </div>\n      <div class=\"todoItemInfo\">\n        <span *ngIf=\"todo.updated\"><b>Updated</b>:\n            {{todo.updated.dateString}} - {{todo.updated.timeString}}\n        </span>\n        <span *ngIf=\"!todo.updated\"><b>Created</b>:\n          {{todo.created.dateString}} - {{todo.created.timeString}}\n        </span>\n      </div>\n      <div class=\"todoItemActions\">\n        <button *ngIf=\"!isSelected(todo.id); else deSelect\"\n          (click)=\"toggleChecked(todo.id)\" title=\"select todo\"\n          class=\"card-link btn btn-sm m-1 btn-outline-dark\">\n          <i class=\"nf-fa-check\"></i></button>\n        <ng-template #deSelect>\n          <button  title=\"de-select todo\" (click)=\"toggleChecked(todo.id)\"\n            class=\"card-link btn btn-sm m-1 btn-outline-dark\">\n            <i class=\"nf-fa-check_circle\"></i></button>\n        </ng-template>\n        <button *ngIf=\"todo.stared == true; else star\"\n          (click)=\"unsetStar(todo.id)\" title=\"mark as not stared\"\n          class=\"card-link btn btn-sm m-1 btn-outline-primary\">\n          <i class=\"nf-fa-star_o\"></i></button>\n        <ng-template #star>\n          <button (click)=\"setStar(todo.id)\" title=\"mark as stared\"\n          class=\"card-link btn btn-sm m-1 btn-outline-primary\">\n          <i class=\"nf-fa-star\"></i></button>\n        </ng-template>\n        <button (click)=\"hide(todo.id)\" title=\"mark as hidden\"\n          class=\"card-link btn btn-sm m-1 btn-outline-primary\">\n          <i class=\"nf-fa-eye_slash\"></i></button>\n        <button (click)=\"edit(todo.id)\" title=\"edit todo\"\n          class=\"card-link btn btn-sm m-1 btn-outline-secondary\">\n          <i class=\"nf-fa-edit\"></i></button>\n        <button (click)=\"delete(todo.id)\" title=\"delete todo\"\n          class=\"card-link btn btn-sm m-1 btn-outline-danger\">\n          <i class=\"nf-fa-trash\"></i></button>\n      </div>\n    </div>\n  </div>\n  <ng-template #emptyMessage>\n    <div class=\"m-auto text-center\">\n      <i class=\"nf-fa-flushed\"></i>There is nothing to-do<br>\n      <a routerLink=\"/new\"><i class=\"nf-fa-plus\"></i> Add New</a>\n    </div>\n  </ng-template>\n</div>\n"

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".about {\n  height: 80vh;\n  overflow: auto;\n}\n\n.card {\n  margin: 2vh 2vw 5vh 2vw;\n  overflow: auto;\n}\n\nimg {\n  max-width: 20vw;\n}\n\n@media (min-width: 767px) {\n  .about {\n    display: grid;\n    height: 90vh;\n    grid-template-columns: 5vw 30vw 5vw 30vw 5vw;\n    grid-template-rows: 1vh 80vh 1vh;\n    width: 90vw;\n    padding: 5vh 10vw;\n  }\n\n  #app {\n    grid-area: 2/2/3/3;\n  }\n\n  #developer {\n    grid-area: 2/4/3/5;\n  }\n\n  img {\n    width: 10vw;\n  }\n\n  .about > div {\n    margin-bottom: unset;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsWUFBWTtJQUNaLDRDQUE0QztJQUM1QyxnQ0FBZ0M7SUFDaEMsV0FBVztJQUNYLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLG9CQUFvQjtFQUN0QjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hYm91dCB7XG4gIGhlaWdodDogODB2aDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5jYXJkIHtcbiAgbWFyZ2luOiAydmggMnZ3IDV2aCAydnc7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG5pbWcge1xuICBtYXgtd2lkdGg6IDIwdnc7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjdweCkge1xuICAuYWJvdXQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgaGVpZ2h0OiA5MHZoO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNXZ3IDMwdncgNXZ3IDMwdncgNXZ3O1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMXZoIDgwdmggMXZoO1xuICAgIHdpZHRoOiA5MHZ3O1xuICAgIHBhZGRpbmc6IDV2aCAxMHZ3O1xuICB9XG5cbiAgI2FwcCB7XG4gICAgZ3JpZC1hcmVhOiAyLzIvMy8zO1xuICB9XG5cbiAgI2RldmVsb3BlciB7XG4gICAgZ3JpZC1hcmVhOiAyLzQvMy81O1xuICB9XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogMTB2dztcbiAgfVxuXG4gIC5hYm91dCA+IGRpdiB7XG4gICAgbWFyZ2luLWJvdHRvbTogdW5zZXQ7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/index.js!./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        })
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/actions/actions.component.css":
/*!***********************************************!*\
  !*** ./src/app/actions/actions.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjdGlvbnMvYWN0aW9ucy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/actions/actions.component.ts":
/*!**********************************************!*\
  !*** ./src/app/actions/actions.component.ts ***!
  \**********************************************/
/*! exports provided: ActionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionsComponent", function() { return ActionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ActionsComponent = /** @class */ (function () {
    function ActionsComponent() {
    }
    ActionsComponent.prototype.ngOnInit = function () {
    };
    ActionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-actions',
            template: __webpack_require__(/*! raw-loader!./actions.component.html */ "./node_modules/raw-loader/index.js!./src/app/actions/actions.component.html"),
            styles: [__webpack_require__(/*! ./actions.component.css */ "./src/app/actions/actions.component.css")]
        })
    ], ActionsComponent);
    return ActionsComponent;
}());



/***/ }),

/***/ "./src/app/api.ts":
/*!************************!*\
  !*** ./src/app/api.ts ***!
  \************************/
/*! exports provided: api */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "api", function() { return api; });
var obj = {
    HTTP_STATUS_OK: 200,
    HTTP_STATUS_PROCESSING: 102,
    HTTP_ERROR_BAD_REQUEST: 400,
    HTTP_ERROR_NOT_FOUND: 404,
    HTTP_ERROR_INTERNEL_SERVER: 500,
    Q_RESET: 1050,
    Q_REMAINING: 1051,
    Q_NEXT: 1052,
    Q_ENTRIES: 1053,
    Q_ENTRY: 1054,
    E_UNKNOWN_REQUEST: (-1100),
    E_EMPTY: (-1101),
    E_FILE_SYSTEM: (-1102),
    E_MISSING_UNIQUE_ATTRIBUTE: (-1103),
    R_QUERY_SUCCESS: 1200,
    R_QUERY_FAILURE: (-1200),
    R_ADD_SUCCESS: 1201,
    R_ADD_FAILURE: (-1201),
    R_UPDATE_SUCCESS: 1202,
    R_UPDATE_FAILURE: (-1202),
    R_DELETE_SUCCESS: 1203,
    R_DELETE_FAILURE: (-1203)
};
var api = obj;


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _edit_todo_edit_todo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-todo/edit-todo.component */ "./src/app/edit-todo/edit-todo.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _todo_view_todo_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todo-view/todo-view.component */ "./src/app/todo-view/todo-view.component.ts");
/* harmony import */ var _important_todo_view_important_todo_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./important-todo-view/important-todo-view.component */ "./src/app/important-todo-view/important-todo-view.component.ts");
/* harmony import */ var _new_todo_new_todo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./new-todo/new-todo.component */ "./src/app/new-todo/new-todo.component.ts");
/* harmony import */ var _normal_todo_view_normal_todo_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./normal-todo-view/normal-todo-view.component */ "./src/app/normal-todo-view/normal-todo-view.component.ts");
/* harmony import */ var _hidden_todo_view_hidden_todo_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./hidden-todo-view/hidden-todo-view.component */ "./src/app/hidden-todo-view/hidden-todo-view.component.ts");










var routes = [
    {
        path: '',
        redirectTo: '/all',
        pathMatch: 'full'
    },
    {
        path: 'all',
        component: _todo_view_todo_view_component__WEBPACK_IMPORTED_MODULE_5__["TodoViewComponent"],
    },
    {
        path: 'important',
        component: _important_todo_view_important_todo_view_component__WEBPACK_IMPORTED_MODULE_6__["ImportantTodoViewComponent"]
    },
    {
        path: 'normal',
        component: _normal_todo_view_normal_todo_view_component__WEBPACK_IMPORTED_MODULE_8__["NormalTodoViewComponent"]
    },
    {
        path: 'hidden',
        component: _hidden_todo_view_hidden_todo_view_component__WEBPACK_IMPORTED_MODULE_9__["HiddenTodoViewComponent"]
    },
    {
        path: 'new',
        component: _new_todo_new_todo_component__WEBPACK_IMPORTED_MODULE_7__["NewTodoComponent"]
    },
    {
        path: 'edit/:mainId',
        component: _edit_todo_edit_todo_component__WEBPACK_IMPORTED_MODULE_2__["EditTodoComponent"]
    },
    {
        path: 'about',
        component: _about_about_component__WEBPACK_IMPORTED_MODULE_1__["AboutComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img#about {\n  align-self: center;\n}\n\n/* app grid ***************************************************************** */\n\n.appNav, .appRoutes, .appGrid, .appMessage, .appFooter {\n  margin: 0;\n  padding: 0;\n}\n\n.appGrid {\n  display: grid;\n  grid-template-rows: 10vh 60vh 20vh 10vh;\n  grid-template-columns: 100vw;\n}\n\n.appNav {\n  grid-area: 1/1/2/-1;\n}\n\n.appRoutes {\n  grid-area: 2/1/4/-1;\n}\n\n.appMessage {\n  grid-area: 3/1/-1/-1;\n  overflow: auto;\n}\n\n.appFooter {\n  grid-area: 4/1/-1/-1;\n}\n\n@media (min-width: 767px) {\n  .appGrid {\n    display: grid;\n    grid-template-rows: 10vh 30vh 30vh 20vh 10vh;\n    grid-template-columns: 10vw 58vw 30vw 2vw;\n  }\n\n  .appNav {\n    grid-area: 1/1/-1/2;\n    z-index: 1;\n  }\n\n  .appRoutes {\n    grid-area: 1/2/5/-1;\n    z-index: 1;\n  }\n\n  .appMessage {\n    grid-area: 4/3/5/4;\n    overflow: auto;\n  }\n\n  .appFooter {\n    grid-area: 5/1/-1/-1;\n  }\n}\n\n/* end app grid ************************************************************* */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUEsK0VBQStFOztBQUMvRTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUNBQXVDO0VBQ3ZDLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsNENBQTRDO0lBQzVDLHlDQUF5QztFQUMzQzs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixVQUFVO0VBQ1o7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsVUFBVTtFQUNaOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxvQkFBb0I7RUFDdEI7QUFDRjs7QUFDQSwrRUFBK0UiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyNhYm91dCB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLyogYXBwIGdyaWQgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cbi5hcHBOYXYsIC5hcHBSb3V0ZXMsIC5hcHBHcmlkLCAuYXBwTWVzc2FnZSwgLmFwcEZvb3RlciB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmFwcEdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwdmggNjB2aCAyMHZoIDEwdmg7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwdnc7XG59XG5cbi5hcHBOYXYge1xuICBncmlkLWFyZWE6IDEvMS8yLy0xO1xufVxuXG4uYXBwUm91dGVzIHtcbiAgZ3JpZC1hcmVhOiAyLzEvNC8tMTtcbn1cblxuLmFwcE1lc3NhZ2Uge1xuICBncmlkLWFyZWE6IDMvMS8tMS8tMTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5hcHBGb290ZXIge1xuICBncmlkLWFyZWE6IDQvMS8tMS8tMTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2N3B4KSB7XG4gIC5hcHBHcmlkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTB2aCAzMHZoIDMwdmggMjB2aCAxMHZoO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTB2dyA1OHZ3IDMwdncgMnZ3O1xuICB9XG5cbiAgLmFwcE5hdiB7XG4gICAgZ3JpZC1hcmVhOiAxLzEvLTEvMjtcbiAgICB6LWluZGV4OiAxO1xuICB9XG5cbiAgLmFwcFJvdXRlcyB7XG4gICAgZ3JpZC1hcmVhOiAxLzIvNS8tMTtcbiAgICB6LWluZGV4OiAxO1xuICB9XG5cbiAgLmFwcE1lc3NhZ2Uge1xuICAgIGdyaWQtYXJlYTogNC8zLzUvNDtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgfVxuXG4gIC5hcHBGb290ZXIge1xuICAgIGdyaWQtYXJlYTogNS8xLy0xLy0xO1xuICB9XG59XG4vKiBlbmQgYXBwIGdyaWQgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ngtodo';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _todo_view_todo_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./todo-view/todo-view.component */ "./src/app/todo-view/todo-view.component.ts");
/* harmony import */ var _important_todo_view_important_todo_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./important-todo-view/important-todo-view.component */ "./src/app/important-todo-view/important-todo-view.component.ts");
/* harmony import */ var _new_todo_new_todo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./new-todo/new-todo.component */ "./src/app/new-todo/new-todo.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./message/message.component */ "./src/app/message/message.component.ts");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _normal_todo_view_normal_todo_view_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./normal-todo-view/normal-todo-view.component */ "./src/app/normal-todo-view/normal-todo-view.component.ts");
/* harmony import */ var _hidden_todo_view_hidden_todo_view_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./hidden-todo-view/hidden-todo-view.component */ "./src/app/hidden-todo-view/hidden-todo-view.component.ts");
/* harmony import */ var _edit_todo_edit_todo_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./edit-todo/edit-todo.component */ "./src/app/edit-todo/edit-todo.component.ts");
/* harmony import */ var _actions_actions_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./actions/actions.component */ "./src/app/actions/actions.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
                _todo_view_todo_view_component__WEBPACK_IMPORTED_MODULE_7__["TodoViewComponent"],
                _important_todo_view_important_todo_view_component__WEBPACK_IMPORTED_MODULE_8__["ImportantTodoViewComponent"],
                _new_todo_new_todo_component__WEBPACK_IMPORTED_MODULE_9__["NewTodoComponent"],
                _message_message_component__WEBPACK_IMPORTED_MODULE_11__["MessageComponent"],
                _normal_todo_view_normal_todo_view_component__WEBPACK_IMPORTED_MODULE_13__["NormalTodoViewComponent"],
                _hidden_todo_view_hidden_todo_view_component__WEBPACK_IMPORTED_MODULE_14__["HiddenTodoViewComponent"],
                _edit_todo_edit_todo_component__WEBPACK_IMPORTED_MODULE_15__["EditTodoComponent"],
                _actions_actions_component__WEBPACK_IMPORTED_MODULE_16__["ActionsComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_17__["AboutComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_12__["AngularFontAwesomeModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\n@media (min-width: 767px) {\n  .navbar {\n    flex-direction: column;\n    justify-content: unset;\n    height: 90vh;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRTtJQUNFLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsWUFBWTtFQUNkO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjdweCkge1xuICAubmF2YmFyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogdW5zZXQ7XG4gICAgaGVpZ2h0OiA5MHZoO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/edit-todo/edit-todo.component.css":
/*!***************************************************!*\
  !*** ./src/app/edit-todo/edit-todo.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtdG9kby9lZGl0LXRvZG8uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/edit-todo/edit-todo.component.ts":
/*!**************************************************!*\
  !*** ./src/app/edit-todo/edit-todo.component.ts ***!
  \**************************************************/
/*! exports provided: EditTodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTodoComponent", function() { return EditTodoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _todo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../todo.service */ "./src/app/todo.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../todo */ "./src/app/todo.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var EditTodoComponent = /** @class */ (function () {
    function EditTodoComponent(activatedRoute, todoService, location) {
        this.activatedRoute = activatedRoute;
        this.todoService = todoService;
        this.location = location;
        this.unchanged = true;
    }
    EditTodoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.text = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('');
        this.mainId = Number(this.activatedRoute.snapshot.paramMap.get('mainId'));
        this.todoService.getTodo(this.mainId)
            .subscribe(function (todo) { return _this.originalTodo = todo; });
        this.text.setValue(this.originalTodo.text);
        _todo__WEBPACK_IMPORTED_MODULE_5__["Todo"].copy(this.originalTodo).subscribe(function (todo) { return _this.todo = todo; });
        if (this.todo.updated) {
            this.editLabel = 'Last updated';
            this.dateString = this.todo.updated.dateString;
            this.timeString = this.todo.updated.timeString;
        }
        else {
            this.editLabel = 'Created';
            this.dateString = this.todo.created.dateString;
            this.timeString = this.todo.created.timeString;
        }
        if (this.todo.stared) {
            this.staredClass = 'btn btn-sm btn-light nf-fa-star_o';
            this.staredTitle = 'Mark this unstared!';
        }
        else {
            this.staredClass = 'btn btn-sm btn-light nf-fa-star';
            this.staredTitle = 'Mark this stared!';
        }
        if (this.todo.hidden) {
            this.hiddenClass = 'btn btn-sm btn-light nf-fa-eye';
            this.hiddenTitle = 'Mark this not hidden!';
        }
        else {
            this.hiddenClass = 'btn btn-sm btn-light nf-fa-eye_slash';
            this.hiddenTitle = 'Mark this hidden!';
        }
    };
    EditTodoComponent.prototype.toggleStared = function () {
        // tslint:disable-next-line: triple-equals
        if (this.todo.stared == true) {
            this.staredClass = 'btn btn-sm btn-light nf-fa-star';
            this.todo.stared = false;
        }
        else {
            this.staredClass = 'btn btn-sm btn-light nf-fa-star_o';
            this.todo.stared = true;
        }
        // tslint:disable-next-line: triple-equals
        this.unchanged = this.ifUnChanged();
    };
    EditTodoComponent.prototype.toggleHidden = function () {
        // tslint:disable-next-line: triple-equals
        if (this.todo.hidden == true) {
            this.hiddenClass = 'btn btn-sm btn-light nf-fa-eye_slash';
            this.todo.hidden = false;
        }
        else {
            this.hiddenClass = 'btn btn-sm btn-light nf-fa-eye';
            this.todo.hidden = true;
        }
        // tslint:disable-next-line: triple-equals
        this.unchanged = this.ifUnChanged();
    };
    EditTodoComponent.prototype.goBack = function () {
        this.location.back();
    };
    EditTodoComponent.prototype.clearText = function () {
        this.text = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('');
        // tslint:disable-next-line: triple-equals
        this.unchanged = this.ifUnChanged();
    };
    EditTodoComponent.prototype.saveTemporary = function () {
        this.todo.text = this.text.value;
        // tslint:disable-next-line: triple-equals
        this.unchanged = this.ifUnChanged();
    };
    EditTodoComponent.prototype.updateTodo = function () {
        if (!this.unchanged) {
            this.todoService.update(this.todo);
            this.location.back();
        }
    };
    EditTodoComponent.prototype.ifUnChanged = function () {
        // tslint:disable-next-line: triple-equals
        return this.todo.hidden == this.originalTodo.hidden &&
            // tslint:disable-next-line: triple-equals
            this.todo.stared == this.originalTodo.stared &&
            // tslint:disable-next-line: triple-equals
            this.todo.text == this.originalTodo.text;
    };
    EditTodoComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _todo_service__WEBPACK_IMPORTED_MODULE_3__["TodoService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
    ]; };
    EditTodoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-edit-todo',
            template: __webpack_require__(/*! raw-loader!./edit-todo.component.html */ "./node_modules/raw-loader/index.js!./src/app/edit-todo/edit-todo.component.html"),
            styles: [__webpack_require__(/*! ./edit-todo.component.css */ "./src/app/edit-todo/edit-todo.component.css")]
        })
    ], EditTodoComponent);
    return EditTodoComponent;
}());



/***/ }),

/***/ "./src/app/hidden-todo-view/hidden-todo-view.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/hidden-todo-view/hidden-todo-view.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n    width: 96%;\n    margin: 2%;\n    border-radius: 0%;\n}\n\ndiv.options {\n    margin: 0%;\n    width: 100%;\n}\n\n#todoView {\n  counter-reset: todo;\n}\n\n.counter::after {\n  counter-increment: todo;\n  content: \" \" counter(todo) \" - \"\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGlkZGVuLXRvZG8tdmlldy9oaWRkZW4tdG9kby12aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hpZGRlbi10b2RvLXZpZXcvaGlkZGVuLXRvZG8tdmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcbiAgICB3aWR0aDogOTYlO1xuICAgIG1hcmdpbjogMiU7XG4gICAgYm9yZGVyLXJhZGl1czogMCU7XG59XG5cbmRpdi5vcHRpb25zIHtcbiAgICBtYXJnaW46IDAlO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4jdG9kb1ZpZXcge1xuICBjb3VudGVyLXJlc2V0OiB0b2RvO1xufVxuXG4uY291bnRlcjo6YWZ0ZXIge1xuICBjb3VudGVyLWluY3JlbWVudDogdG9kbztcbiAgY29udGVudDogXCIgXCIgY291bnRlcih0b2RvKSBcIiAtIFwiXG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/hidden-todo-view/hidden-todo-view.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/hidden-todo-view/hidden-todo-view.component.ts ***!
  \****************************************************************/
/*! exports provided: HiddenTodoViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HiddenTodoViewComponent", function() { return HiddenTodoViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../todo.service */ "./src/app/todo.service.ts");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../message.service */ "./src/app/message.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../message */ "./src/app/message.ts");






var HiddenTodoViewComponent = /** @class */ (function () {
    function HiddenTodoViewComponent(todoService, messageService, route, router) {
        this.todoService = todoService;
        this.messageService = messageService;
        this.route = route;
        this.router = router;
        this.importantMarkClass = 'text-primary nf-fa-star';
    }
    HiddenTodoViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.todoService.getHiddenTodos().subscribe(function (todos) { return (_this.todos = todos); });
        this.sortDescending();
        this.ascending = false;
        this.todoItemClass = 'todoItem';
        this.selected = [];
        this.classes = [];
    };
    HiddenTodoViewComponent.prototype.delete = function (id) {
        this.todoService.delete([id]);
    };
    HiddenTodoViewComponent.prototype.deleteSelected = function () {
        var _this = this;
        if (this.selected.length) {
            var confirm_1 = window.confirm('Do you really want to delete selected items?');
            if (confirm_1) {
                this.todoService.delete(this.selected, function (err) {
                    if (!err) {
                        _this.deselectAll();
                    }
                });
            }
        }
        else {
            this.messageService.addToast(new _message__WEBPACK_IMPORTED_MODULE_5__["Message"]('Please select one or more items!'));
        }
    };
    HiddenTodoViewComponent.prototype.deselectAll = function () {
        var e_1, _a;
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.todos), _c = _b.next(); !_c.done; _c = _b.next()) {
                var todo = _c.value;
                var index = this.selected.indexOf(todo.id);
                if (index !== -1) {
                    this.selected.splice(index, 1);
                    this.classes[todo.id] = 'todoItem';
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.allSelected = false;
    };
    HiddenTodoViewComponent.prototype.edit = function (todoId) {
        this.router.navigateByUrl('edit/' + todoId);
    };
    HiddenTodoViewComponent.prototype.isSelected = function (id) {
        var index = this.selected.indexOf(id);
        return index !== -1;
    };
    HiddenTodoViewComponent.prototype.selectAll = function () {
        var e_2, _a;
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.todos), _c = _b.next(); !_c.done; _c = _b.next()) {
                var todo = _c.value;
                var index = this.selected.indexOf(todo.id);
                if (index === -1) {
                    this.selected.push(todo.id);
                    this.classes[todo.id] = 'todoItem bg-selected';
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        this.allSelected = true;
    };
    HiddenTodoViewComponent.prototype.setStar = function (id) {
        this.todoService.setStar([id], true);
    };
    /* sort items ascending */
    HiddenTodoViewComponent.prototype.sortAscending = function () {
        this.todos = this.todos.sort(function (t1, t2) {
            return _todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"].older(t1, t2);
        });
        this.ascending = true;
    };
    /* sort items descending */
    HiddenTodoViewComponent.prototype.sortDescending = function () {
        this.todos = this.todos.sort(function (t1, t2) {
            return _todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"].newer(t1, t2);
        });
        this.ascending = false;
    };
    HiddenTodoViewComponent.prototype.starSelected = function () {
        var _this = this;
        if (this.selected.length) {
            this.todoService.setStar(this.selected, true, function (err) {
                if (!err) {
                    _this.deselectAll();
                }
            });
        }
        else {
            this.messageService.addToast(new _message__WEBPACK_IMPORTED_MODULE_5__["Message"]('Please select one or more items!'));
        }
    };
    HiddenTodoViewComponent.prototype.toggleChecked = function (id) {
        var index = this.selected.indexOf(id);
        if (index > -1) {
            this.selected.splice(index, 1);
            this.classes[id] = 'todoItem';
        }
        else {
            this.selected.push(id);
            this.classes[id] = 'todoItem bg-selected';
        }
    };
    HiddenTodoViewComponent.prototype.unhide = function (id) {
        this.todoService.setHidden([id], false);
    };
    HiddenTodoViewComponent.prototype.unhideSelected = function () {
        var _this = this;
        if (this.selected.length) {
            this.todoService.setHidden(this.selected, false, function (err) {
                if (!err) {
                    _this.deselectAll();
                }
            });
            this.selected = [];
        }
        else {
            this.messageService.addToast(new _message__WEBPACK_IMPORTED_MODULE_5__["Message"]('Please select one or more items!'));
        }
    };
    HiddenTodoViewComponent.prototype.unsetStar = function (id) {
        this.todoService.setStar([id], false);
    };
    HiddenTodoViewComponent.prototype.unstarSelected = function () {
        var _this = this;
        if (this.selected.length) {
            this.todoService.setStar(this.selected, false, function (err) {
                if (!err) {
                    _this.deselectAll();
                }
            });
            this.selected = [];
        }
        else {
            this.messageService.addToast(new _message__WEBPACK_IMPORTED_MODULE_5__["Message"]('Please select one or more items!'));
        }
    };
    HiddenTodoViewComponent.ctorParameters = function () { return [
        { type: _todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"] },
        { type: _message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    HiddenTodoViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hidden-todo-view',
            template: __webpack_require__(/*! raw-loader!./hidden-todo-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/hidden-todo-view/hidden-todo-view.component.html"),
            styles: [__webpack_require__(/*! ./hidden-todo-view.component.css */ "./src/app/hidden-todo-view/hidden-todo-view.component.css")]
        })
    ], HiddenTodoViewComponent);
    return HiddenTodoViewComponent;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api */ "./src/app/api.ts");





var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
    }
    HttpService_1 = HttpService;
    HttpService.prototype.add = function (todo) {
        return this.http.post(HttpService_1.serverUrl, todo);
    };
    HttpService.prototype.delete = function (ids) {
        function internelDelete(observer) {
            var e_1, _a;
            var count = 0;
            try {
                for (var ids_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](ids), ids_1_1 = ids_1.next(); !ids_1_1.done; ids_1_1 = ids_1.next()) {
                    var id = ids_1_1.value;
                    this.http.delete(HttpService_1.serverUrl, {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                            id: String(id)
                        })
                    })
                        .subscribe(function (success) {
                        observer.next(success);
                        if (++count === ids.length) {
                            observer.complete();
                        }
                    }, function (error) {
                        observer.error(error);
                    });
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (ids_1_1 && !ids_1_1.done && (_a = ids_1.return)) _a.call(ids_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        /* end internelDelete() */
        var producer = internelDelete.bind(this);
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](producer);
    };
    HttpService.prototype.fetch = function () {
        function internelFetch(observer) {
            var _this = this;
            this.http.get(HttpService_1.serverUrl, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    req_code: String(_api__WEBPACK_IMPORTED_MODULE_4__["api"].Q_RESET)
                })
            })
                .subscribe(function (success) {
                _this.http.get(HttpService_1.serverUrl, {
                    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                        req_code: String(_api__WEBPACK_IMPORTED_MODULE_4__["api"].Q_ENTRIES)
                    })
                })
                    .subscribe(function (success1) {
                    var e_2, _a;
                    var entries = JSON.parse(success1.data);
                    try {
                        for (var entries_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](entries), entries_1_1 = entries_1.next(); !entries_1_1.done; entries_1_1 = entries_1.next()) {
                            var entry = entries_1_1.value;
                            _this.http.get(HttpService_1.serverUrl, {
                                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                                    req_code: String(_api__WEBPACK_IMPORTED_MODULE_4__["api"].Q_ENTRY),
                                    id: entry
                                })
                            })
                                .subscribe(function (success2) {
                                observer.next(success2);
                            }, function (error2) {
                                observer.error(error2);
                            });
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (entries_1_1 && !entries_1_1.done && (_a = entries_1.return)) _a.call(entries_1);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }, function (error1) {
                    observer.error(error1);
                });
            }, function (error) {
                observer.error(error);
            });
        }
        /* end internelFetch() */
        var producer = internelFetch.bind(this);
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](producer);
    };
    HttpService.prototype.update = function (todos) {
        function internelUpdate(observer) {
            var e_3, _a;
            var count = 0;
            try {
                for (var todos_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](todos), todos_1_1 = todos_1.next(); !todos_1_1.done; todos_1_1 = todos_1.next()) {
                    var todo = todos_1_1.value;
                    this.http.put(HttpService_1.serverUrl, todo)
                        .subscribe(function (success) {
                        observer.next(success);
                        if (++count === todos.length) {
                            observer.complete();
                        }
                    }, function (error) {
                        observer.error(error);
                    });
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (todos_1_1 && !todos_1_1.done && (_a = todos_1.return)) _a.call(todos_1);
                }
                finally { if (e_3) throw e_3.error; }
            }
        }
        var producer = internelUpdate.bind(this);
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](producer);
    };
    var HttpService_1;
    HttpService.serverUrl = 'http://127.0.0.1:3000/todos';
    HttpService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    HttpService = HttpService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/id-generator.service.ts":
/*!*****************************************!*\
  !*** ./src/app/id-generator.service.ts ***!
  \*****************************************/
/*! exports provided: IdGeneratorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdGeneratorService", function() { return IdGeneratorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IdGeneratorService = /** @class */ (function () {
    function IdGeneratorService() {
        this.generatedIds = [];
    }
    IdGeneratorService.prototype.getId = function () {
        var id = '';
        do {
            id = '_' + Math.random().toString(36).substr(2, 9);
        } while (this.generatedIds.includes(id));
        this.generatedIds.push(id);
        return id;
    };
    IdGeneratorService.prototype.clearIds = function () {
        this.generatedIds = [];
    };
    IdGeneratorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], IdGeneratorService);
    return IdGeneratorService;
}());



/***/ }),

/***/ "./src/app/important-todo-view/important-todo-view.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/important-todo-view/important-todo-view.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n    width: 96%;\n    margin: 2%;\n    border-radius: 0%;\n}\n\ndiv.options {\n    margin: 0%;\n    width: 100%;\n}\n\n#todoView {\n  counter-reset: todo;\n}\n\n.card-title span::after {\n  counter-increment: todo;\n  content: \" \" counter(todo) \" - \"\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW1wb3J0YW50LXRvZG8tdmlldy9pbXBvcnRhbnQtdG9kby12aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2ltcG9ydGFudC10b2RvLXZpZXcvaW1wb3J0YW50LXRvZG8tdmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcbiAgICB3aWR0aDogOTYlO1xuICAgIG1hcmdpbjogMiU7XG4gICAgYm9yZGVyLXJhZGl1czogMCU7XG59XG5cbmRpdi5vcHRpb25zIHtcbiAgICBtYXJnaW46IDAlO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4jdG9kb1ZpZXcge1xuICBjb3VudGVyLXJlc2V0OiB0b2RvO1xufVxuXG4uY2FyZC10aXRsZSBzcGFuOjphZnRlciB7XG4gIGNvdW50ZXItaW5jcmVtZW50OiB0b2RvO1xuICBjb250ZW50OiBcIiBcIiBjb3VudGVyKHRvZG8pIFwiIC0gXCJcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/important-todo-view/important-todo-view.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/important-todo-view/important-todo-view.component.ts ***!
  \**********************************************************************/
/*! exports provided: ImportantTodoViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportantTodoViewComponent", function() { return ImportantTodoViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../todo.service */ "./src/app/todo.service.ts");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../message.service */ "./src/app/message.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../message */ "./src/app/message.ts");






var ImportantTodoViewComponent = /** @class */ (function () {
    function ImportantTodoViewComponent(todoService, messageService, route, router) {
        this.todoService = todoService;
        this.messageService = messageService;
        this.route = route;
        this.router = router;
        this.todoItemClass = 'todoItem';
        this.todoItemClass = 'todoItem';
        this.selected = [];
        this.classes = [];
    }
    ImportantTodoViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.todoService
            .getStaredTodos()
            .subscribe(function (todos) { return (_this.todos = todos); });
        this.sortDescending();
        this.ascending = false;
    };
    ImportantTodoViewComponent.prototype.delete = function (id) {
        this.todoService.delete([id]);
    };
    ImportantTodoViewComponent.prototype.deleteSelected = function () {
        var _this = this;
        if (this.selected.length) {
            var confirm_1 = window.confirm('Do you really want to delete selected items?');
            if (confirm_1) {
                this.todoService.delete(this.selected, function (err) {
                    if (!err) {
                        _this.deselectAll();
                    }
                });
            }
        }
        else {
            this.messageService.addToast(new _message__WEBPACK_IMPORTED_MODULE_5__["Message"]('Please select one or more items!'));
        }
    };
    ImportantTodoViewComponent.prototype.deselectAll = function () {
        var e_1, _a;
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.todos), _c = _b.next(); !_c.done; _c = _b.next()) {
                var todo = _c.value;
                var index = this.selected.indexOf(todo.id);
                if (index !== -1) {
                    this.selected.splice(index, 1);
                    this.classes[todo.id] = 'todoItem';
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.allSelected = false;
    };
    ImportantTodoViewComponent.prototype.edit = function (todoId) {
        this.router.navigateByUrl('edit/' + todoId);
    };
    ImportantTodoViewComponent.prototype.hide = function (id) {
        this.todoService.setHidden([id], true);
    };
    ImportantTodoViewComponent.prototype.hideSelected = function () {
        var _this = this;
        if (this.selected.length) {
            this.todoService.setHidden(this.selected, true, function (err) {
                if (!err) {
                    _this.deselectAll();
                }
            });
            this.selected = [];
        }
        else {
            this.messageService.addToast(new _message__WEBPACK_IMPORTED_MODULE_5__["Message"]('Please select one or more items!'));
        }
    };
    ImportantTodoViewComponent.prototype.isSelected = function (id) {
        var index = this.selected.indexOf(id);
        return index !== -1;
    };
    ImportantTodoViewComponent.prototype.selectAll = function () {
        var e_2, _a;
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.todos), _c = _b.next(); !_c.done; _c = _b.next()) {
                var todo = _c.value;
                var index = this.selected.indexOf(todo.id);
                if (index === -1) {
                    this.selected.push(todo.id);
                    this.classes[todo.id] = 'todoItem bg-selected';
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        this.allSelected = true;
    };
    /* sort items ascending */
    ImportantTodoViewComponent.prototype.sortAscending = function () {
        this.todos = this.todos.sort(function (t1, t2) {
            return _todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"].older(t1, t2);
        });
        this.ascending = true;
    };
    /* sort items descending */
    ImportantTodoViewComponent.prototype.sortDescending = function () {
        this.todos = this.todos.sort(function (t1, t2) {
            return _todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"].newer(t1, t2);
        });
        this.ascending = false;
    };
    ImportantTodoViewComponent.prototype.toggleChecked = function (id) {
        var index = this.selected.indexOf(id);
        if (index > -1) {
            this.selected.splice(index, 1);
            this.classes[id] = 'todoItem';
        }
        else {
            this.selected.push(id);
            this.classes[id] = 'todoItem bg-selected';
        }
    };
    ImportantTodoViewComponent.prototype.unsetStar = function (id) {
        this.todoService.setStar([id], false);
    };
    ImportantTodoViewComponent.prototype.unstarSelected = function () {
        var _this = this;
        if (this.selected.length) {
            this.todoService.setStar(this.selected, false, function (err) {
                if (!err) {
                    _this.deselectAll();
                }
            });
            this.selected = [];
        }
        else {
            this.messageService.addToast(new _message__WEBPACK_IMPORTED_MODULE_5__["Message"]('Please select one or more items!'));
        }
    };
    ImportantTodoViewComponent.ctorParameters = function () { return [
        { type: _todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"] },
        { type: _message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    ImportantTodoViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-important-todo-view',
            template: __webpack_require__(/*! raw-loader!./important-todo-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/important-todo-view/important-todo-view.component.html"),
            styles: [__webpack_require__(/*! ./important-todo-view.component.css */ "./src/app/important-todo-view/important-todo-view.component.css")]
        })
    ], ImportantTodoViewComponent);
    return ImportantTodoViewComponent;
}());



/***/ }),

/***/ "./src/app/message.service.ts":
/*!************************************!*\
  !*** ./src/app/message.service.ts ***!
  \************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _id_generator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./id-generator.service */ "./src/app/id-generator.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messages = [];
        this.idGenerator = new _id_generator_service__WEBPACK_IMPORTED_MODULE_1__["IdGeneratorService"]();
    }
    /* add a message lasting for 10 seconds */
    MessageService.prototype.add = function (msg) {
        var _this = this;
        var id = this.addSelf(msg);
        setTimeout(function () { return _this.remove(id); }, 10000);
    };
    /* add a message lasting for 3 seconds */
    MessageService.prototype.addToast = function (msg) {
        var _this = this;
        var id = this.addSelf(msg);
        setTimeout(function () { return _this.remove(id); }, 3000);
    };
    /* explicitly remove all messages! */
    MessageService.prototype.clear = function () {
        this.messages = [];
        this.idGenerator.clearIds();
    };
    /* retrive messages */
    MessageService.prototype.getMessages = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.messages);
    };
    /* explicitly remove a message! */
    MessageService.prototype.remove = function (id) {
        var index = this.messages.findIndex(function (m) {
            return m.id === id;
        });
        if (index > -1) {
            this.messages.splice(index, 1);
        }
    };
    MessageService.prototype.addSelf = function (msg) {
        msg.id = this.idGenerator.getId();
        this.messages.push(msg);
        return msg.id;
    };
    MessageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        })
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/message.ts":
/*!****************************!*\
  !*** ./src/app/message.ts ***!
  \****************************/
/*! exports provided: Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
var Message = /** @class */ (function () {
    function Message(message) {
        this.message = message;
    }
    Message.ctorParameters = function () { return [
        { type: String }
    ]; };
    return Message;
}());



/***/ }),

/***/ "./src/app/message/message.component.css":
/*!***********************************************!*\
  !*** ./src/app/message/message.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".messageComponent {\n  background-color: black;\n  border: none;\n  display: flex;\n  flex-direction: column;\n  height: 30vh;\n  padding: 1vh 1vw;\n  width: 100vw;\n}\n\n.message {\n  border: none;\n  display: grid;\n  grid-template-columns: 5vw 85vw 5vw 5vw;\n  grid-template-rows: 5vh;\n  margin-bottom: 1vh;\n  width: 100vw;\n  z-index: 100;\n}\n\n.message .messageText {\n  grid-area: 1/2/-1/3;\n  padding: 0.1fr;\n}\n\n.message .messageClose {\n  grid-area: 1/3/-1/4;\n  padding: 0.1fr;\n}\n\n@media (min-width: 767px) {\n  .message {\n    width: unset;\n    border: none;\n    display: grid;\n    grid-template-columns: 25vw 5vw;\n    grid-template-rows: 5vh;\n    width: 30vw;\n  }\n\n  .message .messageText {\n    grid-area: 1/1/-1/2;\n    padding: 0.1fr;\n  }\n\n  .message .messageClose {\n    grid-area: 1/2/-1/-1;\n    padding: 0.1fr;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZS9tZXNzYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHVDQUF1QztFQUN2Qyx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0IsdUJBQXVCO0lBQ3ZCLFdBQVc7RUFDYjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixjQUFjO0VBQ2hCOztFQUVBO0lBQ0Usb0JBQW9CO0lBQ3BCLGNBQWM7RUFDaEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2UvbWVzc2FnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lc3NhZ2VDb21wb25lbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgYm9yZGVyOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDMwdmg7XG4gIHBhZGRpbmc6IDF2aCAxdnc7XG4gIHdpZHRoOiAxMDB2dztcbn1cblxuLm1lc3NhZ2Uge1xuICBib3JkZXI6IG5vbmU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNXZ3IDg1dncgNXZ3IDV2dztcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1dmg7XG4gIG1hcmdpbi1ib3R0b206IDF2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICB6LWluZGV4OiAxMDA7XG59XG5cbi5tZXNzYWdlIC5tZXNzYWdlVGV4dCB7XG4gIGdyaWQtYXJlYTogMS8yLy0xLzM7XG4gIHBhZGRpbmc6IDAuMWZyO1xufVxuXG4ubWVzc2FnZSAubWVzc2FnZUNsb3NlIHtcbiAgZ3JpZC1hcmVhOiAxLzMvLTEvNDtcbiAgcGFkZGluZzogMC4xZnI7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjdweCkge1xuICAubWVzc2FnZSB7XG4gICAgd2lkdGg6IHVuc2V0O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjV2dyA1dnc7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1dmg7XG4gICAgd2lkdGg6IDMwdnc7XG4gIH1cblxuICAubWVzc2FnZSAubWVzc2FnZVRleHQge1xuICAgIGdyaWQtYXJlYTogMS8xLy0xLzI7XG4gICAgcGFkZGluZzogMC4xZnI7XG4gIH1cblxuICAubWVzc2FnZSAubWVzc2FnZUNsb3NlIHtcbiAgICBncmlkLWFyZWE6IDEvMi8tMS8tMTtcbiAgICBwYWRkaW5nOiAwLjFmcjtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/message/message.component.ts":
/*!**********************************************!*\
  !*** ./src/app/message/message.component.ts ***!
  \**********************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../message.service */ "./src/app/message.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var MessageComponent = /** @class */ (function () {
    function MessageComponent(messageService) {
        this.messageService = messageService;
        this.messages = [];
    }
    MessageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messageService.getMessages().subscribe(function (msgs) { return _this.messages = msgs; });
    };
    MessageComponent.prototype.remove = function (id) {
        this.messageService.remove(id);
    };
    MessageComponent.ctorParameters = function () { return [
        { type: _message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"] }
    ]; };
    MessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-message',
            template: __webpack_require__(/*! raw-loader!./message.component.html */ "./node_modules/raw-loader/index.js!./src/app/message/message.component.html"),
            styles: [__webpack_require__(/*! ./message.component.css */ "./src/app/message/message.component.css")]
        })
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "./src/app/new-todo/new-todo.component.css":
/*!*************************************************!*\
  !*** ./src/app/new-todo/new-todo.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#todoText {\n    width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LXRvZG8vbmV3LXRvZG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL25ldy10b2RvL25ldy10b2RvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdG9kb1RleHQge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/new-todo/new-todo.component.ts":
/*!************************************************!*\
  !*** ./src/app/new-todo/new-todo.component.ts ***!
  \************************************************/
/*! exports provided: NewTodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewTodoComponent", function() { return NewTodoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../todo */ "./src/app/todo.ts");
/* harmony import */ var _todo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../todo.service */ "./src/app/todo.service.ts");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../message.service */ "./src/app/message.service.ts");








var NewTodoComponent = /** @class */ (function () {
    function NewTodoComponent(todoService, messageService, location, router) {
        this.todoService = todoService;
        this.messageService = messageService;
        this.location = location;
        this.router = router;
    }
    NewTodoComponent.prototype.ngOnInit = function () {
        this.todo = new _todo__WEBPACK_IMPORTED_MODULE_5__["Todo"]('');
        this.text = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
        this.staredClass = 'btn btn-sm btn-light nf-fa-star_o';
        this.hiddenClass = 'btn btn-sm btn-light nf-fa-eye';
        this.todo.stared = false;
        this.todo.hidden = false;
        this.todo.updated = null;
    };
    NewTodoComponent.prototype.toggleStared = function () {
        // tslint:disable-next-line: triple-equals
        if (this.todo.stared == true) {
            this.staredClass = 'btn btn-sm btn-light nf-fa-star_o';
            this.todo.stared = false;
        }
        else {
            this.staredClass = 'btn btn-sm btn-light nf-fa-star';
            this.todo.stared = true;
        }
    };
    NewTodoComponent.prototype.toggleHidden = function () {
        // tslint:disable-next-line: triple-equals
        if (this.todo.hidden == true) {
            this.hiddenClass = 'btn btn-sm btn-light nf-fa-eye';
            this.todo.hidden = false;
        }
        else {
            this.hiddenClass = 'btn btn-sm btn-light nf-fa-eye_slash';
            this.todo.hidden = true;
        }
    };
    NewTodoComponent.prototype.goBack = function () {
        this.location.back();
    };
    NewTodoComponent.prototype.clearText = function () {
        this.text = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
    };
    NewTodoComponent.prototype.saveTodo = function () {
        this.todo.text = this.text.value;
        this.todoService.add(this.todo);
        if (this.todo.hidden) {
            this.router.navigateByUrl('hidden');
        }
        else {
            if (this.todo.stared) {
                this.router.navigateByUrl('important');
            }
            else {
                this.router.navigateByUrl('normal');
            }
        }
    };
    NewTodoComponent.ctorParameters = function () { return [
        { type: _todo_service__WEBPACK_IMPORTED_MODULE_6__["TodoService"] },
        { type: _message_service__WEBPACK_IMPORTED_MODULE_7__["MessageService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    NewTodoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-new-todo',
            template: __webpack_require__(/*! raw-loader!./new-todo.component.html */ "./node_modules/raw-loader/index.js!./src/app/new-todo/new-todo.component.html"),
            styles: [__webpack_require__(/*! ./new-todo.component.css */ "./src/app/new-todo/new-todo.component.css")]
        })
    ], NewTodoComponent);
    return NewTodoComponent;
}());



/***/ }),

/***/ "./src/app/normal-todo-view/normal-todo-view.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/normal-todo-view/normal-todo-view.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n    width: 96%;\n    margin: 2%;\n    border-radius: 0%;\n}\n\ndiv.options {\n    margin: 0%;\n    width: 100%;\n}\n\n#todoView {\n  counter-reset: todo;\n}\n\n.card-title span.counter::before {\n  counter-increment: todo;\n  content: \" \" counter(todo) \" - \"\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm9ybWFsLXRvZG8tdmlldy9ub3JtYWwtdG9kby12aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL25vcm1hbC10b2RvLXZpZXcvbm9ybWFsLXRvZG8tdmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcbiAgICB3aWR0aDogOTYlO1xuICAgIG1hcmdpbjogMiU7XG4gICAgYm9yZGVyLXJhZGl1czogMCU7XG59XG5cbmRpdi5vcHRpb25zIHtcbiAgICBtYXJnaW46IDAlO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4jdG9kb1ZpZXcge1xuICBjb3VudGVyLXJlc2V0OiB0b2RvO1xufVxuXG4uY2FyZC10aXRsZSBzcGFuLmNvdW50ZXI6OmJlZm9yZSB7XG4gIGNvdW50ZXItaW5jcmVtZW50OiB0b2RvO1xuICBjb250ZW50OiBcIiBcIiBjb3VudGVyKHRvZG8pIFwiIC0gXCJcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/normal-todo-view/normal-todo-view.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/normal-todo-view/normal-todo-view.component.ts ***!
  \****************************************************************/
/*! exports provided: NormalTodoViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NormalTodoViewComponent", function() { return NormalTodoViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../todo.service */ "./src/app/todo.service.ts");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../message.service */ "./src/app/message.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../message */ "./src/app/message.ts");






var NormalTodoViewComponent = /** @class */ (function () {
    function NormalTodoViewComponent(todoService, messageService, route, router) {
        this.todoService = todoService;
        this.messageService = messageService;
        this.route = route;
        this.router = router;
        this.checkedTodos = [];
        this.todoItemClass = 'todoItem';
        this.selected = [];
        this.classes = [];
    }
    NormalTodoViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.todoService.getUnstaredTodos().subscribe(function (todos) { return (_this.todos = todos); });
        this.sortDescending();
        this.ascending = false;
    };
    NormalTodoViewComponent.prototype.delete = function (id) {
        this.todoService.delete([id]);
    };
    NormalTodoViewComponent.prototype.deleteSelected = function () {
        var _this = this;
        if (this.selected.length) {
            var confirm_1 = window.confirm('Do you really want to delete selected items?');
            if (confirm_1) {
                this.todoService.delete(this.selected, function (err) {
                    if (!err) {
                        _this.deselectAll();
                    }
                });
            }
        }
        else {
            this.messageService.addToast(new _message__WEBPACK_IMPORTED_MODULE_5__["Message"]('Please select one or more items!'));
        }
    };
    NormalTodoViewComponent.prototype.deselectAll = function () {
        var e_1, _a;
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.todos), _c = _b.next(); !_c.done; _c = _b.next()) {
                var todo = _c.value;
                var index = this.selected.indexOf(todo.id);
                if (index !== -1) {
                    this.selected.splice(index, 1);
                    this.classes[todo.id] = 'todoItem';
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.allSelected = false;
    };
    NormalTodoViewComponent.prototype.edit = function (todoId) {
        this.router.navigateByUrl('edit/' + todoId);
    };
    NormalTodoViewComponent.prototype.hide = function (id) {
        this.todoService.setHidden([id], true);
        this.ngOnInit();
    };
    NormalTodoViewComponent.prototype.hideSelected = function () {
        var _this = this;
        if (this.selected.length) {
            this.todoService.setHidden(this.selected, true, function (err) {
                if (!err) {
                    _this.deselectAll();
                }
            });
        }
        else {
            this.messageService.addToast(new _message__WEBPACK_IMPORTED_MODULE_5__["Message"]('Please select one or more items!'));
        }
    };
    NormalTodoViewComponent.prototype.isSelected = function (id) {
        var index = this.selected.indexOf(id);
        return index !== -1;
    };
    NormalTodoViewComponent.prototype.selectAll = function () {
        var e_2, _a;
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.todos), _c = _b.next(); !_c.done; _c = _b.next()) {
                var todo = _c.value;
                var index = this.selected.indexOf(todo.id);
                if (index === -1) {
                    this.selected.push(todo.id);
                    this.classes[todo.id] = 'todoItem bg-selected';
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        this.allSelected = true;
    };
    NormalTodoViewComponent.prototype.setStar = function (id) {
        this.todoService.setStar([id], true);
        this.messageService.addToast(new _message__WEBPACK_IMPORTED_MODULE_5__["Message"]("Todo has been moved to 'Stared Todos'"));
        this.ngOnInit();
    };
    /* sort items ascending */
    NormalTodoViewComponent.prototype.sortAscending = function () {
        this.todos = this.todos.sort(function (t1, t2) {
            return _todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"].older(t1, t2);
        });
        this.ascending = true;
    };
    /* sort items descending */
    NormalTodoViewComponent.prototype.sortDescending = function () {
        this.todos = this.todos.sort(function (t1, t2) {
            return _todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"].newer(t1, t2);
        });
        this.ascending = false;
    };
    NormalTodoViewComponent.prototype.starSelected = function () {
        var _this = this;
        if (this.selected.length) {
            this.todoService.setStar(this.selected, true, function (err) {
                if (!err) {
                    _this.deselectAll();
                }
            });
        }
        else {
            this.messageService.addToast(new _message__WEBPACK_IMPORTED_MODULE_5__["Message"]('Please select one or more items!'));
        }
    };
    NormalTodoViewComponent.prototype.toggleChecked = function (id) {
        var index = this.selected.indexOf(id);
        if (index > -1) {
            this.selected.splice(index, 1);
            this.classes[id] = 'todoItem';
        }
        else {
            this.selected.push(id);
            this.classes[id] = 'todoItem bg-selected';
        }
    };
    NormalTodoViewComponent.ctorParameters = function () { return [
        { type: _todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"] },
        { type: _message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    NormalTodoViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-normal-todo-view',
            template: __webpack_require__(/*! raw-loader!./normal-todo-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/normal-todo-view/normal-todo-view.component.html"),
            styles: [__webpack_require__(/*! ./normal-todo-view.component.css */ "./src/app/normal-todo-view/normal-todo-view.component.css")]
        })
    ], NormalTodoViewComponent);
    return NormalTodoViewComponent;
}());



/***/ }),

/***/ "./src/app/partial-error.ts":
/*!**********************************!*\
  !*** ./src/app/partial-error.ts ***!
  \**********************************/
/*! exports provided: PartialError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartialError", function() { return PartialError; });
var PartialError = /** @class */ (function () {
    function PartialError() {
    }
    return PartialError;
}());



/***/ }),

/***/ "./src/app/server-responce-message-handler.service.ts":
/*!************************************************************!*\
  !*** ./src/app/server-responce-message-handler.service.ts ***!
  \************************************************************/
/*! exports provided: RequestTypes, ServerResponceMessageHandlerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestTypes", function() { return RequestTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerResponceMessageHandlerService", function() { return ServerResponceMessageHandlerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _partial_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./partial-error */ "./src/app/partial-error.ts");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message.service */ "./src/app/message.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./message */ "./src/app/message.ts");





var RequestTypes;
(function (RequestTypes) {
    RequestTypes[RequestTypes["add"] = 0] = "add";
    RequestTypes[RequestTypes["delete"] = 1] = "delete";
    RequestTypes[RequestTypes["deleteMany"] = 2] = "deleteMany";
    RequestTypes[RequestTypes["fetch"] = 3] = "fetch";
    RequestTypes[RequestTypes["hide"] = 4] = "hide";
    RequestTypes[RequestTypes["hideMany"] = 5] = "hideMany";
    RequestTypes[RequestTypes["star"] = 6] = "star";
    RequestTypes[RequestTypes["starMany"] = 7] = "starMany";
    RequestTypes[RequestTypes["unhide"] = 8] = "unhide";
    RequestTypes[RequestTypes["unhideMany"] = 9] = "unhideMany";
    RequestTypes[RequestTypes["unstar"] = 10] = "unstar";
    RequestTypes[RequestTypes["unstarMany"] = 11] = "unstarMany";
    RequestTypes[RequestTypes["update"] = 12] = "update";
})(RequestTypes || (RequestTypes = {}));
var ServerResponceMessageHandlerService = /** @class */ (function () {
    function ServerResponceMessageHandlerService(messageService) {
        this.messageService = messageService;
        this.errorMessagePrefix = [];
        this.partialError = [];
        this.successMessages = [];
        /* Error Messages */
        this.errorMessagePrefix[RequestTypes.add] = 'Add Todo: ';
        this.errorMessagePrefix[RequestTypes.delete] = 'Delete Todo: ';
        this.errorMessagePrefix[RequestTypes.deleteMany] = 'Delete Todos: ';
        this.partialError[RequestTypes.deleteMany] =
            'Failed to delete some todos!';
        this.errorMessagePrefix[RequestTypes.fetch] = 'Load Todos: ';
        this.partialError[RequestTypes.fetch] =
            'Failed to load some todos!';
        this.errorMessagePrefix[RequestTypes.hide] = 'Hide Todo: ';
        this.errorMessagePrefix[RequestTypes.hideMany] = 'Hide Todos: ';
        this.partialError[RequestTypes.hideMany] =
            'Failed to move some todos to hidden!';
        this.errorMessagePrefix[RequestTypes.star] = 'Star Todo: ';
        this.errorMessagePrefix[RequestTypes.starMany] = 'Star Todos: ';
        this.partialError[RequestTypes.starMany] =
            'Failed to move some todos to stared!';
        this.errorMessagePrefix[RequestTypes.unstar] = 'Unstar Todo: ';
        this.errorMessagePrefix[RequestTypes.unstarMany] = 'Unstar Todos: ';
        this.partialError[RequestTypes.unstarMany] = 'Failed to move some todos ' +
            'to unstared!';
        this.errorMessagePrefix[RequestTypes.update] = 'Update Todo: ';
        /* Success Messages */
        this.successMessages[RequestTypes.add] = 'Todo has been added!';
        this.successMessages[RequestTypes.delete] = 'Todo has been deleted!';
        this.successMessages[RequestTypes.deleteMany] = 'Todos has been deleted!';
        this.successMessages[RequestTypes.fetch] = 'Todos has been loaded!';
        this.successMessages[RequestTypes.hide] = 'Todo has been moved to hidden!';
        this.successMessages[RequestTypes.hideMany]
            = 'Todos has been moved to hidden!';
        this.successMessages[RequestTypes.star] =
            'Todo has been moved to stared!';
        this.successMessages[RequestTypes.starMany] =
            'Todos has been moved to stared!';
        this.successMessages[RequestTypes.unhide] =
            'Todo has been moved to visible!';
        this.successMessages[RequestTypes.unhideMany] =
            'Todos has been moved to visible!';
        this.successMessages[RequestTypes.update] =
            'Todo has been updated!';
    }
    ServerResponceMessageHandlerService.prototype.handle = function (request, err, partialErr) {
        if (err === void 0) { err = null; }
        if (partialErr === void 0) { partialErr = null; }
        if (partialErr || err instanceof _partial_error__WEBPACK_IMPORTED_MODULE_1__["PartialError"]) {
            this.messageService.addToast(new _message__WEBPACK_IMPORTED_MODULE_4__["Message"](this.errorMessagePrefix[request] + partialErr[request]));
        }
        else if (err) {
            if (err instanceof ErrorEvent) {
                this.messageService.add(new _message__WEBPACK_IMPORTED_MODULE_4__["Message"](this.errorMessagePrefix[request] + err.error.message));
            }
            else {
                console.log(err);
                this.messageService.add(new _message__WEBPACK_IMPORTED_MODULE_4__["Message"](this.errorMessagePrefix[request] +
                    'Some kind of server error occured!'));
            }
        }
        else {
            this.messageService.addToast(new _message__WEBPACK_IMPORTED_MODULE_4__["Message"](this.successMessages[request]));
        }
    };
    ServerResponceMessageHandlerService.ctorParameters = function () { return [
        { type: _message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"] }
    ]; };
    ServerResponceMessageHandlerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root'
        })
    ], ServerResponceMessageHandlerService);
    return ServerResponceMessageHandlerService;
}());



/***/ }),

/***/ "./src/app/todo-date.service.ts":
/*!**************************************!*\
  !*** ./src/app/todo-date.service.ts ***!
  \**************************************/
/*! exports provided: TodoDateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoDateService", function() { return TodoDateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];
var TodoDateService = /** @class */ (function () {
    function TodoDateService(date) {
        if (date === void 0) { date = null; }
        if (date) {
            this.date = new Date(date);
        }
        else {
            this.date = new Date();
        }
    }
    TodoDateService.prototype.getDate = function () {
        var date = String(this.date.getDate());
        var month = months[this.date.getMonth()];
        var year = String(this.date.getFullYear());
        var hour = String(this.date.getHours());
        var meridiem;
        var minutes = String(this.date.getMinutes());
        if (Number(minutes) < 10) {
            minutes = "0" + minutes;
        }
        if (Number(hour) <= 11) {
            if (Number(hour) === 0) {
                hour = '12';
            }
            if (Number(hour) < 10) {
                hour = "0" + hour;
            }
            meridiem = 'AM';
        }
        else {
            if (Number(hour) !== 12) {
                hour = String(24 - Number(hour));
            }
            if (Number(hour) < 10) {
                hour = "0" + hour;
            }
            meridiem = 'PM';
        }
        var todoDate = {
            dateString: date + " " + month + ", " + year,
            timeString: hour + ":" + minutes + " " + meridiem
        };
        return todoDate;
    };
    TodoDateService.prototype.getUnixTime = function () {
        return this.date.getTime();
    };
    TodoDateService.ctorParameters = function () { return [
        { type: String }
    ]; };
    TodoDateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], TodoDateService);
    return TodoDateService;
}());



/***/ }),

/***/ "./src/app/todo-view/todo-view.component.css":
/*!***************************************************!*\
  !*** ./src/app/todo-view/todo-view.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n    width: 96%;\n    margin: 2%;\n    border-radius: 0%;\n}\n\ndiv.options {\n    margin: 0%;\n    width: 100%;\n}\n\n#todoView {\n  counter-reset: todo;\n}\n\n.card-title span.counter::before {\n  counter-increment: todo;\n  content: \" \" counter(todo) \" - \"\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kby12aWV3L3RvZG8tdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLFVBQVU7SUFDVixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC90b2RvLXZpZXcvdG9kby12aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xuICAgIHdpZHRoOiA5NiU7XG4gICAgbWFyZ2luOiAyJTtcbiAgICBib3JkZXItcmFkaXVzOiAwJTtcbn1cblxuZGl2Lm9wdGlvbnMge1xuICAgIG1hcmdpbjogMCU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbiN0b2RvVmlldyB7XG4gIGNvdW50ZXItcmVzZXQ6IHRvZG87XG59XG5cbi5jYXJkLXRpdGxlIHNwYW4uY291bnRlcjo6YmVmb3JlIHtcbiAgY291bnRlci1pbmNyZW1lbnQ6IHRvZG87XG4gIGNvbnRlbnQ6IFwiIFwiIGNvdW50ZXIodG9kbykgXCIgLSBcIlxufVxuIl19 */"

/***/ }),

/***/ "./src/app/todo-view/todo-view.component.ts":
/*!**************************************************!*\
  !*** ./src/app/todo-view/todo-view.component.ts ***!
  \**************************************************/
/*! exports provided: TodoViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoViewComponent", function() { return TodoViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../todo.service */ "./src/app/todo.service.ts");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../message */ "./src/app/message.ts");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../message.service */ "./src/app/message.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var TodoViewComponent = /** @class */ (function () {
    function TodoViewComponent(messageService, route, router, todoService) {
        this.messageService = messageService;
        this.route = route;
        this.router = router;
        this.todoService = todoService;
        this.importantMarkClass = 'text-primary nf-fa-star';
        this.todoItemClass = 'todoItem';
        this.allSelected = false;
        this.selected = [];
        this.classes = [];
    }
    TodoViewComponent.prototype.ngOnInit = function () {
        var e_1, _a;
        var _this = this;
        this.todoService.getVisibleTodos().subscribe(function (todos) { return _this.todos = todos; });
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.todos), _c = _b.next(); !_c.done; _c = _b.next()) {
                var todo = _c.value;
                this.classes[todo.id] = 'todoItem';
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.sortDescending();
        this.ascending = false;
    };
    /* delete a todo */
    TodoViewComponent.prototype.delete = function (id) {
        this.todoService.delete([id]);
    };
    /* move selected items to (Visible) Not Hidden Collection */
    TodoViewComponent.prototype.deleteSelected = function () {
        var _this = this;
        if (this.selected.length) {
            var confirm_1 = window.confirm('Do you really want to delete selected items?');
            if (confirm_1) {
                this.todoService.delete(this.selected, function (err) {
                    if (!err) {
                        _this.deselectAll();
                    }
                });
            }
        }
        else {
            this.messageService.addToast(new _message__WEBPACK_IMPORTED_MODULE_3__["Message"]('Please select one or more items!'));
        }
    };
    /* de(un)-select all of the todo items */
    TodoViewComponent.prototype.deselectAll = function () {
        var e_2, _a;
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.todos), _c = _b.next(); !_c.done; _c = _b.next()) {
                var todo = _c.value;
                var index = this.selected.indexOf(todo.id);
                if (index !== -1) {
                    this.selected.splice(index, 1);
                    this.classes[todo.id] = 'todoItem';
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        this.allSelected = false;
    };
    /* edit a todo's content */
    TodoViewComponent.prototype.edit = function (todoId) {
        this.router.navigateByUrl('edit/' + todoId);
    };
    /* move an item to Hidden collection */
    TodoViewComponent.prototype.hide = function (id) {
        this.todoService.setHidden([id], true);
    };
    /* move selected items to Hidden Collection */
    TodoViewComponent.prototype.hideSelected = function () {
        var _this = this;
        if (this.selected.length) {
            this.todoService.setHidden(this.selected, true, function (err) {
                if (!err) {
                    _this.deselectAll();
                }
            });
        }
        else {
            this.messageService.addToast(new _message__WEBPACK_IMPORTED_MODULE_3__["Message"]('Please select one or more items!'));
        }
    };
    /* whether item is selected or not */
    TodoViewComponent.prototype.isSelected = function (id) {
        var index = this.selected.indexOf(id);
        return index !== -1;
    };
    /* select all of the todo items */
    TodoViewComponent.prototype.selectAll = function () {
        var e_3, _a;
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.todos), _c = _b.next(); !_c.done; _c = _b.next()) {
                var todo = _c.value;
                var index = this.selected.indexOf(todo.id);
                if (index === -1) {
                    this.selected.push(todo.id);
                    this.classes[todo.id] = 'todoItem bg-selected';
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        this.allSelected = true;
    };
    /* move an item to Stared Collection */
    TodoViewComponent.prototype.setStar = function (id) {
        this.todoService.setStar([id], true);
    };
    /* sort items ascending */
    TodoViewComponent.prototype.sortAscending = function () {
        this.todos = this.todos.sort(function (t1, t2) {
            return _todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"].older(t1, t2);
        });
        this.ascending = true;
    };
    /* sort items descending */
    TodoViewComponent.prototype.sortDescending = function () {
        this.todos = this.todos.sort(function (t1, t2) {
            return _todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"].newer(t1, t2);
        });
        this.ascending = false;
    };
    /* move selected items to Stared Collection */
    TodoViewComponent.prototype.starSelected = function () {
        var _this = this;
        if (this.selected.length) {
            this.todoService.setStar(this.selected, true, function (err) {
                if (!err) {
                    _this.deselectAll();
                }
            });
        }
        else {
            this.messageService.addToast(new _message__WEBPACK_IMPORTED_MODULE_3__["Message"]('Please select one or more items!'));
        }
    };
    /* toggle the checked state of a todo */
    TodoViewComponent.prototype.toggleChecked = function (id) {
        var index = this.selected.indexOf(id);
        if (index > -1) {
            this.selected.splice(index, 1);
            this.classes[id] = 'todoItem';
        }
        else {
            this.selected.push(id);
            this.classes[id] = 'todoItem bg-selected';
        }
    };
    /* move an item to Ordinary(Not Stared) collection */
    TodoViewComponent.prototype.unsetStar = function (id) {
        this.todoService.setStar([id], false);
    };
    /* move selected items to (Ordinary) Not Stared Collection */
    TodoViewComponent.prototype.unstarSelected = function () {
        var _this = this;
        if (this.selected.length) {
            this.todoService.setStar(this.selected, false, function (err) {
                if (!err) {
                    _this.deselectAll();
                }
            });
        }
        else {
            this.messageService.addToast(new _message__WEBPACK_IMPORTED_MODULE_3__["Message"]('Please select one or more items!'));
        }
    };
    TodoViewComponent.ctorParameters = function () { return [
        { type: _message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"] }
    ]; };
    TodoViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-todo-view',
            template: __webpack_require__(/*! raw-loader!./todo-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/todo-view/todo-view.component.html"),
            styles: [__webpack_require__(/*! ./todo-view.component.css */ "./src/app/todo-view/todo-view.component.css")]
        })
    ], TodoViewComponent);
    return TodoViewComponent;
}());



/***/ }),

/***/ "./src/app/todo.service.ts":
/*!*********************************!*\
  !*** ./src/app/todo.service.ts ***!
  \*********************************/
/*! exports provided: TodoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoService", function() { return TodoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _partial_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./partial-error */ "./src/app/partial-error.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _server_responce_message_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./server-responce-message-handler.service */ "./src/app/server-responce-message-handler.service.ts");
/* harmony import */ var _todo_date_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo-date.service */ "./src/app/todo-date.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");







var TodoService = /** @class */ (function () {
    function TodoService(http, msgHandler) {
        this.http = http;
        this.msgHandler = msgHandler;
        if (!TodoService_1.triedFetched) {
            this.fetch();
        }
    }
    TodoService_1 = TodoService;
    TodoService.prototype.add = function (todo) {
        var _this = this;
        var created = new _todo_date_service__WEBPACK_IMPORTED_MODULE_4__["TodoDateService"]();
        todo.created = created.getDate();
        todo.id = created.getUnixTime();
        this.http.add(todo)
            .subscribe(function (success) {
            _this.adjust(todo);
            _this.msgHandler.handle(_server_responce_message_handler_service__WEBPACK_IMPORTED_MODULE_3__["RequestTypes"].add);
        }, function (error) {
            _this.msgHandler.handle(_server_responce_message_handler_service__WEBPACK_IMPORTED_MODULE_3__["RequestTypes"].add, error);
        });
    };
    TodoService.prototype.adjust = function (todo) {
        var e_1, _a;
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"]([TodoService_1.collection, TodoService_1.visible,
                TodoService_1.stared, TodoService_1.unstared, TodoService_1.hidden]), _c = _b.next(); !_c.done; _c = _b.next()) {
                var c = _c.value;
                var index = c.findIndex(function (t) {
                    return t.id === todo.id;
                });
                if (index !== -1) {
                    c.splice(index, 1);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (todo.hidden) {
            TodoService_1.hidden.unshift(todo);
        }
        else {
            TodoService_1.visible.unshift(todo);
            if (todo.stared) {
                TodoService_1.stared.unshift(todo);
            }
            else {
                TodoService_1.unstared.unshift(todo);
            }
        }
        TodoService_1.collection.unshift(todo);
    };
    TodoService.prototype.delete = function (ids, callback) {
        var _this = this;
        if (callback === void 0) { callback = null; }
        var partialSuccess = false;
        this.http.delete(ids)
            .subscribe({
            next: function (responce) {
                _this.purge([Number(responce.id)]);
                partialSuccess = true;
            },
            error: function (error) {
                if (callback) {
                    callback(error || true);
                }
                if (ids.length === 1) {
                    _this.msgHandler.handle(_server_responce_message_handler_service__WEBPACK_IMPORTED_MODULE_3__["RequestTypes"].delete, error);
                }
                else {
                    if (partialSuccess) {
                        _this.msgHandler.handle(_server_responce_message_handler_service__WEBPACK_IMPORTED_MODULE_3__["RequestTypes"].delete, new _partial_error__WEBPACK_IMPORTED_MODULE_1__["PartialError"]());
                    }
                    else {
                        _this.msgHandler.handle(_server_responce_message_handler_service__WEBPACK_IMPORTED_MODULE_3__["RequestTypes"].delete, error);
                    }
                }
            },
            complete: function () {
                if (callback) {
                    callback(null);
                }
            }
        });
    };
    TodoService.prototype.fetch = function () {
        var _this = this;
        var partialSuccess = false;
        this.http.fetch()
            .subscribe({
            next: function (responce) {
                var todo = JSON.parse(responce.data);
                _this.adjust(todo);
                partialSuccess = true;
            },
            error: function (error) {
                if (partialSuccess) {
                    _this.msgHandler.handle(_server_responce_message_handler_service__WEBPACK_IMPORTED_MODULE_3__["RequestTypes"].fetch, new _partial_error__WEBPACK_IMPORTED_MODULE_1__["PartialError"]());
                }
                else {
                    _this.msgHandler.handle(_server_responce_message_handler_service__WEBPACK_IMPORTED_MODULE_3__["RequestTypes"].fetch, error);
                }
                TodoService_1.triedFetched = true;
            },
            complete: function () {
                _this.msgHandler.handle(_server_responce_message_handler_service__WEBPACK_IMPORTED_MODULE_3__["RequestTypes"].fetch);
                TodoService_1.triedFetched = true;
            }
        });
    };
    /* get all hidden todos */
    TodoService.prototype.getHiddenTodos = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(TodoService_1.hidden);
    };
    /* get all stared todos */
    TodoService.prototype.getStaredTodos = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(TodoService_1.stared);
    };
    TodoService.prototype.getTodo = function (id) {
        var todo = TodoService_1.collection.find(function (t) {
            return t.id === id;
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(todo);
    };
    /* get all unstared todos */
    TodoService.prototype.getUnstaredTodos = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(TodoService_1.unstared);
    };
    /* get all visible todos */
    TodoService.prototype.getVisibleTodos = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(TodoService_1.visible);
    };
    /* return newer of two todos */
    // tslint:disable-next-line: member-ordering
    TodoService.newer = function (t1, t2) {
        var t1Date = t1.updated || t1.created;
        var t2Date = t2.updated || t2.created;
        t1Date ?
            t1Date = new _todo_date_service__WEBPACK_IMPORTED_MODULE_4__["TodoDateService"](t1Date.dateString + " " + t1Date.timeString) :
            t1Date = new _todo_date_service__WEBPACK_IMPORTED_MODULE_4__["TodoDateService"]();
        t2Date ?
            t2Date = new _todo_date_service__WEBPACK_IMPORTED_MODULE_4__["TodoDateService"](t2Date.dateString + " " + t2Date.timeString) :
            t2Date = new _todo_date_service__WEBPACK_IMPORTED_MODULE_4__["TodoDateService"]();
        return t1Date.getUnixTime() - t2Date.getUnixTime();
    };
    /* return older of two todos */
    // tslint:disable-next-line: member-ordering
    TodoService.older = function (t1, t2) {
        var t1Date = t1.updated || t1.created;
        var t2Date = t2.updated || t2.created;
        t1Date ?
            t1Date = new _todo_date_service__WEBPACK_IMPORTED_MODULE_4__["TodoDateService"](t1Date.dateString + " " + t1Date.timeString) :
            t1Date = new _todo_date_service__WEBPACK_IMPORTED_MODULE_4__["TodoDateService"]();
        t2Date ?
            t2Date = new _todo_date_service__WEBPACK_IMPORTED_MODULE_4__["TodoDateService"](t2Date.dateString + " " + t2Date.timeString) :
            t2Date = new _todo_date_service__WEBPACK_IMPORTED_MODULE_4__["TodoDateService"]();
        return -(t1Date.getUnixTime()) + t2Date.getUnixTime();
    };
    /* remove a todo from everywhere it is found */
    TodoService.prototype.purge = function (ids) {
        var e_2, _a;
        var _loop_1 = function (id) {
            var e_3, _a;
            try {
                for (var _b = (e_3 = void 0, tslib__WEBPACK_IMPORTED_MODULE_0__["__values"]([TodoService_1.collection, TodoService_1.visible,
                    TodoService_1.stared, TodoService_1.unstared, TodoService_1.hidden])), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var c = _c.value;
                    var index = c.findIndex(function (t) {
                        return t.id === id;
                    });
                    if (index !== -1) {
                        c.splice(index, 1);
                    }
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_3) throw e_3.error; }
            }
        };
        try {
            for (var ids_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](ids), ids_1_1 = ids_1.next(); !ids_1_1.done; ids_1_1 = ids_1.next()) {
                var id = ids_1_1.value;
                _loop_1(id);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (ids_1_1 && !ids_1_1.done && (_a = ids_1.return)) _a.call(ids_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    TodoService.prototype.setHidden = function (ids, value, callback) {
        var e_4, _a;
        var _this = this;
        if (callback === void 0) { callback = null; }
        var partialSuccess = false;
        var candidates = [];
        var _loop_2 = function (id) {
            var todo = TodoService_1.collection.find(function (t) {
                return t.id === id;
            });
            if (todo) {
                todo.hidden = value;
                candidates.push(todo);
            }
        };
        try {
            for (var ids_2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](ids), ids_2_1 = ids_2.next(); !ids_2_1.done; ids_2_1 = ids_2.next()) {
                var id = ids_2_1.value;
                _loop_2(id);
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (ids_2_1 && !ids_2_1.done && (_a = ids_2.return)) _a.call(ids_2);
            }
            finally { if (e_4) throw e_4.error; }
        }
        this.http.update(candidates)
            .subscribe({
            next: function (responce) {
                var todo = candidates.find(function (c) {
                    return c.id === responce.id;
                });
                _this.adjust(todo);
                partialSuccess = true;
            },
            error: function (error) {
                if (value === true) {
                    if (ids.length === 1) {
                        _this.msgHandler.handle(_server_responce_message_handler_service__WEBPACK_IMPORTED_MODULE_3__["RequestTypes"].hide, error);
                    }
                    else {
                        if (partialSuccess) {
                            _this.msgHandler.handle(_server_responce_message_handler_service__WEBPACK_IMPORTED_MODULE_3__["RequestTypes"].hideMany, new _partial_error__WEBPACK_IMPORTED_MODULE_1__["PartialError"]());
                        }
                        else {
                            _this.msgHandler.handle(_server_responce_message_handler_service__WEBPACK_IMPORTED_MODULE_3__["RequestTypes"].hideMany, error);
                        }
                    }
                }
                else {
                    if (ids.length === 1) {
                        _this.msgHandler.handle(_server_responce_message_handler_service__WEBPACK_IMPORTED_MODULE_3__["RequestTypes"].unhide, error);
                    }
                    else {
                        if (partialSuccess) {
                            _this.msgHandler.handle(_server_responce_message_handler_service__WEBPACK_IMPORTED_MODULE_3__["RequestTypes"].unhideMany, new _partial_error__WEBPACK_IMPORTED_MODULE_1__["PartialError"]());
                        }
                        else {
                            _this.msgHandler.handle(_server_responce_message_handler_service__WEBPACK_IMPORTED_MODULE_3__["RequestTypes"].unhideMany, error);
                        }
                    }
                }
                if (callback) {
                    callback(error);
                }
            },
            complete: function () {
                if (ids.length === 1) {
                    if (value === true) {
                        _this.msgHandler.handle(_server_responce_message_handler_service__WEBPACK_IMPORTED_MODULE_3__["RequestTypes"].hide);
                    }
                    else {
                        _this.msgHandler.handle(_server_responce_message_handler_service__WEBPACK_IMPORTED_MODULE_3__["RequestTypes"].unhide);
                    }
                }
                else {
                    if (value === true) {
                        _this.msgHandler.handle(_server_responce_message_handler_service__WEBPACK_IMPORTED_MODULE_3__["RequestTypes"].hideMany);
                    }
                    else {
                        _this.msgHandler.handle(_server_responce_message_handler_service__WEBPACK_IMPORTED_MODULE_3__["RequestTypes"].unhideMany);
                    }
                }
                if (callback) {
                    callback(false);
                }
            }
        });
    };
    TodoService.prototype.setStar = function (ids, value, callback) {
        var e_5, _a;
        var _this = this;
        if (callback === void 0) { callback = null; }
        var partialSuccess = false;
        var candidates = [];
        var _loop_3 = function (id) {
            var todo = TodoService_1.collection.find(function (t) {
                return t.id === id;
            });
            if (todo) {
                todo.stared = value;
                candidates.push(todo);
            }
        };
        try {
            for (var ids_3 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](ids), ids_3_1 = ids_3.next(); !ids_3_1.done; ids_3_1 = ids_3.next()) {
                var id = ids_3_1.value;
                _loop_3(id);
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (ids_3_1 && !ids_3_1.done && (_a = ids_3.return)) _a.call(ids_3);
            }
            finally { if (e_5) throw e_5.error; }
        }
        this.http.update(candidates)
            .subscribe({
            next: function (responce) {
                var todo = candidates.find(function (c) {
                    return c.id === responce.id;
                });
                _this.adjust(todo);
                partialSuccess = true;
            },
            error: function (error) {
                if (value === true) {
                    if (ids.length === 1) {
                        _this.msgHandler.handle(_server_responce_message_handler_service__WEBPACK_IMPORTED_MODULE_3__["RequestTypes"].star, error);
                    }
                    else {
                        if (partialSuccess) {
                            _this.msgHandler.handle(_server_responce_message_handler_service__WEBPACK_IMPORTED_MODULE_3__["RequestTypes"].starMany);
                        }
                        else {
                            _this.msgHandler.handle(_server_responce_message_handler_service__WEBPACK_IMPORTED_MODULE_3__["RequestTypes"].starMany, error);
                        }
                    }
                }
                else {
                    if (ids.length === 1) {
                        _this.msgHandler.handle(_server_responce_message_handler_service__WEBPACK_IMPORTED_MODULE_3__["RequestTypes"].unstar, error);
                    }
                    else {
                        if (partialSuccess) {
                            _this.msgHandler.handle(_server_responce_message_handler_service__WEBPACK_IMPORTED_MODULE_3__["RequestTypes"].unstarMany, new _partial_error__WEBPACK_IMPORTED_MODULE_1__["PartialError"]());
                        }
                        else {
                            _this.msgHandler.handle(_server_responce_message_handler_service__WEBPACK_IMPORTED_MODULE_3__["RequestTypes"].unstarMany, error);
                        }
                    }
                }
                if (callback) {
                    callback(error);
                }
            },
            complete: function () {
                if (ids.length === 1) {
                    if (value === true) {
                        _this.msgHandler.handle(_server_responce_message_handler_service__WEBPACK_IMPORTED_MODULE_3__["RequestTypes"].star);
                    }
                    else {
                        _this.msgHandler.handle(_server_responce_message_handler_service__WEBPACK_IMPORTED_MODULE_3__["RequestTypes"].unstar);
                    }
                }
                else {
                    if (value === true) {
                        _this.msgHandler.handle(_server_responce_message_handler_service__WEBPACK_IMPORTED_MODULE_3__["RequestTypes"].starMany);
                    }
                    else {
                        _this.msgHandler.handle(_server_responce_message_handler_service__WEBPACK_IMPORTED_MODULE_3__["RequestTypes"].unstarMany);
                    }
                }
                if (callback) {
                    callback(false);
                }
            }
        });
    };
    TodoService.prototype.update = function (todo) {
        var _this = this;
        var subscription;
        try {
            subscription = this.http.update([todo])
                .subscribe({
                next: function (responce) {
                    _this.adjust(todo);
                    _this.msgHandler.handle(_server_responce_message_handler_service__WEBPACK_IMPORTED_MODULE_3__["RequestTypes"].update);
                },
                error: function (error) {
                    _this.msgHandler.handle(_server_responce_message_handler_service__WEBPACK_IMPORTED_MODULE_3__["RequestTypes"].update, error);
                },
                complete: function () {
                    throw true;
                }
            });
        }
        catch (error) {
            if (subscription) {
                subscription.unsubscribe();
            }
        }
    };
    var TodoService_1;
    TodoService.collection = [];
    TodoService.hidden = [];
    TodoService.stared = [];
    TodoService.triedFetched = false;
    TodoService.unstared = [];
    TodoService.visible = [];
    TodoService.ctorParameters = function () { return [
        { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
        { type: _server_responce_message_handler_service__WEBPACK_IMPORTED_MODULE_3__["ServerResponceMessageHandlerService"] }
    ]; };
    TodoService = TodoService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Injectable"])({
            providedIn: 'root'
        })
    ], TodoService);
    return TodoService;
}());



/***/ }),

/***/ "./src/app/todo.ts":
/*!*************************!*\
  !*** ./src/app/todo.ts ***!
  \*************************/
/*! exports provided: Todo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Todo", function() { return Todo; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

var Todo = /** @class */ (function () {
    function Todo(text) {
        this.text = text;
    }
    Todo.copy = function (obj) {
        var todo = new Todo('');
        todo.id = obj.id;
        todo.created = obj.created;
        todo.updated = obj.updated;
        todo.stared = obj.stared;
        todo.hidden = obj.hidden;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(todo);
    };
    Todo.ctorParameters = function () { return [
        { type: String }
    ]; };
    return Todo;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /srv/http/learn-javascript/app/ngtodo/ngtodo-angular-project/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map