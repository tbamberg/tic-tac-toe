function Gameboard() {
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
}

/* 
** 0: empty
** 1: player 1 "x"
** 2: player 2 "o"
*/