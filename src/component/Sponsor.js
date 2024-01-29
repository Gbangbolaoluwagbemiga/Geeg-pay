import sponsor1 from '../image/sponsor/sponsor 1.svg';
import sponsor2 from '../image/sponsor/sponsor 2.svg';
import sponsor3 from '../image/sponsor/sponsor 3.svg';
import sponsor4 from '../image/sponsor/sponsor 4.svg';
import sponsor5 from '../image/sponsor/sponsor 5.svg';
import sponsor6 from '../image/sponsor/sponsor 6.svg';
import family from '../image/user/family.png';

// icon
import video from '../image/Asset/asset 2.svg';
import recording from '../image/icon/recording.svg';
import calender from '../image/icon/calendar.svg';
import lock from '../image/icon/lock.svg';

function Sponsor() {
  return (
    <div className="mt-5 ">
      <p className="text-center">
        Join 1,500+ companies already video conferencing the ClearLink way
      </p>
      <div className="sponsor-container">
        <img src={sponsor1} alt="sponsor" className="sponsor me-3 img-fluid" />
        <img src={sponsor2} alt="sponsor" className="sponsor me-3 img-fluid" />
        <img src={sponsor3} alt="sponsor" className="sponsor me-3 img-fluid" />
        <img src={sponsor4} alt="sponsor" className="sponsor me-3 img-fluid" />
        <img src={sponsor5} alt="sponsor" className="sponsor me-3 img-fluid" />
        <img src={sponsor6} alt="sponsor" className="sponsor me-3 img-fluid" />
      </div>

      <div className="mt-5 row">
        <p className="sponsor-text" style={{color: 'blue'}}>
          The ClearLink Advantage
        </p>
        <h3>Why choose ClearLink?</h3>
        <p className="col-md-6">
          In a world where connection is everything, ClearLink takes the lead.
          Our cutting-edge video conferencing app offers:
        </p>
        <div className="row mt-3">
          <div className="col-md-7">
            <div className="col-md-6">
              <img src={video} alt="video-icon" className="col-12 asset mb-2" />{' '}
              <h4 className="fw-bold">Crystal-clear HD video</h4>
              <p>
                No more pixelation or blurriness – just stunning, lifelike
                clarity that brings your team closer in meetings.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src={recording}
                alt="video-icon"
                className="col-12 asset mb-2"
              />{' '}
              <h4 className="fw-bold">Noise-canceling audio</h4>
              <p>
                Say goodbye to distractions with our advanced audio tech for
                crisp, interruption-free conversations.{' '}
              </p>
            </div>
            <div className="col-md-6">
              <img
                src={calender}
                alt="video-icon"
                className="col-12 asset mb-2"
              />{' '}
              <h4 className="fw-bold">Scheduling made easy</h4>
              <p>
                Say goodbye to distractions with our advanced audio tech for
                crisp, interruption-free conversations.{' '}
              </p>
            </div>
            <div className="col-md-6">
              <img src={lock} alt="video-icon" className="col-12 asset mb-2" />{' '}
              <h4 className="fw-bold">Bank-grade security</h4>
              <p>
                Your privacy is our priority with bank-grade security protocols
                safeguarding your meetings and data from unwanted intruders.{' '}
              </p>
            </div>
          </div>
          <div className="col-md-5">
            <img src={family} alt="family" className="family img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsor;
