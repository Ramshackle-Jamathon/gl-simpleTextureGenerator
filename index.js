var ndarray = require("ndarray")

module.exports = function(opts){
    opts = opts || {};

    var data = [];
    var width = opts.width;
    var height = opts.height;
    var channels = 4;
    var i, j, c;
    
    for (i = 0; i < height; i++) {
        for (j = 0; j < width; j++) {
            c = ((i & 8) ^ (j & 8)) * 255;
            data[(i * width + j) * channels] = c; // Red component
            data[(i * width + j) * channels + 1] = c; // Green component
            data[(i * width + j) * channels + 2] = c; // Blue component
            data[(i * width + j) * channels + 3] = 0xff; // Alpha component
        }
    }
    return ndarray(new Uint8Array(data), [width, height, channels], [channels, channels * width, 1], 0);
}