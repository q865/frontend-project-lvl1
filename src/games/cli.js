import readlineSync from 'readline-sync'

export default async (rules) => {
  console.log("Welcom to the Brain Games!");
  const name = await readlineSync.question("May i have your Name? ");
  console.log(`Hello, ${name}!`);
  console.log(rules)
  return name
};
