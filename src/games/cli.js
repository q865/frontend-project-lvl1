import promptly from "promptly";

export default async () => {
  console.log("Welcom to the Brain Games!");
  const name = await promptly.prompt("May i have your Name?");
  console.log(`Hello ${name}`);
  return name
};
