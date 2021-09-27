import startGame from '../index.js';

export default () => {
  const calc = ([num1, operand, num2]) => {
    switch (operand) {
      case '+':
        return +num1 + +num2;
      case '-':
        return +num1 - +num2;
      case '*':
        return +num1 * +num2;
    }
  };
  startGame('calc', calc,'What is the result of the expression?');
};
