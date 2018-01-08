DEVELOPERS
==========

Developing
----------
- npm link

Release Process
----------
- check package.json "main": "dist/index.js", 
- npm run unit
- npm run build
- npm version [major | minor | patch | premajor | preminor | prepatch | prerelease | from-git]
- git push
- npm publish
- Verify latest version on https://www.npmjs.com/package/podium-sdk