document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  });

  document.onkeydown = function(e) {
    if(e.key == 123) {
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.key == 'I'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.key == 'C'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.key == 'J'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.key == 'U'.charCodeAt(0)) {
       return false;
    }
  }

  document.onkeypress  = function(e) {
   if(e.key == 123) {
      return false;
   }
   if(e.ctrlKey && e.shiftKey && e.key == 'I'.charCodeAt(0)) {
      return false;
   }
   if(e.ctrlKey && e.shiftKey && e.key == 'C'.charCodeAt(0)) {
      return false;
   }
   if(e.ctrlKey && e.shiftKey && e.key == 'J'.charCodeAt(0)) {
      return false;
   }
   if(e.ctrlKey && e.key == 'U'.charCodeAt(0)) {
      return false;
   }
 }
   document.onmousedown = function(e) {
      if(e.key == 123) {
         return false;
      }
      if(e.ctrlKey && e.shiftKey && e.key == 'I'.charCodeAt(0)) {
         return false;
      }
      if(e.ctrlKey && e.shiftKey && e.key == 'C'.charCodeAt(0)) {
         return false;
      }
      if(e.ctrlKey && e.shiftKey && e.key == 'J'.charCodeAt(0)) {
         return false;
      }
      if(e.ctrlKey && e.key == 'U'.charCodeAt(0)) {
         return false;
      }
    }
