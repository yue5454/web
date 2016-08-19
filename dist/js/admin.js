var headFoot = newEnglish.controller("headFoot", ["$scope", "$cookies", function ($scope, $cookies) {
	if($cookies.get("uName") && $cookies.get("uId"))
	{
		$scope.islogin = true;
	}
	else
	{
		$scope.islogin = false; 
	}

	// 退出登录
	$scope.logout = function () 
	{
		$cookies.remove("uName");
		$cookies.remove("uId");
		window.location.href = "/login.html";
	}
}]);
var index = ['$scope', 'getAjax', '$cookies', '$cookieStore', function ($scope,getAjax,$cookies,$cookieStore) {
	// 判断登陆状态
	isLogin();


	function isLogin () 
	{
		getAjax
		({
			method:"GET",
			url:"Index/index"
		}).then(function (data) {
			if(!data.islogin)
			{
				window.location.href = "/login.html";
			}
		});
	}
	
}];;var category = ['$scope', '$stateParams', '$cookies', 'getAjax', function ($scope, $stateParams, $cookies, getAjax) {
	// 添加分组弹出层判断
	$scope.add_group = true;
	$scope.paramers = {};
	var type;
	var mod;
	var group_id;

	// 类型判断
	if($stateParams.type = "word")
	{
		type = "0000";
	}
	else if($stateParams.type = "sentence")
	{
		type = "0001";
	}
	else if($stateParams.type = "group")
	{
		type = "0010";
	}
	getGroupInfo();

	// 添加分组
	$scope.addGroup = function () 
	{
		$scope.paramers = {};
		$scope.groupTit = "添加分组";
		mod = "addGroup";
		$scope.add_group = false;
	}
	// 编辑分组
	$scope.cateEdit = function (id,name,desc) 
	{
		$scope.paramers = {};
		$scope.groupTit = "编辑分组";
		mod = "editGroup";
		group_id = id;
		$scope.paramers.group_name = name;
		$scope.paramers.group_desc = desc;
		$scope.add_group = false;
	}
	// 删除分组
	$scope.cateDele = function (id) 
	{
		getAjax
		({
			method:"POST",
			url:"Index/deleGroup",
			data:{id:id}
		}).then(function (data) 
		{
			if(data.status)
			{
				getGroupInfo();
			}
		})
	}
	// 关闭弹框
	$scope.closeGroup = function () 
	{
		$scope.add_group = true;
	}

	// 获取分组列表
	function getGroupInfo () 
	{
		getAjax
		({
			method:"POST",
			url:"Index/getGroup",
			data:{type:type}
		}).then(function (data) {
			if(data != null && data.length > 0)
			{
				$scope.groupInfo = data;
			}
		});
	}
	// 确认提交
	$scope.confirm = function () 
	{
		if($scope.paramers.group_name == undefined)
		{
			$scope.errmsg = "分组名不能为空！";
		}
		else if ($scope.paramers.group_desc == undefined)
		{
			$scope.errmsg = "分组描述不能为空！";
		}
		else 
		{
			if(mod == "addGroup")
			{
				$scope.paramers.uId = $cookies.get("uId");
			}
			else if (mod == "editGroup")
			{
				$scope.paramers.id = group_id;
			}
			$scope.paramers.type = type;
			var date = new Date().getTime();
			$scope.paramers.ctime = date;

			getAjax
			({
				method:"POST",
				url:"Index/" + mod,
				data:$scope.paramers,
			}).then(function (data) {
				if(data.status)
				{
					$scope.closeGroup();
					getGroupInfo();
				}
				else
				{
					$scope.errmsg = data.msg;
				}
			});
		}
	}
}];;var categoryDetail = ['$scope', '$stateParams', '$cookies', 'getAjax', function ($scope, $stateParams, $cookies, getAjax) {
	// 添加分组弹出层判断
	$scope.add_group = true;
	$scope.paramers = {};
	var type;
	var mod;
	var group_id;

	// 类型判断
	if($stateParams.type = "word")
	{
		type = "0000";
	}
	else if($stateParams.type = "sentence")
	{
		type = "0001";
	}
	else if($stateParams.type = "group")
	{
		type = "0010";
	}
	getGroupInfo();

	// 添加分组
	$scope.addGroup = function () 
	{
		$scope.paramers = {};
		$scope.groupTit = "添加分组";
		mod = "addGroup";
		$scope.add_group = false;
	}
	// 编辑分组
	$scope.cateEdit = function (id,name,desc) 
	{
		$scope.paramers = {};
		$scope.groupTit = "编辑分组";
		mod = "editGroup";
		group_id = id;
		$scope.paramers.group_name = name;
		$scope.paramers.group_desc = desc;
		$scope.add_group = false;
	}
	// 删除分组
	$scope.cateDele = function (id) 
	{
		getAjax
		({
			method:"POST",
			url:"Index/deleGroup",
			data:{id:id}
		}).then(function (data) 
		{
			if(data.status)
			{
				getGroupInfo();
			}
		})
	}
	// 关闭弹框
	$scope.closeGroup = function () 
	{
		$scope.add_group = true;
	}

	// 获取分组列表
	function getGroupInfo () 
	{
		getAjax
		({
			method:"POST",
			url:"Index/getGroup",
			data:{type:type}
		}).then(function (data) {
			if(data != null && data.length > 0)
			{
				$scope.groupInfo = data;
			}
		});
	}
	// 确认提交
	$scope.confirm = function () 
	{
		if($scope.paramers.group_name == undefined)
		{
			$scope.errmsg = "分组名不能为空！";
		}
		else if ($scope.paramers.group_desc == undefined)
		{
			$scope.errmsg = "分组描述不能为空！";
		}
		else 
		{
			if(mod == "addGroup")
			{
				$scope.paramers.uId = $cookies.get("uId");
			}
			else if (mod == "editGroup")
			{
				$scope.paramers.id = group_id;
			}
			$scope.paramers.type = type;
			var date = new Date().getTime();
			$scope.paramers.ctime = date;

			getAjax
			({
				method:"POST",
				url:"Index/" + mod,
				data:$scope.paramers,
			}).then(function (data) {
				if(data.status)
				{
					$scope.closeGroup();
					getGroupInfo();
				}
				else
				{
					$scope.errmsg = data.msg;
				}
			});
		}
	}
}];;var categoryTest = ['$scope', function () {
	console.log(1);
}];;var addcategory = ['$scope', function () {
	console.log(1);
}];;$(function () {
	// 顶部导航
	$(document).on("click", ".top-box ul li", function () {
		$(this).addClass("active").siblings().removeClass("active");
	})
	.on("click", '.info-ele', function () {
		if($(".log-opt").hasClass("hide"))
		{
			$(".log-opt").removeClass("hide");
		}
		else
		{
			$(".log-opt").addClass("hide");
		}
	})
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