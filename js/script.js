// ruch komputera

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let argComputerMove = getMoveName(randomNumber);

printMessage('Mój ruch to ' + argComputerMove);

//ruch gacza

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał ' + playerInput);

let argPlayerMove = getMoveName(playerInput);

printMessage('Twój ruch to ' + argPlayerMove);

//rezultat

let result = displayResults(argComputerMove, argPlayerMove);

printMessage(result)