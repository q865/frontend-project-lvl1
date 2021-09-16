import promptly from 'promptly';
import cli from './games/cli.js'

const startGame = async (gameName, gameLogic) => {
  const name = await cli();
  const generatorExpression = (gameName) => {
    const getRandom = (diapason) => Math.round(Math.random() * diapason);
    let expression;
    switch (gameName) {
      case 'calc':
        const sumbols = ['+', '-', '*'];
        expression = `${getRandom(20)} ${sumbols[getRandom(2)]} ${getRandom(20)}`;
        console.log(expression);
        return expression.split(' ');
      case 'isEven':
        expression = getRandom(100);
        console.log(expression);
        return expression;
      case 'gcd':
        expression = `${getRandom(100)} ${getRandom(100)}`;
        console.log(expression)
        return expression.split(' ');
    }
  };
  const logic = async (gameName,gameSolution,counter = 0) => {
    if (counter === 3) {
      return console.log(`Congratulations, ${name}`);
    }
    const expression = generatorExpression(gameName);
    const userAnswer = await promptly.prompt('Your answer:');
    const truAnswer = gameSolution(expression);
    if (userAnswer == truAnswer) {
      console.log('correct!');
      return logic(gameName,gameSolution,counter + 1);
    }
    return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${truAnswer}'.
Let's try again, ${name}`);
  };
 logic(gameName,gameLogic)
};
export default startGame;
