
//import style from '../sass/nav.module.scss'
import '../sass/nav.scss'
import {FaTimes} from 'react-icons/fa'; //FaShoppingCart
import avatar from '../images/image-avatar.png'
import cart from '../images/icon-cart.svg'
import bars from '../images/icon-menu.svg'
import { useState } from 'react';
import trash from '../images/icon-delete.svg'
const Nav = ({Counter,imgUrl}) => {
//console.log(counter)
  const [toggle, setToggle] = useState(false)

let cartEvent = () =>{
  return toggle ? setToggle(false) : setToggle(prev => prev = true)
}
 


  return (
    <div>
        <nav className="navbar navbar-expand-md bg-light position-relative">
         
    <div className="container-fluid nav">
      <div className="brand d-flex align-itmes-center justify-content-center">
          <button className="navbar-toggler " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            {/* <FaBars color='hsl(0, 0%, 0%) ' size={16}/> */}
            <img src={bars} alt="" />
          </button>
          <a className="navbar-brand fw-bold me-0 me-sm-5 ms-sm-3" href="#Home">sneakers</a>
      </div>

      <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div className="offcanvas-header">

          <button type="button" className='x-btn' data-bs-dismiss="offcanvas" aria-label="Close"> <FaTimes/></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-start align-items-start flex-grow-1 pe-3">
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="#home">Collections</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#men">Men</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#women">Women</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>

        </div>

      </div>
      <div className="shop d-flex align-items-center justify-items-center ">
          <div className="counter">{Counter === 0 ? "" : Counter}</div>
          <img src={cart} alt="" onClick={cartEvent} />
          <img src= {avatar} alt="avatar" className='profile' />
      </div>
    </div>
  </nav>
      <div className="cartContainer position-absolute" style={{display: toggle ? 'block' : 'none'}}>
        <h5 className="title text-start mb-0 ">Cart</h5>
        
        <div className="product p3 justify-content-center align-items-center" style={{display: Counter !== 0? 'none' : 'flex' }}> Your Cart is Empty</div>

        <div className="product p-3" style={{display: Counter === 0? 'none' : 'block' }}>
        
          <div className="added d-flex justify-content-center align-items-center gap-2 mt-1">
            <img src={require(`../images/${imgUrl[4].img}`)} alt="" className='thumbnail'/>
            <div className="prod-title price"> Fall Limited Edition Sneakers
              <div className="">
                $125 x {Counter} <span className="total">${(125*Counter).toFixed(2)}</span>
              </div>
            </div>
            <img src={trash} alt="" className='trash'/>
        </div><br />
        <div className="checkout">Checkout</div>
      </div>
    </div>
    </div>
  )
}

export default Nav