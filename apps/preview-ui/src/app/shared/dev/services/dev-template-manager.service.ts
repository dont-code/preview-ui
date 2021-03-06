import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { catchError, filter, flatMap, map, mergeMap } from "rxjs/operators";
import { from, Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DevTemplateManagerService {

  protected templates:DevTemplate[] ;

  constructor(protected http:HttpClient) { }

  getTemplates () : Observable<DevTemplate[]> {
    if (this.templates)
      return of(this.templates);
    else {
      return this.http.get('assets/dev/templates.json', { responseType: "json" }).pipe(
        map(value => {
          this.templates = new Array<DevTemplate>();
          const src = value as Array<any>;
          src.forEach(tmpl => {
            this.templates.push(new DevTemplate(tmpl));
          });
          return this.templates;
        }),
        catchError(err => {
          console.log("Error reading Dev templates file", err);
          throw err;
        })
      )
    }
  }

  filterTemplates (templateName:string): Observable<DevTemplate[]> {
    //console.log ("filter templates called", templateName);
    templateName=templateName.toLowerCase();
    return this.getTemplates().pipe(
     map(value => {
       let ret = value.filter(tmpl => {
         if (tmpl.name.toLowerCase().startsWith(templateName)) {
           return true;
         } else return false;
       });
       // console.log("filter templates returning",ret);
       return ret;
      }));
  }

}

export class DevTemplate {
  constructor(tmpl: any) {
    this.name=tmpl.name;
    this.sequence=tmpl.sequence;
    // Support loading simple templates
    if (tmpl.position !== undefined) {
      this.sequence=new Array({
        position:tmpl.position,
        type:tmpl.type,
        value: tmpl.value
      });
    }
  }

  name:string;
  sequence?: Array<{
    position:string,
    type:string,
    value:any
  }>;

  isSequence():boolean {
    return (this.sequence.length>1);
  }
}

