document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('template[rsrc][name]').forEach((template) => {
    customElements.define(template.getAttribute('name'),
      class extends HTMLElement {
        constructor() {
          super();
          this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true));
        }
      }
    );
  });
});
