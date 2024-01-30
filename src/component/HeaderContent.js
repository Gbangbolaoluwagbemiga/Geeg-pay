import bot from '../image/icon/Frame 10.svg';
import star from '../image/icon/Star.svg';
// Avatar
import avatar1 from '../image/Avatar/Avatar-1.png';
import avatar2 from '../image/Avatar/Avatar-2.png';
import avatar3 from '../image/Avatar/Avatar-3.png';
import avatar4 from '../image/Avatar/Avatar-4.png';
import avatar5 from '../image/Avatar/Avatar-5.png';
// User
import user1 from '../image/user/user 1.png';
import user2 from '../image/user/user 2.png';
import user3 from '../image/user/user 3.png';
import user4 from '../image/user/user 4.png';
import user5 from '../image/user/user 5.png';
import user6 from '../image/user/user 6.png';
// Asset
import asset1 from '../image/Asset/asset 1.svg';
import asset2 from '../image/Asset/asset 2.svg';
import asset3 from '../image/Asset/asset 3.svg';
import asset4 from '../image/Asset/asset-4.svg';
import asset5 from '../image/Asset/asset-5.svg';
import asset6 from '../image/Asset/asset 6.svg';

function HeaderContent() {
  return (
    <div className="mt-5 mx-1 row">
      <div className="Header-content col-md-6">
        <p className="content-header">
          Uniting the world,one video call at a time
        </p>
        <p className="content-text">
          Experience the future of communication with ClearLink – where
          crystal-clear video conferencing meets unparalleled simplicity.
        </p>

        <div className=" row text-center">
          <p className="free-sign trial col-md-4 col-5 me-2">
            Start your free trial
          </p>
          <p className="talk-sales trial col-md-4 col-6">
            <img src={bot} alt="bot" className="me-2" />
            Discover AI assistant
          </p>
        </div>

        <div className="avatar-container row mt-4">
          <div className="avatar-box col-md-4 col-6">
            <img src={avatar1} alt="avatar" className="avatar" />
            <img src={avatar2} alt="avatar" className="avatar" />
            <img src={avatar3} alt="avatar" className="avatar" />
            <img src={avatar4} alt="avatar" className="avatar" />
            <img src={avatar5} alt="avatar" className="avatar" />
          </div>

          <div className="rating col-md-6 col-6">
            <img src={star} alt="star" className="star" />
            <img src={star} alt="star" className="star" />
            <img src={star} alt="star" className="star" />
            <img src={star} alt="star" className="star" />
            <img src={star} alt="star" className="star" />
            <span className="ms-2 mt-3">5.0</span>
            <p className="reviews">from 3,000+ reviews</p>
          </div>
        </div>
      </div>
      <div className="Header-images row col-md-6 py-3">
        <img
          src={user1}
          alt="user"
          className="col-4 user"
          style={{background: '#FF9C66'}}
        />
        <img
          src={user2}
          alt="user"
          className="col-4 user"
          style={{background: '#D6BBFB'}}
        />
        <img
          src={user3}
          alt="user"
          className="col-4 user"
          style={{background: '#ACDC79'}}
        />
        <img
          src={user4}
          alt="user"
          className="col-4 user"
          style={{background: '#B3B8DB'}}
        />
        <img
          src={user5}
          alt="user"
          className="col-4 user"
          style={{background: '#FEC84B'}}
        />
        <img
          src={user6}
          alt="user"
          className="col-4 user"
          style={{background: '#FEA3B4'}}
        />
        {/* <div className="row"></div> */}
        <div className="d-flex justify-content-center">
          <img src={asset1} alt="asset" className=" asset" />
          <img src={asset2} alt="asset" className=" asset" />
          <img src={asset3} alt="asset" className=" asset" />
          <img src={asset4} alt="asset" className=" asset" />
          <img src={asset5} alt="asset" className=" asset" />
          <img src={asset6} alt="asset" className=" asset" />
        </div>
      </div>
    </div>
  );
}

export default HeaderContent;
