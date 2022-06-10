// UTILITY LOGIC

function StringToArray(text) {
  text = String (text);
  text = text.split("");
  console.log(text);
  return text;
}

// BUSINESS LOGIC

function MrRogersNeighborhood(input) {
  size = parseInt(input);
  if (!Number(size)) {
    return "Error: Please input a positive number. Do not include any characters.";
  }
  let array = [];
  for (let i = 0; i <= size; i++) {
    array[i] = i;
  }
  console.log(array);
}

StringToArray("123");

MrRogersNeighborhood("4");