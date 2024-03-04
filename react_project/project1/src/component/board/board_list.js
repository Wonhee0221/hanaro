import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TableRow from "./TableRow";
import Pagination from "react-js-pagination";
import "./paging.css"

function BoardList() {
  const [boardList, setBoardList] = useState([]);
  const [refresh, setRefresh] = useState(false); 
  const [page, setPage] =useState(1);
  const navgate = useNavigate();
  // 화면을 재시작 = 삭제나 수정이후에 useEffect를 다시 호출하기 위해서.
  // refresh변수 값을 토글 시킨다.
  useEffect(() => {
    const controller = new AbortController();

    // 백엔드와 통신하기. - 컴포넌트 마운트, 언마운트, 업데이트시 실행
    let url = "http://127.0.0.1:8080/api/board/list/"+page;

    axios.get(url)
        .then((res) => {
            console.log(res.data);
            setBoardList(res.data);
        })
        .catch((error) => {
            console.log(error)
        });

    return () => {
        controller.abort();
    };
}, [refresh, page]); // 빈 배열에 refresh 변수를 넣어준다. 이 변수값이 바뀔 때마다 useEffect에 전달된 함수가 호출
//  page가 바뀔때도 다시 데이터를 가져와야한다.

const deleteItem = (id)=>{
  if (window.confirm("삭제하시겠습니까?"))
  {
    // alert(id+"삭제")
      //백엔드 api에서 삭제한다.
      const url = `http://localhost:8080/api/board/delete/${id}`
      axios.get(url)
      .then((res)=>{
        alert("삭제되었습니다.")
        console.log(res.data)
        setRefresh(!refresh) // !를 넣으면 토글상황이 됌.
        //삭제 이후에 useEffect가 다시 호출되게 해야한다.
      })
      .catch((error)=>{
        console.log(error)
      })
    }
  }
  

const editItem = (id)=>{
  alert(id+"수정")
}
const viewItem = (id)=>{
  navgate(`/board/view/${id}`)
}
const pageChange=(page)=>{
  console.log(page)
  setPage(page)
}

  return ( 
    <>
      <div classNameName="container" style={{"marginTop":"80px"}}>
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
            <col style={{"width":"8%"}} />
            <col style={{"width":"auto"}} />
            <col style={{"width":"14%"}} />
            <col style={{"width":"14%"}} />
            <col style={{"width":"14%"}} />
          </colgroup>
            <thead className="table-secondary">
              <tr>
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th>
                <th>작성일</th>
                <th>수정/삭제 여부</th>
              </tr>
            </thead>
            <tbody>
              {
                boardList.map((item,i)=>{
                    return(
                      <TableRow key={i} boardItem={item} deleteClick={deleteItem} editClick={editItem}
                      viewClick={viewItem}/>
                    )
                  })
              }
              
            </tbody>
          </table>
{/* 
            activePage={page}    : 현재 페이지
            itemsCountPerPage={10} : 한 페이지에 보여야할 데이터 개수
            totalItemsCount={30}  : 전체 데이터 개수
            pageRangeDisplayed={5} : 12345 한번에 보이는 페이지 개숫
            prevPageText={"<"}> : 이전으로 할때 나올 문자 메세지
            nextPageText={"<"} : 다음으로 할때 나올 문자메세지
             onChange={pageChange} : 페이지를 변경할때마다 호출될 페이지
 */}
          <Pagination 
            activePage={page}
            itemsCountPerPage={10} // 백엔드와 연결이 안되어 있어서 10개로 안나옴.
            totalItemsCount={30}
            pageRangeDisplayed={5}
            prevPageText={"<"}
            nextPageText={">"}
            onChange={pageChange}>
            </Pagination>

 {/* react 에서 제공하는 페이지멘션으로 사용 */}
       
          <div className="container mt-3" style={{"textAlign":"right"}}>
            {/*  */}
            <Link to="/board/write" className="btn btn-secondary">글쓰기</Link>
          </div>
          
    </div>
    </>
   );
}

export default BoardList;