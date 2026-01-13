/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/app */ \"./src/modules/app.js\");\n\n(0,_modules_app__WEBPACK_IMPORTED_MODULE_0__.init)();\nconsole.log(\"STATE AFTER INIT:\", (0,_modules_app__WEBPACK_IMPORTED_MODULE_0__.getState)());\nvar newProjectId = (0,_modules_app__WEBPACK_IMPORTED_MODULE_0__.addProject)(\"work\");\n(0,_modules_app__WEBPACK_IMPORTED_MODULE_0__.addTodo)(newProjectId, {\n  title: \"finish\",\n  priority: \"high\"\n});\nconsole.log(\"STATE AFTER CHANGES:\", (0,_modules_app__WEBPACK_IMPORTED_MODULE_0__.getState)());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBb0U7QUFFcEVBLGtEQUFJLENBQUMsQ0FBQztBQUNOSSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRUYsc0RBQVEsQ0FBQyxDQUFDLENBQUM7QUFFNUMsSUFBTUcsWUFBWSxHQUFHTCx3REFBVSxDQUFDLE1BQU0sQ0FBQztBQUN2Q0MscURBQU8sQ0FBQ0ksWUFBWSxFQUFFO0VBQUVDLEtBQUssRUFBRSxRQUFRO0VBQUVDLFFBQVEsRUFBRTtBQUFPLENBQUMsQ0FBQztBQUU1REosT0FBTyxDQUFDQyxHQUFHLENBQUMsc0JBQXNCLEVBQUVGLHNEQUFRLENBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluaXQsIGFkZFByb2plY3QsIGFkZFRvZG8sIGdldFN0YXRlIH0gZnJvbSBcIi4vbW9kdWxlcy9hcHBcIjtcclxuXHJcbmluaXQoKTtcclxuY29uc29sZS5sb2coXCJTVEFURSBBRlRFUiBJTklUOlwiLCBnZXRTdGF0ZSgpKTtcclxuXHJcbmNvbnN0IG5ld1Byb2plY3RJZCA9IGFkZFByb2plY3QoXCJ3b3JrXCIpO1xyXG5hZGRUb2RvKG5ld1Byb2plY3RJZCwgeyB0aXRsZTogXCJmaW5pc2hcIiwgcHJpb3JpdHk6IFwiaGlnaFwiIH0pO1xyXG5cclxuY29uc29sZS5sb2coXCJTVEFURSBBRlRFUiBDSEFOR0VTOlwiLCBnZXRTdGF0ZSgpKTtcclxuIl0sIm5hbWVzIjpbImluaXQiLCJhZGRQcm9qZWN0IiwiYWRkVG9kbyIsImdldFN0YXRlIiwiY29uc29sZSIsImxvZyIsIm5ld1Byb2plY3RJZCIsInRpdGxlIiwicHJpb3JpdHkiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n\n}");

/***/ },

