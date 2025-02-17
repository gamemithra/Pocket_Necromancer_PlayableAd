System.register("chunks:///_virtual/CameraController.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var o,i,n,t,r,a,l,s,c,p,u,h;return{setters:[function(e){o=e.applyDecoratedDescriptor,i=e.inheritsLoose,n=e.initializerDefineProperty,t=e.assertThisInitialized},function(e){r=e.cclegacy,a=e._decorator,l=e.Node,s=e.Camera,c=e.Vec3,p=e.tween,u=e.math,h=e.Component}],execute:function(){var d,m,y,f,g,w,b,C;r._RF.push({},"b460e9Fwo5KqrwT8fDomeBa","CameraController",void 0);var P=a.ccclass,v=a.property;e("CameraController",(d=P("CameraController"),m=v(l),y=v(s),d((w=o((g=function(e){function o(){for(var o,i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return o=e.call.apply(e,[this].concat(r))||this,n(o,"player",w,t(o)),n(o,"camera",b,t(o)),n(o,"smoothSpeed",C,t(o)),o.isShaking=!1,o.originalPosition=new c,o}i(o,e);var r=o.prototype;return r.update=function(e){this.player&&!this.isShaking&&this.followPlayer(e)},r.followPlayer=function(e){var o=this.player.worldPosition.clone();o.y=this.node.worldPosition.y,this.node.worldPosition=this.node.worldPosition.lerp(o,e*this.smoothSpeed)},r.shakeCamera=function(){var e=this;this.isShaking||(this.isShaking=!0,this.originalPosition.set(this.node.position),p(this.node).by(.05,{position:new c(u.randomRange(-.3,.3),u.randomRange(-.3,.3),0)}).by(.05,{position:new c(u.randomRange(-.3,.3),u.randomRange(-.3,.3),0)}).by(.05,{position:new c(u.randomRange(-.3,.3),u.randomRange(-.3,.3),0)}).to(.05,{position:this.originalPosition}).call((function(){e.isShaking=!1})).start())},o}(h)).prototype,"player",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),b=o(g.prototype,"camera",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),C=o(g.prototype,"smoothSpeed",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 7}}),f=g))||f));r._RF.pop()}}}));

System.register("chunks:///_virtual/CollisionCheck.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Enemy.ts"],(function(e){var n,o,t,i,r,s;return{setters:[function(e){n=e.inheritsLoose},function(e){o=e.cclegacy,t=e._decorator,i=e.Collider,r=e.Component},function(e){s=e.Enemy}],execute:function(){var c;o._RF.push({},"4375ahq17hIy7i0eIEuUDOi","CollisionCheck",void 0);var a=t.ccclass;t.property,e("CollisionCheck",a("CollisionCheck")(c=function(e){function o(){return e.apply(this,arguments)||this}n(o,e);var t=o.prototype;return t.onLoad=function(){var e=this.getComponent(i);e&&e.on("onTriggerEnter",this.onTriggerEnter,this)},t.onTriggerEnter=function(e){var n=e.otherCollider.node;if(n.name.includes("Enemy")){var o=n.getComponent(s);o&&(this.node.name.includes("Ghost")?o.takeDamage(50):o.takeDamage(100))}},o}(r))||c);o._RF.pop()}}}));

