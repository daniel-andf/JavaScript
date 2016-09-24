function countBs (a){ //This function will check how many Bs the variable a, which is a string, have.

	var count = 0;//Initialize the variable count, which is the number of Bs that the function will return.
	
	for (i=0;i < a.length;i++)//Check each character of the string a until it reaches the max length of the string
	{
		if (a.charAt(i) == "B")// Check if the character with the position i is equal to "B". If it is true add 1 the the variable counter
			count++;
	}

	return count; //When the for instrution reaches the max length of the string, return the result of the variable count.
}

function countChar (a,b){ //This function will check how many of a certain caracter,given by the variable b , the variable a , which is
	                      //a string, have.

	var count = 0;//Initialize the variable count, which is the number of characters of the variable b, that the function will return.
	
	for (i=0;i < a.length;i++)//Check each character of the string a until it reaches the max length of the string
	{
		if (a.charAt(i) == b) // Check if the character with the position i is equal to the character of the variable b. If it is true add 1 the the variable counter
			count++;
	}

	return count;
}


console.log(countBs("BBC"));//Print on the console.log the result of the function countBs with the string "BBC" as attribute. 
//This return the number 2.

console.log(countChar("kakkerlak", "k"));//Print on the console.log the result of the function countChar with the string "kakkerlak" an
// and character "k" as attributes. This return the number 4.


