import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importe o FormsModule
import { AppComponent } from './app.component';

/* Imports para components */
import { BodyComponent } from './components/bodyComponent/body.component';
import { NavBarComponent } from './components/navBarComponent/navBar.component';
import { CardComponent } from './components/cardComponent/card.component';
import { HeaderComponent } from './components/headerComponent/header.component';
@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    NavBarComponent,
    CardComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }