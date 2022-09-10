import '../styles/Header.scss';
import owenimg1 from '../images/owen.png';
import owenimg2 from '../images/owen.png';

function Header(props) {
  return (
    <header className="header">
      <img src={owenimg1} alt="Owen" className="main__img1" />

      {/* <h1 className="main__title">Owen Wilson WOW</h1>
      <img src={owenimg2} alt="Owen" className="main__img2" /> */}
    </header>
  );
}
export default Header;
