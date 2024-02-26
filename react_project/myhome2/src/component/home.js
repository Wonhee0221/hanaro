function Home() {
  return ( 
    // {/* 화면상단에 고정할 것 outlet 태그에 컴포넌트 출력*/}
    <div>
    <div id="demo" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            {/* 이미지는 public 폴더에 넣어주면 정상적으로 나온다. */}
            <img src="/images/la.jpg" alt="Los Angeles" className="d-block w-100"/>
          </div>
          <div className="carousel-item">
            <img src="/images/chicago.jpg" alt="Chicago" className="d-block w-100"/>
          </div>
          <div className="carousel-item">
            <img src="/images/ny.jpg" alt="New York" className="d-block w-100"/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
        </div>

      </div>
   );
}

export default Home;