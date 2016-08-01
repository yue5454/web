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
}];