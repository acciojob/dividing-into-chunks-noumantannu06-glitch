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

  // Example tests
  const tests = [
    { input: [1, 2, 3, 4, 1, 0, 2, 2], n: 5 },
    { input: [4, 3, 2, 1], n: 4 },
    { input: [2, 1, 1, 1, 1, 1], n: 3 },
    { input: [-1, 2, 3, -2, 4], n: 5 }
  ];

  const testsEl = document.getElementById("tests");

  tests.forEach(({ input, n }) => {
    const chunks = divide(input, n);
    const div = document.createElement("div");
    div.className = "test";
    div.innerHTML = `
      <strong>Input:</strong> [${input.join(", ")}] | n = ${n}<br/>
      <strong>Output:</strong> ${JSON.stringify(chunks)}
    `;
    testsEl.appendChild(div);
  });
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
