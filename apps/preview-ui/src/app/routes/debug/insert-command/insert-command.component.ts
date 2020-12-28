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
        let stepControl=this.templateForm.get("step");
        if (templ instanceof DevTemplate) {
          this.filteredSteps = templ.sequence;
          stepControl.setValue(templ.sequence[0]);
          stepControl.enable({emitEvent:false})
        } else {
          stepControl.setValue(null);
          stepControl.disable({emitEvent:false})
        }

      })
    ).subscribe());

    this.subscriptions.add(this.templateForm.get("step").valueChanges.pipe(
      map(step => {
        let valueControl=this.templateForm.get("value");
        if( step === null) {
          valueControl.disable({emitEvent:false});
        } else {
          valueControl.enable({emitEvent:false});
        }

        if (typeof step === 'string' || step instanceof String) {
//          valueControl.setValue(null);
          this.templateForm.get("template").setValue(null,{emitEvent:false});
        } else {
          if (typeof step.value === 'string' || step.value instanceof String) {
            valueControl.setValue(step.value);
          } else {
            valueControl.setValue(JSON.stringify(step.value, null,2));
          }
        }
      })
    ).subscribe());
    this.subscriptions.add(this.templateForm.get("value").valueChanges.pipe(
      map(value => {
        let step = this.getSelectedStep();
        if( step) {
          if( typeof step === 'string' || step instanceof String) {
            return;
          }
          try {
            step.value=JSON.parse(value);
          } catch (e:any) {
              // Not json, so set a string
            step.value= value;
          }
        }
      })
    ).subscribe());
  }


  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  sendCommand() {
    let tmpl = this.getSelectedTemplate();
    if (tmpl) {
      tmpl.sequence.forEach(step => {
        this.pushService.pushChange(new Change (ChangeType.ADD, step.position, step.value));
      });
    } else {
      // It's just a step, not from any template
      let step = this.getSelectedStep();
     this.pushService.pushChange(new Change (ChangeType.ADD, step as string, JSON.parse(this.templateForm.get("value").value)));
    }
  }

  searchTemplate($event: any) {
    this.templates.filterTemplates ($event.query).toPromise().then (list => {
      this.filteredTemplates = list;
    })
  }

  protected getSelectedTemplate (): DevTemplate {
    return this.templateForm.get("template").value;
  }

  protected getSelectedStep (): {position, value}|string {
    return this.templateForm.get("step").value;
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
