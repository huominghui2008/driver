(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"20hc":function(e,t,a){"use strict"
var r=a("TqRt"),d=r(a("o0o1")),n=r(a("yXPU")),u=r(a("q1tI")),p=r(a("i8i4")),l=a("XkTy"),s=a("tajm"),f=a("t3Un"),m=r(a("NkXT")),o=window,h=o.$,w=o.MB,v=o.md5,c=o.Runner,g=w.localStorageDelegate,b=function(){return!!window.MBData},k=/\/embed\b/.test(location.pathname)
w.f.inSharing=!0
var P=function(e,t){return t||new URLSearchParams(location.search).get("password")||g.getItem("".concat(e,"_pwd"))}
w.load=function(){var t=(0,n.default)(d.default.mark(function e(t){var a,r,n,s,o,c,i,l
return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.token,r=t.isPasswordRequired,n=t.encryptedPassword,s=t.installerProject,w.webpackInterface.renderPreviewAlert(),o=P(a,n),c=!w.isStandAlone()&&!w.isInApp&&w.isMobile()&&!b()&&!k,w.supportedBrowser()){e.next=8
break}return h("#splash").hide(),h("#loading").hide(),e.abrupt("return")
case 8:if(i=w.isMac()?"mac":w.isWindows()?"windows":"other-os",h("html").addClass(i),(w.isStandAlone()||w.isIOSClient())&&h("html").addClass("is-full-screen"),c)return e.next=14,E({token:a,isPasswordRequired:r,savedEncryptedPassword:o,shouldGetData:!1})
e.next=17
break
case 14:return h("#loading").hide(),e.next=17,new Promise(function(e){p.default.render(u.default.createElement(m.default,{project:s,loadProject:e,encryptedPassword:P(a,n)}),document.getElementById("workspace"))})
case 17:return e.next=19,E({token:a,isPasswordRequired:r,savedEncryptedPassword:P(a,n)})
case 19:return l=e.sent,e.abrupt("return",b()?M(l):l?C(l):null)
case 21:case"end":return e.stop()}},e,this)}))
return function(e){return t.apply(this,arguments)}}()
var N=function(){var t=(0,n.default)(d.default.mark(function e(t){var a,r,n,s,o,c,i
return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.token,r=t.encryptedPassword,n=t.shouldGetData,s=void 0===n||n,o=window.MBData,!b()){e.next=6
break}if(o.project.password&&r!==o.project.password)throw new Error("Wrong password!")
e.next=5
break
case 5:return e.abrupt("return",o)
case 6:if(s){e.next=14
break}return e.next=9,fetch("/app/".concat(a,"/checkpassword?password=").concat(r))
case 9:if(c=e.sent,c.ok){e.next=13
break}throw new Error("Wrong password!")
case 13:return e.abrupt("return",!0)
case 14:return i="/app/".concat(a,".json?").concat((new Date).valueOf()).concat(r?"&password=".concat(r):""),e.abrupt("return",(0,f.requestJSON)(i))
case 16:case"end":return e.stop()}},e,this)}))
return function(e){return t.apply(this,arguments)}}(),E=function(){var t=(0,n.default)(d.default.mark(function e(t){var a,r,n,s,o,c,i
return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.token,r=t.isPasswordRequired,n=t.savedEncryptedPassword,s=t.shouldGetData,o=void 0===s||s,e.prev=1,e.next=4,N({token:a,shouldGetData:o,encryptedPassword:n})
case 4:c=e.sent,e.next=11
break
case 7:e.prev=7,e.t0=e.catch(1),console.log("Invalid saved password: ".concat(e.t0,". Will retry with prompt.")),g.removeItem("".concat(a,"_pwd"))
case 11:if(c){e.next=33
break}if(e.prev=12,r)return e.t1=v,e.next=17,(0,l.promptGetPasswordAsync)()
e.next=25
break
case 17:return e.t2=e.sent,i=(0,e.t1)(e.t2),e.next=21,N({token:a,shouldGetData:o,encryptedPassword:i})
case 21:c=e.sent,g.setItem("".concat(a,"_pwd"),i),e.next=26
break
case 25:(0,l.alertAsync)({desc:I18N.no_permission_to_app})
case 26:e.next=33
break
case 28:return e.prev=28,e.t3=e.catch(12),console.log("Invalid prompt password:",e.t3),setTimeout(function(){return(0,l.alertAsync)({desc:r?I18N.invalid_credential:"Failed to load this app."})},320),e.abrupt("return",null)
case 33:return e.abrupt("return",c)
case 34:case"end":return e.stop()}},e,this,[[1,7],[12,28]])}))
return function(e){return t.apply(this,arguments)}}(),C=function(e){h(".indicator").css("height","100%"),setTimeout(function(){return i(e)},300)},M=function(e){e.project.splash="images/splash.png"
var t=/^\/((uploads\d?\/)?images|artboards)\//,a=function(e){return e.replace(t,"images/")}
e.screens.forEach(function(e){e.bgimage&&(e.bgimage=a(e.bgimage))}),e.widgets.forEach(function(e){e.image&&(e.image=a(e.image))}),e.widgetstates.forEach(function(e){e.image&&(e.image=a(e.image))}),h(".indicator").css("height","100%"),setTimeout(function(){return i(e)},300)},i=function(e){var r=e.project.template?new Template:e.project.combo?new Combo:new Project
r.load(e.project),r.lsave(!1),w.currentProject=r,Template.refresh(e.templates),Screen.refresh(e.screens),Widget.refreshWidgetAfterDecompress(e.widgets),Link.refresh(e.links),Panel.refresh(e.panels),Screenstate.refresh(e.screenstates),Widgetstate.refreshWidgetstateAfterDecompress(e.widgetstates),Panelstate.refresh(e.panelstates),Collaborator.refresh(e.collaborators),CommentThread.refresh(e.threads),Comment.refresh(e.comments),Team.refresh(e.teams),w.user=h("#workspace").data("user")||{},w.isMobile()||(0,
s.patchGlobalAutoSaverPusher)(),(new Image).src=w.staticMap(),h("title").html(r.name),h("#loading").hide(),!r.validated&&w.isMobile()&&(0,l.alertAsync)({title:I18N.reminder,desc:I18N.fraud_warning,confirmText:I18N.fraud_confirm,isHTML:!0}),w.checkFA(function(){w.currentProject=r,w.webpackInterface.init(),w.Pusher&&w.user.id&&"guest"!==w.webpackInterface.store.getState().model.current.userRole&&w.Pusher.enableSocketChannel(r.cid)
var e=location.hash||"",t=e&&e.startsWith("#screen=")&&e.substr("#screen=".length),a=Screen.find(t)||r.homeScreen()
h("body").data("scale",100),(w.isMobile()||w.isEmbedded())&&(r.scale=100,r.lsave(!1)),w.currentProject=r,w.currentScreen=a,w.runner=new c,w.webpackInterface.renderPreview(document.querySelector("#workspace")),setTimeout(function(){h("#workspace").show(),w.runner.init(r,a)},100)})}},3:function(e,t,a){a("j36g"),a("55Il"),e.exports=a("Z3xQ")},KUpD:function(e,t,a){e.exports={"install-page-wrapper":"_3INFrWQbU2BBH5IPDv0aSv","install-page":"SSwFfJxlXtECHTgNLr7PZ"}},NkXT:function(e,t,a){"use strict"
var r=a("284h"),n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var d=n(a("pVnL")),s=n(a("lwsE")),o=n(a("W8MJ")),c=n(a("a1gu")),i=n(a("Nsbk")),l=n(a("7W2i")),u=n(a("PJYZ")),p=n(a("lSNA")),f=n(a("o0o1")),m=n(a("yXPU")),h=a("17x9"),w=r(a("q1tI")),v=n(a("PeD6")),g=n(a("KUpD")),b=n(a("UbMB")),k=a("t3Un"),P=b.default.bind(g.default),N=function(){var t=(0,m.default)(f.default.mark(function e(t){var a,r,n
return f.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return MB.event("ga","移动端: 点击下载 APK","运行页"),e.next=3,(0,k.requestJSON)("/app/".concat(t,"/build/apk.json"),null,{method:"PUT"})
case 3:return e.next=6,E(5e3)
case 6:return e.next=8,(0,k.requestJSON)("/app/".concat(t,"/status/apk.json"))
case 8:if(a=e.sent,r=a.progress,n=a.link,100!==r)return e.abrupt("continue",3)
e.next=13
break
case 13:return window.location=n,e.abrupt("return")
case 17:case"end":return e.stop()}},e,this)}))
return function(e){return t.apply(this,arguments)}}(),E=function(t){return new Promise(function(e){return setTimeout(e,t)})},C=function(e){function t(){var l
return(0,s.default)(this,t),l=(0,c.default)(this,(0,i.default)(t).call(this)),(0,p.default)((0,u.default)((0,u.default)(l)),"handleView",function(e){e.preventDefault(),l.props.loadProject()}),(0,p.default)((0,u.default)((0,u.default)(l)),"handleInstall",function(e){e.preventDefault()
var t=l.props.project,a=t.accessToken,r=t.userPlan,n=t.exportable
MB.isWechat()?l.setState({isCoverShow:!0}):MB.isiPad()||MB.isIOS()?l.setState({isCoverShow:!0}):n?(l.setState({isCoverShow:!0}),N(a).then(function(){return l.setState({isCoverShow:!1})}).catch(function(e){})):MB.promptRenew("exportable",{format:"apk",role:"project",plan:r})}),(0,p.default)((0,u.default)((0,u.default)(l)),"handleOpenCover",function(){l.setState({isCoverShow:!0})}),(0,p.default)((0,u.default)((0,u.default)(l)),"handleCloseCover",function(){l.setState({isCoverShow:!1})}),(0,p.default)((0,
u.default)((0,u.default)(l)),"handleClickViewInClient",function(e,t){MB.event("ga","移动端: 点击下载".concat(t,"客户端"),"运行页"),setTimeout(function(){window.location=e},200)}),(0,p.default)((0,u.default)((0,u.default)(l)),"renderViewInClient",function(){var e={}
MB.isWechat()&&(e={onClick:l.handleOpenCover})
var t=window.location,a=t.hostname,r=t.pathname,n=l.props,s=n.encryptedPassword,o=n.project,c=o.iosClientUrl,i=o.androidClientUrl
return MB.isIOS()&&(e={href:"modao://".concat(a).concat(r,"?password=").concat(s),onClick:function(){l.handleClickViewInClient(c,"iOS")}}),MB.isAndroid()&&(e={href:"intent://".concat(a).concat(r,"?password=").concat(s,"#Intent;package=com.mockingbot;scheme=mockingbot;S.browser_fallback_url=http%3A%2F%2Fa.app.qq.com%2Fo%2Fsimple.jsp%3Fpkgname%3Dcom.mockingbot;end"),onClick:function(){l.handleClickViewInClient(i,"Android")}}),w.default.createElement("a",(0,d.default)({className:"install-btn primary"},e),
I18N.open_in_client)}),l.state={isCoverShow:!1},l}return(0,l.default)(t,e),(0,o.default)(t,[{key:"componentDidMount",value:function(){$("#splash").hide(),$("#workspace").show(),$.timeago.settings.lang=window.MBLocale,$(".timeago").timeago()}},{key:"render",value:function(){var e=this.props.project,t=e.name,a=e.iconUrl,r=e.updatedAt,n=this.state.isCoverShow,s=MB.isAndroid()?I18N.download_android_apk:I18N.add_to_home_screen
return w.default.createElement("div",{className:P("install-page-wrapper")},w.default.createElement("div",{className:P("install-page",{"is-wechat":MB.isWechat()})},w.default.createElement("div",{className:"app-inner"},w.default.createElement("img",{className:"app-icon",src:a}),w.default.createElement("h1",{className:"app-name"},t),w.default.createElement("div",{className:"app-update-time"},w.default.createElement("time",{className:"timeago",dateTime:r}),I18N.update),w.default.createElement("div",{
className:"install-btns"},this.renderViewInClient(),w.default.createElement("a",{className:"install-btn",onClick:this.handleView},I18N.view_app)),w.default.createElement("a",{className:"download-btn",onClick:this.handleInstall},w.default.createElement("span",null,s),w.default.createElement("i",{className:"fa fa-angle-right"}))),w.default.createElement(v.default,{show:n,onClose:this.handleCloseCover})))}}]),t}(w.PureComponent)
t.default=C,(0,p.default)(C,"propTypes",{project:h.PropTypes.object,loadProject:h.PropTypes.func,encryptedPassword:h.PropTypes.string})},PeD6:function(e,t,a){"use strict"
var r=a("284h"),n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=n(a("lwsE")),c=n(a("W8MJ")),i=n(a("a1gu")),l=n(a("Nsbk")),d=n(a("7W2i")),u=n(a("PJYZ")),p=n(a("lSNA")),s=a("17x9"),f=r(a("q1tI")),m=n(a("ldhK")),h="/images/sharing/wechat_".concat(window.MBLocale,".png"),w="/images/sharing/ios_".concat(window.MBLocale,".png"),v=function(e){function s(){var e,t;(0,o.default)(this,s)
for(var a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n]
return t=(0,i.default)(this,(e=(0,l.default)(s)).call.apply(e,[this].concat(r))),(0,p.default)((0,u.default)((0,u.default)(t)),"handleClick",function(){t.props.onClose()}),t}return(0,d.default)(s,e),(0,c.default)(s,[{key:"render",value:function(){var e=this.props.show,t=MB.isWechat(),a=!t&&MB.isIOS(),r=MB.isiPad(),n=!(t||a),s={display:e?"":"none"}
return f.default.createElement("div",{className:m.default.covers,style:s,onClick:this.handleClick},t&&f.default.createElement("div",{className:"cover wechat"},f.default.createElement("img",{className:"robot",src:"/images/sharing/robot.png"}),f.default.createElement("img",{className:"tips",src:h}),"s",f.default.createElement("div",{className:"arrow"})),a&&!r&&f.default.createElement("div",{className:"cover ios"},f.default.createElement("img",{className:"robot",src:"/images/sharing/robot.png"}),
f.default.createElement("img",{className:"tips",src:w}),f.default.createElement("div",{className:"arrow"})),r&&f.default.createElement("div",{className:"cover ipad"},f.default.createElement("img",{className:"robot",src:"/images/sharing/robot.png"}),f.default.createElement("img",{className:"tips",src:w}),f.default.createElement("div",{className:"arrow"})),n&&f.default.createElement("div",{className:"cover building"},f.default.createElement("div",{className:"tip-wrapper"},f.default.createElement("p",{
className:"tip"},I18N.building_apk),f.default.createElement("div",{className:"spinner"}))))}}]),s}(f.PureComponent);(t.default=v).propTypes={show:s.PropTypes.bool,onClose:s.PropTypes.func}},Z3xQ:function(e,t,a){"use strict"
var r=a("TqRt"),n=r(a("zkrS"))
a("KKmY"),a("P3rE"),a("dppN"),a("T7iu")
var s=r(a("7eYF")),o=r(a("aqSL")),c=a("lw2U"),i=a("+Cau"),l=a("rbsZ"),d=a("abHt")
a("RJdT"),a("20hc"),MB.COMPONENTS=d.componentMap
try{n.default.MB.webpackInterface=(0,s.default)(o.default),n.default.MB.setRunnerExtra=c.setRunnerExtra,n.default.MB.renewMsg=l.getRenewMessage,n.default.MB.promptRenew=l.openRenewModal,n.default.MB.messageBucket=(0,i.createMessageBucket)(i.receiverMap)}catch(e){console.warn("[UI:Preview] Failed to init:",e.stack||e)}},ldhK:function(e,t,a){e.exports={covers:"_34w6V_VwmKGjpRAt-ipxe_"}}},[[3,1,0,2]]])

//# sourceMappingURL=preview-dda784ddcc3bfcece41e.js.map