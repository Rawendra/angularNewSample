import { Component, OnInit } from "@angular/core";

let sometext = "this is awesome, never thought to c this";
@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: "app-servers",
  templateUrl: "./servers.component.html",
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  styles: [
    `
      background-color: "pink";
    `,
  ],

  styleUrls: ["./servers.component.css"],
})
export class ServersComponent implements OnInit {
  clicked = false;
  paratext = sometext;
  inputText = "";
  twoWayBindedString = "default";
  constructor() {}

  onClick = () => {
    this.clicked = !this.clicked;
  };

  handleInput(event) {
    console.log("event is getting called for input", event);
    this.inputText = event.target.value;
  }
  ngOnInit() {
    console.log("ng-on-init is called");
    // setInterval(() => {
    //   this.clicked = !this.clicked;
    //   this.paratext = this.clicked ? sometext : null;
    // }, 1000);
  }
}
