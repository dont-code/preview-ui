(self.webpackChunkpreview_ui=self.webpackChunkpreview_ui||[]).push([[426],{2426:(O,v,o)=>{o.r(v);var l=o(8940),e=o(549),u=o(3134),i=o(9607);var p=o(2835),c=o(3788),f=o(7863),m=o(4774);function g(t,n){1&t&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275element(1,"dontcode-sandbox-main"),e.\u0275\u0275elementContainerEnd())}function j(t,n){1&t&&e.\u0275\u0275elementContainer(0)}function C(t,n){if(1&t&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275template(1,g,2,0,"ng-container",0),e.\u0275\u0275template(2,j,1,0,"ng-container",0),e.\u0275\u0275elementEnd()),2&t){const r=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!r.testMode),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",r.testMode)}}function I(t,n){1&t&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275element(1,"router-outlet"),e.\u0275\u0275elementEnd())}class a extends i.BaseAppComponent{constructor(n,r,S,y,w,P,T,b,D,L,N,R,B){super(S,y,w,r,P,T,b,D,L,N,R,B),this.primengConfig=n,this.testMode=!1,this.runtimeConfig=window.dontCodeConfig,null!=this.runtimeConfig&&null==this.runtimeConfig?.repositoryUrl&&(this.runtimeConfig.repositoryUrl="assets/repositories/stable.json")}ngOnInit(){this.primengConfig.ripple=!0,super.ngOnInit(),this.pluginsLoaded?.then(()=>{const n=window.dontCodeConfig.projectId;n&&this.listener.loadProject(n).then(r=>{console.log("Loaded project ",r.name)})})}}a.\u0275fac=function(n){return new(n||a)(e.\u0275\u0275directiveInject(u.PrimeNGConfig),e.\u0275\u0275directiveInject(i.RemotePluginLoaderService),e.\u0275\u0275directiveInject(i.ChangeProviderService),e.\u0275\u0275directiveInject(i.IndexedDbStorageService),e.\u0275\u0275directiveInject(i.ChangeListenerService),e.\u0275\u0275directiveInject(i.GlobalPluginLoader),e.\u0275\u0275directiveInject(p.ComponentLoaderService),e.\u0275\u0275directiveInject(i.ChangeProviderService),e.\u0275\u0275directiveInject(e.Injector),e.\u0275\u0275directiveInject(p.DONT_CODE_CORE),e.\u0275\u0275directiveInject(c.DontCodeModelManager),e.\u0275\u0275directiveInject(c.DontCodeStoreManager),e.\u0275\u0275directiveInject(c.DontCodePreviewManager))},a.\u0275cmp=e.\u0275\u0275defineComponent({type:a,selectors:[["preview-ui-root"]],features:[e.\u0275\u0275InheritDefinitionFeature],decls:2,vars:2,consts:[[4,"ngIf"]],template:function(n,r){1&n&&(e.\u0275\u0275template(0,C,3,2,"div",0),e.\u0275\u0275template(1,I,2,0,"div",0)),2&n&&(e.\u0275\u0275property("ngIf",r.mainTab()),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!r.mainTab()))},dependencies:[f.NgIf,m.RouterOutlet,i.MainComponent]});var h=o(9694),M=o(6602),A=o(9162),U=o(7022),x=o(4504);class s{}s.\u0275fac=function(n){return new(n||s)},s.\u0275mod=e.\u0275\u0275defineNgModule({type:s,bootstrap:[a]}),s.\u0275inj=e.\u0275\u0275defineInjector({imports:[l.BrowserModule,h.BrowserAnimationsModule,M.HttpClientModule,m.RouterModule.forRoot([],{enableTracing:!1,useHash:!0,initialNavigation:"enabledBlocking"}),p.PluginCommonModule.forRoot(),i.SandboxModule.forRoot({webSocketUrl:"wss://test.dont-code.net/preview",projectUrl:"https://test.dont-code.net/demo_project",documentUrl:"https://test.dont-code.net/documents",storeUrl:"https://test.dont-code.net/data",indexedDbName:"Dont-code Previewer",applicationName:"Previewer",templateFileUrl:"assets/dev/templates.json"}),A.InputTextModule,U.FormsModule,x.ButtonModule]}),(0,e.enableProdMode)(),l.platformBrowser().bootstrapModule(s).catch(t=>console.error(t))}}]);