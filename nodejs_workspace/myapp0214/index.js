// index.js
import fs from 'fs'
import path, { resolve } from 'path'
import express, { response } from 'express'
import ejs from 'ejs'
import multer from 'multer'

// upload객체를 생성한다.
const upload = multer({
  // 업로드할 파일의 limit 는 반드시 지정해야 한다.
  storage: multer.diskStorage({ // 저장한공간 정보 : 하드디스크에 저장
     //done() 함수는 첫 번째 인수에는 에러가 있다면 에러를 넣고, 두 번째 인수에는 실제 경로나 파일 이름을 넣어주면 된다.
      //req나 file의 데이터를 가공해 done으로 넘기는 식이다.
      destination(req, file, done) { // 저장 위치
          done(null, 'uploads/'); // uploads라는 폴더 안에 저장
      },
      filename(req, file, done) { // 파일명을 어떤 이름으로 올릴지
          const ext = path.extname(file.originalname); // 파일의 확장자
          //작업이 완료되면 호출될 함수:done이다
          done(null, path.basename(file.originalname, ext) + Date.now() + ext);
          // 파일이름 + 날짜 + 확장자 이름으로 저장
      }
  }),
  limits: { fileSize: 20 * 1024 * 1024 } // 20메가로 용량 제한
  //용량제한은 무조건 넣어야한다!!!!!!!!
});
//출처: https://inpa.tistory.com/entry/EXPRESS-📚-multer-미들웨어 [Inpa Dev :남성_기술_전문가::티스토리]

let app = express(); // express 객체 생성, 함수를 통해서 생성하기 때문에 new가 없어도 가능하다.
// app 자체가 서버다!!!!!

//환경변수값 설정
//views에 ejs파일 놓을 위치를 지정해야 한다.
//path.join함수는 "c:myapp","dest" => c:/myapp/dest 이런식으로 단어와 단어사이에 /를 넣어서 경로로만들어준다.
// __dirname : nodejs 내장변수, 현재 프로그램이 가동중인 폴더 경로를 가져온다.
// 이설정은 지금 index.js 파일이 있는 위치에 views라는 폴더를 두고 그 폴더안에 ejs를 두겟다는 의미이다.

// type :"module" 을 설정하면 __dirname 그냥 사용불가 변수설정해줘야함.
const __dirname = path.resolve()
app.set("views",path.join(__dirname,"views"))
app.set("view engine","ejs") // view엔진은 ejs엔진을 사용하겠다는 의미이다.
//  이 두개의 설정을 하고나면 response에 render함수를 사용할 수 있다.
// render 가 views 폴더에서 확장자가 ejs인 파일을 찾아서 읽어 클라이언트로 보낸다.

// 미들웨어 - 다양한 미들웨어를 거치면서 데이터가 정제되어서 온다.
// post 방식으로 전송했을때 request객체에 body를 붙혀준다( 데이터를 쉽게 가져올 수 있게 도와준다.)
// post 방식으로 오는 데이터만 별도 처리를 해서 body 속성을 만들어 보내준다( request.body 사용이 가능해진다.)
app.use(express.json())
app.use(express.urlencoded({extended:false}));
//get방식은 기본 query,params 가 있다. 그래서 위에거 안 사용해도 크게 상관없음 위에는 post를 위한 방식.
// "/" 방식은 get로 받는다.

app.get("/", (request,response)=>{
  // //파일을 불러서 전송하기.
  // fs.readFile(path.resolve()+"html/index.html","utf-8",(err,data)=>{
  //   if(err){
  //     response.send("Error file not found");
  //     return ; //함수종료
  //   }
  //   response.send(data);
  // })

  // ejs를 설정하고 위에(views 설정한거)
  // 위에 내용을 한줄로 줄여줌.
  response.render('index',{title:"제목",
                           content:"내용",
                           flowers:["작약","천일홍","백일홍","과꽃","목련","목단"]})
})

