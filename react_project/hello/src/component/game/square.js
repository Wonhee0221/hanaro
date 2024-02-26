
// 클릭하면 o 또는 x 가 그려지는 말을 놓아야 할 위치를 컴포넌트로 만들자
// 버튼 컴포넌트를 커스터마이징 => React Component로 만들음.
// 부모한테 내가 클릭되었음을 알려야한다.
// const {value, onSquareClick} = props // 자식컴포넌ㄴ트ㅡ기 때문에 props로 받는다.
// O가 클릭될지 X가 클릭될지 모른다,
// 부모 컴포넌트로 부터 value, onSquareClick를 전달 받는다.
function Square({value, onSquareClick}) {
  return ( 
    <button type="button" className="square" onClick={onSquareClick}>{value}</button>
   );
}

export default Square;