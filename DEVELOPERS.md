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
- git commit
- npm version patch
- npm publish