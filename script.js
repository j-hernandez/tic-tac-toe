// Setting up our Abstraction

// Tic Tac Toe requires 3 columns and 3 rows
let ticTacToeBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];
// Setting up the concept of players - only 2 players
// needed for a game of Tic Tac Toe. We're using
// boolean values here to determine the player turns
let player1 = true;
let player2 = false;


/* Returns the value at a given row-column position */
function getValue(row, column) {
    if (row < 0 || row > 2 || column < 0 || column > 2) {
        return;
    }
    return ticTacToeBoard[0][0];
}
/* Prints the board to console */
function printBoard() {
    console.log('###################');
    console.log(ticTacToeBoard[0]);
    console.log(ticTacToeBoard[1]);
    console.log(ticTacToeBoard[2]);
    console.log('###################');
}

/* Sets value on the board at the given row and column */
function setValue(row, column, value) {
    // set the value
    ticTacToeBoard[row][column] = value;
    // print the board again showing the update
    printBoard();
}

// Make a Play
// Prompt for row
// Prompt for column
// Sets an X or an O on the board

function getUserInput() {
    var row = prompt("enter a row");
    var column = prompt("enter a column");

    // We had originally set this up because we were
    // prompting the user for their move. Eventually
    // we switched to determining the player turns 
    // programmatically 

    // I left this here as a reminder of the lesson
    // we learned when 'X' did not === 'X' - or more 
    // accurately, when we discovered that && was 
    // the correct operator - we originally started with 
    // || - remember?

    //var userInput = prompt("enter 'X' or 'O'");
    /*
    if (userInput !== 'X' && userInput !== 'O') {
        console.log(userInput)
        console.log('Bad user input');
        return;
    }
    */

    // Defensive coding! Let's make sure we can actually
    // make a move in the given row and column
    if (getValue(row, column) != null) {
        // Giving ourselves a little context here
        console.log('Unable to set value');
        return;
    }

    // player1 is true, then make a move with X
    // else make a move with O
    // set player 2 to true

    // Set the value variable up to make the move
    let value;
    // Checking the turn - if player1 === true, then 
    // X makes a move, otherwise, O
    if (player1 === true) {
        value = 'X'
    } else {
        value = 'O'
    }

    // Set the value, which uses our previous function
    setValue(row, column, value);

    // Change the active player by setting the inverse
    // on every turn. This effectively switches each player
    // from true to false or vice versa no matter what 
    // turn it is
    player1 = !player1;
    player2 = !player2;

}

function checkWinner() {
    // We got started with this but we left off before completing the exercise
    // and allowing for a full game.

    // https://app.schoology.com/course/2781900870/materials/gp/2782178567

    // Start with Step 11 if you want to pick up where we left off
    let board = ticTacToeBoard;
    const scenario1 = (
        (board[0][0] == 'O' && board[0][1] == 'O' && board[0][2] == 'O') || //top row
        (board[1][0] == 'O' && board[1][1] == 'O' && board[1][2] == 'O') || //middle row
        (board[2][0] == 'O' && board[2][1] == 'O' && board[2][2] == 'O') || //bottom row
        (board[0][0] == 'O' && board[1][0] == 'O' && board[2][0] == 'O') || //first column
        (board[0][1] == 'O' && board[1][1] == 'O' && board[2][1] == 'O') || //second column
        (board[0][2] == 'O' && board[1][2] == 'O' && board[2][2] == 'O') || //third column
        (board[0][0] == 'O' && board[1][1] == 'O' && board[2][2] == 'O') || //top left to bottom right diagonal
        (board[0][2] == 'O' && board[1][1] == 'O' && board[2][0] == 'O')); //top right to bottom left diagonal
    const scenario2 = (
        (board[0][0] == 'X' && board[0][1] == 'X' && board[0][2] == 'X') || //top row
        (board[1][0] == 'X' && board[1][1] == 'X' && board[1][2] == 'X') || //middle row
        (board[2][0] == 'X' && board[2][1] == 'X' && board[2][2] == 'X') || //bottom row
        (board[0][0] == 'X' && board[1][0] == 'X' && board[2][0] == 'X') || //first column
        (board[0][1] == 'X' && board[1][1] == 'X' && board[2][1] == 'X') || //second column
        (board[0][2] == 'X' && board[1][2] == 'X' && board[2][2] == 'X') || //third column
        (board[0][0] == 'X' && board[1][1] == 'X' && board[2][2] == 'X') || //top left to bottom right diagonal
        (board[0][2] == 'X' && board[1][1] == 'X' && board[2][0] == 'X')); //top right to bottom left diagonal

    let winner = scenario1 ? 'O' : 'X';
    console.log(`${winner} wins!`)
    return;

}

// Running the getUserInput function to "start" the game and make a play
// We'll need to write a loop that runs this function until someone wins
// in order for this script to allow us to truly play a full game of
// Tic Tac Toe - how would we do that?
getUserInput();