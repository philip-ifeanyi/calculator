// Hello, This is a simple calculator script

var operations = ['+', '-', '/', '*', '**', '%'];

var userInput1 = prompt('Input the first number');
userInput1 = Number.parseInt(userInput1, 10);

var userInput2 = prompt('Input the second number');
userInput2 = Number.parseInt(userInput2, 10);

var operator = prompt('Input an operator')

if(operations.includes(operator)) {
  switch (operator) {
    case '+':
      alert(userInput1 + userInput2);
      break
    case '-':
      alert(userInput1 - userInput2);
      break
    case '*':
      alert(userInput1 * userInput2);
      break
    case '/':
      alert(userInput1 / userInput2);
      break
    case '**':
      alert(userInput1 ** userInput2)
      break
    case '%':
      alert(userInput1 % userInput2)
      break
  }
} else {
  alert('Your choice of operator is currently not supported, try again!');
}