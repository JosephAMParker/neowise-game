function isMobile() {
  try{ document.createEvent("TouchEvent"); return true; }
  catch(e){ return false; }
}

var setFullScreen = function( ) { 
  var canvas = document.getElementsByTagName('canvas')[0];

  if(!isMobile()){
    canvas.width = 500;
    canvas.height = 800;
  } else 
  {
    canvas.width = document.body.clientWidth-1; //document.width is obsolete
    canvas.height = document.body.clientHeight-1; //document.height is obsolete 
  }

};  

var refreshIntervalId = setInterval(function(){ 

    var el = document.getElementsByTagName('canvas');
    if(el.length > 0){
        clearInterval(refreshIntervalId);
        setFullScreen();
    }

}, 100);


function handleMouseDown(evt) {
  evt.preventDefault();
  evt.stopPropagation();
  window.focus();
}

function handleMouseUp(evt) {
  evt.preventDefault();
  evt.stopPropagation();
}
document.getElementById('embed-html').addEventListener('mousedown', handleMouseDown, false);
document.getElementById('embed-html').addEventListener('mouseup', handleMouseUp, false); 