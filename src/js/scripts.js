var nav = {
	ismobile: (/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera),
	init: function() {
		console.log(
			'initializing...',
			'ismobile: ' + ismobile
		);
	}
};

$(function() {
	console.log('document ready!');
	nav.init();
});