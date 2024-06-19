// O(mn^2) in worst case

const countCommons = (suffix, prefix) => {
  const minStrLength = Math.min(suffix.length, prefix.length);
  let i = 0, subSum = 0;
  while (i < minStrLength) {
    if (suffix[i] === prefix[i]) {
      subSum += 1;
    } else {
      return subSum;
    }
    i++;
  }
  return subSum;
}

const solution = (inputs) => {
  return inputs.map((currentString) => {
    let totalSum = 0;
    for (let i = 0; i < currentString.length; i++) {
      totalSum += countCommons(currentString.slice(i), currentString);
    }
    return totalSum;
    }
  );
}
const inputs = ['ababaa'];
console.log(solution(inputs)); // [11]

const inputs2 = ['aa'];
console.log(solution(inputs2)); // [3]