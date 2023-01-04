import { Injectable, EventEmitter } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AppProductsService {
  products = [
    {
      name: "Master Account",
      status: "active",
    },
    {
      name: "Testaccount",
      status: "inactive",
    },
    {
      name: "Hidden Account",
      status: "unknown",
    },
  ];
  constructor() {}
  updateStatusEvent = new EventEmitter<string>();

  addProducts(name: string, status: string) {
    this.products.push({ name: name, status: status });
  }

  updateStatus(id: number, status: string) {
    this.products[id].status = status;
  }

  getProducts() {
    return this.products;
  }
}
