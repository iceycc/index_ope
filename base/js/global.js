 	function openJesongPlatChat(cid,gid,fid){
 		var url=null;
 		if(cid==null){
 			alert("必须传入公司id");
 			return false;
 		}else if(cid!=null&&gid==null&&fid==null){
 			 url="http://service.uzhuang.com/live/chat.dll?c="+cid+"";
 		}else if(fid==null&&gid!=null){
 			 url="http://service.uzhuang.com/live/chat.dll?c=1&g="+gid+"";
 		}else  {
 			url="http://service.uzhuang.com/live/chat.dll?c=1&g="+gid+"&f="+fid+"";
 		}
 		window.open(url);
   	}
 	
 	
 	function openJesongPlatOrderChat(cid,oid,gid,fid,shopid){
 		var url=null;
 		if(shopid==null){
 			if(cid==null){
 	 			alert("必须传入公司id");
 	 			return false;
 	 		}else if(cid!=null&&gid==null&&fid==null){
 	 			 url="http://service.uzhuang.com/live/chat.dll?c="+cid+"";
 	 		}else if(fid==null&&gid!=null){
 	 			 url="http://service.uzhuang.com/live/chat.dll?c=1&g="+gid+"";
 	 		}else if(cid!=null&&gid!=null&&fid!=null&&oid==null) {
 	 			url="http://service.uzhuang.com/live/chat.dll?c=1&g="+gid+"&f="+fid+"";
 	 		}else{
 	 			url="http://service.uzhuang.com/live/chat.dll?c=1&g="+gid+"&f="+fid+"&order="+oid+"";
 	 		}
 		}else{
 			if(cid==null){
 	 			alert("必须传入公司id");
 	 			return false;
 	 		}else if(cid!=null&&gid==null&&fid==null){
 	 			 url="http://service.uzhuang.com/live/chat.dll?c="+cid+"";
 	 		}else if(fid==null&&gid!=null){
 	 			 url="http://service.uzhuang.com/live/chat.dll?c=1&g="+gid+"";
 	 		}else if(cid!=null&&gid!=null&&fid!=null&&oid==null) {
 	 			url="http://service.uzhuang.com/live/chat.dll?c=1&g="+gid+"&f="+fid+"&shopid="+shopid+"";
 	 		}else{
 	 			url="http://service.uzhuang.com/live/chat.dll?c=1&g="+gid+"&f="+fid+"&order="+oid+"&shopid="+shopid+"";
 	 		}
 		}
 		
 		window.open(url);
 		
 	}
 	
 	
 	function openJesongShopChat(cid,json,gid,fid,commid){
 		var url=null;
 		if(commid==null){
 			if(cid==null){
 	 			alert("必须传入公司id和商家id");
 		 			return false;
 	 		}else if(cid!=null&&gid==null&&fid==null&&json==null){
 	 				url="http://service.uzhuang.com/live/chat.dll?c="+cid+"";
 		 		}else if(fid==null&&gid!=null&&json==null){
 		 			 url="http://service.uzhuang.com/live/chat.dll?c="+cid+"&g="+gid+"";
 		 		}else{
 		 				url="http://service.uzhuang.com/live/chat.dll?c="+cid+"&json="+json+"";
 		 		}
 		}else{
 			if(cid==null&&shopid==null){
 	 			alert("必须传入公司id和商家id");
 		 			return false;
 	 		}else if(cid!=null&&gid==null&&fid==null&&json==null){
 	 			 url="http://service.uzhuang.com/live/chat.dll?c="+cid+"";
 		 		}else if(fid==null&&gid!=null&&json==null){
 		 			 url="http://service.uzhuang.com/live/chat.dll?c="+cid+"&g="+gid+"";
 		 		}else{
 		 			url="http://service.uzhuang.com/live/chat.dll?c="+cid+"&json="+json+"";
 		 		}
 		}
 		window.open(url);
 		
 	}
 	
