// If you use this code, please link to this pen (cdpn.io/rkcjt). Thanks :)
'use strict';

$( document ).ready(function() {
  initMobile();
  
  var chihuahuaeye1 = new DrawEye("#dogeyeleft", "#dogpupilleft");
  var chihuahuaeye2 = new DrawEye("#dogeyeright", "#dogpupilright");

  setTimeout(function(){
          var shakeoptions = {  distance: 10, times: 6 , direction : 'down' };
        $("#personalcodediv").effect("shake",shakeoptions);
        }
      , 6000);


  //real time form validation
  var passInput = document.getElementById("personalcodeinput");
  passInput.oninput = function(){
    //console.log(this.value);
    var btnBaseText = "Follow the Sun ☀ ";
    if(isCodeValid(this.value)){
        var tadaAudio = new Audio('audio/tada.mp3');
        tadaAudio.play();
        var invitees = codeTable[this.value.toUpperCase()][0];
        console.log("Welcome "+invitees);

        $('#sunbtn').prop('disabled', false);
        $('#sunbtn').addClass('glow-please');
        var shakeoptions = {  distance: 40, times: 1 };
        $("#sunbtn").effect("shake",shakeoptions);
        $('#personalcodeinput').blur();
        //$("#sunbtn").toggle("highlight");
        //setTimeout(function(){ $("#sunbtn" ).toggle("highlight"); } , 400);

        //Text to speech
        //var msg = new SpeechSynthesisUtterance("Welcome "+invitees);
        //window.speechSynthesis.speak(msg);
    }
    else {
        $('#sunbtn').prop('disabled', true);
        $('#sunbtn').removeClass('glow-please');
    }
  };
});

function hideSignup(){
  $("#signup").hide();
  $("#welcome-text").hide();
}

var DrawEye = function(eyecontainer, pupil){
  // Initialise core variables
  this.$pupil = $(pupil);
  this.xp = 0, this.yp = 0;
  this.r = this.$pupil.width()/2;
  this.$eyecontainer = $(eyecontainer);
  this.eyeposx = this.$eyecontainer.offset().left;
  this.eyeposy = this.$eyecontainer.offset().top;

  this.center = {
    x: this.$eyecontainer.width()/2 - this.r,
    y: this.$eyecontainer.height()/2 - this.r
  };
  this.distanceThreshold = this.$eyecontainer.width()/2 - this.r;
  this.mouseX = 0;
  this.mouseY = 0;
  setTimeout($.proxy(onResize, this), 1);

  $(window).on('resize', onResize.bind(this));
  // Listen for mouse movement
  $(window).mousemove(function(e){
    var d = {
      x: e.pageX - this.r - this.eyeposx - this.center.x,
      y: e.pageY - this.r - this.eyeposy - this.center.y
    };
    var distance = Math.sqrt(d.x*d.x + d.y*d.y);
    if (distance < this.distanceThreshold) {
      this.mouseX = e.pageX - this.eyeposx - this.r;
      this.mouseY = e.pageY - this.eyeposy - this.r;
    } else {
      this.mouseX = d.x / distance * this.distanceThreshold + this.center.x;
      this.mouseY = d.y / distance * this.distanceThreshold + this.center.y;
    }
  }.bind(this));

  // Update pupil location
  var loop = setInterval(function(){
    // change 1 to alter damping/momentum - higher is slower
    this.xp += (this.mouseX - this.xp) / 1;
    this.yp += (this.mouseY - this.yp) / 1;
    this.$pupil.css({left:this.xp, top:this.yp});
  }.bind(this), 1);
};

var onResize = function () {
    this.r = this.$pupil.width()/2;
    this.center = {
      x: this.$eyecontainer.width()/2 - this.r,
      y: this.$eyecontainer.height()/2 - this.r
    };
    this.distanceThreshold = this.$eyecontainer.width()/2 - this.r;
    this.eyeposx = this.$eyecontainer.offset().left;
    this.eyeposy = this.$eyecontainer.offset().top;
};


