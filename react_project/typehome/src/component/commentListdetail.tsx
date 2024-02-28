import { useContext, useState, useEffect } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext, getStateFromLocalStorage } from "./mycontext";
import { url } from 'inspector';
import axios from 'axios';
import { CommentItemType } from './commentList';



function CommentListdetail() {
  let location = useLocation();
  let {id} = location.state;
  let [commentItems,setCommentItems] = useState<CommentItemType[]>([])
  let context = useContext(AppContext);
  useEffect(()=>{
    const controller = new AbortController();
    context.state = getStateFromLocalStorage("appState")
    let url = `https://jsonplaceholder.typicode.com/comments?id=${id}`
    axios.get(url,{signal:controller.signal})
    .then((res)=>{
      console.log(res.data)
      setCommentItems(res.data)
    })
    .catch((e)=>{
      console.log(e)
    });
    return ()=>{
      controller.abort();
    }
  },[])

  return ( 
    <div>{
      commentItems.map((item:CommentItemType,key:number)=>{
        return(
          <div key={key}>
            <a>{item.postId}</a> <br />
            <a>{item.id}</a><br />
            <a>{item.name}</a><br />
            <a>{item.email}</a><br />
            <a>{item.body}</a><br />
          </div>

        )
    })
      }
    </div>

   );
}

export default CommentListdetail;