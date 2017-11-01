'use strict';

var helper = (function(number,length){

	return (function(number,length){

		var generator = function(number,length){
			var alphaSet = [];
			var numCount = 0;
			var quantity = number;
			var hashCode=[];

			//store from 'A' to 'Z'
			for(var i=0;i<26;i++)
				alphaSet[i] = String.fromCharCode(65 + i);

			//store respective characters
			alphaSet[i++] = ".";
			alphaSet[i++] = ",";
			alphaSet[i++] = "@";
			alphaSet[i++] = "$";
			alphaSet[i++] = "[";
			alphaSet[i++] = "]";

			//store from 'a' to 'z'
			for(var i=32;i<58;i++)
				alphaSet[i] = String.fromCharCode(65 + i);

			//store from '0' to '9'
			for(var i=58;i<68;i++)
				alphaSet[i] = numCount++;


			while(quantity > 0){
				hashCode += alphaSet[quantity % 68];
				quantity = parseInt(quantity / 68);
			}
			return hashCode;
		}

		return (function(number,length){
			console.log("Below are the "+ number +" passwords with length : " + (length < 6 ? 6 : (length > 11 ? 10 : length)));
			var result = [];

			for(var j = 0;j<number;j++)
				result.push(generator(parseInt(Math.random() * Math.pow(100,length < 6 ? 6 : (length > 11 ? 10 : length-1)))));

			return result;
		})(number,length);

	})(number,length);
}); 

//console.log($(2));

module.exports = helper;