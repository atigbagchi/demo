/**
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojs/ojeventtarget","ojs/ojdataprovider"],function(a){var g=function(){function c(a,c){this.jq=a;this.options=c;this.bj="key";this.Nc="keys";this.ec="data";this.eQ="sort";this.qf="sortCriteria";this.Af="metadata";this.HP="from";this.Jh="offset";this.a0="refresh";this.HFa="mutate";this.oi="size";this.$m="fetchParameters";this.Nj="value";this.Zm="done";this.ew="dataMapping";this.tFa="mapFields";this.fHa=this.uFa="mapSortCriteria";this.jn="results";
this.aI="containsParameters";this.iEa=25;this.Fea="containsKeys";this.afa="fetchByKeys";this.IEa="fetchByOffset";this.bfa="fetchFirst";this.fea="addEventListener";this.Mv=function(){return function(a,b){this.mc=a;this.mn=b;this[Symbol.asyncIterator]=function(){return this.mn}}}();this.Nv=function(){function a(b,c,d){this.mc=b;this.kL=c;this.nL=d}a.prototype.next=function(){var a=this.kL(this.nL);return Promise.resolve(a)};return a}();this.Ov=function(){return function(a,b,c){this.mc=a;this.value=
b;this.done=c;this[a.Nj]=b;this[a.Zm]=c}}();this.Sv=function(){return function(a,b,c,d){this.mc=a;this.fetchParameters=b;this.data=c;this.metadata=d;this[a.$m]=b;this[a.ec]=c;this[a.Af]=d}}();this.nt=function(){return function(a,b,c){this.mc=a;this.metadata=b;this.data=c;this[a.Af]=b;this[a.ec]=c}}();this.Mk=function(){return function(a,b){this.mc=a;this.key=b;this[a.bj]=b}}();this.JC=function(){return function(a,b,c){this.mc=a;this.size=b;this.sortCriteria=c;this[a.oi]=b;this[a.qf]=c}}();this.Hca=
function(){return function(a,b,c,d){this.mc=a;this.offset=b;this.size=c;this.sortCriteria=d;this[a.oi]=c;this[a.qf]=d;this[a.Jh]=b}}();this.IC=function(){return function(a,b,c){this.mc=a;this.fetchParameters=b;this.results=c;this[a.$m]=b;this[a.jn]=c}}();this.rH=function(){return function(a,b,c){this.mc=a;this.containsParameters=b;this.results=c;this[a.aI]=b;this[a.jn]=c}}();this[this.HP]=null==this.options?null:this.options[this.HP];this[this.Jh]=null==this.options?0:0<this.options[this.Jh]?this.options[this.Jh]:
0;this[this.qf]=null==this.options?null:this.options[this.qf];this[this.ew]=null==this.options?null:this.options[this.ew];this.NHa(a);this.Qj={}}c.prototype.containsKeys=function(a){var c=this;return this.jq[c.Fea]?this.jq[c.Fea](a):this.fetchByKeys(a).then(function(e){var f=new Set;a[c.Nc].forEach(function(a){null!=e[c.jn].get(a)&&f.add(a)});return Promise.resolve(new c.rH(c,a,f))})};c.prototype.fetchByKeys=function(a){var c=this;if(this.jq[c.afa])return this.jq[c.afa](a).then(function(e){e=e[c.jn];
var f=new Map;e.forEach(function(a,b){var e=c.Q3([a]);f.set(b,e[0])});return new c.IC(c,a,f)});var e={};e[this.oi]=this.iEa;var f=new Map,e=this.jq[c.bfa](e)[Symbol.asyncIterator]();return this.Oka(a,e,f).then(function(e){var f=new Map;e.forEach(function(a,b){var e=c.Q3([a]);f.set(b,e[0])});return new c.IC(c,a,f)})};c.prototype.fetchFirst=function(b){this.Qj[this.ec]=[];this.Qj[this.Nc]=[];this.oa=0;var c=null!=b?b[this.oi]:null,e=null!=b?b[this.qf]:null;null==e&&(e=this[this.qf]);var f=this.OOa(e),
g=this;if(null==g[this.HP]&&0<g[this.Jh]&&a.Pq.J4a(g.jq)){var k=g[this.Jh];return new this.Mv(this,new this.Nv(this,function(){var a=new g.Hca(g,k,c,f);return g.jq[g.IEa](a).then(function(a){var b=a.results,e=b.map(function(a){return a[g.ec]});b.map(function(a){return a[g.Af]});b=b.map(function(a){return a[g.Af][g.bj]});k+=b.length;e=g.pS(b,e);g.VQ(e[g.ec],e[g.Nc]);g.Uz=a[g.Zm];a=a[g.$m];a=g.vna(null!=a?a[g.qf]:null);a=new g.Hca(g,g[g.Jh],c,a);return Promise.resolve(new g.Ov(g,new g.Sv(g,a,e[g.ec],
e[g.Af]),g.Uz))})},b))}e=new this.JC(this,c,f);this.k1=this.jq[g.bfa](e)[Symbol.asyncIterator]();return new this.Mv(this,new this.Nv(this,function(){return g.k1.next().then(function(a){var c=a[g.Nj][g.ec],d=a[g.Nj][g.Af],e=d.map(function(a){return a[g.bj]});c.map(function(a,b){return new g.nt(g,d[b],c[b])});e=g.pS(e,c);g.VQ(e[g.ec],e[g.Nc]);g.Uz=a[g.Zm];e=null!=b?b[g.oi]:null;a=a[g.Nj][g.$m];a=g.vna(null!=a?a[g.qf]:null);var f=new g.JC(g,e,a);return g.Qka(g[g.HP]).then(function(){return g.Rka(f,g[g.Jh]+
g.oa,c.length)})})},b))};c.prototype.getCapability=function(a){return this.jq.getCapability(a)};c.prototype.getTotalSize=function(){return this.jq.getTotalSize()};c.prototype.Yd=function(){return this.jq.Yd()};c.prototype.Oka=function(a,c,e){var f=this;return c.next().then(function(g){g=g[f.Nj];var k=g[f.ec],l=g[f.Af],m=l.map(function(a){return a[f.bj]}),n=!0;a[f.Nc].forEach(function(a){e.has(a)||m.map(function(b,c){b==a&&e.set(b,new f.nt(f,l[c],k[c]))});e.has(a)||(n=!1)});return n?e:f.Oka(a,c,e)})};
c.prototype.Qka=function(a){var c=this;if(null!=a){var e=this.Qj[this.Nc].filter(function(c){if(a==c)return!0});if(0<e.length)e=this.Qj[this.Nc].indexOf(e[0]),this.Qj[this.Nc]=this.Qj[this.Nc].slice(e,this.Qj[this.Nc].length),this.Qj[this.ec]=this.Qj[this.ec].slice(e,this.Qj[this.ec].length);else if(c.Uz)this.Qj[this.ec]=[],this.Qj[this.Nc]=[];else return c.k1.next().then(function(a){var b=a[c.Nj][c.ec],e=a[c.Nj][c.Af].map(function(a){return a[c.bj]}),b=c.pS(e,b);c.VQ(b[c.ec],b[c.Nc]);c.Uz=a[c.Zm];
return c.Qka(b[c.Nc])})}return Promise.resolve(null)};c.prototype.Rka=function(a,c,e){var f=this;e=null!=a?0<a[this.oi]?a[this.oi]:e:e;c=0<c?c:0;var g=this.Qj[this.Nc].slice(c,c+e),k=this.Qj[this.ec].slice(c,c+e),g=g.map(function(a){return new f.Mk(f,a)});if(k.length<e)return f.Uz?(f.oa+=k.length,Promise.resolve(new f.Ov(f,new f.Sv(f,a,k,g),!0))):f.k1.next().then(function(a){var b=a[f.Nj][f.ec],e=a[f.Nj][f.Af].map(function(a){return a[f.bj]}),e=f.pS(e,b);f.VQ(e[f.ec],e[f.Nc]);f.Uz=a[f.Zm];return f.Rka(a[f.Nj][f.$m],
c,b.length)});f.oa+=k.length;return Promise.resolve(new f.Ov(f,new f.Sv(f,a,k,g),f.Uz))};c.prototype.VQ=function(a,c){var e=this;a.map(function(a){e.Qj[e.ec].push(a)});c.map(function(a){e.Qj[e.Nc].push(a)})};c.prototype.Q3=function(a){var c=this;if(null!=this[this.ew]){var e=this[this.ew][this.tFa];if(null!=e&&null!=a&&0<a.length){var f=[];return f=a.map(function(a){return e.bind(c)(a)})}}return a};c.prototype.pS=function(a,c){var e=this,f=c.map(function(f,g){return new e.nt(e,new e.Mk(e,a[g]),c[g])}),
g=this.Q3(f),f=g.map(function(a){return a[e.ec]}),k=g.map(function(a){return a[e.Af][e.bj]}),g=g.map(function(a){return a[e.Af]}),l={};l[this.ec]=f;l[this.Nc]=k;l[this.Af]=g;return l};c.prototype.OOa=function(a){if(null!=this[this.ew]){var c=this[this.ew][this.uFa];if(null!=c&&null!=a&&0<a.length)return c(a)}return a};c.prototype.vna=function(a){if(null!=this[this.ew]){var c=this[this.ew][this.fHa];if(null!=c&&null!=a&&0<a.length)return c(a)}return a};c.prototype.NHa=function(a){var c=this;a[c.fea](this.a0,
function(a){c.dispatchEvent(a)});a[c.fea](this.HFa,function(a){c.dispatchEvent(a)})};return c}();a.ListDataProviderView=g;a.RC=g;a.UY.Lx(g);a.FetchByOffsetMixin.Lx(g);a.f.j("ListDataProviderView.prototype.fetchFirst",{fetchFirst:g.prototype.fetchFirst});a.f.j("ListDataProviderView.prototype.getCapability",{getCapability:g.prototype.getCapability});a.f.j("ListDataProviderView.prototype.fetchByKeys",{fetchByKeys:g.prototype.fetchByKeys});a.f.j("ListDataProviderView.prototype.containsKeys",{containsKeys:g.prototype.containsKeys});
a.f.j("ListDataProviderView.prototype.fetchByOffset",{fetchByOffset:g.prototype.fetchByOffset});a.f.j("ListDataProviderView.prototype.getTotalSize",{getTotalSize:g.prototype.getTotalSize});a.f.j("ListDataProviderView.prototype.isEmpty",{Yd:g.prototype.Yd})});