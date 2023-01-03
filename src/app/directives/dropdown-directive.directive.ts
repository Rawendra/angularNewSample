import { Directive, OnInit, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector: "[appDropdownDirective]",
})
export class DropdownDirectiveDirective implements OnInit {
  @HostBinding("class.open") isOpen: boolean;

  @HostListener("click") toggleOpen() {
    this.isOpen = !this.isOpen;
  }
  constructor() {}
  ngOnInit() {
    this.isOpen = false;
  }
}
