
// UTILITY LOGIC

function StringToArray(text) {
  text = String (text);
  text = text.split("");
  return text;
}

// BUSINESS LOGIC

function MrRogersNeighborhood(input) {
  size = parseInt(input);
  if (!Number(size) || size <= -1) {
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
  return array.join(" ");
}

function PrimeCheck (number) {
  number = parseInt(number);
  if (!Number(number) || number <= -1) {
    return "Error: Please input a positive number. Do not include any characters.";
  } else if (number === 1) {
    return "1 is not a prime or a composite number.";
  } else {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return String(number) + " is not prime"
      } else {
        return String(number) + " is prime"
      }
    }
  }
}

// UI LOGIC

$(document).ready(function() {
  $("form#mr-rogers").submit(function(event) {
    event.preventDefault();
    const inputNum = $("#inputNumber").val();
    const resultString = MrRogersNeighborhood(inputNum);

    $(".output").text(resultString);
  });
});