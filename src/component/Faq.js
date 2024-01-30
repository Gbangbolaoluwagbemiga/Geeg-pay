import Accordion from './Accordion';

function Faq() {
  return (
    <div className="row mt-5">
      <div className="col-md-6">
        <p style={{color: 'blue'}}>Support</p>
        <h2 className="fw-bold">FAQs</h2>
        <p>
          Everything you need to know about the product and billing. Can’t find
          the answer you’re looking for? Please chat to our friendly team.
        </p>
      </div>
      <div className="col-md-6">
        <Accordion />{' '}
      </div>
    </div>
  );
}

export default Faq;
