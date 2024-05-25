Bun.serve({
  fetch(req) {
    console.log(req);
    return new Response('Hello, World!');
  },
});
