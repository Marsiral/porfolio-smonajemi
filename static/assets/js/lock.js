// document.addEventListener('contextmenu', function(e) {      
//       e.preventDefault();
//   });

// !function() {
// 	function detectDevTool(allow) {
//   	if(isNaN(+allow)) allow = 1;
//     var start = +new Date();
//     debugger;
//     var end = +new Date();
    
//     if(isNaN(start) || isNaN(end) || end - start > allow) {
//       alert('DEVTOOLS detected. You will be re-directed to google!');
//       window.location.replace("https://www.google.com");
//     }
//   }
//   if(window.attachEvent) {
//   	if (document.readyState === "complete" || document.readyState === "interactive") {
//     	detectDevTool();
//       window.attachEvent('onresize', detectDevTool);
//       window.attachEvent('onmousemove', detectDevTool);
//       window.attachEvent('onfocus', detectDevTool);
//       window.attachEvent('onblur', detectDevTool);
//     } else {
//     	setTimeout(argument.callee, 0);
//     }
//   } else {
//   	window.addEventListener('load', detectDevTool);
//     window.addEventListener('resize', detectDevTool);
//     window.addEventListener('mousemove', detectDevTool);
//     window.addEventListener('focus', detectDevTool);
//     window.addEventListener('blur', detectDevTool);
//   }
// }();

//   document.onkeydown = function(e) {
//     if(e.keyCode == 123) {
//        return false;
//     }
//     if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
//        return false;
//     }
//     if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
//        return false;
//     }
//     if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
//        return false;
//     }
//     if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
//        return false;
//     }
//   }
//   document.onkeypress = function(e) {
//    if(e.keyCode == 123) {
//       return false;
//    }
//    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
//       return false;
//    }
//    if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
//       return false;
//    }
//    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
//       return false;
//    }
//    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
//       return false;
//    }
//  }
//  document.onmousedown = function(e) {
//    if(e.keyCode == 123) {
//       return false;
//    }
//    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
//       return false;
//    }
//    if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
//       return false;
//    }
//    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
//       return false;
//    }
//    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
//       return false;
//    }
//  }
  
  
  
var div = document.createElement('div');
Object.defineProperty(div,'id',{get:function(){
      window.location.replace("https://www.google.com");
}});
setTimeout(()=>console.log(div),1000)