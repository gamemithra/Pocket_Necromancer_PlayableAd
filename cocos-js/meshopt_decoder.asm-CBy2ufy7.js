System.register(["./_virtual_cc-ClAtnu0-.js"],(function(e){"use strict";var r;return{setters:[function(e){r=e.g}],execute:function(){function t(e,r){return r.forEach((function(r){r&&"string"!=typeof r&&!Array.isArray(r)&&Object.keys(r).forEach((function(t){if("default"!==t&&!(t in e)){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})}}))})),Object.freeze(e)}var n={exports:{}};!function(e){var r=function(){var e={},r=Promise.resolve().then((function(){e.exports=t(),e.exports.__wasm_call_ctors()}));function n(e){for(var r=new Uint8Array(e.length),t=0;t<e.length;++t){var n=e.charCodeAt(t);r[t]=n>96?n-97:n>64?n-39:n+4}var o=0;for(t=0;t<e.length;++t)r[o++]=r[t]<60?wasmpack[r[t]]:64*(r[t]-60)+r[++t];return r.buffer.slice(0,o)}function o(r,t,n,o,f,a){var i=e.exports.sbrk,c=n+3&-4,s=i(c*o),u=i(f.length),d=new Uint8Array(e.exports.memory.buffer);d.set(f,u);var b=r(s,n,o,u,f.length);if(0==b&&a&&a(s,c,o),t.set(d.subarray(s,s+n*o)),i(s-i(0)),0!=b)throw new Error("Malformed buffer data: "+b)}var f={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},a={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},i=[],c=0;function s(e){var r={object:new Worker(e),pending:0,requests:{}};return r.object.onmessage=function(e){var t=e.data;r.pending-=t.count,r.requests[t.id][t.action](t.value),delete r.requests[t.id]},r}function u(e){for(var r="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(n(wasm))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+o.toString()+b.toString(),t=new Blob([r],{type:"text/javascript"}),f=URL.createObjectURL(t),a=0;a<e;++a)i[a]=s(f);URL.revokeObjectURL(f)}function d(e,r,t,n,o){for(var f=i[0],a=1;a<i.length;++a)i[a].pending<f.pending&&(f=i[a]);return new Promise((function(a,i){var s=new Uint8Array(t),u=c++;f.pending+=e,f.requests[u]={resolve:a,reject:i},f.object.postMessage({id:u,count:e,size:r,source:s,mode:n,filter:o},[s.buffer])}))}function b(t){r.then((function(){var r=t.data;try{var n=new Uint8Array(r.count*r.size);o(e.exports[r.mode],n,r.count,r.size,r.source,e.exports[r.filter]),self.postMessage({id:r.id,count:r.count,action:"resolve",value:n},[n.buffer])}catch(e){self.postMessage({id:r.id,count:r.count,action:"reject",value:e})}}))}return{ready:r,supported:!0,useWorkers:function(e){u(e)},decodeVertexBuffer:function(r,t,n,a,i){o(e.exports.meshopt_decodeVertexBuffer,r,t,n,a,e.exports[f[i]])},decodeIndexBuffer:function(r,t,n,f){o(e.exports.meshopt_decodeIndexBuffer,r,t,n,f)},decodeIndexSequence:function(r,t,n,f){o(e.exports.meshopt_decodeIndexSequence,r,t,n,f)},decodeGltfBuffer:function(r,t,n,i,c,s){o(e.exports[a[c]],r,t,n,i,e.exports[f[s]])},decodeGltfBufferAsync:function(t,n,c,s,u){return i.length>0?d(t,n,c,a[s],f[u]):r.then((function(){var r=new Uint8Array(t*n);return o(e.exports[a[s]],r,t,n,c,e.exports[f[u]]),r}))}}}();function t(){for(var e=new Uint8Array(123),r=25;r>=0;--r)e[48+r]=52+r,e[65+r]=r,e[97+r]=26+r;function t(r,t,n){for(var o,f,a=0,i=t,c=n.length,s=t+(3*c>>2)-("="==n[c-2])-("="==n[c-1]);a<c;a+=4)o=e[n.charCodeAt(a+1)],f=e[n.charCodeAt(a+2)],r[i++]=e[n.charCodeAt(a)]<<2|o>>4,i<s&&(r[i++]=o<<4|f>>2),i<s&&(r[i++]=f<<6|e[n.charCodeAt(a+3)])}return e[43]=62,e[47]=63,function(){var e=new ArrayBuffer(65536),r=new Int8Array(e),n=new Int16Array(e),o=new Int32Array(e),f=new Uint8Array(e),a=Math.imul,i=25616;function c(e,t,n){n|=0;var a=0;if(3&((t|=0)|(e|=0)))a=e;else{if(n>>>0>=16)for(a=e;o[a>>2]=0|o[t>>2],o[a+4>>2]=0|o[t+4>>2],o[a+8>>2]=0|o[t+8>>2],o[a+12>>2]=0|o[t+12>>2],t=t+16|0,a=a+16|0,(n=n+-16|0)>>>0>15;);else a=e;if(!(n>>>0<4))for(;o[a>>2]=0|o[t>>2],t=t+4|0,a=a+4|0,(n=n+-4|0)>>>0>3;);}if(n)for(;r[0|a]=0|f[0|t],a=a+1|0,t=t+1|0,n=n+-1|0;);return 0|e}function s(e,t,n){t|=0,n|=0;var f=0,i=0;if(3&(e|=0))f=e;else{if(i=a(255&t,16843009),n>>>0>=16)for(f=e;o[f>>2]=i,o[f+12>>2]=i,o[f+8>>2]=i,o[f+4>>2]=i,f=f+16|0,(n=n+-16|0)>>>0>15;);else f=e;if(!(n>>>0<4))for(;o[f>>2]=i,f=f+4|0,(n=n+-4|0)>>>0>3;);}if(n)for(;r[0|f]=t,f=f+1|0,n=n+-1|0;);return 0|e}function u(){return e.byteLength/65536|0}function d(t){t|=0;var i=0|u(),c=i+t|0;if(i<c&&c<65536){var s=new ArrayBuffer(a(c,65536));new Int8Array(s).set(r),r=new Int8Array(s),n=new Int16Array(s),o=new Int32Array(s),f=new Uint8Array(s),e=s}return i}return t(f,1024,"EGQAAA=="),{memory:Object.create(Object.prototype,{grow:{value:d},buffer:{get:function(){return e}}}),__wasm_call_ctors:function(){},meshopt_decodeVertexBuffer:function(e,t,n,s,u){e|=0,t|=0,s|=0;var d,b=0,l=0,p=0,k=0,v=0,y=0,A=0,h=0,w=0,m=0,x=0,g=0,_=0,I=0,U=0,j=0,B=0,O=0,E=0,S=0,L=0,N=0,R=0,q=0,C=0,T=0,P=0,M=0,z=0,G=0,V=0,D=0,F=0,Q=0,W=0,H=0,X=0,J=0,K=0,Y=0,Z=0,$=0,ee=0,re=0,te=0,ne=0,oe=0,fe=0,ae=0,ie=0,ce=0,se=0,ue=0,de=0,be=0,le=0,pe=0,ke=0;i=d=i-8704|0,k=-2;e:if(!((1+(n|=0)|0)>>>0>(u|=0)>>>0)&&(k=-1,160==(0|f[0|s]))){y=0|c(0|d,(_=s+u|0)-n|0,0|n),u=8192/(n>>>0)|0,k=s+1|0;r:if(n){L=(u&=16368)>>>0<256?u:256,j=0;t:for(;;){if(j>>>0>=t>>>0)break r;I=(3+((u=(x=(j+L|0)>>>0<t>>>0?L:t-j|0)+15|0)>>>4|0)|0)>>>2|0;n:{o:{f:{if(m=-16&u){B=0,U=1,S=y+256|0,w=k;a:for(;;){if((_-w|0)>>>0<I>>>0)break o;if(!((_-(k=w+I|0)|0)>>>0<24)){u=16,A=0;i:for(;;){s=u,u=(l=u+-16|0)+(y+8448|0)|0;c:{s:switch((0|f[w+(l>>>6|0)|0])>>>(6&A)&3){default:v=u,h=0,o[u>>2]=0,o[u+4>>2]=h,h=0,o[(v=u+8|0)>>2]=0,o[v+4>>2]=h;break c;case 1:N=b=(l=0|f[0|k])>>>6|0,b=3==(0|b),r[0|u]=(pe=0|f[k+4|0],ke=N,b?pe:ke),b=(k+4|0)+b|0,R=p=l>>>4&3,p=3==(0|p),r[(u=(y+8448|0)+s|0)-15|0]=(pe=0|f[0|b],ke=R,p?pe:ke),b=b+p|0,q=p=l>>>2&3,p=3==(0|p),r[u+-14|0]=(pe=0|f[0|b],ke=q,p?pe:ke),b=b+p|0,C=l&=3,l=3==(0|l),r[u+-13|0]=(pe=0|f[0|b],ke=C,l?pe:ke),b=b+l|0,T=p=(l=0|f[k+1|0])>>>6|0,p=3==(0|p),r[u+-12|0]=(pe=0|f[0|b],ke=T,p?pe:ke),b=b+p|0,P=p=l>>>4&3,p=3==(0|p),r[u+-11|0]=(pe=0|f[0|b],ke=P,p?pe:ke),b=b+p|0,M=p=l>>>2&3,p=3==(0|p),r[u+-10|0]=(pe=0|f[0|b],ke=M,p?pe:ke),b=b+p|0,z=l&=3,l=3==(0|l),r[u+-9|0]=(pe=0|f[0|b],ke=z,l?pe:ke),b=b+l|0,G=p=(l=0|f[k+2|0])>>>6|0,p=3==(0|p),r[u+-8|0]=(pe=0|f[0|b],ke=G,p?pe:ke),b=b+p|0,V=p=l>>>4&3,p=3==(0|p),r[u+-7|0]=(pe=0|f[0|b],ke=V,p?pe:ke),b=b+p|0,D=p=l>>>2&3,p=3==(0|p),r[u+-6|0]=(pe=0|f[0|b],ke=D,p?pe:ke),b=b+p|0,F=l&=3,l=3==(0|l),r[u+-5|0]=(pe=0|f[0|b],ke=F,l?pe:ke),l=b+l|0,Q=b=(k=0|f[k+3|0])>>>6|0,b=3==(0|b),r[u+-4|0]=(pe=0|f[0|l],ke=Q,b?pe:ke),l=l+b|0,W=b=k>>>4&3,b=3==(0|b),r[u+-3|0]=(pe=0|f[0|l],ke=W,b?pe:ke),l=l+b|0,H=b=k>>>2&3,b=3==(0|b),r[u+-2|0]=(pe=0|f[0|l],ke=H,b?pe:ke),X=u+-1|0,u=l+b|0,J=k&=3,k=3==(0|k),r[0|X]=(pe=0|f[0|u],ke=J,k?pe:ke),k=u+k|0;break c;case 2:K=b=(l=0|f[0|k])>>>4|0,b=15==(0|b),r[0|u]=(pe=0|f[k+8|0],ke=K,b?pe:ke),b=(k+8|0)+b|0,Y=l&=15,l=15==(0|l),r[(u=(y+8448|0)+s|0)-15|0]=(pe=0|f[0|b],ke=Y,l?pe:ke),l=b+l|0,Z=p=(b=0|f[k+1|0])>>>4|0,p=15==(0|p),r[u+-14|0]=(pe=0|f[0|l],ke=Z,p?pe:ke),l=l+p|0,$=b&=15,b=15==(0|b),r[u+-13|0]=(pe=0|f[0|l],ke=$,b?pe:ke),l=l+b|0,ee=p=(b=0|f[k+2|0])>>>4|0,p=15==(0|p),r[u+-12|0]=(pe=0|f[0|l],ke=ee,p?pe:ke),l=l+p|0,re=b&=15,b=15==(0|b),r[u+-11|0]=(pe=0|f[0|l],ke=re,b?pe:ke),l=l+b|0,te=p=(b=0|f[k+3|0])>>>4|0,p=15==(0|p),r[u+-10|0]=(pe=0|f[0|l],ke=te,p?pe:ke),l=l+p|0,ne=b&=15,b=15==(0|b),r[u+-9|0]=(pe=0|f[0|l],ke=ne,b?pe:ke),l=l+b|0,oe=p=(b=0|f[k+4|0])>>>4|0,p=15==(0|p),r[u+-8|0]=(pe=0|f[0|l],ke=oe,p?pe:ke),l=l+p|0,fe=b&=15,b=15==(0|b),r[u+-7|0]=(pe=0|f[0|l],ke=fe,b?pe:ke),l=l+b|0,ae=p=(b=0|f[k+5|0])>>>4|0,p=15==(0|p),r[u+-6|0]=(pe=0|f[0|l],ke=ae,p?pe:ke),l=l+p|0,ie=b&=15,b=15==(0|b),r[u+-5|0]=(pe=0|f[0|l],ke=ie,b?pe:ke),l=l+b|0,ce=p=(b=0|f[k+6|0])>>>4|0,p=15==(0|p),r[u+-4|0]=(pe=0|f[0|l],ke=ce,p?pe:ke),l=l+p|0,se=b&=15,b=15==(0|b),r[u+-3|0]=(pe=0|f[0|l],ke=se,b?pe:ke),l=l+b|0,ue=b=(k=0|f[k+7|0])>>>4|0,b=15==(0|b),r[u+-2|0]=(pe=0|f[0|l],ke=ue,b?pe:ke),de=u+-1|0,u=l+b|0,be=k&=15,k=15==(0|k),r[0|de]=(pe=0|f[0|u],ke=be,k?pe:ke),k=u+k|0;break c;case 3:}h=f[0|k]|f[k+1|0]<<8|f[k+2|0]<<16|f[k+3|0]<<24,v=f[k+4|0]|f[k+5|0]<<8|f[k+6|0]<<16|f[k+7|0]<<24,le=h,h=u,O=le,r[0|u]=O,r[u+1|0]=O>>>8|0,r[u+2|0]=O>>>16|0,r[u+3|0]=O>>>24|0,r[u+4|0]=v,r[u+5|0]=v>>>8|0,r[u+6|0]=v>>>16|0,r[u+7|0]=v>>>24|0,v=f[0|(g=k+8|0)]|f[g+1|0]<<8|f[g+2|0]<<16|f[g+3|0]<<24,h=f[g+4|0]|f[g+5|0]<<8|f[g+6|0]<<16|f[g+7|0]<<24,E=v,r[0|(v=u+8|0)]=E,r[v+1|0]=E>>>8|0,r[v+2|0]=E>>>16|0,r[v+3|0]=E>>>24|0,r[v+4|0]=h,r[v+5|0]=h>>>8|0,r[v+6|0]=h>>>16|0,r[v+7|0]=h>>>24|0,k=k+16|0}if(s>>>0>=m>>>0||(A=A+2|0,u=s+16|0,!((_-k|0)>>>0>23)))break i}if(s>>>0<m>>>0)break f;if(!k)break f;if(x)for(A=0|f[y+B|0],u=y+8448|0,s=S,l=x;A=((w=0|f[0|u])>>>1^0-(1&w))+A|0,r[0|s]=A,s=s+n|0,u=u+1|0,l=l+-1|0;);if(S=S+1|0,U=(B=B+1|0)>>>0<n>>>0,w=k,(0|B)!=(0|n))continue a;break n}break a}if(k=0,1&U)break o;break n}if(p=k+a(I,n)|0,x){m=0,U=1,b=y+256|0;a:for(;;){if((_-k|0)>>>0<I>>>0)break o;if(!k)break f;for(k=k+I|0,A=0|f[y+m|0],u=y+8448|0,s=b,l=x;A=((w=0|f[0|u])>>>1^0-(1&w))+A|0,r[0|s]=A,s=s+n|0,u=u+1|0,l=l+-1|0;);if(b=b+1|0,U=(m=m+1|0)>>>0<n>>>0,(0|m)==(0|n))break a}k=p;break n}u=0,U=1;a:for(;;){if((_-k|0)>>>0<I>>>0)break o;if(!k)break f;if(k=k+I|0,U=(u=u+1|0)>>>0<n>>>0,(0|n)==(0|u))break a}k=p;break n}if(k=0,!(1&U))break n}k=-2;break e}if(c(e+a(j,n)|0,y+256|0,0|a(x,n)),c(0|y,(y+256|0)+a(x+-1|0,n)|0,0|n),j=x+j|0,!k)break t}k=-2;break e}k=(_-k|0)==(0|(n>>>0>32?n:32))?0:-3}return i=d+8704|0,0|k},meshopt_decodeIndexBuffer:function(e,t,a,c,u){e|=0,a|=0,c|=0;var d,b=0,l=0,p=0,k=0,v=0,y=0,A=0,h=0,w=0,m=0,x=0,g=0,_=0,I=0,U=0,j=0,B=0,O=0,E=0,S=0;i=d=i-192|0,k=-2;e:if(!((17+(x=((t|=0)>>>0)/3|0)|0)>>>0>(u|=0)>>>0||(k=-1,224!=(240&(I=0|f[0|c]))||(b=15&I)>>>0>1))){if(s(d+64|0,255,128),m=-1,o[(h=d+56|0)>>2]=-1,o[h+4>>2]=m,m=-1,o[(h=d+48|0)>>2]=-1,o[h+4>>2]=m,m=-1,o[(h=d+40|0)>>2]=-1,o[h+4>>2]=m,m=-1,o[(h=d+32|0)>>2]=-1,o[h+4>>2]=m,m=-1,o[(h=d+24|0)>>2]=-1,o[h+4>>2]=m,m=-1,o[(h=d+16|0)>>2]=-1,o[h+4>>2]=m,h=d,m=-1,o[d+8>>2]=-1,o[d+12>>2]=m,h=d,m=-1,o[d>>2]=-1,o[d+4>>2]=m,j=(c+u|0)-16|0,k=(I=c+1|0)+x|0,t){O=1==(0|b)?13:15,g=0,w=0,x=0,c=0,u=0;r:for(;;){if(!(k>>>0<=j>>>0)){k=-2;break e}t:if((b=0|f[0|I])>>>0>239)if(b>>>0>253){if(A=(_=(v=0|f[0|k])?g:0)+(b=254==(0|b))|0,U=15&v,B=v>>>4|0,v>>>0>15?(y=A,A=0|o[d+((c-B&15)<<2)>>2]):y=A+1|0,U?(g=y,y=0|o[d+((c-v&15)<<2)>>2]):g=y+1|0,b)b=k+1|0;else{b=k+2|0,l=255&(p=0|r[k+1|0]);n:if(!((0|p)>-1)){_=k+6|0,l&=127,k=7;o:{f:for(;;){if(l|=(127&(p=0|r[0|b]))<<k,(0|p)>-1)break o;if(b=b+1|0,35==(0|(k=k+7|0)))break f}b=_;break n}b=b+1|0}_=w=(l>>>1^0-(1&l))+w|0}if(15==(0|B)){l=b+1|0,p=255&(k=0|r[0|b]);n:if(!((0|k)>-1)){A=b+5|0,p&=127,k=7;o:{f:for(;;){if(p|=(127&(b=0|r[0|l]))<<k,(0|b)>-1)break o;if(l=l+1|0,35==(0|(k=k+7|0)))break f}l=A;break n}l=l+1|0}A=w=(p>>>1^0-(1&p))+w|0}else l=b;if(15==(0|U)){k=l+1|0,p=255&(b=0|r[0|l]);n:if(!((0|b)>-1)){y=l+5|0,p&=127,b=7;o:{f:for(;;){if(p|=(127&(l=0|r[0|k]))<<b,(0|l)>-1)break o;if(k=k+1|0,35==(0|(b=b+7|0)))break f}k=y;break n}k=k+1|0}y=w=(p>>>1^0-(1&p))+w|0}else k=l;2!=(0|a)?(o[(b=e+(x<<2)|0)>>2]=_,o[b+4>>2]=A,o[b+8>>2]=y):(n[(b=e+(x<<1)|0)>>1]=_,n[b+2>>1]=A,n[b+4>>1]=y),o[(b=(d+64|0)+(u<<3)|0)>>2]=A,o[b+4>>2]=_,o[d+(c<<2)>>2]=_,o[(b=(d+64|0)+((u+1&15)<<3)|0)>>2]=y,o[b+4>>2]=A,o[d+((15&(c=c+1|0))<<2)>>2]=A,o[(b=(d+64|0)+((u+2&15)<<3)|0)>>2]=_,o[b+4>>2]=y,o[d+((15&(c=c+(v>>>0<16|15==(0|B))|0))<<2)>>2]=y,c=c+(!U|15==(0|U))|0,u=u+3|0}else y=g+1|0,p=(l=0|f[j+(15&b)|0])>>>0<16,E=y,S=0|o[d+((c-(l>>>4|0)&15)<<2)>>2],b=p?E:S,A=y+p|0,y=15&l,E=0|o[d+((c-l&15)<<2)>>2],S=A,l=y?E:S,y=!y,2!=(0|a)?(o[(v=e+(x<<2)|0)>>2]=g,o[v+4>>2]=b,o[v+8>>2]=l):(n[(v=e+(x<<1)|0)>>1]=g,n[v+2>>1]=b,n[v+4>>1]=l),o[d+(c<<2)>>2]=g,o[(v=(d+64|0)+(u<<3)|0)>>2]=b,o[v+4>>2]=g,o[d+((15&(c=c+1|0))<<2)>>2]=b,o[(v=(d+64|0)+((u+1&15)<<3)|0)>>2]=l,o[v+4>>2]=b,o[d+((c=c+p&15)<<2)>>2]=l,o[(b=(d+64|0)+((u=u+2&15)<<3)|0)>>2]=g,o[b+4>>2]=l,u=u+1|0,c=c+y|0,g=A+y|0;else{if(A=0|o[4+(l=(d+64|0)+((u+((p=0|~b)>>>4|0)&15)<<3)|0)>>2],v=0|o[l>>2],!((b&=15)>>>0>=O>>>0)){E=0|o[d+((c+p&15)<<2)>>2],S=g,l=b?E:S,b=!b,2!=(0|a)?(o[(p=e+(x<<2)|0)>>2]=v,o[p+4>>2]=A,o[p+8>>2]=l):(n[(p=e+(x<<1)|0)>>1]=v,n[p+2>>1]=A,n[p+4>>1]=l),g=g+b|0,o[(p=(d+64|0)+(u<<3)|0)>>2]=l,o[p+4>>2]=A,o[d+(c<<2)>>2]=l,o[(p=(d+64|0)+((u=u+1&15)<<3)|0)>>2]=v,o[p+4>>2]=l,c=c+b|0,u=u+1|0;break t}if(15==(0|b)){b=k+1|0,p=255&(l=0|r[0|k]);n:if((0|l)<=-1){k=k+5|0,p&=127,l=7;o:for(;p|=(127&(y=0|r[0|b]))<<l,!((0|y)>-1);)if(b=b+1|0,35==(0|(l=l+7|0)))break n;k=b+1|0}else k=b;w=(p>>>1^0-(1&p))+w|0}else w=1+((w+b|0)+(-4^b)|0)|0;2!=(0|a)?(o[(b=e+(x<<2)|0)>>2]=v,o[b+4>>2]=A,o[b+8>>2]=w):(n[(b=e+(x<<1)|0)>>1]=v,n[b+2>>1]=A,n[b+4>>1]=w),o[(b=(d+64|0)+(u<<3)|0)>>2]=w,o[b+4>>2]=A,o[d+(c<<2)>>2]=w,o[(b=(d+64|0)+((u=u+1&15)<<3)|0)>>2]=v,o[b+4>>2]=w,c=c+1|0,u=u+1|0}if(I=I+1|0,u&=15,c&=15,!((x=x+3|0)>>>0<t>>>0))break r}}k=(0|k)==(0|j)?0:-3}return i=d+192|0,0|k},sbrk:function(e){e|=0;var r,t,n=0;return e=(r=0|o[256])+(e+3&-4)|0,o[256]=e,(e>>>0<=(t=u()<<16)>>>0||(n=-1,-1!=(0|d((65535+(e-t|0)|0)>>>16|0))))&&(n=r),0|n}}}()}e.exports=r}(n);var o=n.exports;e("m",t({__proto__:null,default:r(o)},[o]))}}}));
