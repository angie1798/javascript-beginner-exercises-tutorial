function isOdd(myNumber)
{
	return !(myNumber % 2 == 0);
}

// Your code below:
let number= prompt("Ingrese un número");
console.log(isOdd(number));