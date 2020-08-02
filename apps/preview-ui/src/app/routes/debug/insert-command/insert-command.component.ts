import { Component, OnInit } from "@angular/core";
import { CommandProviderService } from "../../../shared/command/services/command-provider.service";
import { Change, ChangeType } from "@dontcode/core";

@Component({
  selector: 'preview-ui-insert-command',
  templateUrl: './insert-command.component.html',
  styleUrls: ['./insert-command.component.css']
})
export class InsertCommandComponent implements OnInit {
  position: string = 'creation/name';
  value:string = 'New Test';

  constructor(protected commandService:CommandProviderService) { }

  ngOnInit(): void {
  }

  addCommand($event: any) {
    this.commandService.pushCommand(new Change (ChangeType.ADD, this.position, this.value));
  }
}
