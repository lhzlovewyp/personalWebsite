var tracker_domain_url="yhd.com";function getQueryStringRegExp(b){var a=location.href;if(a&&a.indexOf("#")>0){a=a.substring(0,a.indexOf("#"))}var c=new RegExp("(^|\\?|&)"+b+"=([^&]*)(\\s|&|$)","i");if(c.test(a)){return unescape(RegExp.$2.replace(/\+/g," "))}else{return""}}var referrer=document.referrer?document.referrer:"";var referrerDomain=referrer.match(/http[s]?:\/\/([^\/]+)/);var ref=getQueryStringRegExp("tracker_u");var uid=getQueryStringRegExp("uid");var websiteid=getQueryStringRegExp("website_id");var utype=getQueryStringRegExp("tracker_type");var adgroupKeywordID=getQueryStringRegExp("adgroupKeywordID");var edmEmail=getQueryStringRegExp("emailId");var expire_time_day=new Date((new Date()).getTime()+1*24*3600000).toGMTString();var expire_time_mouth=new Date((new Date()).getTime()+30*24*3600000).toGMTString();
if(ref&&!isNaN(ref)&&(referrerDomain==null||referrerDomain[1].indexOf("union.yhd.com")!=-1||referrerDomain[1].indexOf(tracker_domain_url)==-1)){document.cookie="unionKey="+ref+";expires="+expire_time_day+";domain=."+tracker_domain_url+";path=/";if(uid){document.cookie="uid="+uid+";expires="+expire_time_day+";domain=."+tracker_domain_url+";path=/"}else{document.cookie="uid=;expires="+-1+";domain=."+tracker_domain_url+";path=/"}if(websiteid){document.cookie="websiteid="+websiteid+";expires="+expire_time_day+";domain=."+tracker_domain_url+";path=/"}else{document.cookie="websiteid=;expires="+-1+";domain=."+tracker_domain_url+";path=/"}}if(adgroupKeywordID){document.cookie="adgroupKeywordID="+adgroupKeywordID+";expires="+expire_time_day+";domain=."+tracker_domain_url+";path=/"}if(utype){document.cookie="unionType="+utype+";expires="+expire_time_mouth+";domain=."+tracker_domain_url+";path=/"
}if(edmEmail){document.cookie="edmEmail="+edmEmail+";domain=."+tracker_domain_url+";path=/"};