document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('template[rsrc][name]').forEach((template) => {
    const rsrcName = template.getAttribute('name');
    const rsrcContent = template.content.cloneNode(true)

    customElements.define(rsrcName,
      class extends HTMLElement {
        constructor() {
          super();
          this.attachShadow({ mode: 'open' })
              .appendChild(rsrcContent);
        }
      }
    );
  });
});
