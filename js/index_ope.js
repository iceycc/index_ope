// 装修对比图
var count = 0;
function constrstSilder() {
    $.ajax({
        url:'http://www.uzhuang.com/index.php?m=content&f=index&v=getZXcomPic',
        data:{page1:count},
        dataType:'json',
        success:function (data) {
            contrastSilder(data.img);
            $('#owner').html(data.info.owner);
            $('#guanjia').html(data.info.guanjia);
            $('#style').html(data.info.style);
            $('#area').html(data.info.area);
            $('#cost').html(data.info.cost);
            $('.space_img').find('.space_img_tittext').find('h2').html(data.info.title);
        }
    });

    function contrastSilder(contrastData) {
        var posterTvGridContrast = new posterTvGrid('posterTvGridContrast',
            {
                className: "posterTvGrid",
                direct: "right",
                prevFn: function (pages) {
                    $.ajax({
                        url:'http://www.uzhuang.com/index.php?m=content&f=index&v=getZXcomPic',
                        data:{page1:--count},
                        async:false,
                        dataType:'json',
                        success:function (data) {
                            contrastSilder(data.img);
                            $('#owner').html(data.info.owner);
                            $('#guanjia').html(data.info.guanjia);
                            $('#style').html(data.info.style);
                            $('#area').html(data.info.area);
                            $('#cost').html(data.info.cost);
                            $('.space_img').find('.space_img_tittext').find('h2').html(data.info.title);
                        }
                    });

                },
                nextFn: function (pages) {
                    $.ajax({
                        url:'http://www.uzhuang.com/index.php?m=content&f=index&v=getZXcomPic',
                        data:{page1:++count},
                        async:false,
                        dataType:'json',
                        success:function (data) {
                            contrastSilder(data.img);
                            $('#owner').html(data.info.owner);
                            $('#guanjia').html(data.info.guanjia);
                            $('#style').html(data.info.style);
                            $('#area').html(data.info.area);
                            $('#cost').html(data.info.cost);
                            $('.space_img').find('.space_img_tittext').find('h2').html(data.info.title);
                        }
                    });
                }
            },
            contrastData
        );
    }


}

// 点击事件
function clickRes() {
    // 看看业主怎么说切换
    $('.owner_tab_button li').on('click', function () {
        $(this).addClass('active').siblings('li').removeClass('active');
        // console.log($(this).index());
        $(this).parents('.owner_tab').find('.owner_tab_content li.owner_list').eq($(this).index()).addClass('active').siblings('li.owner_list').removeClass('active');
    });
}

// 方法调用
function pluginUnit() {
    //图片懒加载
    //$("img.lazy").lazyload();

    //placeholder
    $('input, textarea').placeholder();

    //select
    $.selectFun('select_', '2');


    // 页面内容移动

    var revealData1 = {
        duration: 1000,
        origin: 'bottom',
        rotate: {x: 0, y: 0, z: 0},
        distance: '50px',
        scale: 1,
        easing: 'linear'
    };
    if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))) {
        var sr = ScrollReveal();
        sr.reveal('.move_top', revealData1);
        sr.reveal('.principal .principal_list', revealData1, 200);
    }
}

// 装修前轮播
function beforTab() {
    function sinderAddClass(arr) {
        $('.bf_dec_content li').attr('class','')
        $('.bf_dec_content li').each(function (index,el) {
            //$(this).addClass(arr[index]);

            $(this).get(0).className = arr[index];
        });
    }
    var beforCLassArray = [
        'be_de_list bf_dec_l2',
        'be_de_list bf_dec_l1',
        'be_de_list bf_dec_c',
        'be_de_list bf_dec_r1',
        'be_de_list bf_dec_r2'
    ];
    var tabSize = $('.bf_dec_content li').size();

    if (tabSize > 5) {
        var sildSize = tabSize - 5;
        for (var i = 0; i < sildSize ; i++) {
            beforCLassArray.push('be_de_list');
        }

        sinderAddClass(beforCLassArray);
    }else{
        if (tabSize >= 5) {
            sinderAddClass(beforCLassArray);
        }
    }



    $('.bf_dec_button .right_minu').on('click',function () {
        beforCLassArray.push(beforCLassArray.shift());
        sinderAddClass(beforCLassArray);
    });

    $('.bf_dec_button .left_minu').on('click',function () {
        beforCLassArray.unshift(beforCLassArray.pop());
        sinderAddClass(beforCLassArray);
    });
}

//审核报告节省金额
function ceeateSavaMoney() {
    var savaMoneyNum = $('.sava_money input[type=hidden]').val();
    var savaMoneyText = '';
    $.each(savaMoneyNum,function (index,el) {
        if(el == '.'){
            savaMoneyText += '<span class="save_spot">'+el+'</span>';
        }else{
            savaMoneyText += '<span>'+el+'</span>';
        }
    });
    $('.sava_money div').html(savaMoneyText);
}

