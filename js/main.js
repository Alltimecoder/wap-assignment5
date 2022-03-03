// solution for que 1 to 13
{
  ("use-strict");
  function max(x, y) {
    if (x > y) {
      return x;
    } else if (y > x) {
      return y;
    } else {
      return null;
    }
  }

  console.log(max(3, 5));

  function maxOfThree(x, y, z) {
    let maxOfTwo = max(x, y);
    return max(maxOfTwo, z);
  }

  console.log(maxOfThree(10, 19, 3));

  function isVowel(x) {
    const vowels = ["a", "e", "i", "o", "u"];
    return vowels.includes(x);
  }

  console.log(isVowel("a"));
  console.log(isVowel("z"));

  function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  console.log(sum([1, 2, 3, 4, 5]));

  function multiply(arr) {
    let total = 1;
    let i = arr.length - 1;
    while (i > 0) {
      total *= arr[i];
      i--;
    }
    return total;
  }

  console.log(multiply([1, 2, 3, 4, 5]));

  function reverse(term) {
    return term.split("").reverse().join("");
  }

  console.log(reverse("sayal"));

  function findLongestWord(arr) {
    let maxLength = arr[0].length;
    for (let word of arr) {
      if (word.length > maxLength) {
        maxLength = word.length;
      }
    }
    return maxLength;
  }

  console.log(findLongestWord(["asbd", "sdsada", "this is longest"]));
  console.log(
    findLongestWord([
      "Now this is longest",
      "asbd",
      "sdsada",
      "this is longest",
    ])
  );

  const computeSumOfSquares = (arr) => {
    let sumOfSquares = 0;
    arr.forEach((a) => (sumOfSquares += a * a));
    return sumOfSquares;
  };

  console.log(computeSumOfSquares([1, 2, 3, 4]));

  function printOddNumbersOnly(arr) {
    let arrOfOdds = [];
    arr.forEach((a) => {
      if (a % 2 !== 0) {
        arrOfOdds.push(a);
      }
    });
    return arrOfOdds;
  }

  console.log(printOddNumbersOnly([1, 3, 4, 5, 6]));

  function computeSumOfSquaresOfEvensOnly(arr) {
    let sum = 0;
    arr.forEach((a) => {
      if (a % 2 === 0) {
        sum += a * a;
      }
    });
    return sum;
  }
  console.log(computeSumOfSquaresOfEvensOnly([2, 3, 4, 5, 6]));

  function newSum(arr) {
    const initialValue = 0;
    const sum = arr.reduce((prev, current) => prev + current, initialValue);
    return sum;
  }
  console.log(newSum([1, 2, 3, 4, 5]));

  function newMultiply(arr) {
    let initialValue = 1;
    const total = arr.reduce((prev, current) => prev * current, initialValue);
    return total;
  }

  console.log(newMultiply([1, 2, 3, 4, 5]));

  const findSecondBiggest = (arr) => {
    const max = Math.max.apply(null, arr);
    const indexOfMax = arr.indexOf(max);
    arr[indexOfMax] = -Infinity;
    return Math.max.apply(null, arr);
  };

  console.log(findSecondBiggest([5, 22, 19, 1, 3]));

  const printFibo = (length, a, b) => {
    const nextElement = (x, y) => {
      return x + y;
    };
    let i = 1;
    let fiboSequence = [a, b];
    if (length > 2) {
      let x = a;
      let y = b;
      while (i !== length) {
        let next = nextElement(x, y);
        fiboSequence.push(next);
        x = y;
        y = next;
        i++;
      }
    }
    return fiboSequence;
  };

  console.log(printFibo(4, 0, 1));
}
