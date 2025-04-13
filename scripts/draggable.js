// Coded by TheZillion in a quarter of an hour. [thezillion.wordpress.com]
// https://thezillion.wordpress.com/2012/08/29/javascript-draggable-no-jquery/
function $(el){
    return document.getElementById(el);
}
var tzdragg = function(){
    return {
        move : function(divid,xpos,ypos){
            var a = $(divid);
            $(divid).style.left = xpos + 'px';
            $(divid).style.top = ypos + 'px';
        },
        startMoving : function(evt){
            evt = evt || window.event;
            var posX = evt.clientX,
                posY = evt.clientY,
                a = $('elem'),
            divTop = a.style.top,
            divLeft = a.style.left;
            divTop = divTop.replace('px','');
            divLeft = divLeft.replace('px','');
            var diffX = posX - divLeft,
                diffY = posY - divTop;
            document.onmousemove = function(evt){
                evt = evt || window.event;
                var posX = evt.clientX,
                    posY = evt.clientY,
                    aX = posX - diffX,
                    aY = posY - diffY;
                tzdragg.move('elem',aX,aY);
            }
        },
        stopMoving : function(){
            var a = document.createElement('script');
            document.onmousemove = function(){}
        },
    }
}();