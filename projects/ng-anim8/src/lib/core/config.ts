import { InjectionToken, Provider } from '@angular/core';
import { Duration } from './duration';
import { EasingName } from './easing';

export interface Anim8Config {
  duration?: Duration;
  easing?: EasingName | string;
  delay?: number;
}

export const ANIM8_CONFIG = new InjectionToken<Anim8Config>('ANIM8_CONFIG');

export function provideAnim8(config: Anim8Config): Provider {
  return { provide: ANIM8_CONFIG, useValue: config };
}
