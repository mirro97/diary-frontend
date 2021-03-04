// 어떤 행위를 한다는 기술만 하면 됨. 값을 반환하지 않음
interface TV{
    turnOn(): boolean;
    turnOff(): void;
}

// myTV는 TV 타입의 값만 받아야한다
const myTV: TV = {
    turnOn() {
        return true;
    },
    turnOff(){

    }
}

function tryTurnOn(tv: TV){
    tv.turnOn();
}

tryTurnOn(myTV);

// 보드게임을 전제로 진행
interface Cell {
    row: number;
    col: number;
    piece?: Piece; // 옵션화의 속성을 주어 사용하지 않아도 되게끔 한다
}

interface Piece {
    move(from: Cell, to: Cell): boolean;
}

function createBoard(){
    const cells: Cell[] = [];
    for(let row = 0; row < 4; row ++){
        for(let col = 0; col < 4; col ++){
            cells.push({row,col});
        }
    }
    return cells;
}

const board = createBoard();
board[0].piece = {
    move(from:Cell, to: Cell){
        return true;
    }
}