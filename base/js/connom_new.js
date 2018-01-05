/*
 * addToggle Button toggle
 * toggle
 *
 *@param {Object} parsem
 *
 *   display             默认隐藏可设置为block默认显示[string]
 *   el                  button [元素：例 '.el'|'#el']
 *   targetObject        显示隐藏区块[元素：例 '.el'|'#el']
 *   odd                 显示回掉函数
 *   even                隐藏回掉函数
 *
 *
 * */
function addToggle(json){
    var display = json.display || 'none';
    if(display == 'block'){
        $(json.targetObject).show();
        $(json.el).attr('move-open-state',1);
    }else{
        $(json.targetObject).hide();
        $(json.el).attr('move-open-state',0);
    }



    $(json.el).on('click',function () {
        var states = $(json.el).attr('move-open-state');
        if(states == 0){
            json.odd&&json.odd();
            $(json.targetObject).show();
            $(json.el).addClass('silder_toggle_active');
            $(json.el).attr('move-open-state',1);
        }else{
            json.even&&json.even();
            $(json.targetObject).hide();
            $(json.el).removeClass('silder_toggle_active');
            $(json.el).attr('move-open-state',0);
        }
        setTimeout(function () {
            $(document).bind('click', function () {
                $(json.targetObject).hide();
                $(json.el).removeClass('silder_toggle_active');
                $(json.el).attr('move-open-state',0);
                setTimeout(function () {
                    $(document).unbind('click');
                }, 1);
            });
        }, 1);
    });

}


var promptTextTimers;
function promptText(el,text) {
    //console.log(el)

    $(el).parent().css('border-color','transparent');
    $('.err_promp').remove();

    $(el).parent().css('border-color','red');
    $(el).parent().append('<b class="err_promp">'+text+'</b>');
    clearTimeout(promptTextTimers);
    promptTextTimers = setTimeout(function () {
        $(el).parent().css('border-color','transparent');
        $('.err_promp').remove();
        //console.log(1)
    },1500);
}
//input 验证
function checkSingUpForms(_this,PARENTS) {


    if (_this.parents(PARENTS).find(".username").val() == '' || _this.parents(PARENTS).find(".username").val() == '您的称呼') {
        promptText(_this.parents(PARENTS).find(".username"),"您的称呼不能为空！");
        _this.parents(PARENTS).find(".username").focus();
        return false;
    }
    var reg = /^[\u4E00-\u9FA5]+$/;
    var username = _this.parents(PARENTS).find(".username").val();
    if (!reg.test(username)) {
        promptText(_this.parents(PARENTS).find(".username"),"称呼必须是中文！");
        _this.parents(PARENTS).find(".username").focus();
        return false;
    }
    if (_this.parents(PARENTS).find(".username").val().replace(/[^x00-xff]/g, "**").length > 20) {
        promptText(_this.parents(PARENTS).find(".username"),"称呼保持在10个字以内！");
        _this.parents(PARENTS).find(".username").focus();
        return false;
    }
    if (_this.parents(PARENTS).find(".telephone").val() == '') {
        promptText(_this.parents(PARENTS).find(".telephone"),"您的电话不能为空！");
        _this.parents(PARENTS).find(".telephone").focus();
        return false;
    } else {
        var tel = /^1[3|4|5|7|8|9][0-9]\d{8}$/;
        if (!tel.test(_this.parents(PARENTS).find(".telephone").val())) {
            promptText(_this.parents(PARENTS).find(".telephone"),"您的电话输入有误，请重新填写！");
            _this.parents(PARENTS).find(".telephone").focus();
            return false;
        }
    }
    if (_this.parents(PARENTS).find(".selectBox select").val() == 0) {
        promptText(_this.parents(PARENTS).find(".selectBox"), "请选择所在城市！");
        return false;
    }
    if(!_this.parents(PARENTS).find(".deft_agre_state").prop('checked')){
        promptText(_this.parents(PARENTS).find(".deft_agre_state"), "请认真阅读用户协议，如已阅读请勾选！");
        return false;
    }
    return true;
}
// setCookie
function setCookie(key, value, t) {
    var oDate = new Date();
    oDate.setDate(oDate.getDate() + t);
    document.cookie = key + '=' + value + ';expires=' + oDate.toGMTString();
}

//return cookie value
function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=")
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1
            c_end = document.cookie.indexOf(";", c_start)
            if (c_end == -1) c_end = document.cookie.length
            return unescape(document.cookie.substring(c_start, c_end))
        }
    }
    return ""
}

//remove cookie
function removeCookie(name) {
    setCookie(name, 1, -1);
}
// scale image
function scaleImgCenter(imgs) {
    for (var i = 0; i < imgs.length; i++) {
        (function (i) {
            var img = new Image();
            img.src = imgs[i].src;
            var _this = imgs[i];
            img.onload = function () {
                function getImgAttribute(){
                    var boxW = parseFloat($(_this).parent().css('width').match(/\d+/g)); //鍖哄煙瀹藉害
                    var boxH = parseFloat($(_this).parent().css('height').match(/\d+/g)); //鍖哄煙楂樺害
                    var img = new Image();
                    img.src = _this.src;
                    var imgW = img.width;
                    var imgH = img.height;

                    var imgleft = -(boxH * imgW / imgH - boxW) / 2;
                    var imgtop = -(boxW * imgH / imgW - boxH) / 2;

                    ////console.log(boxW+'  '+boxH+' imgwidthheight '+imgW+'---'+imgH+' marginlefttop '+imgleft+'---'+imgtop);
                    return {
                        left:imgleft,
                        top:imgtop,
                        imgw:imgW,
                        imgh:imgH,
                        boxw:boxW,
                        boxh:boxH
                    }
                }
                var imgAttr = getImgAttribute();
                if(imgAttr.imgw < 50)return false;
                if (imgAttr.imgw > imgAttr.imgh) {
                    _this.style.height = '100%';
                    _this.style.marginLeft = imgAttr.left + 'px';
                } else {
                    _this.style.width = '100%';
                    _this.style.marginTop = imgAttr.top + 'px';
                }
            };
        })(i);
    }
}