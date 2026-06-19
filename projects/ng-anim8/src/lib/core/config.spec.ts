import { render } from '@testing-library/angular';
import '@testing-library/jest-dom';
import { FadeComponent } from '../fade/fade.component';
import { provideAnim8 } from './config';

describe('provideAnim8', () => {
  it('applies global duration preset when no duration is given on the component', async () => {
    await render(`<anim8-fade></anim8-fade>`, {
      imports: [FadeComponent],
      providers: [provideAnim8({ duration: 'fast' })],
    });
    const host = document.querySelector('anim8-fade') as HTMLElement;
    expect(host.style.getPropertyValue('--anim8-duration')).toBe('150ms');
  });

  it('applies global duration number when no duration is given on the component', async () => {
    await render(`<anim8-fade></anim8-fade>`, {
      imports: [FadeComponent],
      providers: [provideAnim8({ duration: 400 })],
    });
    const host = document.querySelector('anim8-fade') as HTMLElement;
    expect(host.style.getPropertyValue('--anim8-duration')).toBe('400ms');
  });

  it('component duration overrides global duration', async () => {
    await render(`<anim8-fade duration="slow"></anim8-fade>`, {
      imports: [FadeComponent],
      providers: [provideAnim8({ duration: 'fast' })],
    });
    const host = document.querySelector('anim8-fade') as HTMLElement;
    expect(host.style.getPropertyValue('--anim8-duration')).toBe('500ms');
  });

  it('applies global easing when no easing is given on the component', async () => {
    await render(`<anim8-fade></anim8-fade>`, {
      imports: [FadeComponent],
      providers: [provideAnim8({ easing: 'linear' })],
    });
    const host = document.querySelector('anim8-fade') as HTMLElement;
    expect(host.style.getPropertyValue('--anim8-easing')).toBe('linear');
  });

  it('resolves a named easing preset in the global config', async () => {
    await render(`<anim8-fade></anim8-fade>`, {
      imports: [FadeComponent],
      providers: [provideAnim8({ easing: 'spring' })],
    });
    const host = document.querySelector('anim8-fade') as HTMLElement;
    expect(host.style.getPropertyValue('--anim8-easing')).toBe('cubic-bezier(0.175, 0.885, 0.32, 1.275)');
  });

  it('component easing overrides global easing', async () => {
    await render(`<anim8-fade easing="linear"></anim8-fade>`, {
      imports: [FadeComponent],
      providers: [provideAnim8({ easing: 'spring' })],
    });
    const host = document.querySelector('anim8-fade') as HTMLElement;
    expect(host.style.getPropertyValue('--anim8-easing')).toBe('linear');
  });

  it('applies global delay when no delay is given on the component', async () => {
    await render(`<anim8-fade></anim8-fade>`, {
      imports: [FadeComponent],
      providers: [provideAnim8({ delay: 200 })],
    });
    const host = document.querySelector('anim8-fade') as HTMLElement;
    expect(host.style.getPropertyValue('--anim8-delay')).toBe('200ms');
  });

  it('component delay overrides global delay', async () => {
    await render(`<anim8-fade [delay]="50"></anim8-fade>`, {
      imports: [FadeComponent],
      providers: [provideAnim8({ delay: 200 })],
    });
    const host = document.querySelector('anim8-fade') as HTMLElement;
    expect(host.style.getPropertyValue('--anim8-delay')).toBe('50ms');
  });

  it('uses library defaults when provideAnim8 is not called', async () => {
    await render(`<anim8-fade></anim8-fade>`, {
      imports: [FadeComponent],
    });
    const host = document.querySelector('anim8-fade') as HTMLElement;
    expect(host.style.getPropertyValue('--anim8-duration')).toBe('300ms');
    expect(host.style.getPropertyValue('--anim8-easing')).toBe('ease-in-out');
    expect(host.style.getPropertyValue('--anim8-delay')).toBe('0ms');
  });
});
