# gl-simpleTextureGenerator
generates checkerboard test textures for [stack-gl](http://stack.gl/)

## Installation

```
$ npm install gl-simpleTextureGenerator
```

## Example

```javascript
var textureGenerator = require("gl-simpleTextureGenerator");
var createTexture = require("gl-texture2d");

var texture = generateTexture({width: 64, height: 64});

//then load into the gpu
createTexture(gl, texture);
```

## Badges

![](https://img.shields.io/badge/license-MIT-blue.svg)
![](https://img.shields.io/badge/status-stable-green.svg)

