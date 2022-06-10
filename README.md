

Describe: StringToArray()

Test: "Should return an input number as a character array of its digits"
Code:
const input = "123";
StringToArray(input);
Expected Output: (3) ['1', '2', '3']



Describe: MrRogersNeighborhood()

Test: "The function should return an array"
Code
const input = "4";
MrRogersNeighborhood(input);
Expected Output: (5) ['0', '1', '2', '3', '4']

Test: "Should return an error message if the user inputs anything other than a number"
Code:
const input = "u";
MrRogersNeighborhood(input);
ExpectedOutput: 'Error: Please input a positive number. Do not include any characters.'

Test: "Should replace all values that include '1' with 'Beep!'"
Code:
const input = "13";
MrRogersNeighborhood(input);
Expected Output: (14) [0, 'Beep!', 'Boop!', 3, 4, 5, 6, 7, 8, 9, 'Beep!', 'Beep!', 'Beep!', 'Beep!']

Test: "Should replace all values that include '2' with 'Boop!'"
Code:
const input = "13";
MrRogersNeighborhood(input);
Expected Output: (14) [0, 'Beep!', 'Boop!', 3, 4, 5, 6, 7, 8, 9, 'Beep!', 'Beep!', 'Boop!', 'Beep!']

Test: "Should replace all values that include '3' with 'Won't you be my neighbor?'"
Code:
const input = "13";
MrRogersNeighborhood(input);
Expected Output: (14) [0, 'Beep!', 'Boop!', 3, 4, 5, 6, 7, 8, 9, 'Beep!', 'Beep!', 'Boop!', 'Won't you be my neighbor?']



Describe PrimeCheck()

Test: "Should return an error message if a non-numerical value is entered"
Code:
const number = "hello";
PrimeCheck(number);
Expected Output: 'Error: Please input a positive number. Do not include any characters.'

Test: "Should return a seperate statement if input is equal to 1"
Code:
const number = 1;
PrimeCheck(number);
Expected Output: "1 is not a prime or a composite number."

Test: "Should return with an affirmative statement if input is a prime number"
Code:
const number = 7;
PrimeCheck(number);
ExpectedOutput: "7 is prime"

Test: "Should return with a negative statement if input is not a prime number"
Code:
const number = 6;
PrimeCheck(number);
ExpectedOutput: "6 is not prime"

Test: "Should return an affirmative response when input is equal to 2"
Code:
const number = 2;
PrimeCheck(number);
Expected Output: "2 is prime"

Test: "Should return an array of all prime numbers less than the input when the input is prime"
Code:
const number = 11;
let primeArray = [];
PrimeCheck(number);
console.log(primeArray);
Expected Output: (5) [2, 3, 5, 7, 11]
                 '11 is prime'

Test: "Should return an array of all prime numbers less than the input when the input is prime"
Code:
const number = 15;
let primeArray = [];
PrimeCheck(number);
console.log(primeArray);
Expected Output: (6) [2, 3, 5, 7, 11, 13]
                 '15 is not prime'

Test: "Should output an array that includes whther or not the input is prime, followed by all primes less than input"
Code:
const number = 15;
PrimeCheck(number);
Expected Output = (7) ['15 is not prime', 2, 3, 7, 11, 13]