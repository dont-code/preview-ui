import { AfterViewInit, Component, ComponentFactoryResolver, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { filter, map, take, takeUntil } from "rxjs/operators";
import { Observable } from "rxjs";
import { CommandProviderInterface } from "@dontcode/core";
import { DynamicBaseComponent } from "../../../shared/dynamic/components/dynamic-base.component";
import { CommandProviderService } from "../../../shared/command/services/command-provider.service";
import { DynamicInsertDirective } from "../../../shared/dynamic/directives/dynamic-insert.directive";

@Component({
  selector: 'preview-ui-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']
})
export class ScreenComponent extends DynamicBaseComponent implements OnInit, AfterViewInit {
  screenName$:Observable<Params>;

  @ViewChild(DynamicInsertDirective, {static:true}) host: DynamicInsertDirective;

  constructor(route:ActivatedRoute,
              componentFactoryResolver: ComponentFactoryResolver,
              provider:CommandProviderService) {
    super(route, componentFactoryResolver, provider);
  }

  ngOnInit():void {
    super.ngOnInit();
    this.screenName$ = this.route.params;
  }

  ngAfterViewInit(): void {
    this.screenName$ = this.route.params;

    this.route.url.pipe (takeUntil(this.unsubscriber),
      map (segments => {
        let position = null;
        segments.forEach(value => {
          if (position === null)
            position = value.path;
          else
            position = position + '/' + value.path;
        });
        console.log("Searching for component handling route ", position);

        const schemaPointer = this.provider.calculatePointerFor(position);
        this.loadComponent(schemaPointer.schemaPosition, this.host).pipe(
          map(component => {
            return { position, component };
          }),
          map(context => {
            // We shouldn't need to convert this.provider to CommandProviderInterface,
            // But otherwise we get an ts error
            context.component.initCommandFlow(this.provider as unknown as CommandProviderInterface,
              schemaPointer);
          })
        ).subscribe(() => {
          //console.log("Loaded");
        });
      })
    ).subscribe();
  }

}
