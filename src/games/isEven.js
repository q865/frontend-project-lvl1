import startGame from '../index.js';

export default () => {
  const isEvenChecked = (num) => (num % 2 === 0 ? 'yes' : 'no');
  startGame('isEven', isEvenChecked);
};
