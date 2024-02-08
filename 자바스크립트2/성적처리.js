// 성적처리를 객체 지향으로 하고싶다.
// 데이터자체 정의 클래스 => DTO라는 접미어 (Data Transfer Object)
// 디비의 테이블 구조처럼 만든다.

class ScoreDate{ // 데이터만
  constructor(name="", kor=0, eng = 0, math = 0){
    console.log("ScoreDate 생성자 호출")
    this.name = name
    this.kor = kor
    this.eng = eng
    this.math = math
    this.process(); //본인 함수 호출할때 this 써야한다.
  }
  process(){
    this.total = this.kor+this.eng+this.math
  }
  toString(){
    return `${this.name} ${this.kor} ${this.eng} ${this.math} ${this.total}`
  }
}

class ScoreMgr{
  constructor(){
    this.dataList = [];
  }
  append(ScoreDate){
    this.dataList.push(ScoreDate)
  }
  find(value){
    return this.dataList.find((itme)=>{
      return itme.name == value //찾은걸 리턴해줘야함. 그래서 두개 씀.
    })
  }
  display(){
    this.dataList.forEach((socre)=>{
      console.log(socre.toString())
    })
  }
}

let mgr = new ScoreMgr();
mgr.append( new ScoreDate("a",60,70,30));
mgr.append( new ScoreDate("b",60,41,43));
mgr.append( new ScoreDate("c",60,70,50));
mgr.append( new ScoreDate("d",32,90,30));
mgr.append( new ScoreDate("e",60,100,30));

mgr.display()
let aa = "a"
let result = mgr.find(aa) 
if (result == null)
  console.log(`${aa}를 찾을 수 없습니다`)
else
  console.log("***found****",result.toString())


/*
 forEach : 함수가 매개변수가 있고 반환값이 없다. 주로 출력용
 map : 값을 변경을 해야할 때 , 반환값이 있다.
 find : boolean 값을 반환해야한다. 첫번째 꺼 찾으면 멈추고 객체반환
        끝까지 찾아보고 없으면 null 반환
 filter: boolean 값을 반환해야한다. 반환값이 true인 모든 데이터를 묶어서 반환.
         객체배열을 반환한다.
  
*/

// 클래스는 extends 로 상속받는다.
// 이무것도 안해도 부모꺼 다 받는다.
class MiddleScore extends ScoreDate{
  constructor(){
    // 가급적으러 생성자 새로 만들어라.
    // 새로 추가된 요소가 있을 때 알수가 없으므로 생성자 새로 만들얼라
    // 자동으로 부모 생성자를 호출하도록 되어있음.
    super("홍길동",60,20,100); // 부모생서자를 호출은 할 수 있다. 부모생성자, 내가 호출해줘야한다. 무조건 첫번째라인에 적어줘ㅓ여함.
  }
}

console.log("상속받은 객체생성")
m1 = new MiddleScore();
console.log(m1.toString())

