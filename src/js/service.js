var getAjax = newEnglish.factory('getAjax', ['$http', '$q', function ($http,$q) {
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