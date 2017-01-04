// If you use this code, please link to this pen (cdpn.io/rkcjt). Thanks :)

var DrawEye = function(eyecontainer, pupil, eyeposx, eyeposy){
  // Initialise core variables
  var $pupil = $(pupil);
  var xp = 0, yp = 0;
  var r = $pupil.width()/2;
  var $eyecontainer = $(eyecontainer);
  var center = {
    x: $eyecontainer.width()/2 - r,
    y: $eyecontainer.height()/2 - r
  };
  var distanceThreshold = $eyecontainer.width()/2 - r;
  var mouseX = 0, mouseY = 0;

  $(window).on('resize', function () {
    r = $pupil.width()/2;
    center = {
      x: $eyecontainer.width()/2 - r,
      y: $eyecontainer.height()/2 - r
    };
    distanceThreshold = $eyecontainer.width()/2 - r;
  });
  // Listen for mouse movement
  $(window).mousemove(function(e){
    var d = {
      x: e.pageX - r - eyeposx - center.x,
      y: e.pageY - r - eyeposy - center.y
    };
    var distance = Math.sqrt(d.x*d.x + d.y*d.y);
    if (distance < distanceThreshold) {
      mouseX = e.pageX - eyeposx - r;
      mouseY = e.pageY - eyeposy - r;
    } else {
      mouseX = d.x / distance * distanceThreshold + center.x;
      mouseY = d.y / distance * distanceThreshold + center.y;
    }
  });

  // Update pupil location
  var loop = setInterval(function(){
    // change 1 to alter damping/momentum - higher is slower
    xp += (mouseX - xp) / 1;
    yp += (mouseY - yp) / 1;
    $pupil.css({left:xp, top:yp});
  }, 1);
};

var chihuahuaeye1 = new DrawEye("#dogeyeleft", "#dogpupilleft", 175, 261);
var chihuahuaeye2 = new DrawEye("#dogeyeright", "#dogpupilright", 210, 259);
