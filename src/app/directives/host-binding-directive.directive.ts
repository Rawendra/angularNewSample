import {
  Directive,
  OnInit,
  HostBinding,
  HostListener,
  Input,
} from "@angular/core";

@Directive({
  selector: "[appHostBindingDirective]",
})
export class HostBindingDirectiveDirective implements OnInit {
  @HostBinding("style.backgroundColor") backGroundColor: string;
  @HostBinding("style.color") color: string;
  @Input("default-color") defaultBackground: string;
  @Input("custom-color") customBackground: string;
  constructor() {}
  ngOnInit() {
    this.backGroundColor = "transparent";
  }
  @HostListener("mouseenter") mouseEnter(eventData: Event) {
    console.log('this.defaultBackground',this.defaultBackground )
    this.backGroundColor = this.defaultBackground || "lightyellow";
    this.color = this.customBackground || "blue";
  }

  @HostListener("mouseleave") mouseLeave(eventData: Event) {
    this.backGroundColor = "transparent";
    console.log('this.defaultBackground',this.defaultBackground )
    this.color = "black";
  }
}
