(function(a){a(function(){var c=function(){var d=(typeof hideGlobalCookieCheckMsgFlag!="undefined"&&hideGlobalCookieCheckMsgFlag=="1")?1:0;if(d){return}var f="提示消息";var e=[];e.push("<div>");e.push("<style>");e.push(".no_cookie {height:150px;width:500px;text-align:center;padding:20px;font-size:20px;}");e.push(".no_cookie a:link,.no_cookie a:visited {color:blue; text-decoration: none;}");e.push(".no_cookie a:hover,.no_cookie a:active {color:blue; text-decoration: underline;}");e.push("</style>");e.push("<div class='no_cookie'>由于您使用的浏览器设置问题可能导致网页运行不正常。请您启用浏览器Cookie功能或更换浏览器。<br/><a href='http://cms.yhd.com/cms/view.do?topicId=24243' target='_blank'>如何启用Cookie？</a></div>");e.push("</div>");yhdLib.popwin({poptitle:f,popcontentstr:e.join("")})};if(!window.navigator.cookieEnabled){c()}else{jQuery.cookie("test_cookie","1");
if(jQuery.cookie("test_cookie")){var b=new Date();b.setTime(b.getTime()-10000);document.cookie="test_cookie=;path=;domain=;expires="+b.toGMTString()}else{c()}}})})(jQuery);