import { ChangeDetectionStrategy, ChangeDetectorRef, Component, NgZone, OnDestroy, OnInit } from "@angular/core";
import { CommandProviderService } from "../../shared/command/services/command-provider.service";
import { Subscription } from "rxjs";
import { map } from "rxjs/operators";
import { Change, DontCodeModel } from "@dontcode/core";
import { Router } from "@angular/router";

@Component({
  selector: 'preview-ui-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent implements OnInit, OnDestroy {

  menus:Array<any>;
  templateMenus =[
    {label:'Main Menu', items:[
        {label:'Home', icon:'pi pi-home', routerLink:['/']},
        {label:'Dev', icon:'pi pi-book', routerLink: ['dev']}
      ]},
    {label:'Application Menu', items:new Array<any>()}
  ];
  subscriptions = new Subscription();

  constructor(protected provider: CommandProviderService,
              private ref: ChangeDetectorRef, public router: Router,
              public ngZone:NgZone) { }

  ngOnInit(): void {
    this.menus = this.generateMenu ();
    this.subscriptions.add (this.provider.receiveCommands (DontCodeModel.APP_ENTITIES, DontCodeModel.APP_ENTITIES_NAME_NODE).pipe (
      map(command => {
        this.updateMenu (command, 'pi-ticket');
        this.ref.detectChanges();
      })
    ).subscribe());
    this.subscriptions.add(this.provider.receiveCommands (DontCodeModel.APP_SCREENS, DontCodeModel.APP_SCREENS_NAME_NODE).pipe(
      map(command => {
        this.updateMenu (command, 'pi-desktop');
        this.ref.detectChanges();
    })
    ).subscribe());

  }

  getDynamicMenu (): Array<any> {
    return this.templateMenus[1].items;
  }

  generateMenu (): Array<any> {
    // Create a new menu object to update UI
    let ret= new Array<any>();
    this.templateMenus.forEach(value => {
      ret.push(value);
    });
    return ret;
  }

  ngOnDestroy(): void {
    // unsubscribe to all observables
    this.subscriptions.unsubscribe();
  }

  gotoPage(page:string): void {
    // ngZone is necessary as we are being called by a non angular component (kor-ui)
    this.ngZone.run (() => {
      this.router.navigate([page]);
    })
  }

  isActive(page:string):boolean {
    const ret = this.router.isActive(page, true);
//    console.log(page +' is active:'+ret);
    return ret;
  }

  private cleanPosition(position: string): string {
    /*    if (position.startsWith(DontCodeModel.ROOT))
          position = position.substr(DontCodeModel.ROOT.length+1);*/

    if (position.endsWith(DontCodeModel.APP_SCREENS_NAME_NODE))
    {
      position = position.substring(0, position.length-DontCodeModel.APP_SCREENS_NAME_NODE.length-1);
    }
    return position;
  }

  private updateMenu(command: Change, icon: string) {
    let key = this.cleanPosition(command.position);
    let found=false;
    this.getDynamicMenu().forEach(value => {
      if (value.routerLink[0]===key) {
        value.label = command.value;
        found=true;
      }
    });

    if (!found) {
      this.getDynamicMenu().push({
        routerLink:[key],
        label:command.value,
        icon:'pi '+icon
      });
    }
    this.menus = this.generateMenu();
  }
}

