System.register("chunks:///_virtual/CameraController.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var o,i,n,t,r,a,l,s,c,p,u,h;return{setters:[function(e){o=e.applyDecoratedDescriptor,i=e.inheritsLoose,n=e.initializerDefineProperty,t=e.assertThisInitialized},function(e){r=e.cclegacy,a=e._decorator,l=e.Node,s=e.Camera,c=e.Vec3,p=e.tween,u=e.math,h=e.Component}],execute:function(){var d,m,y,f,g,w,b,C;r._RF.push({},"b460e9Fwo5KqrwT8fDomeBa","CameraController",void 0);var P=a.ccclass,v=a.property;e("CameraController",(d=P("CameraController"),m=v(l),y=v(s),d((w=o((g=function(e){function o(){for(var o,i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return o=e.call.apply(e,[this].concat(r))||this,n(o,"player",w,t(o)),n(o,"camera",b,t(o)),n(o,"smoothSpeed",C,t(o)),o.isShaking=!1,o.originalPosition=new c,o}i(o,e);var r=o.prototype;return r.update=function(e){this.player&&!this.isShaking&&this.followPlayer(e)},r.followPlayer=function(e){var o=this.player.worldPosition.clone();o.y=this.node.worldPosition.y,this.node.worldPosition=this.node.worldPosition.lerp(o,e*this.smoothSpeed)},r.shakeCamera=function(){var e=this;this.isShaking||(this.isShaking=!0,this.originalPosition.set(this.node.position),p(this.node).by(.05,{position:new c(u.randomRange(-.3,.3),u.randomRange(-.3,.3),0)}).by(.05,{position:new c(u.randomRange(-.3,.3),u.randomRange(-.3,.3),0)}).by(.05,{position:new c(u.randomRange(-.3,.3),u.randomRange(-.3,.3),0)}).to(.05,{position:this.originalPosition}).call((function(){e.isShaking=!1})).start())},o}(h)).prototype,"player",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),b=o(g.prototype,"camera",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),C=o(g.prototype,"smoothSpeed",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 7}}),f=g))||f));r._RF.pop()}}}));

System.register("chunks:///_virtual/CollisionCheck.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Enemy.ts"],(function(e){var n,o,t,i,r,s;return{setters:[function(e){n=e.inheritsLoose},function(e){o=e.cclegacy,t=e._decorator,i=e.Collider,r=e.Component},function(e){s=e.Enemy}],execute:function(){var c;o._RF.push({},"4375ahq17hIy7i0eIEuUDOi","CollisionCheck",void 0);var a=t.ccclass;t.property,e("CollisionCheck",a("CollisionCheck")(c=function(e){function o(){return e.apply(this,arguments)||this}n(o,e);var t=o.prototype;return t.onLoad=function(){var e=this.getComponent(i);e&&e.on("onTriggerEnter",this.onTriggerEnter,this)},t.onTriggerEnter=function(e){var n=e.otherCollider.node;if(n.name.includes("Enemy")){var o=n.getComponent(s);o&&(this.node.name.includes("Ghost")?o.takeDamage(50):o.takeDamage(100))}},o}(r))||c);o._RF.pop()}}}));

System.register("chunks:///_virtual/Enemy.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GameController.ts"],(function(e){var t,i,n,a,o,r,l,s,c,u;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,n=e.initializerDefineProperty,a=e.assertThisInitialized},function(e){o=e.cclegacy,r=e._decorator,l=e.Prefab,s=e.SkeletalAnimation,c=e.Component},function(e){u=e.GameController}],execute:function(){var h,m,d,p,y,f,g,v;o._RF.push({},"8276f0QAglHMYv1XklowuyU","Enemy",void 0);var b=r.ccclass,P=r.property;e("Enemy",(h=b("Enemy"),m=P(l),h((y=t((p=function(e){function t(){for(var t,i=arguments.length,o=new Array(i),r=0;r<i;r++)o[r]=arguments[r];return t=e.call.apply(e,[this].concat(o))||this,n(t,"speed",y,a(t)),n(t,"attackRange",f,a(t)),n(t,"health",g,a(t)),t.player=null,t.isDead=!1,t.currentAnimation="",t.lastDamageTime=0,t.damageCooldown=.5,n(t,"damageNumber",v,a(t)),t}i(t,e);var o=t.prototype;return o.onLoad=function(){var e;this.player=(null==(e=u.getInstance())?void 0:e.player)||null},o.update=function(e){if(!this.isDead&&this.player){var t=this.player.worldPosition.clone().subtract(this.node.worldPosition),i=t.length();i<.1||(i>this.attackRange?(this.moveToPlayer(t.normalize(),e),this.playAnimation("B_Pelvis|B_Pelvis|Worker_Walk|Animation Base Layer")):this.playAnimation("B_Pelvis|B_Pelvis|Worker_Attack|Animation Base Layer"))}},o.moveToPlayer=function(e,t){this.node.setPosition(this.node.worldPosition.add(e.multiplyScalar(this.speed*t)));var i=Math.atan2(e.x,e.z)*(180/Math.PI);this.node.setRotationFromEuler(0,i,0)},o.takeDamage=function(e){if(!this.isDead){var t=Date.now()/1e3;t-this.lastDamageTime<this.damageCooldown||(this.lastDamageTime=t,console.log("Enemy taking damage: "+e+", Health before: "+this.health),this.health-=e,this.health<=0&&this.die())}},o.die=function(){var e=this;this.isDead||(this.isDead=!0,console.log("Enemy died!"),this.scheduleOnce((function(){var t;e.node.active=!1,null==(t=u.getInstance())||t.recycleEnemy(e)}),1.5))},o.playAnimation=function(e){var t=this.node.getComponent(s);t&&this.currentAnimation!==e&&(this.currentAnimation=e,t.play(e))},t}(c)).prototype,"speed",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 2}}),f=t(p.prototype,"attackRange",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 2}}),g=t(p.prototype,"health",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 100}}),v=t(p.prototype,"damageNumber",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),d=p))||d));o._RF.pop()}}}));

