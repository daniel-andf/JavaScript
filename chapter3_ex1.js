function min (a,b) // This function compare 2 numbers, and returns who has the lowest value. 
{				

	if (a < b) // Compares if number has less value then number b. If it is true, return number a.
	{
		return a;
	}
	else  // Compares if number has more value then number b. If it is true, return number b;
	{
		return b;
	}


}

console.log (min(0,10)); // Print on the console.log the result of the function min with 0 and 10 as attributes. The function will
						 // return the number 0.

console.log  (min(0,-10));// Print on the console.log the result of the function min with 0 and -10 as attributes. The function will
						 // return the number -10.

