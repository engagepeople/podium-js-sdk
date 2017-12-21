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
- npm version patch
- git commit
- npm publish