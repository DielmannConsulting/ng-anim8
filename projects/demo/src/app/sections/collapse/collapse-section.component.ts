import { Component, computed, signal } from '@angular/core';
import { CollapseComponent } from 'ng-anim8';
import type { Duration } from 'ng-anim8';
import { CodeSnippetComponent } from '../../shared/code-snippet/code-snippet.component';

@Component({
  selector: 'app-collapse-section',
  standalone: true,
  imports: [CollapseComponent, CodeSnippetComponent],
  templateUrl: './collapse-section.component.html',
})
export class CollapseSectionComponent {
  show     = signal(false);
  duration = signal<Duration>('normal');

  readonly durations: Duration[] = ['fast', 'normal', 'slow'];

  readonly code = computed(() => `@if (show()) {
  <anim8-collapse duration="${this.duration()}">
    <div>Your content</div>
  </anim8-collapse>
}`);
}
