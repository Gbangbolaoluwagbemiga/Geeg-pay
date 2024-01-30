import logo from '../image/icon/logo.png';
import appstore from '../image/Asset/App store.svg';
import playstore from '../image/Asset/Google Play.png';
import twitter from '../image/social/twitter.svg';
import facebook from '../image/social/facebook.svg';
import youtube from '../image/social/youtube.svg';
import linkeldn from '../image/social/linkeldn.svg';
import github from '../image/social/github.svg';
import instagram from '../image/social/instagram.svg';

function Footer() {
  return (
    <>
      <div className="row mt-5">
        <div className="col-md-3 col-12 mt-md-0 mt-4">
          <p className="fw-bold">
            <img src={logo} className="me-2" alt="logo" />
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
        <div className="col-md-1">
          <p style={{color: 'blue'}}>Get the app</p>
          <p>
            <img src={appstore} alt="app-store" />
          </p>{' '}
          {/* <p>
            <img src={playstore} alt="play-store" className="playstore" />
          </p>{' '} */}
        </div>
      </div>
      <div
        className="col-12 d-flex justify-content-between mt-md-5"
        style={{background: '#F9FAFB', padding: '0.75rem'}}
      >
        <p>© 2023 ClearLink. All rights reserved.</p>
        <p>
          <img src={linkeldn} alt="social" className="me-md-3 me-2 social" />
          <img src={twitter} alt="social" className="me-md-3 me-2 social" />
          <img src={facebook} alt="social" className="me-md-3 me-2 social" />
          <img src={instagram} alt="social" className="me-md-3 me-2 social" />
          <img src={github} alt="social" className="me-md-3 me-2 social" />
          <img src={youtube} alt="social" className="me-md-3 me-2 social" />
        </p>
      </div>
    </>
  );
}

export default Footer;
