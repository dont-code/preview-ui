import { Component, OnInit } from "@angular/core";
import { CommandProviderService } from "../../../shared/command/services/command-provider.service";
import { Change, ChangeType } from "@dontcode/core";
import { DevChangePushService } from "../../../shared/dev/services/dev-change-push.service";
import { DevTemplate, DevTemplateManagerService } from "../../../shared/dev/services/dev-template-manager.service";
import { BasicComponent } from "../../../../../../../libs/basic/src/lib/preview/basic-component";
import { Observable } from "rxjs";

@Component({
  selector: 'preview-ui-insert-command',
  templateUrl: './insert-command.component.html',
  styleUrls: ['./insert-command.component.css']
})
export class InsertCommandComponent extends BasicComponent implements OnInit {
  position: string = 'creation/name';
  value:string = 'New Test';

  listTemplates: Observable<DevTemplate[]>;

  constructor(protected pushService:DevChangePushService, protected templates:DevTemplateManagerService) {
    super();
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.listTemplates = this.templates.getTemplates();
  }

  addCommand($event: any) {
    this.pushService.pushChange(new Change (ChangeType.ADD, this.position, this.value));
  }

  templateChanged(selectedName: string) {
    this.position = this.templates.findTemplate (selectedName).position;
  }
}
