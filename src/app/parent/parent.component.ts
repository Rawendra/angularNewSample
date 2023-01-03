import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-parent",
  templateUrl: "./parent.component.html",
  styleUrls: ["./parent.component.css"],
})
export class ParentComponent implements OnInit {
  showChild1: boolean;
  showChild2: boolean;
  default:boolean;
  child1Content:string='this is child1'
  child2Content:string='this is child2'
  constructor() {}

  ngOnInit(): void {
    this.showChild1=true
    this.showChild2=true
    this.default=true
  }

  toggleChild1(){
    this.showChild1=!this.showChild1
  }
  toggleChild2(){
    this.showChild2=!this.showChild2
  }
  toggleDefault(){
    this.default=!this.default
  }
}
