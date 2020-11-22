import { Component, OnInit } from "@angular/core";
import { Change, ChangeType } from "@dontcode/core";
import { DevChangePushService } from "../../../shared/dev/services/dev-change-push.service";
import { DevTemplate, DevTemplateManagerService } from "../../../shared/dev/services/dev-template-manager.service";
import { Observable } from "rxjs";

@Component({
  selector: 'preview-ui-insert-command',
  templateUrl: './insert-command.component.html',
  styleUrls: ['./insert-command.component.css']
})
export class InsertCommandComponent implements OnInit {
  position: string = 'creation/name';
  value:string = 'New Test';

  listTemplates: Observable<DevTemplate[]>;

  constructor(protected pushService:DevChangePushService, protected templates:DevTemplateManagerService) {
  }

  ngOnInit(): void {
    this.listTemplates = this.templates.getTemplates();
  }

  addCommand($event: any) {
    this.pushService.pushChange(new Change (ChangeType.ADD, this.position, this.value));
  }

  templateChanged(selectedName: string) {
    this.position = this.templates.findTemplate (selectedName).position;
  }
}
