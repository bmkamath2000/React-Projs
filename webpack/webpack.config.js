const path = require('path');

module.exports = {
  // 1. Entry: Where webpack starts building the dependency graph
  entry: './src/index.js',

  // 2. Output: Where the bundled files should go
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // Cleans the dist folder before each build
  },

  // 3. Mode: Sets optimization level ('development' or 'production')
  mode: 'development',
};
