(function(c){Array.prototype.contains=function(a){for(var b=0;b<this.length;b++){if(this[b]==c.trim(a)){return true}}return false};var d={getWhiteList:function(){var b;var f=c("#globalcookiewhitelist");if(!f||!f.val()){return[]}var a=f.val();b=a.split(",");return b},getGlobalCookie:function(){var a=document.cookie.split(";");return a},deleteCookie:function(b,a){var f=new Date();f.setTime(f.getTime());document.cookie=b+"="+a+";expires="+f.toGMTString()+";domain=.yhd.com;path=/;"},handleBlackListCookie:function(){var j=this.getWhiteList();var a=this.getGlobalCookie();if(j.length==0||a.length==0){return}for(var h=0;h<a.length;h++){if(a[h]&&a[h].split("=").length>0){var i=c.trim(a[h].split("=")[0]);var b=a[h].split("=")[1];if(!contains(j,i)){this.deleteCookie(i,b)}}}}};c(document).ready(function(){var a=c("#globalcookiewhitelist");
if(!a||!a.val()){return}setTimeout(function(){d.handleBlackListCookie()},3000)})})(jQuery);