$(document).ready(function(){function g(g){N=document.getElementById("fullname").value;for(var n=N.length,t=0,i=0;n>i;i++)K.push(N.charCodeAt(i)),t+=K[i];Q=K.indexOf(32),V=K[0],W=K[Q+1];var a=V-65,l=W-65,s=Q,r=n-Q-1,c=100*s,o=100*r,p=c/2,h=o/2,m=.25*c,d=.25*o,u=.75*c,f=.75*o,j=t/n,v,b=36*a,w=36*l,y=20*a,I=20*l,x=a+l,k=.75*b,C=.75*w,R=.75*y,S=.75*I,T=1.25*b,B=1.25*w,D=1.25*y,O=1.25*I;!function(){K[1]<103&&(A=.25),K[1]>=103&&K[1]<107&&(A=.5),K[1]>=107&&K[1]<112&&(A=.75),K[1]>=112&&K[1]<117&&(A=.85),K[1]>=117&&(A=1)}();var A,E=["rgba(252, 110, 110, "+A+")","rgba(40, 231, 93, "+A+")","rgba(49, 146, 255, "+A+")","rgba(255, 195, 250, "+A+")","rgba(28, 23, 103, "+A+")","rgba(255, 0, 0, "+A+")","rgba(255, 102, 0, "+A+")","rgba(255, 240, 0, "+A+")","rgba(96, 214, 196, "+A+")","rgba(50, 60, 103, "+A+")","rgba(88, 64, 73, "+A+")","rgba(206, 180, 190, "+A+")","rgba(243, 255, 162, "+A+")"];z.push(E[0],E[1],E[2],E[3],E[4],E[5],E[6],E[7],E[8],E[9],E[10],E[11],E[12]),_.push(a,l,V,W,n,s,r,c,o,p,h,m,d,u,f,A,j,t,v,x),U.push(b,w,k,C,T,B),q.push(y,I,R,S,D,O),G.push(b,y,w,I,k,R,C,S,T,D,B,O),F.push(-1*b,b,-1*y,y,-1*w,w,-1*I,I,-1*k,k,-1*R,R,-1*C,C,-1*S,S,-1*T,T,-1*D,D,-1*B,B,-1*O,O),H.push(-1*b,b,-1*w,w,-1*k,k,-1*C,C,-1*T,T,-1*B,B),J.push(-1*y,y,-1*I,I,-1*R,R,-1*S,S,-1*D,D,-1*O,O);var P=.01*_[0],L=.1*_[0],X=_[0],Y=10*_[0],Z=100*_[0];M.push(P,L,X,Y,Z),function(){var g=parseInt(_[17]%Ng.length),n=parseInt(_[1]%Qg.length),t=parseInt(_[0]%Vg.length),i=parseInt(_[0]%Qg.length),a=parseInt(_[1]%Vg.length),l=Ng[g].concat(Qg[n]).concat(Vg[t]).concat(Qg[i]).concat(Vg[a]);e(l),window.console.log("i worked")}(),setTimeout(function(){g()},6e3)}function e(g){g[0]!==g.length-1&&g[++g[0]](g)}function n(g){og=lg[_[0]%lg.length],tg.onload=function(){Z.drawImage(tg,0,0),e(g)},tg.src=og}function t(g,n,t,i,a,l){function s(n,t){ig.onload=function(){var i=cg[_[a]%cg.length];ng=i,Z.drawImage(ig,n,t,h,m),e(g)},ig.src=o}var r=[250,500,750,1e3,900],c=[250,500,750,1e3,900],o=sg[_[n]%sg.length],h=r[K[t]%r.length],m=c[K[i]%r.length];_[5]>=8&&_[6]>=8?s(U[_[l]%U.length],q[_[l]%q.length]):_[5]>=8&&_[6]<=8?s(-1*U[_[l]%U.length],q[_[l]%q.length]):_[5]<=7&&_[6]<=7?s(-1*U[_[l]%U.length],-1*q[_[l]%q.length]):_[5]<=8&&_[6]>=8?s(U[_[l]%U.length],-1*q[_[l]%q.length]):(p(),window.alert("i didnt work!!"))}function i(g){t(g,4,3,4,0,5)}function a(g){t(g,3,2,1,4,2)}function l(g){t(g,2,5,3,5,2)}function s(g,n,t,i){ag.onload=function(){var a=cg[K[n]%cg.length];ng=a,Z.drawImage(ag,H[_[t]%H.length],J[_[i]%J.length]),e(g)},ag.src=rg[_[17]%rg.length]}function r(g){s(g,1,6,5)}function c(g){s(g,0,5,4)}function o(g){s(g,2,2,3)}function p(g,n,t,i,a,l,s){var r=cg[_[n]%cg.length];ng=r,Z.fillStyle=X[t],Z.fillRect(G[K[i]%G.length],G[K[a]%G.length],G[K[l]%G.length],G[K[s]%G.length]),e(g)}function h(g){p(g,1,_[0]%X.length,0,1,2,3)}function m(g){p(g,2,K[Q+2],1,2,3,2)}function d(g){p(g,3,K[Q-2],2,1,2,4)}function u(g){var n=cg[_[2]%cg.length];ng=n,Z.clearRect(G[1],G[2],G[3],G[0]),e(g)}function f(g,n,t,i,a,l,s){var r=cg[K[n]%cg.length];ng=r,Z.strokeStyle=X[_[t]%X.length],Z.strokeRect(G[i],G[a],G[l],G[s]),e(g)}function j(g){f(g,4,2,2,3,0,1)}function v(g){f(g,3,4,1,4,1,2)}function b(g){f(g,5,3,3,2,2,3)}function w(g){function n(n,t,i,a,l,s){function r(){for(var g=0;g<o.length;g+=4)o[g]=255-o[g],o[g+1]=255-o[g+1],o[g+2]=255-o[g+2];Z.putImageData(c,l,s)}var c=Z.getImageData(n,t,i,a),o=c.data;r(),e(g)}_[19]<=12?n(G[0],G[0],G[_[1]%G.length],G[_[1]%G.length],G[_[0]%G.length],G[_[0]%G.length]):_[19]>12&&_[19]<=24?n(G[0],G[1],G[_[1]%G.length],G[_[0]%G.length],G[0],G[0]):_[19]>24&&_[19]<=38?n(G[1],G[0],G[_[0]%G.length],G[_[1]%G.length],G[_[0]%G.length],G[_[1]%G.length]):_[19]>38&&n(G[0],G[_[0]%G.length],G[_[1]%G.length],G[_[1]%G.length],G[_[1]%G.length],G[_[1]%G.length])}function y(g,n,t,i,a,l,s,r){var c=cg[_[n]%cg.length];ng=c,Z.shadowBlur=20,Z.shadowColor=X[_[t]%X.length],Z.fillStyle=X[_[i]%X.length],Z.fillRect(G[_[a]%G.length],G[_[l]%G.length],G[_[s]%G.length],G[_[r]%G.length]),e(g)}function I(g){y(g,17,3,3,2,0,2,1)}function x(g){y(g,16,5,2,1,0,3,3)}function k(g){y(g,15,5,4,5,1,3,5)}function C(g){function n(n,t,i,a,l,s){var r,c=[G[_[3]%G.length],G[_[4]%G.length],2*G[_[3]%G.length],2*G[_[4]%G.length],-1*G[_[3]%G.length],-1*G[_[4]%G.length],-2*G[_[3]%G.length],-2*G[_[4]%G.length]];ag.onload=function(){function o(){Z.drawImage(ag,n,t,i,a,p,h,l,s)}var p=c[_[5]%c.length],h=c[_[6]%c.length];for(o(),r=2;r<_[5];r++)Z.drawImage(ag,n,t,i,a,r*p*M[1],r*h*M[1],l,s);e(g)}}var t=cg[_[15]%cg.length];ng=t,og=_[17]<=700?lg[K[2]%lg.length]:_[17]>700&&_[17]<=850?sg[K[2]%sg.length]:_[17]>850&&_[17]<=1e3?lg[K[3]%lg.length]:_[17]>1e3?sg[K[3]%sg.length]:sg[K[0]%sg.length],n(G[_[2]%G.length],G[_[2]%G.length],G[_[2]%G.length],G[_[2]%G.length],G[_[2]%G.length],G[_[2]%G.length]),ag.src=og}function R(g){function n(n,t,i,a,l,s){function r(){Z.drawImage(Z.canvas,n,t,i,a,p,h,l,s)}var c,o=[G[_[4]%G.length],G[_[5]%G.length],2*G[_[4]%G.length],2*G[_[5]%G.length],-1*G[_[4]%G.length],-1*G[_[5]%G.length],-2*G[_[4]%G.length],-2*G[_[5]%G.length]],p=o[_[6]%o.length],h=o[_[7]%o.length];for(r(),c=2;c<_[5];c++)Z.drawImage(Z.canvas,n,t,i,a,c*p*M[1],c*h*M[1],l,s);e(g)}var t=cg[_[2]%cg.length];ng=t,n(G[_[3]%G.length],G[_[4]%G.length],G[_[5]%G.length],G[_[2]%G.length],G[_[3]%G.length],G[_[4]%G.length])}function S(g,n,t,i,a,l,s,r,c,o,p,h,m,d,u,f){var j=[0,_[n],0,_[t],0],v=["#fff",X[_[i]%X.length],"#fff",X[_[a]%X.length]],b=cg[_[l]%cg.length];ng=b;var w=Z.createLinearGradient(j[_[s]%j.length],j[_[r]%j.length],j[_[c]%j.length],j[_[o]%j.length]);w.addColorStop(0,X[_[p]%X.length]),w.addColorStop(1,v[_[h]%v.length]),Z.fillStyle=w,Z.fillRect(G[_[m]%G.length],G[_[d]%G.length],F[_[u]%F.length],F[_[f]%F.length]),e(g)}function T(g){S(g,11,12,0,1,1,0,1,3,4,0,3,7,7,7,8)}function B(g){S(g,11,14,0,1,0,1,2,1,5,1,2,5,6,8,7)}function D(g){S(g,10,13,1,0,1,2,1,5,3,1,6,5,2,1,3)}function O(g){var n=cg[_[2]%cg.length];ng=n;var t=[gg,eg,gg/2,eg/2,gg/4,eg/4,.75*gg,.75*eg,gg/5,eg/5];Z.fillStyle=z[2],Z.fillRect(t[_[17]%t.length],t[_[17]%t.length],t[_[17]%t.length],t[_[17]%t.length]),e(g)}function A(){Wg=setInterval(E,650)}function E(){var g=document.getElementById("load-text");g.style.opacity="0"===g.style.opacity?"1":"0"}function P(){var g=Y.toDataURL("image/jpeg",1),e=N.replace(/\s+/g,"")+g;$.post("../../save",e),$(".loading").css("opacity","0"),setTimeout(function(){$(".img-wrapper").css("display","block"),setTimeout(function(){$(".img-canvas").css("opacity","1"),setTimeout(function(){$(".reload").css("opacity","1"),$(".successful").css("opacity","1")},500)},200)},600)}function L(){var e=$("#fullname").val(),n=e.indexOf(" ")+1;return e.length<=3?(window.alert("Please enter a valid full name longer than 3 letters"),!1):-1===e.indexOf(" ")?(window.alert("Please enter your first & last name"),!1):e.charCodeAt(0)>=97||e.charCodeAt(n)>=97?(window.alert("Please capitalize the first letters of your first and last name"),!1):($(".form_body").css("opacity","0"),$(".loading-div").css("display","block"),setTimeout(function(){$(".loading").css("opacity","1"),A(),$(".form_body").css("display","none")},500),void g(P))}var _=[],z=[],G=[],U=[],q=[],F=[],H=[],J=[],K=[],M=[],N,Q,V,W,X=["rgb(252, 110, 110)","rgb(40, 231, 93)","rgb(49, 146, 255)","rgb(255, 195, 250)","rgb(28, 23, 103)","rgb(255, 0, 0)","rgb(255, 102, 0)","rgb(255, 240, 0)","rgb(96, 214, 196)","rgb(50, 60, 103)","rgb(88, 64, 73)","rgb(206, 180, 190)","rgb(243, 255, 162)"],Y=document.getElementById("img-generation"),Z=Y.getContext("2d"),gg=Y.width,eg=Y.height,ng=Z.globalCompositeOperation,tg=new Image,ig=new Image,ag=new Image,lg=["images/pic1.jpg","images/pic2.jpg","images/pic3.jpg","images/pic4.jpg","images/pic5.jpg","images/pic6.jpg","images/pic7.jpg","images/pic8.jpg","images/pic9.jpg","images/pic10.jpg","images/pic11.jpg","images/pic12.jpg","images/pic13.jpg","images/pic14.jpg","images/pic15.jpg","images/pic16.jpg","images/pic17.jpg","images/pic18.jpg","images/pic19.jpg","images/pic20.jpg","images/pic21.jpg","images/pic22.jpg","images/pic23.jpg","images/pic24.jpg","images/pic25.jpg","images/pic26.jpg"],sg=["images/red-stump.jpg","images/red-stump-2.jpg","images/weeds.jpg","images/stump-2.jpg","images/stump-3.jpg","images/cement.jpg","images/concrete.jpg","images/concrete-2.jpg","images/concrete-3.jpg","images/costarica-1.jpg","images/costarica-2.jpg","images/costarica-3.jpg","images/costarica-4.jpg","images/crop.jpg","images/root.jpg","images/seashells.jpg","images/timp-1.jpg","images/timp-2.jpg","images/timp-3.jpg","images/timp-4.jpg","images/timp-5.jpg","images/timp-6.jpg"],rg=["images/grids/grid-lg.png","images/grids/grid-lg-white.png","images/grids/grid-lg-blue.png","images/grids/grid-lg-green.png","images/grids/grid-md.png","images/grids/grid-md-white.png","images/grids/grid-md-blue.png","images/grids/grid-md-green.png","images/grids/grid-sm.png","images/grids/grid-sm-white.png","images/grids/grid-sm-blue.png","images/grids/grid-sm-green.png","images/grids/grid-xl.png","images/grids/grid-xl-blue.png","images/grids/grid-xl-white.png","images/grids/grid-xl-green.png","images/grids/grid-xxl.png","images/grids/grid-xxl-blue.png","images/grids/grid-xxl-green.png","images/grids/grid-xxl-white.png"],cg=["source-over","lighter","lighten","darken","multiply","screen","overlay"],og,pg=[0,n,i],hg=[0,n,a,O,w],mg=[0,n,l,w],dg=[0,n,h],ug=[0,n,O,w,m],fg=[0,n,w,d],jg=[0,n,w,O,I],vg=[0,n,x],bg=[0,n,k,w],wg=[0,n,T,O,w],yg=[0,n,w,B],Ig=[0,n,D,w],xg=[i,h,w,C,T],$g=[a,m,R,D],kg=[l,w,d,C,B],Cg=[i,O,w,I,R,B],Rg=[a,w,k,C,T],Sg=[l,w,O,x,O,R,D],Tg=[I,D,l,R],Bg=[k,B,a,C],Dg=[x,O,T,i,C],Og=[B,a,h,w,R],Ag=[D,O,l,m,w,C],Eg=[T,w,i,d,R],Pg=[r,v,w,O,C,T],Lg=[c,j,O,w,R,D],_g=[o,O,b,w,C,B],zg=[u,i,r,R,j],Gg=[u,a,o,C,v],Ug=[u,l,c,O,R,b],qg=[I,O,w,D,c,R],Fg=[k,B,O,w,r,C],Hg=[x,T,o,w,C],Jg=[B,u,h,w,o],Kg=[D,w,u,O,m,c],Mg=[w,T,O,u,d,r],Ng=[pg,hg,mg,dg,ug,fg,jg,vg,bg,wg,yg,Ig],Qg=[xg,$g,kg,Cg,Rg,Sg,Tg,Bg,Dg,Og,Ag,Eg],Vg=[Pg,Lg,_g,zg,Gg,Ug,qg,Fg,Hg,Jg,Kg,Mg],Wg;$(".submit").click(function(){L()}),$(".name").keypress(function(g){13===g.keyCode&&(g.preventDefault(),L())})});