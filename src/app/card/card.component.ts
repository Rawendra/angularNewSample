import { Component, OnInit } from "@angular/core";
import Logger from "../services/app.service.logger";
@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
  providers: [Logger],
})
export class CardComponent implements OnInit {
  cards = ["green", "red", "yellow", "blue"];
  constructor(private appServiceLogger:Logger) {}
  color = "green";
  dangerValue = false;
  showCardText = false;
  timeList = [new Date()];
  ngOnInit(): void {}

  getColor(inputColor) {
    return inputColor ? inputColor.toLowerCase() : this.color?.toLowerCase();
  }
  handleClick() {
    this.appServiceLogger.logStatusChange('handleClick')
    this.showCardText = !this.showCardText;
  }
  getClassCondition() {
    return this.showCardText;
  }
  setDanger() {
    this.appServiceLogger.logStatusChange('setDanger')
    this.dangerValue = !this.dangerValue;
  }
  appendTime() {
    this.appServiceLogger.logStatusChange('appendTime')
    this.timeList.push(new Date());
  }
  getDangerCondition() {
    return this.dangerValue;
  }
}
