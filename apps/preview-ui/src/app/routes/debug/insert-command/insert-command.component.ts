import { Component, OnDestroy, OnInit } from "@angular/core";
import { Change, ChangeType } from "@dontcode/core";
import { DevChangePushService } from "../../../shared/dev/services/dev-change-push.service";
import { DevTemplate, DevTemplateManagerService } from "../../../shared/dev/services/dev-template-manager.service";
import { FormBuilder } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'preview-ui-insert-command',
  templateUrl: './insert-command.component.html',
  styleUrls: ['./insert-command.component.css']
})
export class InsertCommandComponent implements OnInit, OnDestroy {
  position: string = 'creation/name';
  value:string = 'New Test';

  subscriptions = new Subscription();

  listTemplates: DevTemplate[];
  filteredTemplates: DevTemplate[];
  templateForm = this.fb.group({
    template:[null],
    step:[null],
    position:[''],
    value:[null]
  });
  filteredSteps: Array<{ position, value }>;

  constructor(protected pushService:DevChangePushService, protected templates:DevTemplateManagerService, private fb:FormBuilder) {
  }

  ngOnInit(): void {
    this.subscriptions.add(this.templates.getTemplates().pipe(
      map(allTemplates => {
        this.listTemplates=allTemplates;
      })).subscribe());

    this.subscriptions.add(this.templateForm.get("template").valueChanges.pipe(
      map(templ => {
        if (templ instanceof DevTemplate) {
          this.filteredSteps = templ.sequence;
          this.templateForm.get("step").setValue(templ.sequence[0]);
          } else {
          this.templateForm.get("step").setValue(null);
        }
      })
    ).subscribe());
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  addCommand($event: any) {
/*    this.selectedTemplate.sequence.forEach(step => {
      this.pushService.pushChange(new Change (ChangeType.ADD, step.position, step.value));
    });*/
  }

  searchTemplate($event: any) {
    this.templates.filterTemplates ($event.query).toPromise().then (list => {
      this.filteredTemplates = list;
    })
  }

  protected getSelectedTemplate (): DevTemplate {
    return this.templateForm.get("template").value;
  }

  searchStep($event: any) {
    let query = $event.query.toLowerCase();
    if (this.getSelectedTemplate()?.sequence) {
      this.filteredSteps = this.getSelectedTemplate().sequence.filter(step => {
        if (step.position.toLowerCase().startsWith(query)) {
          return true;
        } else return false;
      });
    } else {
      this.filteredSteps=[];
    }
  }
}
