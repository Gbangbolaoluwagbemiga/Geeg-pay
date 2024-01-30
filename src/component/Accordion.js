import {useState} from 'react';

const faqs = [
  {
    title: 'Where are these chairs assembled?',
    text: 'In the library',
  },
  {
    title: 'How long do I have to return your chair?',
    text: 'A day',
  },
  {
    title: 'Do you ship to countries outside the EU?',
    text: 'Yes',
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
        <div className="accordion">
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
function AccordionQuestion({question, answer, num, handleVisibility}) {
  const [isOpen, setIsOpen] = useState(true);

  function handleClick() {
    setIsOpen(prev => !prev);
  }

  return (
    <div className={`item ${isOpen ? 'open' : ''}`} onClick={handleClick}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{question}</p>
      <p className="icon">{isOpen ? '+' : '-'}</p>

      {!isOpen && <div className="content-box">{answer}</div>}
    </div>
  );
}
// function AddItems({handleVisibility}) {
//   return (
//     <button onClick={handleVisibility} style={styles}>
//       ADD
//     </button>
//   );
// }
// function NewItems({onAddItems, handleVisibility}) {
//   const [question, setQuestion] = useState('');
//   const [answer, setAnswer] = useState('');
//   const newItems = {title: question, text: answer};

//   function allFunctionality(item) {
//     handleVisibility();
//     onAddItems(item);
//   }

//   return (
//     <div className="details">
//       <input
//         value={question}
//         required
//         placeholder={'what is your question?'}
//         onChange={e => setQuestion(e.target.value)}
//       />
//       <textarea
//         required
//         value={answer}
//         placeholder={'input your answer'}
//         onChange={e => setAnswer(e.target.value)}
//         style={{marginBottom: '2.5rem'}}
//       />

//       {!question || !answer ? (
//         ''
//       ) : (
//         <button
//           className="btn-item"
//           style={styles}
//           onClick={() => allFunctionality(newItems)}
//         >
//           Add
//         </button>
//       )}
//     </div>
//   );
// }
