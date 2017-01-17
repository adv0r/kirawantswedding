function init(){
	if (window.DeviceOrientationEvent) {
		// Listen for the deviceorientation event and handle the raw data
		window.addEventListener('deviceorientation', function(eventData) {
		// gamma is the left-to-right tilt in degrees, where right is positive
		var tiltLR = eventData.gamma;

	    // call our orientation event handler
	    deviceOrientationHandler(tiltLR);
	  }, false);
	} else {
	  	document.getElementById("doEvent").innerHTML = "Not supported."
	}
}


function deviceOrientationHandler(tiltLR, tiltFB, dir){
	document.getElementById("doTiltLR").innerHTML = Math.round(tiltLR);

	// Apply the transform to the image
	var logo = document.getElementById("imgLogo");
	logo.style.webkitTransform ="rotate("+ tiltLR +"deg) rotate3d(1,0,0, 0deg)";
	logo.style.MozTransform = "rotate("+ tiltLR +"deg)";
	logo.style.transform = "rotate("+ tiltLR +"deg) rotate3d(1,0,0,0deg)";

	// Parameters below only work in portait mode!!! 

	// Occhi In posizione centrale  tiltLR : 0 , tiltFB : 50
	// Occhi max a destra : tiltLR > 40
	// Occhi max a sinistra : tiltLR < -40
	// Occhi in alto : tiltFB > 80
	// Occhi in basso : tiltFB < 25

}