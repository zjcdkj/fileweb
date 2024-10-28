"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/files/upload/route";
exports.ids = ["app/api/files/upload/route"];
exports.modules = {

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "string_decoder":
/*!*********************************!*\
  !*** external "string_decoder" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("string_decoder");

/***/ }),

/***/ "timers":
/*!*************************!*\
  !*** external "timers" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("timers");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ffiles%2Fupload%2Froute&page=%2Fapi%2Ffiles%2Fupload%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ffiles%2Fupload%2Froute.ts&appDir=E%3A%5Cchatgpt%5Ccoding%5Caicode%5Cfileweb%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5Cchatgpt%5Ccoding%5Caicode%5Cfileweb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ffiles%2Fupload%2Froute&page=%2Fapi%2Ffiles%2Fupload%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ffiles%2Fupload%2Froute.ts&appDir=E%3A%5Cchatgpt%5Ccoding%5Caicode%5Cfileweb%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5Cchatgpt%5Ccoding%5Caicode%5Cfileweb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var E_chatgpt_coding_aicode_fileweb_src_app_api_files_upload_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/files/upload/route.ts */ \"(rsc)/./src/app/api/files/upload/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/files/upload/route\",\n        pathname: \"/api/files/upload\",\n        filename: \"route\",\n        bundlePath: \"app/api/files/upload/route\"\n    },\n    resolvedPagePath: \"E:\\\\chatgpt\\\\coding\\\\aicode\\\\fileweb\\\\src\\\\app\\\\api\\\\files\\\\upload\\\\route.ts\",\n    nextConfigOutput,\n    userland: E_chatgpt_coding_aicode_fileweb_src_app_api_files_upload_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/files/upload/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZmaWxlcyUyRnVwbG9hZCUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGZmlsZXMlMkZ1cGxvYWQlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZmaWxlcyUyRnVwbG9hZCUyRnJvdXRlLnRzJmFwcERpcj1FJTNBJTVDY2hhdGdwdCU1Q2NvZGluZyU1Q2FpY29kZSU1Q2ZpbGV3ZWIlNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUUlM0ElNUNjaGF0Z3B0JTVDY29kaW5nJTVDYWljb2RlJTVDZmlsZXdlYiZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUM0QjtBQUN6RztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVHQUF1RztBQUMvRztBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzZKOztBQUU3SiIsInNvdXJjZXMiOlsid2VicGFjazovL2ZpbGUtbWFuYWdlbWVudC1zeXN0ZW0vP2Y5MDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiRTpcXFxcY2hhdGdwdFxcXFxjb2RpbmdcXFxcYWljb2RlXFxcXGZpbGV3ZWJcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcZmlsZXNcXFxcdXBsb2FkXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9maWxlcy91cGxvYWQvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9maWxlcy91cGxvYWRcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2ZpbGVzL3VwbG9hZC9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkU6XFxcXGNoYXRncHRcXFxcY29kaW5nXFxcXGFpY29kZVxcXFxmaWxld2ViXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGZpbGVzXFxcXHVwbG9hZFxcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9maWxlcy91cGxvYWQvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0LCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ffiles%2Fupload%2Froute&page=%2Fapi%2Ffiles%2Fupload%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ffiles%2Fupload%2Froute.ts&appDir=E%3A%5Cchatgpt%5Ccoding%5Caicode%5Cfileweb%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5Cchatgpt%5Ccoding%5Caicode%5Cfileweb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/[...nextauth]/route.ts":
