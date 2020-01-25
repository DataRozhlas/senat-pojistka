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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/byeie.js":
/*!*********************!*\
  !*** ./js/byeie.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("if (navigator.appName === \"Microsoft Internet Explorer\" || !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/))) {\n  var warn = document.createElement(\"div\");\n  warn.innerHTML = \"Používáte zastaralý Internet Explorer, takže vám části tohoto webu nemusí fungovat. Navíc to <a target=\\\"_blank\\\" style=\\\"color:white;\\\" rel=\\\"noopener noreferrer\\\" href=\\\"https://www.zive.cz/clanky/microsoft-internet-explorer-neni-prohlizec-prestante-ho-tak-pouzivat/sc-3-a-197149/default.aspx\\\">není bezpečné</a>, zvažte přechod na <a target=\\\"_blank\\\" style=\\\"color:white;\\\" rel=\\\"noopener noreferrer\\\" href=\\\"https://www.mozilla.org/cs/firefox/new/\\\">jiný prohlížeč</a>.\";\n  warn.style.cssText = \"text-align:center;position:absolute;width:100%;height:auto;opacity:1;z-index:100;background-color:#d52834;top:37px;padding-top:4px;padding-bottom:3px;color:white;\";\n  document.body.appendChild(warn);\n}\n\n//# sourceURL=webpack:///./js/byeie.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _byeie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./byeie */ \"./js/byeie.js\");\n/* harmony import */ var _byeie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_byeie__WEBPACK_IMPORTED_MODULE_0__);\n // loučíme se s IE\n\n/*\n// snadné načtení souboru pro každého!\nfetch(\"https://blabla.cz/blabla.json\")\n  .then(response => response.json()) // nebo .text(), když to není json\n  .then(data => {\n    // tady jde provést s daty cokoliv\n  });\n*/\n//grafcelek\n\nif (window.innerWidth >= 600) {\n  Highcharts.setOptions({\n    colors: ['#FFCC00', '#EE8027', '#E53434', '#A0067D', '#5E2281', '#172983', '#007BC2', '#89BA17', '#D4B66D', '#B85637', '#A21F16', '#732813', '#5C748C']\n  });\n  Highcharts.chart('grafcelek', {\n    title: {\n      text: 'Zjednodušený legislativní proces'\n    },\n    credits: {\n      enabled: false\n    },\n    series: [{\n      keys: ['from', 'to', 'weight'],\n      data: [['Návrh zákona předložen sněmovně', 'Sněmovna: schválila návrh zákona', 2250], ['Návrh zákona předložen sněmovně', 'Sněmovna: návrh zákona zamítla nebo byl vzat zpět', 913], ['Návrh zákona předložen sněmovně', 'Konec volebního období', 579], ['Sněmovna: schválila návrh zákona', 'Senát: pozměňovací návrhy', 532], ['Sněmovna: schválila návrh zákona', 'Senát: zamítl', 127], ['Sněmovna: schválila návrh zákona', 'Senát: schválil', 1241], ['Sněmovna: schválila návrh zákona', 'Senát: nezabýval se', 342], ['Sněmovna: schválila návrh zákona', 'Senát: zamítl nebo nepřijal usnesení (ústavní zákon)', 8], ['Senát: zamítl', 'Sněmovna: zákon nepřijala', 22], ['Senát: zamítl', 'Sněmovna: setrvala', 85], ['Senát: zamítl', 'Sněmovna: konec volebního období', 19], ['Senát: pozměňovací návrhy', 'Sněmovna: zákon nepřijala', 23], ['Senát: pozměňovací návrhy', 'Sněmovna: přijala pozměňovací návrhy', 302], ['Senát: pozměňovací návrhy', 'Sněmovna: setrvala', 204], ['Senát: pozměňovací návrhy', 'Sněmovna: konec volebního období', 3], ['Senát: schválil', 'Schváleno Senátem ve sněmovní verzi', 1241], ['Senát: nezabýval se', 'Schváleno Senátem ve sněmovní verzi', 342], ['Sněmovna: setrvala', 'Zákon bez posvěcení Senátu', 289], ['Sněmovna: přijala pozměňovací návrhy', 'Zákon s posvěcením Senátu', 302], ['Schváleno Senátem ve sněmovní verzi', 'Zákon s posvěcením Senátu', 1583]],\n      type: 'sankey',\n      name: 'Počet návrhů zákonů v legislativním procesu'\n    }]\n  }); //grafnemajivetsinu\n\n  Highcharts.chart('grafnemajivetsinu', {\n    title: {\n      text: 'Posvěcení Senátu, když strany vládní koalice nemají většinu v Senátu'\n    },\n    credits: {\n      enabled: false\n    },\n    series: [{\n      keys: ['from', 'to', 'weight'],\n      data: [['Předkladatel: kraj', 'Senát: pozměňovací návrhy', 4], ['Předkladatel: kraj', 'Senát: zamítl', 0], ['Předkladatel: kraj', 'Senát: schválil', 9], ['Předkladatel: kraj', 'Senát: nezabýval se', 2], ['Předkladatel: poslanci', 'Senát: pozměňovací návrhy', 66], ['Předkladatel: poslanci', 'Senát: zamítl', 30], ['Předkladatel: poslanci', 'Senát: schválil', 104], ['Předkladatel: poslanci', 'Senát: nezabýval se', 50], ['Předkladatel: Senát', 'Senát: pozměňovací návrhy', 5], ['Předkladatel: Senát', 'Senát: zamítl', 3], ['Předkladatel: Senát', 'Senát: schválil', 22], ['Předkladatel: Senát', 'Senát: nezabýval se', 1], ['Předkladatel: vláda', 'Senát: pozměňovací návrhy', 260], ['Předkladatel: vláda', 'Senát: zamítl', 62], ['Předkladatel: vláda', 'Senát: schválil', 416], ['Předkladatel: vláda', 'Senát: nezabýval se', 153], ['Předkladatel: vláda', 'Senát: zamítl (ústavní zákon)', 6], ['Senát: zamítl', 'Sněmovna: zákon nepřijala', 14], ['Senát: zamítl', 'Sněmovna: setrvala', 68], ['Senát: zamítl', 'Konec volebního období', 12], ['Senát: pozměňovací návrhy', 'Sněmovna: zákon nepřijala', 10], ['Senát: pozměňovací návrhy', 'Sněmovna: přijala pozměňovací návrhy', 182], ['Senát: pozměňovací návrhy', 'Sněmovna: setrvala', 141], ['Senát: pozměňovací návrhy', 'Konec volebního období', 2], ['Senát: schválil', 'Zákon schválen Senátem ve sněmovní verzi', 551], ['Senát: nezabýval se', 'Zákon schválen Senátem ve sněmovní verzi', 206], ['Sněmovna: setrvala', 'Zákon bez posvěcení Senátu', 209], ['Sněmovna: přijala pozměňovací návrhy', 'Zákon s posvěcením Senátu', 182], ['Zákon schválen Senátem ve sněmovní verzi', 'Zákon s posvěcením Senátu', 757]],\n      type: 'sankey',\n      name: 'Počet návrhů zákonů v legislativním procesu'\n    }]\n  }); //grafmajivetsinu\n\n  Highcharts.chart('grafmajivetsinu', {\n    title: {\n      text: 'Posvěcení Senátu, když strany vládní koalice mají většinu v Senátu v době hlasování'\n    },\n    credits: {\n      enabled: false\n    },\n    series: [{\n      keys: ['from', 'to', 'weight'],\n      data: [['Předkladatel: kraj', 'Senát: pozměňovací návrhy', 1], ['Předkladatel: kraj', 'Senát: zamítl', 1], ['Předkladatel: kraj', 'Senát: schválil', 6], ['Předkladatel: kraj', 'Senát: nezabýval se', 1], ['Předkladatel: poslanci', 'Senát: pozměňovací návrhy', 46], ['Předkladatel: poslanci', 'Senát: zamítl', 13], ['Předkladatel: poslanci', 'Senát: schválil', 115], ['Předkladatel: poslanci', 'Senát: nezabýval se', 30], ['Předkladatel: Senát', 'Senát: pozměňovací návrhy', 4], ['Předkladatel: Senát', 'Senát: schválil', 11], ['Předkladatel: Senát', 'Senát: nezabýval se', 4], ['Předkladatel: vláda', 'Senát: pozměňovací návrhy', 146], ['Předkladatel: vláda', 'Senát: zamítl', 17], ['Předkladatel: vláda', 'Senát: schválil', 558], ['Předkladatel: vláda', 'Senát: nezabýval se', 101], ['Předkladatel: vláda', 'Senát: zamítl (ústavní zákon)', 2], ['Senát: zamítl', 'Sněmovna: zákon nepřijala', 8], ['Senát: zamítl', 'Sněmovna: setrvala', 17], ['Senát: zamítl', 'Konec volebního období', 7], ['Senát: pozměňovací návrhy', 'Sněmovna: zákon nepřijala', 13], ['Senát: pozměňovací návrhy', 'Sněmovna: přijala pozměňovací návrhy', 120], ['Senát: pozměňovací návrhy', 'Sněmovna: setrvala', 63], ['Senát: pozměňovací návrhy', 'Konec volebního období', 1], ['Senát: schválil', 'Schváleno Senátem ve sněmovní verzi', 690], ['Senát: nezabýval se', 'Schváleno Senátem ve sněmovní verzi', 136], ['Sněmovna: setrvala', 'Zákon bez posvěcení Senátu', 80], ['Sněmovna: přijala pozměňovací návrhy', 'Zákon s posvěcením Senátu', 120], ['Schváleno Senátem ve sněmovní verzi', 'Zákon s posvěcením Senátu', 826]],\n      type: 'sankey',\n      name: 'Počet návrhů zákonů v legislativním procesu'\n    }]\n  });\n}\n\n//# sourceURL=webpack:///./js/script.js?");

/***/ })

/******/ });