import { Component, computed, signal } from '@angular/core';
import { SlideComponent } from 'ng-anim8';
import type { Duration, SlideDirection } from 'ng-anim8';
import { CodeSnippetComponent } from '../../shared/code-snippet/code-snippet.component';

@Component({
  selector: 'app-slide-section',
  standalone: true,
  imports: [SlideComponent, CodeSnippetComponent],
  templateUrl: './slide-section.component.html',
})
export class SlideSectionComponent {
  show      = signal(false);
  duration  = signal<Duration>('normal');
  direction = signal<SlideDirection>('up');

  readonly durations: Duration[]        = ['fast', 'normal', 'slow'];
  readonly directions: SlideDirection[] = ['up', 'down', 'left', 'right'];

  readonly directionLabels: Record<SlideDirection, string> = {
    up: '↑ up', down: '↓ down', left: '← left', right: '→ right',
  };

  readonly code = computed(() => `@if (show()) {
  <anim8-slide
    direction="${this.direction()}"
    duration="${this.duration()}">
    <div>Your content</div>
  </anim8-slide>
}`);
}