/***/ "./src/modules/app.js"
/*!****************************!*\
  !*** ./src/modules/app.js ***!
  \****************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addProject: () => (/* binding */ addProject),\n/* harmony export */   addTodo: () => (/* binding */ addTodo),\n/* harmony export */   getState: () => (/* binding */ getState),\n/* harmony export */   init: () => (/* binding */ init),\n/* harmony export */   setCurrentProject: () => (/* binding */ setCurrentProject)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/modules/project.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ \"./src/modules/todo.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ \"./src/modules/storage.js\");\n\n\n\nvar DEFAULT_PROJECT_NAME = \"Default\";\nvar state = {\n  projects: [],\n  currentProjectId: null\n};\nfunction ensureDefaultProject() {\n  var p = (0,_project__WEBPACK_IMPORTED_MODULE_0__.createProject)({\n    name: DEFAULT_PROJECT_NAME\n  });\n  state.projects = [p];\n  state.currentProjectId = p.id;\n}\nfunction init() {\n  var saved = _storage__WEBPACK_IMPORTED_MODULE_2__.load();\n  if (saved && Array.isArray(saved.projects) && saved.projects.length > 0) {\n    state = saved;\n  } else {\n    ensureDefaultProject();\n    _storage__WEBPACK_IMPORTED_MODULE_2__.save(state);\n  }\n}\nfunction getState() {\n  return structuredClone(state);\n}\nfunction addProject(name) {\n  var project = (0,_project__WEBPACK_IMPORTED_MODULE_0__.createProject)({\n    name: name\n  });\n  state.projects.push(project);\n  state.currentProjectId = project.id;\n  _storage__WEBPACK_IMPORTED_MODULE_2__.save(state);\n  return project.id;\n}\nfunction setCurrentProject(projectId) {\n  state.currentProjectId = projectId;\n  _storage__WEBPACK_IMPORTED_MODULE_2__.save(state);\n}\nfunction addTodo(projectId, todoData) {\n  var project = state.projects.find(function (p) {\n    return p.id === projectId;\n  });\n  if (!project) return null;\n  var todo = (0,_todo__WEBPACK_IMPORTED_MODULE_1__.createTodo)(todoData);\n  project.todos.push(todo);\n  _storage__WEBPACK_IMPORTED_MODULE_2__.save(state);\n  return todo.id;\n}\n;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9hcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBMEM7QUFDTjtBQUNDO0FBRXJDLElBQU1HLG9CQUFvQixHQUFHLFNBQVM7QUFFdEMsSUFBSUMsS0FBSyxHQUFHO0VBQ1JDLFFBQVEsRUFBRSxFQUFFO0VBQ1pDLGdCQUFnQixFQUFFO0FBQ3RCLENBQUM7QUFFRCxTQUFTQyxvQkFBb0JBLENBQUEsRUFBRztFQUM1QixJQUFNQyxDQUFDLEdBQUdSLHVEQUFhLENBQUM7SUFBRVMsSUFBSSxFQUFFTjtFQUFxQixDQUFDLENBQUM7RUFDdkRDLEtBQUssQ0FBQ0MsUUFBUSxHQUFHLENBQUNHLENBQUMsQ0FBQztFQUNwQkosS0FBSyxDQUFDRSxnQkFBZ0IsR0FBR0UsQ0FBQyxDQUFDRSxFQUFFO0FBQ2pDO0FBRU8sU0FBU0MsSUFBSUEsQ0FBQSxFQUFHO0VBQ25CLElBQU1DLEtBQUssR0FBR1YsMENBQVksQ0FBQyxDQUFDO0VBRTVCLElBQUlVLEtBQUssSUFBSUUsS0FBSyxDQUFDQyxPQUFPLENBQUNILEtBQUssQ0FBQ1AsUUFBUSxDQUFDLElBQUlPLEtBQUssQ0FBQ1AsUUFBUSxDQUFDVyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0lBQ3JFWixLQUFLLEdBQUdRLEtBQUs7RUFDakIsQ0FBQyxNQUFNO0lBQ0hMLG9CQUFvQixDQUFDLENBQUM7SUFDdEJMLDBDQUFZLENBQUNFLEtBQUssQ0FBQztFQUN2QjtBQUNKO0FBRU8sU0FBU2MsUUFBUUEsQ0FBQSxFQUFHO0VBQ3ZCLE9BQU9DLGVBQWUsQ0FBQ2YsS0FBSyxDQUFDO0FBQ2pDO0FBRU8sU0FBU2dCLFVBQVVBLENBQUNYLElBQUksRUFBRTtFQUM3QixJQUFNWSxPQUFPLEdBQUdyQix1REFBYSxDQUFDO0lBQUVTLElBQUksRUFBSkE7RUFBSyxDQUFDLENBQUM7RUFDdkNMLEtBQUssQ0FBQ0MsUUFBUSxDQUFDaUIsSUFBSSxDQUFDRCxPQUFPLENBQUM7RUFDNUJqQixLQUFLLENBQUNFLGdCQUFnQixHQUFHZSxPQUFPLENBQUNYLEVBQUU7RUFDbkNSLDBDQUFZLENBQUNFLEtBQUssQ0FBQztFQUNuQixPQUFPaUIsT0FBTyxDQUFDWCxFQUFFO0FBQ3JCO0FBRU8sU0FBU2EsaUJBQWlCQSxDQUFDQyxTQUFTLEVBQUU7RUFDekNwQixLQUFLLENBQUNFLGdCQUFnQixHQUFHa0IsU0FBUztFQUNsQ3RCLDBDQUFZLENBQUNFLEtBQUssQ0FBQztBQUN2QjtBQUVPLFNBQVNxQixPQUFPQSxDQUFDRCxTQUFTLEVBQUVFLFFBQVEsRUFBRTtFQUN6QyxJQUFNTCxPQUFPLEdBQUdqQixLQUFLLENBQUNDLFFBQVEsQ0FBQ3NCLElBQUksQ0FBQyxVQUFBbkIsQ0FBQztJQUFBLE9BQUlBLENBQUMsQ0FBQ0UsRUFBRSxLQUFLYyxTQUFTO0VBQUEsRUFBQztFQUM1RCxJQUFJLENBQUNILE9BQU8sRUFBRSxPQUFPLElBQUk7RUFFekIsSUFBTU8sSUFBSSxHQUFHM0IsaURBQVUsQ0FBQ3lCLFFBQVEsQ0FBQztFQUNqQ0wsT0FBTyxDQUFDUSxLQUFLLENBQUNQLElBQUksQ0FBQ00sSUFBSSxDQUFDO0VBQ3hCMUIsMENBQVksQ0FBQ0UsS0FBSyxDQUFDO0VBQ25CLE9BQU93QixJQUFJLENBQUNsQixFQUFFO0FBQ2xCO0FBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL21vZHVsZXMvYXBwLmpzP2VkYjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcclxuaW1wb3J0IHsgY3JlYXRlVG9kbyB9IGZyb20gXCIuL3RvZG9cIjtcclxuaW1wb3J0ICogYXMgc3RvcmFnZSBmcm9tIFwiLi9zdG9yYWdlXCI7XHJcblxyXG5jb25zdCBERUZBVUxUX1BST0pFQ1RfTkFNRSA9IFwiRGVmYXVsdFwiO1xyXG5cclxubGV0IHN0YXRlID0ge1xyXG4gICAgcHJvamVjdHM6IFtdLFxyXG4gICAgY3VycmVudFByb2plY3RJZDogbnVsbCxcclxufTtcclxuXHJcbmZ1bmN0aW9uIGVuc3VyZURlZmF1bHRQcm9qZWN0KCkge1xyXG4gICAgY29uc3QgcCA9IGNyZWF0ZVByb2plY3QoeyBuYW1lOiBERUZBVUxUX1BST0pFQ1RfTkFNRSB9KTtcclxuICAgIHN0YXRlLnByb2plY3RzID0gW3BdO1xyXG4gICAgc3RhdGUuY3VycmVudFByb2plY3RJZCA9IHAuaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgY29uc3Qgc2F2ZWQgPSBzdG9yYWdlLmxvYWQoKTtcclxuXHJcbiAgICBpZiAoc2F2ZWQgJiYgQXJyYXkuaXNBcnJheShzYXZlZC5wcm9qZWN0cykgJiYgc2F2ZWQucHJvamVjdHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHN0YXRlID0gc2F2ZWQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVuc3VyZURlZmF1bHRQcm9qZWN0KCk7XHJcbiAgICAgICAgc3RvcmFnZS5zYXZlKHN0YXRlKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0YXRlKCkge1xyXG4gICAgcmV0dXJuIHN0cnVjdHVyZWRDbG9uZShzdGF0ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRQcm9qZWN0KG5hbWUpIHtcclxuICAgIGNvbnN0IHByb2plY3QgPSBjcmVhdGVQcm9qZWN0KHsgbmFtZSB9KTtcclxuICAgIHN0YXRlLnByb2plY3RzLnB1c2gocHJvamVjdCk7XHJcbiAgICBzdGF0ZS5jdXJyZW50UHJvamVjdElkID0gcHJvamVjdC5pZDtcclxuICAgIHN0b3JhZ2Uuc2F2ZShzdGF0ZSk7XHJcbiAgICByZXR1cm4gcHJvamVjdC5pZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldEN1cnJlbnRQcm9qZWN0KHByb2plY3RJZCkge1xyXG4gICAgc3RhdGUuY3VycmVudFByb2plY3RJZCA9IHByb2plY3RJZDtcclxuICAgIHN0b3JhZ2Uuc2F2ZShzdGF0ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRUb2RvKHByb2plY3RJZCwgdG9kb0RhdGEpIHtcclxuICAgIGNvbnN0IHByb2plY3QgPSBzdGF0ZS5wcm9qZWN0cy5maW5kKHAgPT4gcC5pZCA9PT0gcHJvamVjdElkKTtcclxuICAgIGlmICghcHJvamVjdCkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgY29uc3QgdG9kbyA9IGNyZWF0ZVRvZG8odG9kb0RhdGEpO1xyXG4gICAgcHJvamVjdC50b2Rvcy5wdXNoKHRvZG8pO1xyXG4gICAgc3RvcmFnZS5zYXZlKHN0YXRlKVxyXG4gICAgcmV0dXJuIHRvZG8uaWQ7XHJcbn07Il0sIm5hbWVzIjpbImNyZWF0ZVByb2plY3QiLCJjcmVhdGVUb2RvIiwic3RvcmFnZSIsIkRFRkFVTFRfUFJPSkVDVF9OQU1FIiwic3RhdGUiLCJwcm9qZWN0cyIsImN1cnJlbnRQcm9qZWN0SWQiLCJlbnN1cmVEZWZhdWx0UHJvamVjdCIsInAiLCJuYW1lIiwiaWQiLCJpbml0Iiwic2F2ZWQiLCJsb2FkIiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwic2F2ZSIsImdldFN0YXRlIiwic3RydWN0dXJlZENsb25lIiwiYWRkUHJvamVjdCIsInByb2plY3QiLCJwdXNoIiwic2V0Q3VycmVudFByb2plY3QiLCJwcm9qZWN0SWQiLCJhZGRUb2RvIiwidG9kb0RhdGEiLCJmaW5kIiwidG9kbyIsInRvZG9zIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/modules/app.js\n\n}");

