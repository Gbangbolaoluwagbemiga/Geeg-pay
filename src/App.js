import HeaderContent from './component/HeaderContent';
import Navbar from './component/Navbar';
import Sponsor from './component/Sponsor';
import Upgrade from './component/Upgrade';

function App() {
  return (
    <div className="container">
      <Navbar />
      <HeaderContent />
      <Sponsor />
      <Upgrade />
    </div>
  );
}

export default App;
