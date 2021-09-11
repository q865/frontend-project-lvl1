import promptly from "promptly";

 const isEven = (num) => num % 2 === 0 
 const getRandom = () => Math.round(Math.random() * 100)

export default async () => {
  console.log("Welcom to the Brain Games!");
  const name = await promptly.prompt("May i have your Name?");
  console.log(`Hello ${name}`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".')
  console.log(`Question: ${getRandom()}`)
  const answer = await promptly.prompt('Your answer:')
};