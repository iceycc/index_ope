var modelid=getcookie("modelid");
if(modelid){
	var uname = getcookie("truename");
	var auth = getcookie("auth");
	if(modelid==11&&auth){
		uname = uname.replace('%40','@');
		$('.txt:eq(1)').find('a:eq(0)').attr("href","http://www.uzhuang.com/index.php?m=company&f=biz_homepage&v=listing");
		logined();
	}else if(modelid==10&&auth){
		$('.txt:eq(1)').find('a:eq(0)').attr("href","http://www.uzhuang.com/index.php?m=member&f=index&v=profile1&acbar=2");
		logined();
	}else{
		$('.txt:eq(1)').find('a:eq(0)').attr("href","javascript:void(0);");
		exited();
	}
}

function logined(){
	$('.txt:eq(1)').find('a:eq(0)').text(uname); 
	$('.txt:eq(0)').addClass('no');
	$('.txt:eq(1)').removeClass('no');
}

function exited(){
	$('.txt:eq(1)').find('a:eq(0)').text('');
	$('.txt:eq(0)').removeClass('no');
	$('.txt:eq(1)').addClass('no');
}