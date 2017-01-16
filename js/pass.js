function passWord() {
	var attemptCount = 1;
	var maxAttempts = 5;
	var pass1 = prompt('Please Enter Your Invitation Code',' ');
	while (attemptCount < maxAttempts) {
		if (!pass1) 
			history.go(-1);
		if (isCodeValid(pass1)) {
			$("#secretdiv").css("visibility", "visible");
			$("#enterpass").css("display", "none"); 
			$("#customtext").text(codeTable[pass1.toUpperCase()][0]);
			if(codeTable[pass1.toUpperCase()][1]=='ita'){
				$("#welcome-text-ita").css("display", "block"); 
				$("#signup-text-ita").css("display", "block"); 
			} else if(codeTable[pass1.toUpperCase()][1]=='esp'){
				$("#signup-text-esp").css("display", "block"); 
				$("#welcome-text-esp").css("display", "block"); 
			} 
			break;
			} 
		attemptCount+=1;
		var pass1 = prompt('Nope.','Invitation Code');
		}
	if (attemptCount == maxAttempts) 
		history.go(-1);
	return " ";
} 


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
