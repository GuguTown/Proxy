$(document).ready(function(e) {
function FLASHbeach() {
    'use strict';
    var xingshaflashremainder = 0;
    var flashbyxingshaNUM = 0;
    if(FM_getValue('flashbyxingshaNUM')!=null){
        flashbyxingshaNUM = FM_getValue('flashbyxingshaNUM');
    }

    var flashbyxingshaNUMbox = document.createElement("div")
    flashbyxingshaNUMbox.setAttribute('style',"display: inline-block;float: right!important;");

    let flashbyxingshaNUMlabel = document.createElement('i');
    flashbyxingshaNUMlabel.innerText = "使用贝壳刷新次数：";
    flashbyxingshaNUMbox.appendChild(flashbyxingshaNUMlabel);

    let flashbyxingshaNUMInput = document.createElement('input');
    flashbyxingshaNUMInput.setAttribute('type','text');
    flashbyxingshaNUMInput.setAttribute('oninput',"value=value.replace(/[^\\d]/g,'')");
    flashbyxingshaNUMInput.setAttribute('style',"width: 40px;margin-right:15px;");
    flashbyxingshaNUMInput.value = flashbyxingshaNUM;
    flashbyxingshaNUMInput.onchange = function(){
        var localNUM = parseInt(flashbyxingshaNUMInput.value);
        if(isNaN(localNUM)){
            flashbyxingshaNUM = 0;
        }else{
            if(localNUM>2){
                localNUM = 2;
            }else if(localNUM<0){
                localNUM = 0;
            }
            flashbyxingshaNUM = localNUM;
        }
        FM_setValue('flashbyxingshaNUM',flashbyxingshaNUM );
    };
    flashbyxingshaNUMbox.appendChild(flashbyxingshaNUMInput);
    $(".btn-group.pull-right").after(flashbyxingshaNUMbox)




    var mydiv = $(".row>.row>.col-md-12>.panel>.panel-heading>.pull-right")[0];
    var text = mydiv.textContent
    if(!text.startsWith("距离下次随机装备")){
        alert("咕咕镇沙滩自动刷新脚本未获取到时间！");
        return;
    }
    var patt1 = /\d+/;
    var minute = text.match(patt1)
    minute = parseInt(minute[0]) + 1
    setTimeout(async function(){
        await getstpage()
        await getstdata()
        for(var i = 0;i < flashbyxingshaNUM ; i++){
            await sxstbyxs()
            await getstpage()
            await getstdata()
        }
        unsafeWindow.location.reload();
    }, minute*60*1000);
    mydiv.textContent = text + " 将自动刷新"

}

var user = document.getElementsByClassName('fyg_colpz06 fyg_f24')[0].innerText

function FM_setValue(name, value){
    let oldvalue;
    if(localStorage.getItem(user)){
        oldvalue = JSON.parse(localStorage.getItem(user));
    };
    if(oldvalue === undefined){
        oldvalue = {};}
    oldvalue[name] = value;
    localStorage.setItem(user,JSON.stringify(oldvalue));
}

function FM_getValue(name, defaultValue){
    let thisvalue;
    if(localStorage.getItem(user)){
        thisvalue = JSON.parse(localStorage.getItem(user));
    };
    if(thisvalue != undefined&&name in thisvalue){
        return thisvalue[name]
    }
    if(defaultValue != null){
        return defaultValue;
    }
    return null;
}

function getPostData(p1,p2){
    let data = -1;
    for(let s of document.getElementsByTagName('script')){
        let func = s.innerText.match(p1)
        if(func!=null){
            data = func[0].match(p2)[0];
            break;
        }
    }
    return data
}

function get_saveid(){
    return getPostData(/gx_sxst\(\)\{[\s\S]*\}/m,/data: ".*"/).slice(-7,-1);
}

function getstpage(){
    return new Promise((resolve, reject)=>{
        $.ajax({ url: window.location.origin + "/fyg_beach.php", type: 'GET', contentType: 'application/x-www-form-urlencoded; charset=UTF-8', processData: false, })
            .done(data => { if (data.ret == 200) { resolve(data.responseText) }else { console.log(data);reject(); }})
            .fail(data => { console.log(data);reject();});
    })
}

function getstdata(){
    return new Promise((resolve, reject)=>{
        $.ajax({ url: window.location.origin + "/fyg_read.php", type: 'POST', contentType: 'application/x-www-form-urlencoded; charset=UTF-8', data:"f=1",processData: false, })
            .done(data => { if (data.ret == 200) { console.log(data.responseText);resolve(data.responseText) }else { console.log(data);reject(); }})
            .fail(data => { console.log(data);reject();});
    })
}

function sxstbyxs(){
    return new Promise((resolve, reject)=>{
        $.ajax({ url: window.location.origin + "/fyg_click.php", type: 'POST', contentType: 'application/x-www-form-urlencoded; charset=UTF-8', data:"c=12&safeid=" + get_saveid(),processData: false, })
            .done(data => { if (data.ret == 200) { console.log(data.responseText);resolve(data.responseText) }else { console.log(data);reject(); }})
            .fail(data => { console.log(data);reject();});
    })
}

FLASHbeach();
Window.FM_getValue = FM_getValue;
});
