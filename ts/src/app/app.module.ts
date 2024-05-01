import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importe o FormsModule
import { AppComponent } from './app.component';

/* Imports para components */
import { BodyComponent } from './components/bodyComponent/body.component';
import { NavBarComponent } from './components/navBarComponent/navBar.component';
import { CardComponent } from './components/cardComponent/card.component';
import { HeaderComponent } from './components/headerComponent/header.component';
import { VideoComponent } from './components/videoComponent/video.component';
import { ResumeComponent } from './components/resumeComponent/resume.component';
import { TopicComponent } from './components/topicComponent/topic.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    NavBarComponent,
    CardComponent,
    HeaderComponent,
    VideoComponent,
    ResumeComponent,
    TopicComponent
  ],
  imports: [
    BrowserModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
