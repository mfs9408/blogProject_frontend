const showPageNumber = (numberArray: number[], currentPage: number) => {
  if (numberArray.length > 7) {
    if (currentPage === 1) {
      return [
        numberArray[0],
        numberArray[1],
        numberArray[2],
        '...',
        numberArray.length - 2,
        numberArray.length - 1,
        numberArray.length,
      ];
    }
    if (currentPage > 1 && currentPage < 4) {
      return [
        numberArray[0],
        numberArray[1],
        numberArray[2],
        numberArray[3],
        '...',
        numberArray.length - 2,
        numberArray.length - 1,
        numberArray.length,
      ];
    }
    if (currentPage >= 4 && currentPage <= numberArray.length - 3) {
      return [
        numberArray[0],
        numberArray[1],
        '...',
        numberArray[currentPage - 2],
        numberArray[currentPage - 1],
        numberArray[currentPage],
        '...',
        numberArray.length - 1,
        numberArray.length,
      ];
    }

    if (
      currentPage > numberArray.length - 3 &&
      currentPage < numberArray.length
    ) {
      return [
        numberArray[0],
        numberArray[1],
        numberArray[2],
        '...',
        numberArray.length - 3,
        numberArray.length - 2,
        numberArray.length - 1,
        numberArray.length,
      ];
    }
    if (currentPage === numberArray.length) {
      return [
        numberArray[0],
        numberArray[1],
        numberArray[2],
        '...',
        numberArray.length - 2,
        numberArray.length - 1,
        numberArray.length,
      ];
    }
  }
  return numberArray.map((num) => num);
};

const numberToArrayConverter = (pagesQuantity: number) => {
  let array: number[] = [];
  for (let i = 1; i <= pagesQuantity; i++) {
    array.push(i);
  }
  return array;
};

export { showPageNumber, numberToArrayConverter };
