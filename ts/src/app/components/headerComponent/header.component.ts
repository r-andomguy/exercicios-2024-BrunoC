// header.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  selectedLanguage: string = 'pt'; 
  
  changeLanguage() {
    console.log('Idioma selecionado:', this.selectedLanguage);
  }
}
