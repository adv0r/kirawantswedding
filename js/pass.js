function checkPass(){
	var pass1 = $("#personalcodeinput").val();
	console.log("Checking invitation code "+pass1);
	if (!pass1) {
		shakeit();
	}
	if (isCodeValid(pass1)) {
		$("#secretdiv").css("visibility", "visible");
		$("#enterpass").css("display", "none"); 
		$("#guestsinput").focus();
		setTimeout(function(){
			    var shakeoptions = {  distance: 80, times: 1 };
				$("#signup").effect("shake",shakeoptions);
				}
		 	, 3000);
		$("#customtext").text(codeTable[pass1.toUpperCase()][0]);
		if(codeTable[pass1.toUpperCase()][1]=='ita'){
			$("#welcome-text-ita").css("display", "block"); 
			$("#signup-text-ita").css("display", "block"); 
		} 
		else if(codeTable[pass1.toUpperCase()][1]=='esp'){
			$("#signup-text-esp").css("display", "block"); 
			$("#welcome-text-esp").css("display", "block"); 
		}
	} 
	else {
		shakeit();
	}	
}

function shakeit(){
	console.log("Nope!");
	var shakeoptions = {  distance: 40, times: 2 };
	$("#enterpass").effect("shake",shakeoptions);
	$("#personalcodeinput").select();
}

document.querySelector('#personalcodeinput').addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) { // 13 is enter
      checkPass();
    }
});


function isCodeValid(code){
	var found = false;
	for (var key in codeTable) {
		if(key.toUpperCase() === code.toUpperCase()){
			found=true;
			break;
		}  		
	}
	return found;
}

//Design :  key is the invitation code, codeTable[key][0] il nome degli invitati, , codeTable[key][1] la lingua
var codeTable =  {
	ADMIN: ['cazzone','esp'], 
	ASPIRA: ['FEDE','ita']
};
