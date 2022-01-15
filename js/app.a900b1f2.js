(function(e){function t(t){for(var n,a,l=t[0],i=t[1],s=t[2],u=0,p=[];u<l.length;u++)a=l[u],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);d&&d(t);while(p.length)p.shift()();return c.push.apply(c,s||[]),o()}function o(){for(var e,t=0;t<c.length;t++){for(var o=c[t],n=!0,l=1;l<o.length;l++){var i=o[l];0!==r[i]&&(n=!1)}n&&(c.splice(t--,1),e=a(a.s=o[0]))}return e}var n={},r={app:0},c=[];function a(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=n,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(o,n,function(t){return e[t]}.bind(null,n));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/qrcode-generator/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var d=i;c.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"192a":function(e,t,o){},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("7a23"),r={id:"app",class:"font-display"},c={class:"px-5 py-5 md:px-16 md:py-10"},a={class:"max-w-7xl my-0 mx-auto"},l={class:"md:flex md:-mx-10"},i={class:"flex flex-col md:flex-1 md:px-10 mb-10 md:mb-0"},s=Object(n["createElementVNode"])("div",{class:"flex items-center justify-center p-3 mt-4 rounded border border-border"},[Object(n["createElementVNode"])("div",{"aria-hidden":"true",class:"h-8 w-8 mr-3 flex flex-shrink-0 items-center justify-center text-2xl font-bold rounded-full bg-primary"}," ! "),Object(n["createElementVNode"])("span",null,"可以扫描试一试是否可读！")],-1),d={class:"md:flex-1 md:px-10"};function u(e,t,o,u,p,b){var f=Object(n["resolveComponent"])("Header"),m=Object(n["resolveComponent"])("Canvas"),v=Object(n["resolveComponent"])("Settings"),h=Object(n["resolveComponent"])("DecodeQRCode");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",r,[Object(n["createVNode"])(f),Object(n["withDirectives"])(Object(n["createElementVNode"])("div",c,[Object(n["createElementVNode"])("div",a,[Object(n["createElementVNode"])("div",l,[Object(n["createElementVNode"])("div",i,[Object(n["createVNode"])(m),s]),Object(n["createElementVNode"])("div",d,[Object(n["createVNode"])(v)])])])],512),[[n["vShow"],b.generateQRCodeStatus]]),Object(n["createElementVNode"])("div",null,[Object(n["withDirectives"])(Object(n["createVNode"])(h,null,null,512),[[n["vShow"],b.decodeShowStatus]])])])}var p={class:"bg-primary text-center px-5 py-2 md:px-16"},b=Object(n["createElementVNode"])("h1",{class:"text-5xl font-light mb-5"},"二维码生成器",-1),f={class:"p-1 flex justify-end"};function m(e,t,o,r,c,a){return Object(n["openBlock"])(),Object(n["createElementBlock"])("header",p,[b,Object(n["createElementVNode"])("div",f,[Object(n["createElementVNode"])("button",{class:"text-white font-bold hover:underline",type:"button",onClick:t[0]||(t[0]=function(){return a.onClickGenerate&&a.onClickGenerate.apply(a,arguments)})}," 生成二维码 "),Object(n["createElementVNode"])("button",{class:"text-white font-bold hover:underline ml-5",type:"button",onClick:t[1]||(t[1]=function(){return a.onClick&&a.onClick.apply(a,arguments)})}," 解码 ")])])}var v={name:"Header",methods:{onClickGenerate:function(){this.$store.commit("setQrCodeContentIndex",1)},onClick:function(){this.$store.commit("setQrCodeContentIndex",2)}}},h=o("6b0d"),j=o.n(h);const O=j()(v,[["render",m]]);var C=O,g={class:"border border-border rounded flex-grow flex flex-col"},y={class:"p-3 flex justify-end bg-white border-b border-border"},x={class:"flex justify-center items-center flex-grow text-center relative overflow-hidden p-5 md:p-0"},V={ref:"canvas",class:"mx-auto"};function k(e,t,o,r,c,a){var l=Object(n["resolveComponent"])("CanvasButton"),i=Object(n["resolveComponent"])("CopyToClipboardCanvasButton");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",g,[Object(n["withDirectives"])(Object(n["createElementVNode"])("div",y,[Object(n["createVNode"])(l,{text:"下载",onClick:a.downloadImage},null,8,["onClick"]),Object(n["createVNode"])(i,{class:"ml-5",text:"复制",value:c.dataUrl},null,8,["value"])],512),[[n["vShow"],a.qrValue]]),Object(n["createElementVNode"])("div",x,[Object(n["withDirectives"])(Object(n["createElementVNode"])("canvas",V,null,512),[[n["vShow"],a.qrValue]]),Object(n["withDirectives"])(Object(n["createElementVNode"])("p",null,"此处预览二维码",512),[[n["vShow"],!a.qrValue]])])])}o("99af");var N=o("d055"),w=o.n(N);function E(e,t,o,r,c,a){return Object(n["openBlock"])(),Object(n["createElementBlock"])("button",{class:"text-primary font-bold hover:underline",type:"button",onClick:t[0]||(t[0]=function(){return a.onClick&&a.onClick.apply(a,arguments)})},Object(n["toDisplayString"])(o.text),1)}var D={name:"CanvasButton",props:{text:{type:String,required:!0}},emits:["click"],methods:{onClick:function(e){this.$emit("click",e)}}};const T=j()(D,[["render",E]]);var B=T,S={class:"relative"},I={key:0,class:"notification absolute px-3 py-1 left-1/2 transform -translate-x-1/2 text-center rounded bg-white whitespace-nowrap border border-border"},q=Object(n["createElementVNode"])("span",{class:"notification__before absolute left-1/2 bottom-full h-0 w-0 transform -translate-x-1/2 border-solid border-transparent border-8"},null,-1),Q=Object(n["createElementVNode"])("span",{class:"notification__after absolute left-1/2 h-0 w-0 transform -translate-x-1/2 border-solid border-transparent border-8"},null,-1);function F(e,t,o,r,c,a){var l=Object(n["resolveComponent"])("CanvasButton");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",S,[Object(n["createVNode"])(l,{text:o.text,onClick:a.copyToClipboard},null,8,["text","onClick"]),Object(n["createVNode"])(n["Transition"],{name:"notification"},{default:Object(n["withCtx"])((function(){return[c.isNotificationActive?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",I,[q,Q,Object(n["createTextVNode"])(" "+Object(n["toDisplayString"])(e.notificationText),1)])):Object(n["createCommentVNode"])("",!0)]})),_:1})])}var $={name:"CopyToClipboardCanvasButton",data:function(){return{isNotificationActive:!1}},props:{text:{type:String,required:!0},value:{type:String,required:!0}},components:{CanvasButton:B},methods:{copyToClipboard:function(e){var t=this;e.preventDefault(),navigator.clipboard.writeText(this.value).then((function(){t.showNotification("Copied!")}),(function(){t.showNotification("Error! :(")}))},showNotification:function(e){var t=this;this.isNotificationActive=!0,this.notificationText=e,setTimeout((function(){t.isNotificationActive=!1,t.notificationText=""}),1e3)}}};o("f33e");const _=j()($,[["render",F]]);var R=_,U={name:"Canvas",components:{CanvasButton:B,CopyToClipboardCanvasButton:R},data:function(){return{dataUrl:""}},mounted:function(){this.generateQRCode(),this.setDataUrl()},computed:{qrValue:function(){return this.$store.state.qrValue},fileType:function(){return this.$store.state.fileType},lightColor:function(){return this.$store.state.qrLightColor},darkColor:function(){return this.$store.state.qrDarkColor},propertiesToWatchForQRUpdate:function(){return"".concat(this.qrValue," ").concat(this.lightColor," ").concat(this.darkColor)}},watch:{propertiesToWatchForQRUpdate:function(){this.generateQRCode(),this.setDataUrl()}},methods:{generateQRCode:function(){this.qrValue&&w.a.toCanvas(this.$refs.canvas,this.qrValue,{color:{light:this.lightColor,dark:this.darkColor},margin:0},(function(e){e&&console.log(e)}))},setDataUrl:function(){this.dataUrl=this.$refs.canvas.toDataURL()},downloadImage:function(){var e="image/".concat(this.fileType),t=this.$refs.canvas.toDataURL(e),o=document.createElement("a");o.download="qrcode",o.href=t,o.dataset.downloadurl="".concat(e,":").concat(o.download,":").concat(o.href),o.click()}}};const L=j()(U,[["render",k]]);var P=L,M={class:"mb-8"},W={class:"mb-8"};function A(e,t,o,r,c,a){var l=Object(n["resolveComponent"])("Value"),i=Object(n["resolveComponent"])("Colors"),s=Object(n["resolveComponent"])("FileTypes");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",null,[Object(n["createElementVNode"])("div",M,[Object(n["createVNode"])(l)]),Object(n["createElementVNode"])("div",W,[Object(n["createVNode"])(i)]),Object(n["createElementVNode"])("div",null,[Object(n["createVNode"])(s)])])}var z=Object(n["createElementVNode"])("label",{class:"block mb-5 text-2xl",for:"value"},"内容",-1),G=["placeholder"];function H(e,t,o,r,c,a){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",null,[z,Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return c.value=e}),type:"text",name:"value",id:"value",placeholder:c.defaultValue,class:"h-12 border border-border p-3 rounded outline-none focus:border-primary w-full",onInput:t[1]||(t[1]=function(){return a.onValueInput&&a.onValueInput.apply(a,arguments)})},null,40,G),[[n["vModelText"],c.value]])])}var J="https://github.com/",K={name:"Value",data:function(){return{value:"",defaultValue:J}},mounted:function(){this.value=this.$store.state.qrValue},methods:{onValueInput:function(){this.$store.commit("setQrValue",this.value)}}};const X=j()(K,[["render",H]]);var Y=X,Z=Object(n["createElementVNode"])("h3",{class:"text-2xl"},"颜色",-1),ee=Object(n["createElementVNode"])("span",{class:"font-bold"},"提示:",-1),te=Object(n["createTextVNode"])(" 改变颜色可能会导致二维码不可读 "),oe={class:"flex"};function ne(e,t,o,r,c,a){var l=Object(n["resolveComponent"])("SettingsWarning"),i=Object(n["resolveComponent"])("ColorPicker");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",null,[Z,Object(n["createVNode"])(l,null,{default:Object(n["withCtx"])((function(){return[ee,te]})),_:1}),Object(n["createElementVNode"])("div",oe,[Object(n["createVNode"])(i,{label:"Light","default-value":"#ffffff",onInput:a.onLightColorInput},null,8,["onInput"]),Object(n["createVNode"])(i,{label:"Dark","default-value":"#000000",onInput:a.onDarkColorInput},null,8,["onInput"])])])}var re={class:"color-picker align-middle border flex mr-5 rounded focus-within:border-primary overflow-hidden border-border"},ce=["for"],ae=["id","name"];function le(e,t,o,r,c,a){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",re,[Object(n["createElementVNode"])("label",{for:"".concat(o.label,"-color"),class:"px-3 py-1"},Object(n["toDisplayString"])(o.label),9,ce),Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return c.value=e}),id:"".concat(o.label,"-color"),type:"color",name:o.label,class:"border-l border-border w-8 h-8 outline-none",onInput:t[1]||(t[1]=function(){return a.onInput&&a.onInput.apply(a,arguments)})},null,40,ae),[[n["vModelText"],c.value]])])}var ie={name:"ColorPicker",props:{label:{type:String,required:!0},defaultValue:{type:String,required:!0}},data:function(){return{value:""}},mounted:function(){this.value=this.defaultValue},emits:["input"],methods:{onInput:function(){this.$emit("input",this.value)}}};o("a8e0");const se=j()(ie,[["render",le],["__scopeId","data-v-10a00cb1"]]);var de=se,ue={class:"border-l-8 border-border p-3 my-5"};function pe(e,t,o,r,c,a){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",ue,[Object(n["renderSlot"])(e.$slots,"default")])}var be={name:"SettingsWarning"};const fe=j()(be,[["render",pe]]);var me=fe,ve={name:"Colors",components:{ColorPicker:de,SettingsWarning:me},methods:{onLightColorInput:function(e){this.$store.commit("setQrLightColor",e)},onDarkColorInput:function(e){this.$store.commit("setQrDarkColor",e)}}};const he=j()(ve,[["render",ne]]);var je=he,Oe=Object(n["createElementVNode"])("h3",{class:"mb-3 text-2xl"},"下载文件格式",-1),Ce=Object(n["createElementVNode"])("span",{class:"font-bold"},"提示:",-1),ge=Object(n["createTextVNode"])(" 如果浏览器不支持选择的文件类型，会默认使用PNG "),ye={class:"flex"},xe=["value","id","name"];function Ve(e,t,o,r,c,a){var l=Object(n["resolveComponent"])("SettingsWarning");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",null,[Oe,Object(n["createVNode"])(l,null,{default:Object(n["withCtx"])((function(){return[Ce,ge]})),_:1}),Object(n["createElementVNode"])("div",ye,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(c.availableFileTypes,(function(e){return Object(n["openBlock"])(),Object(n["createElementBlock"])("label",{class:Object(n["normalizeClass"])(["relative border border-l-0 first:border-l first:rounded-tl-md first:rounded-bl-md border-border px-3 py-1 cursor-pointer last:rounded-tr-md last:rounded-br-md focus-within:bg-primary uppercase",{"bg-primary":e===c.selectedFileType}]),key:e},[Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return c.selectedFileType=e}),value:e,id:"file-type-".concat(e),type:"radio",name:"file-type-".concat(e),class:"absolute left-0 opacity-0 top-0",onChange:t[1]||(t[1]=function(){return a.onFileTypeChange&&a.onFileTypeChange.apply(a,arguments)})},null,40,xe),[[n["vModelRadio"],c.selectedFileType]]),Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])(e),1)],2)})),128))])])}var ke={name:"FileTypes",components:{SettingsWarning:me},data:function(){return{selectedFileType:"",availableFileTypes:["png","jpeg","webp"]}},mounted:function(){this.selectedFileType=this.$store.state.fileType},methods:{onFileTypeChange:function(){this.$store.commit("setFileType",this.selectedFileType)}}};const Ne=j()(ke,[["render",Ve]]);var we=Ne,Ee={name:"Settings",components:{Value:Y,Colors:je,FileTypes:we}};const De=j()(Ee,[["render",A]]);var Te=De,Be={key:0,class:"drop-error"},Se=Object(n["createElementVNode"])("p",{class:"decode-result"},"解码结果: ",-1);function Ie(e,t,o,r,c,a){var l=Object(n["resolveComponent"])("qr-dropzone");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",null,[null!==c.error?(Object(n["openBlock"])(),Object(n["createElementBlock"])("p",Be,Object(n["toDisplayString"])(c.error),1)):Object(n["createCommentVNode"])("",!0),Object(n["createVNode"])(l,{onDetect:a.onDetect,onDragover:a.onDragOver,onInit:a.logErrors},{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",{class:Object(n["normalizeClass"])(["drop-area",{dragover:c.dragover}])}," 拖拽图片 ",2)]})),_:1},8,["onDetect","onDragover","onInit"]),Se,Object(n["withDirectives"])(Object(n["createElementVNode"])("textarea",{class:"result","onUpdate:modelValue":t[0]||(t[0]=function(e){return c.result=e})},null,512),[[n["vModelText"],c.result]])])}var qe=o("1da1"),Qe=(o("96cf"),o("b0c0"),o("86b0")),Fe={name:"DecodeQRCode",components:{QrDropzone:Qe["QrDropzone"]},data:function(){return{result:null,error:null,dragover:!1}},methods:{onDetect:function(e){var t=this;return Object(qe["a"])(regeneratorRuntime.mark((function o(){var n,r;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,e;case 3:n=o.sent,r=n.content,t.result=r,t.error=null,o.next=12;break;case 9:o.prev=9,o.t0=o["catch"](0),"DropImageFetchError"===o.t0.name?t.error="Sorry, you can't load cross-origin images :/":"DropImageDecodeError"===o.t0.name?t.error="Ok, that's not an image. That can't be decoded.":t.error="Ups, what kind of error is this?! "+o.t0.message;case 12:case"end":return o.stop()}}),o,null,[[0,9]])})))()},logErrors:function(e){e.catch(console.error)},onDragOver:function(e){this.dragover=e}}};o("5e20");const $e=j()(Fe,[["render",Ie]]);var _e=$e,Re={name:"App",components:{Header:C,Canvas:P,Settings:Te,DecodeQRCode:_e},computed:{generateQRCodeStatus:function(){return 1==this.$store.state.qrCodeContentIndex},decodeShowStatus:function(){return 2==this.$store.state.qrCodeContentIndex}}};const Ue=j()(Re,[["render",u]]);var Le=Ue,Pe=o("5502"),Me={qrValue:J,qrLightColor:"#ffffff",qrDarkColor:"#000000",fileType:"png",qrCodeContentIndex:1},We=Me,Ae={setQrValue:function(e,t){e.qrValue=t},setFileType:function(e,t){"string"===typeof t&&(e.fileType=t)},setQrLightColor:function(e,t){"string"===typeof t&&(e.qrLightColor=t)},setQrDarkColor:function(e,t){"string"===typeof t&&(e.qrDarkColor=t)},setQrCodeContentIndex:function(e,t){e.qrCodeContentIndex=t}},ze=Ae,Ge=Object(Pe["a"])({state:We,mutations:ze,actions:{},modules:{}});o("b972");Object(n["createApp"])(Le).use(Ge).mount("#app")},"5e20":function(e,t,o){"use strict";o("9b74")},"9b74":function(e,t,o){},a8e0:function(e,t,o){"use strict";o("ca2e")},ca2e:function(e,t,o){},f33e:function(e,t,o){"use strict";o("192a")}});