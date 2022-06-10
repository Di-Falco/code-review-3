Describe: MrRogersNeighborhood();

Test: "The function should return an array"
Code
const input = "4";
MrRogersNeighborhood(input);
Expected Output: (5) ['0', '1', '2', '3', '4']

Test: "function should return an error message if the user inputs anything other than a number"
Code:
const input = "u";
MrRogersNeighborhood(input);
ExpectedOutput: 'Error: Please input a positive number. Do not include any characters.'