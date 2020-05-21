// use variables to simplify your life!
var a = document.getElementById("cavani");
var b = document.getElementById("choupo");
var c = document.getElementById("dimaria");
var d = document.getElementById("draxler");
var e = document.getElementById("icardi");
var f = document.getElementById("kimpembe");
var g = document.getElementById("mbappe");
var h = document.getElementById("neymar");
var i = document.getElementById("silva");
var j = document.getElementById("verratti");
var k = document.getElementById("navas");
var l = document.getElementById("gifs");
var m = document.getElementById("full");

x = 0;
// array
var players = [a, b, c, d, e, f, g, h, i, j, k]

var cavgif = document.getElementById("cavani-gif");
var cavfull = document.getElementById("cavani-fullbody");
var choupogif = document.getElementById("choupo-gif");
var choupofull = document.getElementById("choupo-fullbody");
var dimariagif = document.getElementById("dimaria-gif");
var dimariafull = document.getElementById("dimaria-fullbody");
var draxlergif = document.getElementById("dimaria-gif");
var draxlerfull = document.getElementById("dimaria-fullbody");
var icardigif = document.getElementById("icardi-gif");
var icardifull = document.getElementById("icardi-fullbody");
var kimpembegif = document.getElementById("kimpembe-gif");
var kimpembefull = document.getElementById("kimpembe-fullbody");
var mbappegif = document.getElementById("mbappe-gif");
var mbappefull = document.getElementById("mbappe-fullbody");
var neymargif = document.getElementById("neymar-gif");
var neymarfull = document.getElementById("neymar-fullbody");
var silvagif = document.getElementById("silva-gif");
var silvafull = document.getElementById("silva-fullbody");
var verrattigif = document.getElementById("verratti-gif");
var verrattifull = document.getElementById("verratti-fullbody");
var navasgif = document.getElementById("navas-gif");
var navasfull = document.getElementById("navas-fullbody");

