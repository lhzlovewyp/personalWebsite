jQuery(document).ready(function(){if(isIndex!=1){}});function initPrompt(){jQuery("#changeReceiverGoodsCity").click(function(){var b=jQuery("#buyPromptDiv");var c=parseInt(b.css("top").replace("px",""))+75;var a=parseInt(b.css("left").replace("px",""))+225;jQuery("#receiverGoodsCityDiv").css("top",c+"px");jQuery("#receiverGoodsCityDiv").css("left",a+"px");jQuery(window).scroll(function(){var e=parseInt(b.css("top").replace("px",""))+75;var d=parseInt(b.css("left").replace("px",""))+225;jQuery("#receiverGoodsCityDiv").css("top",e+"px");jQuery("#receiverGoodsCityDiv").css("left",d+"px")});jQuery("#receiverGoodsCityDiv").show()});jQuery("#closeReceiverGoodsCity").click(function(){jQuery("#receiverGoodsCityDiv").hide()});jQuery("#validate").click(function(){jQuery("#buyPromptDiv").hide();setPromptCookie();
jQuery("#receiverGoodsCityDiv").hide()})}function changeReceiverGoodsCity(id){jQuery("#selectCity").val(id);if(jQuery("#p_"+id)){var city=jQuery("#p_"+id).find("a").text()}jQuery("#selectCity").text(city);jQuery("#cityId").attr("value",id);jQuery("#message").text("");jQuery("#receiverGoodsCityDiv").hide();var productId=jQuery("#validateProductId").val();var num=typeof(jQuery("#validateQty").val())=="undefined"?1:jQuery("#validateQty").val();var param="productID="+productId+"&productNum="+num+"&provinceId="+id;var url=URLPrefix.central+"/product/validateProductInProvince.do?productID="+productId+"&productNum="+num+"&provinceId="+id+"&callback=?";jQuery.getJSON(url,function(data){if(data.ERROR){}else{try{html=eval("("+data.value+")")}catch(e){jQuery("#message").text("系统出错")}if(html.result=="success"){var provinceId=jQuery.cookie("provinceId");
if(id!=provinceId){jQuery("#validate").unbind("click");jQuery("#validate").bind("click",function(){setPromptCookie();setAddressCity(id)})}else{}}else{var value=html["key_"+productId];if(value){jQuery("#message").text(value)}jQuery("#validate").bind("click",function(){jQuery("#buyPromptDiv").hide()})}}})}function setPromptCookie(){var b;if(typeof(promptExpireTime)=="undefined"&&!jQuery("#promptExpireTime")){b=10}else{b=jQuery("#promptExpireTime").val()}b=b?b:10;var a=new Date();var c=a.getTime()+b*24*1000*3600;a.setTime(c);document.cookie="prompt_flag=1;path=/;domain=."+no3wUrl+";expires="+a.toGMTString()};