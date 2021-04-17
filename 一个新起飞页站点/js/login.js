window.addEventListener('load',function(){
	var lo = document.querySelector('.lo');
	var re = document.querySelector('.re');
	
	var login = document.querySelector('.login');
	var register = document.querySelector('.register');
	// var con3 = document.querySelector('#con3');
	
	
	lo.onclick = function(){
		login.style.display = 'block';
		register.style.display = 'none';
		// this.style.color = '#f56600';
		// a_btn2.style.color = '#666';
	}
	re.onclick = function(){
		login.style.display = 'none';
		register.style.display = 'block';
		// this.style.color = '#f56600';
		// a_btn1.style.color = '#666';
		// con2.style.display = 'block';
	}
	
	
});

// 注册界面的表单验证
var pattern_msg = /^1[3|4|5|7|8][0-9]{9}$/ //电话号码的正则验证
var pattern_psw = /[0-9a-zA-Z]{8,16}/
// 手机号验证
$('.phone').blur(function(){
	// alert('请检查您的号码输出是否有误,若有误,请输入符合规则的电话号码');
	var message = $('.phone').val().trim();//zhanghao 
	// console.log(message);
	// var psw = $('.mima').val().trim();//password
	var res1 = pattern_msg.test(message);
	// var res2 = pattern_psw.test(psw);
	if(res1){
		$.ajax({
			url:'post.php',
			type:'post',
			data:{
				zhanghao:message
				// mima:psw,
			},
			success:function(data){
				console.log('ddd');
			},
			error:function(e){
				console.log(e);
			}
		})
	}else{
		alert('手机号输入有误，请检查后重新输入');
	}
	
});
