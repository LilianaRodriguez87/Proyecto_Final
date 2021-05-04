import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { Menu2Component } from './menu2/menu2.component';
import { Menu3Component } from './menu3/menu3.component';
import { Menu4Component } from './menu4/menu4.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    Menu2Component,
    Menu3Component,
    Menu4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