/***/ },

/***/ "./src/modules/project.js"
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createProject: () => (/* binding */ createProject)\n/* harmony export */ });\nfunction createProject() {\n  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},\n    _ref$id = _ref.id,\n    id = _ref$id === void 0 ? crypto.randomUUID() : _ref$id,\n    name = _ref.name,\n    _ref$todos = _ref.todos,\n    todos = _ref$todos === void 0 ? [] : _ref$todos;\n  return {\n    id: id,\n    name: name,\n    todos: todos\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9wcm9qZWN0LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxTQUFTQSxhQUFhQSxDQUFBLEVBSXJCO0VBQUEsSUFBQUMsSUFBQSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBSixDQUFDLENBQUM7SUFBQUcsT0FBQSxHQUFBSixJQUFBLENBSEZLLEVBQUU7SUFBRkEsRUFBRSxHQUFBRCxPQUFBLGNBQUdFLE1BQU0sQ0FBQ0MsVUFBVSxDQUFDLENBQUMsR0FBQUgsT0FBQTtJQUN4QkksSUFBSSxHQUFBUixJQUFBLENBQUpRLElBQUk7SUFBQUMsVUFBQSxHQUFBVCxJQUFBLENBQ0pVLEtBQUs7SUFBTEEsS0FBSyxHQUFBRCxVQUFBLGNBQUcsRUFBRSxHQUFBQSxVQUFBO0VBRVYsT0FBTztJQUFFSixFQUFFLEVBQUZBLEVBQUU7SUFBRUcsSUFBSSxFQUFKQSxJQUFJO0lBQUVFLEtBQUssRUFBTEE7RUFBTSxDQUFDO0FBQzlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay8uL3NyYy9tb2R1bGVzL3Byb2plY3QuanM/ZWE4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdCh7XHJcbiAgICBpZCA9IGNyeXB0by5yYW5kb21VVUlEKCksXHJcbiAgICBuYW1lLFxyXG4gICAgdG9kb3MgPSBbXSxcclxufSA9IHt9KSB7XHJcbiAgICByZXR1cm4geyBpZCwgbmFtZSwgdG9kb3MgfTtcclxufSJdLCJuYW1lcyI6WyJjcmVhdGVQcm9qZWN0IiwiX3JlZiIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsIl9yZWYkaWQiLCJpZCIsImNyeXB0byIsInJhbmRvbVVVSUQiLCJuYW1lIiwiX3JlZiR0b2RvcyIsInRvZG9zIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/modules/project.js\n\n}");

