import startGame from '../index.js';

export default () => {
  const progression = (array) => {
    const searchIndex = array.indexOf('..');
    const prevIndex = searchIndex === 0 ? 1 : searchIndex - 1;
    const nextIndex = searchIndex === 10 ? 9 : searchIndex + 1;
    const diapason = Math.abs(array[prevIndex] - array[nextIndex]) / 2;
    return array[prevIndex] + diapason;
  };
  startGame('progression', progression, 'What number is missing in the progression?');
};
