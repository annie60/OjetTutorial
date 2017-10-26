/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","promise","ojs/ojcomponentcore","ojs/ojpopupcore","ojs/ojanimation"],function(a,g){(function(){var c="oj-left oj-center oj-right oj-top oj-middle oj-bottom".split(" "),b={"right-top":"oj-right oj-top","right-middle":"oj-right oj-middle","right-bottom":"oj-right oj-bottom","left-top":"oj-left oj-top","left-middle":"oj-left oj-middle","left-bottom":"oj-left oj-bottom","center-top":"oj-center oj-top","center-middle":"oj-left oj-middle","center-bottom":"oj-center oj-bottom"};
a.ib("oj.ojPopup",g.oj.baseComponent,{widgetEventPrefix:"oj",options:{animation:null,autoDismiss:"focusLoss",chrome:"default",initialFocus:"auto",position:{my:{horizontal:"start",vertical:"top"},offset:{x:0,y:0},at:{horizontal:"start",vertical:"bottom"},of:void 0,collision:"flip"},tail:"none",modality:"modeless",role:"tooltip",beforeOpen:null,open:null,beforeClose:null,close:null,focus:null,animateStart:null,animateEnd:null},qc:function(){this._super();var b=this.element;b.hide().addClass("oj-popup").attr("aria-hidden",
"true");b.addClass("oj-component");var c=g("\x3cdiv\x3e");c.addClass("oj-popup-content");c.attr("role","presentation");c.append(b[0].childNodes);c.appendTo(b);this.AH=c;this.voa();this.L4(b);b=this.options;b.position=a.La.oT(b.position)},Df:function(){this._super();this.element.uniqueId();this.yfa()},_destroy:function(){this.isOpen()&&this.Qq();this.ao("none");this.dga();delete this.tp;var a=this.element;a.hide().attr("aria-hidden","true").removeUniqueId();var b=this.AH;delete this.AH;a.append(b[0].childNodes);
b.remove();if(a=this.qC)delete this.qC,a();this.ega();this._super()},open:function(b,c){if(!this.aw("open",[b,c])){this.isOpen()&&this.Qq();this.rTa(b);var f=this.element;b=this.We;if(!1!==this._trigger("beforeOpen")){this.ao("open");var g=this.options;c=c?c:g.position;c.of||(this.Wja=!0,c.of=b);this.Soa(c);this.t4(g.autoDismiss);this.QCa();this.Y()&&f[0].hasAttribute.role||f.attr("role",g.role);c=this.Eia();var k="oj-popup-layer",l=g.tail;"none"!==l&&(k+=" "+["oj-popup-tail",l].join("-"));l={};l[a.ca.Ga.Oe]=
f;l[a.ca.Ga.xB]=b;l[a.ca.Ga.Ds]=c;l[a.ca.Ga.xs]=this.YC();l[a.ca.Ga.Pu]=k;l[a.ca.Ga.nm]=g.modality;l[a.ca.Ga.LF]=this.Y();a.ca.Ta().open(l)}}},lH:function(b){var c=b[a.ca.Ga.Oe];b=b[a.ca.Ga.Ds];c.show();c.position(b);if((b=this.options.animation)&&b.open){var f=b.actionPrefix;return a.ea.wi(c[0],f?[f,"open"].join("-"):"open",a.La.eT(c,b.open),this)}},aH:function(b){var c=b[a.ca.Ga.Oe];b=b[a.ca.Ga.xB];this._trigger("open");this.t2();this.FNa();this._on(c,{keydown:this.qD,keyup:this.qD});b&&0<b.length&&
this._on(b,{keydown:this.qD,keyup:this.qD})},close:function(){if(!this.aw("close",[])&&this.isOpen()&&(!1!==this._trigger("beforeClose")||this.nz)){this.ao("close");this.vSa();var b=this.We,c=this.element;this._off(c,"keydown keyup");b&&0<b.length&&this._off(b,"keydown keyup");this.ega();b={};b[a.ca.Ga.Oe]=c;a.ca.Ta().close(b)}},kH:function(b){var c=b[a.ca.Ga.Oe];b=this.options.animation;if(!this.nz&&b&&b.close){var f=c.attr("style"),g=b.actionPrefix;return a.ea.wi(c[0],g?[g,"close"].join("-"):"close",
a.La.eT(c,b.close),this).then(function(){c.attr("style",f);c.hide()})}c.hide()},$s:function(){this.sRa();this.t4();delete this.We;this._trigger("close");this.Wja&&(this.options.position.of=null,delete this.Wja)},isOpen:function(){var b=a.ba.BA(this.element);return b===a.ba.Gi.GW||b===a.ba.Gi.OPEN||b===a.ba.Gi.bW},refresh:function(){this._super();if(this.isOpen()&&this.Kna()){var b=this.element;a.ca.Ta().LV(b,a.ca.uc.Cs)}},_setOption:function(b,c){var f=this.options;switch(b){case "tail":c!==f.tail&&
this.LTa(c);break;case "chrome":c!==f.chrome&&this.voa(c);break;case "position":this.Soa(c);this.refresh();return;case "autoDismiss":this.isOpen()&&c!==f.autoDismiss&&this.t4(c);break;case "modality":this.isOpen()&&(f={},f[a.ca.Ga.Oe]=this.element,f[a.ca.Ga.nm]=c,a.ca.Ta().wE(f))}this._superApply(arguments)},M2a:function(){return"oj-popup"},LTa:function(a){this.dga();this.yfa(a);this.Kna()},yfa:function(b){b=b?b:this.options.tail;if("none"!==b){b=["oj-popup-tail",b].join("-");var c=g("\x3cdiv\x3e").hide();
c.addClass("oj-popup-tail").addClass(b);c.attr("role","presentation");this.Tpa=c.attr("id",this.b1("tail")).attr("id");var f=this.element;c.appendTo(f);f.addClass(b);this.isOpen()&&(c={},c[a.ca.Ga.Oe]=f,c[a.ca.Ga.Pu]="oj-popup-layer "+b,a.ca.Ta().wE(c))}},Xia:function(){var a=this.Tpa;return a?g(document.getElementById(a)):null},dga:function(){var b=this.Xia();b&&b.remove();delete this.Tpa;b=this.element;b.removeClass(["oj-popup-tail",this.options.tail].join("-"));if(this.isOpen()){var c={};c[a.ca.Ga.Oe]=
b;c[a.ca.Ga.Pu]="oj-popup-layer";a.ca.Ta().wE(c)}},voa:function(a){a=a?a:this.options.chrome;var b=this.element;"default"===a&&b.hasClass("oj-popup-no-chrome")?b.removeClass("oj-popup-no-chrome"):"none"!==a||b.hasClass("oj-popup-no-chrome")||b.addClass("oj-popup-no-chrome")},rTa:function(b){b?"string"===g.type(b)?b=g(b):1===b.nodeType&&(b=g(b)):b=g(document.activeElement);if(b instanceof g&&1<b.length)for(var c=this.element,f=0;f<b.length;f++){var h=b[0];if(!a.T.Ww(c[0],h)){b=g(h);break}}else if(!(b instanceof
g)||b instanceof g&&0===b.length)b=g(document.activeElement);this.We=b},Soa:function(b){var c=this.options;b&&(c.position=a.La.oT(b,c.position))},Eia:function(){var b=a.La.o6(this.options.position),c="rtl"===this.Qc(),b=a.La.$p(b,c),c=b.using,c=g.isFunction(c)?c:null;b.using=this.DK.bind(this,c);return b},mSa:function(a){a();delete this.qC;this.Qq()},lSa:function(a,b){window.clearTimeout(a);b()},DK:function(d,e,f){var g=f.element.element;if(e.top!==g.css("top")||e.left!==g.css("left")){var k=this.Xia();
if(k){k.hide();for(var l=0;l<c.length;l++)k.removeClass(c[l]),g.removeClass(c[l]);k.removeAttr("style");if(f.target&&0===f.target.height&&0===f.target.width&&(l="rtl"===this.Qc(),l=a.La.$p(this.options.position,l).my,!a.Xa.mo(l))){var m="center"===l.vertical?"middle":l.vertical;f.horizontal="center"===l.horizontal?l.horizontal:f.horizontal;f.vertical=m}l=b[[f.horizontal,f.vertical].join("-")];k.addClass(l);g.addClass(l);k.show();"left"===f.horizontal?(l=k.outerWidth(),l-=l+a.T.Lp(k.css("left")),e.left+=
l-2):"right"===f.horizontal&&(l=k.outerWidth(),l-=l+a.T.Lp(k.css("right")),e.left-=l-2);"top"===f.vertical?(l=k.outerHeight(),l-=l+a.T.Lp(k.css(f.vertical)),e.top+=l-2):"bottom"===f.vertical&&(l=k.outerHeight(),l-=l+a.T.Lp(k.css(f.vertical)),e.top-=l-2);g.css(e);"center"===f.horizontal&&"middle"!==f.vertical?(l=g.width(),l=Math.round((l/2-k.outerWidth()/2)/l*100),k.css({left:l+"%"})):"middle"===f.vertical&&(l=g.height(),l=Math.round((l/2-k.outerHeight()/2)/l*100),k.css({top:l+"%"}))}else g.css(e);
a.La.fra(g,f);d&&d(e,f);"focusLoss"===this.options.autoDismiss&&a.La.L7(f)&&(this.k2=!0,d=a.Context.getContext(this.element[0]).md(),e={description:["ojPopup identified by '",this.element.attr("id"),"' is pending implicit closure."].join("")},d=d.ad(e),e=window.setTimeout(this.mSa.bind(this,d),0),this.qC=this.lSa.bind(this,e,d))}},Kna:function(){var b=this.element,c=this.Eia();if(a.Xa.Bd(c.of)){var f=g(c.of);if(0===f.length)return!1;c.of=f}b.position(c);return!0},t2:function(b){var c=this.KGa();b&&
"none"===c&&(c="popup");if("firstFocusable"===c){b=this.AH.find(":focusable");for(var f,g=0;g<b.length;g++)if(a.mf.cF(b[g])){f=b[g];break}f?(f.focus(),this._trigger("focus")):c="popup"}"popup"===c&&(c=this.element,c.attr("tabindex","-1"),c.focus(),this._trigger("focus"))},KGa:function(){var b=this.options,c=b.initialFocus;"auto"===c&&(c="modal"===b.modality?a.T.ie()?"popup":"firstFocusable":"none");return c},$Q:function(b,c){b||(b=document.activeElement);if(!b)return!1;var f=this.element;c&&(f=f.parent());
return a.T.Ww(f[0],b)},$ka:function(b){b||(b=document.activeElement);return a.T.Ww(this.We[0],b)},vSa:function(){this.k2?delete this.k2:this.$Q(null,!0)&&this.We.focus()},qD:function(a){if(!a.isDefaultPrevented()){var b=a.type,c=this.AH,h=a.target;if("keyup"===b&&a.keyCode===g.ui.keyCode.ESCAPE&&(this.$Q(h)||this.$ka(h)))a.preventDefault(),this.close();else if("keydown"===b&&117===a.keyCode)this.$Q(h)?(h=this.options,"modeless"===h.modality?(a.preventDefault(),a=this.We,a.focus()):this.close()):this.$ka(h)&&
(a.preventDefault(),this.t2(!0));else if("keydown"===b&&a.keyCode===g.ui.keyCode.TAB&&this.$Q(h))if(c=c.find(":tabbable"),0<c.length){var b=c[0],c=c[c.length-1],k=this.element;b!==h&&k[0]!==h||!a.shiftKey?c!==h||a.shiftKey||(a.preventDefault(),c===b?(k.attr("tabindex","-1"),k.focus()):g(b).focus()):(a.preventDefault(),b===c&&b===h?(k.attr("tabindex","-1"),k.focus()):g(c).focus())}else a.preventDefault(),h=this.options,"modeless"===h.modality?(a=this.We,a.focus()):this.close()}},t4:function(b){var c=
this.Xga,f=this.YC();c&&(delete f[a.ca.uc.yB],delete this.Xga);"focusLoss"===b&&(c=this.Xga=this.XGa.bind(this),f[a.ca.uc.yB]=c);this.isOpen()&&(b={},b[a.ca.Ga.Oe]=this.element,b[a.ca.Ga.xs]=f,a.ca.Ta().wE(b))},XGa:function(b){if(this.isOpen()){var c=this.We,f=this.element.parent(),g=b.target,k=this.CP;if(k&&(k=k.getLink())&&a.T.Ww(k[0],g))return;if(!a.T.Ww(c[0],g)&&!a.T.Ww(f[0],g)){if(a.mf.cF(g)){if("mousedown"===b.type||"touchstart"===b.type)return;this.k2=!0}this.close()}}},QCa:function(){var a=
this.We,b=this.element.attr("id"),c=a.attr("aria-describedby"),c=c?c.split(/\s+/):[];c.push(b);c=g.trim(c.join(" "));a.attr("aria-describedby",c)},sRa:function(){var a=this.We,b=this.element;if(a&&0!==a.length){var b=b.attr("id"),c=a.attr("aria-describedby"),c=c?c.split(/\s+/):[],b=g.inArray(b,c);-1!==b&&c.splice(b,1);(c=g.trim(c.join(" ")))?a.attr("aria-describedby",c):a.removeAttr("aria-describedby")}},FNa:function(){var b=a.Wa.fo().os===a.Wa.om.WM,c=this.O2;c||(c=this.O2=new a.Th);var f;f=b?this.R("none"===
this.options.initialFocus?"ariaLiveRegionInitialFocusNoneTouch":"ariaLiveRegionInitialFocusFirstFocusableTouch"):this.R("none"===this.options.initialFocus?"ariaLiveRegionInitialFocusNone":"ariaLiveRegionInitialFocusFirstFocusable");c.OVa(f);if(b){if(!this.CP){var c=this.b1("focusSkipLink"),g=this.We,b=this.t2.bind(this,!0);f=this.R("ariaFocusSkipLink");this.CP=new a.xn(g,f,b,c)}this.QZ||(c=this.b1("closeSkipLink"),g=this.AH,b=this.Qq.bind(this),f=this.R("ariaCloseSkipLink"),this.QZ=new a.xn(g,f,b,
c))}},ega:function(){var a=this.O2;a&&(a.destroy(),delete this.O2);if(a=this.CP)a.destroy(),delete this.CP;if(a=this.QZ)a.destroy(),delete this.QZ},b1:function(b){var c=this.element.attr("id");a.Xa.mo(c)&&(c=this.uuid);return[c,b].join("_")},$z:function(){this.element.remove()},YC:function(){if(!this.tp){var b=this.tp={};b[a.ca.uc.zB]=this.Qq.bind(this);b[a.ca.uc.AB]=this.$z.bind(this);b[a.ca.uc.Cs]=this.refresh.bind(this);b[a.ca.uc.kN]=this.lH.bind(this);b[a.ca.uc.iN]=this.aH.bind(this);b[a.ca.uc.jN]=
this.kH.bind(this);b[a.ca.uc.hN]=this.$s.bind(this)}return this.tp},Qq:function(){this.nz=!0;this.close();delete this.nz},ao:function(b){var c=this.Cp;c&&(c.destroy(),delete this.Cp);0>["open","close"].indexOf(b)||(this.Cp=new a.rm(this.element,b,"ojPopup",this.Y()))},aw:function(a,b){var c=this.Cp;return c?c.R7(this,a,a,b):!1},L4:function(a){var b=this;this._focusable({applyHighlight:!0,setupHandlers:function(c,h){b._on(a,{focus:function(a){c(g(a.currentTarget))},blur:function(a){h(g(a.currentTarget))}})}})},
uh:function(){a.ba.BA(this.element)===a.ba.Gi.OPEN&&this.Qq();this._super()}});a.Components.gq({ojPopup:{modality:a.Components.tf(function(){return(a.ic.Tc("oj-popup-option-defaults")||{}).modality}),animation:a.Components.tf(function(){return(a.ic.Tc("oj-popup-option-defaults")||{}).animation})}})})();a.J.$a("oj-popup","baseComponent",{properties:{autoDismiss:{type:"string",enumValues:["focusLoss","none"]},chrome:{type:"string",enumValues:["default","none"]},initialFocus:{type:"string",enumValues:["auto",
"none","firstFocusable","popup"]},modality:{type:"string",enumValues:["modeless","modal"]},position:{type:"object",properties:{my:{type:"object|string",properties:{horizontal:{type:"string",enumValues:["start","end","left","center","right"]},vertical:{type:"string",enumValues:["top","center","bottom"]}}},at:{type:"object|string",properties:{horizontal:{type:"string",enumValues:["start","end","left","center","right"]},vertical:{type:"string",enumValues:["top","center","bottom"]}}},offset:{type:"object",
properties:{x:{type:"number"},y:{type:"number"}}},of:{type:"string|object"},collision:{type:"string",enumValues:["flip","fit","flipfit","flipcenter","none"]}}},tail:{type:"string",enumValues:["simple","none"]}},events:{beforeOpen:{},open:{},beforeClose:{},close:{},focus:{},animateStart:{},animateEnd:{}},methods:{close:{},isOpen:{},open:{}},extension:{Ya:"ojPopup"}});a.J.register("oj-popup",{metadata:a.J.getMetadata("oj-popup")})});