// 弹窗拖动
function dragAlert() {
    $('.alert_singup_cont').on('mousedown',function (e) {
        var el = $(this);
        var disX = e.clientX-el.position().left;
        var disY = e.clientY-el.position().top;
        //console.log(disX,disY)
        $(document).on('mousemove',function (e) {
            var LEFT = e.clientX-disX,
                TOP = e.clientY-disY;
            // 左侧
            if(e.clientX-disX - el.innerWidth()/2 < 10){
                LEFT = el.innerWidth()/2;
            }
            //上侧
            if(e.clientY-disY - el.innerHeight()/2 < 10){
                TOP = el.innerHeight()/2;
            }
            //右侧
            if(LEFT > $(window).width() - el.innerWidth()/2){
                LEFT = $(window).width() - el.innerWidth()/2;
            }
            //下侧
            if(TOP > $(window).height() - el.innerHeight()/2){
                TOP = $(window).height() - el.innerHeight()/2;
            }
            el.css({
                left: LEFT,//e.clientX-disX,
                top: TOP//e.clientY-disY
            });
            return false;
        });
        $(document).on('mouseup',function (e) {
            $(document).off('mousemove mouseup ');
            el.off('mousedown');
            dragAlert();
        });
        el.setCapture&&el.setCapture();
    });
}
// 弹层报名
function alertSingForm() {
    //console.log($('.sing_up').position().top);
    setTimeout(function () {
        var footerFormTop = $('.sing_up').position().top - $(window).height();
        $(window).on('scroll',function () {
            var SCROLLTOP = $(window).scrollTop();
            if(SCROLLTOP > footerFormTop){
                $('.alert_singup').addClass('active');
                $(window).off('scroll');
            }
        });
    },3000);


    // 弹窗报名关闭
    $('.sl_sing_close').on('click',function () {
        $(this).parents('.alert_singup').remove();
    });
}

function clearYK(video_id){
    player = new YKU.Player('youkuplayer',{
        styleid: '6',
        client_id: '3cd17f251dc3cedd',
        vid: video_id,
        autoplay: true,
        show_related: false
    });
}

function openVideo() {
    $('.video_img').on('click',function () {
        var VIDEO_URL = $('.VIDEO_URL').val();
        var yk_urlRes = VIDEO_URL.split('/');
        //去广告
        clearYK(yk_urlRes[yk_urlRes.length-1]);
        //赋视频连接
        // console.log(VIDEO_URL)
        $('.video_mask iframe').attr({'src':VIDEO_URL});
        $('.video_mask').show();
    })



    $('.video_close').on('click',function(){
        $('.video_mask').hide();
    });
}

//报名
function submitSingForm(fn) {
    //报名提交
    $('.sing_submit').on('click', function () {
        //console.log(checkSingUpForms($(this), '.form_info'))
        if(checkSingUpForms($(this), '.form_info')) {
            fn&&fn($(this));
            // console.log(1)
        }
    });
}

// 加载执行方法
function loadingMethodRes() {
    //方法调用
    pluginUnit();

    //审核报告节省金额
    ceeateSavaMoney();

    //看看业主怎么说 装修对比图
    constrstSilder();

    // 点击事件
    clickRes();

    // 装修前轮播
    beforTab();

    // 弹窗拖拽
    dragAlert();

    // 弹层报名
    alertSingForm();

    //视频
    openVideo();

    var subForm = true;
    // 报名
    submitSingForm(function (_this) {
        //_this为当前点击的按钮
        var USER_NAME = _this.parents('.form_info').find('.username').val();
        var TELEPHONE = _this.parents('.form_info').find('.telephone').val();
        var CITY = _this.parents('.form_info').find('.singup_city select').val();
        var SOURCE = _this.parents('.form_info').find('.source').val();
        if(!subForm){
            return false;
        }
         $.ajax({
           url:'http://www.uzhuang.com/index.php?m=member&f=fbform&v=public_foot_order',
           data:{
             'title':USER_NAME,
             'telephone':TELEPHONE,
             'LK1_1':CITY,
             'source':SOURCE
           },
           dataType:'json',
           type:'post',
           success:function(res){
            subForm = true;
            $('.form_info').find('.username').val("");
            $('.form_info').find('.telephone').val("");
            $('.form_info').find('.singup_city select').val(0);
            if (res == '您已提交过需求，12小时只允许提交一次') {
                var basic_title = '请耐心等待！';
            } else {
                $('.sl_sing_close').parents('.alert_singup').hide(); 
                var basic_title = '恭喜您申请成功！';
            }
            uzAlert("basic-alert", basic_title, res + '<br><input class="strong-btn" type="button" value="确定" onclick="closeAlert();">');
           },
         });

         subForm = false;
    });
}


$(function () {
    loadingMethodRes();
    //$(document).click(function () {

        //$(document).scrollTop(1000);
    //})
});
