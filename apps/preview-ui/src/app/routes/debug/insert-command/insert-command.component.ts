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
  position = 'creation/name';
  value = 'New Test';

  subscriptions = new Subscription();

  listTemplates: DevTemplate[];
  filteredTemplates: DevTemplate[];
  templateForm = this.fb.group({
    template:[null],
    step:[null],
    type:[null],
    position:[''],
    value:[null]
  });
  filteredSteps: Array<{ position, value }>;
  valueFieldLabel = "Value";
  changeTypes= [
    {label:ChangeType.ADD },
    {label:ChangeType.UPDATE },
    {label:ChangeType.DELETE },
    {label:ChangeType.MOVE },
    {label:ChangeType.RESET }
  ];
  openAddCommand = true;


  constructor(protected pushService:DevChangePushService, protected templates:DevTemplateManagerService, private fb:FormBuilder) {
  }

  ngOnInit(): void {
    this.subscriptions.add(this.templates.getTemplates().pipe(
      map(allTemplates => {
        this.listTemplates=allTemplates;
      })).subscribe());

    this.subscriptions.add(this.templateForm.get("template").valueChanges.pipe(
      map(templ => {
        const stepControl=this.templateForm.get("step");
        const typeControl=this.templateForm.get("type");
        if (templ instanceof DevTemplate) {
          this.filteredSteps = templ.sequence;
          stepControl.setValue(templ.sequence[0]);
          stepControl.enable({emitEvent:false})
          typeControl.setValue(templ.sequence[0].type);
        } else {
          stepControl.setValue(null);
          stepControl.disable({emitEvent:false})
          typeControl.setValue(null);
        }

      })
    ).subscribe());

    this.subscriptions.add(this.templateForm.get("step").valueChanges.pipe(
      map(step => {
        const valueControl=this.templateForm.get("value");
        const typeControl=this.templateForm.get("type");
        if( step === null) {
          valueControl.disable({emitEvent:false});
          typeControl.disable({emitEvent:false});
        } else {
          valueControl.enable({emitEvent:false});
          typeControl.enable({emitEvent:false});
        }

        if (typeof step === 'string' || step instanceof String) {
//          valueControl.setValue(null);
          this.templateForm.get("template").setValue(null,{emitEvent:false});
        } else {
          typeControl.setValue(step.type);
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
        const step = this.getSelectedStep();
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
    this.subscriptions.add(this.templateForm.get("type").valueChanges.pipe(
      map(value => {
        const step = this.getSelectedStep();
        if( step) {
          if( typeof step === 'string' || step instanceof String) {
            return;
          }
          step.type=value;
        }
        if( value===ChangeType.MOVE) {
          this.valueFieldLabel="Before";
        } else {
          this.valueFieldLabel="Value";
        }
      })
    ).subscribe());
  }


  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  sendCommand() {
    const tmpl = this.getSelectedTemplate();
    if (tmpl) {
      tmpl.sequence.forEach(step => {
        this.pushChange(step.type, step.position,step.value);
      });
    } else {
      // It's just a step, not from any template
      const step = this.getSelectedStep();
      // Is the value Json or not ?
      let jsonVal=this.templateForm.get("value").value;
      try {
        jsonVal = JSON.parse(jsonVal);
      } catch (error) {
        console.log("Value is not json ", jsonVal, error);
      }
      this.pushChange(this.templateForm.get("type").value, step as string, jsonVal);
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

  protected getSelectedStep (): {position, type, value}|string {
    return this.templateForm.get("step").value;
  }

  searchStep($event: any) {
    const query = $event.query.toLowerCase();
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

  private pushChange(type: string, position: string, valueOrBeforeKey: any) {
    const toSend = new Change(ChangeType[type], position, valueOrBeforeKey);
    if( type===ChangeType.MOVE) {
      toSend.value=null;
      toSend.oldPosition = position;
      toSend.beforeKey=valueOrBeforeKey as string;
    }
    this.pushService.pushChange(toSend);

  }
}
