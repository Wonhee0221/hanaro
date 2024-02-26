import axios from "axios";
import { useEffect, useState } from "react";

function TodoList() {
  //최소한 배열이 필요
  const [TodoList, setTodoList] = useState([])
  const [loading, setLoading] = useState(false);
  const hosturl = 'https://jsonplaceholder.typicode.com/todos';
  // 데이터 통신 - 데이터바인딩, mount 할때 , unmount할때 변수값들이 바뀔때 호출된다.
  // 두번재 매개변수인 배열에 내가 감시하고자 하는 변수
  // 배열의 경우에는 참조의 참조가 되서 무한렌더링이된다.
  let loadData = async()=>{
    let url = hosturl // 백엔드 api url
    let result = await axios.get(url);
    console.log(result.data)
    setTodoList(result.data);
    setLoading(true)
  }
  useEffect(()=>{
    //1.ajax 통신수단 ( feach, axios, xmlhttpreauest)
   
    // axios.get(url)
    // .then((res)=>{
    //   setLoading(!loading); //토글 시킨다. 한번만 할때는 상관없음

    // })
    // .catch((error)=>{})
    // // setBoardLists(res.data)
    // await를 사용할 때 주의점 await를 사용하는 함수에 anync 가 있어야한다.
    loadData()
  },[])

  return (
    <div>
          <div className="container" style={{"marginTop":"80px"}}>
        <h2>게시판 목록</h2>

        <div className="input-group mb-3" style={{"marginTop":"20px"}}>
            <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
                선택하세요
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">제목</a></li>
              <li><a className="dropdown-item" href="#">내용</a></li>
              <li><a className="dropdown-item" href="#">제목+내용</a></li>
            </ul>
            <input type="text" className="form-control" placeholder="Search"/>
            <button className="btn btn-secondary" type="submit">Go</button>
          </div>

        <table className="table table-hover ">
          <colgroup>
            <col width="10%"></col>
            <col width="30"></col>
            <col width="30%"></col>
            <col width="30%"></col>
          </colgroup>
            <thead className="table-secondary">
              <tr>
                <th>userId</th>
                <th>id</th>
                <th>title</th>
                <th>completed</th>
              </tr>
            </thead>
            <tbody>
            {
              loading==true?
              TodoList.map((TodoItem, key)=>{
                return(
                  <tr key={key}>
                    <td>{TodoItem.userId}</td>
                    <td style={{"textAlign":"right"}}>{TodoItem.id}</td>
                    <td>{TodoItem.title}</td>
                    <td>{TodoItem.completed?"true":"fales"}</td>
                  </tr>)
            }):<tr><td colSpan="4">데이터가 없습니다</td></tr>
            }
           
            </tbody>
          </table>

 
          <ul className="pagination  justify-content-center">
            <li className="page-item disabled"><a className="page-link" href="#">first</a></li>
            <li className="page-item disabled"><a className="page-link" href="#">Previous</a></li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item"><a className="page-link" href="#">4</a></li>
            <li className="page-item"><a className="page-link" href="#">5</a></li>
            <li className="page-item"><a className="page-link" href="#">Next</a></li>
            <li className="page-item"><a className="page-link" href="#">last</a></li>
          </ul>
       
          <div className="container mt-3" style={{"textAlign":"right"}}>
            <a href="#" className="btn btn-secondary">Link Button</a>
            <button type="button" className="btn btn-secondary">Button</button>
            <input type="button" className="btn btn-secondary" value="Input Button"/>
            <input type="submit" className="btn btn-secondary" value="Submit Button"/>
            <input type="reset" className="btn btn-secondary" value="Reset Button"/>
          </div>
          
    </div>


    </div>
   );
}

export default TodoList;