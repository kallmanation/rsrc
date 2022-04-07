# RSRC - Reusable Static/Remote Components
### a.k.a. Web Components without JavaScript*
---

*The current Web Component specifications currently require JavaScript to create custom elements, utilize `<template>` elements, and to manage Shadow DOM.

This feels incomplete. It is called ***ht***tp, not ***js***tp, after all.

---

I would call this a polyfill, but since no browsers support anything like this, it's more of an omnifill. The goal is simple: **support statically defined and/or remotely available, easily reusible components, that are defined using only HTML.**

 - [live examples](https://rsrc.klmntn.com/examples)
 - [live source](https://rsrc.klmntn.com/_src)
 - [live rsrc.js](https://rsrc.klmntn.com/rsrc.js)

## Installation

 1. Download [rsrc.js](https://rsrc.klmntn.com/rsrc.js) and include it in your site files.
 2. Include directly from the cdn in your page's `<head>`:
```html
<script src="https://rsrc.klmntn.com/rsrc.js"></script>
```
