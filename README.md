# Mr Rogers Prime Factors

#### By Anthony DiFalco

#### An exercise in using loops and arrays in JavaScript

## Technologies Used

* JavaScript
* JQuery
* HTML
* CSS

## Description

This is a webpage with three linked HTML files. The home page features a text box asking for a positive integer input. When the user submits a valid input, the output box displays each number from 0 to the input value, but replaces some numbers as follows (listed by ascending priority):

1. Any number containing a 1 is replaced with "Beep!"
2. Any number containing a 2 is replaced with "Boop!"
3. Any number containing a 3 is replaced with "Won't you be my neighbor?"

The second HTML (primes) file is similar, except it takes the user's input and outputs the following information:

* Whether or not the input is a prime number
* The unique prime factorization of the number
* A list of prime numbers up to and including the user input number

The third HTML (binary) file takes a user input integer and returns the value in binary. the output is formatted into distinct sections that are each 4-digits long to improve readability.

## Setup/Installation Requirements

* Clone this repository from Github<br>
```git clone https://github.com/Di-Falco/code-review-3```
* Open either HTML file in your web browser
* Alternatively you can visit the Github pages at this link: https://di-falco.github.io/code-review-3/

## Known Bugs

* No known bugs

## Tests

<strong>Describe: StringToArray()</strong><br>

>Test: "Should return an input number as a character array of its digits"<br>
>Code:<br>
>```const input = "123";```<br>
>```StringToArray(input);```<br>
>Expected Output: (3) ['1', '2', '3']<br>

<br><strong>Describe: MrRogersNeighborhood()</strong><br>

>Test: "The function should return an array"<br>
>Code<br>
>```const input = "4";```<br>
>```MrRogersNeighborhood(input);```<br>
>Expected Output: (5) ['0', '1', '2', '3', '4']<br>

>Test: "Should return an error message if the user inputs anything other than a number"<br>
>Code:<br>
>```const input = "u";```<br>
>```MrRogersNeighborhood(input);```<br>
>ExpectedOutput: 'Error: Please input a positive number. Do not include any characters.'<br>

>Test: "Should replace all values that include '1' with 'Beep!'"<br>
>Code:<br>
>```const input = "13";```<br>
>```MrRogersNeighborhood(input);```<br>
>Expected Output: (14) [0, 'Beep!', 'Boop!', 3, 4, 5, 6, 7, 8, 9, 'Beep!', 'Beep!', 'Beep!', 'Beep!']<br>

>Test: "Should replace all values that include '2' with 'Boop!'"<br>
>Code:<br>
>```const input = "13";```<br>
>```MrRogersNeighborhood(input);```<br>
>Expected Output: (14) [0, 'Beep!', 'Boop!', 3, 4, 5, 6, 7, 8, 9, 'Beep!', 'Beep!', 'Boop!', 'Beep!']<br>

>Test: "Should replace all values that include '3' with 'Won't you be my neighbor?'"<br>
>Code:<br>
>```const input = "13";```<br>
>```MrRogersNeighborhood(input);```<br>
>Expected Output: (14) [0, 'Beep!', 'Boop!', 3, 4, 5, 6, 7, 8, 9, 'Beep!', 'Beep!', 'Boop!', 'Won't you be my neighbor?']<br>


<br><strong>Describe PrimeCheck()</strong><br>

>Test: "Should return an error message if a non-numerical value is entered"<br>
>Code:<br>
>```const number = "hello";```<br>
>```PrimeCheck(number);```<br>
>Expected Output: 'Error: Please input a positive number. Do not include any characters.'<br>

>Test: "Should return a seperate statement if input is equal to 1"<br>
>Code:<br>
>```const number = 1;```<br>
>```PrimeCheck(number);```<br>
>Expected Output: "1 is not a prime or a composite number."<br>

>Test: "Should return with an affirmative statement if input is a prime number"<br>
>Code:<br>
>```const number = 7;```<br>
>```PrimeCheck(number);```<br>
>ExpectedOutput: "7 is prime"<br>

>Test: "Should return with a negative statement if input is not a prime number"<br>
>Code:<br>
>```const number = 6;```<br>
>```PrimeCheck(number);```<br>
>ExpectedOutput: "6 is not prime"<br>

>Test: "Should return an affirmative response when input is equal to 2"<br>
>Code:<br>
>```const number = 2;```<br>
>```PrimeCheck(number);```<br>
>Expected Output: "2 is prime"<br>

>Test: "Should return an array of all prime numbers less than the input when the input is prime"<br>
>Code:<br>
>```const number = 11;```<br>
>```let primeArray = [];```<br>
>```PrimeCheck(number);```<br>
>```console.log(primeArray);```<br>
>Expected Output: (5) [2, 3, 5, 7, 11]<br>
>                 '11 is prime'<br>

>Test: "Should return an array of all prime numbers less than the input when the input is prime"<br>
>Code:<br>
>```const number = 15;```<br>
>```let primeArray = [];```<br>
>```PrimeCheck(number);```<br>
>```console.log(primeArray);```<br>
>Expected Output: (6) [2, 3, 5, 7, 11, 13]<br>
>                 '15 is not prime'<br>

>Test: "Should output an array that includes whether or not the input is prime, followed by all primes less than input"<br>
>Code:<br>
>```const number = 15;```<br>
>```PrimeCheck(number);```<br>
>Expected Output = (7) ['15 is not prime', 2, 3, 7, 11, 13]<br>


<br><strong>Describe: PrimeFactors()</strong><br>


>Test: "Should take a number and an array of lesser primes, and return an array of the number's prime >factors"<br>
>Code:<br>
>```const number = 15;```<br>
>```const primes = [2, 3, 5, 7, 11, 13];```<br>
>```PrimeFactors(number, primes);```<br>
>Expected Output: (2) [3, 5]<br>

>Test: "Should take a number and an array of lesser primes, and return the unique prime factorization"<br>
>Code:<br>
>```const number = 36;```<br>
>```const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31]```<br>
>```PrimeFactors(number, primes);```<br>
>Expected Output: 2 * 2 * 3 * 3<br>

>Test: "Should count the number of each unique factor and format the output as exponents"<br>
>Code:<br>
>```const number = 36;```<br>
>```const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31]```<br>
>```PrimeFactors(number, primes);```<br>
>Expected Output: 2^2 * 3^2<br>

<br><strong>Describe: BinaryConverter()</strong><br>

>Test: "Should return an array of 0s and 1s equivalent to the input number in binary"<br>
>Code:<br>
>```const number = 9;```<br>
>```BinaryConverter(number);```<br>
>```console.log(binaryArray)```<br>
>Expected Output: (4) ['1', '0', '0', '1']<br>

>Test: "Should return a string of 0s and 1s equal to the binary of the input number, seperated by a space every 4 digits"<br>
>Code:<br>
>```const number = 217;```<br>
>```BinaryConverter(number);```<br>
>Expected Output: '1101 1001'<br>

>Test: "Should append 0s to the start of the binary number so that all outputs are formatted in sections of 4 digits each"<br>
>Code:<br>
>```const number = 54;```<br>
>```BinaryConverter(number);```<br>
>Expected Output: '0011 0110'<br>

## License

If you find any errors or inaccuracies in these files you can email me at aodifalco@gmail.com 

Copyright (c) June 10, 2022 - Anthony DiFalco
