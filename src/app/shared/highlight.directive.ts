import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnChanges {
  
  @Input() color = 'green';

  @Input() appHighlight = false;

  constructor(
    private render: Renderer2, //Ivy
    private elementRef: ElementRef) {
      
    }

    highlight(){
      this.render.setStyle(this.elementRef.nativeElement,
        'backgroundColor',
        this.appHighlight ? this.color : 'inherit')
    };

    ngOnChanges(): void{
      this.highlight();
    }
}
