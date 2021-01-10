import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { map } from "rxjs/operators";
import { Change } from "@dontcode/core";
import { CommandProviderService } from "../../../shared/command/services/command-provider.service";

@Component({
  selector: 'preview-ui-list-commands',
  templateUrl: './list-commands.component.html',
  styleUrls: ['./list-commands.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ListCommandsComponent implements OnInit, OnDestroy {
  protected subscriptions = new Subscription();

  commands: Change[] = [];

  /**
   * Dont update for the first item sent by providerservice
   */
  protected forgetIt = true;


  constructor(    protected changeProvider:CommandProviderService,
                  protected ref:ChangeDetectorRef) { }

  ngOnInit(): void {
    this.subscriptions.add(this.changeProvider.getAllCommands()
      .pipe(
        map ((command) => {
        console.log('Received...', command);
/*        if( this.forgetIt) {
          this.forgetIt=false;
        } else {*/
          this.commands.push(command);
          this.ref.detectChanges();
//        }
      })).subscribe());
  }

  noCommands(): boolean {
    return  this.commands.length==0;
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }

}
