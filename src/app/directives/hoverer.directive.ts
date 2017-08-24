import { Directive, Input, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[hoverer]',
  host : {
    '(mouseenter)' : 'onMouseEnter($event)',
    '(mouseleave)' : 'onMouseLeave($event)'
  }
})
export class HovererDirective {
  @Input() hoverer;

  constructor(private elementRef : ElementRef, private renderer : Renderer) { }

  onMouseEnter(mouseEnterEvent){
    console.log("COMING INSIDE");
    this.renderer.setElementStyle(
        this.elementRef.nativeElement, 'color', this.hoverer);

  }

  onMouseLeave(mouseLeaveEvent){
    console.log("COMING LEAVING . "); 
    this.renderer.setElementStyle(
      this.elementRef.nativeElement, 'color','black'
    );
  }

}
