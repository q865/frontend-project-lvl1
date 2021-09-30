import getRandomInt from '../utils.js';
import runEngine from '../index.js';

const gcd = (num1, num2) => {
  const minNum = Math.min(num1, num2);
  for (let divider = minNum; divider > 1; divider -= 1) {
    if (num1 % divider === 0 && num2 % divider === 0) {
      return divider;
    }
  }
  return 1;
};

const genRoundData = () => {
  const num1 = getRandomInt();
  const num2 = getRandomInt();
  const question = `${num1} ${num2}`;
  const correctAnswer = String(gcd(num1, num2));
  return { correctAnswer, question };
};

export default () => runEngine(genRoundData, 'Find the greatest common divisor of given numbers.');
