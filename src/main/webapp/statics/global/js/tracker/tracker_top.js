Array.prototype.toTRACKERJSONString=function(){var d="[";for(var c=0;c<this.length;c++){if(this[c] instanceof Parameter){if(this[c].value instanceof Array){d+="{"+this[c].key+"="+this[c].value.toTRACKERJSONString()+"},"}else{d+=this[c].toJSONString()+","}}}if(d.indexOf(",")>0){d=d.substring(0,d.length-1)}return d+"]"};function Parameter(d,c){this.key=d;if(this.key=="internalKeyword"){this.value=encodeURIComponent(c)}else{this.value=c}this.toJSONString=function(){return"{"+this.key+"="+this.value+"}"}}function addPublicParameter(r,m){var v=location.href;r+="&w_url="+encodeURIComponent(v);r+="&s_iev="+navigator.userAgent||"";var n="iPod|iTouch|iPhone";var u=/iPad/i;var q="Android|BlackBerry|SymbianOS|SymbOS|Windows Phone OS|WAP|Kindle|pad|pod";var s=window.navigator.userAgent;var l=new RegExp(n,"i");
var t=new RegExp(q,"i");if(l.test(s)){r+="&s_plt=IOSSystem";r+="&s_ct=H5"}else{if(u.test(s)){r+="&s_plt=iPad-PC";r+="&s_ct="+navigator.platform||""}else{if(t.test(s)){r+="&s_plt=AndroidSystem";r+="&s_ct=H5"}else{r+="&s_plt="+navigator.platform||""}}}r+="&s_rst="+window.screen.width+"*"+window.screen.height;var o=p("glTrueReffer");if(o&&o.match(/http(s)?:\/\/.+/)){r+="&w_rfu="+encodeURIComponent(o)}else{r+="&w_rfu="+encodeURIComponent(document.referrer||"")}return r;function p(a){var b=location.href;if(b&&b.indexOf("#")>0){b=b.substring(0,b.indexOf("#"))}var c=new RegExp("(^|\\?|&)"+a+"=([^&]*)(\\s|&|$)","i");if(c.test(b)){return unescape(RegExp.$2.replace(/\+/g," "))}else{return""}}}var trackerSupportKey=new Object();trackerSupportKey.infoPageId="w_pif";trackerSupportKey.tp="w_tp";trackerSupportKey.tc="w_tc";
trackerSupportKey.guid="guid";trackerSupportKey.attachedInfo="b_ai";trackerSupportKey.tracker_u="b_tu";trackerSupportKey.tracker_type="b_trt";trackerSupportKey.ip="u_ip";trackerSupportKey.infoTrackerSrc="w_ts";trackerSupportKey.infoTrackerSrc="w_ts";trackerSupportKey.cookie="w_ck";trackerSupportKey.orderCode="b_oc";trackerSupportKey.endUserId="u_uid";trackerSupportKey.firstLink="w_flk";trackerSupportKey.productId="b_pid";trackerSupportKey.curMerchantId="u_cm";trackerSupportKey.provinceId="u_pid";trackerSupportKey.fee="b_fee";trackerSupportKey.edmActivity="b_ea";trackerSupportKey.edmEmail="b_ee";trackerSupportKey.edmJobId="b_ejb";trackerSupportKey.internalKeyword="b_ik";trackerSupportKey.resultSum="b_rs";trackerSupportKey.currentPage="b_scp";trackerSupportKey.linkPosition="b_lp";trackerSupportKey.buttonPosition="b_bp";
trackerSupportKey.adgroupKeywordID="b_ak";trackerSupportKey.extField3="b_set";trackerSupportKey.extField6="b_adt";trackerSupportKey.extField7="b_pmi";trackerSupportKey.extField8="b_tid";trackerSupportKey.extField9="b_cid";trackerSupportKey.extField10="s_and";trackerSupportKey.pageTypeId="w_pt";trackerSupportKey.unid="w_un";trackerSupportKey.pageValue="w_pv";trackerSupportKey.refPageTypeId="w_rpt";trackerSupportKey.refUnid="w_run";trackerSupportKey.refPageValue="w_rpv";trackerSupportKey.eventId="b_ei";trackerSupportKey.labelId="b_li";trackerSupportKey.filterInfo="b_fi";trackerSupportKey.activityId="b_aci";trackerSupportKey.listCategoryId="b_lci";trackerSupportKey.pmStatusTypeId="b_pms";trackerSupportKey.container="s_ct";trackerSupportKey.containerVersion="s_ctv";trackerSupportKey.platVersion="s_pv";
trackerSupportKey.phoneType="s_pt";trackerSupportKey.provider="s_pro";trackerSupportKey.netType="s_nt";trackerSupportKey.tpa="w_tpa";trackerSupportKey.tpc="w_tpc";trackerSupportKey.tpi="w_tpi";trackerSupportKey.tcs="w_tcs";trackerSupportKey.tcsa="w_tca";trackerSupportKey.tcdt="w_tct";trackerSupportKey.tcd="w_tcd";trackerSupportKey.tci="w_tci";trackerSupportKey.tce="w_tce";trackerSupportKey.positionTypeId="b_pyi";trackerSupportKey.scrollTop="w_st";trackerSupportKey.abtestValue="b_abv";trackerSupportKey.newUserFlag="b_nu";trackerSupportKey.clientTime="b_clt";trackerSupportKey.eventXRate="b_exr";trackerSupportKey.eventYRate="b_eyr";function TrackerContainer(d){var e=(typeof URLPrefix!="undefined"&&URLPrefix.tracker)?URLPrefix.tracker:"tracker.yhd.com";this.url=("https:"==document.location.protocol?"https://":"http://")+e+"/tracker/newInfo.do?1=1";
this.url=addPublicParameter(this.url,d);this.parameterArray=[];this.stockArray=[];this.commonAttached=[];this.addParameter=function(a){this.parameterArray.push(a)};this.addStock=function(a,b){this.stockArray.push(new Parameter(a,b))};this.addCommonAttached=function(b,a){this.commonAttached.push(new Parameter(b,a))};this.buildAttached=function(){if(this.stockArray.length>0){this.commonAttached.push(new Parameter("1",this.stockArray))}if(this.commonAttached.length>0){this.addParameter(new Parameter("attachedInfo",this.commonAttached.toTRACKERJSONString("attachedInfo")))}};var f=trackerGetCookie("newUserFlag");if(f){this.addParameter(new Parameter("newUserFlag",f))}this.toUrl=function(){this.buildAttached();var a="&bd={";for(var c=0;c<this.parameterArray.length;c++){var h=trackerSupportKey[this.parameterArray[c].key];
var b=this.parameterArray[c].value;if(h){a+=h+"="+b;if(c<this.parameterArray.length-1){a+="|"}}}a+="}";return this.url+a}}function addTrackPositionToCookie(d,c){document.cookie="linkPosition="+encodeURIComponent(c)+";path=/;domain=."+no3wUrl+";"}function addPageMsgToCookie(b){if(typeof(b)=="object"&&b){if(typeof(b.pmInfoId)!="undefined"){document.cookie="pmInfoId="+b.pmInfoId+";path=/;domain=."+no3wUrl+";"}if(typeof(b.productId)!="undefined"){document.cookie="productId="+b.productId+";path=/;domain=."+no3wUrl+";"}}}function trackerGetCookie(g){var j=document.cookie;var i=j.split("; ");for(var f=0;f<i.length;f++){var h=i[f].split("=");if(h[0]==g){return h[1]}}return null}function trackerClearCookieWithName(e,d){var f=new Date();f.setTime(f.getTime()-10000);document.cookie=e+"="+d+";path=/;domain=."+no3wUrl+";expires="+f.toGMTString()
}var e1=/exfield1=[^;]*;*/i;var e2=new RegExp("exfield2=[^;]*;*","i");var e3=new RegExp("exfield3=[^;]*;*","i");var e4=new RegExp("exfield4=[^;]*;*","i");var e5=new RegExp("exfield5=[^;]*;*","i");function batchRecordTrackerInfo(j){if(j&&j.length>0){var k=("https:"==document.location.protocol?"https://":"http://")+URLPrefix.tracker+"/related/newInfo.do?1=1";k=addPublicParameter(k);var g=[];for(var i=0,l=j.length;i<l;i++){var h=recordTrackerGroup(j[i]);g[i]='{"bd":"{'+h+'}"}'}k+="&batchInfo=["+g.join(",")+"]";sendImgUrl(k)}}function recordTrackInfoWithType(i,n,j,m,k){var l=("https:"==document.location.protocol?"https://":"http://")+URLPrefix.tracker+"/related/newInfo.do?1=1";l=addPublicParameter(l);var h={type:i,info:n,others:j,extend:m,paramObj:k};sendImgUrl(l+"&bd={"+recordTrackerGroup(h)+"}")
}function recordTrackerGroup(y){if(!y){return}var i=y.type;var A=y.info;var C=y.others;var u=y.extend;var E=y.paramObj;var z={};if(E){for(var D in E){var w=trackerSupportKey[D];if(w){z[w]=E[D]}else{z[D]=E[D]}}}if(i&&A){z.b_it=i;z.b_ri=encodeURIComponent(A)||"";z.b_ai=encodeURIComponent(C)||"";if(u){var B=e1.exec(u);if(B){z.b_e1=encodeURIComponent(B[0].replace(/exfield1=/i,"").replace(";",""))}var r=e2.exec(u);if(r){z.b_e2=encodeURIComponent(r[0].replace(/exfield2=/i,"").replace(";",""))}var s=e3.exec(u);if(s){z.b_e3=encodeURIComponent(s[0].replace(/exfield3=/i,"").replace(";",""))}var F=e4.exec(u);if(F){z.b_e4=encodeURIComponent(F[0].replace(/exfield4=/i,"").replace(";",""))}var t=e5.exec(u);if(t){z.b_e5=encodeURIComponent(t[0].replace(/exfield5=/i,"").replace(";",""))}}var v="";for(var x in z){if(v!=""){v+="|"
}v+=x+"="+z[x]}return v}}function gotracker(p,x,v,q){var w=new TrackerContainer("1");if(x){w.addParameter(new Parameter("buttonPosition",x))}else{w.addParameter(new Parameter("buttonPosition","defaultButton"))}if(v){w.addParameter(new Parameter("productId",v))}if(typeof(p)=="number"&&(p>2||p<0)){w.addParameter(new Parameter("extField7",p))}else{if(typeof(p)=="string"){var t=Number(p);if(t>2||t<0){w.addParameter(new Parameter("extField7",t))}}}if(typeof(q)=="object"&&q){for(var o in q){w.addParameter(new Parameter(o,q[o]))}if(!q.positionTypeId){w.addParameter(new Parameter("positionTypeId","2"))}}else{var r=window.loli||{};if(r&&r.page){var m=loli.page.getCurrPageInfo();if(m){var u=m.pageType;var s=m.pageValue;w.addParameter(new Parameter("pageTypeId",u));w.addParameter(new Parameter("pageValue",s));
w.addParameter(new Parameter("refPageTypeId",u));w.addParameter(new Parameter("refPageValue",s))}}}var n=trackerGetCookie("edmEmail");if(n){w.addParameter(new Parameter("edmEmail",n))}if(trackerGetCookie("yihaodian_uid")){w.addParameter(new Parameter("endUserId",trackerGetCookie("yihaodian_uid")))}w.addParameter(new Parameter("clientTime",new Date().getTime()));sendImgUrl(w.toUrl())}function bindLinkClickTracker(f,d){var e=jQuery("#"+f+" a");e.click(function(){var a=jQuery(this).text();a=d+"_"+encodeURIComponent(jQuery.trim(a));addTrackPositionToCookie("1",a)})}(function(){var b=trackerGetCookie("guid");if(!b){document.cookie="newUserFlag="+1+";domain=."+no3wUrl+";path=/"}})();function addParamsToTracker(h){if(trackerGetCookie("guid")){h.addParameter(new Parameter("guid",trackerGetCookie("guid")))
}if(trackerGetCookie("unionKey")){h.addParameter(new Parameter("tracker_u",trackerGetCookie("unionKey")))}if(trackerGetCookie("unionType")){h.addParameter(new Parameter("tracker_type",trackerGetCookie("unionType")))}if(trackerGetCookie("adgroupKeywordID")){h.addParameter(new Parameter("adgroupKeywordID",trackerGetCookie("adgroupKeywordID")))}if(trackerGetCookie("edmEmail")){h.addParameter(new Parameter("edmEmail",trackerGetCookie("edmEmail")))}if(trackerGetCookie("yihaodian_uid")){h.addParameter(new Parameter("endUserId",trackerGetCookie("yihaodian_uid")))}if(trackerGetCookie("abtest")){h.addParameter(new Parameter("extField6",trackerGetCookie("abtest")))}if(trackerGetCookie("provinceId")){h.addParameter(new Parameter("provinceId",trackerGetCookie("provinceId")))}if(trackerGetCookie("extField8")){h.addParameter(new Parameter("extField8",trackerGetCookie("extField8")))
}if(trackerGetCookie("extField9")){h.addParameter(new Parameter("extField9",trackerGetCookie("extField9")))}if(trackerGetCookie("extField10")){h.addParameter(new Parameter("extField10",trackerGetCookie("extField10")))}var e="";if(trackerGetCookie("msessionid")){e="msessionid:"+trackerGetCookie("msessionid")}if(trackerGetCookie("uname")){e+=",uname:"+trackerGetCookie("uname")}if(trackerGetCookie("unionKey")){e+=",unionKey:"+trackerGetCookie("unionKey")}if(trackerGetCookie("unionType")){e+=",unionType:"+trackerGetCookie("unionType")}if(trackerGetCookie("tracker")){e+=",tracker:"+trackerGetCookie("tracker")}if(trackerGetCookie("LTINFO")){e+=",LTINFO:"+trackerGetCookie("LTINFO")}if(e){h.addParameter(new Parameter("cookie",e))}if(getQueryStringRegExp("tracker_src")){h.addParameter(new Parameter("infoTrackerSrc",getQueryStringRegExp("tracker_src")))
}if(getQueryStringRegExp("fee")){h.addParameter(new Parameter("fee",getQueryStringRegExp("fee")))}h.addParameter(new Parameter("clientTime",new Date().getTime()));var f=g();if(f){f=encodeURIComponent(f);h.addParameter(new Parameter("infoPageId",f))}function g(){var b=null;try{if(parent!==window){try{b=parent.location.href}catch(a){b=document.referrer}}}catch(a){}return b}}var trackerContainer=new TrackerContainer();addParamsToTracker(trackerContainer);function sendPvTracker(j){if(!j){var j=new TrackerContainer();addParamsToTracker(j)}var m=trackerGetCookie("linkPosition");if(m){j.addParameter(new Parameter("linkPosition",m));trackerClearCookieWithName("linkPosition",m)}var k=window.loli||{};if(k&&k.spm){var i=k.spm.getNewPageData();if(i&&typeof(i)=="object"){for(var l in i){j.addParameter(new Parameter(l,i[l]))
}if(!i.positionTypeId){j.addParameter(new Parameter("positionTypeId","1"))}}else{j.addParameter(new Parameter("positionTypeId","1"))}}var n=trackerGetCookie("pmInfoId");if(n){j.addParameter(new Parameter("extField7",n));trackerClearCookieWithName("pmInfoId",n)}var h=trackerGetCookie("productId");if(h){j.addParameter(new Parameter("productId",h));trackerClearCookieWithName("productId",h)}sendImgUrl(j.toUrl())}function sendImgUrl(d){var c="timg"+new Date().getTime();window[c]=new Image(1,1);window[c].src=d};