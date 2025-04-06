// Floating Sidebar Menu Script from Flooble.com
// For more information, visit 
//	http://www.flooble.com/scripts/sidebar.php
// Copyright 2003 Animus Pactum Consulting inc.
//---------------------------------------------------------
    var ie = false;
    var open = true;
    var oldwidth = -1;
    if (document.all) { ie = true; }

    function getObj(id) {
        if (ie) { return document.all[id]; }
        else {    return document.getElementById(id);    }
    }
    
    function toggleSidebar() {
        var sidebar = getObj('sidebarcontents');
        var menu = getObj('sidebarmenu');
        var arrow = getObj('sidearrow');
        if (open) {
        	var sidec = getObj('sidebar');            
            var h = sidec.scrollHeight;
            if (oldwidth < 0) { 
            	oldwidth = sidebar.scrollWidth;
            }
            sidebar.style.display = 'none';
            td = getObj('sidebartd');
            td.style.width = 0;         
            arrow.innerHTML = '>';
            //alert(h + ' - ' + sidec.scrollHeight);
            sidec.style.height = h;
            open = false;
        } else {
            sidebar.style.display = 'block';
            sidebar.style.width = oldwidth;
            arrow.innerHTML = '<';
            open = true;
        }
        getObj('focuser').focus();
        
    }    
    
    function setSidebarTop() {
        //alert('hoy');
        var sidec = getObj('sidebar');
        sidec.style.top = 10 + document.body.scrollTop;
        setTimeout('setSidebarTop()', 10);
    }
    
    setTimeout('setSidebarTop();', 2000);