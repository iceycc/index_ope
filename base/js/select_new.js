/*#############################################################
Name: Select 
Author: wushi

#############################################################*/
jQuery.extend({
    "selectFun": function(name, num) {
    
	
	var tempID;
	var obj;
	var selTxt;
	//for S
	for( var i=1; i<=num; i++){
		
		var tempID = name+i;
		obj = $("#"+tempID);
		//
		obj.find(".select_txt").attr("id", 'select_txt_'+i);
		obj.find(".select_options").attr("id", 'select_options_'+i);
		obj.find("select").attr("id", 'sel_'+i);
		//
		//var sel_num = obj.find("select option").length;
		
		$(".selectBox").eq(i-1).append("<ul class='select_options' id='select_options_"+i+"'></ul>");
		$(".selectBox").eq(i-1).find("ul").css("display", "none");
		var temp_optionNum = $(".selectBox").eq(i-1).find("select option").length;
		for( var x=0; x<=temp_optionNum-1; x++){
				var temp_txt = $(".selectBox").eq(i-1).find("select option").eq(x).text();
				$(".selectBox").eq(i-1).find("ul.select_options").append("<li>"+temp_txt+"</li>");
			}
		//alert("长度："+sel_num);
		//添加li默认选中class
		var flag = obj.find("option").attr("selected");
		
		if( !flag ){ 
			var zz = obj.find("select option:selected").index();
			obj.find(".select_options li").eq(zz).addClass("selected");
			
		 }
		else{
			obj.find(".select_options li").first().addClass("selected");
			obj.find("select option").first().attr("selected", 'selected');
			}
		
		//初始化txt默认值
		var defaultTxt = obj.find(".select_options li.selected").text();
		obj.find(".select_txt").text(defaultTxt);
		//hover S
		obj.hover(function(){
			
			  	var tempId = $(this).attr("id");
			   	var tempIndex = tempId.charAt(7);
				if ( $("#select_txt_"+tempIndex).attr("class") == 'select_txt' ) $("#select_txt_"+tempIndex).attr("class", 'select_txt_hover');
			},function(){
				
				var tempId = $(this).attr("id");
			   	var tempIndex = tempId.charAt(7);
				if ($("#select_txt_"+tempIndex).attr("class") == 'select_txt_hover') $("#select_txt_"+tempIndex).attr("class", 'select_txt');
			})
		//hover E
		//click S
		obj.click(function(event){
			event.stopPropagation();
			var tempId = $(this).attr("id");
			   	var tempIndex = tempId.charAt(7);
			for( var n=1; n<=num; n++ ){
				 if( tempIndex == n ){
							if ( $("#select_txt_"+tempIndex).attr("class") == 'select_txt_hover' ){ 
								$("#select_txt_"+tempIndex).attr("class", 'select_txt_open');
								$("#select_options_"+tempIndex).css("display", "block");
							 }
							 else if ( $("#select_txt_"+tempIndex).attr("class") == 'select_txt_open' ) { 
								$("#select_txt_"+tempIndex).attr("class", 'select_txt_hover');
								$("#select_options_"+tempIndex).css("display", "none");
							 }
							//传值 S
							$("#select_options_"+tempIndex).find("li").click(function(){
								$(this).addClass("selected").siblings().removeClass("selected");
								var tempTxt = $(this).text();
								$("#select_txt_"+tempIndex).text(tempTxt);
								//sel S
								var tempLi_index = $(this).index();
								$("#sel_"+tempIndex).find("option").eq(tempLi_index).attr("selected","selected").siblings().removeAttr("selected");
								//sel E
							});
							//传值 E
							//传值 S
							$("#select_options_"+tempIndex).find("li").hover(function(){
									$(this).addClass("open_hover").siblings().removeClass("open_hover");
								},function(){
									$(this).removeClass("open_hover");
								});
							//传值 E
						}
					else{
							$("#select_txt_"+n).attr("class", 'select_txt');
							$("#select_options_"+n).css("display", "none");
						}

				 }
		})
		//click E
	
	}
	//for E
	//
	$(function(){ 
			$(document).click(function (e) { 
			
				var optArray = new Array();
				var target_id = $(e.target).attr('id');
				//for S
				for( var m=1; m<=num; m++){
						optArray[m] = "select_txt_"+m;
						if (optArray[m] === target_id){}
						else{
								
								$("#select_txt_"+m).attr("class", 'select_txt');
								$("#select_options_"+m).css("display", "none"); 
								
						  }
					}
				//for E

			})
	});
	//
    }
});