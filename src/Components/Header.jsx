
import "../Styles/Header.scss";

const Header = () => {
  return (
    <header className="blogi-header">
      <div className="blogi-container">
        <div className="blogi-logo">BLOG</div>
        <nav className="blogi-nav">
          <ul className="blogi-nav-list">
            <li className="blogi-nav-item"><a href="#">Features</a></li>
            <li className="blogi-nav-item"><a href="#">Pricing</a></li>
            <li className="blogi-nav-item"><a href="#">Contact</a></li>
          </ul>
        </nav>
        <div className="blogi-auth-buttons">
          <button className="blogi-login">SignIn</button>
          <button className="blogi-signup">SignUp</button>
        </div>

      </div>
      
    </header>
    
  );
};

export default Header;
