import {LitElement, html, css} from 'lit';
import {property} from 'lit/decorators.js';

export class HelloWorldElement extends LitElement {

  static styles = css`p { color: #1663b8 }`;

  @property() name = 'Community';

  render() {
    return html`<p>Hello, ${this.name}!</p>`;
  }

}
