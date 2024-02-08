reg = /cat/; // reg = RegExp(/cat/); 서로 같은 의미이다.

let sentence1 = "I love my cat"
let sentence2 = "I love my dog and Cat"
console.log(reg.test(sentence1),reg.test(sentence2))
// cat 이라는 단어가 문장에 존재하면 true이다. 따라서 위의 결과는 true,false가 나ㅏ옴

reg = /cat/i; //대소문자 상관없이. true, true
console.log(reg.test(sentence1),reg.test(sentence2))

reg = /^cat/i; //대소문자 상관없이 cat으로 시작하는. false, false, true
let sentence3  = "Cat is lovely"
console.log(reg.test(sentence1),reg.test(sentence2),reg.test(sentence3))

reg = /cat$/i; //대소문자 상관없이 cat으로 끝나는. true, true, false
console.log(reg.test(sentence1),reg.test(sentence2),reg.test(sentence3))


reg = /c.t/i; // . 은 모든 문자열을 뜻함. c와 t사이에 한글자만 오면 된다. 줄바꿈을 제외한 모든 문자.
console.log(reg.test("ct"))  //한글자가 부족해서 false
console.log(reg.test("cat")) // 당연히 true
console.log(reg.test("cccct"))  // 단어로 찾지 않기 때문에 얘도 true 
console.log(reg.test("c123132clt")) // clt 패턴이 맞는다 그래서 얘도 true

reg = /l....l/i; // l 과 l 사이에 글자가 4개가 있어야한다.
console.log(reg.test("l1234l"))
console.log(reg.test("l34ㅗㅗ라ㅗㅁㄴ효ㅕl"))
console.log(reg.test("lllllllllllllalalalalalllll"))


// ----------[] -----괄호안의 문자들 중 하나
console.log("[KkcC]") // 해당 문자열을 나열하면 그중에 한글자 맞으면 가능하다.

console.log(/[KkcC]/.test("korea"))  // true
console.log(/[KkcC]/.test("Korea")) // true
console.log(/[KkcC]/.test("corea")) // true
console.log(/[KkcC]/.test("Corea")) // true
console.log(/[KkcC]/.test("abc"))   // true
console.log(/[KkcC]/.test("aKbewx")) // true


console.log("----------- ^을 첨가 ----------") //
console.log("/^[KkcC]/ 안에 잇는 스펠리을로 시작하는. 이라는 뜻") //
console.log(/^[KkcC]/.test("korea"))  // true
console.log(/^[KkcC]/.test("Korea")) // true
console.log(/^[KkcC]/.test("corea")) // true
console.log(/^[KkcC]/.test("Corea")) // true
console.log(/^[KkcC]/.test("abc"))   // true
console.log(/^[KkcC]/.test("aKbewx")) // true


console.log("----------- a[0-9]b =>숫자 앞뒤로 a와 b가 있는 ----------") // a[0-9]b =>숫자 앞뒤로 a와 b가 있는 것. a와 b사이에 숫자가 반드시 존재해야한다.
console.log(/a[0-9]b/.test("ab"))  //false
console.log(/a[0-9]b/.test("a9b"))  // true
console.log(/a[0-9]b/.test("a99b")) // false 
console.log(/a[0-9]b/.test("aaa8b3ebbbddd"))  // true
console.log(/a[0-9]b/.test("cwwcwcwava8b0202")) // true

// [^0-9] 일경우에는 숫자를 배제한다. 라는 뜻이다.  ~를 제외하고의 의미다.
// []기호랑 쓰일때 ^은 다른 의미를 지닌다.
//밖에다 쓰고 ^[0-9]면 숫자로 시작하는 이라는 뜻인데/
//밖에다 쓰고 ^[^0-9]면  첫글자가 숫자로 시작하면 안된다.
console.log("-------[^0-9] 일경우에는 숫자를 배제한다. 라는 뜻이다.  ~를 제외하고의 의미다.---") 
console.log(/a[^0-9]b/.test("a$b"))  //true 
console.log(/a[^0-9]b/.test("a3b"))  //false
console.log(/a[^0-9]b/.test("aa321avb")) //true 
console.log(/a[^0-9]b/.test("a b"))  //true / 공백도 가능하다.

//첫글자가 숫자로 시작하면 안될때.  - 첫글자만.
console.log("-----^[^0-9] 첫글자가 숫자로 시작하면 안된다.---") 
console.log(/^[^0-9]/.test("1abc"))  //true 
console.log(/^[^0-9]/.test("abc"))  //false
console.log(/^[^0-9]/.test("1dfsfds"))  //false
console.log(/^[^0-9]/.test("1avc"))  //false


