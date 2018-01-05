//input 焦点获得清空，无改变恢复原value
function inputFb(input_dom,input_num){

	//input的value存入数组
	var totalValue = new Array();
	for(var i=1; i<=input_num; i++)
	{
		var temp_id = input_dom + i;
		totalValue[i] = $(temp_id).val();
	}
	
	//获得焦点，清空原value
	$(":text").focus(function(){
			var temp_id = $(this).attr("id");
			var temp_index = temp_id.substr(temp_id.length-1,1);
			if($(this).val()==totalValue[temp_index] ){$(this).val("");}
	});
		
	//失去焦点，且没有输入新值，则恢复原值
	$(":text").blur(function(){
			var temp_id = $(this).attr("id");
			var temp_index = temp_id.substr(temp_id.length-1,1);
			if($(this).val()==""){$(this).val(totalValue[temp_index]);}
	});	
	//
	$('#keywords').focus(function(){
		if($(this).val()=="请输入关键字" ){$(this).val("");}
	});
	$('#keywords').blur(function(){
		if($(this).val()==""){$(this).val("请输入关键字");}
	});
	
}


//select
function selectTarget(dom1,dom2,dom3,num){
	// var select_index = new Array();
	//
	$(".sel").click(function(){
		$(this).find(".sel-list").toggleClass("no");	
	})
	//
	
	for(var i=1; i<=num; i++)
	{
		var temp_select_id = dom3 + i;
		var temp_list_id = dom2 + i;
		var selected_id = dom1 + i;

		$(temp_list_id).find("li").remove();
		var temp_index = $(temp_select_id).find("option").length;
		//option赋值给sel-list
		for(var n=0; n<temp_index; n++ ){
			var temp_value = $(temp_select_id).find("option").eq(n).text();
			$(temp_list_id).append("<li>"+temp_value+"</li>");
			//赋click方法
			$(temp_list_id).find("li").bind('click', function() {
				//操作表现select
				var temp_txt = $(this).text();
				var tempID = $(this).parent("ul").attr("id");
				var num_last = tempID.substr(tempID.length-1,1);
				$(dom1 + num_last).text(temp_txt);
				//操作真实select
				var temp_n = $(this).index();
				$(temp_select_id).find("option").attr("selected", false);
				$(temp_select_id).find("option").eq(temp_n).attr("selected", true);
			})
			
		}
		//select标签关闭
		$(temp_select_id).addClass("no");
	}

}
//
$(function(){
		$("#aForm").show();
		$("#submitForm").hide();
		var t;
		var first_Xtitle = $("#Xtitle").attr("placeholder");
	    var first_Xtelephone = $("#Xtelephone").attr("placeholder");
		
        $("#aForm_btn").click(function(){          
            $("#aForm").animate({top:"-96px", opacity: "0"},150,function(){ $("#aForm").hide(); a_next(); });
			function a_next(){
				$("#submitForm").show().animate({top:"0", opacity: "1"},150);
				}; 
            });
		$('.applyMod').mouseenter(function(){clearTimeout(t) })
	   $('.applyMod').mouseleave(function(){
		   
			var temp_Xtitle = $("#Xtitle").val();
			var temp_Xtelephone = $("#Xtelephone").val();
			var temp_sel_val_01 = $("#submitForm .tag_select").eq(0).html();
			var temp_sel_val_02 = $("#submitForm .tag_select").eq(1).html();
			
			if( temp_Xtitle!=="" || temp_Xtelephone!=="" || temp_sel_val_01!=="请选择" || temp_sel_val_02!=="请选择"){
				}
				else{
					//setTimeout(actions(),1000)
					t=setTimeout(function(){
						$("#submitForm").animate({top:"96px", opacity: "0"},150,function(){$("#submitForm").hide(); s_next();});
						
					},1000);
						
						function s_next (){
							$("#aForm").show().animate({top:"0", opacity: "1"},150);
							
						}

					}
		});
		
})
