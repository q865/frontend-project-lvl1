import readlineSync from 'readline-sync'

export default async (rules) => {
  console.log("Welcome to the Brain Games!");
  const name = await readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);
  rules ? console.log(rules) : ''
  return name
};
