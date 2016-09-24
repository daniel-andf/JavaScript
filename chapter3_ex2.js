function isEven (n){ //This function will check if the number is equal to 0 or 1. If the number is more than 1, the function will
					 // subract its value by 2 until the final result is equal to 0 or 1. This is a recusive way to check if the number is 
					 // even (n % 2 is true) or odd (n % 2 is false).
	if (n == 0) // Check if the number is equal to zero. If it is true, return true, to show that the number is even. 
	{
		return "true";
	}	
	else if (n == 1) // Check if the number is equal to 1. If it is true, return false, to show that the number is odd.
	{
		return "false";	
	}
	else if( n < 0) // If the number is < 0, change its value to the equivalent positive number. Ex: isEven(-1) = isEven(1)
	{
		return isEven (-n); // This return is calling again the function by calling the equivalent positive number. 
	}
	else
	{
		return isEven(n - 2); // if the number has higher value than 1, this instruction will call again the function, by subtracting
							  // the number n by 2, and will do this until n is equal to 0 or 1;
	}
}

console.log(isEven(50));
// → Print on the console.log the result of the function isEven with 50 as attribute. This must return true.
console.log(isEven(75));
// → Print on the console.log the result of the function isEven with 50 as attribute. This must return false.
console.log(isEven(-1));
// → Print on the console.log the result of the function isEven with 50 as attribute. This must return false.