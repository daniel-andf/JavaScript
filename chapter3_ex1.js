function min (a,b) // This function compare 2 numbers, and returns who has the lowest value. If they are the same, 
{					//the function returns that they are the same.

	if (a < b) // Compares if number has less value then number b. If it is true, return number a.
	{
		return a;
	}
	else if ( a > b ) // Compares if number has more value then number b. If it is true, return number b;
	{
		return b;
	}
	else
	{
		return "These numbers are equal"; // If both numbers are the same, return the message "These numbers are equal".
	}

}

console.log (min(0,10)); // Print on the console.log the result of the function min with 0 and 10 as attributes. The function will
						 // return the number 0.

console.log  (min(0,-10));// Print on the console.log the result of the function min with 0 and -10 as attributes. The function will
						 // return the number -10.

console.log  (min(2,2));// Print on the console.log the result of the function min with 2 and 2 as attributes. The function will
						 // return that both are the same number.
