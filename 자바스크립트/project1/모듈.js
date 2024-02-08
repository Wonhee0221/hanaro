import fs from 'fs'
//package.json파일에 "type" 속성이 module일때 작동된다.
// const assert = reqire('assert')
import assert from 'assert';// 검증할때

class CommonClass{
  //생성자
  _arr=[]; // 메모리 하나 만들음.
  constructor(...args){
      /// ...args : 가변 매개변수처럼 만들어줌. 데이터들이 배열로 전달해준다. java의 String[]args 와 같은 것이다.
    // console.log(args);
    // console.log(Array.isArray(args[0])) //첫번째 요소가 배열인가?
    if (Array.isArray(args[0]))
      this._arr = args[0]
    else
      this._arr = args;
    // 어떤 클래스로 객체를 생성하는지 알수있게 해준다.
    console.log("생성자이름 : ", this.constructor.name);
    }
  // 배열의 메모리삭제
  clear(){
    this._arr = [];  //새로 할당하면 아까 있던 애들 참조변수가 다 없어지면서 GC가 여유가 있을때 메모리 삭제된다.
                     // 즉, 변수초기화 하면됨,
  }
  // 배열의 복사본을 반환한다. -- 복사본을 반환해야 실제 스택이나 큐 메모리를 건드릴수 없다.
  // 깊은복사로 주어야한다. 안그러면 스택이나 큐 안의 데이터안의 메모리를 건드리기 때문이다.
  toArray(){
    // 배열의 deppcopy가 [...배열] 이런형식으로 함,.
    return [...this._arr] // 깊은 복사 ... 
  } // 배열로 이용해서 만들라고 배열배열 반환
  print(){
    return console.log(this._arr)
  }  // 데이터 출력
  remove(){
    if (this.isQueue){
      this._arr.shift() //큐의 경우 첫번째꺼 삭제
    }
    else{  //스택의 경우 배열의 제일 마지막 것 삭제
      this._arr.pop();
    }
  } 
  get isEmpty(){
    // 스택이나 큐가 비면 true 반환
    return this._arr.length === 0
  }
  get peek(){ //리무브와 같은데, 반환만 하고 삭제는 안함. 
        // 스택의 경우 마지막요소 반환, 큐는 가장 먼저 들어간요소 반환(if문해서 구분해야할듯?)
        if (this.isQueue){
          return this._arr[0] //큐의 경우 첫번째꺼 반환
        }
        else{  //스택의 경우 배열의 제일 마지막 것 반환. length-1
          return this._arr[this._arr.length-1];
        }
  }
  get poll(){
    // 삭제와 반환을 둘 다 하는것. 리무브랑 peek 합친것,
    // 배열에 앞에서 제거가 shift 함수 = 앞에서부터 제거해줌,
    if (this.isEmpty)
      return null;
    if (this.isQueue){
      return this._arr.shift() //큐의 경우 첫번째꺼 삭제
    }
    else{  //스택의 경우 배열의 제일 마지막 것 삭제
      return this._arr.pop();
    }

  } 
  get length(){
    return this._arr.length; //내부배열의 크기를 주세요
  }
  get isQueue(){ return this.constructor.name.toLowerCase()=="queue"} //toLowerCase 하는 이유는 혹시나하는상황에 스펠링을 다르게하면 모르니까 구별해줌.
  get isStack(){ return this.constructor.name.toLowerCase()=="stack"}
  // 자바스크립트는 class 보다 json과 lambda가 더 많이 사용한다.

  toString(){
    return `${this.constructor.name} : ${this._arr}`
  }
}

let c1 = new CommonClass(); //매개변수가 없는 경우
let c2 = new CommonClass([1,2,3]); // 배열 만들어서 직접전달할 수 있고
let c3 = new CommonClass(1,2,3); // 배열만들기 귀찮아서 알아서 만들도록 데이터를 나열해서 전달
                                  // 배열에 넣고싶다.
let a = c2.toArray(); // deepcopy 또는 hardcopy
a[0] = 5;
console.log(a);
console.log(c2._arr);

// 공통클래스
// 공통클래스는 상속받으라는 이야기다.
class Stack extends CommonClass{
  // map().filter().forEach
  // s.push(1).push(2).push(3)...
  push(data){
    this._arr.push(data)
    return this // 나를 반환한다.
  }
  pop(data){
    if (this.length > 0)
      return this.poll // 나를 반환한다.
  }
}
class Queue extends CommonClass{
  enqueue(data){
    this._arr.push(data)
    return this;
  }
  dequeue(data){
    return this.poll
  }
}
// 구분은 어떻게 하나?/? 얜 생성자이름으로 구분한다. this.constructor.name 를 찍어보면 알수 있음
let s = new Stack();
console.log("Queue:",s.isQueue)
console.log("Stack:",s.isStack)
let q = new Queue(); 
console.log("Queue:",q.isQueue)
console.log("Stack:",q.isStack)

a.shift();
console.log("a를 shift 하고난후 ",a)
console.log(c1.isEmpty)
console.log("------스택 예시------------")
s.push("A").push("B").push("C").push("D").push("E");
console.log (s._arr)

console.log ("스택에 peek 사용",s.peek)

console.log (s.pop())
console.log (s.pop())
console.log (s.pop())
console.log (s.toString())

console.log("------큐예시------------")
q.enqueue("A").enqueue("B").enqueue("C").enqueue("D").enqueue("E");
console.log (q._arr)

console.log ("큐에 peek 사용",q.peek)

console.log (q.dequeue())
console.log (q.dequeue())
console.log (q.dequeue())
console.log (q.toString())


assert.strictEqual("a", "a") //서로의 내용이 같은지 물어보기 즉, === 와 같은기능 형전환 안하고 둘이 같은지. 내용이 같으면 그냥 아무 출력없음
                             // 서로 다를때 예외발생
assert.deepStrictEqual(new String("a"), new Object("a")) ; //서로 타입은 다른데 내용이 같을때.

// assert.strictEqual("a", "b")
assert.deepStrictEqual(s.toArray(),["A", "B"])

q.print()