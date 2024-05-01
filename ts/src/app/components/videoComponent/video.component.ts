import { Component } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent {
  detalhes = {
    tipoApresentacao: 'Pôster',
    eixoTematico: 'Alimentação e saúde (AS) ',
    palavrasChaves: ['Alimentos', 'Funcionais', 'Alimentação escolar'],
    autores: ['Galileo Galilei', 'Berta Lange de Morretores', 'Cesar Lattes', 'Stephen Hawking'],
    university: ['Universidade Estadual de Campinas', 'Universidade de São Paulo', 'Instituto Nacional de Pesquisas Espaciais', 'universidade Federal do Rio de Janeiro' ]

  };
}