var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

function emspy(){};
emspy.logs="https://web.archive.org/web/20050418012940/http://logs.eresmas.com/";
emspy.sgol="https://web.archive.org/web/20050418012940/http://sgol.eresmas.com/";
emspy.partners="uol starmedia";
emspy.sep=".-.-.";
emspy.log=true;
emspy.imagen=new Image();
emspy.impressions=[];
emspy.setExt=function(cadena)
{
if(!cadena)return 'p.html';
if(cadena.indexOf('.')==-1)return cadena+'.html';
var re=/(.*)(\..*)$/
return cadena.replace(re,"$1.html");
}
emspy.getBase=function(domain,canal,paz,page)
{
return (domain?(domain+'/'):'')
+(canal?(canal+'/'):'')
+(paz?(paz+'/'):'')
+escape(this.setExt(page));
}
emspy.getUrl=function(log,first,domain,canal,paz,page,random,kw)
{
return (log?this.logs:this.sgol)
+this.getBase(domain,canal,paz,page)+'?'
+'ord='+random+(kw?('&kw='+escape(kw)):'');
}
emspy.init=function(domain,canal,paz,page,random,kw)
{
if(!random)random=(''+new Date().getTime()).substring(4)+(''+Math.random(1)).substring(2,6);
if(!domain)domain='www.wanadoo.es';
if(!canal)canal='';
if(!paz)paz='';
if(!page)page='p';
if(!kw)kw='';
this.domain=domain;
this.canal=canal;
this.paz=paz;
this.page=page;
this.kw=kw;
this.src=this.getUrl(this.log,this.first,this.domain,this.canal,this.paz,this.page,random,this.kw);
}
emspy.initNoLog=function(domain,canal,paz,page,random,kw)
{
this.log=false;
this.init(domain,canal,paz,page,random,kw);
}
emspy.get=function()
{
if((typeof noLog!="undefined")&&noLog)
    return;
this.imagen.src=this.src;
}
emspy.reload=function(domain,canal,paz,page,random,kw)
{
this.init(domain?domain:this.domain,canal?canal:this.canal,paz?paz:this.paz,page?page:this.page,null,kw?kw:this.kw);
this.get();
}
emspy.doJump=function()
{
if(++this.cont==5)this.go=true;
if(this.link){
if(this.click.complete||this.go){ 
if(this.other){if ((typeof this.name=='undefined')||(typeof this.features=='undefined'))window.open(this.link);else window.open(this.link,this.name,this.features);}else top.location.href=this.link;
}else 
this.tO = window.setTimeout ( "emspy.doJump()" , 1000 );
}
}
emspy.jump=function(link,other,domain,canal,paz,page,name,features)
{
if(this.tO)window.clearTimeout(this.tO);
this.click=new Image();
this.click.src=this.sgol+"C/"+this.getBase(this.domain,this.canal,this.paz,this.page)+this.sep+
this.getBase(domain,canal,paz,page)+'?'+"jumpTo="+(link.indexOf('http://')==0?link.substr(7):link)+
"&ord="+(''+new Date().getTime()).substring(4)+(''+Math.random(1)).substring(2,6);
this.name=name;
this.features=features;
this.link=link;
this.other=other;
this.go=false;
this.cont=0;
this.tO=window.setTimeout("emspy.doJump()",1000);
}
emspy.addImpression=function(domain,canal,paz,page)
{
var imagen=new Image();
imagen.src=this.sgol+"I/"+this.getBase(this.domain,this.canal,this.paz,this.page)+this.sep+
this.getBase(domain,canal,paz,page);
this.impressions[this.impressions.length]=imagen;
}
if((typeof noLog!="undefined")&&noLog)emspy.log=false;
emspy.domain=(typeof logInternacional!="undefined")?((logInternacional.constructor==Array)?logInternacional[parseInt(Math.random()*logInternacional.length)]:logInternacional):((typeof logDomain!="undefined")?logDomain:"");
if(window.name!=''&&emspy.partners.indexOf(window.name)!=-1)emspy.domain=window.name+"."+emspy.domain;
emspy.init(emspy.domain,
(typeof logChannel!="undefined")?logChannel:"",
(typeof logPath!="undefined")?logPath:"",
(typeof logPage!="undefined")?logPage:"",
null,(typeof kw!="undefined")?kw:"");
emspy.get();


}
/*
     FILE ARCHIVED ON 01:29:40 Apr 18, 2005 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 04:11:46 Apr 14, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.469
  exclusion.robots: 0.019
  exclusion.robots.policy: 0.008
  esindex: 0.01
  cdx.remote: 7.623
  LoadShardBlock: 155.798 (3)
  PetaboxLoader3.datanode: 138.956 (4)
  PetaboxLoader3.resolve: 389.689 (2)
  load_resource: 499.337
*/