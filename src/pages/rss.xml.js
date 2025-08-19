import rss, { pagesGlobToRssItems } from '@astrojs/rss'

export async function GET(context) {
  return rss({
    title: 'Astro Learner | Blog',
    description: 'My journery learning Astro',
    site: context.site, 
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customDate: '<language>en-us</language>',
  })
}
