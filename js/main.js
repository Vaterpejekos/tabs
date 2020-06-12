;(function() {
	"use strict";
	$('.js-tab-triger').on('click', function () {
		let tabName = $(this).data('tabs');
		let tad = $('.js-tab-content[data-tabs="'+tabName+'"]');

		$('.js-tab-triger.active').removeClass('active');
		$(this).addClass('active');

		$('.js-tab-content.active').removeClass('active');
		tad.addClass('active');
	})
})();

