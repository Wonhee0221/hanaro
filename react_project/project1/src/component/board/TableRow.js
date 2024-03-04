import { Button } from "bootstrap";
import { Link } from "react-router-dom";

function TableRow({key, boardItem, deleteClick, editClick, viewClick}) {
  return ( 
     <tr key={key}>
        <td>{boardItem.id}</td>
        <td style={{"textAlign":"left"}}><a href="#none"onClick={() => viewClick(boardItem.id)}>{boardItem.title}</a></td>
        <td>{boardItem.writer}</td>
        <td>{boardItem.wdate}</td>
        <td>
        <button type="button" className="btn btn-primary" onClick={()=>{editClick(boardItem.id)}}>수정</button>
        <button type="button" className="btn btn-warning"  onClick={()=>{deleteClick(boardItem.id)}}>삭제</button>
        <button type="button" className="btn btn-warning"  onClick={()=>{viewClick(boardItem.id)}}>상세보기</button>
        </td>
     </tr>
   );
}

export default TableRow;