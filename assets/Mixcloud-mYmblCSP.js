import{r as S,a as q,b as E,g as L}from"./index-DuyJ9_2P.js";function T(u,a){for(var p=0;p<a.length;p++){const i=a[p];if(typeof i!="string"&&!Array.isArray(i)){for(const n in i)if(n!=="default"&&!(n in u)){const c=Object.getOwnPropertyDescriptor(i,n);c&&Object.defineProperty(u,n,c.get?c:{enumerable:!0,get:()=>i[n]})}}}return Object.freeze(Object.defineProperty(u,Symbol.toStringTag,{value:"Module"}))}var y,v;function C(){if(v)return y;v=1;var u=Object.create,a=Object.defineProperty,p=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,n=Object.getPrototypeOf,c=Object.prototype.hasOwnProperty,O=(r,e,t)=>e in r?a(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,b=(r,e)=>{for(var t in e)a(r,t,{get:e[t],enumerable:!0})},_=(r,e,t,l)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of i(e))!c.call(r,s)&&s!==t&&a(r,s,{get:()=>e[s],enumerable:!(l=p(e,s))||l.enumerable});return r},M=(r,e,t)=>(t=r!=null?u(n(r)):{},_(!r||!r.__esModule?a(t,"default",{value:r,enumerable:!0}):t,r)),x=r=>_(a({},"__esModule",{value:!0}),r),o=(r,e,t)=>(O(r,typeof e!="symbol"?e+"":e,t),t),f={};b(f,{default:()=>d}),y=x(f);var m=M(S()),h=q(),g=E();const w="https://widget.mixcloud.com/media/js/widgetApi.js",j="Mixcloud";class d extends m.Component{constructor(){super(...arguments),o(this,"callPlayer",h.callPlayer),o(this,"duration",null),o(this,"currentTime",null),o(this,"secondsLoaded",null),o(this,"mute",()=>{}),o(this,"unmute",()=>{}),o(this,"ref",e=>{this.iframe=e})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){(0,h.getSDK)(w,j).then(t=>{this.player=t.PlayerWidget(this.iframe),this.player.ready.then(()=>{this.player.events.play.on(this.props.onPlay),this.player.events.pause.on(this.props.onPause),this.player.events.ended.on(this.props.onEnded),this.player.events.error.on(this.props.error),this.player.events.progress.on((l,s)=>{this.currentTime=l,this.duration=s}),this.props.onReady()})},this.props.onError)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){}seekTo(e,t=!0){this.callPlayer("seek",e),t||this.pause()}setVolume(e){}getDuration(){return this.duration}getCurrentTime(){return this.currentTime}getSecondsLoaded(){return null}render(){const{url:e,config:t}=this.props,l=e.match(g.MATCH_URL_MIXCLOUD)[1],s={width:"100%",height:"100%"},D=(0,h.queryString)({...t.options,feed:`/${l}/`});return m.default.createElement("iframe",{key:l,ref:this.ref,style:s,src:`https://www.mixcloud.com/widget/iframe/?${D}`,frameBorder:"0",allow:"autoplay"})}}return o(d,"displayName","Mixcloud"),o(d,"canPlay",g.canPlay.mixcloud),o(d,"loopOnEnded",!0),y}var P=C();const N=L(P),R=T({__proto__:null,default:N},[P]);export{R as M};
