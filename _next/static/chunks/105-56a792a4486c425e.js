(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[105],{96922:function(e,r,t){"use strict";t.r(r)},36414:function(e,r,t){"use strict";t.r(r)},98998:function(e,r,t){"use strict";t.r(r)},78551:function(e,r,t){"use strict";t.r(r)},46518:function(e,r,t){"use strict";t.d(r,{M:function(){return h}});var o=t(52322),n=t(2784),i=t(54503);var s=t(90243);const c=(0,n.createContext)({});var a=t(57263),l=t(12496),u=t(63358);const d=e=>{let{children:r,initial:t,isPresent:i,onExitComplete:s,exitVariant:c,enterVariant:d,presenceAffectsLayout:p}=e;const h=(0,a.h)(f),b=(0,l.M)()||"",m=n.useMemo((()=>({id:b,initial:t,isPresent:i,exitVariant:c,enterVariant:d,onExitComplete:e=>{h.set(e,!0);for(const r of h.values())if(!r)return;null==s||s()},register:e=>(h.set(e,!1),()=>h.delete(e))})),p?void 0:[i,c,d]);return n.useMemo((()=>{h.forEach(((e,r)=>h.set(r,!1)))}),[i]),n.useEffect((()=>{!i&&!h.size&&(null==s||s())}),[i]),(0,o.jsx)(u.O.Provider,{value:m,children:r})};function f(){return new Map}n.keep;const p=e=>e.key||"";const h=e=>{let{children:r,enterVariant:t,exitVariant:a,initial:l=!0,onExitComplete:u,exitBeforeEnter:f,presenceAffectsLayout:h=!0}=e,b=(0,s.N)();const m=(0,n.useContext)(c).forceRender;m&&(b=m);const v=function(){const e=(0,n.useRef)(!1);return(0,i.LI)((()=>(e.current=!0,()=>{e.current=!1})),[]),e}(),g=function(e){const r=[];return n.Children.forEach(e,((e,t)=>{(0,n.isValidElement)(e)&&(e.key?r.push(e):r.push(n.cloneElement(e,{key:t})))})),r}(r);let x=g;const y=new Set,k=(0,n.useRef)(x),_=(0,n.useRef)(new Map).current,j=(0,n.useRef)(!0);var w;if((0,i.LI)((()=>{j.current=!1,function(e,r){e.forEach((e=>{const t=p(e);r.set(t,e)}))}(g,_),k.current=x})),w=()=>{j.current=!0,_.clear(),y.clear()},(0,n.useEffect)((()=>()=>w()),[]),j.current)return(0,o.jsx)(o.Fragment,{children:x.map((e=>(0,o.jsx)(d,{isPresent:!0,exitVariant:a,enterVariant:t,initial:!!l&&void 0,presenceAffectsLayout:h,children:e},p(e))))});x=[...x];const C=k.current.map(p),P=g.map(p),O=C.length;for(let o=0;o<O;o++){const e=C[o];-1===P.indexOf(e)&&y.add(e)}return f&&y.size&&(x=[]),y.forEach((e=>{if(-1!==P.indexOf(e))return;const r=_.get(e);if(!r)return;const n=C.indexOf(e);x.splice(n,0,(0,o.jsx)(d,{isPresent:!1,onExitComplete:()=>{_.delete(e),y.delete(e);const r=k.current.findIndex((r=>r.key===e));if(k.current.splice(r,1),!y.size){if(k.current=g,!1===v.current)return;b(),null==u||u()}},exitVariant:a,enterVariant:t,presenceAffectsLayout:h,children:r},p(r)))})),x=x.map((e=>{const r=e.key;return y.has(r)?e:(0,o.jsx)(d,{isPresent:!0,exitVariant:a,enterVariant:t,presenceAffectsLayout:h,children:e},p(e))})),(0,o.jsx)(o.Fragment,{children:y.size?x:x.map((e=>(0,n.cloneElement)(e)))})};h.displayName="AnimatePresence"},5146:function(e,r,t){"use strict";t.d(r,{zx:function(){return k}});var o=t(37328),n=t(96670),i=t(26297),s=t(52322),c=t(45482),a=t(37314),l=t(25622),u=t(59699),d=t(24961),f=t(63035),p=t(38129),h=t(57318),b=t(39383),m=t(29694),v=t(2784);v.createElement;const g=(0,c.z)(b.K,{name:"Button",tag:"button",focusable:!0,hoverTheme:!0,pressTheme:!0,backgrounded:!0,variants:{size:{"...size":a.a},active:{true:{hoverStyle:{backgroundColor:"$background"}}},disabled:{true:{opacity:.5,pointerEvents:"none"}}},defaultVariants:{size:"$4"},"borderTopColor-focus":"_btc-0focus-2xgill","borderRightColor-focus":"_brc-0focus-1sjqkaq","borderBottomColor-focus":"_bbc-0focus-y6s9h7","borderLeftColor-focus":"_blc-0focus-1u4s42n","borderTopColor-hover":"_btc-0hover-15u51ps","borderRightColor-hover":"_brc-0hover-1vt3uyx","borderBottomColor-hover":"_bbc-0hover-1uadmte","borderLeftColor-hover":"_blc-0hover-1pjikiu","borderTopColor-active":"_btc-0active-8zhr3m","borderRightColor-active":"_brc-0active-wr8c8p","borderBottomColor-active":"_bbc-0active-1knrdgg","borderLeftColor-active":"_blc-0active-1fl8ibg",borderBottomStyle:"_bbs-1d05hm9",borderTopStyle:"_bts-j2x5vn",borderLeftStyle:"_bls-69w1u5",borderRightStyle:"_brs-r2rbii",cursor:"_cur-how55z",flexDirection:"_fd-1w148es",flexWrap:"_fw-1hebkmm",alignItems:"_ai-17do05s",justifyContent:"_jc-3mx9pa",borderTopColor:"_btc-m01i2g",borderRightColor:"_brc-afar9b",borderBottomColor:"_bbc-13rsofa",borderLeftColor:"_blc-tic6ma",borderTopWidth:"_btw-1k5vq58",borderRightWidth:"_brw-1737c2r",borderBottomWidth:"_bbw-he1b7u",borderLeftWidth:"_blw-np9skm"}),x=(0,c.z)(m.J,{selectable:!1,ellipse:!0,flexShrink:"_fs-vf3l73",flexGrow:"_fg-15m5m9w",cursor:"_cur-1kil2at",color:"_col-f1vuru"}),y=(0,v.forwardRef)(((e,r)=>{const{children:t,icon:c,iconAfter:a,noTextWrap:f,theme:b,space:m,spaceFlex:y,scaleIcon:k=1,scaleSpace:_=.66,separator:j,color:w,fontWeight:C,letterSpacing:P,fontSize:O,fontFamily:R,textAlign:Z,textProps:z}=e,E=(0,i.Z)(e,["children","icon","iconAfter","noTextWrap","theme","space","spaceFlex","scaleIcon","scaleSpace","separator","color","fontWeight","letterSpacing","fontSize","fontFamily","textAlign","textProps"]),L=(0,v.useContext)(l.K),S=e.size||"$4",$=(0,p.yv)(S)*k,A=(0,h.useGetThemedIcon)({size:$,color:w}),[W,T]=[c,a].map(A),F=(0,u.Ve)($)*_,I=(0,h.wrapStringChildrenInText)(x,e);return(0,s.jsx)(g,(0,n.Z)((0,o.Z)((0,n.Z)((0,o.Z)({fontFamily:R},L&&{tag:"span"}),{ref:r}),E),{children:(0,s.jsx)(l.K.Provider,{value:!0,children:W||T?(0,d.P9)({space:F,spaceFlex:y,separator:j,direction:"column"===e.flexDirection||"column-reverse"===e.flexDirection?"vertical":"horizontal",children:[W,I,T]}):I})}))})),k=g.extractable((0,f.Y)(y),{inlineProps:new Set(["color","fontWeight","fontSize","fontFamily","letterSpacing","textAlign"])});t(96922)},8005:function(e,r,t){"use strict";t.d(r,{b:function(){return l},k:function(){return a}});var o=t(37328),n=t(96670),i=t(26297),s=t(52322),c=t(2784);function a(e,r){const t=c.createContext(r);function o(e){const{children:r}=e,o=(0,i.Z)(e,["children"]),n=c.useMemo((()=>o),Object.values(o));return(0,s.jsx)(t.Provider,{value:n,children:r})}return o.displayName=e+"Provider",[o,function(o){const n=c.useContext(t);if(n)return n;if(void 0!==r)return r;throw new Error("`".concat(o,"` must be used within `").concat(e,"`"))}]}function l(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=[];function a(r,o){const n=c.createContext(o),a=t.length;function l(r){const{scope:t,children:o}=r,l=(0,i.Z)(r,["scope","children"]),u=(null==t?void 0:t[e][a])||n,d=c.useMemo((()=>l),Object.values(l));return(0,s.jsx)(u.Provider,{value:d,children:o})}return t=[...t,o],l.displayName=r+"Provider",[l,function(t,i){const s=(null==i?void 0:i[e][a])||n,l=c.useContext(s);if(l)return l;if(void 0!==o)return o;throw new Error("`".concat(t,"` must be used within `").concat(r,"`"))}]}const l=()=>{const r=t.map((e=>c.createContext(e)));return function(t){const i=(null==t?void 0:t[e])||r;return c.useMemo((()=>({["__scope".concat(e)]:(0,n.Z)((0,o.Z)({},t),{[e]:i})})),[t,i])}};return l.scopeName=e,[a,u(l,...r)]}function u(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];const n=r[0];if(1===r.length)return n;const i=()=>{const e=r.map((e=>({useScope:e(),scopeName:e.scopeName})));return function(r){const t=e.reduce(((e,t)=>{let{useScope:n,scopeName:i}=t;const s=n(r)["__scope".concat(i)];return(0,o.Z)({},e,s)}),{});return c.useMemo((()=>({["__scope".concat(n.scopeName)]:t})),[t])}};return i.scopeName=n.scopeName,i}},38129:function(e,r,t){"use strict";t.d(r,{yv:function(){return i}});var o=t(59699),n=t(77650);const i=(e,r)=>{const t=s(e,r);return(0,o.cG)(t)?+t.val:t?+t:16},s=(e,r)=>{const t=c(e,r);if(!t)return e;return(0,n.iE)().fontsParsed[(null==r?void 0:r.font)||"$body"].size[t]},c=(e,r)=>{var t;if("number"===typeof e)return null;const o=e||"$4",i=(null==r?void 0:r.relativeSize)||0,s=(0,n.iE)().fontsParsed[(null==r?void 0:r.font)||"$body"].size,c=Object.keys(s);let a=c.indexOf(o);-1===a&&o.endsWith(".5")&&(a=c.indexOf(o.replace(".5","")));return null!=(t=c[Math.min(Math.max(0,a+i),c.length-1)])?t:o}},57318:function(e,r,t){"use strict";t.d(r,{useGetThemedIcon:function(){return c},wrapStringChildrenInText:function(){return l}});var o=t(37328),n=t(96670),i=t(2784),s=t(61958);const c=e=>{const r=(e=>{const r=(0,s.Fg)();let t;return t=r&&e&&e in r?r[e]:e||(null==r?void 0:r.color),(null==t?void 0:t.toString())||""})(e.color);return t=>(0,i.isValidElement)(t)?t:t?i.createElement(t,(0,n.Z)((0,o.Z)({},e),{color:r})):t};var a=t(52322);function l(e,r){let{children:t,textProps:s,size:c,noTextWrap:l,color:u,fontFamily:d,fontSize:f,fontWeight:p,letterSpacing:h,textAlign:b}=r;if(l||!t)return t;let m=i.Children.toArray(t),v=[],g=!1;const x={};function y(){if(!g)return;const r=v.length-1,t=v[r];v[r]=(0,a.jsx)(e,(0,n.Z)((0,o.Z)((0,n.Z)((0,o.Z)({},x),{size:c}),s),{children:t}),r)}u&&(x.color=u),d&&(x.fontFamily=d),f&&(x.fontSize=f),p&&(x.fontWeight=p),h&&(x.letterSpacing=h),b&&(x.textAlign=b);for(const o of m){const e=v[v.length-1],r="string"===typeof o;r?g?e.push(o):v.push([o]):(y(),v.push(o)),g=r}return y(),v}},32577:function(e,r,t){"use strict";t.d(r,{J2:function(){return B},QH:function(){return H},bh:function(){return P},s2:function(){return Z},tW:function(){return E},xo:function(){return S},yk:function(){return A}});var o=t(58013),n=t(37328),i=t(96670),s=t(26297),c=t(52322),a=(t(99021),t(80487)),l=t(46518),u=t(88290),d=t(11193),f=t(61958),p=t(36475),h=t(82735),b=t(12496),m=t(8005),v=t(6621),g=t(12938),x=t(32806),y=t(35314),k=t(47138),_=t(2784);const j="Popover",[w,C]=(0,m.b)(j,[v.D7]),P=(0,v.D7)(),[O,R]=w(j),Z=O,z="PopoverAnchor",E=_.forwardRef(((e,r)=>{const{__scopePopover:t}=e,o=(0,s.Z)(e,["__scopePopover"]),a=R(z,t),l=P(t),{onCustomAnchorAdd:u,onCustomAnchorRemove:d}=a;return _.useEffect((()=>(u(),()=>d())),[u,d]),(0,c.jsx)(v.Xp,(0,i.Z)((0,n.Z)({},l,o),{ref:r}))}));E.displayName=z;const L="PopoverTrigger",S=_.forwardRef(((e,r)=>{const{__scopePopover:t}=e,o=(0,s.Z)(e,["__scopePopover"]),a=R(L,t),l=P(t),f=(0,u.e)(r,a.triggerRef),p=(0,c.jsx)(y.FA,(0,i.Z)((0,n.Z)({"aria-haspopup":"dialog","aria-expanded":a.open,"aria-controls":a.contentId,"data-state":M(a.open)},o),{ref:f,onPress:(0,d.composeEventHandlers)(e.onPress,a.onOpenToggle)}));return a.hasCustomAnchor?p:(0,c.jsx)(v.Xp,(0,i.Z)((0,n.Z)({asChild:!0},l),{children:p}))}));S.displayName=L;const $="PopoverContent",A=_.forwardRef(((e,r)=>R($,e.__scopePopover).modal?(0,c.jsx)(W,(0,i.Z)((0,n.Z)({},e),{ref:r})):(0,c.jsx)(T,(0,i.Z)((0,n.Z)({},e),{ref:r}))));A.displayName=$;const W=_.forwardRef(((e,r)=>{const{allowPinchZoom:t}=e,o=(0,s.Z)(e,["allowPinchZoom"]),a=R($,e.__scopePopover),l=_.useRef(null),h=(0,u.e)(r,l),b=_.useRef(!1),m=(0,f.Cg)(),v=a.modal?x.h:_.Fragment;return(0,c.jsx)(v,{children:(0,c.jsx)(p.Q,{name:m,children:(0,c.jsx)(F,(0,i.Z)((0,n.Z)({},o),{ref:h,trapFocus:a.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,d.composeEventHandlers)(e.onCloseAutoFocus,(e=>{var r;e.preventDefault(),b.current||null==(r=a.triggerRef.current)||r.focus()})),onPointerDownOutside:(0,d.composeEventHandlers)(e.onPointerDownOutside,(e=>{const r=e.detail.originalEvent,t=0===r.button&&!0===r.ctrlKey,o=2===r.button||t;b.current=o}),{checkDefaultPrevented:!1}),onFocusOutside:(0,d.composeEventHandlers)(e.onFocusOutside,(e=>e.preventDefault()),{checkDefaultPrevented:!1})}))})})})),T=_.forwardRef(((e,r)=>{const t=(0,o.Z)({},e),s=R($,e.__scopePopover),a=_.useRef(!1),l=s.modal?x.h:_.Fragment;return(0,c.jsx)(l,{children:(0,c.jsx)(F,(0,i.Z)((0,n.Z)({},t),{ref:r,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:r=>{var t,o;null==(t=e.onCloseAutoFocus)||t.call(e,r),r.defaultPrevented||(a.current||null==(o=s.triggerRef.current)||o.focus(),r.preventDefault()),a.current=!1},onInteractOutside:r=>{var t,o;null==(t=e.onInteractOutside)||t.call(e,r),r.defaultPrevented||(a.current=!0);const n=r.target;(null==(o=s.triggerRef.current)?void 0:o.contains(n))&&r.preventDefault()}}))})})),F=_.forwardRef(((e,r)=>{const{__scopePopover:t,trapFocus:o,onOpenAutoFocus:a,onCloseAutoFocus:u,disableOutsidePointerEvents:d,onEscapeKeyDown:f,onPointerDownOutside:p,onFocusOutside:h,onInteractOutside:b}=e,m=(0,s.Z)(e,["__scopePopover","trapFocus","onOpenAutoFocus","onCloseAutoFocus","disableOutsidePointerEvents","onEscapeKeyDown","onPointerDownOutside","onFocusOutside","onInteractOutside"]),g=R($,t),x=P(t);return(0,c.jsx)(l.M,{children:!!g.open&&(0,c.jsx)(v.XS,(0,i.Z)((0,n.Z)({"data-state":M(g.open),id:g.contentId,pointerEvents:"auto"},x,m),{ref:r}))})})),I="PopoverClose",N=_.forwardRef(((e,r)=>{const{__scopePopover:t}=e,o=(0,s.Z)(e,["__scopePopover"]),a=R(I,t);return(0,c.jsx)(y.FA,(0,i.Z)((0,n.Z)({},o),{ref:r,onPress:(0,d.composeEventHandlers)(e.onPress,(()=>a.onOpenChange(!1)))}))}));N.displayName=I;const H=_.forwardRef(((e,r)=>{const{__scopePopover:t}=e,o=(0,s.Z)(e,["__scopePopover"]),a=P(t);return(0,c.jsx)(v.cU,(0,i.Z)((0,n.Z)({},a,o),{ref:r}))}));H.displayName="PopoverArrow";const B=(0,h.$)((e=>{const{__scopePopover:r,children:t,open:o,defaultOpen:l,onOpenChange:u,modal:d=!0}=e,f=(0,s.Z)(e,["__scopePopover","children","open","defaultOpen","onOpenChange","modal"]),p=P(r),h=_.useRef(null),[m,x]=_.useState(!1),[y,j]=(0,k.T)({prop:o,defaultProp:l||!1,onChange:u}),w=_.useCallback((e=>{const r=(0,a.YF)((0,i.Z)((0,n.Z)({},e),{open:y,onOpenChange:j})),{getReferenceProps:t,getFloatingProps:o}=(0,a.NI)([(0,a.KK)(r.context),(0,a.qs)(r.context,{role:"dialog"}),(0,a.bQ)(r.context)]);return(0,i.Z)((0,n.Z)({},r),{getReferenceProps:t,getFloatingProps:o})}),[y]);return(0,c.jsx)(g.A.Provider,{value:w,children:(0,c.jsx)(v.rD,(0,i.Z)((0,n.Z)({},p,f),{children:(0,c.jsx)(O,{scope:r,contentId:(0,b.M)(),triggerRef:h,open:y,onOpenChange:j,onOpenToggle:_.useCallback((()=>j((e=>!e))),[j]),hasCustomAnchor:m,onCustomAnchorAdd:_.useCallback((()=>x(!0)),[]),onCustomAnchorRemove:_.useCallback((()=>x(!1)),[]),modal:d,children:t})}))})}),{Anchor:E,Arrow:H,Trigger:S,Content:A,Close:N});function M(e){return e?"open":"closed"}B.displayName=j},6621:function(e,r,t){"use strict";t.d(r,{D7:function(){return w},GK:function(){return P},XS:function(){return L},Xp:function(){return Z},cU:function(){return W},rD:function(){return O}});var o=t(37328),n=t(96670),i=t(26297),s=t(52322),c=t(88290),a=t(54503),l=t(45482),u=t(77650),d=t(59699),f=t(9303),p=t(8005),h=t(35314),b=t(39383),m=t(2784),v=t(20189),g=t(66379),x=t(40771),y=t(12938);const k="Popper",[_,j]=(0,p.b)(k),w=j,[C,P]=_(k),O=e=>{const{__scopePopper:r,children:t,size:i,placement:l="bottom",stayInFrame:u,allowFlip:d}=e,[f,p]=m.useState(!1);(0,a.LI)((()=>{p(!0)}),[]);const h=m.useRef(),[b,k]=m.useState(null),[_,j]=m.useState(0),w=m.useRef(),P=(0,y.Y)({placement:l,middleware:[u?(0,v.uY)(u):null,d?(0,v.RR)(d):null,b?(0,g.x7)({element:b}):null,_?(0,v.cv)(_):null].filter(Boolean)}),{refs:O,middlewareData:R}=P,Z=(0,c.e)(w,k);(0,a.LI)((()=>{P.reference(h.current)}),[h]),m.useEffect((()=>{if(O.reference.current&&O.floating.current)return(0,x.Me)(O.reference.current,O.floating.current,P.update)}),[O.floating.current,O.reference.current]);const z=m.useMemo((()=>R.arrow),[JSON.stringify(R.arrow||{})]);return(0,s.jsx)(C,(0,n.Z)((0,o.Z)({scope:r,anchorRef:h,size:i,arrowRef:Z,arrowStyle:z,onArrowSize:j,isMounted:f},P),{children:t}))};O.displayName=k;const R="PopperAnchor",Z=m.forwardRef(((e,r)=>{const{__scopePopper:t,virtualRef:n}=e,a=(0,i.Z)(e,["__scopePopper","virtualRef"]),{anchorRef:l,getReferenceProps:u}=P(R,t),d=m.useRef(null),f=(0,c.e)(r,d,l);if(n)return null;const p=(0,o.Z)({ref:f},a);return(0,s.jsx)(h.FA,(0,o.Z)({},u?u(p):p))}));Z.displayName=R;const z="PopperContent",E=(0,l.z)(b.K,{name:"PopperContent",backgroundColor:"$background",alignItems:"center",radiused:!0,defaultVariants:{size:"$4"}}),L=E.extractable(m.forwardRef(((e,r)=>{const{__scopePopper:t}=e,a=(0,i.Z)(e,["__scopePopper"]),{strategy:l,placement:u,floating:d,x:f,y:p,getFloatingProps:b,size:v,isMounted:g}=P(z,t),x=(0,c.e)(d,r),y=m.useMemo((()=>(0,s.jsx)(E,(0,n.Z)((0,o.Z)({"data-placement":u,"data-strategy":l},a),{size:a.size||v}),"popper-content-frame")),[u,l,e]);if(!g)return null;const k={ref:x,x:f||0,y:p||0,position:"absolute"};return(0,s.jsx)(h.FA,(0,n.Z)((0,o.Z)({},b?b(k):k),{children:y}))})));L.displayName=z;const S="PopperArrow",$=(0,l.z)(h.FA,{name:"PopperArrow",borderColor:"$borderColor",backgroundColor:"$background",position:"absolute",zIndex:0,pointerEvents:"none"}),A={top:"bottom",right:"left",bottom:"top",left:"right"},W=$.extractable(m.forwardRef((function(e,r){const{__scopePopper:t,offset:l,size:p,borderWidth:h=0}=e,b=(0,i.Z)(e,["__scopePopper","offset","size","borderWidth"]),m=P(S,t),v=(0,u.lz)(),g=null!=p?p:m.size,x=+(0,d.Ve)((0,f.C)(v.space,g,0)),{placement:y}=m,{x:k,y:_}=m.arrowStyle||{x:0,y:0},j=(0,c.e)(m.arrowRef,r),w=y?y.split("-")[0]:"top";let C={x:k,y:_,width:x,height:x};if(w){const e=A[w];e&&(C[e]=-x/2),"top"!==e&&"bottom"!==e||(C.left=0),"left"!==e&&"right"!==e||(C.top=0)}return(0,a.LI)((()=>{var e;null==(e=m.onArrowSize)||e.call(m,x)}),[x,m.onArrowSize]),(0,s.jsx)($,(0,o.Z)((0,n.Z)((0,o.Z)((0,n.Z)((0,o.Z)({},b),{ref:j}),C),{rotate:"45deg"}),"top"===w&&{borderBottomWidth:h,borderRightWidth:h},"bottom"===w&&{borderTopWidth:h,borderLeftWidth:h},"left"===w&&{borderTopWidth:h,borderRightWidth:h},"right"===w&&{borderBottomWidth:h,borderLeftWidth:h}))})));W.displayName=S},12938:function(e,r,t){"use strict";t.d(r,{A:function(){return i},Y:function(){return s}});var o=t(2784),n=t(66379);const i=(0,o.createContext)(null),s=e=>{var r;return null==(r=(0,o.useContext)(i)||n.YF)?void 0:r(e)}},32806:function(e,r,t){"use strict";t.d(r,{h:function(){return u}});var o=t(37328),n=t(52322),i=(t(99021),t(54503)),s=t(35314),c=t(2784),a=t(28316),l=t(30976);const u=e=>{const r=(0,n.jsx)(s.FA,(0,o.Z)({pointerEvents:"none",fullscreen:!0},e));if(!i.$L)return(0,n.jsx)(l.Modal,{visible:!0,transparent:!0,pointerEvents:"none",children:r});const[t,u]=c.useState(null);return(0,i.LI)((()=>{var e;u(null==(e=globalThis.document)?void 0:e.body)}),[]),t?(0,a.createPortal)(r,t):null}},91738:function(e,r,t){"use strict";t.d(r,{C:function(){return i}});var o=t(45482),n=t(539);const i=(0,o.z)(n.b,{name:"Circle",circular:!0})},539:function(e,r,t){"use strict";t.d(r,{b:function(){return s}});var o=t(45482),n=t(39383),i=t(53167);const s=(0,o.z)(n.K,{name:"Square",backgrounded:!0,variants:{circular:{true:{borderRadius:1e5}},size:{"...size":i.k}},overflowX:"_ovx-wili9s",overflowY:"_ovy-1b6zsht",justifyContent:"_jc-3mx9pa",alignItems:"_ai-17do05s"});t(36414)},53167:function(e,r,t){"use strict";t.d(r,{k:function(){return o}});const o=(e,r)=>{let{tokens:t}=r;var o,n;const i=null!=(o=t.size[e])?o:e,s=null!=(n=t.size[e])?n:e;return{width:i,height:s,minWidth:i,maxWidth:i,maxHeight:s,minHeight:s}}},36903:function(e,r,t){"use strict";t.d(r,{L:function(){return h},d:function(){return p}});var o=t(37328),n=t(96670),i=t(52322),s=t(44324),c=t(2784),a=t(34989),l=t(5146),u=t(91738),d=t(29688);const f=new Set,p=()=>{const{0:e,1:r}=(0,c.useState)(4),t=s.ji[e];(0,c.useEffect)((()=>{const e=e=>r(e);return f.add(e),()=>{f.delete(e)}}),[]);const o=(s.ji.indexOf(t)+1)%s.ji.length,n=s.ji[o],i=e=>{const t=s.ji.indexOf(e);r(t),f.forEach((e=>e(t)))};return{tint:t,setTint:i,setNextTint:()=>{i(n)}}},h=e=>{const{tint:r,setNextTint:t}=p();return(0,i.jsx)(a.w6,{groupId:"header-actions-color",label:"Change color",children:(0,i.jsx)(l.zx,(0,n.Z)((0,o.Z)({size:"$3",paddingRight:"_pr-4rm8ll",paddingLeft:"_pl-1f95fue",height:"_h-1ukajy2",borderTopLeftRadius:"_btlr-14fwd2m",borderTopRightRadius:"_btrr-jibzu3",borderBottomRightRadius:"_bbrr-wuhaqh",borderBottomLeftRadius:"_bblr-10aeups",onPress:t},e),{"aria-label":"toggle a light and dark color scheme",className:(0,d.concatClassName)(e&&e.className||"",e),children:(0,i.jsx)(u.C,{borderBottomStyle:"_bbs-1d05hm9",borderTopStyle:"_bts-j2x5vn",borderLeftStyle:"_bls-69w1u5",borderRightStyle:"_brs-r2rbii",marginTop:"_mt-3qjatv",marginRight:"_mr-wqia5o",marginBottom:"_mb-fob3c1",marginLeft:"_ml-1slqt39",borderTopColor:"_btc-1hrvl1g",borderRightColor:"_brc-1ji1p",borderBottomColor:"_bbc-151rn2u",borderLeftColor:"_blc-1e58vui",borderTopWidth:"_btw-1k5vq58",borderRightWidth:"_brw-1737c2r",borderBottomWidth:"_bbw-he1b7u",borderLeftWidth:"_blw-np9skm",size:12,width:"_w-1y5rzqn",height:"_h-omokuo",minWidth:"_miw-1iguid9",maxWidth:"_maw-1amdwvf",maxHeight:"_mah-58onpw",minHeight:"_mih-zdn05e",backgroundColor:r})}))})};t(98998)},87831:function(e,r,t){"use strict";t.d(r,{H:function(){return a}});var o=t(26297),n=t(52322),i=t(97729),s=t.n(i),c=t(5632);t(2784);function a(e){var{url:r="https://tamagui.dev",pathname:t,title:i="Tamagui",description:a="",poster:l}=e,u=(0,o.Z)(e,["url","pathname","title","description","poster"]);const d=(0,c.useRouter)();var f;const p=null!==(f=u.image)&&void 0!==f?f:l?"".concat(r,"/").concat(l):"".concat(r,"/social.png"),h=t||d.pathname;return(0,n.jsxs)(s(),{children:[(0,n.jsx)("title",{children:i}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.png"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.svg",type:"image/svg+xml"}),(0,n.jsx)("meta",{property:"og:url",content:"".concat(r).concat(h)}),(0,n.jsx)("meta",{property:"og:title",content:i}),(0,n.jsx)("meta",{property:"og:description",content:a}),(0,n.jsx)("meta",{property:"og:image",content:p}),(0,n.jsx)("meta",{name:"twitter:site",content:"@tamagui_js"}),(0,n.jsx)("meta",{name:"twitter:card",content:"summary_large_image"})]})}},39383:function(e,r,t){"use strict";t.d(r,{K:function(){return c}});var o=t(45482),n=t(35314),i=t(37328);const s={true:(e,r)=>(0,n.yQ)(r.props.size,r)},c=(0,o.z)(n.FA,{name:"SizableStack",variants:{fontFamily:()=>({}),backgrounded:{true:{backgroundColor:"$background"}},radiused:{true:(e,r)=>{const{tokens:t,props:o}=r;return{borderRadius:t.radius[o.size]||t.radius.$4}}},hoverTheme:{true:{hoverStyle:{backgroundColor:"$backgroundHover",borderColor:"$borderColorHover"}},false:{}},pressTheme:{true:{pressStyle:{backgroundColor:"$backgroundPress",borderColor:"$borderColorPress"}},false:{}},focusTheme:{true:{focusStyle:{backgroundColor:"$backgroundFocus",borderColor:"$borderColorFocus"}},false:{}},circular:{true:(e,r)=>{let{props:t,tokens:o}=r;const n=o.size[t.size];return{width:n,height:n,maxWidth:n,maxHeight:n,minWidth:n,minHeight:n,borderRadius:1e5,paddingVertical:0,paddingHorizontal:0}}},padded:{true:(e,r)=>{const{tokens:t,props:o}=r;return{padding:t.space[o.size]||t.space.$4}}},elevate:s,bordered:(e,r)=>{let{props:t}=r;return(0,i.Z)({borderWidth:"number"===typeof e?e:1,borderColor:"$borderColor"},t.hoverTheme&&{hoverStyle:{borderColor:"$borderColorHover"}},t.pressTheme&&{pressStyle:{borderColor:"$borderColorPress"}},t.focusTheme&&{focusStyle:{borderColor:"$borderColorFocus"}})},transparent:{true:{backgroundColor:"transparent"}},chromeless:{true:{backgroundColor:"transparent",borderColor:"transparent",shadowColor:"transparent"}}}})},46318:function(e,r,t){"use strict";t.d(r,{Z:function(){return v}});var o=t(37328),n=t(96670),i=t(26297),s=t(52322),c=t(45482),a=t(61125),l=t(59699),u=t(77650),d=t(24961),f=t(80641),p=t(39383),h=t(2784),b=t(30976);const m=(0,c.z)(p.K,{name:"GroupFrame",variants:{size:(e,r)=>{let{tokens:t}=r;var o,n;return{borderRadius:null!=(n=null!=(o=t.radius[e])?o:e)?n:t.radius.$4}}},defaultVariants:{size:"$4"},overflowX:"_ovx-wili9s",overflowY:"_ovy-1b6zsht",backgroundColor:"_bc-ea1zmt",transform:"_transform-w2ytz6"}),v=m.extractable((0,h.forwardRef)(((e,r)=>{const t=(0,a.p)(e),{children:c,space:f,spaceDirection:p,separator:v,size:x="$4",scrollable:y,vertical:k,disabled:_,disablePassBorderRadius:j,disablePassSize:w,borderRadius:C}=t,P=(0,i.Z)(t,["children","space","spaceDirection","separator","size","scrollable","vertical","disabled","disablePassBorderRadius","disablePassSize","borderRadius"]),O=null!=C?C:x?(0,l.Ve)((0,u.lz)().radius[x])-1:void 0,R=void 0!==O,Z=null!=j?j:!R,z=h.Children.toArray(c),E=null!=w?w:void 0===x,L=z.map(((e,r)=>{var t,n;if(!(0,h.isValidElement)(e))return e;const i=null!=(t=e.props.disabled)?t:_,s=null!=(n=e.props.size)?n:x,c=0===r,a=r===z.length-1,l=(0,o.Z)({disabled:i},!E&&{size:s},!Z&&(0,o.Z)({borderTopLeftRadius:0,borderTopRightRadius:0,borderBottomLeftRadius:0,borderBottomRightRadius:0},R&&(0,o.Z)({},c&&!k&&{borderTopLeftRadius:O,borderBottomLeftRadius:O},c&&k&&{borderTopLeftRadius:O,borderTopRightRadius:O},a&&!k&&{borderTopRightRadius:O,borderBottomRightRadius:O},a&&k&&{borderBottomLeftRadius:O,borderBottomRightRadius:O})));return g(e,l)}));return(0,s.jsx)(m,(0,n.Z)((0,o.Z)({ref:r,size:x,flexDirection:k?"column":"row",borderRadius:C},P),{children:(S=(0,d.P9)({direction:p,separator:v,space:f,children:L}),y?(0,s.jsx)(b.ScrollView,(0,n.Z)((0,o.Z)({},k&&{showsVerticalScrollIndicator:!1},!k&&{horizontal:!0,showsHorizontalScrollIndicator:!1}),{children:S})):S)}));var S}))),g=(e,r)=>{const t=(0,f.d)(e.props,r)[0];return h.cloneElement((0,n.Z)((0,o.Z)({},e),{props:null}),t)};t(78551)},34989:function(e,r,t){"use strict";t.d(r,{AZ:function(){return v},u:function(){return g},w6:function(){return x}});var o=t(37328),n=t(96670),i=t(26297),s=t(52322),c=(t(99021),t(80487)),a=t(82735),l=t(12496),u=t(32577),d=t(6621),f=t(12938),p=t(61342),h=t(2784);const b=h.forwardRef(((e,r)=>{var{__scopePopover:t}=e,n=(0,i.Z)(e,["__scopePopover"]);const c=(0,u.bh)(t),a=(0,d.GK)("PopperContent",c.__scopePopper);return(0,s.jsx)(u.yk,(0,o.Z)({paddingHorizontal:n.size||a.size||"$2",componentName:"TooltipContent",pointerEvents:"none",ref:r},n))})),m=h.forwardRef(((e,r)=>(0,s.jsx)(u.QH,(0,o.Z)({componentName:"TooltipArrow",ref:r},e)))),v=c.e0,g=(0,a.$)((e=>{const{__scopePopover:r,children:t,restMs:a=500,delay:p}=e,b=(0,i.Z)(e,["__scopePopover","children","restMs","delay"]),m=(0,u.bh)(r),v=h.useRef(null),[g,x]=h.useState(!1),{delay:y,setCurrentId:k}=(0,c.tj)(),_=null!=p?p:y,[j,w]=h.useState(!1),C=e.groupId,P=h.useCallback((r=>{var t;w(r),r&&k(C),null==(t=e.onOpenChange)||t.call(e,r)}),[C,k]),O=h.useCallback((e=>{const r=(0,c.YF)((0,n.Z)((0,o.Z)({},e),{open:j,onOpenChange:P})),{getReferenceProps:t,getFloatingProps:i}=(0,c.NI)([(0,c.XI)(r.context,{delay:_,restMs:a}),(0,c.KK)(r.context),(0,c.qs)(r.context,{role:"tooltip"}),(0,c.bQ)(r.context),(0,c.Qu)(r.context,{id:C})]);return(0,n.Z)((0,o.Z)({},r),{getReferenceProps:t,getFloatingProps:i})}),[C,_,j]),R=h.useCallback((()=>{}),[w]);return(0,s.jsx)(f.A.Provider,{value:O,children:(0,s.jsx)(d.rD,(0,n.Z)((0,o.Z)({size:"$2"},m,b),{children:(0,s.jsx)(u.s2,{scope:r,contentId:(0,l.M)(),triggerRef:v,open:j,onOpenChange:w,onOpenToggle:R,hasCustomAnchor:g,onCustomAnchorAdd:h.useCallback((()=>x(!0)),[]),onCustomAnchorRemove:h.useCallback((()=>x(!1)),[]),modal:!0,children:t})}))})}),{Anchor:u.tW,Arrow:m,Content:b,Trigger:u.xo});g.displayName="Tooltip";const x=e=>{var{label:r,children:t,contentProps:a}=e,l=(0,i.Z)(e,["label","children","contentProps"]);let u;try{u=(0,c.tj)()}catch(f){}const d=(0,s.jsxs)(g,(0,n.Z)((0,o.Z)({},l),{children:[(0,s.jsx)(g.Trigger,{asChild:!0,children:t}),(0,s.jsxs)(g.Content,(0,n.Z)((0,o.Z)({enterStyle:{x:0,y:-10,opacity:0,scale:.9},exitStyle:{x:0,y:-10,opacity:0,scale:.9},x:0,scale:1,y:0,elevation:"$1",opacity:1,animation:["bouncy",{opacity:{overshootClamping:!0}}]},a),{children:[(0,s.jsx)(g.Arrow,{}),(0,s.jsx)(p.n,{size:"$2",children:r})]}))]}));return u?d:(0,s.jsx)(v,{delay:{open:3e3,close:100},children:d})}},47138:function(e,r,t){"use strict";t.d(r,{T:function(){return i}});var o=t(86029),n=t(2784);function i(e){let{prop:r,defaultProp:t,onChange:i,strategy:c="prop-wins"}=e;const a=(0,n.useRef)(r),l=(0,o.W)(i),{0:u,1:d}=(0,n.useState)(null!=r?r:t),f="prop-wins"===c;return(0,n.useEffect)((()=>{a.current=r,d((e=>s(e,r,l)))}),[r]),[u,(0,n.useCallback)((e=>{f&&void 0!==a.current||d((r=>s(r,"function"===typeof e?e(r):e,l)))}),[d,f])]}const s=(e,r,t)=>e===r||void 0===r?e:(t(r),r)},61125:function(e,r,t){"use strict";t.d(r,{p:function(){return n}});var o=t(77650);function n(e){const r=(0,o.iE)().shorthands;if(!r)return e;let t={};for(const o in e)t[r[o]||o]=e[o];return t}},9303:function(e,r,t){"use strict";t.d(r,{C:function(){return i},a:function(){return n}});var o=t(77650);const n=(e,r=0,t=[0])=>i((0,o.lz)().size,e,r,t),i=(e,r,t=0,o=[0])=>{const n=Object.keys(e),i=`$${+(("string"===typeof r?r.replace("$",""):r)||"4")+t}`,s=o[0]??0,c=o[1]??n.length-1,a=Math.min(c,Math.max(s,n.indexOf(i)));return e[n[a]]||e.$4}},37314:function(e,r,t){"use strict";t.d(r,{a:function(){return n}});var o=t(9303);const n=(e,{tokens:r})=>{const t=(0,o.a)(e,0);return{paddingHorizontal:(0,o.C)(r.space,e),height:t,borderRadius:r.radius[e]??r.radius.$4}}},63035:function(e,r,t){"use strict";t.d(r,{Y:function(){return p}});var o=t(2784),n=t(36475),i=t(83715),s=Object.defineProperty,c=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,f=(e,r,t)=>r in e?s(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t;function p(e,r){const t=(0,o.forwardRef)((function(t,s){const p=t,{themeInverse:h,theme:b}=p,m=((e,r)=>{var t={};for(var o in e)u.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&l)for(var o of l(e))r.indexOf(o)<0&&d.call(e,o)&&(t[o]=e[o]);return t})(p,["themeInverse","theme"]),v=o.createElement(e,(g=((e,r)=>{for(var t in r||(r={}))u.call(r,t)&&f(e,t,r[t]);if(l)for(var t of l(r))d.call(r,t)&&f(e,t,r[t]);return e})({},m),c(g,a({ref:s}))));var g;return h?o.createElement(i.f,null,v):b||r?o.createElement(n.Q,{componentName:null==r?void 0:r.componentName,name:b||null},v):v}));return t.displayName=`Themed(${(null==e?void 0:e.displayName)||(null==e?void 0:e.name)||"Anonymous"})`,t}},82735:function(e,r,t){"use strict";t.d(r,{$:function(){return o}});const o=function(e,r){return Object.assign(e,r),e}},11193:function(e,r,t){"use strict";t.d(r,{composeEventHandlers:function(){return n.composeEventHandlers}});var o=t(8135);t.o(o,"composeEventHandlers")&&t.d(r,{composeEventHandlers:function(){return o.composeEventHandlers}});t(90243);var n=t(29688)},8135:function(){},83715:function(e,r,t){"use strict";t.d(r,{f:function(){return a}});var o=t(2784),n=t(54503),i=t(61958),s=t(36475);let c={light:"dark",dark:"light"};const a=e=>{const r=(0,i.Cg)(),t=(0,i.YC)(),[a,l]=(0,o.useState)(null);return(0,n.LI)((()=>{l(c[r]||c[t||""]||null)}),[t,r]),o.createElement(s.Q,{name:a},e.children)}},2655:function(e,r,t){"use strict";t.d(r,{u:function(){return f}});var o=t(2784),n=t(70810),i=t(74479),s=Object.defineProperty,c=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,u=(e,r,t)=>r in e?s(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t;const d=e=>{const r=e,{color:t="black",size:i=24}=r,s=((e,r)=>{var t={};for(var o in e)a.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&c)for(var o of c(e))r.indexOf(o)<0&&l.call(e,o)&&(t[o]=e[o]);return t})(r,["color","size"]);return o.createElement(n.ny,((e,r)=>{for(var t in r||(r={}))a.call(r,t)&&u(e,t,r[t]);if(c)for(var t of c(r))l.call(r,t)&&u(e,t,r[t]);return e})({width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),o.createElement(n.UL,{x:"2",y:"3",width:"20",height:"14",rx:"2",ry:"2",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement(n.x1,{x1:"8",y1:"21",x2:"16",y2:"21",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement(n.x1,{x1:"12",y1:"17",x2:"12",y2:"21",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))};d.displayName="Monitor";const f=(0,o.memo)((0,i.H)(d))},75200:function(e,r,t){"use strict";t.d(r,{J:function(){return f}});var o=t(2784),n=t(70810),i=t(74479),s=Object.defineProperty,c=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,u=(e,r,t)=>r in e?s(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t;const d=e=>{const r=e,{color:t="black",size:i=24}=r,s=((e,r)=>{var t={};for(var o in e)a.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&c)for(var o of c(e))r.indexOf(o)<0&&l.call(e,o)&&(t[o]=e[o]);return t})(r,["color","size"]);return o.createElement(n.ny,((e,r)=>{for(var t in r||(r={}))a.call(r,t)&&u(e,t,r[t]);if(c)for(var t of c(r))l.call(r,t)&&u(e,t,r[t]);return e})({width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),o.createElement(n.y$,{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))};d.displayName="Moon";const f=(0,o.memo)((0,i.H)(d))},91977:function(e,r,t){"use strict";t.d(r,{o:function(){return f}});var o=t(2784),n=t(70810),i=t(74479),s=Object.defineProperty,c=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,u=(e,r,t)=>r in e?s(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t;const d=e=>{const r=e,{color:t="black",size:i=24}=r,s=((e,r)=>{var t={};for(var o in e)a.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&c)for(var o of c(e))r.indexOf(o)<0&&l.call(e,o)&&(t[o]=e[o]);return t})(r,["color","size"]);return o.createElement(n.ny,((e,r)=>{for(var t in r||(r={}))a.call(r,t)&&u(e,t,r[t]);if(c)for(var t of c(r))l.call(r,t)&&u(e,t,r[t]);return e})({width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),o.createElement(n.Cd,{cx:"11",cy:"11",r:"8",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement(n.x1,{x1:"21",y1:"21",x2:"16.65",y2:"16.65",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))};d.displayName="Search";const f=(0,o.memo)((0,i.H)(d))},79733:function(e,r,t){"use strict";t.d(r,{k:function(){return f}});var o=t(2784),n=t(70810),i=t(74479),s=Object.defineProperty,c=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,u=(e,r,t)=>r in e?s(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t;const d=e=>{const r=e,{color:t="black",size:i=24}=r,s=((e,r)=>{var t={};for(var o in e)a.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&c)for(var o of c(e))r.indexOf(o)<0&&l.call(e,o)&&(t[o]=e[o]);return t})(r,["color","size"]);return o.createElement(n.ny,((e,r)=>{for(var t in r||(r={}))a.call(r,t)&&u(e,t,r[t]);if(c)for(var t of c(r))l.call(r,t)&&u(e,t,r[t]);return e})({width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),o.createElement(n.Cd,{cx:"12",cy:"12",r:"5",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement(n.x1,{x1:"12",y1:"1",x2:"12",y2:"3",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement(n.x1,{x1:"12",y1:"21",x2:"12",y2:"23",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement(n.x1,{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement(n.x1,{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement(n.x1,{x1:"1",y1:"12",x2:"3",y2:"12",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement(n.x1,{x1:"21",y1:"12",x2:"23",y2:"12",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement(n.x1,{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement(n.x1,{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))};d.displayName="Sun";const f=(0,o.memo)((0,i.H)(d))},68110:function(e,r,t){"use strict";t.d(r,{V:function(){return f}});var o=t(2784),n=t(70810),i=t(74479),s=Object.defineProperty,c=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,u=(e,r,t)=>r in e?s(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t;const d=e=>{const r=e,{color:t="black",size:i=24}=r,s=((e,r)=>{var t={};for(var o in e)a.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&c)for(var o of c(e))r.indexOf(o)<0&&l.call(e,o)&&(t[o]=e[o]);return t})(r,["color","size"]);return o.createElement(n.ny,((e,r)=>{for(var t in r||(r={}))a.call(r,t)&&u(e,t,r[t]);if(c)for(var t of c(r))l.call(r,t)&&u(e,t,r[t]);return e})({width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),o.createElement(n.y$,{d:"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement(n.x1,{x1:"7",y1:"7",x2:"7.01",y2:"7",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))};d.displayName="Tag";const f=(0,o.memo)((0,i.H)(d))},74479:function(e,r,t){"use strict";t.d(r,{H:function(){return f}});var o=t(61958),n=t(2784),i=Object.defineProperty,s=Object.defineProperties,c=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(e,r,t)=>r in e?i(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t;function f(e){return r=>{const t=(0,o.Fg)(),i=r.color||(r.disableTheme?null:t.color)||"#000";return n.createElement(e,(f=((e,r)=>{for(var t in r||(r={}))l.call(r,t)&&d(e,t,r[t]);if(a)for(var t of a(r))u.call(r,t)&&d(e,t,r[t]);return e})({},r),s(f,c({color:i}))));var f}}},99021:function(){"undefined"===typeof globalThis.__DEV__&&(globalThis.__DEV__=!1)}}]);