/***/ },

/***/ "./src/modules/storage.js"
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   load: () => (/* binding */ load),\n/* harmony export */   save: () => (/* binding */ save)\n/* harmony export */ });\nvar STORAGE_KEY = \"todo-app-data\";\nfunction save(data) {\n  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));\n}\nfunction load() {\n  var raw = localStorage.getItem(STORAGE_KEY);\n  if (!raw) return null;\n  try {\n    return JSON.parse(raw);\n  } catch (e) {\n    console.warn(\"localStorage data is corrupted, resetting\");\n    return null;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9zdG9yYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsSUFBTUEsV0FBVyxHQUFHLGVBQWU7QUFFNUIsU0FBU0MsSUFBSUEsQ0FBQ0MsSUFBSSxFQUFFO0VBQ3ZCQyxZQUFZLENBQUNDLE9BQU8sQ0FBQ0osV0FBVyxFQUFFSyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0osSUFBSSxDQUFDLENBQUM7QUFDM0Q7QUFFTyxTQUFTSyxJQUFJQSxDQUFBLEVBQUc7RUFDbkIsSUFBTUMsR0FBRyxHQUFHTCxZQUFZLENBQUNNLE9BQU8sQ0FBQ1QsV0FBVyxDQUFDO0VBQzdDLElBQUksQ0FBQ1EsR0FBRyxFQUFFLE9BQU8sSUFBSTtFQUVyQixJQUFJO0lBQ0EsT0FBT0gsSUFBSSxDQUFDSyxLQUFLLENBQUNGLEdBQUcsQ0FBQztFQUMxQixDQUFDLENBQUMsT0FBT0csQ0FBQyxFQUFFO0lBQ1JDLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLDJDQUEyQyxDQUFDO0lBQ3pELE9BQU8sSUFBSTtFQUNmO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL21vZHVsZXMvc3RvcmFnZS5qcz9lZWNiIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFNUT1JBR0VfS0VZID0gXCJ0b2RvLWFwcC1kYXRhXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2F2ZShkYXRhKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTVE9SQUdFX0tFWSwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZCgpIHtcclxuICAgIGNvbnN0IHJhdyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFNUT1JBR0VfS0VZKTtcclxuICAgIGlmICghcmF3KSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKHJhdyk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKFwibG9jYWxTdG9yYWdlIGRhdGEgaXMgY29ycnVwdGVkLCByZXNldHRpbmdcIilcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJTVE9SQUdFX0tFWSIsInNhdmUiLCJkYXRhIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJsb2FkIiwicmF3IiwiZ2V0SXRlbSIsInBhcnNlIiwiZSIsImNvbnNvbGUiLCJ3YXJuIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/modules/storage.js\n\n}");

