function isMobile(j){var k=j;if(k!=null&&k!=""){var l=/^13\d{9}$/;var m=/^15\d{9}$/;var n=/^0\d{10,11}$/;var h=/^18\d{9}$/;var i=false;if(l.test(k)){i=true}if(m.test(k)){i=true}if(n.test(k)){i=true}if(h.test(k)){i=true}return i}else{return false}}function isIE6(){if(window.XMLHttpRequest){return false}else{if(window.ActiveXObject){var e=navigator.appName;var g=navigator.appVersion;var f=g.split(";");var h=f[1].replace(/[ ]/g,"");if(e=="Microsoft Internet Explorer"&&h=="MSIE7.0"){return false}else{if(e=="Microsoft Internet Explorer"&&h=="MSIE6.0"){return true}}}}}function initTabSwitchMouseOverEvent(h,i,j){var g=jQuery(h);var f=jQuery(i);if(g&&g.size()>1){jQuery(g).mouseover(function(){var b=jQuery(h+"."+j);var a=jQuery(this);var c=g.index(b);var d=g.index(a);b.removeClass(j);a.addClass(j);f.eq(c).hide();
f.eq(d).show()})}};