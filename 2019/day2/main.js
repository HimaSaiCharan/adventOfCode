const code = [1, 12, 2, 3, 1, 1, 2, 3, 1, 3, 4, 3, 1, 5, 0, 3, 2, 1, 9, 19, 1, 19, 5, 23, 2, 23, 13, 27, 1, 10, 27, 31, 2, 31, 6, 35, 1, 5, 35, 39, 1, 39, 10, 43, 2, 9, 43, 47, 1, 47, 5, 51, 2, 51, 9, 55, 1, 13, 55, 59, 1, 13, 59, 63, 1, 6, 63, 67, 2, 13, 67, 71, 1, 10, 71, 75, 2, 13, 75, 79, 1, 5, 79, 83, 2, 83, 9, 87, 2, 87, 13, 91, 1, 91, 5, 95, 2, 9, 95, 99, 1, 99, 5, 103, 1, 2, 103, 107, 1, 10, 107, 0, 99, 2, 14, 0, 0];

const operation = (operator, intCode, currPos) => {
  const firstInput = intCode[intCode[currPos + 1]];
  const secondInput = intCode[intCode[currPos + 2]];

  if (operator === "+") {
    return firstInput + secondInput;
  }

  return firstInput * secondInput;
};

const executeIntcode = (intCode) => {
  let currPos = 0;

  while (intCode[currPos] !== 99) {
    const opCode = intCode[currPos];

    if (opCode === 1) {
      intCode[intCode[currPos + 3]] = operation("+", intCode, currPos);
      currPos += 4;
    }

    if (opCode === 2) {
      intCode[intCode[currPos + 3]] = operation("*", intCode, currPos);
      currPos += 4;
    }
  }

  return intCode;
};

const main = (code) => {
  for (let noun = 12; noun < 100; noun++) {
    for (let verb = 2; verb <= noun; verb++) {
      let intCode = [...code];
      intCode[1] = noun;
      intCode[2] = verb;

      intCode = executeIntcode(intCode);

      if (intCode[0] === 19690720) return 100 * intCode[1] + intCode[2];
    }
  }
};

console.log(main(code));