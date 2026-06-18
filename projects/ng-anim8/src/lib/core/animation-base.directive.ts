import { computed, Directive, input } from '@angular/core';
import { DEFAULT_EASING, resolveEasing } from './easing';
import { Duration, resolveDuration } from './duration';

@Directive({
  host: {
    '[style.--anim8-duration]': 'resolvedDuration()',
    '[style.--anim8-easing]':   'easing()',
    '[style.--anim8-delay]':    'resolvedDelay()',
  },
})
export abstract class AnimationBase {

  duration = input<Duration>('normal');
  easing   = input(DEFAULT_EASING, { transform: resolveEasing });
  delay    = input<number>(0);

  protected readonly resolvedDuration = computed(() => `${resolveDuration(this.duration())}ms`);
  protected readonly resolvedDelay    = computed(() => `${this.delay()}ms`);
}
