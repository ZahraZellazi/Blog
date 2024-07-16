import "./Header.css";

function Header() {
    return (
        <header className="Header">
            <div className="container">
                <div className="logo">BLOG</div>
                <nav className="nav">
                    <span className="nav-item">Features</span>
                    <span className="nav-item">Pricing</span>
                    <span className="nav-item">Contact</span>
                </nav>
                <div className="auth">
                    <button className="SignUp">Sign Up</button>
                    <button className="SignIn">Sign In</button>
                </div>
            </div>
            <div className="hero">
                <h1>Blogs</h1>
                <p>Welcome to out blogs </p>
            </div>
        </header>
    );
}

export default Header;
