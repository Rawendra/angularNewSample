import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  // styleUrls: ['./app.component.css']
  styles: [
    `
      h3 {
        color: dodgerblue;
      }
    `,
  ],
})
export class AppComponent implements OnInit {
  ngOnInit() {
    console.log("ngOnInit called");
  }
}
