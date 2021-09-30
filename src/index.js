import readlineSync from 'readline-sync';

const roundCount = 3;

const runEngine = (genRoundData, description) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);
  for (let i = 0; i < roundCount; i += 1) {
    const roundData = genRoundData();
    console.log(`Question: ${roundData.question}`);
    const userAnswer = readlineSync.question('Your Answer: ');
    if (userAnswer !== roundData.correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer! ;(. Correct answer was '${roundData.correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runEngine;
