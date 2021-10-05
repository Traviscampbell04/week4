function oc(){
	var  a1 = document.getElementById("area1")
	a1.style.fontSize ="24pt";
}

function fancy(){
	alert("Fancify");
	
	var  a1 = document.getElementById("area1")
	var  rb1 = document.getElementById("rbutton1");
	
	if(rb1.checked){
		a1.style.fontWeight ="bold";
		a1.style.color = "blue";
		a1.style.textDecoration="underline";
	}

}

function boring(){
	alert("Boring");
	var  a1 = document.getElementById("area1")
	var  rb2 = document.getElementById("rbutton2");
	if(rb2.checked){
		a1.style.fontWeight ="normal";
		a1.style.color = "black";
		a1.style.textDecoration="none";
	}
	
function moo(){
	alert("Moo");
	var  a1 = document.getElementById("area1")

	
}