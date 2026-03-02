# Playback 同理心回饋劇場

A Vue 2 SPA for the Playback Theatre community site.

## Tech Stack

- **Framework**: Vue 2 (`vue@^2.6.11`)
- **Routing**: Vue Router 3
- **CSS**: Semantic UI CSS, SCSS/SASS
- **Templates**: Pug
- **Package Manager**: Yarn
- **Build Tool**: Vue CLI (`@vue/cli-service`)
- **Analytics**: vue-gtag
- **Deploy**: GitHub Pages (`gh-pages` branch)

## Common Commands

```sh
yarn serve    # dev server with hot-reload
yarn build    # production build to dist/
yarn lint     # lint and fix
sh deploy.sh  # build and push to gh-pages
```

## Project Structure

```
src/
  main.js          # app entry point
  App.vue          # root component
  router/index.js  # route definitions
  views/           # page-level components
  components/      # shared components (Cards.vue, HelloWorld.vue)
  assets/          # static assets
  sass/            # global SCSS
  courses/         # course-related data/components
  data/            # static data files
  forms/           # form components
```

## Deployment

- Production deploys to GitHub Pages via `deploy.sh`
- Push target: `git@github.com:bestian/playback.git master:gh-pages`
- `publicPath` is `/` in both dev and production (`vue.config.js`)

## Notes

- Audio files (mp3, m4a, wav, flac) are handled via `file-loader` in webpack config
- Views use Pug templates (`.vue` files with `lang="pug"`)
- No test suite configured
