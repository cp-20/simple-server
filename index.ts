Bun.serve({
  fetch(req) {
    console.log(req);
    console.log(req.headers.getSetCookie());
    return new Response('Hello, World!');
  },
});