// 문자가 하나라도 포함된다. true로 나옴. 
console.log("-----^[^0-9] 문자가 하나라도 포함된다. true로 나옴. .---") 
console.log(/[^0-9]/.test("1abc"))  //true 
console.log(/[0-9]/.test("1abc"))  //true  // 숫자가 하나라도 존재하니?
console.log(/^[^0-9]$/.test("1abc"))  // 첨부터 끝까지 숫자가 포함되어있으면 안된다. 라는 뜻

// 
console.log("----- * ---") 
console.log("----- 0번 이상 반복되는것. 0번!!!!!! ---") 
console.log(/a*b/.test("a1231gb")) // a라는 글자가 b앞에 0번 있어도 되고 1번 있어도 되고 n번 있어도 됨.
console.log("/a*b/ b 하나만 나와도 true",/a*b/.test("b")) 
console.log("/a*b/ a b  true",/a*b/.test("ab")) 


console.log("----- + ---") 
console.log("----- 1번 이상 반복되는것. 1번!!!!!! ---") 
console.log(/a+b/.test("a1231gb")) // a라는 글자가 b앞에 0번 있어도 되고 1번 있어도 되고 n번 있어도 됨.
console.log("/a+b/ 한번 이상 나와야하기 때문에 b만 이씅면 안됌. true",/a+b/.test("b")) 
console.log("/a+b/ a b  true",/a+b/.test("ab")) 

console.log("----- n번 반복---")
console.log("/a+b/ a b  true",/[0-9]{3}/.test("1bav"))  //false
console.log("/a+b/ a b  true",/[0-9]{3}/.test("123124bd"))  //true
console.log("/a+b/ a b  true",/[0-9]{3}/.test("213231vv")) //true
console.log("/a+b/ a b  true",/[0-9]{3}/.test("a19vc"))  //false
console.log("/a+b/ a b  true",/[0-9]{3}/.test("aa12aa997bd")) //true

// \w: 문자로 시작하는. 문자의 의미를 가지고 있다.
// \d : 숫자
// \b : 시작과 끝에 공통된 형식 일때.
function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    console.log("You have entered an invalid email address!");
    return (false)
}

console.log(ValidateEmail("adfs@fbsnjjf.cos"))

// 전화번호 [0-9]{2,3} -  [0-9]{3,4} - [0-9]{4}
// => \d{2,3} - \d{3,4}- \d{4}
// 010-4242-3233, 02-2313-4322, 031-234-1244

console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ")
regexp = new RegExp(/\d{2,3}-\d{3,4}-\d{4}/ )
console.log(regexp.test("010-1112-3333"))
console.log(regexp.test("02-2313-4322"))
console.log(regexp.test("031-234-1244"))
// \b - 단어의 경계를 결정짓는다
console.log(regexp.test("12312031-234-1244")) //true

regexp = new RegExp(/\b\d{2,3}-\d{3,4}-\d{4}\b/ )
console.log(regexp.test("12312031-234-1244")) //false - 우연히 겹치는 경우를 방지하기 위해서 , 딱 형식에 맞게 하기위함.
console.log(regexp.test("12312 031-234-1244"))//true

// \w: 문자로 시작하는. 문자의 의미를 가지고 있다.
// \d : 숫자
// \b : 시작과 끝에 공통된 형식 일때.
function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    console.log("You have entered an invalid email address!");
    return (false)
}

console.log(ValidateEmail("adfs@fbsnjjf.cos"))

// 전화번호 [0-9]{2,3} -  [0-9]{3,4} - [0-9]{4}
// => \d{2,3} - \d{3,4}- \d{4}
// 010-4242-3233, 02-2313-4322, 031-234-1244

console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ")
regexp = new RegExp(/\d{2,3}-\d{3,4}-\d{4}/ )
console.log(regexp.test("010-1112-3333"))
console.log(regexp.test("02-2313-4322"))
console.log(regexp.test("031-234-1244"))
// \b - 단어의 경계를 결정짓는다
console.log(regexp.test("12312031-234-1244")) //true

regexp = new RegExp(/\b\d{2,3}-\d{3,4}-\d{4}\b/ )
console.log(regexp.test("12312031-234-1244")) //false - 우연히 겹치는 경우를 방지하기 위해서 , 딱 형식에 맞게 하기위함.
console.log(regexp.test("12312 031-234-1244"))//true

