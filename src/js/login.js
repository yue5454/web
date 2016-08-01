$(function () {

	$(".sign-now").on("click","a", function () 
	{
		if($(this).index() == 0)
		{
			$(".reg-box,#sign").removeClass("hide");
			$(".login-box,#login").addClass("hide");
		}
		else if($(this).index() == 1)
		{
			$(".login-box,#login").removeClass("hide");
			$(".reg-box,#sign").addClass("hide");
		}
		$(this).addClass("hide").siblings().removeClass("hide");
	});

	// login
	$("#login").on("click", function () 
	{
		submit("login");
	});
	// sign
	$("#sign").on("click", function () 
	{
		submit("sign");
	});
});


function submit (type) 
{
	var paramers = {};
	var url = "";
	var errmsg = "";
	if(type == "login")
	{
		if(!$("#login_username").val() && $("#login_username").val() == "")
		{
			errmsg = "用户名不能为空！！";
		}
		else if(!$("#login_pwd").val() && $("#login_pwd").val() == "")
		{
			errmsg = "密码不能为空！！";
		}
		else
		{
			// 请求数据对象
			paramers.username = $("#login_username").val();
			paramers.password = $("#login_pwd").val();
			url = "Login/login";
		}
	}
	else if (type == "sign")
	{
		if(!$("#sign_username").val() && $("#sign_username").val() == "")
		{
			errmsg = "用户名不能为空！！";
		}
		else if(!$("#sign_pwd").val() && $("#sign_pwd").val() == "")
		{
			errmsg = "密码不能为空！！";
		}
		else if(!$("#sign_enter_pwd").val() && $("#sign_enter_pwd").val() == "")
		{
			errmsg = "确认密码不能为空！！";
		}
		else if($("#sign_enter_pwd").val() != $("#sign_pwd").val())
		{
			errmsg = "两次密码不一致！！";
		}
		else
		{
			// 请求数据对象
			paramers.username = $("#sign_username").val();
			paramers.password = $("#sign_pwd").val();
			url = "Login/sign";
		}
	}

	if(errmsg == "")
	{
		$.ajax(
		{
			type:"post",
			url:Server.getServerRoot(url),
			dataType:"json",
			data:paramers,
			success:function (data) 
			{
				if(data.status == "ok")
				{
					window.location.href = "/";
				}
			},
			error: function (err) 
			{
				$("#errmsg").text(err.responseText);
			}
		});
	}
	else
	{
		$("#errmsg").text(errmsg);
	}
}