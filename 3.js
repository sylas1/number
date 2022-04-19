function myFunction() {//Huang Wenxu
	//Bring in data
	var x = document.getElementById("num1").value;
	var y = document.getElementById("num2").value;
	var x = Number(x);
	var y = Number(y);
	var z = x + y;
	if (isNaN(x)) {//Judge whether it is a number
    z = "please enter a number"
}
     else if (isNaN(y)) {
     z = "please enter a numner"
}
     else {
     z = Number(x) + Number(y);
}
    document.getElementById("demo").innerHTML = z;
}