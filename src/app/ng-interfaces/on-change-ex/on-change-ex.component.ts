import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'on-change-ex',
  template: `
    <div>
      Changes Log.
      <p *ngFor="let ch of lsChanges">{{ch}}</p>

    </div>
  `,
  styles: []
})
export class OnChangeExComponent implements OnInit, OnChanges {

  @Input('name') name ;
  private lsChanges : Array<String> = [] ;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes : SimpleChanges) {
    this.lsChanges.push(JSON.stringify(changes));
  }
}
