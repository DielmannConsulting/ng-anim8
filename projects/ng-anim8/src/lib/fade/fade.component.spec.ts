import { render } from '@testing-library/angular';
import '@testing-library/jest-dom';
import { PLATFORM_ID } from '@angular/core';
import { FadeComponent } from './fade.component';

describe('FadeComponent (+ AnimationBase shared behaviour)', () => {

  // --- DOM mount/unmount ---

  it('does not render content when show is false', async () => {
    await render(`<anim8-fade [show]="false"><span>hello</span></anim8-fade>`, {
      imports: [FadeComponent],
    });
    expect(document.querySelector('.anim8-fade')).not.toBeInTheDocument();
  });

  it('mounts the animation element when show is true', async () => {
    await render(`<anim8-fade [show]="true"><span>hello</span></anim8-fade>`, {
      imports: [FadeComponent],
    });
    expect(document.querySelector('.anim8-fade')).toBeInTheDocument();
  });

  it('removes element from DOM when show becomes false', async () => {
    const { fixture } = await render(
      `<anim8-fade [show]="isVisible"><span>hello</span></anim8-fade>`,
      { imports: [FadeComponent], componentProperties: { isVisible: true } },
    );
    fixture.componentInstance.isVisible = false;
    fixture.detectChanges();
    expect(document.querySelector('.anim8-fade')).not.toBeInTheDocument();
  });

  // --- CSS custom properties (set on host element, cascade to inner div) ---

  it('sets --anim8-duration from a preset', async () => {
    await render(`<anim8-fade [show]="true" duration="fast"><span>hi</span></anim8-fade>`, {
      imports: [FadeComponent],
    });
    const host = document.querySelector('anim8-fade') as HTMLElement;
    expect(host.style.getPropertyValue('--anim8-duration')).toBe('150ms');
  });

  it('sets --anim8-duration from a numeric value', async () => {
    await render(`<anim8-fade [show]="true" [duration]="250"><span>hi</span></anim8-fade>`, {
      imports: [FadeComponent],
    });
    const host = document.querySelector('anim8-fade') as HTMLElement;
    expect(host.style.getPropertyValue('--anim8-duration')).toBe('250ms');
  });

  it('sets --anim8-easing and --anim8-delay', async () => {
    await render(
      `<anim8-fade [show]="true" easing="linear" [delay]="100"><span>hi</span></anim8-fade>`,
      { imports: [FadeComponent] },
    );
    const host = document.querySelector('anim8-fade') as HTMLElement;
    expect(host.style.getPropertyValue('--anim8-easing')).toBe('linear');
    expect(host.style.getPropertyValue('--anim8-delay')).toBe('100ms');
  });

  // --- SSR ---

  it('renders content on the server when show is true', async () => {
    await render(`<anim8-fade [show]="true"><span>hi</span></anim8-fade>`, {
      imports: [FadeComponent],
      providers: [{ provide: PLATFORM_ID, useValue: 'server' }],
    });
    expect(document.querySelector('.anim8-fade')).toBeInTheDocument();
  });

  it('does not render content on the server when show is false', async () => {
    await render(`<anim8-fade [show]="false"><span>hi</span></anim8-fade>`, {
      imports: [FadeComponent],
      providers: [{ provide: PLATFORM_ID, useValue: 'server' }],
    });
    expect(document.querySelector('.anim8-fade')).not.toBeInTheDocument();
  });
});
