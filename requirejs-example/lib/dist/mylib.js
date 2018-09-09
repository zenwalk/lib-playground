/*!
 * mylib v1.0.0
 * (c) 2018-present 
 * Released under the MIT License.
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery'), require('underscore')) :
	typeof define === 'function' && define.amd ? define(['jquery', 'underscore'], factory) :
	(global.mylib = factory(global.$,global._));
}(this, (function ($,_) { 'use strict';

	$ = $ && $.hasOwnProperty('default') ? $['default'] : $;
	_ = _ && _.hasOwnProperty('default') ? _['default'] : _;

	console.log(_.VERSION);
	console.log($.fn.jquery);
	var arr = [2, 34, 56, 7, 8];
	var found = arr.find(function (x) {
	  return x === 7;
	});
	console.log(found);
	var index = (function () {
	  return 'Welcome to mylib';
	});

	return index;

})));
