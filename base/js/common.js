$(function(){  
			//搜索功能
					$('#keywd').focus(function(){
						if($(this).val()=="请输入关键字" ){$(this).val("");}
					});
					$('#keywd').blur(function(){
						if($(this).val()==""){$(this).val("请输入关键字");}
					});
					
					
					$('#txt2').focus(function(){
						if($(this).val()=="您的电话" ){$(this).val("");}
					});
					$('#txt2').blur(function(){
						if($(this).val()==""){$(this).val("您的电话");}
					});
					
					//获得 失去 焦点	
					$('#txt1').focus(function(){
						if($(this).val()=="您的称呼" ){$(this).val("");}
					});
					$('#txt1').blur(function(){
						if($(this).val()==""){$(this).val("您的称呼");}
					});
					
					$("#txt1,#txt2").focus(function() {
  						$(this).parents(".txt").addClass("on");
					});
					
					$("#txt1,#txt2").blur(function() {
						
  						$(this).parents(".txt").removeClass("on");
					});
					
					//list border hover	
					$(".imgtxt-list").hover(
					function(){ $(this).addClass("on");},
					function(){ $(this).removeClass("on");}
					);
					//screen area
					$(".screen-mod span, .pic-opts span").click(function(){
		
						if( $(this).hasClass("more-a") )
						{
							$(this).removeClass("more-a").addClass("more-b");
							$(this).parents("dl").removeClass("height-40").addClass("height-auto");
						}
						else{
								$(this).removeClass("more-b").addClass("more-a");
								$(this).parents("dl").removeClass("height-auto").addClass("height-40");
							}
							
					});
					$('.screen-mod dd').each(function(index, element) {
                        if($(this).height()<42)
						{
							$(this).find('.more-a').hide();
						}
                    });
					$('.pic-options dd').each(function(index, element) {
                        if($(this).height()<42)
						{
							$(this).find('.more-a').hide();
						}
                    });
					
});

function wrap_w(){
	 $(".house-pic li,.slider-ul li").each(function(){
		 var wrap_w = $(this).width();
		 var wrap_h = $(this).height();
		 var dx_pic = $(this).find("img");
		 $(dx_pic).load(function(){
		 	var img_w = $(dx_pic).width();
		 	var img_h = $(dx_pic).height();
		 	if( wrap_h < img_h ){
			  dx_pic.css('margin-top',-(img_h - wrap_h)/2);
			}else{return}
		 	if( wrap_w < img_w ){
			  dx_pic.css('margin-left',-(img_w - wrap_w)/2);
			}
		    else{return}
		 });
		 

	  });
}

wrap_w();

//wushi 2016-1-15 S
$(document).ready(function(){
	//
	var offset = 550,   
		$back_to_top = $('.footFloor,.min_footFloor');
		var min_h = $(window).height()/2;
		$('.footFloor').hide();
		$('.min_footFloor').css('left','-150%');
		//hide or show the "back to top" link
		$(window).scroll(function(){
			//( $(this).scrollTop() > offset ) ? $back_to_top.addClass('backtop-visible') : $back_to_top.removeClass('backtop-visible');
			if($(this).scrollTop()<min_h)
			{
				$("body").trigger("downRightMenu");
				$('.footFloor,.min_footFloor').hide();
			}
			else {
				$("body").trigger("upRightMenu");
				$('.footFloor').fadeIn('fast');
				$('.min_footFloor').fadeIn('fast');
			}
		});
	//
	var temp_w = $(window).width();
	var flag = 0;
	var minLeft;
	//初始化
	if( temp_w < 1367 ){ 
			var minLeft = "-110px";	
	 }
	 else{
		 var minLeft = 0;
	 }
	 //放大缩小屏幕监听
	 $(window).resize(function() {
		
		var temp_w = $(window).width();
	
		if( temp_w < 1367 ){
			//alert(flag);
				 minLeft = "-110px";		
			}
		if( temp_w >= 1367 ){
				minLeft = 0;
			}
		if( temp_w < 1367 && flag == 1 ){
			 minLeft = "-110px";
			$(".min_footFloor").css('left',minLeft);
			}
		if( temp_w >= 1367 && flag == 1 ){
			 minLeft = 0;
			$(".min_footFloor").css('left',minLeft);
			}
		else{}
	});
	//
	//收起
	$(".footFloor .close").click(function(event){
			flag = 1;
			closeFn();	
			event.stopPropagation();
	});
	function closeFn(){
			$(".footFloor").animate({left: '-300%'}, 800 );
			$(".min_footFloor").animate({left:minLeft}, 800);			
	}
	//展开
	$(".min_footFloor").click(function(event){
			flag = 0;
			openFn();
			event.stopPropagation();
	});		
	function openFn(){
			$(".footFloor").animate({left: '0'}, 800 );
			$(".min_footFloor").animate({left: '-300%'}, 800);					
	}
	
	
});
//wushi 2016-1-15 E
