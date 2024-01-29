import arrDown from '../image/icon/chevron-down.svg';

function Navbar() {
  return (
    <nav className={`navbar navbar-expand-lg mt-3 `}>
      <div className="container-fluid mb-4">
        <h6 className="me">ClearLink</h6>
        <button
          className={`navbar-toggler hamburger `}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse ms-md-auto" id="navbarNav">
          <ul className="navbar-nav mx-auto ">
            <li className="nav-item me-md-4">
              Products <img src={arrDown} alt="arrow-down" />{' '}
            </li>
            <li className="nav-item me-md-4">
              Solutions <img src={arrDown} alt="arrow-down" />{' '}
            </li>
            <li className="nav-item me-md-4">
              Resources <img src={arrDown} alt="arrow-down" />{' '}
            </li>
            <li className="nav-item me-md-4">
              Pricing <img src={arrDown} alt="arrow-down" />{' '}
            </li>
          </ul>

          <div className="sign--up d-md-flex justify-content-between pt-3">
            <p className=" me-md-3 talk-sales">Talk to sales</p>
            <p className=" me-md-3 free-sign">sign up for free</p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
