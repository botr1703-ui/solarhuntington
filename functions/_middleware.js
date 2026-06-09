export async function onRequest({ request, next }) {
  const url = new URL(request.url);
  if (url.hostname === 'solarhuntington.com') {
    url.protocol = 'https:';
    url.hostname = 'www.solarhuntington.com';
    return Response.redirect(url.toString(), 301);
  }
  return next();
}
