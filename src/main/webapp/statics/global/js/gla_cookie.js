/* SVN.committedRevision=1532223 */
var glaCookieHandler={};(function(n){var w=function(a){var d=document.cookie;var c=d.split("; ");for(var e=0;e<c.length;e++){var b=c[e].split("=");if(b[0]==a){return b[1]}}return null};var o="gla";var n=n||{},z=w("provinceId"),x=w(o);var p={p_1:"-10",p_2:"-20",p_3:"-30",p_4:"25",p_5:"37",p_6:"50",p_7:"-40",p_8:"62",p_9:"75",p_10:"88",p_11:"97",p_12:"111",p_13:"133",p_14:"150",p_15:"159",p_16:"170",p_17:"187",p_18:"205",p_19:"222",p_20:"237",p_21:"258",p_22:"274",p_23:"294",p_24:"303",p_25:"320",p_26:"327",p_27:"337",p_28:"351",p_29:"359",p_30:"377",p_32:"387"};function v(){var a=u();if(a&&a.provinceId){return a.provinceId}else{return z}}function q(){var a=u();if(a&&a.cityId){return a.provinceId}return null}function y(){var b=false;var a=u();if(z&&a&&a.provinceId&&a.provinceId==z){b=true}return b
}function u(){if(!x){return null}var c={};var b=x.split("_");var a=b[0].split(".");if(a.length<2){return null}c.provinceId=a[0];c.cityId=a[1];c.hasUnionSite=false;if(b.length>1&&b[1]!="0"){c.hasUnionSite=true;c.unionSiteDomain=b[1]}c.willingToUnionSite=1;if(b.length>2&&b[2]=="0"){c.willingToUnionSite=0}if(b.length>3&&b[3]=="1"){c.isMain=1}return c}function r(c){if(!c||!c.provinceId){return}if(!c.cityId){c.cityId=p["p_"+c.provinceId]}var a=[];a.push(c.provinceId+"."+c.cityId);if(c.unionSiteDomain){a.push(c.unionSiteDomain);if(c.willingToUnionSite&&c.willingToUnionSite!="0"){a.push(1)}else{a.push(0)}}else{a.push(0)}if(c.isMain){a.push(1)}else{a.push(0)}var b=new Date();b.setTime(new Date().getTime()+5*24*60*60*1000);document.cookie=o+"="+a.join("_")+";path=/;domain=."+no3wUrl+";expires="+b.toGMTString()
}function t(b){if(!b||!b.provinceId){return}r(b);var a=new Date();a.setTime(new Date().getTime()+800*24*60*60*1000);document.cookie="provinceId="+b.provinceId+";path=/;domain=."+no3wUrl+";expires="+a.toGMTString()}function s(){var b="";if(y()){var a=u();if(a&&a.unionSiteDomain&&a.willingToUnionSite){b=a.unionSiteDomain}}return b}n.glaCookieKey=o;n.defaultCityObj=p;n.analysisGla=u;n.genGlaCookie=r;n.gotoUnionSite=s;n.getCookie=w;n.check2ProvinceIsSame=y;n.resetGlaAndProvinceCookie=t;n.getProvinceId=v})(glaCookieHandler);