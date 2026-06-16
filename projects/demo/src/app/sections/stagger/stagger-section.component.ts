import { Component, signal } from '@angular/core';
import { StaggerComponent } from 'ng-anim8';
import { CodeSnippetComponent } from '../../shared/code-snippet/code-snippet.component';

@Component({
  selector: 'app-stagger-section',
  standalone: true,
  imports: [StaggerComponent, CodeSnippetComponent],
  templateUrl: './stagger-section.component.html',
})
export class StaggerSectionComponent {
  items = signal<string[]>([]);

  private nextId = 1;

  addItem(): void {
    this.items.update(list => [...list, `Item ${this.nextId++}`]);
  }

  reset(): void {
    this.items.set([]);
    this.nextId = 1;
  }

  readonly code = `<anim8-stagger [gap]="75">
  @for (item of items(); track item) {
    <div>{{ item }}</div>
  }
</anim8-stagger>`;
}
