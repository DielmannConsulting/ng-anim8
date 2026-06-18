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

  playing       = signal(false);
  canTransition = signal(false);

  play(): void {
    if (this.playing()) return;
    this.canTransition.set(true);
    setTimeout(() => {
      this.playing.set(true);
      setTimeout(() => {
        this.playing.set(false);           // start return transition (canTransition still true)
        setTimeout(() => {
          this.canTransition.set(false);   // remove transition only after dot has returned
        }, 850);                           // 50ms buffer past the 800ms transition duration
      }, 1600);
    }, 0);
  }
}
