// Register babel to transpile before our unittests run
require('babel-register')();

// Disable webpack features not understood by unit-testing framework
require.extensions['.css'] = function() {};
