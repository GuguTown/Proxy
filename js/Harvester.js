window.onload=function() {
   (function(o) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], o) : o(jQuery)
}
)(function(o) {
    var t, i = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], e = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], n = new Date, p = n.getFullYear(), l = n.getMonth(), a = n.getDate(), u = n.getHours(), v = n.getMinutes(), s = null, r = {
        type: "date",
        background: "#494a4a"
    }, c = !1;
    o.extend(o.fn, {
        datetime: function(d) {
            return this.each(function() {
                function h() {
                    var t = o('<div class="dateTimeWrap"><div class="datePart"><div class="dateTimeHead"><span year="2019" month="7" id="dateTime"><select class="year" name="yearSelect" id="yearSelect"><option value="1920">1920年</option><option value="1921">1921年</option><option value="1922">1922年</option><option value="1923">1923年</option><option value="1924">1924年</option><option value="1925">1925年</option><option value="1926">1926年</option><option value="1927">1927年</option><option value="1928">1928年</option><option value="1929">1929年</option><option value="1930">1930年</option><option value="1931">1931年</option><option value="1932">1932年</option><option value="1933">1933年</option><option value="1934">1934年</option><option value="1935">1935年</option><option value="1936">1936年</option><option value="1937">1937年</option><option value="1938">1938年</option><option value="1939">1939年</option><option value="1940">1940年</option><option value="1941">1941年</option><option value="1942">1942年</option><option value="1943">1943年</option><option value="1944">1944年</option><option value="1945">1945年</option><option value="1946">1946年</option><option value="1947">1947年</option><option value="1948">1948年</option><option value="1949">1949年</option><option value="1950">1950年</option><option value="1951">1951年</option><option value="1952">1952年</option><option value="1953">1953年</option><option value="1954">1954年</option><option value="1955">1955年</option><option value="1956">1956年</option><option value="1957">1957年</option><option value="1958">1958年</option><option value="1959">1959年</option><option value="1960">1960年</option><option value="1961">1961年</option><option value="1962">1962年</option><option value="1963">1963年</option><option value="1964">1964年</option><option value="1965">1965年</option><option value="1966">1966年</option><option value="1967">1967年</option><option value="1968">1968年</option><option value="1969">1969年</option><option value="1970">1970年</option><option value="1971">1971年</option><option value="1972">1972年</option><option value="1973">1973年</option><option value="1974">1974年</option><option value="1975">1975年</option><option value="1976">1976年</option><option value="1977">1977年</option><option value="1978">1978年</option><option value="1979">1979年</option><option value="1980">1980年</option><option value="1981">1981年</option><option value="1982">1982年</option><option value="1983">1983年</option><option value="1984">1984年</option><option value="1985">1985年</option><option value="1986">1986年</option><option value="1987">1987年</option><option value="1988">1988年</option><option value="1989">1989年</option><option value="1990">1990年</option><option value="1991">1991年</option><option value="1992">1992年</option><option value="1993">1993年</option><option value="1994">1994年</option><option value="1995">1995年</option><option value="1996">1996年</option><option value="1997">1997年</option><option value="1998">1998年</option><option value="1999">1999年</option><option value="2000">2000年</option><option value="2001">2001年</option><option value="2002">2002年</option><option value="2003">2003年</option><option value="2004">2004年</option><option value="2005">2005年</option><option value="2006">2006年</option><option value="2007">2007年</option><option value="2008">2008年</option><option value="2009">2009年</option><option value="2010">2010年</option><option value="2011">2011年</option><option value="2012">2012年</option><option value="2013">2013年</option><option value="2014">2014年</option><option value="2015">2015年</option><option value="2016">2016年</option><option value="2017">2017年</option><option value="2018">2018年</option><option value="2019">2019年</option><option value="2020">2020年</option><option value="2021">2021年</option><option value="2022">2022年</option><option value="2023">2023年</option><option value="2024">2024年</option><option value="2025">2025年</option><option value="2026">2026年</option><option value="2027">2027年</option><option value="2028">2028年</option><option value="2029">2029年</option><option value="2030">2030年</option><option value="2031">2031年</option><option value="2032">2032年</option><option value="2033">2033年</option><option value="2034">2034年</option><option value="2035">2035年</option><option value="2036">2036年</option><option value="2037">2037年</option><option value="2038">2038年</option><option value="2039">2039年</option><option value="2040">2040年</option><option value="2041">2041年</option><option value="2042">2042年</option><option value="2043">2043年</option><option value="2044">2044年</option><option value="2045">2045年</option><option value="2046">2046年</option><option value="2047">2047年</option><option value="2048">2048年</option><option value="2049">2049年</option><option value="2050">2050年</option></select><select class="month" name="monthSelect" id="monthSelect"><option value="0">一月</option><option value="1">二月</option><option value="2">三月</option><option value="3">四月</option><option value="4">五月</option><option value="5">六月</option><option value="6">七月</option><option value="7">八月</option><option value="8">九月</option><option value="9">十月</option><option value="10">十一月</option><option value="11">十二月</option></select></span><div class="changeMonth"><span id="pre"><</span> <span id="next">></span></div></div><div><ul><li>日</li><li>一</li><li>二</li><li>三</li><li>四</li><li>五</li><li>六</li></ul><ul id="dayDat"></ul></div><div class="dateTimeFoot"><span class="selTime">选择时间</span><span id="close">关闭</span><span id="selcurday">今天</span></div></div><div class="timePart" style="display:none"><ul><li id="selHour"><p>时</p><ol></ol></li><li id="selMinute"><p>分</p><ol></ol></li></ul><div class="timeFooter"><span class="selTime">选择日期</span><span id="ensure">确定</span><span id="curTime">当前时间</span></div></div></div>');
                    o("body").append(t),
                        c = !0
                }
                function m(o, t) {
                    var i = new Date(t,o,1);
                    return i.getDay()
                }
                function f(o, t) {
                    var n = t % 4
                    , p = t % 100
                    , l = t % 400;
                    return 0 == n && 0 != p || 0 == l ? i[o] : e[o]
                }
                function g() {
                    var activedate = o.extend(!0, {}, r, d).active
                    var t = ""
                    , i = f(l, p);
                    a > i && (a = i);
                    for (var e, n = m(l, p), u = 0; u < n; u++)
                        t += "<li></li>";
                    for (u = 1; u <= i; u++){
                        var thisdatestring = p+"/"+(l+1)+"/"+u;
                        if(activedate.includes(thisdatestring)){
                            e = u == a ? 'curDay' : "",
                                t += '<li class="active ' + e + '">' + u + "</li>";
                        }else{
                            e = u == a ? 'curDay' : "",
                                t += '<li class="inactive ' + e + '">' + u + "</li>";
                        }
                    }
                    o("#dayDat").html(t)
                }
                function y() {
                    for (var t = "", i = "", e = 0; e < 24; e++)
                        e < 10 && (e = "0" + e),
                            t += e == u ? "<li class='cur'>" + e + "</li>" : "<li>" + e + "</li>";
                    for (e = 0; e < 60; e++)
                        e < 10 && (e = "0" + e),
                            i += e == v ? "<li class='cur'>" + e + "</li>" : "<li>" + e + "</li>";
                    o("#selHour ol").html(t),
                        o("#selMinute ol").html(i)
                }
                function T() {
                    o(".dateTimeWrap").show();
                    var i = t.type;
                    if ("date" != i) {
                        y(),
                            o(".datePart").hide().siblings(".timePart").show();
                        var e = o("#selHour .cur");
                        o("#selHour ol").scrollTop(e.offset().top - o("#selHour ol").offset().top + o("#selHour ol").scrollTop() - e.outerHeight());
                        var n = o("#selMinute .cur");
                        o("#selMinute ol").scrollTop(n.offset().top - o("#selMinute ol").offset().top + o("#selMinute ol").scrollTop() - n.outerHeight())
                    }
                    "time" != i && (g(),
                                    o(".datePart").show().siblings(".timePart").hide(),
                                    o("#yearSelect").val(p),
                                    o("#monthSelect").val(l)),
                        "datetime" == i ? o(".selTime").show() : o(".selTime").hide()
                }
                function M() {
                    var o = t.type
                    , i = t.value
                    , e = !0;
                    return i && i.length > 0 && ("datetime" == o && (5 != i.length || i[0] > 2050 || i[0] < 1920 || i[1] > 12 || i[1] < 1 || i[2] > 31 || i[2] < 1 || i[3] > 23 || i[3] < 1 || i[4] > 59 || i[4] < 1) && (e = !1),
                                                 "date" == o && (3 != i.length || i[0] > 2050 || i[0] < 1920 || i[1] > 12 || i[1] < 1 || i[2] > 31 || i[2] < 1) && (e = !1),
                                                 "time" == o && (2 != i.length || i[0] > 23 || i[0] < 1 || i[1] > 59 || i[1] < 1) && (e = !1)),
                        e
                }
                function P() {
                    var i, e, n = t.type;
                    (i = "date" == n ? p + "-" + (parseInt(l) + 1) + "-" + a : "time" == n ? u + ":" + v : p + "-" + (parseInt(l) + 1) + "-" + a + " " + u + ":" + v,
                     s.val(i),
                     o(".dateTimeWrap").hide(),
                     t.success && "function" == typeof t.success) && (e = "date" == n ? p+"/"+(parseInt(l) + 1)+"/"+parseInt(a) : "time" == n ? [u, v] : [p+"/"+( parseInt(l) + 1)+ parseInt(a)+"/"+u+"/"+v],
                                                                      t.success(e))
                }
                var S = o(this);
                t = o.extend(!0, {}, r, d),
                    c || h(),
                    o("#selcurday,#close,#dayDat,.changeMonth span,.selTime").unbind("click"),
                    o("#yearSelect,#monthSelect").unbind("change"),
                    o("#yearSelect,#monthSelect").change(function() {
                    l = o("#monthSelect").val(),
                        p = o("#yearSelect").val(),
                        g()
                }),
                    o(".changeMonth span").click(function() {
                    "pre" == this.id ? (l -= 1,
                                        -1 == l && (l = 11,
                                                    p -= 1)) : (l += 1,
                                                                12 == l && (l = 0,
                                                                            p += 1)),
                        g(),
                        o("#yearSelect").val(p),
                        o("#monthSelect").val(l)
                }),
                    o("#selcurday").click(function() {
                    var i = new Date;
                    p = i.getFullYear(),
                        l = i.getMonth(),
                        a = i.getDate(),
                        g(),
                        o("#yearSelect").val(p),
                        o("#monthSelect").val(l),
                        "datetime" != t.type ? P() : o(".datePart").hide().siblings(".timePart").show()
                }),
                    o("#close").click(function() {
                    o(".dateTimeWrap").hide()
                }),
                    o("#dayDat").on("click", ".active", function() {
                    a = o(this).html(),
                        "datetime" != t.type ? P() : o(".datePart").hide().siblings(".timePart").show()
                }),
                    o(".selTime").click(function() {
                    "选择时间" == o(this).html() ? o(".datePart").hide().siblings(".timePart").show() : o(".datePart").show().siblings(".timePart").hide()
                }),
                    o(".timePart ol,.timeFooter #ensure,.timeFooter #curTime").unbind("click"),
                    o(".timePart ol").on("click", "li", function() {
                    o(this).addClass("cur").siblings("li").removeClass("cur");
                    var t = o(this).parent();
                    t.animate({
                        scrollTop: o(this).offset().top - t.offset().top + t.scrollTop() - o(this).outerHeight()
                    }, 100)
                }),
                    o(".timeFooter #ensure").click(function() {
                    u = o("#selHour ol .cur").html(),
                        v = o("#selMinute ol .cur").html(),
                        P(),
                        o(".dateTimeWrap").hide()
                }),
                    o(".timeFooter #curTime").click(function() {
                    u = n.getHours(),
                        v = n.getMinutes(),
                        parseInt(u) < 10 && (u = "0" + u),
                        parseInt(v) < 10 && (v = "0" + v),
                        y(u, v),
                        P()
                }),
                    S.click(function() {
                    if (t = o.extend(!0, {}, r, d),
                        !M())
                        return alert("参数错误"),
                            !1;
                    var i = this.value;
                    if (i) {
                        i = i.replace(/-/g, "/");
                        var e = new Date(i)
                        }
                    "date" == t.type ? this.value ? (l = e.getMonth(),
                                                     p = e.getFullYear(),
                                                     a = e.getDate()) : (l = t.value[1] - 1,
                                                                         p = t.value[0],
                                                                         a = t.value[2]) : "time" == t.type ? this.value ? (u = this.value.split(":")[0],
                                                                                                                            v = this.value.split(":")[1]) : (v = t.value[1],
                    u = t.value[0]) : this.value ? (l = e.getMonth(),
                                                    p = e.getFullYear(),
                                                    a = e.getDate(),
                                                    u = e.getHours(),
                                                    v = e.getMinutes()) : (l = t.value[1] - 1,
                                                                           p = t.value[0],
                                                                           a = t.value[2],
                                                                           v = t.value[4],
                                                                           u = t.value[3]),
                        s = o(this),
                        T();
                    var n = S.offset().left
                    , c = S.offset().top - 4*S.outerHeight();
                    o(".dateTimeWrap").css({
                        background: t.background,
                        top: c,
                        left: n
                    })
                })
            }),
                this
        }
    })
});