app.get("/data", (request,response)=>{
  response.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
  response.write("데이터를 많이 보내야할 때")
  response.end("<h1>Express start</h1>");
})
app.get("/send", (request,response)=>{
  response.send("<h1>적당히알아서 </h1>");
  // response.send("<h1>적당히알아서 전송함2222</h1>"); //[ERR_HTTP_HEADERS_SENT]: 오류가 뜬다
})
//캐스케이딩(폭포수) 방식이다. 위의 url중 어떤 것도 해당되지 않으면 이곳으로 온다(특정 url을 지정하지 않은경우!)
// 에러페이지를 작성해주면 된다.
// 특정 url 을 지정하지 않아서 모든 요청이 온다

// 단순 파일이동
app.get("/filesend1",(req,res)=>{
  res.render("filesend1")
})
//여러파일
app.get("/filesend2",(req,res)=>{
  res.render("filesend2")
})
// Ajax로 파일 업로드하기
app.get("/filesend3",(req,res)=>{
  res.render("filesend3")
})
app.get("/filesend4",(req,res)=>{
  res.render("filesend4")
})
// 파일 저장하기
// multer 라이브러리를 사용할 예정임
// 1. npm install multer
// 2. import multer from 'multer'
// 3. multer객체를 생성하면서 여러가지 기본설정을 해야 함. upload함수 만들기.
// 4. 두번째 인자로 3에서 만든 multer 객체를 전달해야한다.
// 파일을 하나만 전송하겠다. single 함수 single(file태그의 name 속성값)
app.post("/filesave1",upload.single('file'),(req,res)=>{
  console.log(req.file) // 내용에 추가됨, 업로드된 파일에 대한 모든 정보가 이 객체에 포함된다.
  // 나머지 값들은 그냥 body에 따라온다.
  // res.json(req.file); // json으로 전송하기.
  //json 데이터를 일반 변수로 해체할때.
  const {fieldname,originalname,encoding,mimetype,destination,filename,path,size}
 =req.file;
//  rea.file = >JSON객체임
//위에것 안쓰면  const filename = req.file.filename 이런식으로 계속 써줘야함 
console.log("filename", filename)
  console.log("fieldname", fieldname)
  console.log("originalname", originalname)
  console.log("encoding", encoding)
  console.log("mimetype", mimetype)
  console.log("destination", destination)
  console.log("path", path)
  console.log("size", (size/1024/1024).toFixed(0),"mb")
  // 데이터베이스에 filename, originalname을 저장한다.
  res.json({request:"OK"})
}
)
//http://127.0.0.1:4000/download?filename=1231121707888858677.jpg
app.get("/download",(req,res)=>{
  //파일명이 한글일때 별도 처리가 필요하다.
  //encodeURIComponent(파일명) => 한글에 특별한 인코딩을 거쳐서 보냄
  const filename =req.query.filename
  res.setHeader("Content-Disposition",`attachment; filename ${encodeURIComponent(filename)}`);
  res.sendFile(path.resolve()+"/uploads/"+filename)
})

// 배열로받아오려면 multer에 array함수 사용
app.post("/filesave2", upload.array('file'), (req, res) => {
  req.files.forEach((item) => {
    const { fieldname, originalname, encoding, mimetype, destination, filename, path, size } = item;
    console.log("filename", filename);
    console.log("fieldname", fieldname);
    console.log("originalname", originalname);
    console.log("encoding", encoding);
    console.log("mimetype", mimetype);
    console.log("destination", destination);
    console.log("path", path);
    console.log("size", (size / 1024 / 1024).toFixed(2), "MB"); // 2자리까지 표시
  });
  res.json({ request: "OK" });
});



app.use((request,response)=>{
  response.send("<h1>권한이 없는 페이지입니다</h1>");
  //보낼 정보가 많으면
  // writeHead 먼저 호출하고 wirte를 여러번 호출가능, 마지막에 end호출
  // send 뒤에 send 또 부르면 안된다. 스스로 head도 붙힌다.
  // send => express 모듈
})

app.listen(4000,()=>{
  console.log("http://127.0.0.1:4000 start")
})

