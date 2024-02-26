// function MyButton({ title, name }: { title: string; name: string }) {
//   return (
//     <div>
//       <button>
//         {title} {name}
//       </button>
//     </div>
//   );
// }

// 인터페이스: 실체가 존재안함. 클래스 만들지 x, 주로 인터페이스나 타입.
interface MyButtonProps {
  title: string;
  disabled: boolean;
  name: string;
}
function MyButton(props: MyButtonProps) {
  return (
    <div>
      <button disabled={props.disabled}>{props.title}</button>
    </div>
  );
}

export default MyButton;
