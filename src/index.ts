import { customElement, LitElement, html } from 'lit-element';

let msg:string;
msg = "Paolo"

console.log(msg);

@customElement("my-element")
export class MyElement extends LitElement {

    render() {
        return html`<h1>My Element<h1>`;
    }
}
