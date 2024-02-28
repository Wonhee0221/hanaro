// image를 grid로 뿌리는 작업을 진행한다.
import '../imageList.css'
import { PhotoType } from './type/commonType';
// grid 나 flex를 써야 횡으로 컴포넌트 배치가 가능하다.
function ImageList({images}:{images:PhotoType[]}) {
  return ( 
    <div className='image-grid'>{
      images.map((item:PhotoType)=>{
        return(
          <img src={item.thumbnailUrl}style={{"width":"100px"}}/>
        )
    })
      }
    </div>
  )
}

export default ImageList;