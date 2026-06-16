import { Component, ElementRef, effect, inject, input } from '@angular/core';
import Prism from 'prismjs';
import 'prismjs/components/prism-markup';

@Component({
  selector: 'app-code-snippet',
  standalone: true,
  template: `<pre class="language-html"><code #codeEl class="language-html"></code></pre>`,
  styleUrl: './code-snippet.component.scss',
})
export class CodeSnippetComponent {
  code = input.required<string>();

  private el = inject(ElementRef);

  constructor() {
    effect(() => {
      const text = this.code();
      const codeEl: HTMLElement | null = this.el.nativeElement.querySelector('code');
      if (!codeEl) return;
      codeEl.textContent = text;
      Prism.highlightElement(codeEl);
    });
  }
}
