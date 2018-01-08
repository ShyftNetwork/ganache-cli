var path = require("path");
var fs = require("fs");
var OS = require("os");

var outputDir = path.join(__dirname, '..', 'build');
var outputFilename = 'lib.node.js';

module.exports = {
  entry: './lib.js',
  target: 'node',
  output: {
    path: outputDir,
    filename: outputFilename,
    library: "ganache",
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  devtool: 'source-map',
  module: {
      rules: [
          { test: /\.node$/, use: 'node-loader' }
      ]
  },
  resolve: {
    alias: {
      "ws": path.join(__dirname, "..", "./nil.js"),
      "scrypt": "js-scrypt",
      "secp256k1": path.join(__dirname, "..", "node_modules", "secp256k1", "elliptic.js"),
      "sha3": path.join(__dirname, "../node_modules/sha3/build/Release/sha3.node")
    }
  }
}