System.register("chunks:///_virtual/GameController.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Enemy.ts","./CameraController.ts"],(function(t){var e,i,n,o,r,a,s,l,u,c,h,p,f,m,b,d,g,y;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.inheritsLoose,n=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){r=t.cclegacy,a=t._decorator,s=t.Prefab,l=t.Node,u=t.Label,c=t.Quat,h=t.instantiate,p=t.Vec3,f=t.UIOpacity,m=t.tween,b=t.sys,d=t.Component},function(t){g=t.Enemy},function(t){y=t.CameraController}],execute:function(){var w,C,v,P,E,z,G,k,S,I,R,x,L,M,_,O,D,K,U,W,F,A,B,N,Y,j,q,H,Q,T;r._RF.push({},"4e29740LB9AXafEcLIKfzOf","GameController",void 0);var V=a.ccclass,X=a.property;t("GameController",(w=V("GameController"),C=X(s),v=X([l]),P=X(l),E=X(l),z=X(u),G=X(u),k=X(s),S=X(l),I=X({tooltip:"Max enemies allowed in the pool"}),R=X({tooltip:"Ghost orbit radius"}),x=X({tooltip:"Ghost rotation speed (degrees per second)"}),L=X(s),M=X(y),w(((T=function(t){function e(){for(var e,i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return e=t.call.apply(t,[this].concat(r))||this,n(e,"enemyPrefab",D,o(e)),n(e,"spawnPoints",K,o(e)),n(e,"player",U,o(e)),n(e,"winScreen",W,o(e)),n(e,"statusLabel",F,o(e)),n(e,"killCounter",A,o(e)),n(e,"ghostPrefab",B,o(e)),n(e,"orbitRoot",N,o(e)),n(e,"maxEnemies",Y,o(e)),n(e,"ghostRadius",j,o(e)),n(e,"ghostSpeed",q,o(e)),n(e,"puffFx",H,o(e)),n(e,"cameraMainController",Q,o(e)),e.enemyPool=[],e.activeEnemies=[],e.killCount=0,e.isGameOver=!1,e.ghostCount=1,e.spawnIndex=0,e.minSpawnDistance=2,e}i(e,t);var r=e.prototype;return r.onLoad=function(){e._instance?this.destroy():(e._instance=this,this.winScreen.active=!1,this.resetUI())},e.getInstance=function(){return e._instance},r.start=function(){this.initializeEnemies(),this.startGame()},r.update=function(t){if(this.orbitRoot){var e=new c;c.fromEuler(e,0,this.ghostSpeed*t,0),this.orbitRoot.rotate(e)}},r.initializeEnemies=function(){for(var t=0;t<this.maxEnemies;t++){var e=h(this.enemyPrefab),i=e.getComponent(g);i&&(e.active=!1,this.enemyPool.push(i),this.node.addChild(e))}},r.spawnEnemy=function(){if(this.enemyPool.length>0&&this.spawnPoints.length>0){var t=this.enemyPool.pop();if(t){var e=Math.floor(Math.random()*this.spawnPoints.length),i=this.spawnPoints[e].getWorldPosition();t.node.setPosition(i),t.node.active=!0,this.activeEnemies.push(t),this.spawnIndex=(this.spawnIndex+1)%this.spawnPoints.length}}},r.recycleEnemy=function(t){this.isGameOver||(t.node.active=!1,this.activeEnemies=this.activeEnemies.filter((function(e){return e!==t})),this.enemyPool.push(t),this.killCount++,10!==this.killCount&&20!==this.killCount||this.spawnGhost(),this.killCount>=30&&this.showWinScreen("You Win!"),this.updateKillCounter())},r.spawnGhost=function(){if(this.ghostPrefab&&this.orbitRoot){var t=this.ghostCount/3*Math.PI*2,e=new p(this.ghostRadius*Math.cos(t),0,this.ghostRadius*Math.sin(t)),i=h(this.ghostPrefab);i.setPosition(e),this.orbitRoot.addChild(i),this.ghostCount++}},r.playerDied=function(){this.isGameOver||this.showWinScreen("You Died!")},r.showWinScreen=function(t){this.isGameOver=!0,this.statusLabel.string=t,this.fadeIn(this.winScreen)},r.fadeIn=function(t){t.active=!0;var e=t.getComponent(f)||t.addComponent(f);e.opacity=0,m(e).to(.5,{opacity:255}).start()},r.openPlayStore=function(){b.openURL("https://play.google.com/store/apps/details?id=com.quicksand.pocketnecromancer&hl=en_IN")},r.startGame=function(){this.resetGameState(),this.schedule(this.spawnEnemy,1.5),this.spawnGhost()},r.resetGameState=function(){this.isGameOver=!1,this.killCount=0,this.ghostCount=1,this.spawnIndex=0,this.activeEnemies.forEach((function(t){return t.node.active=!1})),this.activeEnemies=[],this.resetUI()},r.resetUI=function(){this.winScreen.active=!1,this.killCounter.string="Kill them all",this.killCounter.node.setPosition(new p(0,300,0))},r.updateKillCounter=function(){this.killCounter.string="Kills: "+this.killCount,this.killCounter.node.setPosition(new p(0,600,0))},e}(d))._instance=null,D=e((O=T).prototype,"enemyPrefab",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),K=e(O.prototype,"spawnPoints",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),U=e(O.prototype,"player",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),W=e(O.prototype,"winScreen",[E],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),F=e(O.prototype,"statusLabel",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),A=e(O.prototype,"killCounter",[G],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),B=e(O.prototype,"ghostPrefab",[k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),N=e(O.prototype,"orbitRoot",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Y=e(O.prototype,"maxEnemies",[I],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 10}}),j=e(O.prototype,"ghostRadius",[R],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 3}}),q=e(O.prototype,"ghostSpeed",[x],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 50}}),H=e(O.prototype,"puffFx",[L],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Q=e(O.prototype,"cameraMainController",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),_=O))||_));r._RF.pop()}}}));

