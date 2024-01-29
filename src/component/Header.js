function Header() {
  return (
    <nav className={`navbar navbar-expand-lg  `}>
      <div className="container-fluid mb-4">
        <h5>ClearLink</h5>
        <button
          className={`navbar-toggler `}
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
          <ul className="navbar-nav ms-md-auto mb-2 mb-lg-0">
            <li className={`nav-item`}>Products </li>
            <li className="nav-item ">olutions </li>
            <li className="nav-item ">esources </li>
            <li className="nav-item ">Pricing </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
