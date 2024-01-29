import sponsor1 from '../image/sponsor/sponsor 1.svg';
import sponsor2 from '../image/sponsor/sponsor 2.svg';
import sponsor3 from '../image/sponsor/sponsor 3.svg';
import sponsor4 from '../image/sponsor/sponsor 4.svg';
import sponsor5 from '../image/sponsor/sponsor 5.svg';
import sponsor6 from '../image/sponsor/sponsor 6.svg';

function Sponsor() {
  return (
    <div className="mt-5 text-center">
      <p>Join 1,500+ companies already video conferencing the ClearLink way</p>
      <div className="sponsor-container">
        <img src={sponsor1} alt="sponsor" className="sponsor me-3 img-fluid" />
        <img src={sponsor2} alt="sponsor" className="sponsor me-3 img-fluid" />
        <img src={sponsor3} alt="sponsor" className="sponsor me-3 img-fluid" />
        <img src={sponsor4} alt="sponsor" className="sponsor me-3 img-fluid" />
        <img src={sponsor5} alt="sponsor" className="sponsor me-3 img-fluid" />
        <img src={sponsor6} alt="sponsor" className="sponsor me-3 img-fluid" />
      </div>
    </div>
  );
}

export default Sponsor;
