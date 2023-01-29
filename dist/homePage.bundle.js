"use strict";
(self["webpackChunkodin_restaurant_page"] = self["webpackChunkodin_restaurant_page"] || []).push([["homePage"],{

/***/ "./src/homePage.js":
/*!*************************!*\
  !*** ./src/homePage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ homePage)
/* harmony export */ });
/* harmony import */ var _img3_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img3.jpeg */ "./src/img3.jpeg");


function homePage() {
    const element = document.createElement('div');
    element.setAttribute('class', 'content')

    const headlineDiv = document.createElement('div');
    const headlineText = "Come and get Newcastle's finest pasta!";
    headlineDiv.innerText = headlineText;
    headlineDiv.setAttribute('class', 'flex-child');
    
    const copyDiv = document.createElement('div');
    const copyText = "By far The Toon's most elegant pasta, you simply won't believe how delicious this true Geordie-Italian pasta is.";
    copyDiv.innerText = copyText;
    copyDiv.setAttribute('class', 'flex-child');

    element.appendChild(headlineDiv);
    const pastaImage = new Image();
    pastaImage.src = _img3_jpeg__WEBPACK_IMPORTED_MODULE_0__;
    pastaImage.classList.add('pastaImg', 'flex-child')
    element.appendChild(pastaImage);
    element.appendChild(copyDiv);

    return element;
}

/***/ }),

/***/ "./src/img3.jpeg":
/*!***********************!*\
  !*** ./src/img3.jpeg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b681f2abfdce4dd3c1b9.jpeg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/homePage.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZVBhZ2UuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQThCOztBQUVmO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQix1Q0FBRztBQUN4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWVQYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWcgZnJvbSAnLi9pbWczLmpwZWcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBob21lUGFnZSgpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NvbnRlbnQnKVxuXG4gICAgY29uc3QgaGVhZGxpbmVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBoZWFkbGluZVRleHQgPSBcIkNvbWUgYW5kIGdldCBOZXdjYXN0bGUncyBmaW5lc3QgcGFzdGEhXCI7XG4gICAgaGVhZGxpbmVEaXYuaW5uZXJUZXh0ID0gaGVhZGxpbmVUZXh0O1xuICAgIGhlYWRsaW5lRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZmxleC1jaGlsZCcpO1xuICAgIFxuICAgIGNvbnN0IGNvcHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjb3B5VGV4dCA9IFwiQnkgZmFyIFRoZSBUb29uJ3MgbW9zdCBlbGVnYW50IHBhc3RhLCB5b3Ugc2ltcGx5IHdvbid0IGJlbGlldmUgaG93IGRlbGljaW91cyB0aGlzIHRydWUgR2VvcmRpZS1JdGFsaWFuIHBhc3RhIGlzLlwiO1xuICAgIGNvcHlEaXYuaW5uZXJUZXh0ID0gY29weVRleHQ7XG4gICAgY29weURpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ZsZXgtY2hpbGQnKTtcblxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoaGVhZGxpbmVEaXYpO1xuICAgIGNvbnN0IHBhc3RhSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBwYXN0YUltYWdlLnNyYyA9IEltZztcbiAgICBwYXN0YUltYWdlLmNsYXNzTGlzdC5hZGQoJ3Bhc3RhSW1nJywgJ2ZsZXgtY2hpbGQnKVxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQocGFzdGFJbWFnZSk7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChjb3B5RGl2KTtcblxuICAgIHJldHVybiBlbGVtZW50O1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==