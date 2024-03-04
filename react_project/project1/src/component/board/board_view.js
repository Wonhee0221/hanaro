import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


function BoardView() {
  const navgate = useNavigate()
  const [boardview, setBodardview] = useState([]);
  const { id } = useParams();
  useEffect(()=>{
    let url = `http://127.0.0.1:8080/api/board/view/${id}`
    axios.get(url)
    .then((res)=>{
      console.log(res.data);
      setBodardview(res.data.data)
    })
    .catch((error)=>{
      console.log(error)
    })
},[])
const goList = ()=>{
  navgate(`/board`)
}
  return ( 
      <div className="container" style={{"marginTop":"80px"}}>
      <h2>게시판 상세보기</h2>
      <table className="table table-hover " style={{"marginTop":"30px"}}>
          <tbody>
            <tr className="table-secondary">
              <th>제목</th>
              <td >작성자</td>
              <td >내용</td>
              <td >날짜</td>
            </tr>
            <tr>
              <td>{boardview?.title}</td>
              <td>{boardview?.writer}</td>
              <td>{boardview?.contents}</td>
              <td>{boardview?.wdate}</td>
            </tr>
          </tbody>
        </table>
        <div className="container mt-3" style={{"textAlign":"rigth"}}>
          <button type="button" className="btn btn-secondary"onClick={goList}>목록</button>
        </div>
        </div>
   );
}

export default BoardView;