const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	function divide(arr, n) {
    const result = [];
    let currentChunk = [];
    let currentSum = 0;

    for (const x of arr) {
      // If adding x would exceed n, push currentChunk and start a new one
      if (currentSum + x > n) {
        if (currentChunk.length > 0) {
          result.push(currentChunk);
        }
        currentChunk = [x];
        currentSum = x;
      } else {
        currentChunk.push(x);
        currentSum += x;
      }
    }

    // Push the last chunk if not empty
    if (currentChunk.length > 0) {
      result.push(currentChunk);
    }

    return result;
  }

  
const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
