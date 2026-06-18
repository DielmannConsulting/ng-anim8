import { render } from '@testing-library/angular';
import '@testing-library/jest-dom';
import { GrowComponent } from './grow.component';

describe('GrowComponent', () => {
  it('does not render when excluded by @if', async () => {
    await render(`@if (false) { <anim8-grow><span>content</span></anim8-grow> }`, {
      imports: [GrowComponent],
    });
    expect(document.querySelector('.anim8-grow')).not.toBeInTheDocument();
  });

  it('renders the grow element when in template', async () => {
    await render(`<anim8-grow><span>content</span></anim8-grow>`, {
      imports: [GrowComponent],
    });
    expect(document.querySelector('.anim8-grow')).toBeInTheDocument();
  });
});
