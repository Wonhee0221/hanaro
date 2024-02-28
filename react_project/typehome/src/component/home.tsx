import MyButton from './mybutton';
import { useState, useEffect,useContext } from 'react';
import { stringify } from 'querystring';
import Counter from './counter1';
import Counter2 from './counter2';
import { AppContext, getStateFromLocalStorage } from './mycontext';
import axios from 'axios';
import { PersonInfoType } from './type/commonType';

type Status = 'idle' | 'loading' | 'success' | 'error';

function Home() {
  const context = useContext(AppContext)
  const [enabled, setEnabled] = useState<boolean>(false);
  const [username, setUserName] = useState<string>('');
  const [fruit, setFruit] = useState<string[]>([
    '딸기',
    '오렌지',
    '참외',
    '복숭아',
  ]);

  const [status, setStatus] = useState<Status>('loading');
  const [userInfo, setUserInfo] = useState<{ name: string; age: number }>({
    name: 'hong',
    age: 23,
  });

const [personInfo, setPersonInfo] = useState<PersonInfoType>();

  const controller =new AbortController();
  useEffect(() => {
    setStatus('loading'); // 이 값으로 변경됨.
    //게시판등의 글 읽어올때나 setInterval사용 했을때.
    setUserInfo({ name: '임꺽정', age: 33 });
    context.state = getStateFromLocalStorage("appState");
    const controller = new AbortController(); //객체가 여기서 만들어져야 한다 
    console.log("*********************");
    let hosturl ='https://jsonplaceholder.typicode.com/users?id='+context.state.userid;
    console.log(hosturl)
    axios.get(hosturl,{signal:controller.signal})
    .then((res)=>{
      //사용자 정보 입력받아서  화면에 출력하기
      setPersonInfo(res.data[0])
    })
    .catch((error)=>{
      console.log(error);
    })

    return ()=>{
      console.log("마지막 정리작업을 하고 나간다.")
      controller.abort()
    } // => 메모리 누수를 방지
  }, []);

  return (
    <div>
      <h1>{personInfo?.name}</h1>
      {/* <h1>Home입니다{context.state.userid}{context.state.username}{context.state.isLogon}</h1>
      <MyButton title='타입스크립트' name='sdmq' disabled={true} />
      <MyButton title='타입스크립트' name='sdmq' disabled={false} />
      {username} {enabled ? 'true' : 'false'}
      {fruit.map((item: string) => {
        return <span>{item}</span>;
      })}
      <h2>현재상태: {status}</h2>
      <h3>
        {userInfo.name} {userInfo.age}
      </h3> */}
      {/* <Counter />
      <Counter2 /> */}
    </div>
  );
}

export default Home;
