// app/robots.js

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/'], // Add any private route folders if any
    },
    sitemap: 'https://www.havilahfloralsdecor.com//sitemap.xml', // Replace with your domain
  };
}