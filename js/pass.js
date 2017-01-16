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
			$("#customtext").text(codeTable[pass1.toUpperCase()]);
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


var codeTable =  {
	PASSWORD: 'welcome', 
	ADMIN: 'cazzone', 
	ASPIRA: 'FEDE'
};
