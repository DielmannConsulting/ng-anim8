import { render } from '@testing-library/angular';
import '@testing-library/jest-dom';
import { SlideComponent } from './slide.component';

describe('SlideComponent', () => {
  it('does not render when excluded by @if', async () => {
    await render(`@if (false) { <anim8-slide><span>content</span></anim8-slide> }`, {
      imports: [SlideComponent],
    });
    expect(document.querySelector('.anim8-slide')).not.toBeInTheDocument();
  });

  it('renders the slide element when in template', async () => {
    await render(`<anim8-slide><span>content</span></anim8-slide>`, {
      imports: [SlideComponent],
    });
    expect(document.querySelector('.anim8-slide')).toBeInTheDocument();
  });

  it('defaults direction to "up"', async () => {
    await render(`<anim8-slide><span>content</span></anim8-slide>`, {
      imports: [SlideComponent],
    });
    expect(document.querySelector('.anim8-slide')).toHaveClass('anim8-slide--up');
  });

  it('applies the direction class when direction is set', async () => {
    await render(`<anim8-slide direction="down"><span>content</span></anim8-slide>`, {
      imports: [SlideComponent],
    });
    expect(document.querySelector('.anim8-slide')).toHaveClass('anim8-slide--down');
  });
});
