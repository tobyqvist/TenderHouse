(function(g){var window=this;var fHa=function(a,b){a.xa("onAutonavCoundownStarted",b)},t3=function(a,b,c){var d=b.Na();
g.O(a.element,"ytp-suggestion-set",!!d.videoId);var e=b.getPlaylistId();c=b.xe(c?c:"mqdefault.jpg");var f=null,h=null;b instanceof g.SH&&(b.lengthText?(f=b.lengthText||null,h=b.ju||null):b.lengthSeconds&&(f=g.YL(b.lengthSeconds),h=g.YL(b.lengthSeconds,!0)));var l=!!e;e=l&&"RD"===(new g.BN(e.substr(0,2),e.substr(2))).type;var m=b instanceof g.SH?b.isLivePlayback:null,n=b instanceof g.SH?b.isUpcoming:null;d={title:b.title,author:b.author,author_and_views:d.shortViewCount?b.author+" \u2022 "+d.shortViewCount:
b.author,aria_label:b.gq||g.UJ("Se: $TITLE",{TITLE:b.title}),duration:f,timestamp:h,url:b.vl(),is_live:m,is_upcoming:n,is_list:l,is_mix:e,background:c?"background-image: url("+c+")":"",views_and_publish_time:d.shortViewCount?d.shortViewCount+" \u2022 "+d.publishedTimeText:d.publishedTimeText,autoplayAlternativeHeader:b.jq};b instanceof g.CN&&(d.playlist_length=b.length);a.update(d)},u3=function(a){var b=a.T(),c=b.l;
g.X.call(this,{D:"a",K:"ytp-autonav-suggestion-card",U:{href:"{{url}}",target:c?b.C:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}","data-is-upcoming":"{{is_upcoming}}"},S:[{D:"div",ka:["ytp-autonav-endscreen-upnext-thumbnail","ytp-autonav-thumbnail-small"],U:{style:"{{background}}"},S:[{D:"div",U:{"aria-label":"{{timestamp}}"},ka:["ytp-autonav-timestamp"],ba:"{{duration}}"},{D:"div",ka:["ytp-autonav-live-stamp"],ba:"Live"},{D:"div",
ka:["ytp-autonav-upcoming-stamp"],ba:"Kommende"},{D:"div",K:"ytp-autonav-list-overlay",S:[{D:"div",K:"ytp-autonav-mix-text",ba:"Mix"},{D:"div",K:"ytp-autonav-mix-icon"}]}]},{D:"div",ka:["ytp-autonav-endscreen-upnext-title","ytp-autonav-title-card"],ba:"{{title}}"},{D:"div",ka:["ytp-autonav-endscreen-upnext-author","ytp-autonav-author-card"],ba:"{{author}}"},{D:"div",ka:["ytp-autonav-endscreen-upnext-author","ytp-autonav-view-and-date-card"],ba:"{{views_and_publish_time}}"}]});this.G=a;this.suggestion=
null;this.i=c;this.ya("click",this.onClick);this.ya("keypress",this.l)},w3=function(a,b){b=void 0===b?!1:b;
g.X.call(this,{D:"div",K:"ytp-autonav-endscreen-countdown-container"});var c=this;this.C=b;this.l=0;var d=a.T(),e=d.l;this.G=a;this.suggestion=null;this.i=new g.X({D:"div",K:"ytp-autonav-endscreen-upnext-container",U:{"aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}","data-is-upcoming":"{{is_upcoming}}"},S:[{D:"div",K:"ytp-autonav-endscreen-upnext-header"},{D:"div",K:"ytp-autonav-endscreen-upnext-alternative-header",ba:"{{autoplayAlternativeHeader}}"},
{D:"a",K:"ytp-autonav-endscreen-link-container",U:{href:"{{url}}",target:e?d.C:""},S:[{D:"div",K:"ytp-autonav-endscreen-upnext-thumbnail",U:{style:"{{background}}"},S:[{D:"div",U:{"aria-label":"{{timestamp}}"},ka:["ytp-autonav-timestamp"],ba:"{{duration}}"},{D:"div",ka:["ytp-autonav-live-stamp"],ba:"Live"},{D:"div",ka:["ytp-autonav-upcoming-stamp"],ba:"Kommende"}]},{D:"div",K:"ytp-autonav-endscreen-video-info",S:[{D:"div",K:"ytp-autonav-endscreen-premium-badge"},{D:"div",K:"ytp-autonav-endscreen-upnext-title",
ba:"{{title}}"},{D:"div",K:"ytp-autonav-endscreen-upnext-author",ba:"{{author}}"},{D:"div",K:"ytp-autonav-view-and-date",ba:"{{views_and_publish_time}}"},{D:"div",K:"ytp-autonav-author-and-view",ba:"{{author_and_views}}"}]}]}]});g.L(this,this.i);this.i.fa(this.element);e||this.N(this.i.ha("ytp-autonav-endscreen-link-container"),"click",this.CB);this.G.Hb(this.element,this,115127);this.G.Hb(this.i.ha("ytp-autonav-endscreen-link-container"),this,115128);this.overlay=new g.X({D:"div",K:"ytp-autonav-overlay"});
g.L(this,this.overlay);this.overlay.fa(this.element);this.u=new g.X({D:"div",K:"ytp-autonav-endscreen-button-container"});g.L(this,this.u);this.u.fa(this.element);this.cancelButton=new g.X({D:"button",ka:["ytp-autonav-endscreen-upnext-button","ytp-autonav-endscreen-upnext-cancel-button"],U:{"aria-label":"Annuller autoplay"},ba:"Annuller"});g.L(this,this.cancelButton);this.cancelButton.fa(this.u.element);this.cancelButton.ya("click",this.wJ,this);this.G.Hb(this.cancelButton.element,this,115129);this.playButton=
new g.X({D:"a",ka:["ytp-autonav-endscreen-upnext-button","ytp-autonav-endscreen-upnext-play-button"],U:{href:"{{url}}",role:"button","aria-label":"Afspil n\u00e6ste video"},ba:"Afspil nu"});g.L(this,this.playButton);this.playButton.fa(this.u.element);this.playButton.ya("click",this.CB,this);this.G.Hb(this.playButton.element,this,115130);this.B=new g.M(function(){v3(c)},500);
g.L(this,this.B);this.BB();this.N(a,"autonavvisibility",this.BB)},v3=function(a){var b=x3(a),c=Math.min(a.l?Date.now()-a.l:0,b);
y3(a,Math.ceil((b-c)/1E3));500>=b-c&&a.Tg()?a.select(!0):a.Tg()&&a.B.start()},x3=function(a){var b=a.G.Tm();
return 0<=b?b:g.S(a.G.T().experiments,"autoplay_time")||1E4},y3=function(a,b){b=void 0===b?-1:b;
var c=a.i.ha("ytp-autonav-endscreen-upnext-header");g.Je(c);if(0<=b){var d=String(b),e="N\u00e6ste video starter om $SECONDS".match(RegExp("\\$SECONDS","gi"))[0],f="N\u00e6ste video starter om $SECONDS".indexOf(e);if(0<=f){c.appendChild(g.Ie("N\u00e6ste video starter om $SECONDS".slice(0,f)));var h=g.He("span");g.on(h,"ytp-autonav-endscreen-upnext-header-countdown-number");g.Pe(h,d);c.appendChild(h);c.appendChild(g.Ie("N\u00e6ste video starter om $SECONDS".slice(f+e.length)));return}}g.Pe(c,"N\u00e6ste")},
z3=function(a,b){g.X.call(this,{D:"div",
ka:["html5-endscreen","ytp-player-content",b||"base-endscreen"]});this.created=!1;this.player=a},B3=function(a){g.X.call(this,{D:"div",
ka:["ytp-upnext","ytp-player-content"],U:{"aria-label":"{{aria_label}}"},S:[{D:"div",K:"ytp-cued-thumbnail-overlay-image",U:{style:"{{background}}"}},{D:"span",K:"ytp-upnext-top",S:[{D:"span",K:"ytp-upnext-header",ba:"N\u00e6ste"},{D:"span",K:"ytp-upnext-title",ba:"{{title}}"},{D:"span",K:"ytp-upnext-author",ba:"{{author}}"}]},{D:"a",K:"ytp-upnext-autoplay-icon",U:{role:"button",href:"{{url}}","aria-label":"Afspil n\u00e6ste video"},S:[{D:"svg",U:{height:"100%",version:"1.1",viewBox:"0 0 72 72",width:"100%"},
S:[{D:"circle",K:"ytp-svg-autoplay-circle",U:{cx:"36",cy:"36",fill:"#fff","fill-opacity":"0.3",r:"31.5"}},{D:"circle",K:"ytp-svg-autoplay-ring",U:{cx:"-36",cy:"36","fill-opacity":"0",r:"33.5",stroke:"#FFFFFF","stroke-dasharray":"211","stroke-dashoffset":"-211","stroke-width":"4",transform:"rotate(-90)"}},{D:"path",K:"ytp-svg-fill",U:{d:"M 24,48 41,36 24,24 V 48 z M 44,24 v 24 h 4 V 24 h -4 z"}}]}]},{D:"span",K:"ytp-upnext-bottom",S:[{D:"span",K:"ytp-upnext-cancel"},{D:"span",K:"ytp-upnext-paused",
ba:"Autoplay er sat p\u00e5 pause"}]}]});this.api=a;this.cancelButton=null;this.C=this.ha("ytp-svg-autoplay-ring");this.u=this.notification=this.i=this.suggestion=null;this.B=new g.M(this.lt,5E3,this);this.l=0;var b=this.ha("ytp-upnext-cancel");this.cancelButton=new g.X({D:"button",ka:["ytp-upnext-cancel-button","ytp-button"],U:{tabindex:"0","aria-label":"Annuller autoplay"},ba:"Annuller"});g.L(this,this.cancelButton);this.cancelButton.ya("click",this.xJ,this);this.cancelButton.fa(b);this.cancelButton&&
this.api.Hb(this.cancelButton.element,this,115129);g.L(this,this.B);this.api.Hb(this.element,this,18788);b=this.ha("ytp-upnext-autoplay-icon");this.N(b,"click",this.yJ);this.api.Hb(b,this,115130);this.DB();this.N(a,"autonavvisibility",this.DB);this.N(a,"mdxnowautoplaying",this.QN);this.N(a,"mdxautoplaycanceled",this.RN);this.N(a,"mdxautoplayupnext",this.uH);A3(this)&&(a=(a=g.tN(this.api.Ta()))?a.mL():null)&&this.uH(a);g.O(this.element,"ytp-upnext-mobile",this.api.T().i)},A3=function(a){return 3===
a.api.getPresentingPlayerType()},gHa=function(a,b){return b?b:0<=a.api.Tm()?a.api.Tm():g.S(a.api.T().experiments,"autoplay_time")||1E4},C3=function(a,b){var c=gHa(a,b),d=Math,e=d.min;
var f=(0,g.Q)()-a.l;d=e.call(d,f,c);c=0===c?1:Math.min(d/c,1);a.C.setAttribute("stroke-dashoffset",""+-211*(c+1));1<=c&&a.Tg()&&!A3(a)?a.select(!0):a.Tg()&&a.i.start()},D3=function(a){z3.call(this,a,"autonav-endscreen");
this.overlay=this.videoData=this.suggestions=null;this.table=new g.X({D:"div",K:"ytp-suggestion-panel",S:[{D:"div",ka:["ytp-autonav-endscreen-upnext-header","ytp-autonav-endscreen-more-videos"],ba:"Flere videoer"}]});this.J=new g.X({D:"div",K:"ytp-suggestions-container"});this.videos=[];this.u=null;this.C=this.I=!1;this.l=new w3(this.player);g.L(this,this.l);this.l.fa(this.element);a.getVideoData().wc?this.i=this.l:(this.i=new B3(a),g.xN(this.player,this.i.element,4),g.L(this,this.i));this.overlay=
new g.X({D:"div",K:"ytp-autonav-overlay-cancelled-state"});g.L(this,this.overlay);this.overlay.fa(this.element);this.B=new g.zN(this);g.L(this,this.B);g.L(this,this.table);this.table.fa(this.element);this.table.show();g.L(this,this.J);this.J.fa(this.table.element);this.hide()},hHa=function(a,b){return g.Pc(b.suggestions,function(c){c=g.VP(a.player.T(),c);
g.L(a,c);return c})},E3=function(a){var b=a.ud();
b!==a.C&&(a.C=b,a.player.V("autonavvisibility"),a.C?(a.l!==a.i&&a.l.hide(),a.table.hide()):(a.l!==a.i&&a.l.show(),a.table.show()))},F3=function(a){z3.call(this,a,"subscribecard-endscreen");
this.i=new g.X({D:"div",K:"ytp-subscribe-card",S:[{D:"img",K:"ytp-author-image",U:{src:"{{profilePicture}}"}},{D:"div",K:"ytp-subscribe-card-right",S:[{D:"div",K:"ytp-author-name",ba:"{{author}}"},{D:"div",K:"html5-subscribe-button-container"}]}]});g.L(this,this.i);this.i.fa(this.element);var b=a.getVideoData();this.subscribeButton=new g.IO("Abonner",null,"Afmeld abonnement",null,!0,!1,b.Eg,b.subscribed,"trailer-endscreen",null,null,a);g.L(this,this.subscribeButton);this.subscribeButton.fa(this.i.ha("html5-subscribe-button-container"));
this.N(a,"videodatachange",this.wa);this.wa();this.hide()},G3=function(a){var b=a.T(),c=g.DA||g.ug?{style:"will-change: opacity"}:void 0,d=b.l,e=["ytp-videowall-still"];
b.i&&e.push("ytp-videowall-show-text");g.X.call(this,{D:"a",ka:e,U:{href:"{{url}}",target:d?b.C:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}"},S:[{D:"div",K:"ytp-videowall-still-image",U:{style:"{{background}}"}},{D:"span",K:"ytp-videowall-still-info",S:[{D:"span",K:"ytp-videowall-still-info-bg",S:[{D:"span",K:"ytp-videowall-still-info-content",U:c,S:[{D:"span",K:"ytp-videowall-still-info-title",ba:"{{title}}"},{D:"span",K:"ytp-videowall-still-info-author",
ba:"{{author_and_views}}"},{D:"span",K:"ytp-videowall-still-info-live",ba:"Live"},{D:"span",K:"ytp-videowall-still-info-duration",ba:"{{duration}}"}]}]}]},{D:"span",ka:["ytp-videowall-still-listlabel-regular","ytp-videowall-still-listlabel"],S:[{D:"span",K:"ytp-videowall-still-listlabel-icon"},"Playliste",{D:"span",K:"ytp-videowall-still-listlabel-length",S:[" (",{D:"span",ba:"{{playlist_length}}"},")"]}]},{D:"span",ka:["ytp-videowall-still-listlabel-mix","ytp-videowall-still-listlabel"],S:[{D:"span",
K:"ytp-videowall-still-listlabel-mix-icon"},"Mix",{D:"span",K:"ytp-videowall-still-listlabel-length",ba:" (50+)"}]}]});this.suggestion=null;this.l=d;this.api=a;this.i=new g.zN(this);g.L(this,this.i);this.ya("click",this.onClick);this.ya("keypress",this.u);this.i.N(a,"videodatachange",this.Oa);a.Mg(this.element,this);this.Oa()},H3=function(a){z3.call(this,a,"videowall-endscreen");
var b=this;this.G=a;this.u=0;this.stills=[];this.B=this.videoData=this.suggestions=null;this.C=this.J=!1;this.L=null;this.l=new g.zN(this);g.L(this,this.l);this.I=new g.M(function(){g.N(b.element,"ytp-show-tiles")},0);
g.L(this,this.I);var c=new g.X({D:"button",ka:["ytp-button","ytp-endscreen-previous"],U:{"aria-label":"Forrige"},S:[g.wL()]});g.L(this,c);c.fa(this.element);c.ya("click",this.CJ,this);this.table=new g.oL({D:"div",K:"ytp-endscreen-content"});g.L(this,this.table);this.table.fa(this.element);c=new g.X({D:"button",ka:["ytp-button","ytp-endscreen-next"],U:{"aria-label":"N\u00e6ste"},S:[g.xL()]});g.L(this,c);c.fa(this.element);c.ya("click",this.BJ,this);a.getVideoData().wc?this.i=new w3(a,!0):this.i=new B3(a);
g.L(this,this.i);g.xN(this.player,this.i.element,4);this.hide()},I3=function(a){return g.yN(a.player)&&a.iq()&&!a.B},iHa=function(a,b){return g.Pc(b.suggestions,function(c){c=g.VP(a.G.T(),c);
g.L(a,c);return c})},J3=function(a){var b=a.ud();
b!==a.J&&(a.J=b,a.player.V("autonavvisibility"))},K3=function(a){g.HN.call(this,a);
var b=this;this.endScreen=null;this.i=this.l=this.u=!1;this.listeners=new g.zN(this);g.L(this,this.listeners);this.env=a.T();jHa(a)?(this.u=!0,kHa(this),this.i?this.endScreen=new D3(a):this.endScreen=new H3(this.player)):this.env.Ac?this.endScreen=new F3(this.player):this.endScreen=new z3(this.player);g.L(this,this.endScreen);g.xN(this.player,this.endScreen.element,4);lHa(this);this.listeners.N(a,"videodatachange",this.Oa,this);this.listeners.N(a,g.MF("endscreen"),function(c){b.yd(c)});
this.listeners.N(a,g.NF("endscreen"),function(c){b.kf(c)})},kHa=function(a){var b=a.player.getVideoData();
if(!b||a.i===b.Ye&&a.l===b.wc)return!1;a.i=b.Ye;a.l=b.wc;return!0},jHa=function(a){a=a.T();
return a.Xa&&!a.Ac},lHa=function(a){a.player.Oe("endscreen");
var b=a.player.getVideoData();b=new g.JF(Math.max(1E3*(b.lengthSeconds-10),0),0x8000000000000,{id:"preload",namespace:"endscreen"});var c=new g.JF(0x8000000000000,0x8000000000000,{id:"load",priority:6,namespace:"endscreen"});a.player.Jd([b,c])};
g.qN.prototype.Tm=g.ca(4,function(){return this.app.Tm()});
g.iW.prototype.Tm=g.ca(3,function(){return this.getVideoData().kH});
g.u(u3,g.X);u3.prototype.select=function(){(this.G.Ei(this.suggestion.Na().videoId,this.suggestion.Bd,this.suggestion.getPlaylistId(),void 0,void 0,this.suggestion.Gx||void 0)||this.G.Z("web_player_endscreen_double_log_fix_killswitch"))&&this.G.vb(this.element)};
u3.prototype.onClick=function(a){g.$N(a,this.G,this.i,this.suggestion.Bd||void 0)&&this.select()};
u3.prototype.l=function(a){switch(a.keyCode){case 13:case 32:g.hp(a)||(this.select(),g.gp(a))}};
u3.prototype.Wd=function(a){g.O(this.element,"ytp-suggestion-card-with-margin",a)};g.u(w3,g.X);g.k=w3.prototype;g.k.Yp=function(a){this.suggestion!==a&&(this.suggestion=a,t3(this.i,a),this.playButton.Aa("url",this.suggestion.vl()),this.Wd())};
g.k.Wd=function(){var a=this.G.aj(!0,this.G.isFullscreen());g.O(this.element,"ytp-autonav-endscreen-small-mode",this.Me(a));g.O(this.element,"ytp-autonav-endscreen-is-premium",!!this.suggestion&&!!this.suggestion.fv);g.O(this.G.getRootNode(),"ytp-autonav-endscreen-cancelled-state",!this.G.ud());g.O(this.G.getRootNode(),"countdown-running",this.Tg());g.O(this.element,"ytp-player-content",this.G.ud());g.rg(this.overlay.element,{width:a.width+"px"});if(!this.Tg()){this.G.ud()?y3(this,Math.round(x3(this)/
1E3)):y3(this);a=!!this.suggestion&&!!this.suggestion.jq;var b=this.G.ud()||!a;g.O(this.element,"ytp-autonav-endscreen-upnext-alternative-header-only",!b&&a);g.O(this.element,"ytp-autonav-endscreen-upnext-no-alternative-header",b&&!a);g.rL(this.u,this.G.ud())}};
g.k.Tg=function(){return 0<this.l};
g.k.Ap=function(){this.Tg()||(this.l=Date.now(),v3(this),fHa(this.G,x3(this)),g.O(this.G.getRootNode(),"countdown-running",this.Tg()))};
g.k.xn=function(){this.zk();v3(this)};
g.k.zk=function(){this.Tg()&&(this.B.stop(),this.l=0)};
g.k.select=function(a){this.G.nextVideo(!1,void 0===a?!1:a);this.zk()};
g.k.CB=function(a){g.$N(a,this.G)&&(a.currentTarget===this.playButton.element?this.G.vb(this.playButton.element):a.currentTarget===this.i.ha("ytp-autonav-endscreen-link-container")&&(a=this.i.ha("ytp-autonav-endscreen-link-container"),this.G.Qa(a,!0),this.G.vb(a)),this.select())};
g.k.wJ=function(){this.G.vb(this.cancelButton.element);g.sN(this.G,!0)};
g.k.BB=function(){var a=this.G.ud();this.C&&this.ab!==a&&g.rL(this,a);this.Wd();this.G.Qa(this.element,a);this.G.Qa(this.cancelButton.element,a);this.G.Qa(this.i.ha("ytp-autonav-endscreen-link-container"),a);this.G.Qa(this.playButton.element,a)};
g.k.Me=function(a){return 400>a.width||459>a.height};g.u(z3,g.X);g.k=z3.prototype;g.k.create=function(){this.created=!0};
g.k.destroy=function(){this.created=!1};
g.k.iq=function(){return!1};
g.k.ud=function(){return!1};
g.k.qE=function(){return!1};g.u(B3,g.X);g.k=B3.prototype;g.k.lt=function(){this.notification&&(this.B.stop(),this.Gb(this.u),this.u=null,this.notification.close(),this.notification=null)};
g.k.Yp=function(a){this.suggestion=a;t3(this,a,"hqdefault.jpg")};
g.k.DB=function(){g.rL(this,this.api.ud());this.api.Qa(this.element,this.api.ud());this.api.Qa(this.ha("ytp-upnext-autoplay-icon"),this.api.ud());this.cancelButton&&this.api.Qa(this.cancelButton.element,this.api.ud())};
g.k.dO=function(){window.focus();this.lt()};
g.k.Ap=function(a){var b=this;this.Tg()||(g.Io("a11y-announce","N\u00e6ste "+this.suggestion.title),this.l=(0,g.Q)(),this.i=new g.M(function(){C3(b,a)},25),C3(this,a),fHa(this.api,gHa(this,a)));
g.rn(this.element,"ytp-upnext-autoplay-paused")};
g.k.hide=function(){g.X.prototype.hide.call(this)};
g.k.Tg=function(){return!!this.i};
g.k.xn=function(){this.zk();this.l=(0,g.Q)();C3(this);g.N(this.element,"ytp-upnext-autoplay-paused")};
g.k.zk=function(){this.Tg()&&(this.i.dispose(),this.i=null)};
g.k.select=function(a){a=void 0===a?!1:a;if(g.U(this.api.T().experiments,"autonav_notifications")&&a&&window.Notification&&document.hasFocus){var b=Notification.permission;"default"===b?Notification.requestPermission():"granted"!==b||document.hasFocus()||(b=this.suggestion.Na(),this.lt(),this.notification=new Notification("N\u00e6ste",{body:b.title,icon:b.xe()}),this.u=this.N(this.notification,"click",this.dO),this.B.start())}this.zk();this.api.nextVideo(!1,a)};
g.k.yJ=function(a){!g.Oe(this.cancelButton.element,g.cp(a))&&g.$N(a,this.api)&&(this.api.ud()&&this.api.vb(this.ha("ytp-upnext-autoplay-icon")),this.select())};
g.k.xJ=function(){this.api.ud()&&this.cancelButton&&this.api.vb(this.cancelButton.element);g.sN(this.api,!0)};
g.k.QN=function(a){A3(this);this.show();this.Ap(a)};
g.k.uH=function(a){A3(this);this.suggestion&&this.suggestion.Na().videoId===a.Na().videoId||this.Yp(a)};
g.k.RN=function(){A3(this);this.zk();this.hide()};
g.k.da=function(){this.zk();this.lt();g.X.prototype.da.call(this)};g.u(D3,z3);g.k=D3.prototype;g.k.create=function(){z3.prototype.create.call(this);this.B.N(this.player,"appresize",this.Wd);this.B.N(this.player,"onVideoAreaChange",this.Wd);this.B.N(this.player,"videodatachange",this.Oa);this.B.N(this.player,"autonavchange",this.EB);this.B.N(this.player,"autonavcancel",this.zJ);this.Oa()};
g.k.show=function(){z3.prototype.show.call(this);(this.I||this.u&&this.u!==this.videoData.clientPlaybackNonce)&&g.sN(this.player,!1);g.yN(this.player)&&this.iq()&&!this.u?(E3(this),2===this.videoData.autonavState?this.player.T().Z("fast_autonav_in_background")&&3===this.player.getVisibilityState()?this.i.select(!0):this.i.Ap():3===this.videoData.autonavState&&this.i.xn()):(g.sN(this.player,!0),E3(this));this.Wd()};
g.k.hide=function(){z3.prototype.hide.call(this);this.i.xn();E3(this)};
g.k.Wd=function(){var a=this.player.aj(!0,this.player.isFullscreen());E3(this);this.l.Wd();g.O(this.element,"ytp-autonav-cancelled-small-mode",this.Me(a));g.O(this.element,"ytp-autonav-cancelled-tiny-mode",this.fu(a));g.O(this.element,"ytp-autonav-cancelled-mini-mode",400>=a.width||360>=a.height);this.overlay&&g.rg(this.overlay.element,{width:a.width+"px"});if(!this.C){a=g.q(this.videos.entries());for(var b=a.next();!b.done;b=a.next()){b=g.q(b.value);var c=b.next().value;b.next().value.Wd(1===c%2)}}};
g.k.Oa=function(){var a=this.player.getVideoData();if(this.videoData!==a&&a){this.videoData=a;if((this.suggestions=hHa(this,a))&&this.suggestions.length)for(this.i.Yp(this.suggestions[0]),this.i!==this.l&&this.l.Yp(this.suggestions[0]),a=0;a<mHa.length;++a){var b=mHa[a];if(this.suggestions&&this.suggestions[b]){this.videos[a]=new u3(this.player);var c=this.videos[a];b=this.suggestions[b];c.suggestion!==b&&(c.suggestion=b,t3(c,b));g.L(this,this.videos[a]);this.videos[a].fa(this.J.element)}}this.Wd()}};
g.k.EB=function(a){1===a?(this.I=!1,this.u=this.videoData.clientPlaybackNonce,this.i.zk(),this.ab&&this.Wd()):(this.I=!0,this.ud()&&(2===a?this.i.Ap():3===a&&this.i.xn()))};
g.k.zJ=function(a){a?this.EB(1):(this.u=null,this.I=!1)};
g.k.iq=function(){return 1!==this.videoData.autonavState};
g.k.Me=function(a){return(910>a.width||459>a.height)&&!this.fu(a)&&!(400>=a.width||360>=a.height)};
g.k.fu=function(a){return 800>a.width&&!(400>=a.width||360>=a.height)};
g.k.ud=function(){return this.ab&&g.yN(this.player)&&this.iq()&&!this.u};
var mHa=[1,3,2,4];g.u(F3,z3);F3.prototype.wa=function(){var a=this.player.getVideoData();this.i.update({profilePicture:a.eg,author:a.author});this.subscribeButton.channelId=a.Eg;var b=this.subscribeButton;a.subscribed?b.l():b.u()};g.u(G3,g.X);G3.prototype.select=function(){(this.api.Ei(this.suggestion.Na().videoId,this.suggestion.Bd,this.suggestion.getPlaylistId(),void 0,void 0,this.suggestion.Gx||void 0)||this.api.Z("web_player_endscreen_double_log_fix_killswitch"))&&this.api.vb(this.element)};
G3.prototype.onClick=function(a){g.$N(a,this.api,this.l,this.suggestion.Bd||void 0)&&this.select()};
G3.prototype.u=function(a){switch(a.keyCode){case 13:case 32:g.hp(a)||(this.select(),g.gp(a))}};
G3.prototype.Oa=function(){var a=this.api.getVideoData(),b=this.api.T();this.l=a.C?!1:b.l};g.u(H3,z3);g.k=H3.prototype;g.k.create=function(){z3.prototype.create.call(this);var a=this.player.getVideoData();a&&(this.suggestions=iHa(this,a),this.videoData=a);this.Wd();this.l.N(this.player,"appresize",this.Wd);this.l.N(this.player,"onVideoAreaChange",this.Wd);this.l.N(this.player,"videodatachange",this.Oa);this.l.N(this.player,"autonavchange",this.qw);this.l.N(this.player,"autonavcancel",this.AJ);a=this.videoData.autonavState;a!==this.L&&this.qw(a);this.l.N(this.element,"transitionend",this.qP)};
g.k.destroy=function(){g.Qt(this.l);g.Pi(this.stills);this.stills=[];this.suggestions=null;z3.prototype.destroy.call(this);g.rn(this.element,"ytp-show-tiles");this.I.stop();this.L=this.videoData.autonavState};
g.k.iq=function(){return 1!==this.videoData.autonavState};
g.k.show=function(){z3.prototype.show.call(this);g.rn(this.element,"ytp-show-tiles");this.player.T().i?this.I.Og():this.I.start();(this.C||this.B&&this.B!==this.videoData.clientPlaybackNonce)&&g.sN(this.player,!1);I3(this)?(J3(this),2===this.videoData.autonavState?this.player.T().Z("fast_autonav_in_background")&&3===this.player.getVisibilityState()?this.i.select(!0):this.i.Ap():3===this.videoData.autonavState&&this.i.xn()):(g.sN(this.player,!0),J3(this))};
g.k.hide=function(){z3.prototype.hide.call(this);this.i.xn();J3(this)};
g.k.qP=function(a){g.cp(a)===this.element&&this.Wd()};
g.k.Wd=function(){if(this.suggestions&&this.suggestions.length){g.N(this.element,"ytp-endscreen-paginate");var a=this.G.aj(!0,this.G.isFullscreen()),b=g.nN(this.G);b&&(b=b.ye()?48:32,a.width-=2*b);var c=a.width/a.height,d=96/54,e=b=2,f=Math.max(a.width/96,2),h=Math.max(a.height/54,2),l=this.suggestions.length,m=Math.pow(2,2);var n=l*m+(Math.pow(2,2)-m);n+=Math.pow(2,2)-m;for(n-=m;0<n&&(b<f||e<h);){var p=b/2,r=e/2,t=b<=f-2&&n>=r*m,w=e<=h-2&&n>=p*m;if((p+1)/r*d/c>c/(p/(r+1)*d)&&w)n-=p*m,e+=2;else if(t)n-=
r*m,b+=2;else if(w)n-=p*m,e+=2;else break}d=!1;n>=3*m&&6>=l*m-n&&(4<=e||4<=b)&&(d=!0);m=96*b;n=54*e;c=m/n<c?a.height/n:a.width/m;c=Math.min(c,2);m=Math.floor(Math.min(a.width,m*c));n=Math.floor(Math.min(a.height,n*c));a=this.table.element;g.Ig(a,m,n);g.rg(a,{marginLeft:m/-2+"px",marginTop:n/-2+"px"});this.i.Yp(this.suggestions[0]);this.i instanceof w3&&this.i.Wd();g.O(this.element,"ytp-endscreen-takeover",I3(this));J3(this);m+=4;n+=4;for(f=c=0;f<b;f++)for(h=0;h<e;h++)if(p=c,r=0,d&&f>=b-2&&h>=e-2?
r=1:0===h%2&&0===f%2&&(2>h&&2>f?0===h&&0===f&&(r=2):r=2),p=g.ee(p+this.u,l),0!==r){t=this.stills[c];t||(t=new G3(this.player),this.stills[c]=t,a.appendChild(t.element));w=Math.floor(n*h/e);var x=Math.floor(m*f/b),y=Math.floor(n*(h+r)/e)-w-4,F=Math.floor(m*(f+r)/b)-x-4;g.Bg(t.element,x,w);g.Ig(t.element,F,y);g.rg(t.element,"transitionDelay",(h+f)/20+"s");g.O(t.element,"ytp-videowall-still-mini",1===r);g.O(t.element,"ytp-videowall-still-large",2<r);r=t;p=this.suggestions[p];r.suggestion!==p&&(r.suggestion=
p,t=r.api.T(),w=g.pn(r.element,"ytp-videowall-still-large")?"hqdefault.jpg":"mqdefault.jpg",t3(r,p,w),g.LC(t)&&(t=p.vl(),t=g.Nd(t,g.EO("emb_rel_end")),r.Aa("url",t)),(p=(p=p.Bd)&&p.itct)&&r.api.Tl(r.element,p));c++}g.O(this.element,"ytp-endscreen-paginate",c<l);for(b=this.stills.length-1;b>=c;b--)e=this.stills[b],g.Le(e.element),g.Oi(e);this.stills.length=c}};
g.k.Oa=function(){var a=this.player.getVideoData();this.videoData!==a&&(this.u=0,this.suggestions=iHa(this,a),this.videoData=a,this.Wd())};
g.k.BJ=function(){this.u+=this.stills.length;this.Wd()};
g.k.CJ=function(){this.u-=this.stills.length;this.Wd()};
g.k.qE=function(){return this.i.Tg()};
g.k.qw=function(a){1===a?(this.C=!1,this.B=this.videoData.clientPlaybackNonce,this.i.zk(),this.ab&&this.Wd()):(this.C=!0,this.ab&&I3(this)&&(2===a?this.i.Ap():3===a&&this.i.xn()))};
g.k.AJ=function(a){if(a){for(a=0;a<this.stills.length;a++)this.G.Qa(this.stills[a].element,!0);this.qw(1)}else this.B=null,this.C=!1;this.Wd()};
g.k.ud=function(){return this.ab&&I3(this)};g.u(K3,g.HN);g.k=K3.prototype;g.k.En=function(){var a=this.player.getVideoData(),b=!!(a&&a.suggestions&&a.suggestions.length);b=!jHa(this.player)||b;var c=a.Uc||g.VC(a.B),d=this.player.Jq();a=a.mutedAutoplay;return b&&!c&&!d&&!a};
g.k.ud=function(){return this.endScreen.ud()};
g.k.SL=function(){return this.ud()?this.endScreen.qE():!1};
g.k.da=function(){this.player.Oe("endscreen");g.HN.prototype.da.call(this)};
g.k.load=function(){var a=this.player.getVideoData();var b=a.sE;if(b&&b.videoId){var c=this.player.Ta().dd.get("heartbeat");a&&a.suggestions&&a.suggestions.length&&b.videoId===a.suggestions[0].id&&!a.WB?a=!1:(this.player.Ei(b.videoId,void 0,void 0,!0,!0,b),c&&c.mu("HEARTBEAT_ACTION_TRIGGER_AT_STREAM_END","HEARTBEAT_ACTION_TRANSITION_REASON_HAS_NEW_STREAM_TRANSITION_ENDPOINT"),a=!0)}else a=!1;a||(g.HN.prototype.load.call(this),this.endScreen.show())};
g.k.unload=function(){g.HN.prototype.unload.call(this);this.endScreen.hide();this.endScreen.destroy()};
g.k.yd=function(a){this.En()&&(this.endScreen.created||this.endScreen.create(),"load"===a.getId()&&this.load())};
g.k.kf=function(a){"load"===a.getId()&&this.loaded&&this.unload()};
g.k.Oa=function(){lHa(this);this.u&&kHa(this)&&(this.endScreen&&(this.endScreen.hide(),this.endScreen.created&&this.endScreen.destroy(),this.endScreen.dispose()),this.i?this.endScreen=new D3(this.player):this.endScreen=new H3(this.player),g.L(this,this.endScreen),g.xN(this.player,this.endScreen.element,4))};g.NN.endscreen=K3;})(_yt_player);
