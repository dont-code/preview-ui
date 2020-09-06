import { Component, ComponentFactoryResolver, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map, mergeMap } from "rxjs/operators";
import { Observable } from "rxjs";
import { DontCodeModel, CommandProviderInterface } from "@dontcode/core";
import { DynamicBaseComponent } from '../../../shared/dynamic/components/dynamic-base.component';
import { CommandProviderService } from "../../../shared/command/services/command-provider.service";
import { DynamicInsertDirective } from "../../../shared/dynamic/directives/dynamic-insert.directive";

@Component({
  selector: 'preview-ui-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']
})
export class ScreenComponent extends DynamicBaseComponent implements OnInit {
  screenName$:Observable<string>;

  constructor(route:ActivatedRoute,
              componentFactoryResolver: ComponentFactoryResolver,
              provider:CommandProviderService) {
                super(route, componentFactoryResolver, provider);
              }

  ngOnInit(): void {
    this.screenName$= this.route.paramMap.pipe(map(params => {
      return params.get('id');
    }));

    this.screenName$.pipe(
      mergeMap (valueId => {
        console.log("Searching for component for route ", this.route.snapshot.url);
        const position = DontCodeModel.ROOT+'/'+this.route.snapshot.url[0];

        return this.loadComponent(position, valueId).pipe(
          map (component => {
            return {valueId, position, component};
          })
        )
      }),
      map( context => {
        // We shouldn't need to convert this.provider to CommandProviderInterface,
        // But otherwise we get an ts error
        context.component.initCommandFlow(this.provider as unknown as CommandProviderInterface,
          context.position+'/'+context.valueId,
          context.position);
      })
    ).subscribe(() => {
      //console.log("Loaded");
    });
  }

}
