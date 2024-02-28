import { useContext, useEffect, useState } from "react";
import { AppContext, getStateFromLocalStorage } from "./mycontext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

type PostItemType={
  id:number; 
  userId:number;
  title:string; 
  body:string
}

function PostList() {
  const [posts, setPosts] = useState<PostItemType[]>([]);
  const [selectItem, setSelectItem] = useState<PostItemType>(() => {
    // 페이지가 처음 마운트될 때, localStorage에서 저장된 값을 읽어옴
    const storedItem = getStateFromLocalStorage("selectedComment");
    return storedItem || { id: -1, postId: 0, name: "", body: "", email: "" };
  });
  let context = useContext(AppContext)
  useEffect(()=>{
    const controllor = new AbortController()
    context.state = getStateFromLocalStorage("appState")
    let id = context.state.userid;
    let url = "https://jsonplaceholder.typicode.com/posts?userId="+id
    console.log("&&&&&&&&&l");
    axios.get(url,{signal:controllor.signal})
    .then((res)=>{
      console.log(res.data)
      setPosts(res.data)
    })
    .catch((error)=>{
      console.log(error);
    })
    return ()=>{
      console.log("정리")
      controllor.abort()
    }
    
  },[])
  
  const itemClick=(item:PostItemType)=>{
    setSelectItem({...item});//JSON으로 저장하자 
    localStorage.setItem("selectedComment", JSON.stringify(item));
  }
const navigate = useNavigate()
const btnClick = ()=>{
    navigate("/user/comment/list",{state:selectItem})
  }
  return (  
    <div>
      <button type="button" onClick={btnClick} disabled={selectItem.id==-1?true:false}>코멘트보기</button>
      <ul>
            {          
                posts.map( (item:PostItemType, key:number)=>{
                    return(
                    <li style={{"textAlign":"left", 
                    "backgroundColor": selectItem.id==item.id?"lightgray":"white" }}  key={key}
                    onClick={ ()=>{ itemClick(item)} }
                    >  {item.title}
                    </li>
                    )
                })
            }
        </ul>
    </div>
  );
}

export default PostList;