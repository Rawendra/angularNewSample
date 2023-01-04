import { Component, OnInit } from "@angular/core";
import { AppProductsService } from "../../services/app.service.products";
@Component({
  selector: "app-section-a",
  templateUrl: "./section-a.component.html",
  styleUrls: ["./section-a.component.css"],
})
export class SectionAComponent implements OnInit {
  constructor(private appProductService: AppProductsService) {}
  _productsList = [];
  ngOnInit(): void {
    this._productsList = this.appProductService.getProducts();
  }
}
