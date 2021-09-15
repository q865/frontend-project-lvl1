import promptly from 'promptly';
import cli from './cli.js';

export default async () => {
  const getRandom = (diapason) => Math.round(Math.random() * diapason);
  const name = await cli();
  const generatorExpression = (num1, num2) => {
    const sumbols = ['+', '-', '*'];
    const indexOperand = getRandom(2);
    console.log(`${num1} ${sumbols[indexOperand]} ${num2}`);
    return [num1, num2, sumbols[indexOperand]];
  };

  const chekedTryAnswer = ([num1, num2, operand]) => {
    switch (operand) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
    }
  };
  const calcLogic = async (n = 0) => {
    if (n === 3) {
      return console.log(`Correct!
Congratulations, ${name}`);
    }
    const expression = generatorExpression(getRandom(20), getRandom(20));
    const userAnswer = await promptly.prompt('Your answer:');
    const truAnswer = chekedTryAnswer(expression);
    if (userAnswer == truAnswer && n < 5) {
      console.log('correct!');
      return calcLogic(n + 1);
    }
   return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${truAnswer}'.
Let's try again, ${name}`);
  };

  await calcLogic();
};
