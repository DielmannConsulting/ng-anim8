import { Component, computed, signal } from '@angular/core';
import { FadeComponent } from 'ng-anim8';
import type { Duration } from 'ng-anim8';
import { CodeSnippetComponent } from '../../shared/code-snippet/code-snippet.component';

@Component({
  selector: 'app-fade-section',
  standalone: true,
  imports: [FadeComponent, CodeSnippetComponent],
  templateUrl: './fade-section.component.html',
})
export class FadeSectionComponent {
  show     = signal(false);
  duration = signal<Duration>('normal');

  readonly durations: Duration[] = ['fast', 'normal', 'slow'];

  code = computed(() => `<anim8-fade
  [show]="visible()"
  duration="${this.duration()}">
  <div>Your content</div>
</anim8-fade>`);
}
