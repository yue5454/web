var newEnglish = angular.module('newEnglish', ['ngCookies','ngRoute','ngSanitize','ui.router']);

newEnglish.config(["$locationProvider","$stateProvider", '$urlRouterProvider', '$sceProvider', '$httpProvider', function ($locationProvider,$stateProvider,$urlRouterProvider,$sceProvider,$httpProvider) {
	$stateProvider
	.state("index",{
		url:'/index',
		views:{
			'':{
				templateUrl:'view/home.html',
				controller:index
			}
		}
	})
	.state("word",{
		url:'/word',
		views:{
			'':{
				templateUrl:'view/category.html',
				controller:word
			}
		}
	})
	.state("word_detail",{
		url:'/word_detail',
		views:{
			'':{
				templateUrl:'view/category_detail.html',
				controller:wordDetail
			}
		}
	});
	
	$urlRouterProvider.otherwise("/index");
	$sceProvider.enabled(false);
	$locationProvider.html5Mode(false);
	$locationProvider.hashPrefix("!");

	$httpProvider.defaults.transformRequest = function (obj) 
	{
		var str = [];
		for(var p in obj)
		{
			str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
		}
		return str.join('&');
	}

	$httpProvider.defaults.headers.post = {
		"Content_Type":"application/x-www-form-urlencoded;charset=utf-8"
	}
}]);