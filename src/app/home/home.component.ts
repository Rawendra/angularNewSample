import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  listForString = [];
  defaultColor: string;
  customColor: string;

  constructor() {}

  ngOnInit(): void {
    this.listForString = ["apple", "mango", "banana", "jackfruit"];
  }
  handleDefaultColor(event) {
    console.log("handleDefaultColor", event.target.value);
    this.defaultColor = event.target.value;
  }
  handleCustomColor(event) {
    console.log("handleCustomColor", event);
    this.customColor = event.target.value;
  }
}
