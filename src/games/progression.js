import getRandomInt from '../utils.js';
import runEngine from '../index.js';

const creatProgression = (firstNum, difference, lengthProgression) => {
  const progression = [];
  progression.push(firstNum);
  for (let i = 1; i < lengthProgression; i += 1) {
    progression.push(progression[i - 1] + difference);
  }
  return progression;
};

const genRoundData = () => {
  const firstNum = getRandomInt();
  const difference = getRandomInt(1, 5);
  const lengthProgression = getRandomInt(6, 10);
  const progression = creatProgression(firstNum, difference, lengthProgression);

  const indexNum = getRandomInt(0, (progression.length - 1));
  const encryptNumber = progression[indexNum];
  progression[indexNum] = '..';

  const question = progression.join(' ');

  const correctAnswer = String(encryptNumber);

  return { correctAnswer, question };
};

export default () => runEngine(genRoundData, 'What number is missing in the progression?');