System.register("chunks:///_virtual/Joystick.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var o,i,n,e,s,r,a,c,h,u,l,p,d;return{setters:[function(t){o=t.applyDecoratedDescriptor,i=t.inheritsLoose,n=t.initializerDefineProperty,e=t.assertThisInitialized},function(t){s=t.cclegacy,r=t._decorator,a=t.Node,c=t.CCFloat,h=t.Vec3,u=t.Vec2,l=t.input,p=t.Input,d=t.Component}],execute:function(){var y,T,f,v,E,C,b,g,_;s._RF.push({},"ef93576FqJGp4Bp1vidms4+","Joystick",void 0);var P=r.ccclass,w=r.property;t("Joystick",(y=P("Joystick"),T=w(a),f=w(a),v=w({type:c}),y((b=o((C=function(t){function o(){for(var o,i=arguments.length,s=new Array(i),r=0;r<i;r++)s[r]=arguments[r];return o=t.call.apply(t,[this].concat(s))||this,n(o,"background",b,e(o)),n(o,"handle",g,e(o)),n(o,"radius",_,e(o)),o.startPos=new h,o.touchStartPos=new u,o.direction=new h,o}i(o,t);var s=o.prototype;return s.onLoad=function(){this.node.active=!1,l.on(p.EventType.TOUCH_START,this.onTouchStart,this),l.on(p.EventType.TOUCH_MOVE,this.onTouchMove,this),l.on(p.EventType.TOUCH_END,this.onTouchEnd,this),l.on(p.EventType.TOUCH_CANCEL,this.onTouchEnd,this)},s.onDestroy=function(){l.off(p.EventType.TOUCH_START,this.onTouchStart,this),l.off(p.EventType.TOUCH_MOVE,this.onTouchMove,this),l.off(p.EventType.TOUCH_END,this.onTouchEnd,this),l.off(p.EventType.TOUCH_CANCEL,this.onTouchEnd,this)},s.onTouchStart=function(t){var o=t.getUILocation();this.touchStartPos.set(o.x,o.y),this.node.setWorldPosition(o.x,o.y,0),this.node.active=!0,this.startPos.set(this.node.position)},s.onTouchMove=function(t){var o=t.getUILocation(),i=new u(o.x-this.startPos.x,o.y-this.startPos.y),n=i.length();n>this.radius&&i.multiplyScalar(this.radius/n),this.handle.setPosition(new h(i.x,i.y,0)),this.direction.set(i.x/this.radius,0,i.y/this.radius)},s.onTouchEnd=function(t){this.handle.setPosition(new h(0,0,0)),this.direction.set(0,0,0),this.node.active=!1},o}(d)).prototype,"background",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),g=o(C.prototype,"handle",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),_=o(C.prototype,"radius",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 100}}),E=C))||E));s._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./CameraController.ts","./CollisionCheck.ts","./Enemy.ts","./GameController.ts","./Joystick.ts","./PlayerController.ts"],(function(){return{setters:[null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/PlayerController.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GameController.ts","./Joystick.ts"],(function(t){var i,e,n,a,o,r,s,l,c,u,h,p,d,y,k;return{setters:[function(t){i=t.applyDecoratedDescriptor,e=t.inheritsLoose,n=t.initializerDefineProperty,a=t.assertThisInitialized},function(t){o=t.cclegacy,r=t._decorator,s=t.SkeletalAnimation,l=t.Node,c=t.CCFloat,u=t.ProgressBar,h=t.Collider,p=t.Vec3,d=t.Component},function(t){y=t.GameController},function(t){k=t.Joystick}],execute:function(){var g,f,m,A,v,C,b,D,P,w,x,z,_;o._RF.push({},"3e666d1+bBIiIWfcBNK2Uxn","PlayerController",void 0);var j=r.ccclass,B=r.property;t("PlayerController",(g=j("PlayerController"),f=B(s),m=B(l),A=B({type:c}),v=B(u),C=B(k),g((P=i((D=function(t){function i(){for(var i,e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];return i=t.call.apply(t,[this].concat(o))||this,n(i,"skeletalAnimationComponent",P,a(i)),n(i,"attackFx",w,a(i)),n(i,"speed",x,a(i)),n(i,"progressBar",z,a(i)),n(i,"joystick",_,a(i)),i.isAttacking=!1,i.isDead=!1,i.health=100,i}e(i,t);var o=i.prototype;return o.onLoad=function(){var t=this.getComponent(h);t&&t.on("onTriggerEnter",this.onTriggerEnter,this),this.schedule(this.autoAttack,2+Math.random())},o.onDestroy=function(){this.unschedule(this.autoAttack)},o.update=function(t){if(!this.isAttacking&&!this.isDead&&this.joystick&&this.joystick.direction.lengthSqr()>0){var i=new p(this.joystick.direction.x,0,this.joystick.direction.z);i.multiplyScalar(this.speed*t),this.node.setPosition(this.node.position.add(i)),this.node.forward=new p(-i.x,0,-i.z),this.playMoveAnimation()}},o.playMoveAnimation=function(){var t;this.isAttacking||!1!==(null==(t=this.skeletalAnimationComponent)||null==(t=t.getState("Player_Move"))?void 0:t.isPlaying)||this.skeletalAnimationComponent.play("Player_Move")},o.playAttackAnimation=function(){var t,i=this;if(!this.isAttacking&&!this.isDead){this.attackFx.active=!0,this.isAttacking=!0,this.skeletalAnimationComponent.play("Player_Attack");var e=(null==(t=this.skeletalAnimationComponent.getState("Player_Attack"))?void 0:t.duration)||.5;this.scheduleOnce((function(){i.isAttacking=!1,i.attackFx.active=!1}),e)}},o.autoAttack=function(){this.isAttacking||this.isDead||this.playAttackAnimation(),this.schedule(this.autoAttack,3+Math.random())},o.onTriggerEnter=function(t){"Pickaxe"===t.otherCollider.node.name&&this.takeDamage(1)},o.takeDamage=function(t){this.isDead||(this.health-=t,this.progressBar.progress=this.health/100,this.health<=0&&this.die())},o.die=function(){var t;this.isDead||(this.isDead=!0,null==(t=y.getInstance())||t.playerDied(),this.unschedule(this.autoAttack))},i}(d)).prototype,"skeletalAnimationComponent",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),w=i(D.prototype,"attackFx",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),x=i(D.prototype,"speed",[A],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 5}}),z=i(D.prototype,"progressBar",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),_=i(D.prototype,"joystick",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),b=D))||b));o._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});