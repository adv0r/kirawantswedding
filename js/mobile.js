var lastAppliedTilt = 0;
var treshold = 10;
function init(){
	if (window.DeviceOrientationEvent) {
	  document.getElementById("doEvent").innerHTML = "DeviceOrientation";
	  // Listen for the deviceorientation event and handle the raw data
	  window.addEventListener('deviceorientation', function(eventData) {
	    // gamma is the left-to-right tilt in degrees, where right is positive
	    var tiltLR = eventData.gamma;

	    // beta is the front-to-back tilt in degrees, where front is positive
	    var tiltFB = 0;

	    // alpha is the compass direction the device is facing in degrees
	    var dir = eventData.alpha

	    // call our orientation event handler
	    deviceOrientationHandler(tiltLR, 0, dir);
	  }, false);
	} else {
	  document.getElementById("doEvent").innerHTML = "Not supported."
	}
}


function deviceOrientationHandler(tiltLR, tiltFB, dir){
	document.getElementById("doTiltLR").innerHTML = Math.round(tiltLR);
	document.getElementById("doTiltFB").innerHTML = Math.round(tiltFB);

	document.getElementById("doDirection").innerHTML = Math.round(lastAppliedTilt);


	if(Math.abs(lastAppliedTilt - tiltLR)>threshold) {
		lastAppliedTilt = tiltLR;
		var logo = document.getElementById("imgLogo");
		logo.style.webkitTransform =
		  "rotate("+ tiltLR +"deg) rotate3d(1,0,0, "+ (tiltFB*-1)+"deg)";
		logo.style.MozTransform = "rotate("+ tiltLR +"deg)";
		logo.style.transform =
		  "rotate("+ tiltLR +"deg) rotate3d(1,0,0, "+ (tiltFB*-1)+"deg)";

	}
	// Apply the transform to the image


	// Parameters below only work in portait mode!!! 

	// Occhi In posizione centrale  tiltLR : 0 , tiltFB : 50
	// Occhi max a destra : tiltLR > 40
	// Occhi max a sinistra : tiltLR < -40
	// Occhi in alto : tiltFB > 80
	// Occhi in basso : tiltFB < 25

}