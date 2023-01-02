 import '../sass/carousel.scss'
 import prev from '../images/icon-previous.svg'
 import next from '../images/icon-next.svg'

const Carousel = ({imgUrl}) => {
  // const images = imgUrl.map((num)=>{
  //   return (
  //     <img src={require(`../images/${imgUrl[num].img}`)} className='indi active' alt="" data-bs-target="#carousel" data-bs-slide-to="0" aria-current="true" aria-label="Slide 1"/>
  //   )
  // })
  return (
  <div className='car'>
    <div id="carousel" className="carousel slide" data-interval='false'>

    <div className="carousel-indicators d-none d-md-flex">
      {/* slide indicators */}
          <img src={require(`../images/${imgUrl[4].img}`)} className='indi active' alt="" data-bs-target="#carousel" data-bs-slide-to="0" aria-current="true" aria-label="Slide 1"/>
          <img src={require(`../images/${imgUrl[5].img}`)} alt="" className='indi'data-bs-target="#carousel" data-bs-slide-to="1" aria-label="Slide 2"/>
      
          <img src={require(`../images/${imgUrl[6].img}`)} alt="" className='indi'data-bs-ta rget="#carousel" data-bs-slide-to="2" aria-label="Slide 3"/>
      
          <img src={require(`../images/${imgUrl[7].img}`)} alt="" className='indi' data-bs-target="#carousel" data-bs-slide-to="3" aria-label="Slide 4"/>
 
    </div>
  
    <div className="carousel-inner ">
      {/* Carousel body */}
        <div className="carousel-item active">
          <img src={require(`../images/${imgUrl[0].img}`)} className="d-block  imgCar" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src={require(`../images/${imgUrl[1].img}`)} className="d-block  imgCar" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src={require(`../images/${imgUrl[2].img}`)} className="d-block  imgCar" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src={require(`../images/${imgUrl[3].img}`)} className="d-block  imgCar" alt="..."/>
        </div>
    </div>

    {/* Next and Prev Btn for mobile */}
    <button className="carousel-control-prev d-block d-sm-none" type="button" data-bs-target="#carousel" data-bs-slide="prev">
      <img src={prev} alt="" className='btnprev'/>
        <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next d-block d-sm-none" type="button" data-bs-target="#carousel" data-bs-slide="next">
      <img src={next} alt="" className='btnnext' />
      <span className="visually-hidden">Next</span>
    </button>
    </div>
  </div>
  )
}

export default Carousel