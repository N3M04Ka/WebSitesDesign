import headerImg from '../assets/images/topimage.png'
import fdioImg from '../assets/images/FDIO.png'
export default function Header() {
  return (
    <header className='header'>
      <div className="container">
        <input type="text" className="headerInput" />
        <div className="topHeader">
          <span className="logo">Sable.</span>
          <nav>
            <a href="#">CREDIT</a>
            <a href="#">DEBIT</a>
            <a href="#">APP</a>
            <a href="#">LEARN</a>
          </nav>
        </div>
        <div className="mainBlock">
          <p>The fastest, most <br/> premium path to<br/> <span>financial freedom</span></p>
          <button>EXPLORE</button>
        </div>
        <img src={headerImg} alt="" />
        <div className="bottomText">
          <img src={fdioImg} alt="" />
          <p>
            Banking services provided by Coastal Community Bank, Member<br/>FDIC, pursuant to license by Mastercard International Inc.
          </p>
        </div>
      </div>
    </header>
  );
}