import { Component, signal } from '@angular/core';
import { EASINGS } from 'ng-anim8';

@Component({
  selector: 'app-easing-section',
  standalone: true,
  templateUrl: './easing-section.component.html',
  styleUrl: './easing-section.component.scss',
})
export class EasingSectionComponent {
  readonly easings = Object.entries(EASINGS).map(([name, css]) => ({ name, css }));

  animate       = signal(false);

  toggle(): void {
    this.animate.update(value => !value);
  }
}
