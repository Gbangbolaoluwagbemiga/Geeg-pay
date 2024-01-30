import confirm from '../image/icon/confirm.svg';
import screen from '../image/user/Screen.png';

function Service() {
  return (
    <div className="row">
      <div className="col-md-5 me-md-auto">
        <h3 className="fw-bold">
          Ready to clear the path to perfect communication?
        </h3>

        <p className="mt-4">
          <img src={confirm} alt="confirm" className="me-3" />
          <span>30 days free trial</span>
        </p>

        <p>
          <img src={confirm} alt="confirm" className="me-3" />
          <span>Cancel at any time</span>
        </p>

        <p>
          <img src={confirm} alt="confirm" className="me-3" />
          <span> Access to all features</span>
        </p>

        <p>
          <img src={confirm} alt="confirm" className="me-3" />
          <span>Peronalized onboarding</span>
        </p>
      </div>

      <div className="col-md-6 ">
        <img src={screen} alt="screen" className="img-fluid user--screen" />
      </div>
    </div>
  );
}

export default Service;
