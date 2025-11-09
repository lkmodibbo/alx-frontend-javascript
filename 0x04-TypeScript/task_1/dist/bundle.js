/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/main.ts":
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
/***/ (() => {

eval("{var teacher1 = {\n    firstName: \"Uncle Science\",\n    lastName: \"faisal\",\n    fullTimeEmployee: true,\n    yearsOfEXperience: 5,\n    location: \"Maraba\"\n};\nvar teacher2 = {\n    firstName: \"Uncle Simon\",\n    lastName: \"Umaru\",\n    fullTimeEmployee: false,\n    location: \"Maraba\",\n    contract: true\n};\nvar teacher3 = {\n    firstName: \"Uncle Bilal\",\n    lastName: \"faisal\",\n    fullTimeEmployee: false,\n    location: \"Maraba\",\n    contract: false\n};\nteacher3.fullTimeEmployee = true;\nteacher3.yearsOfEXperience = 2;\nteacher3.contract = true;\nconsole.log('teacher1', teacher1);\nconsole.log('teacher2', teacher2);\nconsole.log('teacher3', teacher3);\nvar output = document.getElementById('output');\nif (output) {\n    var pre = document.createElement('pre');\n    pre.textContent =\n        'teacher1: ' + JSON.stringify(teacher1, null, 2) + '\\n\\n' +\n            'teacher2: ' + JSON.stringify(teacher2, null, 2) + '\\n\\n' +\n            'teacher3: ' + JSON.stringify(teacher3, null, 2);\n    output.appendChild(pre);\n}\n\n\n//# sourceURL=webpack://task_1/./js/main.ts?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/main.ts"]();
/******/ 	
/******/ })()
;