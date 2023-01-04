import { Directive ,ElementRef,OnInit} from '@angular/core';

@Directive({
  selector: '[appBasicHighLight]'
})
export class BasicHighLightDirective implements OnInit {

  constructor(private elemref:ElementRef) {
   
   }
   ngOnInit(){
    this.elemref.nativeElement.style.backgroundColor='white'
   }

}