function playCrowd(el){
	document.getElementById("sound_crowd").play();
}
// child function
function addCavani(el){
	 cavgif.classList.remove("hidethis");
	 cavfull.classList.remove("hidethis");
}
function addChoupo(el){
	 choupogif.classList.remove("hidethis");
	 choupofull.classList.remove("hidethis");
}
function addDimaria(el){
	 dimariagif.classList.remove("hidethis");
	 dimariafull.classList.remove("hidethis");
}
function addDraxler(el){
	 draxlergif.classList.remove("hidethis");
	 draxlerfull.classList.remove("hidethis");
}
function addIcardi(el){
	 icardigif.classList.remove("hidethis");
	 icardifull.classList.remove("hidethis");
}
function addKimpembe(el){
	 kimpembegif.classList.remove("hidethis");
	 kimpembefull.classList.remove("hidethis");
}
function addMbappe(el){
	 mbappegif.classList.remove("hidethis");
	 mbappefull.classList.remove("hidethis");
}
function addNeymar(el){
	 neymargif.classList.remove("hidethis");
	 neymarfull.classList.remove("hidethis");
}
function addSilva(el){
	 silvagif.classList.remove("hidethis");
	 silvafull.classList.remove("hidethis");
}
function addVerratti(el){
	 verrattigif.classList.remove("hidethis");
	 verrattifull.classList.remove("hidethis");
}
function addNavas(el){
	 navasgif.classList.remove("hidethis");
	 navasfull.classList.remove("hidethis");
}
// parent function
function nextPlayer(el){
	document.getElementById("click_sound").play();
	x = x + 1;
	console.log(x);
	if (x == 1) {
		console.log("CAVANI!!");
		//child function 
		hideAll();
		players[1].classList.remove("hidethis");
	} else if (x == 2){
		console.log("CHOUPO!!");
		//child function 
		hideAll();
		players[2].classList.remove("hidethis");
	}
	else if (x == 3){
		console.log("DIMARIA!!");
		//child function 
		hideAll();
		players[3].classList.remove("hidethis");
	}
		else if (x == 4){
		console.log("DRAXLER!!");
		//child function 
		hideAll()
		players[4].classList.remove("hidethis");
	}
		else if (x == 5){
		console.log("ICARDI!!");
		//child function 
		hideAll();
		players[5].classList.remove("hidethis");
	}
		else if (x == 6){
		console.log("KIMPEMBE!!");
		//child function 
		hideAll();
		players[6].classList.remove("hidethis");
	}
		else if (x == 7){
		console.log("MBAPPE!!");
		//child function 
		hideAll();
		players[7].classList.remove("hidethis");
	}	
		else if (x == 8){
		console.log("NEYMAR!!");
		//child function 
		hideAll()
		players[8].classList.remove("hidethis");
	}	
		else if (x == 9){
		console.log("SILVA");
		//child function 
		hideAll();
		players[9].classList.remove("hidethis");
	}	
		else if (x == 10){
		console.log("VERRATTI!!");
		//child function 
		hideAll();
		players[10].classList.remove("hidethis");
	}
		else if (x == 11){
		//child function 
		hideAll();
		alert("Refresh Page To Go Back To The First Player");
	}
}
// parent function
function backPlayer(el){
	document.getElementById("click_sound").play();
	x = x - 1;
	console.log(x);
	if (x == 0) {
		//first 
		console.log("CAVANI!!");
		//child function 
		hideAll();
		//child function 
		addCavani();
	} else if (x == 1){
		console.log("CHOUPO!!");
		//child function 
		hideAll();
		//child function 
		addChoupo();
	} else if (x == 2){
		console.log("DIMARIA!!");
		//child function 
		hideAll();
		//child function 
		addDimaria();
	}else if (x == 3){
		console.log("DRAXLER!!");
		//child function 
		hideAll();
		//child function
		addDraxler();
	}else if (x == 4){
		console.log("ICARDI!!");
		//child function 
		hideAll();
		//child function 
		addIcardi();
	}else if (x == 5){
		console.log("KIMPEMBE!!");
		//child function 
		hideAll();
		//child function 
		addKimpembe();
	}else if (x == 6){
		console.log("MBAPPE!!");
		//child function 
		hideAll();
		//child function 
		addMbappe();
	}else if (x == 7){
		console.log("NEYMAR!!");
		//child function 
		hideAll();
		//child function 
		addNeymar();
	}else if (x == 8){
		console.log("SILVA!!");
		hideAll();
		//child function 
		addSilva();
	}else if (x == 9){
		console.log("VERRATTI!!");
		//child function 
		hideAll();
		//child function
		addVerratti();
	}else if (x == 10){
		console.log("NAVAS!!");
		//child function 
		hideAll();
		//child function 
		addNavas();
	}
}

// child function
function hideAll (){
players[0].classList.add("hidethis"); 
players[1].classList.add("hidethis"); 
players[2].classList.add("hidethis"); 
players[3].classList.add("hidethis"); 
players[4].classList.add("hidethis"); 
players[5].classList.add("hidethis"); 
players[6].classList.add("hidethis"); 
players[7].classList.add("hidethis"); 
players[8].classList.add("hidethis"); 
players[9].classList.add("hidethis"); 
players[10].classList.add("hidethis");
cavgif.classList.add("hidethis");
cavfull.classList.add("hidethis");
choupogif.classList.add("hidethis");
choupofull.classList.add("hidethis");
dimariagif.classList.add("hidethis");
dimariafull.classList.add("hidethis");
draxlergif.classList.add("hidethis");
draxlerfull.classList.add("hidethis");
icardigif.classList.add("hidethis");
icardifull.classList.add("hidethis");
kimpembegif.classList.add("hidethis");
kimpembefull.classList.add("hidethis");
mbappegif.classList.add("hidethis");
mbappefull.classList.add("hidethis");
neymargif.classList.add("hidethis");
neymarfull.classList.add("hidethis");
silvagif.classList.add("hidethis");
silvafull.classList.add("hidethis");
verrattigif.classList.add("hidethis");
verrattifull.classList.add("hidethis");
navasgif.classList.add("hidethis");
navasfull.classList.add("hidethis");
}	
