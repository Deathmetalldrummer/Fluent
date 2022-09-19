//#include("./_layout/_mounting.js");
$('.stylesControl__').on('click', function(e) {
	console.log($(e.target).data('style'));
	$('body')
	.removeClass('style_1')
	.removeClass('style_2')
	.removeClass('style_3')
	.removeClass('style_4')
	.removeClass('style_5')
	.removeClass('style_6')
	.addClass($(e.target).data('style'));
})
