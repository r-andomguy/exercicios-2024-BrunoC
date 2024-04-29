import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

/* Imports para components */
import { BodyComponent } from './components/bodyComponent/body.component';
import { NavBarComponent } from './components/navBarComponent/navBar.component';
import { CardComponent } from './components/cardComponent/card.component';
@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    NavBarComponent,
    CardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }