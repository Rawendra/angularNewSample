import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  SimpleChanges,
  OnChanges,
  DoCheck,
} from "@angular/core";

@Component({
  selector: "app-card-details",
  templateUrl: "./card-details.component.html",
  styleUrls: ["./card-details.component.css"],
})
export class CardDetailsComponent implements OnInit, OnChanges, DoCheck {
  constructor() {}
  @Input() cardValue;

  @Output() deleteCardEvent = new EventEmitter<{ cardName: string }>();
  cardDetails: { cardName: string; cardDesc: string; cardId: number } = {
    cardName: "",
    cardDesc: "",
    cardId: 0,
  };
  ngOnChanges(changes: SimpleChanges): void {
    console.log(`ngOnChanges is called ${changes} card details component`);
  }
  ngOnInit(): void {
    this.cardDetails.cardName = "rawi";
    this.cardDetails.cardDesc = "rawi";
    this.cardDetails.cardId = 123;
    console.log("ngOnInit called card details");
  }
  handleDelete(input) {
    console.log("delete is clicked", input);
    this.deleteCardEvent.emit({ cardName: this.cardValue });
  }
  ngDoCheck(): void {
    console.log("ngDoCheck is called  Card details component ",this.cardValue);
  }
}
