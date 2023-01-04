import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { CardComponent } from "./card/card.component";
import { BasicHighLightDirective } from "./basic-high-light.directive";
import { HomeComponent } from "./home/home.component";
import { BasicHighLightDirectiveDirective } from "./directives/basic-high-light-directive.directive";
import { HostBindingDirectiveDirective } from "./directives/host-binding-directive.directive";
import { StructuralDirectiveDirective } from "./directives/structural-directive.directive";
import { HeaderComponent } from "./header/header.component";
import { DropdownDirectiveDirective } from './directives/dropdown-directive.directive';
import { SectionAComponent } from './components/section-a/section-a.component';
import { SectionBComponent } from './components/section-b/section-b.component';
@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    BasicHighLightDirective,
    HomeComponent,
    BasicHighLightDirectiveDirective,
    HostBindingDirectiveDirective,
    StructuralDirectiveDirective,
    HeaderComponent,
    DropdownDirectiveDirective,
    SectionAComponent,
    SectionBComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
