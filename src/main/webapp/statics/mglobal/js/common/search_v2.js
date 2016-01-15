define("common_search",["tracker_ref_yhd.global_spm","common_yhd.storage"],function(j,d){var l={};var g=(typeof isSearchKeyWords!="undefined"&&isSearchKeyWords=="1")?1:0;var n=(typeof indexFlag!="undefined"&&indexFlag==1)?1:0;var b=(typeof globalSearchSelectFlag!="undefined"&&globalSearchSelectFlag=="0")?0:1;var f=$("#keyword");var k=$("#searchSuggest");var c=$("#searchBtn");var a=$("#searchBox");var o=window.loli||(window.loli={});var i=o.app=o.app||{};var h=o.app.search=o.app.search||{};var e=URLPrefix.search||"http://search.m.yhd.com";h.delayCall=function(s,p,v,r){var q=$(s);q.lastTime=new Date().getTime();if(p){var t=p.call(q);q.lastResult=t}var u=setTimeout(function(){var x=q.lastTime?q.lastTime:new Date().getTime();var w=(typeof q.lastResult=="undefined"||q.lastResult)?true:false;var y=new Date().getTime();
if(y-x>=(r-50)){if(v&&w){v.call(q)}}},r)};h.filterXml=function(p){if(p!=null&&p!=""){p=p.replace(/\&/g,"");p=p.replace(/\</g,"");p=p.replace(/\>/g,"");p=p.replace(/\\/g,"");p=p.replace(/\'/g,"");p=p.replace(/\"/g,"")}return p};h.saveKeyword=function(q,p){var r=d;if(r){r.getFromRoot("search_keyword_history",function(s){if(s&&s.status==1){var v=s.value;var t=[];var x=[];if(v){t=v.split(",")}for(var w=0;w<t.length;w++){var u=h.filterXml(decodeURIComponent(decodeURIComponent(t[w])));if(u!=null&&u.length>0){x.push(u)}}var y=false;for(var w=0;w<x.length;w++){if(x[w]==q){y=true;break}}if(!y){x.push(q);if(x.length>10){x.shift()}for(var w=0;w<x.length;w++){x[w]=encodeURIComponent(encodeURIComponent(x[w]))}r.setFromRoot("search_keyword_history",x.join(","),function(z){if(z&&z.status==1){if(p){p()}}})
}else{if(p){p()}}}})}if(p){setTimeout(function(){p()},3*1000)}};h.getSearchKeywordUrl=function(r,p,q){if(q){r=r+" "+q}if(!p){p="0";return e+"/search/k"+encodeURIComponent(r)}return e+"/search/c"+p+"-0/k"+encodeURIComponent(r)};h.goSearch=function(q,s,p){var r=function(){var t=h.getSearchKeywordUrl(q,s,p);j.refreshPage(t,a)};h.saveKeyword(q,r)};h.showHistory=function(p,r){if(!b){return}var q=p.val();var s=d;var u=function(){var v=e+"/search/getSmartKeyword/?callback=?";$.getJSON(v,function(z){if(z&&z.hotSearchKeywords&&z.hotSearchKeywords.length>0){var x=[];for(var w=0;w<z.hotSearchKeywords.length;w++){var y=h.filterXml(z.hotSearchKeywords[w]);x.push("<a class='item' href='javascript:goSearch(\""+y+"\")'>"+y+"</a>")}$("div.tags",r).html(x.join(""));$("div.tags",r).show()}if(s){s.getFromRoot("search_keyword_history",function(B){if(B&&B.status==1){var C=B.value;
var F=[];var E=[];if(C){F=C.split(",")}for(var D=F.length-1;D>=0;D--){var A=h.filterXml(decodeURIComponent(decodeURIComponent(F[D])));if(A!=null&&A.length>0){E.push("<li><a class='link_text' href='javascript:goSearch(\""+A+"\")'>");E.push("<span class='icon icon-history'></span>");E.push("<span class='text'>"+A+"</span>");E.push("<span class='icon_arrow icon-right_arrow'></span>");E.push("</a></li>")}}$("ul",r).html(E.join(""));if(F.length==0){r.find("a.clear_history").hide()}else{r.find("a.clear_history").show()}}})}$("#globalHeader").addClass("search_show");t(p,r)})};var t=function(v,w){w.on("click","a.clear_history",function(){s.setFromRoot("search_keyword_history","");$(this).hide();$("ul",w).html("")})};if(q==""||$.trim(q)==""){u()}};h.showSuggest=function(q,s){if(!b){return}var r=h.filterXml(q.val());
var p=function(){var t=e+"/search/getSmartKeyword/?keyword="+encodeURIComponent(r)+"&callback=?";$.getJSON(t,function(x){if(x){var v=[];var y=r;if(x.keywords&&x.keywords.length>0){var w=x.keywords[0];y=x.keywords[0].keyword;v.push("<li>");v.push("<a class='link_text' href='javascript:goSearch(\""+w.keyword+"\")'>");v.push("<span class='icon icon-search'></span>");v.push("<span class='text'>"+w.keyword+"</span>");v.push("</a>");for(var z=0;z<w.attrs.length;z++){v.push("<a class='link_tag' href='javascript:goSearch(\""+w.keyword+'",0,"'+w.attrs[z]+"\")'>"+w.attrs[z]+"</a>")}v.push("</li>")}if(x.recommendCID1&&x.recommendCNA1){v.push("<li><a class='link_text' href='javascript:goSearch(\""+y+'","'+x.recommendCID1+"\")'>");v.push("<span class='icon icon-sort'></span>");v.push("<span class='text_category'>在<strong>"+x.recommendCNA1+"</strong>分类中搜索</span>");
v.push("<span class='icon_arrow icon-right_arrow'></span>");v.push("</li></a>")}if(x.recommendCID2&&x.recommendCNA2){v.push("<li><a class='link_text' href='javascript:goSearch(\""+y+'","'+x.recommendCID2+"\")'>");v.push("<span class='icon icon-sort'></span>");v.push("<span class='text_category'>在<strong>"+x.recommendCNA2+"</strong>分类中搜索</span>");v.push("<span class='icon_arrow icon-right_arrow'></span>");v.push("</li></a>")}if(x.keywords&&x.keywords.length>0){for(var u=1;u<x.keywords.length;u++){var w=x.keywords[u];v.push("<li>");v.push("<a class='link_text' href='javascript:goSearch(\""+w.keyword+"\")'>");v.push("<span class='icon icon-search'></span>");v.push("<span class='text'>"+w.keyword+"</span>");v.push("</a>");for(var z=0;z<w.attrs.length;z++){v.push("<a class='link_tag' href='javascript:goSearch(\""+w.keyword+'",0,"'+w.attrs[z]+"\")'>"+w.attrs[z]+"</a>")
}v.push("</li>")}}$("ul",s).html(v.join(""));$("div.tags",s).hide();s.find("a.clear_history").hide();$("#globalHeader").addClass("search_show")}})};if(r!=""&&$.trim(r)!=""){p()}};h.registerGlobalEvent=function(){var q=function(t,r,v){t=t||window.event;if(t){var u=t.keyCode;if(u=="116"||u=="16"||u=="17"||u=="18"||u=="38"||u=="40"||u=="13"){return}}var s=h.filterXml(r.val());if(s==""||$.trim(s)==""){h.delayCall(r,function(){a.find("span.icon_delete").hide()},function(){h.showHistory(r,v)},200)}else{h.delayCall(r,function(){a.find("span.icon_delete").show()},function(){h.showSuggest(r,v)},200)}};var p=function(t,r,u){var s=h.filterXml(r.val());if(s==""||$.trim(s)==""){h.delayCall(r,null,function(){h.showHistory(r,u)},200)}else{h.delayCall(r,null,function(){h.showSuggest(r,u)},200)}};f.on("focus",function(r){p(r,f,k)
});f.on("input",function(r){q(r,f,k)});c.on("click",function(s){var r=h.filterXml(f.val());if(r!=""&&$.trim(r)!=""){h.goSearch(r)}});$("#searchForm").on("submit",function(){var r=h.filterXml(f.val());if(r!=""&&$.trim(r)!=""){h.goSearch(r)}return false});m()};function m(){a.on("click","span.icon_back",function(){f.val(f.attr("data-original"));a.find("span.icon_delete").hide();$("#globalHeader").removeClass("search_show")});a.on("click","span.icon_delete",function(p){f.val("");a.find("span.icon_delete").hide();f.trigger("focus")});$("#searchMask").on("click",function(){f.val(f.attr("data-original"));a.find("span.icon_delete").hide();$("#globalHeader").removeClass("search_show")})}l.init=function(){if("shop"==globalTopType||"groupShop"==globalTopType){m();f.on("click",function(){$("#globalHeader").addClass("search_show");
k.hide()});return}h.registerGlobalEvent();window.goSearch=function(r,p,q){h.goSearch(r,p,q)}};l.show=function(){var p=h.filterXml(f.val());if(p==""||$.trim(p)==""){h.showHistory(f,k)}else{h.showSuggest(f,k)}};return l});