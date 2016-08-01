$(function () {
	// 顶部导航
	$(document).on("click", ".top-box ul li", function () {
		$(this).addClass("active").siblings().removeClass("active");
	});
});

var Server = 
{
	getServerRoot: function (url) {
		var protocol = window.location.protocol;
		var host = window.location.host;
		return protocol+"//"+host+"/enlearn/index.php/"+url;
	}
}