/***/ },

/***/ "./src/modules/todo.js"
/*!*****************************!*\
  !*** ./src/modules/todo.js ***!
  \*****************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createTodo: () => (/* binding */ createTodo)\n/* harmony export */ });\nfunction createTodo() {\n  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},\n    _ref$id = _ref.id,\n    id = _ref$id === void 0 ? crypto.randomUUID() : _ref$id,\n    _ref$title = _ref.title,\n    title = _ref$title === void 0 ? \"\" : _ref$title,\n    _ref$description = _ref.description,\n    description = _ref$description === void 0 ? \"\" : _ref$description,\n    _ref$dueDate = _ref.dueDate,\n    dueDate = _ref$dueDate === void 0 ? \"\" : _ref$dueDate,\n    _ref$priority = _ref.priority,\n    priority = _ref$priority === void 0 ? \"normal\" : _ref$priority,\n    _ref$notes = _ref.notes,\n    notes = _ref$notes === void 0 ? \"\" : _ref$notes,\n    _ref$completed = _ref.completed,\n    completed = _ref$completed === void 0 ? false : _ref$completed;\n  return {\n    id: id,\n    title: title,\n    description: description,\n    dueDate: dueDate,\n    priority: priority,\n    notes: notes,\n    completed: completed\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy90b2RvLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxTQUFTQSxVQUFVQSxDQUFBLEVBUWxCO0VBQUEsSUFBQUMsSUFBQSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBSixDQUFDLENBQUM7SUFBQUcsT0FBQSxHQUFBSixJQUFBLENBUEZLLEVBQUU7SUFBRkEsRUFBRSxHQUFBRCxPQUFBLGNBQUdFLE1BQU0sQ0FBQ0MsVUFBVSxDQUFDLENBQUMsR0FBQUgsT0FBQTtJQUFBSSxVQUFBLEdBQUFSLElBQUEsQ0FDeEJTLEtBQUs7SUFBTEEsS0FBSyxHQUFBRCxVQUFBLGNBQUcsRUFBRSxHQUFBQSxVQUFBO0lBQUFFLGdCQUFBLEdBQUFWLElBQUEsQ0FDVlcsV0FBVztJQUFYQSxXQUFXLEdBQUFELGdCQUFBLGNBQUcsRUFBRSxHQUFBQSxnQkFBQTtJQUFBRSxZQUFBLEdBQUFaLElBQUEsQ0FDaEJhLE9BQU87SUFBUEEsT0FBTyxHQUFBRCxZQUFBLGNBQUcsRUFBRSxHQUFBQSxZQUFBO0lBQUFFLGFBQUEsR0FBQWQsSUFBQSxDQUNaZSxRQUFRO0lBQVJBLFFBQVEsR0FBQUQsYUFBQSxjQUFHLFFBQVEsR0FBQUEsYUFBQTtJQUFBRSxVQUFBLEdBQUFoQixJQUFBLENBQ25CaUIsS0FBSztJQUFMQSxLQUFLLEdBQUFELFVBQUEsY0FBRyxFQUFFLEdBQUFBLFVBQUE7SUFBQUUsY0FBQSxHQUFBbEIsSUFBQSxDQUNWbUIsU0FBUztJQUFUQSxTQUFTLEdBQUFELGNBQUEsY0FBRyxLQUFLLEdBQUFBLGNBQUE7RUFFakIsT0FBTztJQUFFYixFQUFFLEVBQUZBLEVBQUU7SUFBRUksS0FBSyxFQUFMQSxLQUFLO0lBQUVFLFdBQVcsRUFBWEEsV0FBVztJQUFFRSxPQUFPLEVBQVBBLE9BQU87SUFBRUUsUUFBUSxFQUFSQSxRQUFRO0lBQUVFLEtBQUssRUFBTEEsS0FBSztJQUFFRSxTQUFTLEVBQVRBO0VBQVUsQ0FBQztBQUMxRSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2svLi9zcmMvbW9kdWxlcy90b2RvLmpzP2YxMjkiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRvZG8oe1xuICAgIGlkID0gY3J5cHRvLnJhbmRvbVVVSUQoKSxcbiAgICB0aXRsZSA9IFwiXCIsXG4gICAgZGVzY3JpcHRpb24gPSBcIlwiLFxuICAgIGR1ZURhdGUgPSBcIlwiLFxuICAgIHByaW9yaXR5ID0gXCJub3JtYWxcIixcbiAgICBub3RlcyA9IFwiXCIsXG4gICAgY29tcGxldGVkID0gZmFsc2UsXG59ID0ge30pIHtcbiAgICByZXR1cm4geyBpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMsIGNvbXBsZXRlZCB9O1xufVxuIl0sIm5hbWVzIjpbImNyZWF0ZVRvZG8iLCJfcmVmIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiX3JlZiRpZCIsImlkIiwiY3J5cHRvIiwicmFuZG9tVVVJRCIsIl9yZWYkdGl0bGUiLCJ0aXRsZSIsIl9yZWYkZGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbiIsIl9yZWYkZHVlRGF0ZSIsImR1ZURhdGUiLCJfcmVmJHByaW9yaXR5IiwicHJpb3JpdHkiLCJfcmVmJG5vdGVzIiwibm90ZXMiLCJfcmVmJGNvbXBsZXRlZCIsImNvbXBsZXRlZCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/modules/todo.js\n\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;