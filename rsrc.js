document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('template[rsrc]').forEach((template) => {
    const rsrcName = template.attributes.rsrc.value;

    customElements.define(rsrcName,
      class extends HTMLElement {
        constructor() {
          super();

          this.attachShadow({ mode: 'open' })
            .appendChild(template.content.cloneNode(true));
      }
    });
  });
});
