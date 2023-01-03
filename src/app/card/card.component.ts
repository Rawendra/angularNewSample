import { Component, ElementRef, OnChanges, OnInit, SimpleChanges ,  ViewChild,} from "@angular/core";


@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})
export class CardComponent implements OnInit, OnChanges {
  cards = ["green", "red", "yellow", "blue"];
  @ViewChild ('cardValue') simpleParaDiv:ElementRef;
  constructor() {}
  color = "green";

  dangerValue = false;
  showCardText = false;
  timeList = [new Date()];
  ngOnInit(): void {
    console.log("ngOnInit called card component");
    console.log(this.simpleParaDiv)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`ngOnChanges is called ${changes} card component `);
  }

  getColor(inputColor) {
    return inputColor ? inputColor.toLowerCase() : this.color?.toLowerCase();
  }
  handleCardClick(item,other) {
    console.log('simpleParaDiv',this.simpleParaDiv, other)
    console.log(item);
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
  appendTime() {
    this.timeList.push(new Date());
  }
  clearTime() {
    this.timeList = [];
  }
  getDangerCondition() {
    return this.dangerValue;
  }
  handleDeleteCard(event) {
    this.cards = this.cards.filter((card) => card !== event.cardName);
    console.log("card component deleting", event);
  }
}
