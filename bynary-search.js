const testCase = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
const primeNumber = 19

const binarySearch = (primeArray, target) => {
  let min = 0
  let max = primeArray.length - 1
  let guess;
  let condition = true

  while (condition) {
    guess = Math.trunc((min + max) / 2)

    if (max < min) return -1
    else if (primeArray[guess] < target) {
      min = guess + 1
    } else if (primeArray[guess] > target) {
      max = guess - 1
    } else if (primeArray[guess] === target) {
      condition = false
      return guess
    }
  }
}

console.log(binarySearch(testCase, primeNumber))