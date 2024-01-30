import confirm from '../image/icon/confirm.svg';

function Service() {
  return (
    <div className="row">
      <div className="col-md-5">
        <h3 className="fw-bold">
          Ready to clear the path to perfect communication?
        </h3>

        <p>
          <img src={confirm} alt="confirm" />
          <span>30 days free trial</span>
        </p>

        <p>
          <img src={confirm} alt="confirm" />
          <span>Cancel at any time</span>
        </p>

        <p>
          <img src={confirm} alt="confirm" />
          <span> Access to all features</span>
        </p>

        <p>
          <img src={confirm} alt="confirm" />
          <span>Peronalized onboarding</span>
        </p>
      </div>
    </div>
  );
}

export default Service;
