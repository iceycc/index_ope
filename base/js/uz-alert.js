// xushu alert 

var alert_tag = $('<div id="alert-bg"></div><div id="alert-main"><h2 id="alert-bar"><span id="alert-title">弹窗标题在此</span><a id="alert-close" href="javascript:void(0)"></a></h2><div id="alert-con"></div></div>');
var alert_tag2 = $('<div id="alert-main"><div id="alert-con"></div></div>');
var alert_tag_new = $('<div id="alert-main1"><div id="alert-con1"></div></div>');


function uzAlert(tag_id,title,msg,removeid) {
	closeAlert();
	var alert_con;
	alert_con = $("#"+tag_id);

	alert_tag.appendTo('body');
	alert_con.appendTo('#alert-con');
	$('#alert-bg').height($(document).height());
	$('#alert-title').html(title);
	if(removeid) $('#'+removeid).addClass('hide');
	$('#basic-alert-content').html(msg);
	alert_con.removeClass('hide');
	var w_w=$(window).width();
	var w_h=$(window).height();
	var layer_w = $('#alert-main').width();
	var layer_h = $('#alert-main').height();
	var layer_top = (w_h-layer_h)/2;
	var layer_left = (w_w-layer_w)/2;
	
	//console.log("w_w:"+w_w+"w_h:"+w_h+"layer_w"+layer_w+"layer_h"+layer_h+"layer_top"+layer_top+"layer_left"+layer_left);
	$('#alert-main').css({left:layer_left,top:layer_top});
	$('#alert-close').bind('click',function(){
		closeAlert();
	})
	console.log(alert_con)
}
function closeAlert() {
	if($('#alert-con'))
	{
		var alert_con = $('#alert-con').children();
	}
	
	alert_con.addClass('hide').appendTo('body');
	$('body').removeClass('hidden');
	alert_tag.remove();
	
	alert_con="";
	//console.log(alert_con)
	
}

function uzAlert2(tag_id,title,msg,sec) {
	var alert_con;
	alert_con = $("#"+tag_id);
	
	alert_tag2.appendTo('body');
	alert_con.appendTo('#alert-con');
	$('#alert-bg').height($(document).height());
	$('#alert-title').html(title);
	$('#basic-alert-content').html(msg);
	var w_w=$(window).width();
	var w_h=$(window).height();
	var layer_w = $('#alert-main').width();
	var layer_h = $('#alert-main').height();
	var layer_top = (w_h-layer_h)/2;
	var layer_left = (w_w-layer_w)/2;
	alert_con.removeClass('hide');
	//console.log("w_w:"+w_w+"w_h:"+w_h+"layer_w"+layer_w+"layer_h"+layer_h+"layer_top"+layer_top+"layer_left"+layer_left);
	$('#alert-main').css({left:layer_left,top:layer_top});
	setTimeout("closeAlert2()",1500);
}
function closeAlert2() {
	if($('#alert-con'))
	{
		var alert_con = $('#alert-con').children();
	}
	alert_con.addClass('hide').appendTo('body');
	$('body').removeClass('hidden');
	alert_tag2.remove();
	alert_con="";
}

function uzAlert_new(tag_id,title,msg,sec) {
	var alert_con;
	alert_con = $("#"+tag_id);
	
	alert_tag_new.appendTo('body');
	alert_con.appendTo('#alert-con1');
	$('#alert-bg').height($(document).height());
	//$('#alert-title').html(title);
	$('#basic-alert-content').html(msg);
	var w_w=$(window).width();
	var w_h=$(window).height();
	var layer_w = $('#alert-main1').width();
	var layer_h = $('#alert-main1').height();
	var layer_top = (w_h-layer_h)/2;
	var layer_left = (w_w-layer_w)/2;
	alert_con.removeClass('hide');
	//console.log("w_w:"+w_w+"w_h:"+w_h+"layer_w"+layer_w+"layer_h"+layer_h+"layer_top"+layer_top+"layer_left"+layer_left);
	$('#alert-main1').css({left:layer_left,top:layer_top});
	setTimeout("closeAlert_new()",1500);
}
function closeAlert_new() {
	if($('#alert-con1'))
	{
		var alert_con = $('#alert-con1').children();
	}
	alert_con.addClass('hide').appendTo('body');
	$('body').removeClass('hidden');
	alert_tag_new.remove();
	alert_con="";
}
//input placeholder 兼容ie8
jQuery('[placeholder]').focus(function() {	
  var input = jQuery(this);
  if (input.val() == input.attr('placeholder')) {
    input.val('');
    input.removeClass('placeholder');
  }
}).blur(function() {
  var input = jQuery(this);
  if (input.val() == '' || input.val() == input.attr('placeholder')) {
    input.addClass('placeholder');
    input.val(input.attr('placeholder'));
  }
}).blur().parents('form').submit(function() {
  jQuery(this).find('[placeholder]').each(function() {
    var input = jQuery(this);
    if (input.val() == input.attr('placeholder')) {
      input.val('');
    }
  })
});
//check_Form
var error_tag = $('<span class="check_error"></span>');
function check_error(tag_id,msg){
	
		$(".inputWrap .check_error").remove();
		$(".inputWrap .layer-input").removeClass("bMar0");
		var opt = $("#"+tag_id);
		error_tag.appendTo(opt.parent(".inputWrap"));
		$(".inputWrap .check_error").html(msg);
		opt.addClass("bMar0");
		
	}
$(document).ready(function(){
  $(".inputWrap .layer-input").focus(function(){
	   $(this).siblings(".check_error").remove();
	   $(this).removeClass("bMar0");
	  });
	$(".layer-selects").click(function(){
		$(this).find(".check_error").remove();
	});
});
