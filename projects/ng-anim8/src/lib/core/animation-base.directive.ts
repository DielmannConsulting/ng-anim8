import { computed, Directive, inject, input } from '@angular/core';
import { DEFAULT_EASING, EasingName, resolveEasing } from './easing';
import { DURATION_MAP, resolveDuration } from './duration';
import { ANIM8_CONFIG } from './config';

@Directive({
  host: {
    '[style.--anim8-duration]': 'resolvedDuration()',
    '[style.--anim8-easing]':   'resolvedEasing()',
    '[style.--anim8-delay]':    'resolvedDelay()',
  },
})
export abstract class AnimationBase {
  private config = inject(ANIM8_CONFIG, { optional: true });

  duration = input<number | undefined, EasingName | string | number | undefined>(undefined, {
    transform: (v) => v !== undefined ? resolveDuration(v) : undefined,
  });
  easing = input<string | undefined, EasingName | string | undefined>(undefined, {
    transform: (v) => v !== undefined ? resolveEasing(v) : undefined,
  });
  delay = input<number | undefined>(undefined);

  protected readonly resolvedDuration = computed(() => {
    const ms = this.duration()
      ?? (this.config?.duration !== undefined ? resolveDuration(this.config.duration) : DURATION_MAP['normal']);
    return `${ms}ms`;
  });

  protected readonly resolvedEasing = computed(() => {
    return this.easing()
      ?? (this.config?.easing !== undefined ? resolveEasing(this.config.easing) : resolveEasing(DEFAULT_EASING));
  });

  protected readonly resolvedDelay = computed(() => {
    return `${this.delay() ?? this.config?.delay ?? 0}ms`;
  });
}
