function locationHashChanged() {
  
    if (top.location.hash === "#landing") {  
      document.getElementById('home').src = '/start/landing.html';
    }
    
  }
  
  window.top.onload = locationHashChanged; //execute hash function when the window loads