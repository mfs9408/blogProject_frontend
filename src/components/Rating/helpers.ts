import { Dispatch, SetStateAction } from 'react';

const raiseRating = (
  score: number,
  setScore: Dispatch<SetStateAction<number>>
) => {
  if (score === -1) {
    return setScore((score += 1));
  }

  if (score === 1) {
    return setScore(0);
  }

  return setScore((score += 1));
};

const decreaseRating = (
  score: number,
  setScore: Dispatch<SetStateAction<number>>
) => {
  if (score === -1) {
    return setScore(0);
  }

  return setScore((score -= 1));
};

export { raiseRating, decreaseRating };
