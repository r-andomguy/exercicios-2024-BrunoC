import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import * as uuid from 'uuid';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit{
  subject: string = ''; 
  content: string = ''; 
  showRecent: boolean = false; // Variável para controlar a visibilidade da div recent
  selectedTopic: any; // Para armazenar o tópico selecionado
  showTopicWrapper: boolean = true;
  showTopicSended: boolean = false;
  topics: any[] = [];

  @ViewChild('topicContainer', { static: true }) topicContainer!: ElementRef;

  constructor(private elementRef: ElementRef) { }

  toggleTopic() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    this.showTopicWrapper = !this.showTopicWrapper;
    this.restoreScrollPosition(scrollPosition);
  }

  sendTopic() {

    const currentTime = new Date().getTime();

    /* Validação para campos vazios */
    /*
    if (!this.subject || !this.content) {
        alert("Por favor, preencha todos os campos.");
        return;
    } */


  // Calcula a diferença entre o horário atual e o horário do tópico
  

    const topicData = {
      id:  uuid.v4(), // Gera um ID único
      subject: this.subject,
      content: this.content,
      author: 'User', 
      likes: 0,
      answers: 0,
      showRecent: true, // Define showRecent como true para o tópico recém-criado
      timestamp: currentTime
    };

    this.topics.unshift(topicData);
    
    const timeDifference = currentTime - topicData.timestamp;

  // Define showRecent como false após 3 minutos da diferença
  setTimeout(() => {
      console.log("Tempo limite alcançado. Removendo div recent.");
      topicData.showRecent = false;
  }, Math.max(0, (1 * 60 * 2000) - timeDifference)); 
  
  // Define showRecent como false para todos os outros tópicos
  this.topics.forEach(topic => {
        if (topic !== topicData) {
            topic.showRecent = false;
        }
  });



  // Salva o novo tópico no armazenamento local
  localStorage.setItem('topicData', JSON.stringify(topicData));

  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  this.showTopicSended = true;
  this.showTopicWrapper = false;
  this.restoreScrollPosition(scrollPosition);

  // Limpa os campos após o envio do tópico
  this.subject = '';
  this.content = '';
}


  private restoreScrollPosition(scrollPosition: number) {
    setTimeout(() => {
      if (this.topicContainer && this.topicContainer.nativeElement) {
        this.topicContainer.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo(0, scrollPosition);
      }
    });
  }

  ngOnInit() {

    // Recupera os dados do armazenamento local
    const storedData = localStorage.getItem('topicData');
    if (storedData) {
      const topicData = JSON.parse(storedData);
      this.topics.push(topicData);
      
      const currentTime = new Date().getTime();
      const timeDifference = currentTime - topicData.timestamp;
      if (timeDifference < (1 * 60 * 1000)) { // Se o tempo passado desde a criação for inferior a 1 minuto
          // Define showRecent como true
          topicData.showRecent = true;
          
          setTimeout(() => {
              topicData.showRecent = false;
              // Remove o tópico do armazenamento local
              localStorage.removeItem('topicData');
          }, Math.max(0, (1 * 60 * 1000) - timeDifference));
      }
  }

    // Adiciona dois tópicos de exemplo
    this.topics.push({
        subject: 'Título do tópico 1',
        content: 'Conteúdo do tópico 1',
        author: 'Carlos Henrique Santos',
        likes: 1,
        answers: 0,
        responses: []
    });
    this.topics.push({
        subject: 'Título do tópico 2',
        content: 'Conteúdo do tópico 2',
        author: 'Carlos Henrique Santos',
        likes: 4,
        answers: 4,
        responses: [ // Adiciona respostas se houver
        { author: 'Adriano da Silva', content: 'Resposta do autor é aqui. Relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo.', coAuthor: false },
        { author: 'Carlos Henrique Santos', content: 'Consegui entender melhor agora! Parece que a variação da análise da dimensão e impacto de processo formativo situado impacto de processo formativo.Obrigada pela resposta, muito interessante o seu trabalho!', coAuthor: false },
        { author: 'Carmila Ferreira Andrade',
        content: 'Também ínteressante lembrar que o relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo.Situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo.', 
        coAuthor: true },
        { author: 'Ana Carolina', content: 'Resposta do autor é aqui. Relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo.', coAuthor: true },

      ]
    });
}
}
