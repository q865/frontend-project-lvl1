import startGame from '../index.js';

export default () => {
  const praim = (num, n = 2) => {
    if (n === num) {
      return 'yes';
    }
    return num % n === 0 ? 'no' : praim(num, n + 1);
  };
  startGame('praim', praim);
};
