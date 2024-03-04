import { useContext, useState, useEffect } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext, getStateFromLocalStorage } from "./mycontext";
import axios from 'axios';

export type CommentItemType = {
  id: number;
  postId: number;
  name: string;
  body: string;
  email: string;
}

function CommentList() {
  let location = useLocation();
  let { id } = location.state;
  let [commentItems, setCommentItems] = useState<CommentItemType[]>([]);
  const [selectItem, setSelectItem] = useState<CommentItemType>(() => {
    // 페이지가 처음 마운트될 때, localStorage에서 저장된 값을 읽어옴
    const storedItem = getStateFromLocalStorage("selectedComment");
    return storedItem || { id: -1, postId: 0, name: "", body: "", email: "" };
  });

  let context = useContext(AppContext);
  useEffect(() => {
    const controller = new AbortController();
    context.state = getStateFromLocalStorage("appState");
    let url = `https://jsonplaceholder.typicode.com/posts/${id}/comments`;
    axios.get(url, { signal: controller.signal })
      .then((res) => {
        console.log(res.data);
        setCommentItems(res.data);
      })
      .catch((e) => {
        console.log(e);
      });

    return () => {
      if (controller) {
        controller.abort();
      }
      console.log("eeee")
    };
  }, [id]);

  const itemClick = (item: CommentItemType) => {
    setSelectItem({ ...item });
    // 아이템이 선택될 때 localStorage에 저장
    localStorage.setItem("selectedComment", JSON.stringify(item));
  };

  const navigate = useNavigate();

  const btnClick = () => {
    navigate("/user/comment/detail", { state: selectItem });
  };

  return (
    <div>
      <button type="button" onClick={btnClick} disabled={selectItem.id === -1 ? true : false}>
        상세보기
      </button>
      {commentItems.map((item: CommentItemType, key: number) => (
        <li
          style={{
            "textAlign": "left",
            "backgroundColor": selectItem.id == item.id ? "lightgray" : "white",
          }}
          key={key}
          onClick={() => {
            itemClick(item);
          }}
        >
          {item.name}
        </li>
      ))}
    </div>
  );
}

export default CommentList;
