require.config({
	//Definir les libs utilisé
	paths: {
		jquery: '../../vendor/jquery/dist/jquery',
		underscore: '../../vendor/underscore/underscore',
		backbone: '../../vendor/backbone/backbone'
	},
	//Defini les deps non supporté par requireJs
	shim: {
		'backbone': {
			deps: ['underscore', 'jquery'],
			export: 'Backbone'
		},
		'underscore': {
			export: '_'	
		}
	}
});
require(
	['jquery'],
	function($){
		$('body').html('hello');
	}
);