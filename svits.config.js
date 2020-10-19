const description =
  'A functional, SEO friendly, SPA boilerplate powered by ' +
  'Svelte 3, Routify, Tailwind CSS, Typescript, Vite and Vercel that is up to ' +
  'date and works out of the box with cool things like full PWA support, metadata ' +
  'generation and image optimization.'

module.exports = {
  name: 'Svits - A nice SPA stack',
  shortName: 'Svits',
  description,
  author: {
    name: 'Juan Villacorta',
    email: 'juanvillacortac@gmail.com',
    url: 'https://github.com/juandroid007'
  },
  hostname: 'https://svits.vercel.app',
  sitemapUrls: [
    {
      url: '/',
    },
    {
      url: '/features',
    }
  ],
}