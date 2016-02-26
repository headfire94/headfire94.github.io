$(document).on('ready', function(){

	$('.works-nav a').click(function(e){

		e.preventDefault();

		var filterTarget = $(this).data('target');
      
		$(this).parents().addClass('active')
			.siblings('li').removeClass('active');


		catalogFilter(filterTarget);
	});

	function catalogFilter(filterTarget) {

		var imgs = $('.works-list li').hide(500).addClass('zoomOut animated');


		$.each(imgs, function () {

			if ($(this).data(filterTarget) == true) {

				$(this).removeClass().fadeIn().addClass('zoomIn animated');
			} 

		});
	}
});