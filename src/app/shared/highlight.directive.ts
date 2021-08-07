import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnChanges {
  
  @Input() color = 'green';

  @Input() isHighlighted = false;

  constructor(
    private render: Renderer2, //Ivy
    private elementRef: ElementRef) {
      
    }

    highlight(){
      this.render.setStyle(this.elementRef.nativeElement,
        'backgroundColor',
        this.isHighlighted ? this.color : 'inherit')
    };

    ngOnChanges(): void{
      this.highlight();
    }
}
