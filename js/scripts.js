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
  let digits = [];
  for (let i = 0; i <= size; i++) {
    array[i] = i;
    digits = StringToArray(i);
    if (digits.includes('3')) {
      array[i] = "Won't you be my neighbor?";
    } else if (digits.includes('2')) {
      array[i] = "Boop!";
    } else if (digits.includes('1')) {
      array[i] = 'Beep!';
    }
  }
  console.log(array);
}

StringToArray("123");

MrRogersNeighborhood("13");