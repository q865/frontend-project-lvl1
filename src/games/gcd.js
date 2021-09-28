import startGame from '../index.js';

export default () => {
  const gcd = ([num1, num2]) => {
    let min = Math.min(num1, num2);
    while (min > 0) {
      if (num1 % min === 0 && num2 % min === 0) {
        return min;
      }
      min -= 1;
    }
  };
  startGame('gcd', gcd, 'Find the greatest common divisor of given numbers.');
};
