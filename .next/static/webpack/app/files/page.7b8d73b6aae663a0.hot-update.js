"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/files/page",{

/***/ "(app-pages-browser)/./src/app/files/page.tsx":
/*!********************************!*\
  !*** ./src/app/files/page.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FilesPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _components_layout_Sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/layout/Sidebar */ \"(app-pages-browser)/./src/components/layout/Sidebar.tsx\");\n/* harmony import */ var _components_files_FileList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/files/FileList */ \"(app-pages-browser)/./src/components/files/FileList.tsx\");\n/* harmony import */ var _components_files_FileToolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/files/FileToolbar */ \"(app-pages-browser)/./src/components/files/FileToolbar.tsx\");\n/* harmony import */ var _components_files_FileUpload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/files/FileUpload */ \"(app-pages-browser)/./src/components/files/FileUpload.tsx\");\n/* harmony import */ var _components_files_CreateFolderDialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/files/CreateFolderDialog */ \"(app-pages-browser)/./src/components/files/CreateFolderDialog.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction FilesPage() {\n    _s();\n    const { data: session, status } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [currentFolder, setCurrentFolder] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [files, setFiles] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [folders, setFolders] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [selectedItems, setSelectedItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [isUploading, setIsUploading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [isCreatingFolder, setIsCreatingFolder] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [viewMode, setViewMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"grid\");\n    const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (status === \"unauthenticated\") {\n            router.push(\"/login\");\n        } else if (status === \"authenticated\") {\n            loadFiles();\n        }\n    }, [\n        status,\n        currentFolder\n    ]);\n    const loadFiles = async ()=>{\n        try {\n            setIsLoading(true);\n            const response = await fetch(\"/api/files/list\".concat(currentFolder ? \"?folderId=\".concat(currentFolder._id) : \"\"));\n            if (!response.ok) {\n                throw new Error(\"加载文件失败\");\n            }\n            const data = await response.json();\n            setFiles(data.files);\n            setFolders(data.folders);\n        } catch (error) {\n            console.error(\"加载文件错误:\", error);\n        } finally{\n            setIsLoading(false);\n        }\n    };\n    // 添加搜索处理函数\n    const handleSearch = (query)=>{\n        setSearchQuery(query);\n    // TODO: 实现搜索逻辑\n    };\n    if (status === \"loading\" || isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"E:\\\\chatgpt\\\\coding\\\\aicode\\\\fileweb\\\\src\\\\app\\\\files\\\\page.tsx\",\n            lineNumber: 63,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_Sidebar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"E:\\\\chatgpt\\\\coding\\\\aicode\\\\fileweb\\\\src\\\\app\\\\files\\\\page.tsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex-1 overflow-hidden\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"h-full flex flex-col\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_files_FileToolbar__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            currentFolder: currentFolder,\n                            selectedItems: selectedItems,\n                            viewMode: viewMode,\n                            onViewChange: setViewMode,\n                            onCreateFolder: ()=>setIsCreatingFolder(true),\n                            onUpload: ()=>setIsUploading(true),\n                            onSearch: handleSearch\n                        }, void 0, false, {\n                            fileName: \"E:\\\\chatgpt\\\\coding\\\\aicode\\\\fileweb\\\\src\\\\app\\\\files\\\\page.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_files_FileList__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            files: files,\n                            folders: folders,\n                            selectedItems: selectedItems,\n                            viewMode: viewMode,\n                            onSelect: setSelectedItems,\n                            onFolderOpen: setCurrentFolder\n                        }, void 0, false, {\n                            fileName: \"E:\\\\chatgpt\\\\coding\\\\aicode\\\\fileweb\\\\src\\\\app\\\\files\\\\page.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_files_FileUpload__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            isOpen: isUploading,\n                            currentFolder: currentFolder,\n                            onClose: ()=>setIsUploading(false),\n                            onUploadComplete: (newFiles)=>{\n                                setFiles((prevFiles)=>[\n                                        ...prevFiles,\n                                        ...newFiles\n                                    ]);\n                                setIsUploading(false);\n                            }\n                        }, void 0, false, {\n                            fileName: \"E:\\\\chatgpt\\\\coding\\\\aicode\\\\fileweb\\\\src\\\\app\\\\files\\\\page.tsx\",\n                            lineNumber: 88,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_files_CreateFolderDialog__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                            isOpen: isCreatingFolder,\n                            currentFolder: currentFolder,\n                            onClose: ()=>setIsCreatingFolder(false),\n                            onCreated: (newFolder)=>{\n                                setFolders((prevFolders)=>[\n                                        ...prevFolders,\n                                        newFolder\n                                    ]);\n                                setIsCreatingFolder(false);\n                            }\n                        }, void 0, false, {\n                            fileName: \"E:\\\\chatgpt\\\\coding\\\\aicode\\\\fileweb\\\\src\\\\app\\\\files\\\\page.tsx\",\n                            lineNumber: 97,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\chatgpt\\\\coding\\\\aicode\\\\fileweb\\\\src\\\\app\\\\files\\\\page.tsx\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\chatgpt\\\\coding\\\\aicode\\\\fileweb\\\\src\\\\app\\\\files\\\\page.tsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\chatgpt\\\\coding\\\\aicode\\\\fileweb\\\\src\\\\app\\\\files\\\\page.tsx\",\n        lineNumber: 67,\n        columnNumber: 5\n    }, this);\n}\n_s(FilesPage, \"+uwd4wjIAE1IRmPbBc2up5lPG5U=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession,\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = FilesPage;\nvar _c;\n$RefreshReg$(_c, \"FilesPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZmlsZXMvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNEM7QUFDQztBQUNEO0FBQ007QUFDQztBQUNNO0FBQ0Y7QUFFZ0I7QUFHeEQsU0FBU1M7O0lBQ3RCLE1BQU0sRUFBRUMsTUFBTUMsT0FBTyxFQUFFQyxNQUFNLEVBQUUsR0FBR1YsMkRBQVVBO0lBQzVDLE1BQU1XLFNBQVNWLDBEQUFTQTtJQUN4QixNQUFNLENBQUNXLGVBQWVDLGlCQUFpQixHQUFHZiwrQ0FBUUEsQ0FBaUI7SUFDbkUsTUFBTSxDQUFDZ0IsT0FBT0MsU0FBUyxHQUFHakIsK0NBQVFBLENBQVUsRUFBRTtJQUM5QyxNQUFNLENBQUNrQixTQUFTQyxXQUFXLEdBQUduQiwrQ0FBUUEsQ0FBWSxFQUFFO0lBQ3BELE1BQU0sQ0FBQ29CLGVBQWVDLGlCQUFpQixHQUFHckIsK0NBQVFBLENBQXNCLEVBQUU7SUFDMUUsTUFBTSxDQUFDc0IsYUFBYUMsZUFBZSxHQUFHdkIsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDd0IsV0FBV0MsYUFBYSxHQUFHekIsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDMEIsa0JBQWtCQyxvQkFBb0IsR0FBRzNCLCtDQUFRQSxDQUFDO0lBQ3pELE1BQU0sQ0FBQzRCLFVBQVVDLFlBQVksR0FBRzdCLCtDQUFRQSxDQUFXO0lBQ25ELE1BQU0sQ0FBQzhCLGFBQWFDLGVBQWUsR0FBRy9CLCtDQUFRQSxDQUFDO0lBRS9DQyxnREFBU0EsQ0FBQztRQUNSLElBQUlXLFdBQVcsbUJBQW1CO1lBQ2hDQyxPQUFPbUIsSUFBSSxDQUFDO1FBQ2QsT0FBTyxJQUFJcEIsV0FBVyxpQkFBaUI7WUFDckNxQjtRQUNGO0lBQ0YsR0FBRztRQUFDckI7UUFBUUU7S0FBYztJQUUxQixNQUFNbUIsWUFBWTtRQUNoQixJQUFJO1lBQ0ZSLGFBQWE7WUFDYixNQUFNUyxXQUFXLE1BQU1DLE1BQ3JCLGtCQUF3RSxPQUF0RHJCLGdCQUFnQixhQUErQixPQUFsQkEsY0FBY3NCLEdBQUcsSUFBSztZQUd2RSxJQUFJLENBQUNGLFNBQVNHLEVBQUUsRUFBRTtnQkFDaEIsTUFBTSxJQUFJQyxNQUFNO1lBQ2xCO1lBRUEsTUFBTTVCLE9BQU8sTUFBTXdCLFNBQVNLLElBQUk7WUFDaEN0QixTQUFTUCxLQUFLTSxLQUFLO1lBQ25CRyxXQUFXVCxLQUFLUSxPQUFPO1FBQ3pCLEVBQUUsT0FBT3NCLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDLFdBQVdBO1FBQzNCLFNBQVU7WUFDUmYsYUFBYTtRQUNmO0lBQ0Y7SUFFQSxXQUFXO0lBQ1gsTUFBTWlCLGVBQWUsQ0FBQ0M7UUFDcEJaLGVBQWVZO0lBQ2YsZUFBZTtJQUNqQjtJQUVBLElBQUkvQixXQUFXLGFBQWFZLFdBQVc7UUFDckMscUJBQU8sOERBQUNvQjtzQkFBSTs7Ozs7O0lBQ2Q7SUFFQSxxQkFDRSw4REFBQ0E7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUN6QyxrRUFBT0E7Ozs7OzBCQUNSLDhEQUFDMEM7Z0JBQUtELFdBQVU7MEJBQ2QsNEVBQUNEO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ3ZDLHFFQUFXQTs0QkFDVlEsZUFBZUE7NEJBQ2ZNLGVBQWVBOzRCQUNmUSxVQUFVQTs0QkFDVm1CLGNBQWNsQjs0QkFDZG1CLGdCQUFnQixJQUFNckIsb0JBQW9COzRCQUMxQ3NCLFVBQVUsSUFBTTFCLGVBQWU7NEJBQy9CMkIsVUFBVVI7Ozs7OztzQ0FFWiw4REFBQ3JDLGtFQUFRQTs0QkFDUFcsT0FBT0E7NEJBQ1BFLFNBQVNBOzRCQUNURSxlQUFlQTs0QkFDZlEsVUFBVUE7NEJBQ1Z1QixVQUFVOUI7NEJBQ1YrQixjQUFjckM7Ozs7OztzQ0FFaEIsOERBQUNSLG9FQUFVQTs0QkFDVDhDLFFBQVEvQjs0QkFDUlIsZUFBZUE7NEJBQ2Z3QyxTQUFTLElBQU0vQixlQUFlOzRCQUM5QmdDLGtCQUFrQixDQUFDQztnQ0FDakJ2QyxTQUFTd0MsQ0FBQUEsWUFBYTsyQ0FBSUE7MkNBQWNEO3FDQUFTO2dDQUNqRGpDLGVBQWU7NEJBQ2pCOzs7Ozs7c0NBRUYsOERBQUNmLDRFQUFrQkE7NEJBQ2pCNkMsUUFBUTNCOzRCQUNSWixlQUFlQTs0QkFDZndDLFNBQVMsSUFBTTNCLG9CQUFvQjs0QkFDbkMrQixXQUFXLENBQUNDO2dDQUNWeEMsV0FBV3lDLENBQUFBLGNBQWU7MkNBQUlBO3dDQUFhRDtxQ0FBVTtnQ0FDckRoQyxvQkFBb0I7NEJBQ3RCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1aO0dBaEd3QmxCOztRQUNZUCx1REFBVUE7UUFDN0JDLHNEQUFTQTs7O0tBRkZNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZmlsZXMvcGFnZS50c3g/Yzg2OSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcblxyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcclxuaW1wb3J0IFNpZGViYXIgZnJvbSAnQC9jb21wb25lbnRzL2xheW91dC9TaWRlYmFyJztcclxuaW1wb3J0IEZpbGVMaXN0IGZyb20gJ0AvY29tcG9uZW50cy9maWxlcy9GaWxlTGlzdCc7XHJcbmltcG9ydCBGaWxlVG9vbGJhciBmcm9tICdAL2NvbXBvbmVudHMvZmlsZXMvRmlsZVRvb2xiYXInO1xyXG5pbXBvcnQgRmlsZVVwbG9hZCBmcm9tICdAL2NvbXBvbmVudHMvZmlsZXMvRmlsZVVwbG9hZCc7XHJcbmltcG9ydCB7IElGaWxlLCBJRm9sZGVyIH0gZnJvbSAnQC90eXBlcy9maWxlJztcclxuaW1wb3J0IENyZWF0ZUZvbGRlckRpYWxvZyBmcm9tICdAL2NvbXBvbmVudHMvZmlsZXMvQ3JlYXRlRm9sZGVyRGlhbG9nJztcclxuaW1wb3J0IHsgVmlld01vZGUgfSBmcm9tICdAL2NvbXBvbmVudHMvZmlsZXMvVmlld1RvZ2dsZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGaWxlc1BhZ2UoKSB7XHJcbiAgY29uc3QgeyBkYXRhOiBzZXNzaW9uLCBzdGF0dXMgfSA9IHVzZVNlc3Npb24oKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbY3VycmVudEZvbGRlciwgc2V0Q3VycmVudEZvbGRlcl0gPSB1c2VTdGF0ZTxJRm9sZGVyIHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgW2ZpbGVzLCBzZXRGaWxlc10gPSB1c2VTdGF0ZTxJRmlsZVtdPihbXSk7XHJcbiAgY29uc3QgW2ZvbGRlcnMsIHNldEZvbGRlcnNdID0gdXNlU3RhdGU8SUZvbGRlcltdPihbXSk7XHJcbiAgY29uc3QgW3NlbGVjdGVkSXRlbXMsIHNldFNlbGVjdGVkSXRlbXNdID0gdXNlU3RhdGU8KElGaWxlIHwgSUZvbGRlcilbXT4oW10pO1xyXG4gIGNvbnN0IFtpc1VwbG9hZGluZywgc2V0SXNVcGxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbaXNDcmVhdGluZ0ZvbGRlciwgc2V0SXNDcmVhdGluZ0ZvbGRlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3ZpZXdNb2RlLCBzZXRWaWV3TW9kZV0gPSB1c2VTdGF0ZTxWaWV3TW9kZT4oJ2dyaWQnKTtcclxuICBjb25zdCBbc2VhcmNoUXVlcnksIHNldFNlYXJjaFF1ZXJ5XSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChzdGF0dXMgPT09ICd1bmF1dGhlbnRpY2F0ZWQnKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKCcvbG9naW4nKTtcclxuICAgIH0gZWxzZSBpZiAoc3RhdHVzID09PSAnYXV0aGVudGljYXRlZCcpIHtcclxuICAgICAgbG9hZEZpbGVzKCk7XHJcbiAgICB9XHJcbiAgfSwgW3N0YXR1cywgY3VycmVudEZvbGRlcl0pO1xyXG5cclxuICBjb25zdCBsb2FkRmlsZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgYC9hcGkvZmlsZXMvbGlzdCR7Y3VycmVudEZvbGRlciA/IGA/Zm9sZGVySWQ9JHtjdXJyZW50Rm9sZGVyLl9pZH1gIDogJyd9YFxyXG4gICAgICApO1xyXG4gICAgICBcclxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcign5Yqg6L295paH5Lu25aSx6LSlJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIHNldEZpbGVzKGRhdGEuZmlsZXMpO1xyXG4gICAgICBzZXRGb2xkZXJzKGRhdGEuZm9sZGVycyk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCfliqDovb3mlofku7bplJnor686JywgZXJyb3IpO1xyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyDmt7vliqDmkJzntKLlpITnkIblh73mlbBcclxuICBjb25zdCBoYW5kbGVTZWFyY2ggPSAocXVlcnk6IHN0cmluZykgPT4ge1xyXG4gICAgc2V0U2VhcmNoUXVlcnkocXVlcnkpO1xyXG4gICAgLy8gVE9ETzog5a6e546w5pCc57Si6YC76L6RXHJcbiAgfTtcclxuXHJcbiAgaWYgKHN0YXR1cyA9PT0gJ2xvYWRpbmcnIHx8IGlzTG9hZGluZykge1xyXG4gICAgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaC1zY3JlZW5cIj5cclxuICAgICAgPFNpZGViYXIgLz5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleC0xIG92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsIGZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgIDxGaWxlVG9vbGJhciBcclxuICAgICAgICAgICAgY3VycmVudEZvbGRlcj17Y3VycmVudEZvbGRlcn1cclxuICAgICAgICAgICAgc2VsZWN0ZWRJdGVtcz17c2VsZWN0ZWRJdGVtc31cclxuICAgICAgICAgICAgdmlld01vZGU9e3ZpZXdNb2RlfVxyXG4gICAgICAgICAgICBvblZpZXdDaGFuZ2U9e3NldFZpZXdNb2RlfVxyXG4gICAgICAgICAgICBvbkNyZWF0ZUZvbGRlcj17KCkgPT4gc2V0SXNDcmVhdGluZ0ZvbGRlcih0cnVlKX1cclxuICAgICAgICAgICAgb25VcGxvYWQ9eygpID0+IHNldElzVXBsb2FkaW5nKHRydWUpfVxyXG4gICAgICAgICAgICBvblNlYXJjaD17aGFuZGxlU2VhcmNofVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxGaWxlTGlzdFxyXG4gICAgICAgICAgICBmaWxlcz17ZmlsZXN9XHJcbiAgICAgICAgICAgIGZvbGRlcnM9e2ZvbGRlcnN9XHJcbiAgICAgICAgICAgIHNlbGVjdGVkSXRlbXM9e3NlbGVjdGVkSXRlbXN9XHJcbiAgICAgICAgICAgIHZpZXdNb2RlPXt2aWV3TW9kZX1cclxuICAgICAgICAgICAgb25TZWxlY3Q9e3NldFNlbGVjdGVkSXRlbXN9XHJcbiAgICAgICAgICAgIG9uRm9sZGVyT3Blbj17c2V0Q3VycmVudEZvbGRlcn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8RmlsZVVwbG9hZFxyXG4gICAgICAgICAgICBpc09wZW49e2lzVXBsb2FkaW5nfVxyXG4gICAgICAgICAgICBjdXJyZW50Rm9sZGVyPXtjdXJyZW50Rm9sZGVyfVxyXG4gICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRJc1VwbG9hZGluZyhmYWxzZSl9XHJcbiAgICAgICAgICAgIG9uVXBsb2FkQ29tcGxldGU9eyhuZXdGaWxlcykgPT4ge1xyXG4gICAgICAgICAgICAgIHNldEZpbGVzKHByZXZGaWxlcyA9PiBbLi4ucHJldkZpbGVzLCAuLi5uZXdGaWxlc10pO1xyXG4gICAgICAgICAgICAgIHNldElzVXBsb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8Q3JlYXRlRm9sZGVyRGlhbG9nXHJcbiAgICAgICAgICAgIGlzT3Blbj17aXNDcmVhdGluZ0ZvbGRlcn1cclxuICAgICAgICAgICAgY3VycmVudEZvbGRlcj17Y3VycmVudEZvbGRlcn1cclxuICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0SXNDcmVhdGluZ0ZvbGRlcihmYWxzZSl9XHJcbiAgICAgICAgICAgIG9uQ3JlYXRlZD17KG5ld0ZvbGRlcikgPT4ge1xyXG4gICAgICAgICAgICAgIHNldEZvbGRlcnMocHJldkZvbGRlcnMgPT4gWy4uLnByZXZGb2xkZXJzLCBuZXdGb2xkZXJdKTtcclxuICAgICAgICAgICAgICBzZXRJc0NyZWF0aW5nRm9sZGVyKGZhbHNlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlU2Vzc2lvbiIsInVzZVJvdXRlciIsIlNpZGViYXIiLCJGaWxlTGlzdCIsIkZpbGVUb29sYmFyIiwiRmlsZVVwbG9hZCIsIkNyZWF0ZUZvbGRlckRpYWxvZyIsIkZpbGVzUGFnZSIsImRhdGEiLCJzZXNzaW9uIiwic3RhdHVzIiwicm91dGVyIiwiY3VycmVudEZvbGRlciIsInNldEN1cnJlbnRGb2xkZXIiLCJmaWxlcyIsInNldEZpbGVzIiwiZm9sZGVycyIsInNldEZvbGRlcnMiLCJzZWxlY3RlZEl0ZW1zIiwic2V0U2VsZWN0ZWRJdGVtcyIsImlzVXBsb2FkaW5nIiwic2V0SXNVcGxvYWRpbmciLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJpc0NyZWF0aW5nRm9sZGVyIiwic2V0SXNDcmVhdGluZ0ZvbGRlciIsInZpZXdNb2RlIiwic2V0Vmlld01vZGUiLCJzZWFyY2hRdWVyeSIsInNldFNlYXJjaFF1ZXJ5IiwicHVzaCIsImxvYWRGaWxlcyIsInJlc3BvbnNlIiwiZmV0Y2giLCJfaWQiLCJvayIsIkVycm9yIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsImhhbmRsZVNlYXJjaCIsInF1ZXJ5IiwiZGl2IiwiY2xhc3NOYW1lIiwibWFpbiIsIm9uVmlld0NoYW5nZSIsIm9uQ3JlYXRlRm9sZGVyIiwib25VcGxvYWQiLCJvblNlYXJjaCIsIm9uU2VsZWN0Iiwib25Gb2xkZXJPcGVuIiwiaXNPcGVuIiwib25DbG9zZSIsIm9uVXBsb2FkQ29tcGxldGUiLCJuZXdGaWxlcyIsInByZXZGaWxlcyIsIm9uQ3JlYXRlZCIsIm5ld0ZvbGRlciIsInByZXZGb2xkZXJzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/files/page.tsx\n"));

/***/ })

});