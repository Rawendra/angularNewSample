import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { CardComponent } from './card/card.component';
import { BasicHighLightDirective } from './basic-high-light.directive';
import { HomeComponent } from './home/home.component';
import { BasicHighLightDirectiveDirective } from './directives/basic-high-light-directive.directive';
import { HostBindingDirectiveDirective } from './directives/host-binding-directive.directive';
import { StructuralDirectiveDirective } from './directives/structural-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    CardComponent,
    BasicHighLightDirective,
    HomeComponent,
    BasicHighLightDirectiveDirective,
    HostBindingDirectiveDirective,
    StructuralDirectiveDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
