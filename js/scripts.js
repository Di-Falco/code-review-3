
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
  let primeArray = [];
  let prime = true;
  let subPrime = true;
  if (!Number(number) || number <= -1) {
    primeArray.unshift("Error: Please input a positive number. Do not include any characters.");
    return primeArray;
  } else if (number === 1) {
    primeArray.unshift("1 is not a prime or a composite number");
    return primeArray;
  } else {
    for (let i = 2; i < number; i++) {
      subPrime = true;
      if (number % i === 0) {
        prime = false;
      }
      for (let j = 2; j < i; j++) {
        if (i % j === 0) {
          subPrime = false;
          break;
        }
      }
      if (subPrime === true) {
        primeArray.push(i);
      } 
    }
    if (prime === true) {
      primeArray.push(number);
      primeArray.unshift(number+ " is prime");
    } else {
      primeArray.unshift(number+ " is not prime");
    }
    return primeArray;
  }
}

function PrimeFactors(number, array) {
  let factorArray = [];
  for(let i = 0; i < array.length; i++) {
    while(number % array[i] === 0){
      factorArray.push(array[i]);
      number /= array[i]
    }
  }
  let simpleFactors = [];
  let power = 1;
  for (let i = 0; i < factorArray.length; i++) {
    power = 1;
    while (factorArray[i] === factorArray[i+1]) {
      power++;
      i++;
    }
    if(power !== 1){
      simpleFactors.push(factorArray[i] + "^" + power);
    } else {
      simpleFactors.push(factorArray[i]);      
    }
  }
  return simpleFactors;
}

function BinaryConverter(decimal) {
  let binaryArray = [];
  if (!Number(decimal) || decimal <= -1) {
    binaryArray.unshift("Error: Please input a positive number. Do not include any characters.");
    return binaryArray;
  }
  while(decimal > 0) {
    if(decimal % 2 === 0){
      binaryArray.unshift('0');
    } else {
      binaryArray.unshift('1');
    }
    decimal = Math.floor(decimal/2);
  }
  while(binaryArray.length%4 !== 0){
    binaryArray.unshift('0');
  }
  for(let i = binaryArray.length - 1; i >= 3; i--) {
    if((i)%4 === 0){
      binaryArray.splice(binaryArray.length - i, 0, " ");
    }
  }
  return binaryArray.join("");
}

// UI LOGIC

$(document).ready(function() {
  $("form#mr-rogers").submit(function(event) {
    event.preventDefault();
    const inputNum = $("#inputNumber").val();
    const resultString = MrRogersNeighborhood(inputNum);

    $(".output").text(resultString);
  });

  $("form#primes").submit(function(event) {
    event.preventDefault();
    const inputNum = $("#inputNumber").val();
    const prime = PrimeCheck(inputNum);
    const primeStatus = prime[0];
    const primeList = prime.slice(1);
    const factors = PrimeFactors(inputNum, primeList);
    console.log(factors);

    $(".prime-status").text(primeStatus);
    $(".num").text(inputNum);
    $(".prime-factors").text(factors.join(" * "));
    $(".prime-list").text(primeList.join(", "));
  });

  $("form#decimal-to-binary").submit(function(event) {
    event.preventDefault();
    const inputNum = $("#inputNumber").val();
    const resultString = BinaryConverter(inputNum);

    $(".output").text(resultString);
  });
});