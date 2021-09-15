import promptly from 'promptly';

const isEven = (num) => num % 2 === 0;
const getRandom = () => Math.round(Math.random() * 100);

export default async () => {
  console.log('Welcom to the Brain Games!');
  const name = await promptly.prompt('May i have your Name?');
  console.log(`Hello ${name}`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const isEvenChecked = (num) => num % 2 === 0 ? 'yes' : 'no'
  let counter = 0;
  while (counter <= 3) {
    const randomValue = getRandom();
    console.log(`Question: ${randomValue}`);
    const answer = await promptly.prompt('Your answer:');
     const truAnswer = isEvenChecked(randomValue)
    if (truAnswer == answer){
      counter += 1
      console.log('Correct!')
    }else{
      return console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.
Let's try again, ${name}!`)
    }
  }
  console.log(`Congratulations, ${name}!`)
};
