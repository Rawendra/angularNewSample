import { Directive, ElementRef, OnInit, Renderer2, HostListener } from "@angular/core";

@Directive({
  selector: "[appBasicHighLightDirective]",
})
export class BasicHighLightDirectiveDirective implements OnInit {
  @HostListener('mouseenter') mouseOver(event:Event){
    this.renderer.setStyle(
      this.element.nativeElement,
      "background-color",
      "lightblue"
    );
    this.renderer.setStyle(this.element.nativeElement, "color", "blue");
  }
  @HostListener('mouseleave') mouseLeave(event:Event){
    this.renderer.setStyle(
      this.element.nativeElement,
      "background-color",
      "transparent"
    );
    this.renderer.setStyle(this.element.nativeElement, "color", "black");
  }
  constructor(private element: ElementRef, private renderer: Renderer2) {}
  ngOnInit() {
    
  }
}
