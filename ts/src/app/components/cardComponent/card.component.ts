// card.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() topic: any;
  @Input() showRecent: boolean = false;
  toggleComments(topic: any) {
    if (topic.answers > 1) {
      topic.showComments = !topic.showComments;
    }
  }

  getRole(author: string, coAuthor: boolean): string {
    if (author === this.topic.author) {
        return '';
    } else if (coAuthor) {
        return 'Co-autor';
    } else {
      return 'Autor';
    }
  }
}
