import { render } from '@testing-library/angular';
import '@testing-library/jest-dom';
import { ZoomComponent } from './zoom.component';

describe('ZoomComponent', () => {
  it('does not render when excluded by @if', async () => {
    await render(`@if (false) { <anim8-zoom><span>content</span></anim8-zoom> }`, {
      imports: [ZoomComponent],
    });
    expect(document.querySelector('.anim8-zoom')).not.toBeInTheDocument();
  });

  it('renders the zoom element when in template', async () => {
    await render(`<anim8-zoom><span>content</span></anim8-zoom>`, {
      imports: [ZoomComponent],
    });
    expect(document.querySelector('.anim8-zoom')).toBeInTheDocument();
  });
});