System.register("chunks:///_virtual/Enemy.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GameController.ts"],(function(e){var t,i,n,a,o,r,l,s,c,u;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,n=e.initializerDefineProperty,a=e.assertThisInitialized},function(e){o=e.cclegacy,r=e._decorator,l=e.Prefab,s=e.SkeletalAnimation,c=e.Component},function(e){u=e.GameController}],execute:function(){var h,m,d,p,y,f,g,v;o._RF.push({},"8276f0QAglHMYv1XklowuyU","Enemy",void 0);var b=r.ccclass,P=r.property;e("Enemy",(h=b("Enemy"),m=P(l),h((y=t((p=function(e){function t(){for(var t,i=arguments.length,o=new Array(i),r=0;r<i;r++)o[r]=arguments[r];return t=e.call.apply(e,[this].concat(o))||this,n(t,"speed",y,a(t)),n(t,"attackRange",f,a(t)),n(t,"health",g,a(t)),t.player=null,t.isDead=!1,t.currentAnimation="",t.lastDamageTime=0,t.damageCooldown=.5,n(t,"damageNumber",v,a(t)),t}i(t,e);var o=t.prototype;return o.onLoad=function(){var e;this.player=(null==(e=u.getInstance())?void 0:e.player)||null},o.update=function(e){if(!this.isDead&&this.player){var t=this.player.worldPosition.clone().subtract(this.node.worldPosition),i=t.length();i<.1||(i>this.attackRange?(this.moveToPlayer(t.normalize(),e),this.playAnimation("B_Pelvis|B_Pelvis|Worker_Walk|Animation Base Layer")):this.playAnimation("B_Pelvis|B_Pelvis|Worker_Attack|Animation Base Layer"))}},o.moveToPlayer=function(e,t){this.node.setPosition(this.node.worldPosition.add(e.multiplyScalar(this.speed*t)));var i=Math.atan2(e.x,e.z)*(180/Math.PI);this.node.setRotationFromEuler(0,i,0)},o.takeDamage=function(e){if(!this.isDead){var t=Date.now()/1e3;t-this.lastDamageTime<this.damageCooldown||(this.lastDamageTime=t,console.log("Enemy taking damage: "+e+", Health before: "+this.health),this.health-=e,this.health<=0&&this.die())}},o.die=function(){var e=this;this.isDead||(this.isDead=!0,console.log("Enemy died!"),this.scheduleOnce((function(){var t;e.node.active=!1,null==(t=u.getInstance())||t.recycleEnemy(e)}),1.5))},o.playAnimation=function(e){var t=this.node.getComponent(s);t&&this.currentAnimation!==e&&(this.currentAnimation=e,t.play(e))},t}(c)).prototype,"speed",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 2}}),f=t(p.prototype,"attackRange",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 2}}),g=t(p.prototype,"health",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 100}}),v=t(p.prototype,"damageNumber",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),d=p))||d));o._RF.pop()}}}));

