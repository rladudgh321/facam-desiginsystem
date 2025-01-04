import{r as y}from"./index-DTjmqu0B.js";var i={exports:{}},t={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p;function j(){if(p)return t;p=1;var x=y(),c=Symbol.for("react.element"),R=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,d=x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v={key:!0,ref:!0,__self:!0,__source:!0};function _(n,r,a){var e,o={},s=null,f=null;a!==void 0&&(s=""+a),r.key!==void 0&&(s=""+r.key),r.ref!==void 0&&(f=r.ref);for(e in r)l.call(r,e)&&!v.hasOwnProperty(e)&&(o[e]=r[e]);if(n&&n.defaultProps)for(e in r=n.defaultProps,r)o[e]===void 0&&(o[e]=r[e]);return{$$typeof:c,type:n,key:s,ref:f,props:o,_owner:d.current}}return t.Fragment=R,t.jsx=_,t.jsxs=_,t}var m;function O(){return m||(m=1,i.exports=j()),i.exports}var u=O();const q=u.Fragment,h=u.jsx,k=u.jsxs;export{q as F,k as a,h as j};
