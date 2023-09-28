(self["webpackChunkpreview_ui"] = self["webpackChunkpreview_ui"] || []).push([["apps_preview-ui_src_bootstrap_ts"],{

/***/ 3098:
/*!**************************************************!*\
  !*** ./apps/preview-ui/src/app/app.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 549);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/api */ 3134);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dontcode_sandbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @dontcode/sandbox */ 5575);
/* harmony import */ var _dontcode_sandbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_dontcode_sandbox__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ 4555);
/* harmony import */ var _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @dontcode/plugin-common */ 3984);
/* harmony import */ var _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _dontcode_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @dontcode/core */ 6453);
/* harmony import */ var _dontcode_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_dontcode_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 7863);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 4774);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_7__);













function AppComponent_div_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "dontcode-sandbox-main");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
}
function AppComponent_div_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function AppComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_0_ng_container_1_Template, 2, 0, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_div_0_ng_container_2_Template, 1, 0, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.testMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.testMode);
  }
}
function AppComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class AppComponent extends _dontcode_sandbox__WEBPACK_IMPORTED_MODULE_2__.BaseAppComponent {
  constructor(primengConfig, pluginLoader, provider, storage, listener, globalPluginLoader, loaderService, changeProviderService, injector, dontCodeCore, modelMgr, storeMgr, previewMgr) {
    super(provider, storage, listener, pluginLoader, globalPluginLoader, loaderService, changeProviderService, injector, dontCodeCore, modelMgr, storeMgr, previewMgr);
    this.primengConfig = primengConfig;
    this.testMode = false;
    // Manages the different cases of loading the repository of plugins
    this.runtimeConfig = window.dontCodeConfig;
    // To do: Get the list from the Plugin Marketplace: https://test.dont-code.net/data/Plugin%20Module
    if (this.runtimeConfig != null && this.runtimeConfig?.repositoryUrl == null) {
      this.runtimeConfig.repositoryUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.repositoryUrl;
    }
  }
  ngOnInit() {
    this.primengConfig.ripple = true;
    super.ngOnInit();
    // Wait for all plugins to be loaded before loading the project
    this.pluginsLoaded?.then(() => {
      // Check if we need to load a project ?
      const projectToLoad = window.dontCodeConfig.projectId;
      if (projectToLoad) {
        this.listener.loadProject(projectToLoad).then(project => {
          console.log('Loaded project ', project.name);
        });
      }
    });
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_1__.PrimeNGConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dontcode_sandbox__WEBPACK_IMPORTED_MODULE_2__.RemotePluginLoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dontcode_sandbox__WEBPACK_IMPORTED_MODULE_2__.ChangeProviderService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dontcode_sandbox__WEBPACK_IMPORTED_MODULE_2__.IndexedDbStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dontcode_sandbox__WEBPACK_IMPORTED_MODULE_2__.ChangeListenerService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dontcode_sandbox__WEBPACK_IMPORTED_MODULE_2__.GlobalPluginLoader), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_4__.ComponentLoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dontcode_sandbox__WEBPACK_IMPORTED_MODULE_2__.ChangeProviderService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_4__.DONT_CODE_CORE), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dontcode_core__WEBPACK_IMPORTED_MODULE_5__.DontCodeModelManager), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dontcode_core__WEBPACK_IMPORTED_MODULE_5__.DontCodeStoreManager), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dontcode_core__WEBPACK_IMPORTED_MODULE_5__.DontCodePreviewManager));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["preview-ui-root"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  decls: 2,
  vars: 2,
  consts: [[4, "ngIf"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_div_0_Template, 3, 2, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_1_Template, 2, 0, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mainTab());
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.mainTab());
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterOutlet, _dontcode_sandbox__WEBPACK_IMPORTED_MODULE_2__.MainComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2732:
/*!***********************************************!*\
  !*** ./apps/preview-ui/src/app/app.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ 8940);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 3098);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 4774);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _dontcode_sandbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @dontcode/sandbox */ 5575);
/* harmony import */ var _dontcode_sandbox__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_dontcode_sandbox__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ 9694);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ 4555);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 6602);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @dontcode/plugin-common */ 3984);
/* harmony import */ var _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputtext */ 9162);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 7022);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ 4504);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 549);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_11__);















class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot([], {
    enableTracing: false,
    useHash: true,
    initialNavigation: 'enabledBlocking'
  }), _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_7__.PluginCommonModule.forRoot(), _dontcode_sandbox__WEBPACK_IMPORTED_MODULE_3__.SandboxModule.forRoot({
    webSocketUrl: _environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.webSocketUrl,
    projectUrl: _environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.projectApiUrl,
    documentUrl: _environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.documentApiUrl,
    storeUrl: _environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.storeApiUrl,
    indexedDbName: 'Dont-code Previewer',
    applicationName: 'Previewer',
    templateFileUrl: 'assets/dev/templates.json'
  }), primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__.InputTextModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, primeng_button__WEBPACK_IMPORTED_MODULE_10__.ButtonModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_7__.PluginCommonModule, _dontcode_sandbox__WEBPACK_IMPORTED_MODULE_3__.SandboxModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__.InputTextModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, primeng_button__WEBPACK_IMPORTED_MODULE_10__.ButtonModule]
  });
})();

/***/ }),

/***/ 4274:
/*!******************************************!*\
  !*** ./apps/preview-ui/src/bootstrap.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ 8940);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 549);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ 2732);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ 4555);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 4555:
/*!*********************************************************!*\
  !*** ./apps/preview-ui/src/environments/environment.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false,
  webSocketUrl: 'wss://test.dont-code.net/preview',
  repositoryUrl: 'assets/repositories/next.json',
  storeApiUrl: 'https://test.dont-code.net/data',
  projectApiUrl: 'https://test.dont-code.net/demo_project',
  documentApiUrl: 'https://test.dont-code.net/documents'
};

/***/ })

}])
//# sourceMappingURL=apps_preview-ui_src_bootstrap_ts.js.map