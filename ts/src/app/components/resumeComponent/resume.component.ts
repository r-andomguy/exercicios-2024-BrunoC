// resume.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
  isExpanded: boolean = false;

  expandText() {
    this.isExpanded = true;
  }

  collapseText() {
    this.isExpanded = false;
  }
}
