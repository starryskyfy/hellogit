function numOfChar(str){
	var acc={};
	var text;
	for (int i=a;i<=z;i++) {
		if(str.indexof(i)!=-1){
			var acc.i=str.split("'"+i+"'").length-1;
			text+= acc.i+i;
		}

	}

return text;
}
console.log(numOfChar('hello'));
}