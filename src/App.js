import Accordion from './component/Accordion';
import Faq from './component/Faq';
import HeaderContent from './component/HeaderContent';
import Navbar from './component/Navbar';
import Service from './component/Service';
import Sponsor from './component/Sponsor';
import Upgrade from './component/Upgrade';

function App() {
  return (
    <div className="container">
      <Navbar />
      <HeaderContent />
      <Sponsor />
      <Upgrade />
      <Faq />
      <Service />
    </div>
  );
}

export default App;
