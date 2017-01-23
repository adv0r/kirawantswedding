//Design :  key is the invitation code, 
	//codeTable[key][0] il nome degli invitati, 
	// codeTable[key][1] la lingua , 
	// codeTable[key][2] gender or multiple people 

var codeTable =  {
	GOCCIADILUNA : [	'Mamma Rosanna'	, 'ita' ,	'female'],
	UNGIRETTODIPAPPETTE : [	'Gilby'	, 'ita' ,	'male'],
	SASISASISASISU : [	'Flamy e Valerio'	, 'ita' ,	'multi'],
	NONNATECNOLOGICA : [	'Nonnna Brunella'	, 'ita' ,	'female'],
	QUOVAMOS : [	'Zio Alesandro e Zia Patrizia'	, 'ita' ,	'multi'],
	LARGOCAPUCCI : [	'Zio Fabrizio, Zia Iliana e Giorgia'	, 'ita' ,	'multi'],
	SUPERCUGGI : [	'Giulia e Guglielmo'	, 'ita' ,	'multi'],
	SUPERKIKKA : [	'Zia Francesca e Ale'	, 'ita' ,	'multi'],
	PORTOSANTOSTEFANO : [	'Zia Diana e Zio Nicola'	, 'ita' ,	'multi'],
	ZIACARMEN : [	'Zia Carmen'	, 'ita' ,	'female'],
	SPETZLECONRAFANO : [	'Zio Rolando e Zia Carmen'	, 'ita' ,	'multi'],
	PAPISANDMAMIS : [	'Francesca e Sebastiano'	, 'ita' ,	'multi'],
	MISSCHICHOTTE : [	'Rossella'	, 'ita' ,	'female'],
	GOLDENOSTER : [	'Zio Silvano'	, 'ita' ,	'male'],
	QUEENOFMANZ : [	'Giulia, Gabriele e Gaby junior'	, 'ita' ,	'multi'],
	MOUNTAINHERITAGE : [	'Erik e Olivia'	, 'ita' ,	'multi'],
	SAGRADABIFORA : [	'Zio Dario'	, 'ita' ,	'male'],
	LAPAELLADELDOMINGO : [	'Mami Maite',	'esp'	, 'female'],
	CISABONET : [	'Tieta Maribel y Nacho',	'esp'	, 'multi'],
	CISACAZORLA : [	'Cristian, Sandra, Mauro y Nicolás',	'esp'	, 'multi'],
	PAMIESFAMILY : [	'Tieta, Tete i MºRosa'	, 'cat' ,	'multi'],
	MRBEANFAMILY : [	'Tata, Jordi i Pol'	, 'cat' ,	'multi'],
	ELCAMINOMASTERS : [	'Xavier i Roser'	, 'cat' ,	'multi'],
	VECINOSDECONDES : [	'Conchi y Luis',	'esp'	, 'multi'],
	PEQUEVECINITA : [	'Anabel y Marc',	'esp'	, 'multi'],
	MYDOGNOLADRA : [	'Tito y Anna',	'esp'	, 'multi'],
	YOGAENPLATAFORMA : [	'Eka y Sara',	'esp'	, 'multi'],
	GAMESOFPRINT : [	'Javi y Cris',	'esp'	, 'multi'],
	TEOESCOBAR : [	'Alex, Cris y Teo',	'esp'	, 'multi'],
	THEGREENJUEVES : [	'Suso',	'esp'	, 'male'],
	HORTAISBCN : [	'Pau, Olga y Jon',	'esp'	, 'multi'],
	FACCIUNGOL : [	'Jose',	'esp'	, 'male'],
	WEEKENDTHERAPISTS : [	'Edgar i Edurne'	, 'cat' ,	'multi'],
	ALPENEDESESTENCA : [	'Alba i Jordi'	, 'cat' ,	'multi'],
	AOUNPOPI : [	'Blanca'	, 'cat' ,	'female'],
	FENTBIRRESFENTBARRI : [	'Puche y Marta',	'esp'	, 'multi'],
	BBQKINGS : [	'Joan y Noe',	'esp'	, 'multi'],
	DONDEESTARAMICARRO : [	'Ventur'	, 'cat' ,	'female'],
	WENEEDHELP : [	'Roca'	, 'cat' ,	'male'],
	PESCEALLAGRILLA : [	'Moreu, Mel i Mini Mel '	, 'cat' ,	'multi'],
	QUEGUAY : [	'Laura i MiniLaura'	, 'cat' ,	'female'],
	NOSINMIVWT3 : [	'Victor'	, 'cat' ,	'male'],
	AIAIAIPARTENDIRECTE : [	'Maite, Pitu i MiniPitu'	, 'cat' ,	'multi'],
	TRIGORIASURMER : [	'Cicco ed Eva'	, 'ita' ,	'multi'],
	ACAPULCOBARCELLONA : [	'Mattia ed Alesandra'	, 'ita' ,	'multi'],
	ELSENSEIMORENO : [	'Manu'	, 'ita' ,	'male'],
	MERCEDESCLIMBERS : [	'Mario e Isabell'	, 'ita' ,	'multi'],
	GENITORIPIONEROS : [	'Andrea, Francesa e Bianca'	, 'ita' ,	'multi'],
	PERONIEGOMMONI : [	'Giorgio e Anna'	, 'ita' ,	'multi'],
	AFTERINOBCN : [	'Cri'	, 'ita' ,	'female'],
	ENXANETADEMELANZANE : [	'Rebby'	, 'ita' ,	'female'],
	VENTFORTTRAFICFLUID : [	'Mirza'	, 'ita' ,	'female'],
	FRITASCONGELADAS : [	'Vale'	, 'ita' ,	'female'],
	RINXOLSVERMELLS : [	'Flavia e Roberto'	, 'ita' ,	'multi'],
	VERLOBTENBACKTOBCN : [	'Akira e Giorgia'	, 'ita' ,	'multi'],
	BACKINTOWN : [	'Dan e Anais'	, 'ita' ,	'multi'],
	ELEANORWANTSBRETZEL : [	'Valerio, Conny e Eleanor'	, 'ita' ,	'multi'],
	OSTIAELPORRO : [	'Olio e Laura'	, 'ita' ,	'multi'],
	ELCIMONDEBARCELONA : [	'Marco, Fede e Viola'	, 'ita' ,	'multi'],
	IONONMANGIOCHROMEBOOK : [	'Claudia e Simone'	, 'ita' ,	'multi'],
	OKCLUBVIAHIPPIEPASS : [	'Isacco e Norma'	, 'ita' ,	'multi'],
	INFELTRATI : [	'Tobia e Lisa'	, 'ita' ,	'multi'],
	BRETZELSINLOVE : [	'Lorenzo e Simone'	, 'ita' ,	'multi'],
	CABINATOCONAMORE : [	'Dario e Lara'	, 'ita' ,	'multi'],
	ARCURICIMANCHI : [	'Eddy e Laura'	, 'ita' ,	'multi'],
	UN2DIOGNITUTTO : [	'Piro'	, 'ita' ,	'multi'],
	FEELGOOD : [	'Stefy'	, 'ita' ,	'female'],
	BARCELL8 : [	'Pes'	, 'ita' ,	'male'],
	ILMATTINOHALUCAINBOCCA : [	'Luu'	, 'ita' ,	'male'],
	FIGODITON : [	'Webbi'	, 'ita' ,	'male'],
	MAMMA : [	'Ermanno'	, 'ita' ,	'male'],
	TINTORETTOSOCIALCLUB : [	'Adri e Massimo'	, 'ita' ,	'multi'],
	KINGOFLEHMANN : [	'Xavi'	, 'cat' ,	'male'],
	CRYPTOMAKERS42 : [	'Will y Kate',	'esp'	, 'male'],
	JAHRLAXEBCN : [	'Sandro'	, 'ita' ,	'male'],
	DANCEHALLQUEEN : [	'Azzurra'	, 'ita' ,	'female'],
	THESTUFFTHATWASBORNINKK : [	'Trejo y Tamara',	'esp'	, 'multi'],
	LAVAMOSAQUEMAR : [	'Masero',	'esp'	, 'male'],
	SLIVERQUEEN : [	'Alicia',	'esp'	, 'female'],
	GREENFIELDATZEN : [	'Carmine e Lara'	, 'ita' ,	'multi'],
	QWE : [	'Francesca e Francesco'	, 'ita' ,	'multi']

};
