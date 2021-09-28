import startGame from '../index.js';

export default () => {
  const progression = (array) => {
    const prevIndex = array.indexOf('..') - 1;
    const nextIndex = prevIndex + 2;
    const diapason = Math.abs(array[prevIndex] - array[nextIndex]) / 2;
    return array[prevIndex] + diapason;
  };
  startGame('progression', progression, 'What number is missing in the progression?');
};
