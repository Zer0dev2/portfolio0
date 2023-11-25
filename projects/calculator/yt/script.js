function equal(){

	var answer_field = document.ff.field.value;
	var answer = eval(answer_field);

	if(answer_field==""){
		document.ff.field.value="Error";
	}
	else{
		document.ff.field.value=answer;
	}
}

function cancle() {
	var answer_field = document.ff.field.value;
	document.ff.field.value="";
}