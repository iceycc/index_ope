// Xushu Xingzhuangzhi 2015-9-22
(function($) {
		$.fn.bxSlider = function(opt){
			var defaults = {
				mode: 'slide',
				delay: 5000,
				auto: true
			};
			var opt = $.extend(defaults, opt);
			var slide_ul = $(this);
			var slide_li = $(this).find('li');
			slide_li.css({float:'left',position:'relative'});
			var number = slide_li.length;
			//set html
			var box = $('<div class="bx-wrapper"></div>');
			var btn_box = $('<ul class="bx-pager bx-default-pager"></ul>');
			var slider_w, slider_h;
			var count = 0;
			var now = 1;
			var next = 2;
			var btns;
			var playing = false;
			var timer;
			if(number>1)
			{
				init();		
			}
			function init()
			{
				create_btn();
				slider_w = slide_ul.find('li').width();
				slider_h = slide_ul.find('li').height();
				btn_box.css({width:22*number,'margin-left':-11*number,left:'50%'});
				if(opt.mode == 'slide')
				{
					box.css({width:slider_w,height:slider_h,overflow:'hidden'})
					slide_li.css({width:slider_w,position:'relative'});
					slide_ul.css({width:slider_w*number,position:'absolute',left:0,top:0});	
				}
				if(opt.mode == 'fade')
				{
					slide_li.hide();
					slide_li.eq(0).show();
					box.css({width:'100%',height:slider_h,overflow:'hidden'})
					slide_li.css({width:'100%',position:'relative'});
					slide_ul.css({width:'100%',position:'absolute',left:0,top:0});
				}
				timer = setTimeout(play_next,opt.delay);	
			}
			function create_btn(){
				slide_ul.wrap('<div class="bx-viewport"></div>');
				slide_ul.parents('.bx-viewport').wrap(box);
				box = slide_ul.parents('.bx-wrapper');
				$('<div class="bx-controls bx-has-pager bx-has-controls-direction"></div>').appendTo(box);
				var controls = box.find('.bx-controls')
				$('<div class="bx-controls-direction"><a class="bx-prev" href="javascript:void(0);">Prev</a><a class="bx-next" href="javascript:void(0);">Next</a></div>').appendTo(controls);
				btn_box.appendTo(box);
				for(i=0; i<number; i++ )
				{
					$('<li class="bx-pager-item "><a href="javascript:void(0);" class="bx-pager-link"></a></li>').appendTo(btn_box);
				}
				btns = btn_box.find('.bx-pager-link');
				btns.eq(0).addClass('active');
			}
			function play_next() {
				if(opt.mode == 'slide') 
				{ 
					slide_next();
				}
				if(opt.mode == 'fade') 
				{
					fade_next();
				}
			}
			function play_pre() {
				if(opt.mode == 'slide') slide_pre();
				if(opt.mode == 'fade') fade_pre();	
			}
			function slide_next() {
				playing = true;
				if(next == 1) {
					var first_li = slide_ul.find('li:first-child');
					first_li.remove();
					first_li.appendTo(slide_ul);
					var l = slide_ul.position().left+slider_w;
					slide_ul.css('left',l);
					slide_ul.animate({left:-slider_w*(number-1)},function(){
						now = next;
						next++;
						first_li.prependTo(slide_ul);
						slide_ul.css('left',0);
						changebtn();
						playing = false;
					});	
						
				}
				else {
					slide_ul.animate({left:-slider_w*(next-1)},function(){
						now = next;
						next++;
						if(next > number)
						{
							next=1;	
						}
						changebtn();
						playing = false;
					});	
				}
				clearTimeout(timer);
				timer = setTimeout(slide_next,opt.delay);	
			}
			function slide_pre() {
				playing = true;
				if(next == number) {
					var last_li = slide_ul.find('li:last-child');
					last_li.prependTo(slide_ul);
					slide_ul.css('left',-slider_w);
					slide_ul.animate({left:'+='+slider_w},function(){
						now = next;
						next=1;
						last_li.appendTo(slide_ul);
						slide_ul.css('left',-slider_w*(number-1));
						changebtn();
						playing = false;
					});	
				}
				else {
					slide_ul.animate({left:-slider_w*(next-1)},function(){
						now = next;
						next++;
						changebtn();
						playing = false;
					});	
				}
				clearTimeout(timer);
				timer = setTimeout(slide_next,opt.delay);
			}
			function fade_next() {
				next = now+1;
				if(next>number) next=1;
				fadeplay();
			}
			function fade_pre() {
				next = now-1;
				if(next<1) next=number;
				fadeplay();
			}
			function fadeplay() {
				playing = true;
				slide_li.hide();
				now = next;	
				changebtn();
				slide_li.eq(next-1).fadeIn('slow',function(){
					playing = false;
					clearTimeout(timer);
					next=now+1;
					if(next>number) next=1;
					timer = setTimeout(fadeplay,opt.delay);
				});
			}
			function changebtn() {
				btns.removeClass('active').eq(now-1).addClass('active');
			}
			box.find('.bx-prev').bind('click',function(){
				if(!playing)
				{
					next = now-1;
					if(next<1) next=number;
					if(opt.mode == 'slide') slide_pre();
					if(opt.mode == 'fade') fade_pre();
				}
			})
			box.find('.bx-next').bind('click',function(){
				if(!playing)
				{
					next = now+1;
					if(next>number) next=1;
					if(opt.mode == 'slide') slide_next();
					if(opt.mode == 'fade') fade_next();		
				}
			})
		$(btns).each(function(index, element) {
				$(this).bind('click',function(){
					if(opt.mode == 'slide') {
						next = index+1;
						if(index>now)
						{	
							slide_next();
						}
						else {
							slide_pre();	
						}
					}
					if(opt.mode == 'fade') {
						next = index+1;
						fadeplay(next);
					}
				})
         });
		 $(slide_li).hover(
		       function(){
			 		clearTimeout(timer);
			 },function(){
				 	if(opt.mode == 'slide')
					{
						timer = setTimeout(slide_next,opt.delay);
					}
					else {
						timer = setTimeout(fadeplay,opt.delay);
					}
		 });
	}
})(jQuery);