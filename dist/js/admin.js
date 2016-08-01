var headFoot = newEnglish.controller("headFoot", ["$scope", function ($scope) {
}]);
var index = ['$scope', 'getAjax', function ($scope,getAjax) {
	var paramer = {};
	var paramers = [];
	paramer.title = "nihao";
	paramer.content = "nishisdhs";
	getAjax({
		method:"POST",
		url:"Index/add",
		data:paramer
	}).then(function (data) {
		console.log(data);
	});
}];;var word = ['$scope', function () {
	console.log(1);
}];;var wordDetail = ['$scope', function () {
	console.log(1);
}];;$(function () {
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
};var getAjax = newEnglish.factory('getAjax', ['$http', '$q', function ($http,$q) {
	return function (cb) {
		var defered = $q.defer();
		var paramer = {};
		paramer = {
			method: cb.method,
			url: Server.getServerRoot(cb.url) + '?newtime=' + new Date().getTime(),
			headers:{'Content-Type':'application/x-www-form-urlencoded;charset=utf-8'},
			// headers:{'Content-Type':'application/json'},
			data:cb.data
		}

		// get方法请求的时候
		if(cb.params)
		{
			paramer["params"] = cb.params;
		}

		$http(paramer).then(function (dat) {
			defered.resolve(dat.data);
		},function (error) {});

		return defered.promise;
	}
}]);