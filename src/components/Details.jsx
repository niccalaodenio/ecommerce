import Nav from '../components/Nav'
import data from '../components/data'
import Carousel from '../components/Carousel';
import '../sass/details.scss'
import plus from '../images/icon-plus.svg'
import minus from '../images/icon-minus.svg'
import cart from '../images/icon-cart.svg'
import { useState } from 'react';

const Details = () => {
  //let cartCount = 0;
    const imageData = data.map((items) => {
        return items;
      });
      const [counter, setCounter] = useState(0);
      const [scndCounter, setScndCounter] = useState(0)
      const Operation = op => op === 'add' ? setCounter(prevCount=> prevCount + 1 ) :
         op === 'min' ? setCounter(prevCount => Math.max(0, prevCount - 1 )) : ''


        function scnd(countEr){
          return  setScndCounter(prev => prev = countEr) 
            
        }
//console.log(scnd(counter))

  return (
    
    <div> 
        <Nav Counter={scndCounter} imgUrl={imageData}/>
        <div className="con d-md-flex">
            <Carousel key={0} imgUrl={imageData}/>
            <div className='prodetails '>
                <div className="d-flex flex-column align-items-start">
                    <div className="company-name">
                        sneaker company
                    </div>
                    <div className="product-name text-start">
                        fall Limited Edition Sneakers
                    </div>
                    <div className="description text-start ">
                        These low-profile sneakers are your perfect casual wear companion Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
                    </div>
                    <div className="pricing d-flex align-items-center">
                        <div className="price">$125.00</div>
                        <div className="discount">50%</div>
                        <div className="original-price">
                            $250.00
                        </div>
                    </div>
                </div>
                <section className="quantity my-4">
                    <div className="c d-flex align-items-center justify-content-between ">
                        <button className='btn' onClick={()=>Operation('min')}>
                              <img src={minus} alt="" className='plus op'/>
                        </button>
                      
                        <div className="Count">{counter}</div>
                        <button className='btn' onClick={()=>Operation('add')}>
                            <img src={plus} alt="" className='min op'/>
                        </button>
                        <button className='cartbtn d-flex addtocart justify-content-center align-items-center gap-2' onClick={()=> scnd(counter)}> <img src={cart} alt="" className='svg'/>
                    Add To Cart</button>
                    </div>
                    
                </section>
            </div>
        </div>
       
    </div>
  )
}

export default Details