import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})
export class CardComponent implements OnInit {
  cards = ["green", "red", "yellow", "blue"];
  constructor() {}
  color = "green";
  dangerValue = false;
  showCardText = false;
  timeList =[ new Date()];
  ngOnInit(): void {}

  getColor(inputColor) {
    return inputColor ? inputColor.toLowerCase() : this.color?.toLowerCase();
  }
  handleClick() {
    this.showCardText = !this.showCardText;
  }
  getClassCondition() {
    return this.showCardText;
  }
  setDanger() {
    this.dangerValue = !this.dangerValue;
  }
  appendTime(){
    this.timeList.push(new Date)
  }
  getDangerCondition() {
    return this.dangerValue;
  }
}
