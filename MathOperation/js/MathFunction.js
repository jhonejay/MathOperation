
function DelayAdd() {
	document.getElementById("result").value = "";
	if(document.getElementById("num1").value == "" || document.getElementById("num2").value == ""){
		
		condition();

	}
	else{
		document.getElementById("loading").style="visibility.visible";
		setTimeout(Addition,1000);
	}
}

function Addition(){
	var num1 = document.getElementById("num1").value;
	var num2 = document.getElementById("num2").value;

	document.getElementById("result").value = parseInt(num1) + parseInt(num2);
	document.getElementById("loading").style.display="none";
	
}

//Subtraction
function DelaySub() {
	document.getElementById("result").value = "";
	if(document.getElementById("num1").value == "" || document.getElementById("num2").value == ""){
		
		condition();
	}
	else{
	document.getElementById("loading").style="visibility.visible";
	setTimeout(Subtract,1000);
	}
}


function Subtract(){
	var num1 = document.getElementById("num1").value;
	var num2 = document.getElementById("num2").value;
	
	document.getElementById("result").value = parseInt(num1) - parseInt(num2);
	document.getElementById("loading").style.display="none";

}

//Multiplication
function DelayMul() {
	document.getElementById("result").value = "";
	if(document.getElementById("num1").value == "" || document.getElementById("num2").value == ""){
		
	condition();
	}
	else{
	document.getElementById("loading").style="visibility.visible";
	setTimeout(Multiply,1000);
	}
}


function Multiply(){
	var num1 = document.getElementById("num1").value;
	var num2 = document.getElementById("num2").value;
	
	document.getElementById("result").value = parseInt(num1) * parseInt(num2);
	document.getElementById("loading").style.display="none";

}

//Division
function DelayDiv() {
	document.getElementById("result").value = "";
	if(document.getElementById("num1").value == "" || document.getElementById("num2").value == ""){

		condition();

	}
	else{
		document.getElementById("loading").style="visibility.visible";
	setTimeout(Divide,1000);
		}
}


function Divide(){
	var num1 = document.getElementById("num1").value;
	var num2 = document.getElementById("num2").value;
	
	if(num2 == 0){
		document.getElementById("loading").style.display="none";
		alert("Cannot divide by Zero");

	}
	else{

	document.getElementById("result").value = parseInt(num1) / parseInt(num2);
	document.getElementById("loading").style.display="none";
	}
}

function condition () {

	alert("Kalog!!");
}