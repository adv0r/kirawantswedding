function checkPass(){
	var pass1 = $("#personalcodeinput").val();
	console.log("Checking invitation code "+pass1);
	if (!pass1) {
		shakeit();
	}
	if (isCodeValid(pass1)) {
		if(pass1.toUpperCase() === "WEEKENDTHERAPISTS"){
			//Play helicopter for edurne y edgar
		 	var helicopterAudio = new Audio('audio/helicopter.mp3');
       		 helicopterAudio.play();
		}  
		
		$("#secretdiv").css("visibility", "visible");
		$("#enterpass").css("display", "none"); 
		$("#hiddeninputcode").val(pass1); 
		$("#guestsinput").focus();

		setTimeout(function(){
			    var shakeoptions = {  distance: 10, times: 6 , direction : 'up' };
				$("#signup").effect("shake",shakeoptions);
				}
		 	, 4000);

		var calText = "<hr/> <p>Don't forget! (<a href='cal/Kira-Wants-Wedding.ics'>iCal</a> - <a href='https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NHVrYmo3M3NpbTIxdmRlajU4bWNiZ3FhYmcgM2M0dTJsOTg3NXZhY2dub2VqanVjZmFyc3NAZw&tmsrc=3c4u2l9875vacgnoejjucfarss%40group.calendar.google.com'>Google Calendar</a>)</p>";
		if(codeTable[pass1.toUpperCase()][1]=='ita'){
			if(codeTable[pass1.toUpperCase()][2]=='male'){
			   $("#welcome-text").html("<p id='welcome-text' class='welcome'>Ciao <span id='customtext'> </span>, vuoi condividere con me questo giorno speciale per Gemma e Nico?</p>"); 
			   $("#signup-text").text("Lasciami il tuo indirizzo email e ti terrò aggiornato"); 
			} 
			else if(codeTable[pass1.toUpperCase()][2]=='female'){
			   $("#welcome-text").html("<p id='welcome-text' class='welcome'>Ciao <span id='customtext'> </span>, vuoi condividere con me questo giorno speciale per Gemma e Nico?</p>"); 
			   $("#signup-text").text("Lasciami il tuo indirizzo email e ti terrò aggiornata"); 

			}
			else if(codeTable[pass1.toUpperCase()][2]=='multi'){
			   $("#welcome-text").html("<p id='welcome-text' class='welcome'>Ciao <span id='customtext'> </span>, volete condividere con me questo giorno speciale per Gemma e Nico?</p>"); 
			   $("#signup-text").text("Lasciatemi il vostro indirizzo email e vi terrò aggiornati"); 
			}

			$("#modaltitle").text("Perfetto!");
			$("#modalbody").html("<p>Adesso basta tenere l'email sotto controllo, al resto penso io.</p> <p><strong> Kira</strong></p>"+calText);
			$("#closebtn").text("A presto!");

		} 
		else if(codeTable[pass1.toUpperCase()][1]=='esp'){
			if(codeTable[pass1.toUpperCase()][2]=='male'){
			   $("#welcome-text").html("<p id='welcome-text' class='welcome'>Hola <span id='customtext'> </span>, ¿quieres compartir conmigo este día tan especial para Gemma y Nico?</p>"); 
			   $("#signup-text").text("Dejame un email y te mantendré informado"); 

			}
			else if(codeTable[pass1.toUpperCase()][2]=='female'){
			   $("#welcome-text").html("<p id='welcome-text' class='welcome'>Hola <span id='customtext'> </span>, ¿quieres compartir conmigo este día tan especial para Gemma y Nico?</p>");
			   $("#signup-text").text("Dejame un email y te mantendré informada"); 

			} 
			else if(codeTable[pass1.toUpperCase()][2]=='multi'){
			   $("#welcome-text").html("<p id='welcome-text' class='welcome'>Hola <span id='customtext'> </span>, ¿queréis compartir conmigo este día tan especial para Gemma y Nico?</p>"); 
   			   $("#signup-text").text("Dejadme vuestros email y os mantendré informados"); 
			}


			$("#modaltitle").text("Perfecto!");
			$("#modalbody").html("<p>Ahora solo hay que estar atento al email, del resto me encargo yo!</p> <p><strong> Kira</strong></p>"+calText);
			$("#closebtn").text("Hasta pronto!");
		}
		else if(codeTable[pass1.toUpperCase()][1]=='cat'){
			if(codeTable[pass1.toUpperCase()][2]=='male'){
			   $("#welcome-text").html("<p id='welcome-text' class='welcome'>Hola <span id='customtext'> </span>, vols compartir amb mi aquest dia tan especial per la Gemma i el Nico?</p>"); 
			   $("#signup-text").text("Deixa'm un email i te mantindré informat"); 
			} 
			else if(codeTable[pass1.toUpperCase()][2]=='female'){
			   $("#welcome-text").html("<p id='welcome-text' class='welcome'>Hola <span id='customtext'> </span>, vols compartir amb mi aquest dia tan especial per la Gemma i el Nico?</p>"); 
			   $("#signup-text").text("Deixa'm un email i te mantindré informada"); 
			} 
			else if(codeTable[pass1.toUpperCase()][2]=='multi'){
			   $("#welcome-text").html("<p id='welcome-text' class='welcome'>Hola <span id='customtext'> </span>, voleu compartir amb mi aquest dia tan especial per la Gemma i el Nico?</p>"); 
			   $("#signup-text").text("Deixeu-me els vostres email i us mantindré informats"); 
			}

			$("#modaltitle").text("Perfecte!");
			$("#modalbody").html("<p>Ara només cal estar atent al email, de la resta me'n encarrego jo!</p> <p><strong> Kira</strong></p>"+calText);
			$("#closebtn").text("Fins aviat!");
		}

			$("#customtext").text(codeTable[pass1.toUpperCase()][0]);

		
	} 
	else {
		shakeit();
	}	
}

function shakeit(){
	console.log("Nope!");
	var errAudio = new Audio('audio/err.mp3');
	errAudio.play();
	var shakeoptions = {  distance: 40, times: 2 };
	$("#personalcodediv").effect("shake",shakeoptions);
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
