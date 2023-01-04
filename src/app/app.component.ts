import { Component } from "@angular/core";
import { AppProductsService } from "./services/app.service.products";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  providers: [AppProductsService],
  // styleUrls: ['./app.component.css']
  styles: [
    `
      h3 {
        color: dodgerblue;
      }
    `,
  ],
})
export class AppComponent {}
