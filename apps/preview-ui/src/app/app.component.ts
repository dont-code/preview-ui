import { Component, Injector } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { BaseAppComponent } from '@dontcode/sandbox';
import { RemotePluginLoaderService } from './shared/remote-plugin-loader.service';
import { environment } from '../environments/environment';
import { ChangeListenerService } from '@dontcode/sandbox';

@Component({
  selector: 'preview-ui-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent extends BaseAppComponent {

  constructor(
    private primengConfig: PrimeNGConfig,
    protected pluginLoader: RemotePluginLoaderService,
    listener: ChangeListenerService,
    injector: Injector
  ) {
    super(injector);
    this.listener=listener;
  }

  override ngOnInit(): void {
    this.primengConfig.ripple = true;
    super.ngOnInit();

    // To do: Get the list from the Plugin Marketplace: https://test.dont-code.net/data/Plugin%20Module
    console.log('Loading plugins from ' + environment.standardPluginsUrl);
    this.pluginLoader
      .loadMultipleModules([
        {
          exposedModule: './Basic',
          remoteEntry: environment.standardPluginsUrl + '/remoteEntry.js',
          remoteName: 'dontCodeStandardPlugins',
          moduleName: 'BasicModule',
        },
        {
          exposedModule: './Fields',
          remoteEntry: environment.standardPluginsUrl + '/remoteEntry.js',
          remoteName: 'dontCodeStandardPlugins',
          moduleName: 'FieldsModule',
        },
        {
          exposedModule: './Rest',
          remoteEntry:
            (environment.otherPluginsUrl != null
              ? environment.otherPluginsUrl + 'rest'
              : environment.restPluginUrl) + '/remoteEntry.js',
          remoteName: 'dontCodeRestPlugin',
          moduleName: 'RestModule',
        },
      ])
      .then((module) => {
        console.log('All Plugins loaded');
        // Check if we need to load a project ?
        const projectToLoad = (window as any).dontCodeConfig.projectId;
        if (projectToLoad) {
          this.listener.loadProject(projectToLoad).then((project) => {
            console.log('Loaded project ', project.name);
          });
        }
      });
  }
}