System.register("chunks:///_virtual/GameController.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Enemy.ts","./CameraController.ts"],(function(t){var e,i,n,o,r,s,a,l,u,h,c,p,f,m,b,d,g,y,w,C;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.inheritsLoose,n=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){r=t.cclegacy,s=t._decorator,a=t.Prefab,l=t.Node,u=t.Label,h=t.input,c=t.Input,p=t.Vec3,f=t.Quat,m=t.instantiate,b=t.UIOpacity,d=t.tween,g=t.sys,y=t.Component},function(t){w=t.Enemy},function(t){C=t.CameraController}],execute:function(){var v,P,E,S,k,z,G,I,R,x,M,_,L,O,T,D,U,K,W,F,A,N,B,H,Y,j,q,Q,V,X;r._RF.push({},"4e29740LB9AXafEcLIKfzOf","GameController",void 0);var J=s.ccclass,Z=s.property;t("GameController",(v=J("GameController"),P=Z(a),E=Z([l]),S=Z(l),k=Z(l),z=Z(u),G=Z(u),I=Z(a),R=Z(l),x=Z({tooltip:"Max enemies allowed in the pool"}),M=Z({tooltip:"Ghost orbit radius"}),_=Z({tooltip:"Ghost rotation speed (degrees per second)"}),L=Z(a),O=Z(C),v(((X=function(t){function e(){for(var e,i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];return e=t.call.apply(t,[this].concat(r))||this,n(e,"enemyPrefab",U,o(e)),n(e,"spawnPoints",K,o(e)),n(e,"player",W,o(e)),n(e,"winScreen",F,o(e)),n(e,"statusLabel",A,o(e)),n(e,"killCounter",N,o(e)),n(e,"ghostPrefab",B,o(e)),n(e,"orbitRoot",H,o(e)),n(e,"maxEnemies",Y,o(e)),n(e,"ghostRadius",j,o(e)),n(e,"ghostSpeed",q,o(e)),n(e,"puffFx",Q,o(e)),n(e,"cameraMainController",V,o(e)),e.enemyPool=[],e.activeEnemies=[],e.killCount=0,e.isGameOver=!1,e.ghostCount=1,e.spawnIndex=0,e.gameStarted=!1,e}i(e,t);var r=e.prototype;return r.onLoad=function(){e._instance?this.destroy():(e._instance=this,this.winScreen.active=!1,this.resetUI(),this.initializeEnemies(),h.on(c.EventType.TOUCH_START,this.onTouchStart,this),h.on(c.EventType.MOUSE_DOWN,this.onTouchStart,this))},e.getInstance=function(){return e._instance},r.start=function(){this.killCounter.string="Drag to play",this.killCounter.node.setPosition(new p(0,-500,0))},r.onTouchStart=function(t){this.gameStarted||(this.killCounter.string="Kill them all",this.killCounter.node.setPosition(new p(0,300,0)),this.gameStarted=!0,this.startGame())},r.update=function(t){if(this.orbitRoot){var e=new f;f.fromEuler(e,0,this.ghostSpeed*t,0),this.orbitRoot.rotate(e)}},r.initializeEnemies=function(){for(var t=0;t<this.maxEnemies;t++){var e=m(this.enemyPrefab),i=e.getComponent(w);i&&(e.active=!1,this.enemyPool.push(i),this.node.addChild(e))}console.log("Enemy pool initialized with "+this.enemyPool.length+" enemies.")},r.spawnEnemy=function(){if(this.enemyPool.length>0&&this.spawnPoints.length>0){var t=this.enemyPool.pop();if(t){var e=Math.floor(Math.random()*this.spawnPoints.length),i=this.spawnPoints[e].getWorldPosition();t.node.setPosition(i),t.node.active=!0,this.activeEnemies.push(t),this.spawnIndex=(this.spawnIndex+1)%this.spawnPoints.length}}else console.log("Enemy pool or spawn points are empty.")},r.recycleEnemy=function(t){this.isGameOver||(t.node.active=!1,this.activeEnemies=this.activeEnemies.filter((function(e){return e!==t})),this.enemyPool.push(t),this.killCount++,10!==this.killCount&&20!==this.killCount||this.spawnGhost(),this.killCount>=30&&this.showWinScreen("You Win!"),this.updateKillCounter())},r.spawnGhost=function(){if(this.ghostPrefab&&this.orbitRoot){var t=this.ghostCount/3*Math.PI*2,e=new p(this.ghostRadius*Math.cos(t),0,this.ghostRadius*Math.sin(t)),i=m(this.ghostPrefab);i.setPosition(e),this.orbitRoot.addChild(i),this.ghostCount++}},r.playerDied=function(){this.isGameOver||(this.showWinScreen("You Died!"),this.cameraMainController.shakeCamera())},r.showWinScreen=function(t){this.isGameOver=!0,this.statusLabel.string=t,this.fadeIn(this.winScreen)},r.fadeIn=function(t){t.active=!0;var e=t.getComponent(b)||t.addComponent(b);e.opacity=0,d(e).to(.5,{opacity:255}).start()},r.openPlayStore=function(){g.openURL("https://play.google.com/store/apps/details?id=com.quicksand.pocketnecromancer&hl=en_IN")},r.startGame=function(){this.resetGameState(),this.schedule(this.spawnEnemy,1.5),this.spawnGhost()},r.resetGameState=function(){this.isGameOver=!1,this.killCount=0,this.ghostCount=1,this.spawnIndex=0,this.activeEnemies.forEach((function(t){return t.node.active=!1})),this.activeEnemies=[],this.resetUI()},r.resetUI=function(){this.winScreen.active=!1,this.killCounter.string="Kill them all",this.killCounter.node.setPosition(new p(0,0,0))},r.updateKillCounter=function(){this.killCounter.string="Kills: "+this.killCount,this.killCounter.node.setPosition(new p(0,600,0))},e}(y))._instance=null,U=e((D=X).prototype,"enemyPrefab",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),K=e(D.prototype,"spawnPoints",[E],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),W=e(D.prototype,"player",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),F=e(D.prototype,"winScreen",[k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),A=e(D.prototype,"statusLabel",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),N=e(D.prototype,"killCounter",[G],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),B=e(D.prototype,"ghostPrefab",[I],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),H=e(D.prototype,"orbitRoot",[R],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Y=e(D.prototype,"maxEnemies",[x],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 10}}),j=e(D.prototype,"ghostRadius",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 3}}),q=e(D.prototype,"ghostSpeed",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 50}}),Q=e(D.prototype,"puffFx",[L],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),V=e(D.prototype,"cameraMainController",[O],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=D))||T));r._RF.pop()}}}));

