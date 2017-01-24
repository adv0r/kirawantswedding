var lastAppliedTilt = 0;
var minTilt = 6;
var maxAlpha = 90;

function initMobile(){
	if (window.DeviceOrientationEvent) {
		$("#dogeyeleft").hide();
		$("#dogeyeright").hide();
	  	window.addEventListener('deviceorientation', function(eventData) {
	    // gamma is the left-to-right tilt in degrees, where right is positive
	    var tiltLR = eventData.gamma;

	    // alpha is the compass direction the device is facing in degrees
	    var dir = eventData.alpha

	    // call our orientation event handler
	    deviceOrientationHandler(tiltLR, 0, dir);
	  }, false);
	} 
}


function deviceOrientationHandler(tiltLR, tiltFB, dir){
	if(Math.abs(lastAppliedTilt - tiltLR)>minTilt) {
		if(tiltLR > -40 && tiltLR < 40){
			lastAppliedTilt = tiltLR;
			tiltLR = tiltLR/2; //reduce rotation
			var logo = document.getElementById("rotatingImg");
			logo.style.webkitTransform ="rotate("+ tiltLR +"deg)";
			logo.style.transform ="rotate("+ tiltLR +"deg)";
		  }

	}
}
