import getRandomInt from '../utils.js';
import runEngine from '../index.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= (num / 2); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const genRoundData = () => {
  const num = getRandomInt();
  const question = String(num);
  const correctAnswer = isPrime(num) ? 'yes' : 'no';
  return { correctAnswer, question };
};

export default () => runEngine(genRoundData, 'Answer "yes" if given number is prime. Otherwise answer "no".');
