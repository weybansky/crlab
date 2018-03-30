function display(a){
	document.getElementById('screen').value += a;


	if (a == "sin(") {
		// alert("Math.sin()");
		document.getElementById('hidden_screen').value += "Math.sin(";
	} else if (a == "cos(") {
		// alert("Math.cos(");
		document.getElementById('hidden_screen').value += "Math.cos(";
	} else if (a == "log(") {
		// alert("Math.log(");
		document.getElementById('hidden_screen').value += "Math.log(";
	} else if (a == "%") {
		// alert("*100");
		document.getElementById('hidden_screen').value += "*100";
	} else {
		document.getElementById('hidden_screen').value += a;
	}

}

function bkspace () {
	var a = document.getElementById('screen').value;
	a = a.substr(0, a.length - 1);
	document.getElementById('screen').value = a;
}

function cls_screen () {
	document.getElementById('screen').value = "";
	document.getElementById('ans').value = "";
	document.getElementById('hidden_screen').value = "";
}

function ans (){
	var ans = document.getElementById('screen').value;

	// var ans2 = document.getElementById('hidden_screen').value;

	if (ans === "") {
		document.getElementById('ans').value = "0";
	}
	else {
		// alert(ans);
		answer = eval(ans);
		document.getElementById('ans').value = answer;
	}
}

function sin (a) {
		a = Number(a);
		document.getElementById('ans').value = Math.sin(a * Math.PI / 180);
		document.getElementById('ans').value = answer;
}

function cos (a) {
		a = Number(a);
		document.getElementById('ans').value = Math.cos(a * Math.PI / 180); 
		document.getElementById('ans').value = answer;
}

function tan (a) {
		a = Number(a);
		document.getElementById('ans').value = (Math.sin(a * Math.PI / 180)) / (Math.cos(a * Math.PI / 180));
		document.getElementById('ans').value = answer;
}

function ln (a) {
		a = Number(a);
		document.getElementById('ans').value = Math.log(a);
		document.getElementById('ans').value = answer;
}