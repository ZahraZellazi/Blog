import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/Navbar.scss";

function Navbar() {
	const navRef = useRef();
    const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<h3 className="blog">Blog</h3>
			<nav ref={navRef}>
				<a href="/#">Features</a>
				<a href="/#">Pricing</a>
				<a href="/#">Contact</a>	
				<a href="/#">SignUp</a>
				<a href="/#">SignIn</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>	
		
	);
}

export default Navbar;