const numbers = [1, 2, 5, 9, 10, 4];

function getMax(arr) {
  let max = -Infinity;
  arr.forEach(function(number) {
    max = Math.max(max, number);
  });
  return max;
}

const max = getMax(numbers);
max;
