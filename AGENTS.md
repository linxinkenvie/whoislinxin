## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Bilingual blog posts

- Chinese is the canonical source language for new posts. Preserve the author's Chinese wording.
- Create a separate English translation entry with `lang: 'en'`; do not replace the Chinese entry.
- Pair both entries with the same `translationKey`. Use `lang: 'zh-CN'` for Chinese.
- Keep the Chinese URL at `/blog/<translationKey>/` and the English URL at `/blog/<translationKey>/en/`.
- Translate image alt text, titles, descriptions, and display titles as well as the article body.
- Reuse the same local image assets for both entries. Screenshots of the original Chinese conversation may remain untranslated.
- After changing the Chinese source, sync it to the site entry first, then update the English translation to match.
- Verify automatic browser-language selection, the manual language switch, both theme variants, mobile layout, and `npm run build`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
