import startGame from '../index.js';

export default () => {
  const isEvenChecked = (num) => (num % 2 === 0 ? 'yes' : 'no');
  startGame('isEven', isEvenChecked,'Answer "yes" if the number is even, otherwise answer "no".');
};
