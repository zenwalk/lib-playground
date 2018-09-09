require.config({
  paths: {
    'backbone': 'lib/vendor/backbone.min',
    'underscore': 'lib/vendor/underscore.min',
    'jquery': 'lib/vendor/jquery.min',
    'mylib': 'lib/mylib'
  },
  shim: {
    'backbone': {
      deps: ['underscore', 'lib/vendor/jquery.min'],
      exports: 'Backbone'
    },
    'underscore': {
      exports: '_'
    }
  }
});

require(['jquery', 'mylib'], function($, lib) {
  // console.log($.fn.jquery);
  console.log(lib());
});
