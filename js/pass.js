var mysecretvar = "daverO=!!?!?";
function checkPass(){
	var pass1 = $("#personalcodeinput").val();
	console.log("Checking invitation code "+pass1);
	if (!pass1) {
		shakeit();
	}
	if (isCodeValid(pass1)) {
		$("#secretdiv").css("visibility", "visible");
		$("#enterpass").css("display", "none"); 
		$("#hiddeninputcode").val(pass1); 
		$("#guestsinput").focus();

		setTimeout(function(){
			    var shakeoptions = {  distance: 60, times: 1 };
				$("#signup").effect("shake",shakeoptions);
				}
		 	, 4000);
		if(codeTable[pass1.toUpperCase()][1]=='ita'){
			$("#welcome-text").html("<p id='welcome-text' class='welcome'> Ciao <span id='customtext'> </span>, benvenuto qui</p>"); 
			$("#signup-text-ita").css("display", "block"); 
			$("#signup-text-esp").css("display", "none"); 

			$("#modaltitle").text("Grazie!");
			$("#modalbody").text("Fatto! Grazie mille, Nico E Gemma saranno contenti di averti. Ti mandero presto un email di conferma con piu dettagli. Se pensi di doverci lasciare altri indirizzi email con cui comunicare, fai pure!");

		} 
		else if(codeTable[pass1.toUpperCase()][1]=='esp'){
			$("#signup-text-esp").css("display", "block"); 
			$("#signup-text-ita").css("display", "none"); 

			$("#welcome-text").html("<p id='welcome-text' class='welcome'> Hola <span id='customtext'> </span>, bienvenudo aqui!</p>"); 

			$("#modaltitle").text("Gracias!");
			$("#modalbody").text("Texto muy largo en castellano aqui");

		}

			$("#customtext").text(codeTable[pass1.toUpperCase()][0]);

		if(codeTable[pass1.toUpperCase()][2]=='single'){
			//TODO
		} 
		else if(codeTable[pass1.toUpperCase()][2]=='multi'){
			//TODO
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
	TEST: ['admin','esp','single'], 
	ASPIRA: ['FEDE','ita','multi']
};