/*!*************************************************!*\
  !*** ./src/app/api/auth/[...nextauth]/route.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler),\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var _lib_db_connect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/db/connect */ \"(rsc)/./src/lib/db/connect.ts\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/models/User */ \"(rsc)/./src/models/User.ts\");\n\n\n\n\nconst authOptions = {\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            name: \"Credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"email\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials?.email || !credentials?.password) {\n                    throw new Error(\"请提供邮箱和密码\");\n                }\n                await (0,_lib_db_connect__WEBPACK_IMPORTED_MODULE_2__.connectDB)();\n                const user = await _models_User__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findOne({\n                    email: credentials.email\n                });\n                if (!user) {\n                    throw new Error(\"未找到用户\");\n                }\n                const isValid = await user.comparePassword(credentials.password);\n                if (!isValid) {\n                    throw new Error(\"密码错误\");\n                }\n                return {\n                    id: user._id.toString(),\n                    email: user.email,\n                    name: user.username,\n                    role: user.role\n                };\n            }\n        })\n    ],\n    session: {\n        strategy: \"jwt\"\n    },\n    pages: {\n        signIn: \"/login\"\n    },\n    callbacks: {\n        async jwt ({ token, user }) {\n            if (user) {\n                token.role = user.role;\n                token.id = user.id;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            if (token && session.user) {\n                session.user.role = token.role;\n                session.user.id = token.id;\n            }\n            return session;\n        }\n    }\n};\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBNEU7QUFDVjtBQUNyQjtBQUNaO0FBTzFCLE1BQU1JLGNBQStCO0lBQzFDQyxXQUFXO1FBQ1RKLDJFQUFtQkEsQ0FBQztZQUNsQkssTUFBTTtZQUNOQyxhQUFhO2dCQUNYQyxPQUFPO29CQUFFQyxPQUFPO29CQUFTQyxNQUFNO2dCQUFRO2dCQUN2Q0MsVUFBVTtvQkFBRUYsT0FBTztvQkFBWUMsTUFBTTtnQkFBVztZQUNsRDtZQUNBLE1BQU1FLFdBQVVMLFdBQVc7Z0JBQ3pCLElBQUksQ0FBQ0EsYUFBYUMsU0FBUyxDQUFDRCxhQUFhSSxVQUFVO29CQUNqRCxNQUFNLElBQUlFLE1BQU07Z0JBQ2xCO2dCQUVBLE1BQU1YLDBEQUFTQTtnQkFFZixNQUFNWSxPQUFPLE1BQU1YLG9EQUFJQSxDQUFDWSxPQUFPLENBQUM7b0JBQUVQLE9BQU9ELFlBQVlDLEtBQUs7Z0JBQUM7Z0JBRTNELElBQUksQ0FBQ00sTUFBTTtvQkFDVCxNQUFNLElBQUlELE1BQU07Z0JBQ2xCO2dCQUVBLE1BQU1HLFVBQVUsTUFBTUYsS0FBS0csZUFBZSxDQUFDVixZQUFZSSxRQUFRO2dCQUUvRCxJQUFJLENBQUNLLFNBQVM7b0JBQ1osTUFBTSxJQUFJSCxNQUFNO2dCQUNsQjtnQkFFQSxPQUFPO29CQUNMSyxJQUFJSixLQUFLSyxHQUFHLENBQUNDLFFBQVE7b0JBQ3JCWixPQUFPTSxLQUFLTixLQUFLO29CQUNqQkYsTUFBTVEsS0FBS08sUUFBUTtvQkFDbkJDLE1BQU1SLEtBQUtRLElBQUk7Z0JBQ2pCO1lBQ0Y7UUFDRjtLQUNEO0lBQ0RDLFNBQVM7UUFDUEMsVUFBVTtJQUNaO0lBQ0FDLE9BQU87UUFDTEMsUUFBUTtJQUNWO0lBQ0FDLFdBQVc7UUFDVCxNQUFNQyxLQUFJLEVBQUVDLEtBQUssRUFBRWYsSUFBSSxFQUFFO1lBQ3ZCLElBQUlBLE1BQU07Z0JBQ1JlLE1BQU1QLElBQUksR0FBR1IsS0FBS1EsSUFBSTtnQkFDdEJPLE1BQU1YLEVBQUUsR0FBR0osS0FBS0ksRUFBRTtZQUNwQjtZQUNBLE9BQU9XO1FBQ1Q7UUFDQSxNQUFNTixTQUFRLEVBQUVBLE9BQU8sRUFBRU0sS0FBSyxFQUFFO1lBQzlCLElBQUlBLFNBQVNOLFFBQVFULElBQUksRUFBRTtnQkFDekJTLFFBQVFULElBQUksQ0FBQ1EsSUFBSSxHQUFHTyxNQUFNUCxJQUFJO2dCQUM5QkMsUUFBUVQsSUFBSSxDQUFDSSxFQUFFLEdBQUdXLE1BQU1YLEVBQUU7WUFDNUI7WUFDQSxPQUFPSztRQUNUO0lBQ0Y7QUFDRixFQUFFO0FBRUYsTUFBTU8sVUFBVTlCLGdEQUFRQSxDQUFDSTtBQUNrQiIsInNvdXJjZXMiOlsid2VicGFjazovL2ZpbGUtbWFuYWdlbWVudC1zeXN0ZW0vLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHM/MDA5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGgsIHsgTmV4dEF1dGhPcHRpb25zLCBVc2VyIGFzIE5leHRBdXRoVXNlciB9IGZyb20gJ25leHQtYXV0aCc7XHJcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHMnO1xyXG5pbXBvcnQgeyBjb25uZWN0REIgfSBmcm9tICdAL2xpYi9kYi9jb25uZWN0JztcclxuaW1wb3J0IFVzZXIgZnJvbSAnQC9tb2RlbHMvVXNlcic7XHJcblxyXG5pbnRlcmZhY2UgQ3JlZGVudGlhbHMge1xyXG4gIGVtYWlsOiBzdHJpbmc7XHJcbiAgcGFzc3dvcmQ6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zOiBOZXh0QXV0aE9wdGlvbnMgPSB7XHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBDcmVkZW50aWFsc1Byb3ZpZGVyKHtcclxuICAgICAgbmFtZTogJ0NyZWRlbnRpYWxzJyxcclxuICAgICAgY3JlZGVudGlhbHM6IHtcclxuICAgICAgICBlbWFpbDogeyBsYWJlbDogXCJFbWFpbFwiLCB0eXBlOiBcImVtYWlsXCIgfSxcclxuICAgICAgICBwYXNzd29yZDogeyBsYWJlbDogXCJQYXNzd29yZFwiLCB0eXBlOiBcInBhc3N3b3JkXCIgfVxyXG4gICAgICB9LFxyXG4gICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMpOiBQcm9taXNlPE5leHRBdXRoVXNlciB8IG51bGw+IHtcclxuICAgICAgICBpZiAoIWNyZWRlbnRpYWxzPy5lbWFpbCB8fCAhY3JlZGVudGlhbHM/LnBhc3N3b3JkKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ+ivt+aPkOS+m+mCrueuseWSjOWvhueggScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXdhaXQgY29ubmVjdERCKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IGVtYWlsOiBjcmVkZW50aWFscy5lbWFpbCB9KTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcign5pyq5om+5Yiw55So5oi3Jyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBpc1ZhbGlkID0gYXdhaXQgdXNlci5jb21wYXJlUGFzc3dvcmQoY3JlZGVudGlhbHMucGFzc3dvcmQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICghaXNWYWxpZCkge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCflr4bnoIHplJnor68nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBpZDogdXNlci5faWQudG9TdHJpbmcoKSxcclxuICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxyXG4gICAgICAgICAgbmFtZTogdXNlci51c2VybmFtZSxcclxuICAgICAgICAgIHJvbGU6IHVzZXIucm9sZSxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIF0sXHJcbiAgc2Vzc2lvbjoge1xyXG4gICAgc3RyYXRlZ3k6ICdqd3QnLFxyXG4gIH0sXHJcbiAgcGFnZXM6IHtcclxuICAgIHNpZ25JbjogJy9sb2dpbicsXHJcbiAgfSxcclxuICBjYWxsYmFja3M6IHtcclxuICAgIGFzeW5jIGp3dCh7IHRva2VuLCB1c2VyIH0pIHtcclxuICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICB0b2tlbi5yb2xlID0gdXNlci5yb2xlO1xyXG4gICAgICAgIHRva2VuLmlkID0gdXNlci5pZDtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdG9rZW47XHJcbiAgICB9LFxyXG4gICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuIH0pIHtcclxuICAgICAgaWYgKHRva2VuICYmIHNlc3Npb24udXNlcikge1xyXG4gICAgICAgIHNlc3Npb24udXNlci5yb2xlID0gdG9rZW4ucm9sZSBhcyBzdHJpbmc7XHJcbiAgICAgICAgc2Vzc2lvbi51c2VyLmlkID0gdG9rZW4uaWQgYXMgc3RyaW5nO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBzZXNzaW9uO1xyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgaGFuZGxlciA9IE5leHRBdXRoKGF1dGhPcHRpb25zKTtcclxuZXhwb3J0IHsgaGFuZGxlciBhcyBHRVQsIGhhbmRsZXIgYXMgUE9TVCB9O1xyXG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiY29ubmVjdERCIiwiVXNlciIsImF1dGhPcHRpb25zIiwicHJvdmlkZXJzIiwibmFtZSIsImNyZWRlbnRpYWxzIiwiZW1haWwiLCJsYWJlbCIsInR5cGUiLCJwYXNzd29yZCIsImF1dGhvcml6ZSIsIkVycm9yIiwidXNlciIsImZpbmRPbmUiLCJpc1ZhbGlkIiwiY29tcGFyZVBhc3N3b3JkIiwiaWQiLCJfaWQiLCJ0b1N0cmluZyIsInVzZXJuYW1lIiwicm9sZSIsInNlc3Npb24iLCJzdHJhdGVneSIsInBhZ2VzIiwic2lnbkluIiwiY2FsbGJhY2tzIiwiand0IiwidG9rZW4iLCJoYW5kbGVyIiwiR0VUIiwiUE9TVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/[...nextauth]/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/app/api/files/upload/route.ts":
/*!*******************************************!*\
  !*** ./src/app/api/files/upload/route.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   config: () => (/* binding */ config)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _auth_nextauth_route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth/[...nextauth]/route */ \"(rsc)/./src/app/api/auth/[...nextauth]/route.ts\");\n/* harmony import */ var _lib_minio_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/minio/client */ \"(rsc)/./src/lib/minio/client.ts\");\n/* harmony import */ var _lib_db_connect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/db/connect */ \"(rsc)/./src/lib/db/connect.ts\");\n/* harmony import */ var _models_File__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/models/File */ \"(rsc)/./src/models/File.ts\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! uuid */ \"(rsc)/./node_modules/uuid/dist/esm-node/v4.js\");\n\n\n\n\n\n\n\n\n// 解析 multipart/form-data\nasync function parseMultipartForm(request) {\n    const formData = await request.formData();\n    const file = formData.get(\"file\");\n    const folderId = formData.get(\"folderId\");\n    if (!file) {\n        throw new Error(\"No file uploaded\");\n    }\n    return {\n        file,\n        folderId\n    };\n}\n// 编码文件名，移除非法字符\nfunction encodeFileName(fileName) {\n    return Buffer.from(fileName).toString(\"base64\");\n}\nasync function POST(request) {\n    try {\n        const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_auth_nextauth_route__WEBPACK_IMPORTED_MODULE_2__.authOptions);\n        if (!session) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                message: \"未授权\"\n            }, {\n                status: 401\n            });\n        }\n        // 解析上传的文件\n        const { file, folderId } = await parseMultipartForm(request);\n        const buffer = Buffer.from(await file.arrayBuffer());\n        // 生成文件信息\n        const originalName = file.name;\n        const extension = path__WEBPACK_IMPORTED_MODULE_6___default().extname(originalName).toLowerCase().slice(1);\n        const uniqueFileName = `${(0,uuid__WEBPACK_IMPORTED_MODULE_7__[\"default\"])()}.${extension}`;\n        const filePath = `${session.user.id}/${folderId || \"root\"}/${uniqueFileName}`;\n        // 确保 bucket 存在\n        await (0,_lib_minio_client__WEBPACK_IMPORTED_MODULE_3__.ensureBucket)();\n        // 上传到 MinIO，使用 base64 编码的文件名作为元数据\n        await _lib_minio_client__WEBPACK_IMPORTED_MODULE_3__.minioClient.putObject(_lib_minio_client__WEBPACK_IMPORTED_MODULE_3__.BUCKET_NAME, filePath, buffer, buffer.length, {\n            \"Content-Type\": file.type,\n            \"x-amz-meta-originalname\": encodeFileName(originalName)\n        });\n        // 连接数据库\n        await (0,_lib_db_connect__WEBPACK_IMPORTED_MODULE_4__.connectDB)();\n        // 创建文件记录\n        const fileDoc = new _models_File__WEBPACK_IMPORTED_MODULE_5__[\"default\"]({\n            name: originalName,\n            originalName,\n            size: buffer.length,\n            type: file.type,\n            extension,\n            folderId: folderId || null,\n            path: filePath,\n            createdBy: session.user.id\n        });\n        await fileDoc.save();\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            message: \"文件上传成功\",\n            file: fileDoc\n        }, {\n            status: 201\n        });\n    } catch (error) {\n        console.error(\"文件上传错误:\", error);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            message: \"文件上传失败\"\n        }, {\n            status: 500\n        });\n    }\n}\n// 配置较大的请求体限制\nconst config = {\n    api: {\n        bodyParser: false,\n        responseLimit: false\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bG9hZC9yb3V0ZS50cz80NDdiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcclxuaW1wb3J0IHsgZ2V0U2VydmVyU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aCc7XHJcbmltcG9ydCB7IGF1dGhPcHRpb25zIH0gZnJvbSAnLi4vLi4vYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlJztcclxuaW1wb3J0IHsgbWluaW9DbGllbnQsIEJVQ0tFVF9OQU1FLCBlbnN1cmVCdWNrZXQgfSBmcm9tICdAL2xpYi9taW5pby9jbGllbnQnO1xyXG5pbXBvcnQgeyBjb25uZWN0REIgfSBmcm9tICdAL2xpYi9kYi9jb25uZWN0JztcclxuaW1wb3J0IEZpbGUgZnJvbSAnQC9tb2RlbHMvRmlsZSc7XHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xyXG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcclxuXHJcbi8vIOino+aekCBtdWx0aXBhcnQvZm9ybS1kYXRhXHJcbmFzeW5jIGZ1bmN0aW9uIHBhcnNlTXVsdGlwYXJ0Rm9ybShyZXF1ZXN0OiBSZXF1ZXN0KSB7XHJcbiAgY29uc3QgZm9ybURhdGEgPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XHJcbiAgY29uc3QgZmlsZSA9IGZvcm1EYXRhLmdldCgnZmlsZScpIGFzIEZpbGU7XHJcbiAgY29uc3QgZm9sZGVySWQgPSBmb3JtRGF0YS5nZXQoJ2ZvbGRlcklkJykgYXMgc3RyaW5nO1xyXG4gIFxyXG4gIGlmICghZmlsZSkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdObyBmaWxlIHVwbG9hZGVkJyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4geyBmaWxlLCBmb2xkZXJJZCB9O1xyXG59XHJcblxyXG4vLyDnvJbnoIHmlofku7blkI3vvIznp7vpmaTpnZ7ms5XlrZfnrKZcclxuZnVuY3Rpb24gZW5jb2RlRmlsZU5hbWUoZmlsZU5hbWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgcmV0dXJuIEJ1ZmZlci5mcm9tKGZpbGVOYW1lKS50b1N0cmluZygnYmFzZTY0Jyk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3Q6IFJlcXVlc3QpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlcnZlclNlc3Npb24oYXV0aE9wdGlvbnMpO1xyXG4gICAgaWYgKCFzZXNzaW9uKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6ICfmnKrmjojmnYMnIH0sIHsgc3RhdHVzOiA0MDEgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6Kej5p6Q5LiK5Lyg55qE5paH5Lu2XHJcbiAgICBjb25zdCB7IGZpbGUsIGZvbGRlcklkIH0gPSBhd2FpdCBwYXJzZU11bHRpcGFydEZvcm0ocmVxdWVzdCk7XHJcbiAgICBjb25zdCBidWZmZXIgPSBCdWZmZXIuZnJvbShhd2FpdCBmaWxlLmFycmF5QnVmZmVyKCkpO1xyXG4gICAgXHJcbiAgICAvLyDnlJ/miJDmlofku7bkv6Hmga9cclxuICAgIGNvbnN0IG9yaWdpbmFsTmFtZSA9IGZpbGUubmFtZTtcclxuICAgIGNvbnN0IGV4dGVuc2lvbiA9IHBhdGguZXh0bmFtZShvcmlnaW5hbE5hbWUpLnRvTG93ZXJDYXNlKCkuc2xpY2UoMSk7XHJcbiAgICBjb25zdCB1bmlxdWVGaWxlTmFtZSA9IGAke3V1aWR2NCgpfS4ke2V4dGVuc2lvbn1gO1xyXG4gICAgY29uc3QgZmlsZVBhdGggPSBgJHtzZXNzaW9uLnVzZXIuaWR9LyR7Zm9sZGVySWQgfHwgJ3Jvb3QnfS8ke3VuaXF1ZUZpbGVOYW1lfWA7XHJcblxyXG4gICAgLy8g56Gu5L+dIGJ1Y2tldCDlrZjlnKhcclxuICAgIGF3YWl0IGVuc3VyZUJ1Y2tldCgpO1xyXG5cclxuICAgIC8vIOS4iuS8oOWIsCBNaW5JT++8jOS9v+eUqCBiYXNlNjQg57yW56CB55qE5paH5Lu25ZCN5L2c5Li65YWD5pWw5o2uXHJcbiAgICBhd2FpdCBtaW5pb0NsaWVudC5wdXRPYmplY3QoXHJcbiAgICAgIEJVQ0tFVF9OQU1FLFxyXG4gICAgICBmaWxlUGF0aCxcclxuICAgICAgYnVmZmVyLFxyXG4gICAgICBidWZmZXIubGVuZ3RoLFxyXG4gICAgICB7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6IGZpbGUudHlwZSxcclxuICAgICAgICAneC1hbXotbWV0YS1vcmlnaW5hbG5hbWUnOiBlbmNvZGVGaWxlTmFtZShvcmlnaW5hbE5hbWUpLFxyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIC8vIOi/nuaOpeaVsOaNruW6k1xyXG4gICAgYXdhaXQgY29ubmVjdERCKCk7XHJcblxyXG4gICAgLy8g5Yib5bu65paH5Lu26K6w5b2VXHJcbiAgICBjb25zdCBmaWxlRG9jID0gbmV3IEZpbGUoe1xyXG4gICAgICBuYW1lOiBvcmlnaW5hbE5hbWUsXHJcbiAgICAgIG9yaWdpbmFsTmFtZSxcclxuICAgICAgc2l6ZTogYnVmZmVyLmxlbmd0aCxcclxuICAgICAgdHlwZTogZmlsZS50eXBlLFxyXG4gICAgICBleHRlbnNpb24sXHJcbiAgICAgIGZvbGRlcklkOiBmb2xkZXJJZCB8fCBudWxsLFxyXG4gICAgICBwYXRoOiBmaWxlUGF0aCxcclxuICAgICAgY3JlYXRlZEJ5OiBzZXNzaW9uLnVzZXIuaWQsXHJcbiAgICB9KTtcclxuXHJcbiAgICBhd2FpdCBmaWxlRG9jLnNhdmUoKTtcclxuXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1xyXG4gICAgICBtZXNzYWdlOiAn5paH5Lu25LiK5Lyg5oiQ5YqfJyxcclxuICAgICAgZmlsZTogZmlsZURvY1xyXG4gICAgfSwgeyBzdGF0dXM6IDIwMSB9KTtcclxuXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ+aWh+S7tuS4iuS8oOmUmeivrzonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXHJcbiAgICAgIHsgbWVzc2FnZTogJ+aWh+S7tuS4iuS8oOWksei0pScgfSxcclxuICAgICAgeyBzdGF0dXM6IDUwMCB9XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuLy8g6YWN572u6L6D5aSn55qE6K+35rGC5L2T6ZmQ5Yi2XHJcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XHJcbiAgYXBpOiB7XHJcbiAgICBib2R5UGFyc2VyOiBmYWxzZSxcclxuICAgIHJlc3BvbnNlTGltaXQ6IGZhbHNlLFxyXG4gIH0sXHJcbn07XHJcbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJnZXRTZXJ2ZXJTZXNzaW9uIiwiYXV0aE9wdGlvbnMiLCJtaW5pb0NsaWVudCIsIkJVQ0tFVF9OQU1FIiwiZW5zdXJlQnVja2V0IiwiY29ubmVjdERCIiwiRmlsZSIsInBhdGgiLCJ2NCIsInV1aWR2NCIsInBhcnNlTXVsdGlwYXJ0Rm9ybSIsInJlcXVlc3QiLCJmb3JtRGF0YSIsImZpbGUiLCJnZXQiLCJmb2xkZXJJZCIsIkVycm9yIiwiZW5jb2RlRmlsZU5hbWUiLCJmaWxlTmFtZSIsIkJ1ZmZlciIsImZyb20iLCJ0b1N0cmluZyIsIlBPU1QiLCJzZXNzaW9uIiwianNvbiIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJidWZmZXIiLCJhcnJheUJ1ZmZlciIsIm9yaWdpbmFsTmFtZSIsIm5hbWUiLCJleHRlbnNpb24iLCJleHRuYW1lIiwidG9Mb3dlckNhc2UiLCJzbGljZSIsInVuaXF1ZUZpbGVOYW1lIiwiZmlsZVBhdGgiLCJ1c2VyIiwiaWQiLCJwdXRPYmplY3QiLCJsZW5ndGgiLCJ0eXBlIiwiZmlsZURvYyIsInNpemUiLCJjcmVhdGVkQnkiLCJzYXZlIiwiZXJyb3IiLCJjb25zb2xlIiwiY29uZmlnIiwiYXBpIiwiYm9keVBhcnNlciIsInJlc3BvbnNlTGltaXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/files/upload/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/db/connect.ts":
/*!*******************************!*\
  !*** ./src/lib/db/connect.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectDB: () => (/* binding */ connectDB)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nif (!process.env.MONGODB_URI) {\n    throw new Error(\"请在环境变量中设置 MONGODB_URI\");\n}\nasync function connectDB() {\n    try {\n        if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection).readyState === 1) {\n            return;\n        }\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI);\n        console.log(\"MongoDB connected successfully\");\n    } catch (error) {\n        console.error(\"MongoDB connection error:\", error);\n        throw error;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2RiL2Nvbm5lY3QudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLElBQUksQ0FBQ0MsUUFBUUMsR0FBRyxDQUFDQyxXQUFXLEVBQUU7SUFDNUIsTUFBTSxJQUFJQyxNQUFNO0FBQ2xCO0FBRU8sZUFBZUM7SUFDcEIsSUFBSTtRQUNGLElBQUlMLDREQUFtQixDQUFDTyxVQUFVLEtBQUssR0FBRztZQUN4QztRQUNGO1FBRUEsTUFBTVAsdURBQWdCLENBQUNDLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVztRQUM5Q00sUUFBUUMsR0FBRyxDQUFDO0lBQ2QsRUFBRSxPQUFPQyxPQUFPO1FBQ2RGLFFBQVFFLEtBQUssQ0FBQyw2QkFBNkJBO1FBQzNDLE1BQU1BO0lBQ1I7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2ZpbGUtbWFuYWdlbWVudC1zeXN0ZW0vLi9zcmMvbGliL2RiL2Nvbm5lY3QudHM/MjJlOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuaWYgKCFwcm9jZXNzLmVudi5NT05HT0RCX1VSSSkge1xyXG4gIHRocm93IG5ldyBFcnJvcign6K+35Zyo546v5aKD5Y+Y6YeP5Lit6K6+572uIE1PTkdPREJfVVJJJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb25uZWN0REIoKSB7XHJcbiAgdHJ5IHtcclxuICAgIGlmIChtb25nb29zZS5jb25uZWN0aW9uLnJlYWR5U3RhdGUgPT09IDEpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkpO1xyXG4gICAgY29uc29sZS5sb2coJ01vbmdvREIgY29ubmVjdGVkIHN1Y2Nlc3NmdWxseScpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdNb25nb0RCIGNvbm5lY3Rpb24gZXJyb3I6JywgZXJyb3IpO1xyXG4gICAgdGhyb3cgZXJyb3I7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSSSIsIkVycm9yIiwiY29ubmVjdERCIiwiY29ubmVjdGlvbiIsInJlYWR5U3RhdGUiLCJjb25uZWN0IiwiY29uc29sZSIsImxvZyIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/db/connect.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/minio/client.ts":
/*!*********************************!*\
  !*** ./src/lib/minio/client.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BUCKET_NAME: () => (/* binding */ BUCKET_NAME),\n/* harmony export */   ensureBucket: () => (/* binding */ ensureBucket),\n/* harmony export */   minioClient: () => (/* binding */ minioClient)\n/* harmony export */ });\n/* harmony import */ var minio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! minio */ \"(rsc)/./node_modules/minio/dist/esm/minio.mjs\");\n\nif (!process.env.MINIO_ENDPOINT || !process.env.MINIO_ACCESS_KEY || !process.env.MINIO_SECRET_KEY || !process.env.MINIO_BUCKET_NAME) {\n    throw new Error(\"MinIO 配置缺失\");\n}\nconst minioClient = new minio__WEBPACK_IMPORTED_MODULE_0__.Client({\n    endPoint: process.env.MINIO_ENDPOINT,\n    port: parseInt(process.env.MINIO_PORT || \"9000\"),\n    useSSL: false,\n    accessKey: process.env.MINIO_ACCESS_KEY,\n    secretKey: process.env.MINIO_SECRET_KEY\n});\nconst BUCKET_NAME = process.env.MINIO_BUCKET_NAME;\n// 确保 bucket 存在\nasync function ensureBucket() {\n    const exists = await minioClient.bucketExists(BUCKET_NAME);\n    if (!exists) {\n        await minioClient.makeBucket(BUCKET_NAME);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL21pbmlvL2NsaWVudC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQStCO0FBRS9CLElBQUksQ0FBQ0MsUUFBUUMsR0FBRyxDQUFDQyxjQUFjLElBQzNCLENBQUNGLFFBQVFDLEdBQUcsQ0FBQ0UsZ0JBQWdCLElBQzdCLENBQUNILFFBQVFDLEdBQUcsQ0FBQ0csZ0JBQWdCLElBQzdCLENBQUNKLFFBQVFDLEdBQUcsQ0FBQ0ksaUJBQWlCLEVBQUU7SUFDbEMsTUFBTSxJQUFJQyxNQUFNO0FBQ2xCO0FBRU8sTUFBTUMsY0FBYyxJQUFJUix5Q0FBTUEsQ0FBQztJQUNwQ1MsVUFBVVIsUUFBUUMsR0FBRyxDQUFDQyxjQUFjO0lBQ3BDTyxNQUFNQyxTQUFTVixRQUFRQyxHQUFHLENBQUNVLFVBQVUsSUFBSTtJQUN6Q0MsUUFBUTtJQUNSQyxXQUFXYixRQUFRQyxHQUFHLENBQUNFLGdCQUFnQjtJQUN2Q1csV0FBV2QsUUFBUUMsR0FBRyxDQUFDRyxnQkFBZ0I7QUFDekMsR0FBRztBQUVJLE1BQU1XLGNBQWNmLFFBQVFDLEdBQUcsQ0FBQ0ksaUJBQWlCLENBQUM7QUFFekQsZUFBZTtBQUNSLGVBQWVXO0lBQ3BCLE1BQU1DLFNBQVMsTUFBTVYsWUFBWVcsWUFBWSxDQUFDSDtJQUM5QyxJQUFJLENBQUNFLFFBQVE7UUFDWCxNQUFNVixZQUFZWSxVQUFVLENBQUNKO0lBQy9CO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maWxlLW1hbmFnZW1lbnQtc3lzdGVtLy4vc3JjL2xpYi9taW5pby9jbGllbnQudHM/NTE0NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbGllbnQgfSBmcm9tICdtaW5pbyc7XHJcblxyXG5pZiAoIXByb2Nlc3MuZW52Lk1JTklPX0VORFBPSU5UIHx8IFxyXG4gICAgIXByb2Nlc3MuZW52Lk1JTklPX0FDQ0VTU19LRVkgfHwgXHJcbiAgICAhcHJvY2Vzcy5lbnYuTUlOSU9fU0VDUkVUX0tFWSB8fCBcclxuICAgICFwcm9jZXNzLmVudi5NSU5JT19CVUNLRVRfTkFNRSkge1xyXG4gIHRocm93IG5ldyBFcnJvcignTWluSU8g6YWN572u57y65aSxJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBtaW5pb0NsaWVudCA9IG5ldyBDbGllbnQoe1xyXG4gIGVuZFBvaW50OiBwcm9jZXNzLmVudi5NSU5JT19FTkRQT0lOVCxcclxuICBwb3J0OiBwYXJzZUludChwcm9jZXNzLmVudi5NSU5JT19QT1JUIHx8ICc5MDAwJyksXHJcbiAgdXNlU1NMOiBmYWxzZSxcclxuICBhY2Nlc3NLZXk6IHByb2Nlc3MuZW52Lk1JTklPX0FDQ0VTU19LRVksXHJcbiAgc2VjcmV0S2V5OiBwcm9jZXNzLmVudi5NSU5JT19TRUNSRVRfS0VZXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJVQ0tFVF9OQU1FID0gcHJvY2Vzcy5lbnYuTUlOSU9fQlVDS0VUX05BTUU7XHJcblxyXG4vLyDnoa7kv50gYnVja2V0IOWtmOWcqFxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZW5zdXJlQnVja2V0KCkge1xyXG4gIGNvbnN0IGV4aXN0cyA9IGF3YWl0IG1pbmlvQ2xpZW50LmJ1Y2tldEV4aXN0cyhCVUNLRVRfTkFNRSk7XHJcbiAgaWYgKCFleGlzdHMpIHtcclxuICAgIGF3YWl0IG1pbmlvQ2xpZW50Lm1ha2VCdWNrZXQoQlVDS0VUX05BTUUpO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiQ2xpZW50IiwicHJvY2VzcyIsImVudiIsIk1JTklPX0VORFBPSU5UIiwiTUlOSU9fQUNDRVNTX0tFWSIsIk1JTklPX1NFQ1JFVF9LRVkiLCJNSU5JT19CVUNLRVRfTkFNRSIsIkVycm9yIiwibWluaW9DbGllbnQiLCJlbmRQb2ludCIsInBvcnQiLCJwYXJzZUludCIsIk1JTklPX1BPUlQiLCJ1c2VTU0wiLCJhY2Nlc3NLZXkiLCJzZWNyZXRLZXkiLCJCVUNLRVRfTkFNRSIsImVuc3VyZUJ1Y2tldCIsImV4aXN0cyIsImJ1Y2tldEV4aXN0cyIsIm1ha2VCdWNrZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/minio/client.ts\n");

