// 点击事件
function clickRes() {
    // 看看业主怎么说切换
    $('.owner_tab_button li').on('click', function () {
        $(this).addClass('active').siblings('li').removeClass('active');
        // console.log($(this).index());
        $(this).parents('.owner_tab').find('.owner_tab_content li.owner_list').eq($(this).index()).addClass('active').siblings('li.owner_list').removeClass('active');
    });
}
// 选装修 叠加轮播
function beforTab() {
    function sinderAddClass(arr) {
        $('.cs_dec_content li').attr('class', '')
        $('.cs_dec_content li').each(function (index, el) {
            //$(this).addClass(arr[index]);

            $(this).get(0).className = arr[index];
        });
    }
    var beforCLassArray = [
        // 'be_de_list cs_dec_l2',
        'be_de_list cs_dec_l1',
        'be_de_list cs_dec_c',
        'be_de_list cs_dec_r1',
        // 'be_de_list cs_dec_r2'
    ];
    var tabSize = $('.cs_dec_content li').size();

    if (tabSize > 3) {
        var sildSize = tabSize - 3;
        for (var i = 0; i < sildSize; i++) {
            beforCLassArray.push('be_de_list');
        }

        sinderAddClass(beforCLassArray);
    } else {
        if (tabSize >= 3) {
            sinderAddClass(beforCLassArray);
        }
    }



    $('.cs_dec_button .right_minu').on('click', function () {
        beforCLassArray.push(beforCLassArray.shift());
        sinderAddClass(beforCLassArray);
    });

    $('.cs_dec_button .left_minu').on('click', function () {
        beforCLassArray.unshift(beforCLassArray.pop());
        sinderAddClass(beforCLassArray);
    });
}

// 方法调用
function pluginUnit() {
    //图片懒加载
    //$("img.lazy").lazyload();

    //placeholder
    // $('input, textarea').placeholder();

    //select
    // $.selectFun('select_', '2');


    // 页面内容移动

    var revealData1 = {
        duration: 1000,
        origin: 'bottom',
        rotate: { x: 0, y: 0, z: 0 },
        distance: '50px',
        scale: 1,
        easing: 'linear'
    };
    if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))) {
        var sr = ScrollReveal();
        sr.reveal('.move_top', revealData1);
        // sr.reveal('.principal .principal_list', revealData1, 200);
    }
}


// 移入图片 显示遮罩层
function showCover(ele){
    $(ele).mouseenter(function(){
        $(this).stop(true, true).animate({opacity:1})
    });
    $(ele).mouseleave(function(){
        $(this).stop(true, true).animate({opacity:0})
    });
}


// 选装修 轮播 弹出层
function csShowCover(){
    
    $(".cs_dec_cc").on("mouseenter",function(){
        console.log(1)
        $(".cs_dev_info").stop(true, true).fadeIn(600)
    })
    .on("mouseleave",function(){
        $(".cs_dev_info").stop(true, true).fadeOut(600)       
    })
}

// 灵感图库 tap切换
function insTapTop(){
    $(".inspics_tab_button .inspics_list").on("click",function(){
        $(this).addClass("active").siblings().removeClass("active");
        $(this).parent().siblings(".ins_show_bar").find('.ins_show_list').eq($(this).index()).addClass('active').siblings('li.ins_show_list').removeClass('active');
        
    })
}
// 小tap切换
function insTapSmall(){
    $(".inspics_tap_small li").on("click",function(){
        $(this).addClass("active").siblings().removeClass("active");
        
    })
}


$(function () {
    var $container = $('#masonry');
    $container.imagesLoaded(function () {
        $container.masonry({
            itemSelector: '.dec_pic',
            gutter: 25,
            isAnimated: true,
        });
    });
    clickRes();
    beforTab();
    pluginUnit();
    showCover(".dec_cover");
    showCover(".ins_cover");
    csShowCover();
    insTapTop();
    insTapSmall()
})