import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck } from '@angular/core';

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
export class OnChangeExComponent implements OnInit, OnChanges , DoCheck{

  @Input('name') name ;
  private lsChanges : Array<String> = [] ;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes : SimpleChanges) {
    this.lsChanges.push("NGONCHANGES -> " +JSON.stringify(changes));
  }

  ngDoCheck(){
    this.lsChanges.push("ngDoCheck");

  }
}