/***/ }),

/***/ "(rsc)/./src/models/File.ts":
/*!****************************!*\
  !*** ./src/models/File.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst FileSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    name: {\n        type: String,\n        required: true\n    },\n    originalName: {\n        type: String,\n        required: true\n    },\n    size: {\n        type: Number,\n        required: true\n    },\n    type: {\n        type: String,\n        required: true\n    },\n    extension: {\n        type: String,\n        required: true\n    },\n    folderId: {\n        type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.ObjectId,\n        ref: \"Folder\",\n        default: null\n    },\n    path: {\n        type: String,\n        required: true\n    },\n    createdBy: {\n        type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.ObjectId,\n        ref: \"User\",\n        required: true\n    }\n}, {\n    timestamps: true\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).File || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"File\", FileSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL0ZpbGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXNEO0FBR3RELE1BQU1FLGFBQWEsSUFBSUQsNENBQU1BLENBQUM7SUFDNUJFLE1BQU07UUFDSkMsTUFBTUM7UUFDTkMsVUFBVTtJQUNaO0lBQ0FDLGNBQWM7UUFDWkgsTUFBTUM7UUFDTkMsVUFBVTtJQUNaO0lBQ0FFLE1BQU07UUFDSkosTUFBTUs7UUFDTkgsVUFBVTtJQUNaO0lBQ0FGLE1BQU07UUFDSkEsTUFBTUM7UUFDTkMsVUFBVTtJQUNaO0lBQ0FJLFdBQVc7UUFDVE4sTUFBTUM7UUFDTkMsVUFBVTtJQUNaO0lBQ0FLLFVBQVU7UUFDUlAsTUFBTUgsNENBQU1BLENBQUNXLEtBQUssQ0FBQ0MsUUFBUTtRQUMzQkMsS0FBSztRQUNMQyxTQUFTO0lBQ1g7SUFDQUMsTUFBTTtRQUNKWixNQUFNQztRQUNOQyxVQUFVO0lBQ1o7SUFDQVcsV0FBVztRQUNUYixNQUFNSCw0Q0FBTUEsQ0FBQ1csS0FBSyxDQUFDQyxRQUFRO1FBQzNCQyxLQUFLO1FBQ0xSLFVBQVU7SUFDWjtBQUNGLEdBQUc7SUFDRFksWUFBWTtBQUNkO0FBRUEsaUVBQWVsQix3REFBZSxDQUFDb0IsSUFBSSxJQUFJcEIscURBQWMsQ0FBbUIsUUFBUUUsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZpbGUtbWFuYWdlbWVudC1zeXN0ZW0vLi9zcmMvbW9kZWxzL0ZpbGUudHM/NDlmNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UsIHsgU2NoZW1hLCBEb2N1bWVudCB9IGZyb20gJ21vbmdvb3NlJztcclxuaW1wb3J0IHsgSUZpbGUgfSBmcm9tICdAL3R5cGVzL2ZpbGUnO1xyXG5cclxuY29uc3QgRmlsZVNjaGVtYSA9IG5ldyBTY2hlbWEoe1xyXG4gIG5hbWU6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gIH0sXHJcbiAgb3JpZ2luYWxOYW1lOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICByZXF1aXJlZDogdHJ1ZSxcclxuICB9LFxyXG4gIHNpemU6IHtcclxuICAgIHR5cGU6IE51bWJlcixcclxuICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gIH0sXHJcbiAgdHlwZToge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgfSxcclxuICBleHRlbnNpb246IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gIH0sXHJcbiAgZm9sZGVySWQ6IHtcclxuICAgIHR5cGU6IFNjaGVtYS5UeXBlcy5PYmplY3RJZCxcclxuICAgIHJlZjogJ0ZvbGRlcicsXHJcbiAgICBkZWZhdWx0OiBudWxsLFxyXG4gIH0sXHJcbiAgcGF0aDoge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgfSxcclxuICBjcmVhdGVkQnk6IHtcclxuICAgIHR5cGU6IFNjaGVtYS5UeXBlcy5PYmplY3RJZCxcclxuICAgIHJlZjogJ1VzZXInLFxyXG4gICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgfSxcclxufSwge1xyXG4gIHRpbWVzdGFtcHM6IHRydWUsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWxzLkZpbGUgfHwgbW9uZ29vc2UubW9kZWw8SUZpbGUgJiBEb2N1bWVudD4oJ0ZpbGUnLCBGaWxlU2NoZW1hKTtcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiU2NoZW1hIiwiRmlsZVNjaGVtYSIsIm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJvcmlnaW5hbE5hbWUiLCJzaXplIiwiTnVtYmVyIiwiZXh0ZW5zaW9uIiwiZm9sZGVySWQiLCJUeXBlcyIsIk9iamVjdElkIiwicmVmIiwiZGVmYXVsdCIsInBhdGgiLCJjcmVhdGVkQnkiLCJ0aW1lc3RhbXBzIiwibW9kZWxzIiwiRmlsZSIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/models/File.ts\n");

/***/ }),

