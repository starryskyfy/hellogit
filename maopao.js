'use strict';

function maopao(arr){
	var arr=arr.split(',');
	var temp;
	for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j < arr.length; j++) {
			if(arr[i]>arr[j]{
				temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
	}
	return arr.split('').join(' ');

}

maopao(6,4,8,3,2,1,9);

