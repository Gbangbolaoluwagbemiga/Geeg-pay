import {useState} from 'react';

const faqs = [
  {
    title: 'How many participants can join a ClearLink video conference?',
    text: `ClearLink offers flexible meeting options. 
    Depending on your subscription plan, you can host meetings with varying numbers of participants. 
    Our plans are designed to accommodate small team collaborations and large-scale webinars,
    ensuring you have the right fit for your needs.`,
  },
  {
    title: 'Can I use ClearLink on multiple devices?',
    text: `ClearLink offers flexible meeting options. 
    Depending on your subscription plan, you can host meetings with varying numbers of participants. 
    Our plans are designed to accommodate small team collaborations and large-scale webinars,
    ensuring you have the right fit for your needs.`,
  },
  {
    title: 'Is ClearLink compatible with other video conferencing platforms?',
    text: `ClearLink offers flexible meeting options. 
    Depending on your subscription plan, you can host meetings with varying numbers of participants. 
    Our plans are designed to accommodate small team collaborations and large-scale webinars,
    ensuring you have the right fit for your needs.`,
  },
  {
    title: 'How does ClearLink ensure the security of my video conferences?',
    text: `ClearLink offers flexible meeting options. 
    Depending on your subscription plan, you can host meetings with varying numbers of participants. 
    Our plans are designed to accommodate small team collaborations and large-scale webinars,
    ensuring you have the right fit for your needs.`,
  },
  {
    title: 'Do I need to download any software to use ClearLink?',
    text: `ClearLink offers flexible meeting options. 
    Depending on your subscription plan, you can host meetings with varying numbers of participants. 
    Our plans are designed to accommodate small team collaborations and large-scale webinars,
    ensuring you have the right fit for your needs.`,
  },
  {
    title: 'What kind of customer support does ClearLink provide?',
    text: `ClearLink offers flexible meeting options. 
    Depending on your subscription plan, you can host meetings with varying numbers of participants. 
    Our plans are designed to accommodate small team collaborations and large-scale webinars,
    ensuring you have the right fit for your needs.`,
  },
];

export default function Accordion() {
  const [isvisible, setIsVisible] = useState(true);
  const [items, setItems] = useState(faqs);
  function handleVisibility() {
    setIsVisible(open => !open);
  }

  return (
    <>
      {isvisible && (
        <div className="accordion col-md-6">
          {items.map((el, num) => (
            <AccordionQuestion
              question={el.title}
              answer={el.text}
              num={num}
              handleVisibility={handleVisibility}
              key={num}
            />
          ))}
        </div>
      )}
    </>
  );
}
function AccordionQuestion({question, answer}) {
  const [isOpen, setIsOpen] = useState(true);

  function handleClick() {
    setIsOpen(prev => !prev);
  }

  return (
    <div className={`item ${isOpen ? 'open' : ''}`} onClick={handleClick}>
      <div className="content-header d-flex justify-content-between">
        <p className="title fw-bold">{question}</p>
        <p className="icon--toggle fw-bold">{isOpen ? '+' : '-'}</p>
      </div>

      <div className="content-box">
        {!isOpen && <p className="content-box">{answer}</p>}
      </div>
    </div>
  );
}
