import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from "react-redux";
import { IoCart } from "react-icons/io5";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faHouseUser } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { slide as Menu } from 'react-burger-menu';
import { LoginForm } from './LoginForm';
import {SearchForm} from './SearchForm';

const Header= ()=>{
  const [toggleLogin, setToggleLogin] = useState(false);
  const [toggleSearch, setToggleSearch] = useState(false);
  const { quantity } = useSelector((state) => state.cart);
  let { pathname } = useLocation();
  pathname=pathname.split("/")[1];
  
    return(
    <>
    <nav className="col-12 navbar navbar-dark bg-info">
              <Menu noOverlay className="ml-n3 menu" customBurgerIcon={ <FontAwesomeIcon className="text-white m-0 p-0" icon={faBars}/>} >
                <a className="menu-item" href="/">
                  Home
                </a>
                <a className="menu-item" onClick={()=>setToggleLogin(!toggleLogin)}>
                  Login
                </a>
                <a className="menu-item" onClick={()=>setToggleSearch(!toggleSearch)}>
                  Search By Zipcode
                </a>
                <a className="menu-item" href="/aboutus">
                  About Us
                </a>
                <a className="menu-item" href="/contactus">
                  Contact Us
                </a>
              </Menu>
            
            {/*SearchModal*/}
            <Modal isOpen={toggleSearch} toggle={()=>setToggleSearch(!toggleSearch)}>
            <ModalHeader toggle={()=>setToggleSearch(!toggleSearch)}>Search on our Site!</ModalHeader>
            <ModalBody>
              <SearchForm/>
            </ModalBody>
            </Modal>   

            {/*LoginModal*/}
            <Modal isOpen={toggleLogin} toggle={()=>setToggleLogin(!toggleLogin)}>
            <ModalHeader toggle={()=>setToggleLogin(!toggleLogin)}>Login</ModalHeader>
            <ModalBody>
              <LoginForm/>
            </ModalBody>
          </Modal>
      <div className="col-xs-9">
        <a className='btn btn-info my-3' href='/'>
          <FontAwesomeIcon className="d-inline-flex" icon={faHouseUser} size="2x"/>{'   '}
          <h1 className='d-inline-flex text-white'><b>MiniSubs</b></h1>
        </a>
      </div>


      {(pathname === "listings" ||pathname === "listing") && (
          <div className="col-xs-3 my-auto-mr-4">
            <Link to="/cart" className="cart">
              <IoCart className='text-white fa-2x'/>
              {quantity !== 0 && <span className='text-white'>{quantity}</span>}
            </Link>
          </div>
      )}
      {(pathname!=="listings" && pathname !== "listing")&&(
      <div className="col-xs-3 my-auto mr-4">
        <button className='btn btn-info' onClick={()=>setToggleSearch(!toggleSearch)}>
            <FontAwesomeIcon icon={faMagnifyingGlass} size="xl"/>
        </button>
      </div>
      )}   
  </nav>
  </>
  );
}

export default Header;