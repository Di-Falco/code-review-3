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

MrRogersNeighborhood("4");