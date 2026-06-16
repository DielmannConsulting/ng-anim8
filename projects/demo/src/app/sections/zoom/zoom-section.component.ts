import { Component, computed, signal } from '@angular/core';
import { ZoomComponent } from 'ng-anim8';
import type { Duration } from 'ng-anim8';
import { CodeSnippetComponent } from '../../shared/code-snippet/code-snippet.component';

@Component({
  selector: 'app-zoom-section',
  standalone: true,
  imports: [ZoomComponent, CodeSnippetComponent],
  templateUrl: './zoom-section.component.html',
})
export class ZoomSectionComponent {
  show     = signal(false);
  duration = signal<Duration>('normal');

  readonly durations: Duration[] = ['fast', 'normal', 'slow'];

  code = computed(() => `<anim8-zoom
  [show]="visible()"
  duration="${this.duration()}">
  <div>Your content</div>
</anim8-zoom>`);
}
