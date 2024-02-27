import MyButton from './mybutton';
import { useState, useEffect } from 'react';
import { stringify } from 'querystring';
import Counter from './counter1';
import Counter2 from './counter2';

type Status = 'idle' | 'loading' | 'success' | 'error';

function Home() {
  const [enabled, setEnabled] = useState<boolean>(false);
  const [username, setUserName] = useState<string>('임꺽정');
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

  useEffect(() => {
    setStatus('idle'); // 이 값으로 변경됨.
    setUserInfo({ name: 'yoo', age: 55 });
  }, []);

  return (
    <div>
      <h1>Home입니다</h1>
      <MyButton title='타입스크립트' name='sdmq' disabled={true} />
      <MyButton title='타입스크립트' name='sdmq' disabled={false} />
      {username} {enabled ? 'true' : 'false'}
      {fruit.map((item: string) => {
        return <span>{item}</span>;
      })}
      <h2>현재상태: {status}</h2>
      <h3>
        {userInfo.name} {userInfo.age}
      </h3>
      <Counter />
      <Counter2 />
    </div>
  );
}

export default Home;
