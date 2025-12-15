import logoImg from '../assets/images/logo.png'
export default function Header() {
  return (
    <header className='header'>
      <div className="container">
        <div className="logo">
          <img src={logoImg} alt="" />
          <a href="#">welcome</a>
        </div>
        <nav>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Events</a>
          <a href="#">About</a>
          <a href="#">Blog</a>
        </nav>
        <div className="loginSupport">
          <button>Support</button>
          <button>Login</button>
          <button>Demo</button>
        </div>
      </div>
    </header>
  );
}