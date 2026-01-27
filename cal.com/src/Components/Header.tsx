import logo from "../assets/images/logo.png";
export default function Header() {
	return (
		<header className="header">
			<div className="container">
				<img src={logo} alt="" className="logo" />
				<input type="text" />
				<button>LOGIN</button>
			</div>
		</header>
	);
}
