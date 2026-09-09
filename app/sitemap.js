// app/sitemap.js

export default async function sitemap() {
  const baseUrl = 'https://www.havilahfloralsdecor.com/'; //

  // Example: Fetch dynamic portfolio slugs if applicable
  // const portfolioSlugs = ['featured-wedding-one', 'featured-wedding-two'];
  // const portfolioUrls = portfolioSlugs.map((slug) => ({
  //   url: `${baseUrl}/portfolio/${slug}`,
  //   lastModified: new Date(),
  // }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // ...portfolioUrls
  ];
}