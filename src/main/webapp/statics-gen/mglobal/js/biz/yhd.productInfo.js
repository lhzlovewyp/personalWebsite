define(["global_env","exports"],function(s,t){var v="http://gps.yhd.com";var o=s.getProvinceId()||1;var u=v+"/restful/groupon?provinceId="+o;var m=v+"/restful/promotion?provinceId="+o;var r=1;var p=102;var q=function(c){if(!c||c.length<1){return""}var b="";for(var a=0;a<c.length;a++){if(c[a]==""){continue}b+="&grouponIds="+c[a]}return u+"&channelId="+p+b+"&callback=?"};function x(c){if(!c||c.length<1){return""}var b="";for(var a=0;a<c.length;a++){if(c[a]==""){continue}b+="&pmIds="+c[a]}return m+"&channelId="+p+b+"&callback=?"}function n(f,c){if(!f||f.length<1){return""}var b="";for(var d=0;d<f.length;d++){if(f[d]==""){continue}b+="&promotionIds="+f[d]}var e="";if(c&&c.length>0){for(var d=0,a=c.length;d<a;d++){e+="&pmIds="+c[d]}}return m+"&channelId="+r+b+e+"&callback=?"}function w(b,a){if(!b||!b.ids){return
}var c;if(b.productType==="groupon"){c=q(b.ids)}else{if(b.productType==="promotion"){c=n(b.promotionIds,b.pmIds)}else{c=x(b.ids)}}$.getJSON(c,function(d){a(d,b)})}return{getProductInfo:w};t.getProductInfo=w});