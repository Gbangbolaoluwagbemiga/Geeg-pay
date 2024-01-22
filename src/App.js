import {useState} from 'react';
import logo from '../src/img/W_logo.jpg';
import team from '../src/img/W-team.jpg';
import Binance from '../src/img/W_Binance.jpg';
import coinBase from '../src/img/W_c.jpg';
import CocaCola from '../src/img/W_cocaC.jpg';
import Ethad from '../src/img/W_ethad.jpg';
import Renault from '../src/img/W_kite.jpg';
import mint1 from '../src/img/W_B1.jpg';
import mint2 from '../src/img/W_B2.jpg';
import mint3 from '../src/img/W_B3.jpg';
import './App.css';

function App() {
  const [mint, setMint] = useState('mint');

  return (
    <div className="container">
      <div className="header">
        <img src={logo} alt="logo" className="logo" />
        <h1>qiibee foundation</h1>
      </div>
      <p>
        Hi There, welcome to qiibee foundation 👋, imagine a world where loyalty
        is limitless and seamlessly integrated
      </p>

      <div className="team">
        <div className="details">
          <div className="features">
            <h3> 🚀 Exciting News from @qiibee Foundation! 🌐</h3>
            <ul>
              <li>
                🌍 Revolutionizing reward systems from Zug, Switzerland, qiibee
                is leading the charge in #Web3Loyalty. Imagine a world where
                loyalty is limitless and seamlessly integrated!
                #QiibeeInnovation
              </li>

              <li>
                💡 Web3 Loyalty, powered by QBX on qiibee Rewards Chain, is
                transforming rewards. It adapts to your needs, works across
                platforms, and prioritizes top-tier security. Join us in
                elevating how loyalty is rewarded! 🚀 #LoyaltyRevolution
              </li>
              <li>
                🌐 Connecting the dots between global loyalty programs, qiibee
                robust Rewards Chain (QRC) and QBX drive #Web3LoyaltyInnovation.
                Simple integration, quick adaptation, and superior security are
                our focus. 🔄 #QiibeeEcosystem
              </li>
              <li>
                🚀 QBX & QRC: The dynamic duo connecting rewards across the
                {`qiibee's`} Ecosystem. Effortlessly tokenize points/miles,
                offer new rewards in 1-click. QRC links our loyalty programs,
                powered by the key enabler - QBX! 🔄 #QBX #QRC
              </li>
              <li>
                🔒 Uncompromising Security: With the immutable,
                private-permissioned QRC, security is our bedrock. Your loyalty
                is safe and sound with qiibee! 🛡 #QiibeeSecurity
              </li>
              <li>
                🤝 Seamless Interoperability: {`It's`} not just a feature;{' '}
                {`It's`}
                our foundation! Built on QRC, our loyalty ecosystem is scalable
                and globally interconnected. 🌐 #Interoperability
              </li>
              <li>
                🔍 Inherent Transparency: Loyalty token settlements on QRC are
                efficient, eliminating reconciliation costs. Built-in
                transparency ensures a clear view of your rewards journey! 📊
              </li>
            </ul>
          </div>
        </div>
        <img src={team} alt="team" className="team-member" />
      </div>

      <div className="partners">
        <h2>we are partners with: </h2>
        <div className="partner_img">
          <img src={Binance} className="partners-img" alt="partners" />
          <img src={coinBase} className="partners-img" alt="partners" />
          <img src={CocaCola} className="partners-img" alt="partners" />
          <img src={Ethad} className="partners-img" alt="partners" />
          <img src={Renault} className="partners-img" alt="partners" />
        </div>
      </div>

      <div className="benefits">
        <h2>Presenting the QBX founder keys</h2>

        <div className="mint-category">
          <h3>
            Mint for free and get{' '}
            <select
              name="mints"
              id="Benefits"
              onClick={e => {
                setMint(e.target.value);
              }}
            >
              <option value="mint">Benefit 1</option>
              <option value="mint-2">Benefit 2</option>
              <option value="mint-3">Benefit 3</option>
            </select>
          </h3>
          {mint === 'mint' && (
            <img src={mint1} className="minting" alt="mint" />
          )}
          {mint === 'mint-2' && (
            <img src={mint2} className="minting" alt="mint" />
          )}
          {mint === 'mint-3' && (
            <img src={mint3} className="minting" alt="mint" />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
