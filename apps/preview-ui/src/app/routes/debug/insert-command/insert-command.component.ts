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
  selectedTemplate: DevTemplate;
  selectedStep: { position, value };

  constructor(protected pushService:DevChangePushService, protected templates:DevTemplateManagerService) {
  }

  ngOnInit(): void {
    this.listTemplates = this.templates.getTemplates();
  }

  addCommand($event: any) {
    this.selectedTemplate.sequence.forEach(step => {
      this.pushService.pushChange(new Change (ChangeType.ADD, step.position, step.value));
    });
  }

  templateChanged(selectedName: string) {
    this.selectedTemplate = this.templates.findTemplate (selectedName);
    this.stepChanged(this.selectedTemplate.sequence[0].position);
  }

  stepChanged(step:string) {
    this.selectedStep = this.selectedTemplate.sequence.find(seq => {
      if( seq.position===step)
        return true;
      else return false;
    });
    this.position = this.selectedStep.position;
    this.value = this.selectedStep.value;
  }

  positionChanged(newPos:string) {
    this.selectedStep.position=newPos;
    this.position=newPos;
  }

  valueChanged (newVal:any) {
    this.selectedStep.value=newVal;
    this.value=newVal;
  }
}
