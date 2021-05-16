function playGame(playerInput) {

    clearMessages()

    // ruch komputera

    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    let argComputerMove = getMoveName(randomNumber);

    printMessage('Mój ruch to ' + argComputerMove);

    //ruch gacza

    //let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

    console.log('Gracz wpisał ' + playerInput);

    let argPlayerMove = getMoveName(playerInput);

    printMessage('Twój ruch to ' + argPlayerMove);

    //rezultat

    let result = displayResults(argComputerMove, argPlayerMove);

    printMessage(result);
}

document.getElementById('play-rock').addEventListener('click', function() {
    playerInput = 1;
    playGame(playerInput);
});

document.getElementById('play-paper').addEventListener('click', function() {
    playerInput = 2;
    playGame(playerInput);
});

document.getElementById('play-scissors').addEventListener('click', function() {
    playerInput = 3;
    playGame(playerInput);
});