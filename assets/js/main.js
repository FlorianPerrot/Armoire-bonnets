require.config({
	//Definir les libs utilisé
	paths: {
		jquery: '../../vendor/jquery/dist/jquery',
		underscore: '../../vendor/underscore/underscore',
		backbone: '../../vendor/backbone/backbone',
		text: '../../vendor/requirejs-text/text',
		leaflet: '../../vendor/leaflet/dist/leaflet-src',
		leaflet_draw: '../../vendor/leaflet.draw/dist/leaflet.draw-src'
	},
	//Defini les deps non supporté par requireJs
	shim: {
		'backbone': {
			deps: ['underscore', 'jquery'],
			export: 'Backbone'
		},
		'underscore': {
			export: '_'
		},
		'jquery': {
			export: '$'
		},
		'leaflet_draw': {
			deps: ['leaflet']
		}
	},
	urlArgs: "_=" + (new Date()).getTime()
});
require(
	['app'],
	function(App){
		App.initialize();
	}
);
