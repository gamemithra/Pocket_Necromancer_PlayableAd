System.register([],(function(e){"use strict";return{execute:function(){e("default",function(){var e,t=!1,r=function(r){return void 0===r&&(r={}),"function"!=typeof r?Promise.reject(new Error("No wasm support detected")):r().then((function(r){t=!0,(e=r.instance).exports.__wasm_call_ctors()}))};function n(t,r,n,o,s,c){var u=e.exports.sbrk,i=n+3&-4,a=u(i*o),d=u(s.length),f=new Uint8Array(e.exports.memory.buffer);f.set(s,d);var p=t(a,n,o,d,s.length);if(0==p&&c&&c(a,i,o),r.set(f.subarray(a,a+n*o)),u(a-u(0)),0!=p)throw new Error("Malformed buffer data: "+p)}var o={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},s={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},c=[],u=0;function i(e){var t={object:new Worker(e),pending:0,requests:{}};return t.object.onmessage=function(e){var r=e.data;t.pending-=r.count,t.requests[r.id][r.action](r.value),delete t.requests[r.id]},t}function a(e){for(var t="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(unpack(wasm))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+n.toString()+f.toString(),r=new Blob([t],{type:"text/javascript"}),o=URL.createObjectURL(r),s=0;s<e;++s)c[s]=i(o);URL.revokeObjectURL(o)}function d(e,t,r,n,o){for(var s=c[0],i=1;i<c.length;++i)c[i].pending<s.pending&&(s=c[i]);return new Promise((function(c,i){var a=new Uint8Array(r),d=u++;s.pending+=e,s.requests[d]={resolve:c,reject:i},s.object.postMessage({id:d,count:e,size:t,source:a,mode:n,filter:o},[a.buffer])}))}function f(t){r.then((function(){var r=t.data;try{var o=new Uint8Array(r.count*r.size);n(e.exports[r.mode],o,r.count,r.size,r.source,e.exports[r.filter]),self.postMessage({id:r.id,count:r.count,action:"resolve",value:o},[o.buffer])}catch(e){self.postMessage({id:r.id,count:r.count,action:"reject",value:e})}}))}return{ready:r,supported:t,useWorkers:function(e){a(e)},decodeVertexBuffer:function(t,r,s,c,u){n(e.exports.meshopt_decodeVertexBuffer,t,r,s,c,e.exports[o[u]])},decodeIndexBuffer:function(t,r,o,s){n(e.exports.meshopt_decodeIndexBuffer,t,r,o,s)},decodeIndexSequence:function(t,r,o,s){n(e.exports.meshopt_decodeIndexSequence,t,r,o,s)},decodeGltfBuffer:function(t,r,c,u,i,a){n(e.exports[s[i]],t,r,c,u,e.exports[o[a]])},decodeGltfBufferAsync:function(t,u,i,a,f){return c.length>0?d(t,u,i,s[a],o[f]):r.then((function(){var r=new Uint8Array(t*u);return n(e.exports[s[a]],r,t,u,i,e.exports[o[f]]),r}))}}}())}}}));
