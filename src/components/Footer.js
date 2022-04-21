import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser } from '@fortawesome/free-solid-svg-icons';

export const Footer = () => (
    <>
      <div id="desktop" className="row">
        <footer
          id="desktop"
          className="bg-secondary col-12 d-flex justify-content-center"
        >
          <div className="col-3">
            <ul className="text-white mb-5">
              <li>
                <h4 className="text-white mt-5">Contact Us</h4>
              </li>
              <li />
              <li>775 Corporate Woods Parkway</li>
              <li>Vernon Hills IL 60061</li>
              <li>P: (847) 215-6565</li>
              <li>
                E:{" "}
                <a className="text-white" href="usa@allgroup.com">
                  usa@allgroup.com
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 mx-auto d-flex justify-content-center text-center">
            <ul className="col-4 mt-4">
              <li>
                <a
                  className="navbar-brand font-weight-bolder text-white"
                  href="index.html"
                >
                  <FontAwesomeIcon className="d-inline-flex" icon={faHouseUser} size="md"/>{'  '}
                  MiniSubs
                </a>
              </li>
              <li>
                <center>
                  <hr className="text-white" />
                </center>
              </li>
              <li>
                <i className="fab fa-facebook text-white" />
                <i className=" ml-3 fab fa-twitter text-white" />
                <i className="ml-3 fab fa-instagram text-white" />
                <i className="ml-3 fab fa-tiktok text-white" />
              </li>
              <li>
                <p className="text-center text-white mt-5">
                  ©Copyright MiniSubs 2022
                </p>
              </li>
            </ul>
          </div>
          <div className="col-3 my-5 d-flex justify-content-end">
            <ul className="text-white mr-5 text-right">
              <li>
                <h4 className="text-white">Links</h4>
              </li>
              <li>
                <a className="text-white" href="aboutus.html">
                  About Us
                </a>
              </li>
              <li>
                <a className="text-white" href="#">
                  Careers
                </a>
              </li>
              <li>
                <a className="text-white" href="#">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a className="text-white" href="#">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
      <div id="mobile" className="row">
        <footer
          id="mobile"
          className="bg-secondary col-12 d-flex justify-content-center"
        >
          <div className="col-12 mx-auto d-flex justify-content-center text-center">
            <ul className="col-sm-4 col-xs-6 mt-4">
              <li className="text-center">
                <a
                  className="navbar-brand font-weight-bolder text-white"
                  href="index.html"
                >
                   <FontAwesomeIcon className="d-inline-flex" icon={faHouseUser} size="md"/>{'  '}
                  MiniSubs
                </a>
              </li>
              <li>
                <center>
                  <hr className="text-white" />
                </center>
              </li>
              <li className="my-4">
                <i className="fab fa-facebook text-white" />
                <i className=" ml-3 fab fa-twitter text-white" />
                <i className="ml-3 fab fa-instagram text-white" />
                <i className="ml-3 fab fa-tiktok text-white" />
              </li>
              <li>
                <a className="text-white" href="#">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a className="text-white" href="#">
                  Privacy Policy
                </a>
              </li>
              <li>
                <p className="text-center text-white mt-5">
                  ©Copyright MiniSubs 2022
                </p>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
  