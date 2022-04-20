import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faHouseUser } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { slide as Menu } from 'react-burger-menu';
import ReactSlider from 'react-slider';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginModal: false,
      searchModal: false
    };
    this.toggleLogin = this.toggleLogin.bind(this);
    this.toggleSearch = this.toggleSearch.bind(this);
  }

  toggleLogin() {
    this.setState({
      loginModal: !this.state.loginModal
    });
  }
  toggleSearch() {
    this.setState({
      searchModal: !this.state.searchModal
    });
  }

  render() {
    return(
    <>
    <nav className="col-12 navbar navbar-dark bg-info">
              <Menu noOverlay className="ml-n3 my-n5 pt-n5" customBurgerIcon={ <FontAwesomeIcon className="text-white m-0 p-0" icon={faBars}/>} >
                <a className="menu-item" href="/">
                  Home
                </a>

                <a className="menu-item" href="/aboutus">
                  About Us
                </a>

                <a className="menu-item" onClick={this.toggleLogin}>
                  Login
                </a>

                <a className="menu-item" href="/contactus">
                  Contact Us
                </a>
              </Menu>
            <Modal isOpen={this.state.searchModal} toggle={this.toggleSearch}>
            <ModalHeader toggle={this.toggleSearch}>Search!!!!</ModalHeader>
            <ModalBody>
              <p>Rent per Month (USD):</p>
              <ReactSlider
                  className="horizontal-slider mr-2"
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
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.toggleSearch}>Search</Button>{' '}
              <Button color="secondary" onClick={this.toggleSearch}>Cancel</Button>
            </ModalFooter>
            </Modal>   

            <Modal isOpen={this.state.loginModal} toggle={this.toggleLogin}>
            <ModalHeader toggle={this.toggleLogin}>Login</ModalHeader>
            <ModalBody>
              Logging in is fun, you know.
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.toggleLogin}>Login</Button>{' '}
              <Button color="secondary" onClick={this.toggleLogin}>Cancel</Button>
            </ModalFooter>
          </Modal>
      <div className="col-xs-9">
        <a className='btn btn-info' href='/'>
          <FontAwesomeIcon icon={faHouseUser} />{'  '}
          <b>MiniSubs</b>
        </a>
      </div>
      <div className="col-xs-3 my-auto mr-4">
        <button className='btn btn-info' onClick={this.toggleSearch}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>   
  </nav>
  </>
  );}
}

export default Header;