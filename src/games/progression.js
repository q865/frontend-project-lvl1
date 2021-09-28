import startGame from '../index.js';

export default () => {
  const progression = (answer) => {
    return answer;
  };
  startGame('progression', progression, 'What number is missing in the progression?');
};
