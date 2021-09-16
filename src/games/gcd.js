const generatorExpression = (game) => {
  const getRandom = (diapason) => Math.round(Math.random() * diapason);
  switch(game) {
    case 'calc':
      const sumbols = ['+', '-', '*'];
      return `${getRandom(20)} ${sumbols[getRandom(2)]} ${getRandom(20)}`
    case 'isEven':
      return getRandom(100)
    case 'gcd':
      return `${getRandom(100)} ${getRandom(100)}`
  }
}
