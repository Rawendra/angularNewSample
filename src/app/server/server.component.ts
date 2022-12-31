import { Component } from "@angular/core";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
})
export class ServerComponent {
  title: string = "Server";
  name: string = "Rawendra ";

  otherString = () => this.name + "whatever this is , its fine";

  getServerStatus() {
    return this.name + "what the fuck";
  }
}
