// topic.component.ts
import { Component, ElementRef,ViewChild   } from '@angular/core';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent {

  showTopicWrapper: boolean = true;
  showTopicSended: boolean = false;

  @ViewChild('topicContainer', { static: true }) topicContainer!: ElementRef;

  constructor(private elementRef: ElementRef) {}

  toggleTopic() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    this.showTopicWrapper = !this.showTopicWrapper;
    this.restoreScrollPosition(scrollPosition);
  }

  sendTopic() {
    // Lógica de envio do tópico
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    this.showTopicSended = true;
    this.showTopicWrapper = false;
    this.restoreScrollPosition(scrollPosition);
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
}