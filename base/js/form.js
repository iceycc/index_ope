var _uid = getcookie('_uid');
var modelid = getcookie('modelid');
if(modelid==11) {
    $("#uz_center").html('商户中心');
    $("#nouser").addClass('hide');
} else {
    $("#myorders").removeClass('hide');
    $("#nouser").removeClass('hide');
}
if (_uid != null) {
    $("#mylogined").removeClass('hide');
    $("#mylogin").addClass('hide');
    var _username = decodeURI(getcookie('truename'));
    $("#myname").html(_username);
}

function linkage_ajax(myid) {
    return;
    var urls = web_url + 'index.php?';
    $.getJSON(urls, {
        'm': 'linkage',
        'f': 'json',
        'v': 'linkage_box',
        'pid': myid,
        'dtype': 'jsonp',
        '_': new Date().getTime()
    }, function (data) {
        if (data) {
            $("#LK1_2").empty();
            $.each(data, function (i, item) {
                $("#LK1_2").append("<option value='"+item['lid']+"'>"+item['name']+"</option>");
            });
            rSelects2();

            console.log(data);
        }
    });
}

function checkzx() {
    if($("#title").val()=='' || $("#title").val()=='您的称呼') {
        uzAlert2("basic-alert","表单校验","您的称呼不能为空！");
        $("#title").focus();
        return false;
    }
    var reg = /^[\u4E00-\u9FA5]+$/;
    var title = $("#title").val();
    if(!reg.test(title)){
        uzAlert2("basic-alert","表单校验","称呼必须是中文！");
        $("#title").focus();
        return false;
    }
    if($("#telephone").val()=='') {
        uzAlert2("basic-alert","表单校验","您的电话不能为空！");
        $("#telephone").focus();
        return false;
    } else {
        var tel = /^1\d{10}$/;
        if(!tel.test($("#telephone").val())) {
            uzAlert2("basic-alert","表单校验","您的电话输入有误，请重新填写！");
            $("#telephone").focus();
            return false;
        }
    }
    if($("#LK1_1").val()==0) {
        uzAlert2("basic-alert","表单校验","请选择所在城市！");
        return false;
    }
    if($("#LK1_2").val()==0) {
        uzAlert2("basic-alert","表单校验","请选择所在区！");
        return false;
    }
    $.post(web_url +"index.php?m=member&f=fbform&v=public_apply", { title: $("#title").val(),telephone:$("#telephone").val(),LK1_1:$("#LK1_1").val(),LK1_2:$("#LK1_2").val(),source:$("#source").val()},
        function(data){
            if(data=='您的装修需求已收到，我们的客服人员会尽快联系您，请耐心等待。') {
                var basic_title = '请耐心等待！';
            } else {
                var basic_title = '恭喜您申请成功！';
            }
            uzAlert("basic-alert",basic_title,data+'<br><input class="strong-btn" type="button" value="确定" onclick="closeAlert();">');

            $("#title").val('');
            $("#telephone").val('');
        });
    return false;
}