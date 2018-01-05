var appDomain = "http://www.uzhuang.com/";
var ar=[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,3358];

//直辖市获取
function loadProvince2(id){
	var url =appDomain+"index.php";
	var keys;
	var params = {
		'pid'	: id,
		'm' 	: 'linkage',
		'f'		: 'json',
		'v'		: 'linkage_box'
	};
	jQuery.ajax( {
	    type : "POST",
	    dataType : "json",
		async:false, 
	    url : url,
	    data : params,
	    cache : false,
	    success : function(dataResult) {
			if(dataResult){
				for(var key in dataResult){
					keys=key;
				}
				
			}
		},
		error : function(XMLHttpResponse) {
		}
	});
	return keys;
	
}

// 加载省份
function loadProvince(id,nextid){
	var url =appDomain+"index.php";
	var params = {
		'pid'		: '0',
		'm' 		: 'linkage',
		'f'			: 'json',
		'v'			: 'linkage_box',
		'notIdS'	: ar
	};
	jQuery.ajax( {
	    type : "POST",
	    dataType : "json",
	    url : url,
	    data : params,
	    cache : false,
	    success : function(dataResult) {
			if(dataResult){
				var provinceHtml="<option>请选择</option>";
				for(var key in dataResult){
					if(key==2||key==3||key==4||key==5||key==34||key==35){
						provinceHtml += "<option value='" + loadProvince2(key) + "'>" + dataResult[key] + "</option>"
						}else
						{
					provinceHtml += "<option value='" + key + "'>" + dataResult[key] + "</option>";
					}
				}
				$("#"+id).html(provinceHtml);
				rSelects();
				var select_ul = $("#"+id).prev('.select_box').find('ul');
				rebind(id,nextid,select_ul);
			}
		},
		error : function(XMLHttpResponse) {
		}
	});
}

function loadCity(id,nextid){
	var ohtml = "<option value='0'>请选择</option>";
	var proEl = $("#"+id+" option:selected");
	var provinceId = proEl.val();
	var provinceName = proEl.text();
	var provinceId = proEl.val();
	var provinceName = proEl.text();
	var params = {
		'pid'    : provinceId,
		'm'        : 'linkage',
		'f'      : 'json',
		'v'        : 'linkage_box'
	};
	//84是钓鱼岛
	if(provinceId>0){
		var url = appDomain + "index.php";
		jQuery.ajax( {
		    type : "POST",
		    dataType : "json",
		    url : url,
		    data : params,
		    cache : false,
		    success : function(dataResult) {
				var cityHtml = ohtml;
				if(dataResult){
					for(var key in dataResult){
						cityHtml += "<option value='" + key + "'>" + dataResult[key] + "</option>";
					}
				}
				$("#"+nextid).html(cityHtml);
				
				rSelects();
				var select_ul = $("#"+id).prev('.select_box').find('ul');
				rebind(id,nextid,select_ul);
			},
			error : function(XMLHttpResponse) {
			}
		});
	}else{
		$("#cityDiv").html(ohtml);
		
	}
}


//左侧省份的列表id #options_2
function rebind(id,nextid,box){
	box.bind('click',function(e){
		var index = $(e.target).index();
		loadCity(id,nextid,index);
	})
}