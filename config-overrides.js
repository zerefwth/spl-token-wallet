const webpack = require('webpack');

module.exports = function override(config, env) {
  // Extend the Webpack configuration
  config.resolve.fallback = {
    'crypto': require.resolve('crypto-browserify'),
    'os': require.resolve('os-browserify/browser'),
    'path': require.resolve('path-browserify'),
    'fs': false,
    'stream': require.resolve('stream-browserify'),
  };

  return config;
};
