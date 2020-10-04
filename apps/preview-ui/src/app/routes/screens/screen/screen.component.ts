import { Component, ComponentFactoryResolver, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { CommandProviderInterface } from "@dontcode/core";
import { DynamicBaseComponent } from "../../../shared/dynamic/components/dynamic-base.component";
import { CommandProviderService } from "../../../shared/command/services/command-provider.service";

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
    this.screenName$= this.route.url.pipe(map(segments => {
      return segments[1].path;
    }));

    let position = null;
    this.route.snapshot.url.forEach(value => {
      if( position === null)
        position = value.path;
      else
        position = position+'/'+value.path;
    })
    console.log("Searching for component handling route ", position);

    const schemaPointer = this.provider.calculatePointerFor(position);
    this.loadComponent(schemaPointer.schemaPosition).pipe(
        map (component => {
            return {position, component};
          }),
        map( context => {
          // We shouldn't need to convert this.provider to CommandProviderInterface,
          // But otherwise we get an ts error
          context.component.initCommandFlow(this.provider as unknown as CommandProviderInterface,
            schemaPointer);
        })
        ).subscribe(() => {
          //console.log("Loaded");
        });
  }

}
