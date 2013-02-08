window.addEventListener("load",function(){
function _1(e){
console.log(e);
};
function _2(_3){
function _4(_5,_6){
function _7(_8){
return (_8/180)*Math.PI;
};
var _9=_5.latitude;
var _a=_5.longitude;
var _b=_6.latitude;
var _c=_6.longitude;
var _d=6371;
var _e=_7(_b-_9);
var _f=_7(_c-_a);
_9=_7(_9);
_b=_7(_b);
var a=Math.sin(_e/2)*Math.sin(_e/2)+Math.sin(_f/2)*Math.sin(_f/2)*Math.cos(_9)*Math.cos(_b);
var c=2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));
var d=_d*c*1000;
return d;
};
var _10={latitude:32.22181,longitude:-110.931137};
var _11={latitude:_3.coords.latitude,longitude:_3.coords.longitude};
var _12=_4(_10,_11);
if(_12<20){
_13();
}
};
function _13(){
var _14=document.createElement("a");
_14.href="#";
_14.textContent="<<ENTER>>";
_14.addEventListener("click",function(){
var _15=new Date(2012,8,30,16);
var now=new Date();
var _16=Math.round((now.getTime()-_15.getTime())/(1000*60*60*24));
var _17=".."+parseInt(_16)+"....";
var _18=[_17,"..DAYS...","..SINCE..","..EPOCH.."].join("\n");
var _19=document.createElement("pre");
_19.textContent=_18;
_19.setAttribute("id","epoch");
var _1a=document.getElementById("enter");
_1a.parentNode.removeChild(_1a);
document.getElementById("peculiarplant").appendChild(_19);
});
var pre=document.createElement("pre");
pre.setAttribute("id","enter");
pre.appendChild(_14);
bodydiv=document.getElementById("peculiarplant");
bodydiv.appendChild(pre);
};
function _1b(_1c){
var _1d={enableHighAccuracy:true};
navigator.geolocation.getCurrentPosition(_1c,_1,_1d);
};
if(Modernizr.geolocation){
_1b(_2);
}else{
console.log("Geolocation not enabled.");
}
});

