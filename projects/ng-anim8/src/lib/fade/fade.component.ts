import { Component, computed, input } from '@angular/core';
import { AnimationBase } from '../core/animation-base.directive';

@Component({
  selector: 'anim8-fade',
  standalone: true,
  template: `<ng-content/>`,
  styleUrl: './fade.component.scss',
  host: {
    class: 'anim8-fade',
    '[class.anim8-fade--blur]': 'hasBlur()',
    '[style.--anim8-blur]':     'blur() ?? null',
    'animate.enter': 'anim8-fade--enter',
    'animate.leave': 'anim8-fade--leave'
  }
})
export class FadeComponent extends AnimationBase {
  blur = input<string | undefined>(undefined);
  protected readonly hasBlur = computed(() => this.blur() !== undefined);
}