function fyg_pk_html() {
    'use strict';
    console.log("fyg_pk_html init")
    var debugmode = false;
    var ctx = document.createElement("battleCountChart");
    var goxpanel= document.createElement('div');
    var goxpanelExtend= document.createElement('div');
    var goxpanelbottom= document.createElement('div');
    var detaillogpanel = document.createElement('div');
    var mask = document.createElement('div');
    var BattleLog = {}
    if(FM_getValue("BattleLog")!=null){
        console.log("BattleLog load")
        BattleLog = FM_getValue("BattleLog");
    }
    window.BattleLog = BattleLog;

    var showSM = true;
    var showcharlv = true;
    if(localStorage.getItem('showSM')!==null){
        showSM = eval(localStorage.getItem('showSM'));
    }
    if(localStorage.getItem('showcharlv')!==null){
        showcharlv = eval(localStorage.getItem('showcharlv'));
    }


    var goxing = false;
    var gx_sxdsing = false;
    var mainHost = "https://bbs.kfpromax.com/"
    if(localStorage.getItem('mainHost')!==null){
        mainHost = localStorage.getItem('mainHost');
    }

    var autogox=false;
    var timetogoxflag=false;
    var maxap=999;
    var maxrank=999;
    if(localStorage.getItem('maxap')!==null){
        maxap = parseInt(localStorage.getItem('maxap'));
    }
    if(localStorage.getItem('maxrank')!==null){
        maxrank = parseInt(localStorage.getItem('maxrank'));
    }


    var autoreStaminaing = false;

    //var audio = new Audio("https://cdnringhlt.shoujiduoduo.com/ringres/user/a24/564/9246564.aac");
    //audio.load();

    var Num = 0;
    var goxNum = 0;
    var beike=0;
    var jingyan=0;
    if(localStorage.getItem('flashtime')===null){
        localStorage.setItem('flashtime',10 );
    }
    var maxtime = 10;

    maxtime = parseInt(localStorage.getItem('flashtime'));
    var time = maxtime;
    var myrank = -100;
    var myap=-100;
    var changeLog = [];
    window.changeLog = changeLog;

    //-----------------------------------------------------------------------------------
    var autoconfigcheckboxdiv= document.createElement('div');
    let autoconfigcheckbox = document.createElement('input');
    autoconfigcheckbox.setAttribute('type','checkbox');
    autoconfigcheckboxdiv.appendChild(autoconfigcheckbox);

    let autoconfigcheckboxtext = document.createElement('i');
    autoconfigcheckboxtext.innerText = "自动搜刮";
    autoconfigcheckboxtext.setAttribute('style',"margin-right:20px;");
    autoconfigcheckboxtext.setAttribute('class',"smalldiv");
    autoconfigcheckboxdiv.appendChild(autoconfigcheckboxtext);

    //-----------------------------------------------------------------------------------
    var automakecheckboxdiv= document.createElement('div');
    let automakecheckbox = document.createElement('input');
    automakecheckbox.setAttribute('type','checkbox');
    automakecheckbox.addEventListener('change',function(){
        g_ismake = automakecheckbox.checked
        localStorage.setItem('g_ismake',g_ismake?"true":"false" );
    });
    automakecheckboxdiv.appendChild(automakecheckbox);

    let automakecheckboxtext = document.createElement('i');
    automakecheckboxtext.innerText = "自动搜刮前自动制造";
    automakecheckboxtext.setAttribute('style',"margin-right:20px;");
    automakecheckboxtext.setAttribute('class',"smalldiv");
    automakecheckboxdiv.appendChild(automakecheckboxtext);

    let automakeselect= document.createElement('select');
    var varItem = new Option("不生成宝石",0); //data正好等于index，虽然乐的轻松，但说不定以后会出bug
    automakeselect.options.add(varItem);
    var varItem1 = new Option("红石",1);
    automakeselect.options.add(varItem1);
    var varItem2 = new Option("银石",2);
    automakeselect.options.add(varItem2);
    var varItem3 = new Option("金石",3);
    automakeselect.options.add(varItem3);
    var varItem4 = new Option("梦石",4);
    automakeselect.options.add(varItem4);
    var varItem5 = new Option("虚石",5);
    automakeselect.options.add(varItem5);
    var varItem6 = new Option("幻石",6);
    automakeselect.options.add(varItem6);
    automakeselect.addEventListener('change',function(){
        g_gemid = automakeselect.value
        localStorage.setItem('g_gemid',g_gemid );
    });
    automakecheckboxdiv.appendChild(automakeselect);

    let brdiv = document.createElement('br');
    //automakecheckboxdiv.appendChild(brdiv);

    let manualmakecheckbox = document.createElement('input');
    manualmakecheckbox.setAttribute('type','checkbox');
    manualmakecheckbox.addEventListener('change',function(){
        g_ismanualmake = manualmakecheckbox.checked
        localStorage.setItem('g_ismanualmake',g_ismanualmake?"true":"false" );
        alert("刷新网页后生效！")
    });
    //automakecheckboxdiv.appendChild(manualmakecheckbox);

    let manualmakecheckboxtext = document.createElement('i');
    manualmakecheckboxtext.innerText = "手动搜刮前自动制造";
    manualmakecheckboxtext.setAttribute('style',"margin-right:20px;");
    manualmakecheckboxtext.setAttribute('class',"smalldiv");
    //automakecheckboxdiv.appendChild(manualmakecheckboxtext);

    //----------------------------------------------------------------------------------
    let autoconfig = document.createElement('div');

    let autoconfigranklabel = document.createElement('i');
    autoconfigranklabel.innerText = "进度不低于：";
    autoconfig.appendChild(autoconfigranklabel);

    let autoconfigrank = document.createElement('input');
    autoconfigrank.setAttribute('type','text');
    autoconfigrank.setAttribute('oninput',"value=value.replace(/[^\\d]/g,'')");
    autoconfigrank.setAttribute('style',"width: 40px;margin-right:15px;");
    autoconfigrank.value = maxrank;
    autoconfigrank.onchange = function(){
        maxrank = autoconfigrank.value;
        autoconfigcheckbox.checked = false;
        localStorage.setItem('maxrank',maxrank );
    };
    autoconfig.appendChild(autoconfigrank);

    let autoconfigaplabel = document.createElement('i');
    autoconfigaplabel.innerText = "体力不低于：";
    autoconfig.appendChild(autoconfigaplabel);

    let autoconfigap = document.createElement('input');
    autoconfigap.setAttribute('type','text');
    autoconfigap.setAttribute('oninput',"value=value.replace(/[^\\d]/g,'')");
    autoconfigap.setAttribute('style',"width: 40px;margin-right:15px;");
    autoconfigap.value=maxap;
    autoconfigap.onchange = function(){
        maxap = autoconfigap.value;
        autoconfigcheckbox.checked = false;
        localStorage.setItem('maxap',maxap );
    };
    autoconfig.appendChild(autoconfigap);

    let br = document.createElement('br');
    autoconfig.appendChild(br);

    //------------------------------------------------------------------------------------

    let autoreStaminacheckbox = document.createElement('input');
    autoreStaminacheckbox.setAttribute('type','checkbox');
    autoconfig.appendChild(autoreStaminacheckbox);

    let autoreStaminacheckboxtext = document.createElement('i');
    autoreStaminacheckboxtext.innerText = "自动消耗星沙回体";
    autoreStaminacheckboxtext.setAttribute('style',"margin-right:20px;");
    autoreStaminacheckboxtext.setAttribute('class',"smalldiv");
    autoconfig.appendChild(autoreStaminacheckboxtext);

    //----------------------------------------------------------------------------------

    let progresschange = document.createElement('div');  //显示log
    progresschange.setAttribute('id','progresschange');
    progresschange.setAttribute('class','panel-body');

    //----------------------------------------------------------------------------------

    var g_ismake = false;
    if(localStorage.getItem('g_ismake')!==null){
        g_ismake = localStorage.getItem('g_ismake') == "true";
        automakecheckbox.checked = g_ismake
    }
    var g_ismanualmake = false;
    if(localStorage.getItem('g_ismanualmake')!==null){
        g_ismanualmake = localStorage.getItem('g_ismanualmake') == "true";
        manualmakecheckbox.checked = g_ismanualmake
    }
    /*    if(g_ismanualmake){
        window.gox =
    }*/
    var g_saveid = get_saveid();
    var g_gemid = -1;
    if(localStorage.getItem('g_gemid')!==null){
        g_gemid = parseInt(localStorage.getItem('g_gemid'));
        automakeselect.options[g_gemid].selected = true;
    }
    var g_makeequiping = false;
    var g_makecarding = false;
    var g_makegeming = false;

    var gx_sxds_stopday = ""

    //---------------------------------------------------------

    function setflashtime(){
        var newtime = parseInt(prompt("新的刷新间隔：(填0则禁止刷新)",maxtime));
        if(!isNaN(newtime)&&newtime>0){
            localStorage.setItem('flashtime',newtime );
            maxtime = newtime;
            time = newtime;
            return;
        }
        if(!isNaN(newtime)&&newtime<=0){
            localStorage.setItem('flashtime',newtime );
            maxtime = -1;
        }
    }

    function setmainHost(){
        var newmainHost = prompt("格式如https://bbs.kfmax.com/（填0则不获取对手系数）",mainHost);
        if(newmainHost!=null&&newmainHost!=""){
            localStorage.setItem('mainHost',newmainHost );
            mainHost = newmainHost;
        }
        show_battle_log("主站域名:"+mainHost)
    }

    function getNowtime(){
        var date=getLocDate();
        var datetext = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
        return datetext;
    }

    function dlog(text){
        if(debugmode){console.log(text)}
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

    function postRequest(){
         $.ajax({ url: window.location.origin + "/fyg_read.php", type: 'POST', contentType: 'application/x-www-form-urlencoded; charset=UTF-8',data: 'f=12', processData: false, })
            .done(response => {
             Num++;
                let newrank = parseInt(response.match(/class="fyg_colpz02" style="font-size:32px;font-weight:900;">[0-9]+%</)[0].match(/[0-9]+%/)[0]);
                let newap = parseInt(response.match(/class="fyg_colpz03" style="font-size:32px;font-weight:900;">[0-9]+</)[0].match(/>[0-9]+</)[0].slice(1,-1));
                if(myrank == -100){
                    myrank = newrank;
                }
                else if(newrank != myrank){
                    document.getElementsByClassName('fyg_colpz02')[0].innerText = newrank + "%";
                    appendChangeLogText(myrank+"%->"+newrank + "%")
                    myrank = newrank;
                    //audio.play();
                }
                if(myap == -100){
                    myap = newap;
                }
                else if(newap != myap){
                    document.getElementsByClassName('fyg_colpz03')[0].innerText = newap;
                    myap = newap;
                }
                if(((autoconfigcheckbox.checked&&newap>=maxap&&newrank>=maxrank)||timetogoxflag)&&(newap>=10&&newrank>=1&&goxing==false)){
                    maxtime = 1;
                    time = 1;
                    goxing = true;
                    get_gemData()
                }else if(autoconfigcheckbox.checked&&autoreStaminacheckbox.checked&&!autoreStaminaing&&newrank>=1&&newap>=maxap&&newrank>=maxrank&&goxing==false&&gx_sxdsing==false&&!issxdsstop()){
                    gx_sxdsing = true;
                    gx_sxds();
                    maxtime = 1;
                    time = 1;
                }else{
                    maxtime = parseInt(localStorage.getItem('flashtime'));
                    time = maxtime;
                }
                progresschange.innerText = getChangeLogText();
         }).fail(data => { console.log(data);});

    }

    function mygox(){
        goxNum++;
        let gox_data = getPostData(/gox\(\)\{[\s\S]*\}/m,/data: ".*"/).slice(7,-1);
        $.ajax({ url: window.location.origin + "/fyg_click.php", type: 'POST', contentType: 'application/x-www-form-urlencoded; charset=UTF-8',data: gox_data, processData: false, })
            .done(response => {
                goxing = false;
                if(response.status === 200){
                    console.log(response);
                    if(response.indexOf('获得')!=-1){
                        var reg = /[0-9]+(?= 贝壳)/
                        var thisbeike = parseInt(response.match(reg)[0])
                        reg = /[0-9]+(?= 争夺经验)/
                        var thisjingyan = parseInt(response.match(reg)[0])
                        reg = /x .+?(?=<\/span>)/g
                        var thisinfolist = response.match(reg)
                        let info = "获得了 " + thisinfolist.toString()
                        let div_info = document.createElement('div');
                        div_info.innerText = info;
                        appendChangeLogText(info)
                        beike+=thisbeike;
                        jingyan+=thisjingyan;
                        document.getElementsByClassName('btn-outline-secondary')[0].parentNode.appendChild(div_info);
                    }
                    else{
                        let div_info = document.createElement('div');
                        div_info.innerText = '段位进度不足';
                        appendChangeLogText('段位进度不足,搜刮失败')
                        document.getElementsByClassName('btn-outline-secondary')[0].parentNode.appendChild(div_info);
                    }
                }
                else{
                    console.log('返回状态码非200')
                    appendChangeLogText( '返回状态码非200')
                    console.log(response);
                }
           }).fail(data => {
            goxing = false;
            console.log('发送搜刮请求出错');
            appendChangeLogText( '发送搜刮请求出错');
            console.log(data);
        });
    }

    function gox(){
        $("#pklist").toggleClass("loading");
        $.ajax({
            type: "POST",
            url: "fyg_click.php",
            data: "c=16&safeid=" + g_saveid,
            success: function(msg){
                $("#mymessagehtml").html(msg);
                $("#mymessage").modal('show', 'fit');
                pklist();
                $("#pklist").toggleClass("loading");
            }
        });
    }

    function read_rank(){
        if(maxtime <= 0){
            $("#goxtiptext").text("无刷新");
            return;
        }
        if(--time>0){
            $("#goxtiptext").text("刷新进度倒计时 "+time);
        }else{
            $("#goxtiptext").text("刷新进度倒计时 "+0);
            time = maxtime;
            postRequest();
        }
    }

    function getChangeLogText(){
        let LogText = "";
        LogText += "刷新次数: " +Num + "\n";
        LogText += "[搜刮次数: " +goxNum +"] [贝壳:"+beike+"] [经验:"+jingyan+ "]\n";
        if(changeLog.length == 0){
            LogText += "未出现进度变动"
        }
        else{
            for(var i = 0;i<changeLog.length;i++){
                LogText += changeLog[i] + "\n"
            }
        }
        return LogText;
    }
    function appendChangeLogText(text){
        changeLog.push(getNowtime() + " " + text)
    }

    function show_battle_log(text){
        $("#goxtipbottomtext").text(text);
    }

    $('head').append(`<style>
    @media (min-width: 0px) {
        .col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9 {
            float:left
        }
        .col-md-1 {
            width: 8.33333333%
        }
        .col-md-2 {
            width: 16.66666667%
        }
        .col-md-3 {
            width: 25%
        }
        .col-md-4 {
            width: 33.33333333%
        }
        .col-md-5 {
            width: 41.66666667%
        }
        .col-md-6 {
            width: 50%;
        }
        .col-md-7 {
            width: 58.33333333%
        }
        .col-md-8 {
            width: 66.66666667%
        }
        .col-md-9 {
            width: 75%
        }
        .col-md-10 {
            width: 83.33333333%
        }
        .col-md-11 {
            width: 91.66666667%
        }
        .col-md-12 {
            width: 100%
        }
        .col-md-push-0 {
            left: auto
        }
        .col-md-push-1 {
            left: 8.33333333%
        }
        .col-md-push-2 {
            left: 16.66666667%
        }
        .col-md-push-3 {
            left: 25%
        }
        .col-md-push-4 {
            left: 33.33333333%
        }
        .col-md-push-5 {
            left: 41.66666667%
        }
        .col-md-push-6 {
            left: 50%
        }
        .col-md-push-7 {
            left: 58.33333333%
        }
        .col-md-push-8 {
            left: 66.66666667%
        }
        .col-md-push-9 {
            left: 75%
        }
        .col-md-push-10 {
            left: 83.33333333%
        }
        .col-md-push-11 {
            left: 91.66666667%
        }
        .col-md-pull-0 {
            right: auto
        }
        .col-md-pull-1 {
            right: 8.33333333%
        }
        .col-md-pull-2 {
            right: 16.66666667%
        }
        .col-md-pull-3 {
            right: 25%
        }
        .col-md-pull-4 {
            right: 33.33333333%
        }
        .col-md-pull-5 {
            right: 41.66666667%
        }
        .col-md-pull-6 {
            right: 50%
        }
        .col-md-pull-7 {
            right: 58.33333333%
        }
        .col-md-pull-8 {
            right: 66.66666667%
        }
        .col-md-pull-9 {
            right: 75%
        }
        .col-md-pull-10 {
            right: 83.33333333%
        }
        .col-md-pull-11 {
            right: 91.66666667%
        }
        .col-md-offset-0 {
            margin-left: 0
        }
        .col-md-offset-1 {
            margin-left: 8.33333333%
        }
        .col-md-offset-2 {
            margin-left: 16.66666667%
        }
        .col-md-offset-3 {
            margin-left: 25%
        }
        .col-md-offset-4 {
            margin-left: 33.33333333%
        }
        .col-md-offset-5 {
            margin-left: 41.66666667%
        }
        .col-md-offset-6 {
            margin-left: 50%
        }
        .col-md-offset-7 {
            margin-left: 58.33333333%
        }
        .col-md-offset-8 {
            margin-left: 66.66666667%
        }
        .col-md-offset-9 {
            margin-left: 75%
        }
        .col-md-offset-10 {
            margin-left: 83.33333333%
        }
        .col-md-offset-11 {
            margin-left: 91.66666667%
        }
    }
    #chartParent{
    width:100%;
    max-width:1200px;
    height:80%;
        position:fixed;
    margin:auto;
    left:0;
    right:0;
    top:0;
    bottom:0;
    display:none;
        z-index:1000;
    }
    .tc_xs{
    overflow-x:hidden;
    width:100%;
    max-width:1200px;
    height:80%;
    //line-height:3rem;
    background:#fff;
    position:fixed;
    margin:auto;
    left:0;
    right:0;
    top:0;
    bottom:0;
    color:#666;
    border-radius:4px;
    display:none;
    z-index:1000;
    }
    #mask{
        display:none;
        width:100%;
        height:300%;
        position:absolute;
        top:0;
        left:0;
        z-index:2;
        background-color:#000;
        opacity:0.3;
        }
    #goxpanel{
    width:20%;
    height:60%;
    min-width:280px;
    line-height:3rem;
    background:#ddf3f5;
    position:fixed;
    //left:10%;
    //margin-left:-15%;
    top:15%;
    text-align:center;
    color:#fff;
    border-radius:4px;
        }
    #goxpanelExtend{
    width:20%;
    height:15%;
    min-width:280px;
    line-height:3rem;
    background:#ddf3f5;
    position:fixed;
    //left:10%;
    //margin-left:-15%;
    top:75%;
    text-align:center;
    color:#000;
    border-radius:4px;
    display:none;
        }
    .goxtip{
        width:100%;
        background-color: #3280fc;
        padding: 2px 10px;
        text-align: left;
        display: flex;
        justify-content: space-between;
    }
    #goxtip2{
    background-color: #3280aa;
    }
    .goxtip button,input,select,textarea {
    font-family: inherit;
    font-size: inherit;
    line-height:normal;
    }
    .goxtipbottom{
        position:absolute;
        bottom:10px;
    }
    .detaillogitem>div>h3>span{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: inline-block;
    text-align: left;
    }
    #goxtipinfo{
        color:#000;
        text-align: left;
        height: 90%;
    }
    .btn-details{
        width:30%
    }
    #goxpanel a{
    color:#FFF;
    }
    .battlelose>.nameandlevel {
    background-color: #ffe5e0 !important;
    }
    .nameandlevel{
    cursor:pointer;
    height:30px;
    margin:auto;
    color: #03a2b6;
    text-align: center;
    background-color:#ddf3f5;
    }
    .nameandlevel>h3{
    margin-top:5px;
    line-height: 200%;
    }
    #smallbar {
    position: absolute;
    right: 0px;
    height: 100%;
    width: 10px;
    text-align: center;
    display: flex;
    align-items:center;
    color: black;
    cursor:pointer;
    }
    #extendbar {
    position: absolute;
    bottom: 0px;
    height: 10px;
    width: 100%;
    line-height: 100%;
    color: black;
    cursor:pointer;
    }
 </style>`);
    function initgoxpanel(){
        $("body")[0].appendChild(goxpanel);
        $("body")[0].appendChild(goxpanelExtend);
        goxpanel.setAttribute('id','goxpanel');
        goxpanel.style.setProperty('max-width', (document.body.clientWidth-1300)/2+'px');
        goxpanel.innerHTML = '<div id="smallbar">&lt</div><div id="goxtip" class="goxtip"><a id="goxtiptext" title="设置刷新间隔"></a> </div>\
<div id="goxtip2" class="goxtip smalldiv"></div>\
<div id="goxtipinfo" class="smalldiv"></div><div id="goxtipbottom" class="goxtip goxtipbottom smalldiv">\
<input type="text" class="btn btn-details" placeholder="战斗历史" readonly="true" id="date"></div><div id="extendbar">∨</div>'
        //goxpanel.setAttribute('style','display: none;overflow-y:auto;');  ∧
        $("#goxtip").append(autoconfigcheckboxdiv)
        $("#goxtip2").append(automakecheckboxdiv)
        $("#goxtipinfo").append(autoconfig);
        $("#goxtipinfo").append(progresschange);
        progresschange.style.setProperty("overflow-y","auto");
        progresschange.style.setProperty("max-height","70%");

        $("#goxtiptext").click(setflashtime);
        $("#smallbar").click(dosmalldiv);
        show_battle_log("主站域名:"+mainHost)
        $("#goxtipbottomtext").click(setmainHost);

        $("#extendbar").click(function(){
            if($("#goxpanelExtend").css("display")=="none"){
                $("#extendbar").text("∧")
            }else{
                $("#extendbar").text("∨")
            }
            $("#goxpanelExtend").slideToggle(200);
        });
        goxpanelExtend.innerHTML =`<div>
        <input  value="30" id="TopDuring" style="width: 40px;">日内 遇到最多TOP</input>
        <input  value="15" id="TopNum" style="width: 40px;margin-right:15px;"></input>
        <input type="button" class="btn" value="查看" id="showTop"></input>
        </div>
        <div>
        <input type="checkbox" id="timetogoxcheckbox" style="width: 40px;"></input>
        在<input type="time" id="timetogoxtime"></input>后搜刮完残余体力
        </div>
        <div>
        <input type="checkbox" id="showSM" style="width: 20px;">记录显示系数</input>
        <span style="width:20px;display: inline-block;"></span>
        <input type="checkbox" id="showcharlv" style="width: 20px;">记录显示等级</input>
        </div>
        <div>
        <input type="button" class="btn" value="手动删除记录" id="deletelog"></input>
        </div>
        `
        goxpanelExtend.setAttribute('id','goxpanelExtend');
        goxpanelExtend.style.setProperty('max-width', (document.body.clientWidth-1300)/2+'px');

        $("#showTop").click(function(){
            var during = parseInt($("#TopDuring")[0].value)
            var num = parseInt($("#TopNum")[0].value)
            if(!(during>0)) return;
            if(!(num>0)) return;
            table_date_set(during,num)
            $("#chartParent").fadeIn();
            mask.style.display = "block";
        })

        $("body")[0].appendChild(mask);
        mask.setAttribute('id','mask');
        mask.addEventListener('click', function(){
            $(".tc_xs").fadeOut();
            $("#chartParent").fadeOut();
            mask.style.display = "none";
        })
        $("body")[0].appendChild(detaillogpanel);
        detaillogpanel.setAttribute('class','tc_xs');
        detaillogpanel.setAttribute('style','display: none;overflow-y:auto;');
        var now = getLocDate()
        $("#date").datetime({
            type: "date",
            value: [now.getFullYear(), now.getMonth()+1, now.getDate()],
            active:Object.keys(BattleLog),
            success: function (res) {
                detaillogpanelset(res)
                $(".tc_xs").fadeIn();
                mask.style.display = "block";
            }
        })

        $('#showSM').attr("checked", showSM);
        $("#showSM").change(function(){
            if (this.checked == true){
                showSM = true;
                localStorage.setItem('showSM',true );
            }else{
                showSM = false;
                localStorage.setItem('showSM',false );
            }
        })
        $('#showcharlv').attr("checked", showcharlv);
        $("#showcharlv").change(function(){
            if (this.checked == true){
                showcharlv = true;
                localStorage.setItem('showcharlv',true );
            }else{
                showcharlv = false;
                localStorage.setItem('showcharlv',false );
            }
        })

        $("#deletelog").click(function(){
            var dayss = parseInt(prompt("将多少天以前的战斗记录清除？\n警告：删除的记录无法恢复，假如填0将删除所有记录"))
            if(!isNaN(dayss)&&dayss>=0){
                autodeletelog(dayss)
                alert("清除完成")
            }else{
                alert("输入错误或取消操作")
            }
        })
    }

    function timetogoxloop(){//在xx时间后搜刮完残余体力
        var timetogoxtime=document.getElementById("timetogoxtime")
        var timetogoxcheckbox=document.getElementById("timetogoxcheckbox")

        var setttimeNumer = timetogoxtime.valueAsNumber
        var timetogoxcheckboxchecked = timetogoxcheckbox.checked

        var now = getLocDate()
        var nowNumber = now.getHours() * 60 * 60 * 1000 + now.getMinutes() * 60 * 1000

        if( timetogoxcheckboxchecked && nowNumber >= setttimeNumer && myap>=10&&myrank>=1 ){
            timetogoxflag = true;
        }else if(!timetogoxcheckboxchecked || nowNumber < setttimeNumer){
            timetogoxflag = false;
        }

        if(timetogoxflag && (myap<10||myrank<1)){
            timetogoxflag = false;
        }

        setTimeout(timetogoxloop,60*1000);
    }

    function detaillogpanelset(key){
        var text = '';
        var divtext = '<div class="detaillogitem {0}"><div class="nameandlevel"><h3><span style="width: 120px;">{1}</span>'+(showSM?'<span style="width: 70px;">{2}</span>':"")+(showcharlv?'<span style="width: 40px;">{3}</span><span style="width: 80px;">{4}</span>':'')+'</h3></div><div style="display:none;">{5}</div></div>';
        var olddivtext = '<div class="detaillogitem {0}"><div class="nameandlevel"><h3>{1} '+(showSM?'{2}':"")+'</h3></div><div style="display:none;">{3}</div></div>';
        //console.log(divtext)
        var item = BattleLog[key];
        if(item===undefined){
            text+=divtext.format("","无数据","","","","");
        }else{
            var len=item.length;
            for(var i=len-1;i>=0;i--){
                var thisclass = '';
                if(item[i][1]){
                    thisclass="battlewin"
                }else {
                    thisclass="battlelose"
                }
                if(item[i].length>3){
                    let name = item[i][2]
                    let xishu = get_enemylevel(item[i][2])
                    if(xishu!=""){
                        xishu = "SM:"+xishu;
                    }
                    let char = item[i][3]
                    let charlv = "LV:"+item[i][4]

                    /*name = formatStringLen(name, 12, "&#8194;")
                     xishu = formatStringLen(xishu, 7, "&#8194;")
                     char = formatStringLen(char, 5, "&#8194;")
                     charlv = formatStringLen(charlv, 7, "&#8194;")*/
                    text+=divtext.format(thisclass,name,xishu,char,charlv,item[i][0]);
                }
                else if(item[i].length>2){
                    let name = item[i][2]
                    let xishu = get_enemylevel(item[i][2])
                    if(xishu!=""){
                        xishu = "SM:"+xishu;
                    }
                    text+=olddivtext.format(thisclass,name,xishu,item[i][0]);
                }else{
                    text+="数据出错";
                }

            }
        }
        detaillogpanel.innerHTML = text;

        $(".nameandlevel").click(function(){
            $(this).next().toggle(200);
        });

        $('[data-toggle="tooltip"]').tooltip();
    }



    let observerBody1 = new MutationObserver(()=>{
        var pkTextDiv = document.querySelector("#pk_text");
        window.pkTextDiv = pkTextDiv;
        var enemydivs = pkTextDiv.querySelectorAll("span.fyg_f18");
        if(enemydivs==null||enemydivs.length<2){return;}
        var enemyinfo = pkTextDiv.querySelectorAll("div.col-md-6")[1];
        var isbattlewin = pkTextDiv.querySelectorAll(".icon-smile").length>0;

        var enemydiv = enemydivs[1];
        var enemydivtext = enemydiv.innerText;
        var einfolist = enemydivtext.match(/(.+)（(.+) Lv\.(\d+)/)
        var enemyname = einfolist[1]
        var echar = einfolist[2]//职业
        var echarlv = einfolist[3]


        logupdate(pkTextDiv,isbattlewin,enemyname,echar,echarlv);
        if(echar=="野怪"){return}
    });

    function gx_sxdsingfalse(){
        gx_sxdsing = false;
    }

    function issxdsstop(){ // 如果为真，则今天不用星沙刷新
        var key = getDateString(getLocDate());
        return key == gx_sxds_stopday
    }

    let observerBody2 = new MutationObserver(()=>{
        var msg = $("#mymessagehtml").html();
        if(msg == "星沙不足，本操作需 20 星沙"){
            setTimeout(gx_sxdsingfalse,3000)
            autoreStaminacheckbox.checked = false;
            appendChangeLogText('星沙不足，回体失败')
        }else if(msg == "体力已刷新。"){
            setTimeout(gx_sxdsingfalse,3000)
            appendChangeLogText('消耗星沙恢复体力')
        }else if(msg == "今日刷新对手次数已达上限，每天可刷新 2 次。"){
            setTimeout(gx_sxdsingfalse,3000)
            //autoreStaminacheckbox.checked = false;
            gx_sxds_stopday = getDateString(getLocDate())
            appendChangeLogText('达到每日星沙恢复体力次数上限')
        }
    });

    function logupdate(enemyinfo,isbattlewin,enemyname,enemychar,enemycharlv){
        var etext = enemyinfo.innerHTML;
        var now = getLocDate();
        var key = getDateString(now);
        var aaaa = BattleLog[key]
        if(aaaa===undefined){
            BattleLog[key]=[];
            aaaa = BattleLog[key]
        }

        aaaa.push([etext,isbattlewin,enemyname,enemychar,enemycharlv])
        /*console.log(key)
        console.log(aaaa)*/
        console.log(BattleLog)
        FM_setValue("BattleLog",BattleLog)
        //updatelogpanel()
    }

    function save_enemylevel(name,level){
        var a = BattleLog["enemylevel"]
        if(a===undefined){
            BattleLog["enemylevel"]={};
            a = BattleLog["enemylevel"]
        }
        a[name]=level;
        FM_setValue("BattleLog",BattleLog)
    }

    function get_enemylevel(name){
        //if(name.indexOf("等级 -")!=-1){return name}
        if(name.indexOf("ikarosf")!=-1){return "" + 57257*2}
        var a = BattleLog["enemylevel"]
        if(a===undefined){
            return "";
        }
        if(name in a){
            return a[name];
        }
        return ""
    }

    function dosmalldiv(){
        if($(".smalldiv").css("display")=="none"){
            $("#goxpanel").css("min-width","280px")
            $("#goxpanel").css("width","20%")
            $("#smallbar").text("<")
            localStorage.setItem("smalldiv","false")
        }else{
            $("#goxpanel").css("min-width","unset")
            $("#goxpanel").css("width","50px")
            $("#smallbar").text(">")
            $("#goxpanelExtend").hide();
            localStorage.setItem("smalldiv","true")
        }
        $(".smalldiv").toggle();
    }

    function loadv(){
        if(localStorage.getItem("smalldiv")=="true"){
            dosmalldiv()
        }
    }

    function autodeletelog(dayss){
        var monthNumber = dayss*24*60*60*1000;
        var now = getLocDate()
        for (var i in BattleLog){
            var thisdate = new Date(i) //由于Date("enemylevel")返回的是当前的时间，所以不会被删除
            if((now-thisdate)>monthNumber){
                delete BattleLog[i];
            }
        }
        FM_setValue("BattleLog",BattleLog)
    }

    function count_battle(during){
        var during_s = during * 24 * 60 * 60 * 1000
        var now = getLocDate()
        var enemy_sum = {};
        for(var i in BattleLog){
            if(i=="enemylevel") continue;
            var thisdate = new Date(i)
            if(now - thisdate > during_s) {continue;}
            for(var j in BattleLog[i]){
                var name = BattleLog[i][j][2];
                var isWin = BattleLog[i][j][1];
                var a = enemy_sum[name];
                if(a==undefined){//该对手第一次出现
                    enemy_sum[name] = [1,isWin?1:0,[i]];
                }else{
                    enemy_sum[name][0]++;
                    enemy_sum[name][1]+=isWin?1:0;
                    enemy_sum[name][2].push(i);
                }
            }
        }
        var listSort = Object.keys(enemy_sum).sort(function(a,b){ return enemy_sum[b][0]-enemy_sum[a][0]; });

        return [enemy_sum,listSort];
    }

    function init_table(){
        var table_html = '<canvas id="battleCountChart"></canvas>'
        var obj = document.createElement("div");
        obj.innerHTML = table_html;
        obj.setAttribute('id','chartParent');
        $("body")[0].appendChild(obj);


        chartssize(obj,ctx)


    }

    function table_date_set(during,num){
        var count_result = count_battle(during)
        var enemy_sum = count_result[0];
        var enemy_sum_top_list = count_result[1].slice(0, num)
        var wincount_list = [],losecount_list = []
        for(var enemy_sum_top_item in enemy_sum_top_list){
            wincount_list.push(enemy_sum[enemy_sum_top_list[enemy_sum_top_item]][1])
            losecount_list.push(enemy_sum[enemy_sum_top_list[enemy_sum_top_item]][0]-enemy_sum[enemy_sum_top_list[enemy_sum_top_item]][1])
        }

        $('#battleCountChart').remove();
        $('#chartParent').append('<canvas id="battleCountChart"></canvas>');
        var ctx = document.getElementById("battleCountChart")
        ctx.style.backgroundColor = 'rgba(250,250,250,150)';

        var linedata = {
            labels: enemy_sum_top_list,
            datasets: [{
                type: 'bar',
                data: losecount_list,
                backgroundColor: "#ea8c7c"
            },{
                type: 'bar',
                data: wincount_list,
                backgroundColor: "#7fe6ef"
            }]
        };

        var myChart = new Chart(ctx, {
            type: 'bar',
            data: linedata,
            options: {
                scales: {
                    xAxes: [{
                        stacked: true,
                    }],
                    yAxes: [{
                        stacked: true,
                        ticks: {
                            beginAtZero:true,
                            stepSize: 1
                        }
                    }]
                },
                responsive:true,
                maintainAspectRatio: false,
                title:{
                    display:true,
                    text:'遇到最多的人TOP' + num,
                    fontSize:25
                },
                legend: {
                    display: false,

                },
                tooltips: {
                    intersect:false,
                    displayColors:false,
                    callbacks: {
                        label: function(tooltipItem, data) {
                            var enemy_name = tooltipItem.label
                            var battle_sum = enemy_sum[enemy_name][0]
                            var win_sum = enemy_sum[enemy_name][1]

                            var label = ["战斗次数："+battle_sum , "获胜次数："+win_sum, "战斗日期：↓"];
                            for(var i in enemy_sum[enemy_name][2]){
                                label.push("  " + enemy_sum[enemy_name][2][i])
                            }
                            return label;
                        }
                    }
                }
            }
        });
    }

    function get_saveid(){
        return getPostData(/gox\(\)\{[\s\S]*\}/m,/data: ".*"/).slice(-7,-1);
    }

    //逻辑：get_gemData-》收集-》get_gemData直到不可收集为止
    function get_gemData(){
        if(g_makeequiping || g_makecarding || g_makegeming) return;
        if(!g_ismake) {mygox();return;}
        $.ajax({ url: window.location.origin + "/fyg_read.php", type: 'POST', contentType: 'application/x-www-form-urlencoded; charset=UTF-8', data:"f=21",processData: false, })
        .done(data => {
            console.log(data);
            if (data.status == 200) {
                let info = data;
                /*console.log(info)*/
                let makeequip_perc = info.match(/(?<=锻造装备 （)\d+(?=%）)/)[0]//锻造进度不足
                let makecard_perc = info.match(/(?<=生成卡片 （)\d+(?=%）)/)[0]//生成卡片进度不足
                let makegem_perc = info.match(/(?<=宝石收集 （)\d+(?=%）)/)[0] //没有收集到 //宝石收集进度不足
                let red_num = info.match(/(?<=红石.+"fyg_f18">)\d+(?=<)/)[0] //id=1  50
                let silver_num = info.match(/(?<=银石.+"fyg_f18">)\d+(?=<)/)[0]//50
                let glod_num = info.match(/(?<=金石.+"fyg_f18">)\d+(?=<)/)[0]//30
                let dream_num = info.match(/(?<=梦石.+"fyg_f18">)\d+(?=<)/)[0]//30
                let invain_num = info.match(/(?<=虚石.+"fyg_f18">)\d+(?=<)/)[0]//10
                let unreal_num = info.match(/(?<=幻石.+"fyg_f18">)\d+(?=<)/)[0]//10
                /*console.log(makeequip_perc)
                console.log(makecard_perc)
                console.log(makegem_perc)
                console.log(red_num)
                console.log(silver_num)
                console.log(glod_num)
                console.log(dream_num)
                console.log(invain_num)
                console.log(unreal_num)*/
                let doing = false;
                if(makeequip_perc=="100"){
                    doing = true;
                    makeequip()
                }
                if(makecard_perc=="100"){
                    doing = true;
                    makecard()
                }
                if(makegem_perc=="100"){
                    if(g_gemid > 0 && g_gemid < 7){
                        doing = true;
                        makegem(g_gemid)
                    }
                }
                if(!doing){
                    mygox();
                }
            }else{
                appendChangeLogText('获取收藏页面失败')
                console.log(res)
            }
        }).fail(data => { appendChangeLogText( '获取收藏页面错误');console.log(data)});
    }

    function makeequip(){
        g_makeequiping = true;
        $.ajax({ url: window.location.origin + "/fyg_click.php", type: 'POST', contentType: 'application/x-www-form-urlencoded; charset=UTF-8',data:"c=25&xs=undefined&safeid=" + g_saveid, processData: false, })
        .done(res => {
            if(res.status === 200){
                    let info = res;
                    appendChangeLogText("锻造装备:"+info)

                }else{
                    appendChangeLogText( '锻造装备失败，可能网络问题')
                    console.log(res)
                }
                g_makeequiping = false;
                get_gemData()
        }).fail(err => { appendChangeLogText( '锻造装备错误');console.log(err);g_makeequiping = false;get_gemData()});
    }

    function makecard(){
        g_makecarding = true;
        $.ajax({ url: window.location.origin + "/fyg_click.php", type: 'POST', contentType: 'application/x-www-form-urlencoded; charset=UTF-8',data:"c=26&xs=undefined&safeid=" + g_saveid, processData: false, })
        .done(res => {
            if(res.status === 200){
                    let info = res;
                    appendChangeLogText("生成卡片:" + info)

                }else{
                    appendChangeLogText( '生成卡片失败，可能网络问题')
                    console.log(res)
                }
                g_makecarding = false;
                get_gemData()
        }).fail(err => { appendChangeLogText( '生成卡片错误');console.log(err);g_makecarding = false;get_gemData()});
    }

    function makegem(id){
        g_makegeming = true;
        $.ajax({ url: window.location.origin + "/fyg_click.php", type: 'POST', contentType: 'application/x-www-form-urlencoded; charset=UTF-8',data:"c=27&xs="+id+"&safeid=" + g_saveid, processData: false, })
        .done(res => {
            if(res.status === 200){
                    let info = res;
                    appendChangeLogText("宝石收集"+ info)

                }else{
                    appendChangeLogText( '宝石收集失败，可能网络问题')
                    console.log(res)
                }
                g_makegeming = false;
                get_gemData()
        }).fail(err => { appendChangeLogText( '宝石收集错误');console.log(err);g_makegeming = false;get_gemData()});
    }

    //——————————————————mainfun————————————
    postRequest();
    setInterval(read_rank,"1000");
    observerBody1.observe(document.querySelector("#pk_text"), {characterData: true,childList: true});
    observerBody2.observe(document.querySelector("#mymessagehtml"), {characterData: true,childList: true});
    initgoxpanel();
    init_table();

    autodeletelog(30);
    loadv();
    setTimeout(timetogoxloop,60*1000);
}

function dictsort(dic){
    var res = Object.keys(dic).sort(function(a,b){return b-a;});
    for(var key in res){
        console.log("key: " + res[key] + " ,value: " + dic[res[key]].score);
    }
}

Function.prototype.getMultilines = function () {
    var lines = new String(this);
    lines = lines.substring(lines.indexOf("/*") + 2,lines.lastIndexOf("*/"));
    return lines;
}
String.format = function(src){
    if (arguments.length == 0) return null;
    var args = Array.prototype.slice.call(arguments, 1);
    return src.replace(/\{(\d+)\}/g, function(m, i){
        return args[i];
    });
};

function FM_setValue(name, value){
    var oldvalue = JSON.parse(localStorage.getItem(user));
    if(oldvalue === undefined){
        oldvalue = {};}
    oldvalue[name] = value;
    localStorage.setItem(user,JSON.stringify(oldvalue));
}
function FM_getValue(name, defaultValue){
    var thisvalue = JSON.parse(localStorage.getItem(user));
    if(thisvalue != undefined&&name in thisvalue){
        return thisvalue[name]
    }
    if(defaultValue != null){
        return defaultValue;
    }
    return null;
}

function html_encode(str)
{
    var s = "";
    if (str.length == 0) return "";
    s = str.replace(/&/g, "&amp;");
    s = s.replace(/</g, "&lt;");
    s = s.replace(/>/g, "&gt;");
    s = s.replace(/ /g, "&nbsp;");
    s = s.replace(/\'/g, "&#39;");
    s = s.replace(/\"/g, "&quot;");
    s = s.replace(/\n/g, "<br/>");
    return s;
}

function html_decode(str)
{
    var s = "";
    if (str.length == 0) return "";
    s = str.replace(/&amp;/g, "&");
    s = s.replace(/&lt;/g, "<");
    s = s.replace(/&gt;/g, ">");
    s = s.replace(/&nbsp;/g, " ");
    s = s.replace(/&#39;/g, "\'");
    s = s.replace(/&quot;/g, "\"");
    s = s.replace(/<br\/>/g, "\n");
    return s;
}

function getLocDate(){
    //本地时间 + 本地时间与格林威治时间的时间差 + GMT+8与格林威治的时间差
    return new Date(new Date().getTime() + new Date().getTimezoneOffset()*60*1000 + 8*60*60*1000)
}

function getDateString(thisDate){
    //本地时间 + 本地时间与格林威治时间的时间差 + GMT+8与格林威治的时间差
    return thisDate.getFullYear() + "/" + (thisDate.getMonth()+1) + "/" + thisDate.getDate()
}

//参数container为图表盒子节点.charts为图表节点
function chartssize (container,charts) {
    function getStyle(el, name) {
        if (window.getComputedStyle) {
            return window.getComputedStyle(el, null);
        } else {
            return el.currentStyle;
        }
    }
    var wi = getStyle(container, 'width').width;
    var hi = getStyle(container, 'height').height;
    charts.style.width = wi
    charts.style.height = hi
}

function formatStringLen(strVal, len, padChar){
    padChar = padChar || "*";
    if (!strVal) {
        return padChar.repeat(len);
    } else {
        const strLen = strVal.gblen();
        if (strLen > len){
            return strVal.substring(0, len);
        } else if (strLen < len){
            let mylen = len - strLen;
            return strVal + padChar.repeat(mylen);
        }else{
            return strVal;
        }
    }
}

String.prototype.gblen = function() {
    var len = 0;
    for (var i=0; i<this.length; i++) {
        if (this.charCodeAt(i)>127 || this.charCodeAt(i)==94) {
            len += 2;
        } else {
            len ++;
        }
    }
    return len;
}

//——————————————————mainfun————————————
var user = document.getElementsByClassName('fyg_colpz06 fyg_f24')[0].innerText

var rl = window.location.href;
fyg_pk_html();
};