System.register("chunks:///_virtual/Joystick.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var o,n,e,i,s,r,a,c,h,u;return{setters:[function(t){o=t.applyDecoratedDescriptor,n=t.inheritsLoose,e=t.initializerDefineProperty,i=t.assertThisInitialized},function(t){s=t.cclegacy,r=t._decorator,a=t.Node,c=t.Vec3,h=t.UITransform,u=t.Component}],execute:function(){var l,T,d,p,f,y,v;s._RF.push({},"ef93576FqJGp4Bp1vidms4+","Joystick",void 0);var E=r.ccclass,m=r.property;t("Joystick",(l=E("Joystick"),T=m(a),d=m(a),l((y=o((f=function(t){function o(){for(var o,n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return o=t.call.apply(t,[this].concat(s))||this,e(o,"base",y,i(o)),e(o,"handle",v,i(o)),o.direction=new c(0,0,0),o.maxRadius=50,o.startPos=new c,o}n(o,t);var s=o.prototype;return s.onLoad=function(){this.node.on(a.EventType.TOUCH_START,this.onTouchStart,this),this.node.on(a.EventType.TOUCH_MOVE,this.onTouchMove,this),this.node.on(a.EventType.TOUCH_END,this.onTouchEnd,this),this.node.on(a.EventType.TOUCH_CANCEL,this.onTouchEnd,this)},s.onDestroy=function(){this.node.off(a.EventType.TOUCH_START,this.onTouchStart,this),this.node.off(a.EventType.TOUCH_MOVE,this.onTouchMove,this),this.node.off(a.EventType.TOUCH_END,this.onTouchEnd,this),this.node.off(a.EventType.TOUCH_CANCEL,this.onTouchEnd,this)},s.onTouchStart=function(t){var o=t.getUILocation(),n=this.convertToLocalPosition(o);this.startPos.set(n)},s.onTouchMove=function(t){var o=t.getUILocation(),n=this.convertToLocalPosition(o).subtract(this.startPos);n.length()>this.maxRadius&&n.normalize().multiplyScalar(this.maxRadius),this.handle.setPosition(n),this.direction.set(n.x/this.maxRadius,0,n.y/this.maxRadius)},s.onTouchEnd=function(t){this.direction.set(0,0,0),this.handle.setPosition(c.ZERO)},s.convertToLocalPosition=function(t){return this.node.parent.getComponent(h).convertToNodeSpaceAR(new c(t.x,t.y,0))},o}(u)).prototype,"base",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=o(f.prototype,"handle",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),p=f))||p));s._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./CameraController.ts","./CollisionCheck.ts","./Enemy.ts","./GameController.ts","./Joystick.ts","./PlayerController.ts"],(function(){return{setters:[null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/PlayerController.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GameController.ts","./Joystick.ts"],(function(t){var i,e,n,a,o,r,s,l,c,h,u,p,d,y,k;return{setters:[function(t){i=t.applyDecoratedDescriptor,e=t.inheritsLoose,n=t.initializerDefineProperty,a=t.assertThisInitialized},function(t){o=t.cclegacy,r=t._decorator,s=t.SkeletalAnimation,l=t.Node,c=t.CCFloat,h=t.ProgressBar,u=t.Collider,p=t.Vec3,d=t.Component},function(t){y=t.GameController},function(t){k=t.Joystick}],execute:function(){var g,f,m,A,v,C,b,P,D,x,z,M,F;o._RF.push({},"3e666d1+bBIiIWfcBNK2Uxn","PlayerController",void 0);var _=r.ccclass,j=r.property;t("PlayerController",(g=_("PlayerController"),f=j(s),m=j(l),A=j({type:c}),v=j(h),C=j(k),g((D=i((P=function(t){function i(){for(var i,e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];return i=t.call.apply(t,[this].concat(o))||this,n(i,"skeletalAnimationComponent",D,a(i)),n(i,"attackFx",x,a(i)),n(i,"speed",z,a(i)),n(i,"progressBar",M,a(i)),n(i,"joystick",F,a(i)),i.isAttacking=!1,i.isDead=!1,i.health=100,i}e(i,t);var o=i.prototype;return o.onLoad=function(){var t=this.getComponent(u);t&&t.on("onTriggerEnter",this.onTriggerEnter,this),this.schedule(this.autoAttack,2+Math.random())},o.onDestroy=function(){this.unschedule(this.autoAttack)},o.update=function(t){if(!this.isAttacking&&!this.isDead&&this.joystick&&this.joystick.direction.lengthSqr()>0){var i=new p(this.joystick.direction.x,0,-this.joystick.direction.z);if(i.multiplyScalar(this.speed*t),this.node.setPosition(this.node.position.add(i)),i.lengthSqr()>0){var e=Math.atan2(i.x,i.z)*(180/Math.PI);this.node.setRotationFromEuler(0,e,0),this.playMoveAnimation()}}},o.playMoveAnimation=function(){var t;this.isAttacking||!1!==(null==(t=this.skeletalAnimationComponent)||null==(t=t.getState("Player_Move"))?void 0:t.isPlaying)||this.skeletalAnimationComponent.play("Player_Move")},o.playAttackAnimation=function(){var t,i=this;if(!this.isAttacking&&!this.isDead){this.attackFx.active=!0,this.isAttacking=!0,this.skeletalAnimationComponent.play("Player_Attack");var e=(null==(t=this.skeletalAnimationComponent.getState("Player_Attack"))?void 0:t.duration)||.5;this.scheduleOnce((function(){i.isAttacking=!1,i.attackFx.active=!1}),e)}},o.autoAttack=function(){this.isAttacking||this.isDead||this.playAttackAnimation(),this.schedule(this.autoAttack,3+Math.random())},o.onTriggerEnter=function(t){"Pickaxe"===t.otherCollider.node.name&&this.takeDamage(1)},o.takeDamage=function(t){this.isDead||(this.health-=t,this.progressBar.progress=this.health/100,this.health<=0&&this.die())},o.die=function(){var t;this.isDead||(this.isDead=!0,null==(t=y.getInstance())||t.playerDied(),this.unschedule(this.autoAttack))},i}(d)).prototype,"skeletalAnimationComponent",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),x=i(P.prototype,"attackFx",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),z=i(P.prototype,"speed",[A],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 5}}),M=i(P.prototype,"progressBar",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),F=i(P.prototype,"joystick",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),b=P))||b));o._RF.pop()}}}));

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