import readlineSync from 'readline-sync';
import cli from './games/cli.js';

const startGame = async (gameName, gameLogic, rules) => {
  const name = await cli(rules);
  const generatorExpression = (gameName) => {
    const getRandomIntInclusive = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
    };
    let expression;
    switch (gameName) {
      case 'calc':
        const sumbols = ['+', '-', '*'];
        expression = `${getRandomIntInclusive(1, 20)} ${sumbols[getRandomIntInclusive(0, 2)]} ${getRandomIntInclusive(
          1,
          20,
        )}`;
        console.log(`Question: ${expression}`);
        return expression.split(' ');
      case 'isEven':
        expression = getRandomIntInclusive(1, 100);
        console.log(`Question: ${expression}`);
        return expression;
      case 'gcd':
        expression = `${getRandomIntInclusive(1, 100)} ${getRandomIntInclusive(1, 100)}`;
        console.log(`Question: ${expression}`);
        return expression.split(' ');
      case 'progression':
        const createProgression = (firstNum, difference, lengthProgression) => {
          const progression = [];
          progression.push(firstNum);
          for (let i = 1; i < lengthProgression; i++) {
            progression.push(progression[i -1 ] + difference);
          }
          return progression;
        }
        const firstNum = getRandomIntInclusive(1,100)
        const difference = getRandomIntInclusive(1,5);
        const lengthProgression = getRandomIntInclusive(6,10)
        const progression = createProgression(firstNum,difference,lengthProgression);

        const indexNum = getRandomIntInclusive(0, (progression.length -1));
        const encryptNumber = progression[indexNum];
        progression[indexNum] = '..';
        const question = progression.join(' ');

        const correctAnswer = String(encryptNumber);
        console.log(question)
        return correctAnswer;

      case 'praim':
        expression = getRandomIntInclusive(0, 10);
        console.log(`Question: ${expression}`);
        return expression;
    }
  };
  const logic = async (gameName, gameSolution, counter = 0) => {
    if (counter === 3) {
      return console.log(`Congratulations, ${name}!`);
    }
    const expression = generatorExpression(gameName);
    const userAnswer = await readlineSync.question('Your answer: ');
    const truAnswer = gameSolution(expression);
    if (userAnswer == truAnswer) {
      console.log('Correct!');
      return logic(gameName, gameSolution, counter + 1);
    }
    if (gameName === 'progression') {
      console.log(`Question: 5 7 9 11 13 .. 17 19 21 23`);
    }
    return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${truAnswer}'.
Let's try again, ${name}!`);
  };
  logic(gameName, gameLogic);
};
export default startGame;
