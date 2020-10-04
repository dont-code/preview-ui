import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { map, takeUntil } from "rxjs/operators";
import { Change } from "@dontcode/core";
import { CommandProviderService } from "../../../shared/command/services/command-provider.service";

@Component({
  selector: 'preview-ui-list-commands',
  templateUrl: './list-commands.component.html',
  styleUrls: ['./list-commands.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ListCommandsComponent implements OnInit, OnDestroy {

  commands: Change[] = [];
  unsubscriber = new Subject();

  /**
   * Dont update for the first item sent by providerservice
   */
  protected forgetIt = true;


  constructor(    protected providerService:CommandProviderService,
                  protected ref:ChangeDetectorRef) { }

  ngOnInit(): void {
//    console.log("ListCommands");
    this.providerService.receiveCommands()
      .pipe(takeUntil(this.unsubscriber),
        map ((command) => {
//        console.log('Received Change for listing', command.position);
/*        if( this.forgetIt) {
          this.forgetIt=false;
        } else {*/
          this.commands.push(command);
          this.ref.detectChanges();
//        }
      })).subscribe();
  }

  noCommands(): boolean {
    return  this.commands.length==0;
  }

  ngOnDestroy(): void {
    // unsubscribe to all observables
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }

}
