import shopify from '../image/sponsor/sponsor 1.svg';
import star from '../image/icon/Star.svg';
import dummy1 from '../image/dummy/dummy 1.png';
import dummy2 from '../image/dummy/dummy 2.png';
import dummy3 from '../image/dummy/dummy 3.png';
import dummy4 from '../image/dummy/dummy 5.png';
import dummy5 from '../image/dummy/dummy 5.png';
import serah from '../image/Avatar/serah.png';
import arrowLeft from '../image/icon/arrow-left.svg';
import arrowRight from '../image/icon/arrow-right.svg';

function Upgrade() {
  return (
    <div className="mt-5  ">
      <img src={shopify} alt="shopify" />
      <div className="star-container mt-4">
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
      </div>

      <div className="upgrade--content d-md-flex justify-content-between">
        <div className="col-md-5 mt-md-md-5">
          <p>
            ClearLink has upgraded our remote meetings. High-quality video,
            screen sharing, and top-notch security make it essential for our
            team.
          </p>
          <p className="d-flex mt-5 justify-content">
            <img src={serah} alt="serah" className="serah" />
            <p className="fw-bold ms-4">
              Sarah Thompson{' '}
              <p className="occupation">Project Manager, Shopify</p>
            </p>
            <p className="ms-4">
              <img src={arrowLeft} alt="left-arrow" className="me-3" />
              <img src={arrowRight} alt="right-arrow" />
            </p>
          </p>
        </div>
        <div className="dummy-container col-md-5 ms-2 mx-md-0 row">
          <img
            src={dummy1}
            alt="dummy"
            className="col-md-4 col-5 mt-5 dummy dummy-1 "
          />
          <img
            src={dummy2}
            alt="dummy"
            className="col-md-4 col-5 dummy dummy-2 me-md-2"
          />
          <img src={dummy3} alt="dummy" className="col-4 dummy dummy-3" />
          <img src={dummy4} alt="dummy" className="col-4 dummy dummy-4" />
          <img
            src={dummy5}
            alt="dummy"
            className="col-4 dummy dummy-5 me-md-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Upgrade;
