(()=>{"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function s(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function r(t){return 0===Object.keys(t).length}new Set;let l,i=!1;function a(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function d(t){l=t}new Set;const f=[],$=[],h=[],p=[],m=Promise.resolve();let g=!1;function y(t){h.push(t)}let b=!1;const _=new Set;function k(){if(!b){b=!0;do{for(let t=0;t<f.length;t+=1){const e=f[t];d(e),x(e.$$)}for(d(null),f.length=0;$.length;)$.pop()();for(let t=0;t<h.length;t+=1){const e=h[t];_.has(e)||(_.add(e),e())}h.length=0}while(f.length);for(;p.length;)p.pop()();g=!1,b=!1,_.clear()}}function x(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(y)}}const w=new Set;let E;function v(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function C(c,r,a,$,h,p,b,_=[-1]){const x=l;d(c);const E=c.$$={fragment:null,ctx:null,props:p,update:t,not_equal:h,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(x?x.$$.context:r.context||[]),callbacks:n(),dirty:_,skip_bound:!1,root:r.target||x.$$.root};b&&b(E.root);let v=!1;if(E.ctx=a?a(c,r.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return E.ctx&&h(E.ctx[t],E.ctx[t]=o)&&(!E.skip_bound&&E.bound[t]&&E.bound[t](o),v&&function(t,e){-1===t.$$.dirty[0]&&(f.push(t),g||(g=!0,m.then(k)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(c,t)),e})):[],E.update(),v=!0,o(E.before_update),E.fragment=!!$&&$(E.ctx),r.target){if(r.hydrate){i=!0;const t=(T=r.target,Array.from(T.childNodes));E.fragment&&E.fragment.l(t),t.forEach(u)}else E.fragment&&E.fragment.c();r.intro&&((C=c.$$.fragment)&&C.i&&(w.delete(C),C.i(S))),function(t,n,c,r){const{fragment:l,on_mount:i,on_destroy:a,after_update:u}=t.$$;l&&l.m(n,c),r||y((()=>{const n=i.map(e).filter(s);a?a.push(...n):o(n),t.$$.on_mount=[]})),u.forEach(y)}(c,r.target,r.anchor,r.customElement),i=!1,k()}var C,S,T;d(x)}"undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global,new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]),"function"==typeof HTMLElement&&(E=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(e).filter(s);for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}disconnectedCallback(){o(this.$$.on_disconnect)}$destroy(){v(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){this.$$set&&!r(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});function S(e){let n,o;return{c(){var t,e;e="import './global.css';\n\n\n\n",n=document.createTextNode(e),t="h1",o=document.createElement(t),o.textContent="fuck you"},m(t,e){a(t,n,e),a(t,o,e)},p:t,i:t,o:t,d(t){t&&u(n),t&&u(o)}}}function T(t){return console.log("ASDF"),[]}new class extends class{$destroy(){v(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){this.$$set&&!r(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),C(this,t,T,S,c,{})}}({target:document.body,hydrate:!0})})();