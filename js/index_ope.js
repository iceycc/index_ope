// 点击事件
function clickRes() {
    // 看看业主怎么说切换
    $('.owner_tab_button li').on('click', function () {
        $(this).addClass('active').siblings('li').removeClass('active');
        // console.log($(this).index());
        $(this).parents('.owner_tab').find('.owner_tab_content li.owner_list').eq($(this).index()).addClass('active').siblings('li.owner_list').removeClass('active');
    });
}




$(function() {
    var $container = $('#masonry');
    $container.imagesLoaded(function() {
        $container.masonry({
            itemSelector: '.dec_pic',
                gutter: 25,
                isAnimated: true,
            });
     });
     clickRes()
})


