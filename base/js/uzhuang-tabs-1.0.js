/*
Name:tabs 
Version:1.0
2015-07-21
Author:Lee 
Example：tabsMain(".tabs li",".cont div","showDivId","mOver");
*/
//tabsMain(".tabs span",".class_switch_area div","#con_one_","mclick");	
function tabsMain(dom1,dom2,showid,type){
	if(type=="mOver"){
		$(dom1).mouseover(function() {
			tabs($(this).attr("index"),dom1,dom2,showid)
		});
	}else{
		$(dom1).mousedown(function() {
			tabs($(this).attr("index"),dom1,dom2,showid)
		});
		}
}
function tabs(index,dom1,dom2,showid){	
		$(dom1).removeClass("active");
		$(dom1).eq(index).addClass("active");
		$(dom2).hide();
		$(showid+index).show();	
}
//end