"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/browser-or-node";
exports.ids = ["vendor-chunks/browser-or-node"];
exports.modules = {

/***/ "(rsc)/./node_modules/browser-or-node/lib/index.js":
/*!***************************************************!*\
  !*** ./node_modules/browser-or-node/lib/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function(obj) {\n    return typeof obj;\n} : function(obj) {\n    return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n};\nvar isBrowser =  false && 0;\nvar isNode = typeof process !== \"undefined\" && process.versions != null && process.versions.node != null;\nvar isWebWorker = (typeof self === \"undefined\" ? \"undefined\" : _typeof(self)) === \"object\" && self.constructor && self.constructor.name === \"DedicatedWorkerGlobalScope\";\n/**\n * @see https://github.com/jsdom/jsdom/releases/tag/12.0.0\n * @see https://github.com/jsdom/jsdom/issues/1537\n */ var isJsDom =  false || typeof navigator !== \"undefined\" && (navigator.userAgent.includes(\"Node.js\") || navigator.userAgent.includes(\"jsdom\"));\nvar isDeno = typeof Deno !== \"undefined\" && typeof Deno.version !== \"undefined\" && typeof Deno.version.deno !== \"undefined\";\nexports.isBrowser = isBrowser;\nexports.isWebWorker = isWebWorker;\nexports.isNode = isNode;\nexports.isJsDom = isJsDom;\nexports.isDeno = isDeno;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvYnJvd3Nlci1vci1ub2RlL2xpYi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUViQSw4Q0FBNkM7SUFDM0NHLE9BQU87QUFDVCxDQUFDLEVBQUM7QUFFRixJQUFJQyxVQUFVLE9BQU9DLFdBQVcsY0FBYyxPQUFPQSxPQUFPQyxRQUFRLEtBQUssV0FBVyxTQUFVQyxHQUFHO0lBQUksT0FBTyxPQUFPQTtBQUFLLElBQUksU0FBVUEsR0FBRztJQUFJLE9BQU9BLE9BQU8sT0FBT0YsV0FBVyxjQUFjRSxJQUFJQyxXQUFXLEtBQUtILFVBQVVFLFFBQVFGLE9BQU9JLFNBQVMsR0FBRyxXQUFXLE9BQU9GO0FBQUs7QUFFM1EsSUFBSUcsWUFBWSxNQUE2QixJQUFJLENBQXNDO0FBRXZGLElBQUlHLFNBQVMsT0FBT0MsWUFBWSxlQUFlQSxRQUFRQyxRQUFRLElBQUksUUFBUUQsUUFBUUMsUUFBUSxDQUFDQyxJQUFJLElBQUk7QUFFcEcsSUFBSUMsY0FBYyxDQUFDLE9BQU9DLFNBQVMsY0FBYyxjQUFjZCxRQUFRYyxLQUFJLE1BQU8sWUFBWUEsS0FBS1YsV0FBVyxJQUFJVSxLQUFLVixXQUFXLENBQUNXLElBQUksS0FBSztBQUU1STs7O0NBR0MsR0FDRCxJQUFJQyxVQUFVLE1BQXlELElBQUksT0FBT0MsY0FBYyxlQUFnQkEsQ0FBQUEsVUFBVUMsU0FBUyxDQUFDQyxRQUFRLENBQUMsY0FBY0YsVUFBVUMsU0FBUyxDQUFDQyxRQUFRLENBQUMsUUFBTztBQUUvTCxJQUFJQyxTQUFTLE9BQU9DLFNBQVMsZUFBZSxPQUFPQSxLQUFLQyxPQUFPLEtBQUssZUFBZSxPQUFPRCxLQUFLQyxPQUFPLENBQUNDLElBQUksS0FBSztBQUVoSHpCLGlCQUFpQixHQUFHUTtBQUNwQlIsbUJBQW1CLEdBQUdlO0FBQ3RCZixjQUFjLEdBQUdXO0FBQ2pCWCxlQUFlLEdBQUdrQjtBQUNsQmxCLGNBQWMsR0FBR3NCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmlsZS1tYW5hZ2VtZW50LXN5c3RlbS8uL25vZGVfbW9kdWxlcy9icm93c2VyLW9yLW5vZGUvbGliL2luZGV4LmpzPzMzNmUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIGlzQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIHdpbmRvdy5kb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIjtcblxudmFyIGlzTm9kZSA9IHR5cGVvZiBwcm9jZXNzICE9PSBcInVuZGVmaW5lZFwiICYmIHByb2Nlc3MudmVyc2lvbnMgIT0gbnVsbCAmJiBwcm9jZXNzLnZlcnNpb25zLm5vZGUgIT0gbnVsbDtcblxudmFyIGlzV2ViV29ya2VyID0gKHR5cGVvZiBzZWxmID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yoc2VsZikpID09PSBcIm9iamVjdFwiICYmIHNlbGYuY29uc3RydWN0b3IgJiYgc2VsZi5jb25zdHJ1Y3Rvci5uYW1lID09PSBcIkRlZGljYXRlZFdvcmtlckdsb2JhbFNjb3BlXCI7XG5cbi8qKlxuICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vanNkb20vanNkb20vcmVsZWFzZXMvdGFnLzEyLjAuMFxuICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vanNkb20vanNkb20vaXNzdWVzLzE1MzdcbiAqL1xudmFyIGlzSnNEb20gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5uYW1lID09PSBcIm5vZGVqc1wiIHx8IHR5cGVvZiBuYXZpZ2F0b3IgIT09IFwidW5kZWZpbmVkXCIgJiYgKG5hdmlnYXRvci51c2VyQWdlbnQuaW5jbHVkZXMoXCJOb2RlLmpzXCIpIHx8IG5hdmlnYXRvci51c2VyQWdlbnQuaW5jbHVkZXMoXCJqc2RvbVwiKSk7XG5cbnZhciBpc0Rlbm8gPSB0eXBlb2YgRGVubyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgRGVuby52ZXJzaW9uICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBEZW5vLnZlcnNpb24uZGVubyAhPT0gXCJ1bmRlZmluZWRcIjtcblxuZXhwb3J0cy5pc0Jyb3dzZXIgPSBpc0Jyb3dzZXI7XG5leHBvcnRzLmlzV2ViV29ya2VyID0gaXNXZWJXb3JrZXI7XG5leHBvcnRzLmlzTm9kZSA9IGlzTm9kZTtcbmV4cG9ydHMuaXNKc0RvbSA9IGlzSnNEb207XG5leHBvcnRzLmlzRGVubyA9IGlzRGVubzsiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJfdHlwZW9mIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJvYmoiLCJjb25zdHJ1Y3RvciIsInByb3RvdHlwZSIsImlzQnJvd3NlciIsIndpbmRvdyIsImRvY3VtZW50IiwiaXNOb2RlIiwicHJvY2VzcyIsInZlcnNpb25zIiwibm9kZSIsImlzV2ViV29ya2VyIiwic2VsZiIsIm5hbWUiLCJpc0pzRG9tIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiaW5jbHVkZXMiLCJpc0Rlbm8iLCJEZW5vIiwidmVyc2lvbiIsImRlbm8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/browser-or-node/lib/index.js\n");

/***/ })

};
;