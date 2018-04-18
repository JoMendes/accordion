$(document).ready(function () {
	$(".details").hide();
	$(".category").click(function () {
		$(this).next(".details").slideToggle().siblings(".details").slideUp();
		$(".category").not(this).find("a").removeClass("minus");
		$(this).find("a").toggleClass("minus");
		$(".category").not(this).removeClass("active");
		$(this).toggleClass("active");
		return false;
	});
});