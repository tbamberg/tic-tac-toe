const Gameboard = (function () {
    const board = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];
    
    const getBoard = () => board;
    
    const markSquare = (row, column, player) => {
        if (board[row][column] > 0) return;

        board[row][column] = player;
    }

    const printBoard = () => {
        console.table(board);
    };
    
    return { getBoard, markSquare, printBoard };
    
})();

/* 
** 0: empty
** 1: player 1 "x"
** 2: player 2 "o"
*/

/*
function game() {
    create player 1
    create player 2

    turn tracking:
        let round = 1
        round++ after each turn
        return odd or even

    check for a winner:
        // what about draws??
        

    while no winner { 
        
        if turn is odd, prompt player 1 for a row and column
        if turn is even, prompt player 2 for a row and column
    }


}

*/