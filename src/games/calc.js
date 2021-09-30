import getRandomInt from '../utils.js';
import runEngine from '../index.js';

const calc = (num1, num2, sign) => {
  switch (sign) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    default: return null;
  }
};

const signs = ['+', '-', '*'];

const genRoundData = () => {
  const num1 = getRandomInt();
  const num2 = getRandomInt();
  const signIndex = getRandomInt(0, signs.length);
  const question = `${num1} ${signs[signIndex]} ${num2}`;
  const correctAnswer = String(calc(num1, num2, signs[signIndex]));
  return { correctAnswer, question };
};

export default () => runEngine(genRoundData, 'What is the result of the expression?');
