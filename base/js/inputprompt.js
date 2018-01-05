//xushu 输入框提示
$(function(){
	$("input[placeholder]").add("textarea[placeholder]").each(function(index, element) {
		var helpword = $(this).attr("placeholder");
		$(this).val(helpword).css("color","#aaa");
		$(this).bind("focus",function(){
				if($(this).val()== $(this).attr("placeholder"))
				{
					$(this).val("").css("color","#333");
				}
			})
		$(this).bind("blur",function(){
				if($(this).val()=="")
				{
					helpword = $(this).attr("placeholder");
					$(this).val(helpword).css("color","#aaa");
				}
			})
	});
});
