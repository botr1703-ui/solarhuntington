import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware((context, next) => {
  // Check both x-forwarded-host and host headers; prefer x-forwarded-host on Vercel
  const forwardedHost = context.request.headers.get('x-forwarded-host') ?? '';
  const hostHeader = context.request.headers.get('host') ?? '';
  const effectiveHost = (forwardedHost.split(',')[0].trim() || hostHeader).split(':')[0].toLowerCase();
  if (effectiveHost === 'solarhuntington.com') {
    const url = new URL(context.request.url);
    url.protocol = 'https:';
    url.host = 'www.solarhuntington.com';
    return new Response(null, {
      status: 301,
      headers: {
        Location: url.toString(),
        'Cache-Control': 'public, max-age=31536000',
      },
    });
  }
  return next();
});
