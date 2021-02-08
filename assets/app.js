/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Filters.js":
/*!************************!*\
  !*** ./src/Filters.js ***!
  \************************/
/*! exports provided: Filters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Filters\", function() { return Filters; });\n/* harmony import */ var _UI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI.js */ \"./src/UI.js\");\n\r\n\r\nclass Filters {\r\n  constructor(){\r\n    this.filterElements = document.querySelectorAll('.filterCard');\r\n    this.showAll = document.querySelector('.showAll');\r\n  }\r\n\r\n    resetActive(){\r\n     this.filterElements.forEach(el => {\r\n       el.classList.remove('active');\r\n       this.showAll.classList.remove('activeShowAll');\r\n     })\r\n    }\r\n     activateFilter(jobList){\r\n   \r\n   \r\n   \r\n     this.filterElements.forEach(filter => {\r\n       filter.addEventListener('click', (e)=> {\r\n       this.resetActive();\r\n     e.target.closest('div').classList.add('active');\r\n   \r\n      \r\n         let h2Element = filter.querySelector('h2');\r\n         let role = h2Element.textContent;\r\n   \r\n    \r\n         this.filterJobs(jobList,role);\r\n   \r\n   \r\n       \r\n       })\r\n     })\r\n     this.showAll.addEventListener('click', ()=> {\r\n       this.resetActive();\r\n       this.showAll.classList.add('activeShowAll');\r\n       this.showAllJobs(jobList);\r\n     })\r\n     }\r\n   filterJobs(list, element){\r\n     let filteredJobs =[];\r\n     list.forEach(job => {\r\n      \r\n      if (element.toLowerCase() === job.role.toLowerCase()){\r\n        filteredJobs.push(job);\r\n      }\r\n     })\r\n     _UI_js__WEBPACK_IMPORTED_MODULE_0__[\"RenderJobs\"].renderJobs(filteredJobs);\r\n   }\r\n   showAllJobs(list){\r\n     _UI_js__WEBPACK_IMPORTED_MODULE_0__[\"RenderJobs\"].renderJobs(list);\r\n   }\r\n   }\n\n//# sourceURL=webpack:///./src/Filters.js?");

/***/ }),

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/*! exports provided: RenderJobs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RenderJobs\", function() { return RenderJobs; });\n\r\n\r\n\r\nclass RenderJobs{\r\n    static renderJobs(data){\r\n     \r\n   \r\n        const parentElement = document.querySelector('.jobList');\r\n        parentElement.innerHTML = '';\r\n      \r\n        data.forEach(job => {\r\n          const jobElement = document.createElement('div');\r\n        jobElement.classList.add('job');\r\n        jobElement.id = job.id;\r\n       \r\n      \r\n  jobElement.innerHTML = `<div class ='mainInfo'><div><p> ${job.company}</p><div class='chips'><p class ='featured'> </p> <p class='new'> </p></div></div><img src='${job.logo}'>  </div> \r\n  <div class='moreInfo'><h1> ${job.position}</h1><div class='flex'> <p> ${job.postedAt}</p><p>${job.contract} </p><p>${job.location} </p></div> </div>`;\r\n  parentElement.append(jobElement);\r\n  if(job.new === true){\r\n   const element = jobElement.querySelector('.new');\r\n   element.textContent = 'New';\r\n   element.classList.add('activeNew');\r\n  } \r\n   if (job.featured === true){\r\n    const element = jobElement.querySelector('.featured');\r\n    element.textContent = 'Featured'; \r\n    element.classList.add('activeFeatured');\r\n  } else{\r\n    jobElement.querySelector('.new').remove();\r\n    jobElement.querySelector('.featured').remove();\r\n  }\r\n        });\r\n  \r\n  \r\n    }\r\n  \r\n  }\n\n//# sourceURL=webpack:///./src/UI.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Filters_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Filters.js */ \"./src/Filters.js\");\n/* harmony import */ var _UI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI.js */ \"./src/UI.js\");\n\r\n\r\n\r\n\r\nclass GetJobs{\r\n\r\n    async jobs(){\r\n \r\n      try{\r\n        let result = await fetch('src/data.json');\r\n        let data = await result.json();\r\n        _UI_js__WEBPACK_IMPORTED_MODULE_1__[\"RenderJobs\"].renderJobs(data);\r\n        const filterFunctions = new _Filters_js__WEBPACK_IMPORTED_MODULE_0__[\"Filters\"]();\r\n        filterFunctions.activateFilter(data);\r\n       \r\n      } catch(error){\r\n     console.log(error);\r\n\r\n      }\r\n    \r\n     \r\n    }\r\n   \r\n}\r\n\r\nconst jobs = new GetJobs;\r\njobs.jobs();\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ })

/******/ });