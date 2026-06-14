export async function onRequest({ request, next }) {
  const url = new URL(request.url);
  if (url.hostname === 'solarhuntington.com') {
    const dest = 'https://www.solarhuntington.com' + url.pathname + url.search + url.hash;
    return new Response(null, {
      status: 301,
      headers: { Location: dest },
    });
  }
  return next();
}
