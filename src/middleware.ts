import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware((context, next) => {
  const host = context.request.headers.get('host') ?? '';
  const bareHost = host.split(':')[0];
  if (bareHost === 'solarhuntington.com') {
    const url = new URL(context.request.url);
    url.host = 'www.solarhuntington.com';
    return new Response(null, {
      status: 301,
      headers: { Location: url.toString() },
    });
  }
  return next();
});
