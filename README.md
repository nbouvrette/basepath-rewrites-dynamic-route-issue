# This is a test app to reproduce the following issue:

When using `basePath` + `rewrites`, dynamic routes will return 404 if `fallback: false`.

How to reproduce:

1. `npm install`
2. `npm run dev`
3. Hit: http://localhost:3000/some-path/fr-FR/ville/londres -> returns a 404
4. in `pages/city/[city].tsx` change `fallback: false` to `fallback: true`
5. Reload the page, and it should work
6. Change back `fallback: false` and edit `next.config.js` and comment out `basePath`
7. Restart the application
8. Hit: http://localhost:3000/fr-FR/ville/londres -> works!
