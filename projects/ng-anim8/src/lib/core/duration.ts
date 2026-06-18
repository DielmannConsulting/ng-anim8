import { numberAttribute } from '@angular/core';

export type Duration = 'fast' | 'normal' | 'slow' | number;

type StringDuration = Exclude<Duration, number>;

export const DURATION_MAP: Record<StringDuration, number> = {
  fast:   150,
  normal: 300,
  slow:   500,
};

export function resolveDuration(d: unknown): number {
  if (String(d) in DURATION_MAP) {
    return DURATION_MAP[d as StringDuration];
  }

  return numberAttribute(d, DURATION_MAP['normal']);
}
