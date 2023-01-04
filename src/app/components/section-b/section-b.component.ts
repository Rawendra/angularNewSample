import { Component, OnInit } from "@angular/core";
import { AppProductsService } from "../../services/app.service.products";
@Component({
  selector: "app-section-b",
  templateUrl: "./section-b.component.html",
  styleUrls: ["./section-b.component.css"],
 
})
export class SectionBComponent implements OnInit {
  name:string;
  status:string
  constructor(private appProductService: AppProductsService) {}
  ngOnInit(): void {}
  addProduct() {
    console.log(this.name, this.status);
 this.appProductService.addProducts(this.name, this.status)
  }
  handleName(event): void {
    this.name = event.target.value;
  }
  handleStatus(event): void {
    this.status = event.target.value;
  }
}
