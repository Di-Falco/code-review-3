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

