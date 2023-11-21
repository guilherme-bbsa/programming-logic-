const testCase = {
  probCombination: "yyt",
  inputCombination: "ttyttyttyytty",
};

const organizeSequence = (sequence) => {
  let firstCharacter = sequence[0];
  let newSequence = sequence + firstCharacter;

  return newSequence;
};

const compareSequence = (probCombination, inputCombination) => {
  const newInput = organizeSequence(inputCombination);
  let countPosition = 0;
  let firstLetterIndex = 0;
  const countFirstLetterPosition = [];
  for (let i = 0; i < newInput.length; i++) {
    if (
      probCombination[0] === newInput[i] &&
      newInput.length - i >= probCombination.length
    ) {
      countFirstLetterPosition.push(i);
    }
  }
  console.log(newInput, countFirstLetterPosition)

  for (let i = 0; i < countFirstLetterPosition.length; i++) {
    firstLetterIndex = countFirstLetterPosition[i]
    for (let j = firstLetterIndex; j < newInput.length; j++) {
      if (probCombination[countPosition] === newInput[j]) {
        countPosition += 1;
        if(countPosition === probCombination.length) {
          return "sim"
        }
      } else{
        countPosition = 0;
        break
      }
    }
  }
  return "nao"
};

console.log(compareSequence(testCase.probCombination, testCase.inputCombination)
)