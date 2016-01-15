(function(b){b.extend(b.fn,{validate:function(a){if(!this.length){a&&a.debug&&window.console&&console.warn("nothing selected, can't validate, returning nothing");return}var d=b.data(this[0],"validator");if(d){return d}d=new b.validator(a,this[0]);b.data(this[0],"validator",d);if(d.settings.onsubmit){this.find("input, button").filter(".cancel").click(function(){d.cancelSubmit=true});if(d.settings.submitHandler){this.find("input, button").filter(":submit").click(function(){d.submitButton=this})}this.submit(function(f){if(d.settings.debug){f.preventDefault()}function c(){if(d.settings.submitHandler){if(d.submitButton){var e=b("<input type='hidden'/>").attr("name",d.submitButton.name).val(d.submitButton.value).appendTo(d.currentForm)}d.settings.submitHandler.call(d,d.currentForm);if(d.submitButton){e.remove()
}return false}return true}if(d.cancelSubmit){d.cancelSubmit=false;return c()}if(d.form()){if(d.pendingRequest){d.formSubmitted=true;return false}return c()}else{d.focusInvalid();return false}})}return d},valid:function(){if(b(this[0]).is("form")){return this.validate().form()}else{var d=true;var a=b(this[0].form).validate();this.each(function(){d&=a.element(this)});return d}},removeAttrs:function(e){var a={},f=this;b.each(e.split(/\s/),function(d,c){a[c]=f.attr(c);f.removeAttr(c)});return a},rules:function(o,r){var m=this[0];if(o){var p=b.data(m.form,"validator").settings;var k=p.rules;var a=b.validator.staticRules(m);switch(o){case"add":b.extend(a,b.validator.normalizeRule(r));k[m.name]=a;if(r.messages){p.messages[m.name]=b.extend(p.messages[m.name],r.messages)}break;case"remove":if(!r){delete k[m.name];
return a}var l={};b.each(r.split(/\s/),function(d,c){l[c]=a[c];delete a[c]});return l}}var n=b.validator.normalizeRules(b.extend({},b.validator.metadataRules(m),b.validator.classRules(m),b.validator.attributeRules(m),b.validator.staticRules(m)),m);if(n.required){var q=n.required;delete n.required;n=b.extend({required:q},n)}return n}});b.extend(b.expr[":"],{blank:function(a){return !b.trim(""+a.value)},filled:function(a){return !!b.trim(""+a.value)},unchecked:function(a){return !a.checked}});b.validator=function(a,d){this.settings=b.extend(true,{},b.validator.defaults,a);this.currentForm=d;this.init()};b.validator.format=function(a,d){if(arguments.length==1){return function(){var c=b.makeArray(arguments);c.unshift(a);return b.validator.format.apply(this,c)}}if(arguments.length>2&&d.constructor!=Array){d=b.makeArray(arguments).slice(1)
}if(d.constructor!=Array){d=[d]}b.each(d,function(f,c){a=a.replace(new RegExp("\\{"+f+"\\}","g"),c)});return a};b.extend(b.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",validClass:"valid",errorElement:"label",focusInvalid:true,errorContainer:b([]),errorLabelContainer:b([]),onsubmit:true,ignore:[],ignoreTitle:false,onfocusin:function(a){this.lastActive=a;if(this.settings.focusCleanup&&!this.blockFocusCleanup){this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass);this.errorsFor(a).hide()}},onfocusout:function(a){if(!this.checkable(a)&&(a.name in this.submitted||!this.optional(a))){this.element(a)}},onkeyup:function(a){if(a.name in this.submitted||a==this.lastElement){this.element(a)}},onclick:function(a){if(a.name in this.submitted){this.element(a)
}else{if(a.parentNode.name in this.submitted){this.element(a.parentNode)}}},highlight:function(e,a,f){b(e).addClass(a).removeClass(f)},unhighlight:function(e,a,f){b(e).removeClass(a).addClass(f)}},setDefaults:function(a){b.extend(b.validator.defaults,a)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",accept:"Please enter a value with a valid extension.",maxlength:b.validator.format("Please enter no more than {0} characters."),minlength:b.validator.format("Please enter at least {0} characters."),rangelength:b.validator.format("Please enter a value between {0} and {1} characters long."),range:b.validator.format("Please enter a value between {0} and {1}."),max:b.validator.format("Please enter a value less than or equal to {0}."),min:b.validator.format("Please enter a value greater than or equal to {0}.")},autoCreateRanges:false,prototype:{init:function(){this.labelContainer=b(this.settings.errorLabelContainer);
this.errorContext=this.labelContainer.length&&this.labelContainer||b(this.currentForm);this.containers=b(this.settings.errorContainer).add(this.settings.errorLabelContainer);this.submitted={};this.valueCache={};this.pendingRequest=0;this.pending={};this.invalid={};this.reset();var a=(this.groups={});b.each(this.settings.groups,function(d,c){b.each(c.split(/\s/),function(i,j){a[j]=d})});var e=this.settings.rules;b.each(e,function(d,c){e[d]=b.validator.normalizeRule(c)});function f(c){var d=b.data(this[0].form,"validator"),h="on"+c.type.replace(/^validate/,"");d.settings[h]&&d.settings[h].call(d,this[0])}b(this.currentForm).validateDelegate(":text, :password, :file, select, textarea","focusin focusout keyup",f).validateDelegate(":radio, :checkbox, select, option","click",f);if(this.settings.invalidHandler){b(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler)
}},form:function(){this.checkForm();b.extend(this.submitted,this.errorMap);this.invalid=b.extend({},this.errorMap);if(!this.valid()){b(this.currentForm).triggerHandler("invalid-form",[this])}this.showErrors();return this.valid()},checkForm:function(){this.prepareForm();for(var a=0,d=(this.currentElements=this.elements());d[a];a++){this.check(d[a])}return this.valid()},element:function(d){d=this.clean(d);this.lastElement=d;this.prepareElement(d);this.currentElements=b(d);var a=this.check(d);if(a){delete this.invalid[d.name]}else{this.invalid[d.name]=true}if(!this.numberOfInvalids()){this.toHide=this.toHide.add(this.containers)}this.showErrors();return a},showErrors:function(d){if(d){b.extend(this.errorMap,d);this.errorList=[];for(var a in d){this.errorList.push({message:d[a],element:this.findByName(a)[0]})
}this.successList=b.grep(this.successList,function(c){return !(c.name in d)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){if(b.fn.resetForm){b(this.currentForm).resetForm()}this.submitted={};this.prepareForm();this.hideErrors();this.elements().removeClass(this.settings.errorClass)},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(e){var f=0;for(var a in e){f++}return f},hideErrors:function(){this.addWrapper(this.toHide).hide()},valid:function(){return this.size()==0},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid){try{b(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")
}catch(a){}}},findLastActive:function(){var a=this.lastActive;return a&&b.grep(this.errorList,function(d){return d.element.name==a.name}).length==1&&a},elements:function(){var d=this,a={};return b([]).add(this.currentForm.elements).filter(":input").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function(){!this.name&&d.settings.debug&&window.console&&console.error("%o has no name assigned",this);if(this.name in a||!d.objectLength(b(this).rules())){return false}a[this.name]=true;return true})},clean:function(a){return b(a)[0]},errors:function(){return b(this.settings.errorElement+"."+this.settings.errorClass,this.errorContext)},reset:function(){this.successList=[];this.errorList=[];this.errorMap={};this.toShow=b([]);this.toHide=b([]);this.currentElements=b([])},prepareForm:function(){this.reset();
this.toHide=this.errors().add(this.containers)},prepareElement:function(a){this.reset();this.toHide=this.errorsFor(a)},check:function(l){l=this.clean(l);if(this.checkable(l)){l=this.findByName(l.name)[0]}var e=b(l).rules();var k=false;for(method in e){var i={method:method,parameters:e[method]};try{var a=b.validator.methods[method].call(this,l.value.replace(/\r/g,""),l,i.parameters);if(a=="dependency-mismatch"){k=true;continue}k=false;if(a=="pending"){this.toHide=this.toHide.not(this.errorsFor(l));return}if(!a){this.formatAndAdd(l,i);return false}}catch(j){this.settings.debug&&window.console&&console.log("exception occured when checking element "+l.id+", check the '"+i.method+"' method",j);throw j}}if(k){return}if(this.objectLength(e)){this.successList.push(l)}return true},customMetaMessage:function(a,e){if(!b.metadata){return
}var f=this.settings.meta?b(a).metadata()[this.settings.meta]:b(a).metadata();return f&&f.messages&&f.messages[e]},customMessage:function(f,e){var a=this.settings.messages[f];return a&&(a.constructor==String?a:a[e])},findDefined:function(){for(var a=0;a<arguments.length;a++){if(arguments[a]!==undefined){return arguments[a]}}return undefined},defaultMessage:function(a,d){return this.findDefined(this.customMessage(a.name,d),this.customMetaMessage(a,d),!this.settings.ignoreTitle&&a.title||undefined,b.validator.messages[d],"<strong>Warning: No message defined for "+a.name+"</strong>")},formatAndAdd:function(h,f){var g=this.defaultMessage(h,f.method),a=/\$?\{(\d+)\}/g;if(typeof g=="function"){g=g.call(this,f.parameters,h)}else{if(a.test(g)){g=jQuery.format(g.replace(a,"{$1}"),f.parameters)}}this.errorList.push({message:g,element:h});
this.errorMap[h.name]=g;this.submitted[h.name]=g},addWrapper:function(a){if(this.settings.wrapper){a=a.add(a.parent(this.settings.wrapper))}return a},defaultShowErrors:function(){for(var f=0;this.errorList[f];f++){var a=this.errorList[f];this.settings.highlight&&this.settings.highlight.call(this,a.element,this.settings.errorClass,this.settings.validClass);this.showLabel(a.element,a.message)}if(this.errorList.length){this.toShow=this.toShow.add(this.containers)}if(this.settings.success){for(var f=0;this.successList[f];f++){this.showLabel(this.successList[f])}}if(this.settings.unhighlight){for(var f=0,e=this.validElements();e[f];f++){this.settings.unhighlight.call(this,e[f],this.settings.errorClass,this.settings.validClass)}}this.toHide=this.toHide.not(this.toShow);this.hideErrors();this.addWrapper(this.toShow).show()
},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return b(this.errorList).map(function(){return this.element})},showLabel:function(f,e){var a=this.errorsFor(f);if(a.length){a.removeClass().addClass(this.settings.errorClass);a.attr("generated")&&a.html(e)}else{a=b("<"+this.settings.errorElement+"/>").attr({"for":this.idOrName(f),generated:true}).addClass(this.settings.errorClass).html(e||"");if(this.settings.wrapper){a=a.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()}if(!this.labelContainer.append(a).length){this.settings.errorPlacement?this.settings.errorPlacement(a,b(f)):a.insertAfter(f)}}if(!e&&this.settings.success){a.text("");typeof this.settings.success=="string"?a.addClass(this.settings.success):this.settings.success(a)
}this.toShow=this.toShow.add(a)},errorsFor:function(d){var a=this.idOrName(d);return this.errors().filter(function(){return b(this).attr("for")==a})},idOrName:function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)},checkable:function(a){return/radio|checkbox/i.test(a.type)},findByName:function(a){var d=this.currentForm;return b(document.getElementsByName(a)).map(function(f,c){return c.form==d&&c.name==a&&c||null})},getLength:function(d,a){switch(a.nodeName.toLowerCase()){case"select":return b("option:selected",a).length;case"input":if(this.checkable(a)){return this.findByName(a.name).filter(":checked").length}}return d.length},depend:function(d,a){return this.dependTypes[typeof d]?this.dependTypes[typeof d](d,a):true},dependTypes:{"boolean":function(d,a){return d},string:function(d,a){return !!b(d,a.form).length
},"function":function(d,a){return d(a)}},optional:function(a){return !b.validator.methods.required.call(this,b.trim(a.value),a)&&"dependency-mismatch"},startRequest:function(a){if(!this.pending[a.name]){this.pendingRequest++;this.pending[a.name]=true}},stopRequest:function(a,d){this.pendingRequest--;if(this.pendingRequest<0){this.pendingRequest=0}delete this.pending[a.name];if(d&&this.pendingRequest==0&&this.formSubmitted&&this.form()){b(this.currentForm).submit();this.formSubmitted=false}else{if(!d&&this.pendingRequest==0&&this.formSubmitted){b(this.currentForm).triggerHandler("invalid-form",[this]);this.formSubmitted=false}}},previousValue:function(a){return b.data(a,"previousValue")||b.data(a,"previousValue",{old:null,valid:true,message:this.defaultMessage(a,"remote")})}},classRuleSettings:{required:{required:true},email:{email:true},url:{url:true},date:{date:true},dateISO:{dateISO:true},dateDE:{dateDE:true},number:{number:true},numberDE:{numberDE:true},digits:{digits:true},creditcard:{creditcard:true}},addClassRules:function(a,d){a.constructor==String?this.classRuleSettings[a]=d:b.extend(this.classRuleSettings,a)
},classRules:function(f){var e={};var a=b(f).attr("class");a&&b.each(a.split(" "),function(){if(this in b.validator.classRuleSettings){b.extend(e,b.validator.classRuleSettings[this])}});return e},attributeRules:function(h){var f={};var a=b(h);for(method in b.validator.methods){var g=a.attr(method);if(g){f[method]=g}}if(f.maxlength&&/-1|2147483647|524288/.test(f.maxlength)){delete f.maxlength}return f},metadataRules:function(a){if(!b.metadata){return{}}var d=b.data(a.form,"validator").settings.meta;return d?b(a).metadata()[d]:b(a).metadata()},staticRules:function(f){var e={};var a=b.data(f.form,"validator");if(a.settings.rules){e=b.validator.normalizeRule(a.settings.rules[f.name])||{}}return e},normalizeRules:function(d,a){b.each(d,function(c,g){if(g===false){delete d[c];return}if(g.param||g.depends){var h=true;
switch(typeof g.depends){case"string":h=!!b(g.depends,a.form).length;break;case"function":h=g.depends.call(a,a);break}if(h){d[c]=g.param!==undefined?g.param:true}else{delete d[c]}}});b.each(d,function(f,c){d[f]=b.isFunction(c)?c(a):c});b.each(["minlength","maxlength","min","max"],function(){if(d[this]){d[this]=Number(d[this])}});b.each(["rangelength","range"],function(){if(d[this]){d[this]=[Number(d[this][0]),Number(d[this][1])]}});if(b.validator.autoCreateRanges){if(d.min&&d.max){d.range=[d.min,d.max];delete d.min;delete d.max}if(d.minlength&&d.maxlength){d.rangelength=[d.minlength,d.maxlength];delete d.minlength;delete d.maxlength}}if(d.messages){delete d.messages}return d},normalizeRule:function(d){if(typeof d=="string"){var a={};b.each(d.split(/\s/),function(){a[this]=true});d=a}return d
},addMethod:function(a,e,f){b.validator.methods[a]=e;b.validator.messages[a]=f!=undefined?f:b.validator.messages[a];if(e.length<3){b.validator.addClassRules(a,b.validator.normalizeRule(a))}},methods:{required:function(h,a,f){if(!this.depend(f,a)){return"dependency-mismatch"}switch(a.nodeName.toLowerCase()){case"select":var g=b(a).val();return g&&g.length>0;case"input":if(this.checkable(a)){return this.getLength(h,a)>0}default:return b.trim(h).length>0}},remote:function(i,l,h){if(this.optional(l)){return"dependency-mismatch"}var k=this.previousValue(l);if(!this.settings.messages[l.name]){this.settings.messages[l.name]={}}k.originalMessage=this.settings.messages[l.name].remote;this.settings.messages[l.name].remote=k.message;h=typeof h=="string"&&{url:h}||h;if(k.old!==i){k.old=i;var a=this;this.startRequest(l);
var j={};j[l.name]=i;b.ajax(b.extend(true,{url:h,mode:"abort",port:"validate"+l.name,dataType:"json",data:j,success:function(f){a.settings.messages[l.name].remote=k.originalMessage;var d=f===true;if(d){var g=a.formSubmitted;a.prepareElement(l);a.formSubmitted=g;a.successList.push(l);a.showErrors()}else{var c={};var e=(k.message=f||a.defaultMessage(l,"remote"));c[l.name]=b.isFunction(e)?e(i):e;a.showErrors(c)}k.valid=d;a.stopRequest(l,d)}},h));return"pending"}else{if(this.pending[l.name]){return"pending"}}return k.valid},minlength:function(f,a,e){return this.optional(a)||this.getLength(b.trim(f),a)>=e},maxlength:function(f,a,e){return this.optional(a)||this.getLength(b.trim(f),a)<=e},rangelength:function(g,a,f){var h=this.getLength(b.trim(g),a);return this.optional(a)||(h>=f[0]&&h<=f[1])},min:function(f,a,e){return this.optional(a)||f>=e
},max:function(f,a,e){return this.optional(a)||f<=e},range:function(f,a,e){return this.optional(a)||(f>=e[0]&&f<=e[1])},email:function(d,a){return this.optional(a)||/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(d)
},url:function(d,a){return this.optional(a)||/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(d)
},date:function(d,a){return this.optional(a)||!/Invalid|NaN/.test(new Date(d))},dateISO:function(d,a){return this.optional(a)||/^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(d)},number:function(d,a){return this.optional(a)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(d)},digits:function(d,a){return this.optional(a)||/^\d+$/.test(d)},creditcard:function(k,n){if(this.optional(n)){return"dependency-mismatch"}if(/[^0-9-]+/.test(k)){return false}var j=0,l=0,a=false;k=k.replace(/\D/g,"");for(var i=k.length-1;i>=0;i--){var m=k.charAt(i);var l=parseInt(m,10);if(a){if((l*=2)>9){l-=9}}j+=l;a=!a}return(j%10)==0},accept:function(f,a,e){e=typeof e=="string"?e.replace(/,/g,"|"):"png|jpe?g|gif";return this.optional(a)||f.match(new RegExp(".("+e+")$","i"))},equalTo:function(h,a,f){var g=b(f).unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){b(a).valid()
});return h==g.val()}}});b.format=b.validator.format})(jQuery);(function(f){var d=f.ajax;var e={};f.ajax=function(a){a=f.extend(a,f.extend({},f.ajaxSettings,a));var b=a.port;if(a.mode=="abort"){if(e[b]){e[b].abort()}return(e[b]=d.apply(this,arguments))}return d.apply(this,arguments)}})(jQuery);(function(b){if(!jQuery.event.special.focusin&&!jQuery.event.special.focusout&&document.addEventListener){b.each({focus:"focusin",blur:"focusout"},function(f,a){b.event.special[a]={setup:function(){this.addEventListener(f,e,true)},teardown:function(){this.removeEventListener(f,e,true)},handler:function(c){arguments[0]=b.event.fix(c);arguments[0].type=a;return b.event.handle.apply(this,arguments)}};function e(c){c=b.event.fix(c);c.type=a;return b.event.handle.call(this,c)}})}b.extend(b.fn,{validateDelegate:function(e,f,a){return this.bind(f,function(d){var c=b(d.target);
if(c.is(e)){return a.apply(c,arguments)}})}})})(jQuery);