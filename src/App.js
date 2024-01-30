import Faq from './component/Faq';
import Footer from './component/Footer';
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
      <Footer />
    </div>
  );
}

export default App;
