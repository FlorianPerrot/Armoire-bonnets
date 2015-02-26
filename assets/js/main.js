require.config({
	paths: {
		jquery: '../../vendor/jquery/dist/jquery',
	}
});
require(
	['jquery'],
	function($){
		$('body').html('hello');
	}
);