(function(g){var window=this;var i4=function(a,b){var c="ytp-miniplayer-button-bottom-right",d={D:"svg",U:{height:"18px",version:"1.1",viewBox:"0 0 22 18",width:"22px"},S:[{D:"g",U:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},S:[{D:"g",U:{transform:"translate(-1.000000, -3.000000)"},S:[{D:"polygon",U:{points:"0 0 24 0 24 24 0 24"}},{D:"path",U:{d:"M19,7 L5,7 L5,17 L19,17 L19,7 Z M23,19 L23,4.98 C23,3.88 22.1,3 21,3 L3,3 C1.9,3 1,3.88 1,4.98 L1,19 C1,20.1 1.9,21 3,21 L21,21 C22.1,21 23,20.1 23,19 Z M21,19.02 L3,19.02 L3,4.97 L21,4.97 L21,19.02 Z",
fill:"#fff","fill-rule":"nonzero"}}]}]}]},e="\u00c5bn videoside";a.T().Z("kevlar_miniplayer_expand_top")&&(c="ytp-miniplayer-button-top-left",d={D:"svg",U:{height:"24px",version:"1.1",viewBox:"0 0 24 24",width:"24px"},S:[{D:"g",U:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},S:[{D:"g",U:{transform:"translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) "},S:[{D:"path",U:{d:"M19,19 L5,19 L5,5 L12,5 L12,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,12 L19,12 L19,19 Z M14,3 L14,5 L17.59,5 L7.76,14.83 L9.17,16.24 L19,6.41 L19,10 L21,10 L21,3 L14,3 Z",
fill:"#fff","fill-rule":"nonzero"}}]}]}]},e="Udvid");g.X.call(this,{D:"button",ka:["ytp-miniplayer-expand-watch-page-button","ytp-button",c],U:{title:"{{title}}","data-tooltip-target-id":"ytp-miniplayer-expand-watch-page-button"},S:[d]});this.G=a;this.ya("click",this.onClick,this);this.Aa("title",g.dO(a,e,"i"));g.Qi(this,g.BO(b.Nb(),this.element))},j4=function(a){g.X.call(this,{D:"div",
K:"ytp-miniplayer-ui"});this.bi=!1;this.player=a;this.N(a,"minimized",this.yh);this.N(a,"onStateChange",this.wQ)},k4=function(a){g.HN.call(this,a);
this.i=new j4(this.player);this.i.hide();g.xN(this.player,this.i.element,4);a.oe()&&(this.load(),g.O(a.getRootNode(),"ytp-player-minimized",!0))};
g.u(i4,g.X);i4.prototype.onClick=function(){this.G.xa("onExpandMiniplayer")};g.u(j4,g.X);g.k=j4.prototype;
g.k.show=function(){this.ce=new g.gn(this.Dr,null,this);this.ce.start();if(!this.bi){this.tooltip=new g.BR(this.player,this);g.L(this,this.tooltip);g.xN(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.Pb=new g.wO(this.player);g.L(this,this.Pb);this.Bj=new g.X({D:"div",K:"ytp-miniplayer-scrim"});g.L(this,this.Bj);this.Bj.fa(this.element);this.N(this.Bj.element,"click",this.LF);var a=new g.X({D:"button",ka:["ytp-miniplayer-close-button","ytp-button"],U:{"aria-label":"Luk"},S:[g.yL()]});
g.L(this,a);a.fa(this.Bj.element);this.N(a.element,"click",this.qj);a=new i4(this.player,this);g.L(this,a);a.fa(this.Bj.element);g.U(this.player.T().experiments,"web_inline_player_enabled")&&(a=new g.nR(this.player,this),g.L(this,a),a.fa(this.Bj.element),a=new g.SP(this.player,this),g.L(this,a),a.fa(this.Bj.element));this.Pm=new g.X({D:"div",K:"ytp-miniplayer-controls"});g.L(this,this.Pm);this.Pm.fa(this.Bj.element);this.N(this.Pm.element,"click",this.LF);var b=new g.X({D:"div",K:"ytp-miniplayer-button-container"});
g.L(this,b);b.fa(this.Pm.element);a=new g.X({D:"div",K:"ytp-miniplayer-play-button-container"});g.L(this,a);a.fa(this.Pm.element);var c=new g.X({D:"div",K:"ytp-miniplayer-button-container"});g.L(this,c);c.fa(this.Pm.element);this.fG=new g.XP(this.player,this,!1);g.L(this,this.fG);this.fG.fa(b.element);b=new g.UP(this.player,this);g.L(this,b);b.fa(a.element);this.nextButton=new g.XP(this.player,this,!0);g.L(this,this.nextButton);this.nextButton.fa(c.element);this.Ai=new g.oR(this.player,this);g.L(this,
this.Ai);this.Ai.fa(this.Bj.element);this.Zc=new g.bQ(this.player,this);g.L(this,this.Zc);g.xN(this.player,this.Zc.element,4);this.wu=new g.X({D:"div",K:"ytp-miniplayer-buttons"});g.L(this,this.wu);g.xN(this.player,this.wu.element,4);a=new g.X({D:"button",ka:["ytp-miniplayer-close-button","ytp-button"],U:{"aria-label":"Luk"},S:[g.yL()]});g.L(this,a);a.fa(this.wu.element);this.N(a.element,"click",this.qj);a=new g.X({D:"button",ka:["ytp-miniplayer-replay-button","ytp-button"],U:{"aria-label":"Luk"},
S:[g.DL()]});g.L(this,a);a.fa(this.wu.element);this.N(a.element,"click",this.GO);this.N(this.player,"presentingplayerstatechange",this.Yb);this.N(this.player,"appresize",this.Sa);this.N(this.player,"fullscreentoggled",this.Sa);this.Sa();this.bi=!0}0!==this.player.getPlayerState()&&g.X.prototype.show.call(this);this.Zc.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.ce&&(this.ce.dispose(),this.ce=void 0);g.X.prototype.hide.call(this);this.player.oe()||(this.bi&&this.Zc.hide(),this.player.loadModule("annotations_module"))};
g.k.da=function(){this.ce&&(this.ce.dispose(),this.ce=void 0);g.X.prototype.da.call(this)};
g.k.qj=function(){this.player.stopVideo();this.player.xa("onCloseMiniplayer")};
g.k.GO=function(){this.player.playVideo()};
g.k.LF=function(a){if(a.target===this.Bj.element||a.target===this.Pm.element)g.U(this.player.T().experiments,"kevlar_miniplayer_play_pause_on_scrim")?g.BK(this.player.Wa())?this.player.pauseVideo():this.player.playVideo():this.player.xa("onExpandMiniplayer")};
g.k.yh=function(){g.O(this.player.getRootNode(),"ytp-player-minimized",this.player.oe())};
g.k.re=function(){this.Zc.Bb();this.Ai.Bb()};
g.k.Dr=function(){this.re();this.ce&&this.ce.start()};
g.k.Yb=function(a){g.W(a.state,32)&&this.tooltip.hide()};
g.k.Sa=function(){g.mQ(this.Zc,0,this.player.La().getPlayerSize().width,!1);g.dQ(this.Zc)};
g.k.wQ=function(a){this.player.oe()&&(0===a?this.hide():this.show())};
g.k.Nb=function(){return this.tooltip};
g.k.ye=function(){return!1};
g.k.Me=function(){return!1};
g.k.ci=function(){return!1};
g.k.Uz=function(){};
g.k.Sm=function(){};
g.k.Cq=function(){};
g.k.an=function(){return null};
g.k.aj=function(){return new g.bg(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.kp=function(a,b,c,d,e){var f=0,h=d=0,l=g.Jg(a);if(b){c=g.pn(b,"ytp-prev-button")||g.pn(b,"ytp-next-button");var m=g.pn(b,"ytp-play-button"),n=g.pn(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.Hg(b,this.element),h=b.x,f=b.y-12):n&&(h=g.pn(b,"ytp-miniplayer-button-top-left"),f=g.Hg(b,this.element),b=g.Jg(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.La().getPlayerSize().width;e=f+(e||0);l=g.de(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.Ak=function(){};
g.k.ak=function(){return!1};g.u(k4,g.HN);k4.prototype.create=function(){};
k4.prototype.wi=function(){return!1};
k4.prototype.load=function(){this.player.hideControls();this.i.show()};
k4.prototype.unload=function(){this.player.showControls();this.i.hide()};g.NN.miniplayer=k4;})(_yt_player);
