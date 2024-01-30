import logo from '../image/icon/logo.png';

function Footer() {
  return (
    <div className="row mt-5">
      <div className="col-md-4 col-12 mt-md-0 mt-4">
        <p className="fw-bold">
          <img src={logo} alt="logo" />
          ClearLink.
        </p>
        <p>
          ClearLink is your gateway to effortless, high-quality video
          conferencing. Join us in shaping the future of communication!
        </p>
      </div>
      <div className="col-md-2 footer-services col-3">
        <p>Product</p>
        <p>Overview</p>
        <p>Features</p>
        <p>Solutions</p>
        <p>Tutorials</p>
        <p>Pricing</p>
      </div>
      <div className="col-md-2 col-3">
        <p>Company</p>
        <p>About us</p>
        <p>Career</p>
        <p>Press</p>
        <p>News</p>
        <p>Contact</p>
      </div>
      <div className="col-md-2 col-4">
        <p>Resources</p>
        <p>Blog</p>
        <p>Events</p>
        <p>Help centre</p>
        <p>Tutorials</p>
        <p>Support</p>
      </div>
      <div className="col-md-2 col-1 last-services">
        <p>Legal</p>
        <p>Terms</p>
        <p>Privacy</p>
        <p>Cookies</p>
        <p>Licenses</p>
        <p>Contact</p>
      </div>
    </div>
  );
}

export default Footer;
