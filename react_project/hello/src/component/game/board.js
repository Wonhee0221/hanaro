import { useState } from "react";
import Square from "./square";
function GameBoard() {
    //배열을 메모리 크기 주고 만든다. Array(크기).fill(0) 만들고 특정값으로 초기화
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const [winner, setWinner] = useState("");
    const tempFunc=(index)=>{
        //alert(index);
        // 그 위치에 돌이 없어야 한다
        console.log(squares[index] );
        if(  !squares[index])
        {
            setXIsNext( !xIsNext ); //true <=> false가 바뀐다.
            xIsNext?squares[index] = 'X': squares[index]='O';
            //깊은복사를 하고 있음
            setSquares( [...squares] ); //배열 깊은 복사
        }
        let winner = whoIsWin(squares);
        if( winner !=null) //게임 승리 여부 따져야 한다
        {
            setWinner(winner + " is winner" );
            //alert( winner + " is winner");
            return; //함수종료
        }
    }
    return (
        <>
            <h3>{winner}</h3>
            <div className="board-row">
                <Square value={squares[0]} onSquareClick={()=>tempFunc(0)}/>
                <Square value={squares[1]} onSquareClick={()=>tempFunc(1)}/>
                <Square value={squares[2]} onSquareClick={()=>tempFunc(2)}/>
            </div>
            <div className="board-row">
                <Square value={squares[3]} onSquareClick={()=>tempFunc(3)}/>
                <Square value={squares[4]} onSquareClick={()=>tempFunc(4)}/>
                <Square value={squares[5]} onSquareClick={()=>tempFunc(5)}/>
            </div>
            <div className="board-row">
                <Square value={squares[6]} onSquareClick={()=>tempFunc(6)}/>
                <Square value={squares[7]} onSquareClick={()=>tempFunc(7)}/>
                <Square value={squares[8]} onSquareClick={()=>tempFunc(8)}/>
            </div>
        </>
     )
}
//winer를 결정할 함수 만들기
function whoIsWin( squares)
{
    const lines = [
        [0,1,2],  // squares[0] == squares[1] == squares[2]
        [3,4,5],  // squares[3] == squares[4] == squares[5]
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    let i;
    for(i=0; i<lines.length; i++)
    {
        const [a, b, c] = lines[i]; //배열도 해체가 된다.
        /*
        const a = lines[i][0];
        const b = lines[i][1];
        const c = lines[i][2];
        */
        //a = 0, b=1, c=2 squares[a]!=null
        if( squares[a]!=null && squares[a]==squares[b] && squares[b]==squares[c])
            return squares[a]; //끝나는 기호 승리의 기호
    }
    //마지막에 return 구문이 없으면 undefined 가 반환된다.
    return null; //for문을 다 돌아도 못 끝내면 마지막에 null을 반환
}
export default GameBoard;