/***/ "(rsc)/./src/models/User.ts":
/*!****************************!*\
  !*** ./src/models/User.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    username: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    email: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    password: {\n        type: String,\n        required: true\n    },\n    avatar: {\n        type: String\n    },\n    role: {\n        type: String,\n        enum: [\n            \"user\",\n            \"admin\"\n        ],\n        default: \"user\"\n    }\n}, {\n    timestamps: true\n});\n// 密码加密中间件\nUserSchema.pre(\"save\", async function(next) {\n    if (!this.isModified(\"password\")) return next();\n    try {\n        const salt = await bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().genSalt(10);\n        this.password = await bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().hash(this.password, salt);\n        next();\n    } catch (error) {\n        next(error);\n    }\n});\n// 密码比较方法\nUserSchema.methods.comparePassword = async function(candidatePassword) {\n    return bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().compare(candidatePassword, this.password);\n};\nconst User = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).User || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", UserSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL1VzZXIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBNkQ7QUFDL0I7QUFjOUIsTUFBTUcsYUFBYSxJQUFJRiw0Q0FBTUEsQ0FBQztJQUM1QkcsVUFBVTtRQUNSQyxNQUFNQztRQUNOQyxVQUFVO1FBQ1ZDLFFBQVE7SUFDVjtJQUNBQyxPQUFPO1FBQ0xKLE1BQU1DO1FBQ05DLFVBQVU7UUFDVkMsUUFBUTtJQUNWO0lBQ0FFLFVBQVU7UUFDUkwsTUFBTUM7UUFDTkMsVUFBVTtJQUNaO0lBQ0FJLFFBQVE7UUFDTk4sTUFBTUM7SUFDUjtJQUNBTSxNQUFNO1FBQ0pQLE1BQU1DO1FBQ05PLE1BQU07WUFBQztZQUFRO1NBQVE7UUFDdkJDLFNBQVM7SUFDWDtBQUNGLEdBQUc7SUFDREMsWUFBWTtBQUNkO0FBRUEsVUFBVTtBQUNWWixXQUFXYSxHQUFHLENBQUMsUUFBUSxlQUFlQyxJQUFJO0lBQ3hDLElBQUksQ0FBQyxJQUFJLENBQUNDLFVBQVUsQ0FBQyxhQUFhLE9BQU9EO0lBRXpDLElBQUk7UUFDRixNQUFNRSxPQUFPLE1BQU1qQix1REFBYyxDQUFDO1FBQ2xDLElBQUksQ0FBQ1EsUUFBUSxHQUFHLE1BQU1SLG9EQUFXLENBQUMsSUFBSSxDQUFDUSxRQUFRLEVBQUVTO1FBQ2pERjtJQUNGLEVBQUUsT0FBT0ssT0FBTztRQUNkTCxLQUFLSztJQUNQO0FBQ0Y7QUFFQSxTQUFTO0FBQ1RuQixXQUFXb0IsT0FBTyxDQUFDQyxlQUFlLEdBQUcsZUFBZUMsaUJBQXlCO0lBQzNFLE9BQU92Qix1REFBYyxDQUFDdUIsbUJBQW1CLElBQUksQ0FBQ2YsUUFBUTtBQUN4RDtBQUVBLE1BQU1pQixPQUFRM0Isd0RBQWUsQ0FBQzJCLElBQUksSUFBSTNCLHFEQUFjLENBQVEsUUFBUUc7QUFDcEUsaUVBQWV3QixJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmlsZS1tYW5hZ2VtZW50LXN5c3RlbS8uL3NyYy9tb2RlbHMvVXNlci50cz8wOTZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSwgeyBTY2hlbWEsIERvY3VtZW50LCBNb2RlbCB9IGZyb20gJ21vbmdvb3NlJztcclxuaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHRqcyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElVc2VyIGV4dGVuZHMgRG9jdW1lbnQge1xyXG4gIF9pZDogbW9uZ29vc2UuVHlwZXMuT2JqZWN0SWQ7ICAvLyDmt7vliqAgX2lkIOWtl+autVxyXG4gIHVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgZW1haWw6IHN0cmluZztcclxuICBwYXNzd29yZDogc3RyaW5nO1xyXG4gIGF2YXRhcj86IHN0cmluZztcclxuICByb2xlOiAndXNlcicgfCAnYWRtaW4nO1xyXG4gIGNyZWF0ZWRBdDogRGF0ZTtcclxuICB1cGRhdGVkQXQ6IERhdGU7XHJcbiAgY29tcGFyZVBhc3N3b3JkKGNhbmRpZGF0ZVBhc3N3b3JkOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+O1xyXG59XHJcblxyXG5jb25zdCBVc2VyU2NoZW1hID0gbmV3IFNjaGVtYSh7XHJcbiAgdXNlcm5hbWU6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgdW5pcXVlOiB0cnVlLFxyXG4gIH0sXHJcbiAgZW1haWw6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgdW5pcXVlOiB0cnVlLFxyXG4gIH0sXHJcbiAgcGFzc3dvcmQ6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gIH0sXHJcbiAgYXZhdGFyOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgfSxcclxuICByb2xlOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICBlbnVtOiBbJ3VzZXInLCAnYWRtaW4nXSxcclxuICAgIGRlZmF1bHQ6ICd1c2VyJyxcclxuICB9LFxyXG59LCB7XHJcbiAgdGltZXN0YW1wczogdHJ1ZSxcclxufSk7XHJcblxyXG4vLyDlr4bnoIHliqDlr4bkuK3pl7Tku7ZcclxuVXNlclNjaGVtYS5wcmUoJ3NhdmUnLCBhc3luYyBmdW5jdGlvbihuZXh0KSB7XHJcbiAgaWYgKCF0aGlzLmlzTW9kaWZpZWQoJ3Bhc3N3b3JkJykpIHJldHVybiBuZXh0KCk7XHJcbiAgXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHNhbHQgPSBhd2FpdCBiY3J5cHQuZ2VuU2FsdCgxMCk7XHJcbiAgICB0aGlzLnBhc3N3b3JkID0gYXdhaXQgYmNyeXB0Lmhhc2godGhpcy5wYXNzd29yZCwgc2FsdCk7XHJcbiAgICBuZXh0KCk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIG5leHQoZXJyb3IgYXMgRXJyb3IpO1xyXG4gIH1cclxufSk7XHJcblxyXG4vLyDlr4bnoIHmr5TovoPmlrnms5VcclxuVXNlclNjaGVtYS5tZXRob2RzLmNvbXBhcmVQYXNzd29yZCA9IGFzeW5jIGZ1bmN0aW9uKGNhbmRpZGF0ZVBhc3N3b3JkOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICByZXR1cm4gYmNyeXB0LmNvbXBhcmUoY2FuZGlkYXRlUGFzc3dvcmQsIHRoaXMucGFzc3dvcmQpO1xyXG59O1xyXG5cclxuY29uc3QgVXNlciA9IChtb25nb29zZS5tb2RlbHMuVXNlciB8fCBtb25nb29zZS5tb2RlbDxJVXNlcj4oJ1VzZXInLCBVc2VyU2NoZW1hKSkgYXMgTW9kZWw8SVVzZXI+O1xyXG5leHBvcnQgZGVmYXVsdCBVc2VyO1xyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJTY2hlbWEiLCJiY3J5cHQiLCJVc2VyU2NoZW1hIiwidXNlcm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJ1bmlxdWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiYXZhdGFyIiwicm9sZSIsImVudW0iLCJkZWZhdWx0IiwidGltZXN0YW1wcyIsInByZSIsIm5leHQiLCJpc01vZGlmaWVkIiwic2FsdCIsImdlblNhbHQiLCJoYXNoIiwiZXJyb3IiLCJtZXRob2RzIiwiY29tcGFyZVBhc3N3b3JkIiwiY2FuZGlkYXRlUGFzc3dvcmQiLCJjb21wYXJlIiwiVXNlciIsIm1vZGVscyIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/models/User.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/bcryptjs","vendor-chunks/oauth","vendor-chunks/preact","vendor-chunks/preact-render-to-string","vendor-chunks/yallist","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva","vendor-chunks/xmlbuilder","vendor-chunks/minio","vendor-chunks/readable-stream","vendor-chunks/fast-xml-parser","vendor-chunks/xml2js","vendor-chunks/uuid","vendor-chunks/xml","vendor-chunks/mime-db","vendor-chunks/inherits","vendor-chunks/web-encoding","vendor-chunks/async","vendor-chunks/util-deprecate","vendor-chunks/through2","vendor-chunks/strnum","vendor-chunks/string_decoder","vendor-chunks/strict-uri-encode","vendor-chunks/split-on-first","vendor-chunks/sax","vendor-chunks/safe-buffer","vendor-chunks/query-string","vendor-chunks/mime-types","vendor-chunks/json-stream","vendor-chunks/ipaddr.js","vendor-chunks/filter-obj","vendor-chunks/decode-uri-component","vendor-chunks/buffer-crc32","vendor-chunks/browser-or-node","vendor-chunks/block-stream2"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ffiles%2Fupload%2Froute&page=%2Fapi%2Ffiles%2Fupload%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ffiles%2Fupload%2Froute.ts&appDir=E%3A%5Cchatgpt%5Ccoding%5Caicode%5Cfileweb%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5Cchatgpt%5Ccoding%5Caicode%5Cfileweb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();