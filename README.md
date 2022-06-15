innate---a better way to bind
=============================

Usage:

```js
import i from 'innate';

// Get a `listen` that is innately bound to app
// (equivalent of `app.listen.bind(app)`)
const listen = i(app).listen;

// Invoke listen without it being on `app` while
// still letting `listen`'s internal `this`
// reference `app`.
listen();
```

innate has no dependencies and is a tiny little helpful snippet.

It has TypeScript defs, so it is easy to use in your already typed projects, and will give you nice type hints in your editor.
