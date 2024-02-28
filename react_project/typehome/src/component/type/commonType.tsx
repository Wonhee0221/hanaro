// 상태 정보 타입.
export interface MyState {
  count: number;
}
export type CounterAction =
  | { type: 'increase' }
  | { type: 'decrease' }
  | { type: 'reset' }
  | { type: 'add'; count: 5 };

  //함수의 경우는 export {함수명1, 함수명2}.... 이렇게 하면된든데
  // 타입의 경우는 type앞에 직a접 기술해야 한다.

export type CalculatorStateType={
  x:string;
  y:string;
  result:string;
  operator:string;
}
export type CalculatorAction = 
                        {type:"ADD",x:string,y:string}
                        |{type:"SUB",x:string,y:string}
                        |{type:"DIV",x:string,y:string}
                        |{type:"MUL",x:string,y:string}
                        |{type:"RESET", x:string,y:string,result:number,operator:string}

export type CalculatorAction2 = 
                        {type:"ADD",  value:CalculatorStateType}
                        |{type:"SUB", value:CalculatorStateType}
                        |{type:"DIV", value:CalculatorStateType}
                        |{type:"MUL", value:CalculatorStateType}
                        |{type:"RESET", value:CalculatorStateType}

// 꼭 타입마다 만드시 export 시키자 
export type StateType={
  userid:string;
  username:string;
  isLogon:boolean;

}

export type LogonAction=
  {type:"RESET", value:StateType}
  |{type:"LOGON", value:StateType}
  |{type:"LOGOUT", value:StateType}

export type geoType={
    lat:string,
    lng:string
  }
export type addressType={
  street:string,
  suite: string,
  city: string,
  zipcode:string,
  geo: geoType
}
export type companyType={
  name: string,
  catchPhrase:string,
  bs: string
}

export type PersonInfoType={
  id: number,
  name: string,
  username: string,
  email: string,
  address: addressType,
  phone: string,
  website:string,
  company: companyType
}
export type PhotoType={
  "albumId": number;
  "id": number;
  "title": string;
  "url": string;
  "thumbnailUrl": string;
}
