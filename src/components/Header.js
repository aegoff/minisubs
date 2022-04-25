import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Label } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from "react-redux";
import { IoCart } from "react-icons/io5";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faHouseUser } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { slide as Menu } from 'react-burger-menu';
import ReactSlider from 'react-slider';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Header= ()=>{
  const [toggleLogin, setToggleLogin] = useState(false);
  const [toggleSearch, setToggleSearch] = useState(false);
  const [startDate,setStartDate]=useState(new Date());
  const [endDate,setEndDate]=useState(new Date());
  const { quantity } = useSelector((state) => state.cart);
  let { pathname } = useLocation();
  pathname=pathname.split("/")[1];
  const [zip, setZip] = useState('');
  
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
             <Label className="mr-3" htmlFor='zip'>Zipcode:</Label><br></br>
              <input required onChange={event => setZip(event.target.value)} name="zip" id="zip" type="text" placeholder='Zipcode'/><br></br>
              <label htmlFor='slider'>Rent per Month (USD):</label>
              <ReactSlider
                  name="slider"
                  className="horizontal-slider mr-2 mb-5 py-2"
                  style={{position: "relative", zIndex:'-5'}}
                  thumbClassName="example-thumb bg-info"
                  trackClassName="example-track"
                  min={100}
                  max={5000}
                  defaultValue={[100, 5000]}
                  ariaLabel={['Lower thumb', 'Upper thumb']}
                  ariaValuetext={state => `Thumb value ${state.valueNow}`}
                  renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                  pearling={false}
                  step={25}
                  minDistance={25}
              />
               <Label htmlFor='start-date'>Start Date:</Label>
              <DatePicker className='date-pickers' id="start-date" name="start-date" selected={startDate} onChange={(date) => setStartDate(date)} />
              <Label htmlFor='end-date'>End Date:</Label>
              <DatePicker className='date-pickers' id='end-date' name="end-date" selected={endDate} onChange={(date) => setEndDate(date)} />              
            </ModalBody>
            <ModalFooter>
              <Button color="primary"><a className="reset-a" href={`/listings/${zip}`}>Search</a></Button>{' '}
              <Button color="secondary" onClick={()=>setToggleSearch(!toggleSearch)}>Cancel</Button>
            </ModalFooter>
            </Modal>   

            {/*LoginModal*/}
            <Modal isOpen={toggleLogin} toggle={()=>setToggleLogin(!toggleLogin)}>
            <ModalHeader toggle={()=>setToggleLogin(!toggleLogin)}>Login</ModalHeader>
            <ModalBody>
              Logging in is fun, you know.
            </ModalBody>
            <ModalFooter>
              <Button color="primary"><a className="reset-a" href="/myaccount">Login</a></Button>{' '}
              <Button color="secondary" onClick={()=>setToggleLogin(!toggleLogin)}>Cancel</Button>
            </ModalFooter>
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