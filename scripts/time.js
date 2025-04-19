
function tS(){ x=new Date(); x.setTime(x.getTime()); return x; } 
function lZ(x){ return (x>9)?x:'0'+x; } 
function dT(){ if(fr==0){ fr=1; document.write('<font size=2 face=Times new roman color=#FF9122><span id="tP">'+eval(oT)+'</span></font>'); } tP.innerText=eval(oT); setTimeout('dT()',1000); } 
var fr=0,oT="' '+lZ(tS().getHours())+':'+lZ(tS().getMinutes())+':'+lZ(tS().getSeconds())+' '";

  