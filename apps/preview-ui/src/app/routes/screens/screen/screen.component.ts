import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CommandProviderService } from "../../../shared/command/services/command-provider.service";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

@Component({
  selector: 'preview-ui-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']
})
export class ScreenComponent implements OnInit {
  screenName$:Observable<string>;

  constructor(private route:ActivatedRoute, protected provider:CommandProviderService) { }

  ngOnInit(): void {
    this.screenName$= this.route.paramMap.pipe(map(params => {
      return params.get('id');
    }))

  }

}
