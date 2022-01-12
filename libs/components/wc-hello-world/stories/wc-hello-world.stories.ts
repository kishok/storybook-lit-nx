import { html } from "lit";
import "../src/wc-hello-world";

export default {
    title: "components/wc-hello-world"
}

export const Welcome = () => html`<hello-world></hello-world>`;
