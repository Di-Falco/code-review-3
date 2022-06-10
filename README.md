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

Test: "Should replace all single-digit values that include '1' with 'Beep!'"
Code:
const input = "4";
MrRogersNeighborhood(input);
Expected Output: (5) [0, 'Beep!', 2, 3, 4]

