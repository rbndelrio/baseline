// Object Literal
var nav1 = {
	ismobile: (/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera),

	init: function() {
		console.log(
			'initializing...',
			'ismobile: ' + ismobile
		);
	}
};


// Revealing Module
var nav2 = (function() {
	var ismobile = (/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera);

	_init();
	function _init() {
		console.log(
			'initializing...',
			'ismobile: ' + ismobile
		);
	}

	return {
		ismobile: ismobile
	};
});

$(function() {
	console.log('document ready!');
	nav.init();
});