define(["global_env","tracker_ref_yhd.global_spm","util_yhd.url"],function(o,m,p){var i={};function l(a){if(a&&(a.indexOf("http://")==0||a.indexOf("https://")==0)){return true}return false}function k(d,a,b){var c="[http://|https://][\\w\\.]+yhd\\.com";if(a&&a.indexOf("yhd")==-1&&a.indexOf("com")==-1){c="[http://|https://]"+a+"\\.yhd\\.com"}else{if(a){c=a}}var e="(/)?[^/]{0,}$";if(b!=null&&b==false){e="[^/]{0,}$"}if(d==null){d=""}return RegExp(c+d+e)}var j=[[k("/m/login_input.do","passport",false),"yhd://login/",null],[k("/store/m-(\\d{1,11})(-\\d{1,2})?.html","(http://|https://)[\\w\\.]+yhd\\.com",false),"yhd://web/",'"url":"${0}","type":1,"targetUrlIntent":"yhd://mallshopsearch?merchantId=${2}"'],[k("/mw/store/(\\d{1,11})(/\\d{1,2})?","(http://|https://)[\\w\\.]+yhd\\.com",false),"yhd://web/",'"url":"${0}","type":1,"targetUrlIntent":"yhd://mallshopsearch?merchantId=${2}"'],[k("/item/(\\d{1,11})",null,false),"yhd://detail/",'"pmId":${1}'],[k("/item/lp/(\\d{1,11})_(\\d{1,11})",null,false),"yhd://detail/",'"pmId":${2},"promotionId":"${1}_landingpage"'],[k("/mingpin/list/(\\d{1,11})(/\\d{1,2})?"),"yhd://flashbuyproductlist/",'"flashbuyId":${1}'],[k("/mingpin/item/(\\d{1,11})_(\\d{1,11})(/(\\d{1,2})/)?(/?[^/]{0,}categoryId=(\\d{1,11}))?",null,false),"yhd://flashbuyproductdetail/",'"flashbuyId":${1},"productId":${2},"provinceId":${4},"pminfoId":${2}'],[k("/mingpin/category/(\\d{1,11})"),"yhd://flashbuyhome/",'"categoryId":${1}'],[k("/mingpin"),"yhd://flashbuyhome/",null],[k("/tuan"),"yhd://grouponhome/",null],[k("","http://t.m.yhd.com(/\\d{1,2})?",false),"yhd://grouponhome/",null],[k("/tuan/[^/\\.]{0,}c(\\d{1,11})[^/\\.]{0,}.html\\?nid=(\\d{1,11})"),"yhd://productgroupon/",'"grouponType":0,"categoryId":${2}'],[k("/[^/\\.]{0,}c(\\d{1,11})[^/\\.]{0,}.html\\?nid=(\\d{1,11})","http://t.m.yhd.com"),"yhd://productgroupon/",'"grouponType":0,"categoryId":${2}'],[k("/(p\\d{1,2}-)?vt100(-c-1-st0.html)?","http://t.m.yhd.com",false),"yhd://productgroupon/",'"grouponType":0,"grouponNum":100'],[k("/(p\\d{1,2}-)?vt2(-c-1-st0.html)?","http://t.m.yhd.com",false),"yhd://productgroupon/",'"grouponType":1,"grouponNum":100'],[k("/(p\\d{1,2}-)?vt3(-c-1-st0.html)?","http://t.m.yhd.com",false),"yhd://grouponsoon/",null],[k("/tuan/detail/(\\d{1,11})",null,false),"yhd://grouponsummary/",'"grouponid":${1}'],[k("/detail/(\\d{1,11})","http://t.m.yhd.com",false),"yhd://grouponsummary/",'"grouponid":${1}'],[k("/tuan/brand",null,false),"yhd://brandgroupon/",null],[k("/brand(/\\d{1,2})?","http://t.m.yhd.com",false),"yhd://brandgroupon/",null],[k("/tuan/detailBrand/(\\d{1,11})(-\\d{1,2})?",null,false),"yhd://brandgroupondetail/",'"brandId":${1}'],[k("/detailBrand/(\\d{1,11})(-\\d{1,2})?","http://t.m.yhd.com",false),"yhd://brandgroupondetail/",'"brandId":${1}'],[k("/clock","http://t.m.yhd.com",true),"yhd://oclockGroupon/",'"title":"金牌秒杀"'],[k("/search/\\?req.keyword=([^&/=]{1,})",null,false),"yhd://search/",'"keyword":"${1}"'],[k("/search/k([^?&=/]{2,})/[^?&=/]*s(\\d+)",null,false),"yhd://search/",'"keyword":"${1}","sortType":"${2}"'],[k("/search/k([^?&=/]{2,})",null,false),"yhd://search/",'"keyword":"${1}"'],[k("/search/c(\\d{1,11})/p(\\d)+-s(\\d)+/",null,false),"yhd://search/",'"categoryId":${1},"categoryName":"#{name}","virtualFlag":#{virtualflag}'],[k("/search/p(\\d{1,11})-pl(\\d{1,11})-[^?]{1,}\\?.*pmid=(\\d+)",null,false),"yhd://salespromotion/",'"promotionId":${1},"promotionLevelId":${2},"promotionLevel":${2},"merchantId":#{merchantId},"pmId":${3}'],[k("/search/n(\\d{1,11})-pl(\\d{1,11})-[^?]{1,}\\?.*pmid=(\\d+)",null,false),"yhd://salespromotion/",'"promotionType":2,"promotionId":${1},"promotionLevelId":${2},"promotionLevel":${2},"conditionValue":0,"merchantId":#{merchantId},"pmId":${3}'],[k("/search/p(\\d{1,11})-pl(\\d{1,11})-[^?]{1,}\\?",null,false),"yhd://salespromotion/",'"promotionId":${1},"promotionLevelId":${2},"promotionLevel":${2},"merchantId":#{merchantId}'],[k("/search/n(\\d{1,11})-pl(\\d{1,11})-[^?]{1,}\\?",null,false),"yhd://salespromotion/",'"promotionType":2,"promotionId":${1},"promotionLevelId":${2},"promotionLevel":${2},"conditionValue":0,"merchantId":#{merchantId}'],[k("/search/c(\\d{1,11})/k([^?=/&]{2,})",null,false),"yhd://search/",'"categoryId":${1},"keyword":"${2}"'],[k("/myH5/h5Bind/h5BindMobile.do"),"yhd://bindphone/",null],[k("/mobile/nearshop",null,false),"yhd://localweb",'"path":"leigou"'],[k("/nearshop",null,false),"yhd://localweb",'"path":"leigou"'],[k("(/)?",null,false),"yhd://home/",null]];
function n(a){if(l(a)){for(var b=0;b<j.length;b++){if(j[b][0].test(a)){return b}}}return -1}i.addNativeListener=function(){var a=o.isWireless2();if(a){$("body").on("click","a,area",function(){var G=$(this);var K=$.trim(G.attr("href"));if(l(K)){var c=m.getData(G);var I={};if(c){var H=c.tc;var N=c.tp;I.tp=N;I.tc=H}var b=n(K);var M="";if(b>=0){if(j[b][2]){M=j[b][2];var F=K.match(j[b][0]);var D=new RegExp("\\d{1,3}");var g=new RegExp("\\$\\{(\\d{1,3})\\}","g");var h=M.match(g);if(h&&h.length>0&&h.length<=F.length){for(var d=0;d<h.length;d++){M=M.replace(h[d],decodeURI(F[h[d].match(D)[0]]))}}var J=new RegExp("#\\{([a-zA-Z0-9_]{1,30})\\}","g");var L=M.match(J);if(L&&L.length>0){var f=p.getParams(K);for(var e=0;e<L.length;e++){var E=L[e].match("[a-zA-Z0-9_]{1,30}")[0];if(f[E]){M=M.replace(L[e],decodeURI(f[E]))
}else{return true}}}}if(M.length>0){M+=","}M+='"tp":"'+I.tp+'",';M+='"tc":"'+I.tc+'"';M="{"+M+"}";o.goToNative(j[b][1],M);return false}else{return true}}})}return true};return i});