import { computed, Directive, input } from '@angular/core';
import { DEFAULT_EASING, EasingName, resolveEasing } from './easing';
import { DURATION_MAP, resolveDuration } from './duration';

@Directive({
  host: {
    '[style.--anim8-duration]': 'resolvedDuration()',
    '[style.--anim8-easing]':   'easing()',
    '[style.--anim8-delay]':    'resolvedDelay()',
  },
})
export abstract class AnimationBase {

  duration = input(DURATION_MAP['normal'], { transform: resolveDuration });
  easing   = input<EasingName | string, string>(DEFAULT_EASING, { transform: resolveEasing });
  delay    = input<number>(0);

  protected readonly resolvedDuration = computed(() => `${resolveDuration(this.duration())}ms`);
  protected readonly resolvedDelay    = computed(() => `${this.delay()}ms`);
}
