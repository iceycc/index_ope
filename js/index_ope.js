// 点击事件
function clickRes() {
    // 看看业主怎么说切换
    $('.owner_tab_button li').on('click', function () {
        $(this).addClass('active').siblings('li').removeClass('active');
        // console.log($(this).index());
        $(this).parents('.owner_tab').find('.owner_tab_content li.owner_list').eq($(this).index()).addClass('active').siblings('li.owner_list').removeClass('active');
    });
}
// 装修前轮播
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




$(function () {
    var $container = $('#masonry');
    $container.imagesLoaded(function () {
        $container.masonry({
            itemSelector: '.dec_pic',
            gutter: 25,
            isAnimated: true,
        });
    });
    clickRes()
    beforTab()
})