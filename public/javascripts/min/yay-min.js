$(document).ready(function(){function e(e){N=document.getElementById("fullname").value;for(var n=N.length,t=0,i=0;n>i;i++)K.push(N.charCodeAt(i)),t+=K[i];Q=K.indexOf(32),V=K[0],W=K[Q+1];var a,l;65===K[0]?(a=V-64,l=W-64):(a=V-65,l=W-65);var s=Q,r=n-Q-1,o=100*s,c=100*r,p=o/2,h=c/2,m=.25*o,d=.25*c,u=.75*o,f=.75*c,j=t/n,w,v=36*a,b=36*l,y=20*a,I=20*l,x=a+l,k=.75*v,C=.75*b,R=.75*y,S=.75*I,T=1.25*v,A=1.25*b,B=1.25*y,D=1.25*I;!function(){K[1]<103&&(O=.25),K[1]>=103&&K[1]<107&&(O=.5),K[1]>=107&&K[1]<112&&(O=.75),K[1]>=112&&K[1]<117&&(O=.85),K[1]>=117&&(O=1)}();var O,E=["rgba(252, 110, 110, "+O+")","rgba(40, 231, 93, "+O+")","rgba(49, 146, 255, "+O+")","rgba(255, 195, 250, "+O+")","rgba(28, 23, 103, "+O+")","rgba(255, 0, 0, "+O+")","rgba(255, 102, 0, "+O+")","rgba(255, 240, 0, "+O+")","rgba(96, 214, 196, "+O+")","rgba(50, 60, 103, "+O+")","rgba(88, 64, 73, "+O+")","rgba(206, 180, 190, "+O+")","rgba(243, 255, 162, "+O+")"];z.push(E[0],E[1],E[2],E[3],E[4],E[5],E[6],E[7],E[8],E[9],E[10],E[11],E[12]),_.push(a,l,V,W,n,s,r,o,c,p,h,m,d,u,f,O,j,t,w,x),U.push(v,b,k,C,T,A),q.push(y,I,R,S,B,D),G.push(v,y,b,I,k,R,C,S,T,B,A,D),F.push(-1*v,v,-1*y,y,-1*b,b,-1*I,I,-1*k,k,-1*R,R,-1*C,C,-1*S,S,-1*T,T,-1*B,B,-1*A,A,-1*D,D),H.push(-1*v,v,-1*b,b,-1*k,k,-1*C,C,-1*T,T,-1*A,A),J.push(-1*y,y,-1*I,I,-1*R,R,-1*S,S,-1*B,B,-1*D,D);var P=.01*_[0],L=.1*_[0],X=_[0],Y=10*_[0],Z=100*_[0];M.push(P,L,X,Y,Z),function(){var e=parseInt(_[17]%Ne.length),n=parseInt(_[1]%Qe.length),t=parseInt(_[0]%Ve.length),i=parseInt(_[0]%Qe.length),a=parseInt(_[1]%Ve.length),l=Ne[e].concat(Qe[n]).concat(Ve[t]).concat(Qe[i]).concat(Ve[a]);g(l),window.console.log("i worked")}(),setTimeout(function(){e()},6e3)}function g(e){e[0]!==e.length-1&&e[++e[0]](e)}function n(e){65===K[0]?(ce=le[_[0]%le.length-1],window.console.log("the letter A worked")):(ce=le[_[0]%le.length],window.console.log("other letters worked")),te.onload=function(){Z.drawImage(te,0,0),g(e)},te.src=ce}function t(e,n,t,i,a,l){function s(n,t){ie.onload=function(){var i=oe[_[a]%oe.length];ne=i,Z.drawImage(ie,n,t,h,m),g(e)},ie.src=c}var r=[250,500,750,1e3,900],o=[250,500,750,1e3,900],c=se[_[n]%se.length],h=r[K[t]%r.length],m=o[K[i]%r.length];_[5]>=8&&_[6]>=8?s(U[_[l]%U.length],q[_[l]%q.length]):_[5]>=8&&_[6]<=8?s(-1*U[_[l]%U.length],q[_[l]%q.length]):_[5]<=7&&_[6]<=7?s(-1*U[_[l]%U.length],-1*q[_[l]%q.length]):_[5]<=8&&_[6]>=8?s(U[_[l]%U.length],-1*q[_[l]%q.length]):(p(),window.alert("i didnt work!!"))}function i(e){t(e,4,3,4,0,5)}function a(e){t(e,3,2,1,4,2)}function l(e){t(e,2,5,3,5,2)}function s(e,n,t,i){ae.onload=function(){var a=oe[K[n]%oe.length];ne=a,Z.drawImage(ae,H[_[t]%H.length],J[_[i]%J.length]),g(e)},ae.src=re[_[17]%re.length]}function r(e){s(e,1,6,5)}function o(e){s(e,0,5,4)}function c(e){s(e,2,2,3)}function p(e,n,t,i,a,l,s){var r=oe[_[n]%oe.length];ne=r,Z.fillStyle=X[t],Z.fillRect(G[K[i]%G.length],G[K[a]%G.length],G[K[l]%G.length],G[K[s]%G.length]),g(e)}function h(e){p(e,1,_[0]%X.length,0,1,2,3)}function m(e){p(e,2,K[Q+2],1,2,3,2)}function d(e){p(e,3,K[Q-2],2,1,2,4)}function u(e){var n=oe[_[2]%oe.length];ne=n,Z.clearRect(G[1],G[2],G[3],G[0]),g(e)}function f(e,n,t,i,a,l,s){var r=oe[K[n]%oe.length];ne=r,Z.strokeStyle=X[_[t]%X.length],Z.strokeRect(G[i],G[a],G[l],G[s]),g(e)}function j(e){f(e,4,2,2,3,0,1)}function w(e){f(e,3,4,1,4,1,2)}function v(e){f(e,5,3,3,2,2,3)}function b(e){function n(n,t,i,a,l,s){function r(){for(var e=0;e<c.length;e+=4)c[e]=255-c[e],c[e+1]=255-c[e+1],c[e+2]=255-c[e+2];Z.putImageData(o,l,s)}var o=Z.getImageData(n,t,i,a),c=o.data;r(),g(e)}_[19]<=12?n(G[0],G[0],G[_[1]%G.length],G[_[1]%G.length],G[_[0]%G.length],G[_[0]%G.length]):_[19]>12&&_[19]<=24?n(G[0],G[1],G[_[1]%G.length],G[_[0]%G.length],G[0],G[0]):_[19]>24&&_[19]<=38?n(G[1],G[0],G[_[0]%G.length],G[_[1]%G.length],G[_[0]%G.length],G[_[1]%G.length]):_[19]>38&&n(G[0],G[_[0]%G.length],G[_[1]%G.length],G[_[1]%G.length],G[_[1]%G.length],G[_[1]%G.length])}function y(e,n,t,i,a,l,s,r){var o=oe[_[n]%oe.length];ne=o,Z.shadowBlur=20,Z.shadowColor=X[_[t]%X.length],Z.fillStyle=X[_[i]%X.length],Z.fillRect(G[_[a]%G.length],G[_[l]%G.length],G[_[s]%G.length],G[_[r]%G.length]),g(e)}function I(e){y(e,17,3,3,2,0,2,1)}function x(e){y(e,16,5,2,1,0,3,3)}function k(e){y(e,15,5,4,5,1,3,5)}function C(e){function n(n,t,i,a,l,s){var r,o=[G[_[3]%G.length],G[_[4]%G.length],2*G[_[3]%G.length],2*G[_[4]%G.length],-1*G[_[3]%G.length],-1*G[_[4]%G.length],-2*G[_[3]%G.length],-2*G[_[4]%G.length]];ae.onload=function(){function c(){Z.drawImage(ae,n,t,i,a,p,h,l,s)}var p=o[_[5]%o.length],h=o[_[6]%o.length];for(c(),r=2;r<_[5];r++)Z.drawImage(ae,n,t,i,a,r*p*M[1],r*h*M[1],l,s);g(e)}}var t=oe[_[15]%oe.length];ne=t,ce=_[17]<=700?le[K[2]%le.length]:_[17]>700&&_[17]<=850?se[K[2]%se.length]:_[17]>850&&_[17]<=1e3?le[K[3]%le.length]:_[17]>1e3?se[K[3]%se.length]:se[K[0]%se.length],n(G[_[2]%G.length],G[_[2]%G.length],G[_[2]%G.length],G[_[2]%G.length],G[_[2]%G.length],G[_[2]%G.length]),ae.src=ce}function R(e){function n(n,t,i,a,l,s){function r(){Z.drawImage(Z.canvas,n,t,i,a,p,h,l,s)}var o,c=[G[_[4]%G.length],G[_[5]%G.length],2*G[_[4]%G.length],2*G[_[5]%G.length],-1*G[_[4]%G.length],-1*G[_[5]%G.length],-2*G[_[4]%G.length],-2*G[_[5]%G.length]],p=c[_[6]%c.length],h=c[_[7]%c.length];for(r(),o=2;o<_[5];o++)Z.drawImage(Z.canvas,n,t,i,a,o*p*M[1],o*h*M[1],l,s);g(e)}var t=oe[_[2]%oe.length];ne=t,n(G[_[3]%G.length],G[_[4]%G.length],G[_[5]%G.length],G[_[2]%G.length],G[_[3]%G.length],G[_[4]%G.length])}function S(e,n,t,i,a,l,s,r,o,c,p,h,m,d,u,f){var j=[0,_[n],0,_[t],0],w=["#fff",X[_[i]%X.length],"#fff",X[_[a]%X.length]],v=oe[_[l]%oe.length];ne=v;var b=Z.createLinearGradient(j[_[s]%j.length],j[_[r]%j.length],j[_[o]%j.length],j[_[c]%j.length]);b.addColorStop(0,X[_[p]%X.length]),b.addColorStop(1,w[_[h]%w.length]),Z.fillStyle=b,Z.fillRect(G[_[m]%G.length],G[_[d]%G.length],F[_[u]%F.length],F[_[f]%F.length]),g(e)}function T(e){S(e,11,12,0,1,1,0,1,3,4,0,3,7,7,7,8)}function A(e){S(e,11,14,0,1,0,1,2,1,5,1,2,5,6,8,7)}function B(e){S(e,10,13,1,0,1,2,1,5,3,1,6,5,2,1,3)}function D(e){var n=oe[_[2]%oe.length];ne=n;var t=[ee,ge,ee/2,ge/2,ee/4,ge/4,.75*ee,.75*ge,ee/5,ge/5];Z.fillStyle=z[2],Z.fillRect(t[_[17]%t.length],t[_[17]%t.length],t[_[17]%t.length],t[_[17]%t.length]),g(e)}function O(){We=setInterval(E,650)}function E(){var e=document.getElementById("load-text");e.style.opacity="0"===e.style.opacity?"1":"0"}function P(){var e=Y.toDataURL("image/jpeg",1),g=N.replace(/\s+/g,"")+e;$.post("../../save",g),$.post("../../shapes",g),$(".loading").css("opacity","0"),setTimeout(function(){$(".img-wrapper").css("display","block"),setTimeout(function(){$(".img-canvas").css("opacity","1"),setTimeout(function(){$(".reload").css("opacity","1"),$(".successful").css("opacity","1")},500)},200)},600)}function L(){var g=$("#fullname").val(),n=g.indexOf(" ")+1;return g.length<=3?(window.alert("Please enter a valid full name longer than 3 letters"),!1):-1===g.indexOf(" ")?(window.alert("Please enter your first & last name"),!1):g.charCodeAt(0)>=97||g.charCodeAt(n)>=97?(window.alert("Please capitalize the first letters of your first and last name"),!1):($(".form_body").css("opacity","0"),$(".loading-div").css("display","block"),setTimeout(function(){$(".loading").css("opacity","1"),O(),$(".form_body").css("display","none")},500),void e(P))}var _=[],z=[],G=[],U=[],q=[],F=[],H=[],J=[],K=[],M=[],N,Q,V,W,X=["rgb(252, 110, 110)","rgb(40, 231, 93)","rgb(49, 146, 255)","rgb(255, 195, 250)","rgb(28, 23, 103)","rgb(255, 0, 0)","rgb(255, 102, 0)","rgb(255, 240, 0)","rgb(96, 214, 196)","rgb(50, 60, 103)","rgb(88, 64, 73)","rgb(206, 180, 190)","rgb(243, 255, 162)"],Y=document.getElementById("img-generation"),Z=Y.getContext("2d"),ee=Y.width,ge=Y.height,ne=Z.globalCompositeOperation,te=new Image,ie=new Image,ae=new Image,le=["images/pic1.jpg","images/pic2.jpg","images/pic3.jpg","images/pic4.jpg","images/pic5.jpg","images/pic6.jpg","images/pic7.jpg","images/pic8.jpg","images/pic9.jpg","images/pic10.jpg","images/pic11.jpg","images/pic12.jpg","images/pic13.jpg","images/pic14.jpg","images/pic15.jpg","images/pic16.jpg","images/pic17.jpg","images/pic18.jpg","images/pic19.jpg","images/pic20.jpg","images/pic21.jpg","images/pic22.jpg","images/pic23.jpg","images/pic24.jpg","images/pic25.jpg","images/pic26.jpg"],se=["images/red-stump.jpg","images/red-stump-2.jpg","images/weeds.jpg","images/stump-2.jpg","images/stump-3.jpg","images/cement.jpg","images/concrete.jpg","images/concrete-2.jpg","images/concrete-3.jpg","images/costarica-1.jpg","images/costarica-2.jpg","images/costarica-3.jpg","images/costarica-4.jpg","images/crop.jpg","images/root.jpg","images/seashells.jpg","images/timp-1.jpg","images/timp-2.jpg","images/timp-3.jpg","images/timp-4.jpg","images/timp-5.jpg","images/timp-6.jpg"],re=["images/grids/grid-lg.png","images/grids/grid-lg-white.png","images/grids/grid-lg-blue.png","images/grids/grid-lg-green.png","images/grids/grid-md.png","images/grids/grid-md-white.png","images/grids/grid-md-blue.png","images/grids/grid-md-green.png","images/grids/grid-sm.png","images/grids/grid-sm-white.png","images/grids/grid-sm-blue.png","images/grids/grid-sm-green.png","images/grids/grid-xl.png","images/grids/grid-xl-blue.png","images/grids/grid-xl-white.png","images/grids/grid-xl-green.png","images/grids/grid-xxl.png","images/grids/grid-xxl-blue.png","images/grids/grid-xxl-green.png","images/grids/grid-xxl-white.png"],oe=["source-over","lighter","lighten","darken","multiply","screen","overlay"],ce,pe=[0,n,i],he=[0,n,a,D,b],me=[0,n,l,b],de=[0,n,h],ue=[0,n,D,b,m],fe=[0,n,b,d],je=[0,n,b,D,I],we=[0,n,x],ve=[0,n,k,b],be=[0,n,T,D,b],ye=[0,n,b,A],Ie=[0,n,B,b],xe=[i,h,b,C,T],$e=[a,m,R,B],ke=[l,b,d,C,A],Ce=[i,D,b,I,R,A],Re=[a,b,k,C,T],Se=[l,b,D,x,D,R,B],Te=[I,B,l,R],Ae=[k,A,a,C],Be=[x,D,T,i,C],De=[A,a,h,b,R],Oe=[B,D,l,m,b,C],Ee=[T,b,i,d,R],Pe=[r,w,b,D,C,T],Le=[o,j,D,b,R,B],_e=[c,D,v,b,C,A],ze=[u,i,r,R,j],Ge=[u,a,c,C,w],Ue=[u,l,o,D,R,v],qe=[I,D,b,B,o,R],Fe=[k,A,D,b,r,C],He=[x,T,c,b,C],Je=[A,u,h,b,c],Ke=[B,b,u,D,m,o],Me=[b,T,D,u,d,r],Ne=[pe,he,me,de,ue,fe,je,we,ve,be,ye,Ie],Qe=[xe,$e,ke,Ce,Re,Se,Te,Ae,Be,De,Oe,Ee],Ve=[Pe,Le,_e,ze,Ge,Ue,qe,Fe,He,Je,Ke,Me],We;$(".submit").click(function(){L()}),$(".name").keypress(function(e){13===e.keyCode&&(e.preventDefault(),L(),window.console.log(_),window.console.log(K))})});