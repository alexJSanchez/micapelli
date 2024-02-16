import "./App.css";
import Nav from "./components/nav";
import logo from "./logo512.png";
function App() {
	return (
		<div className="App">
			<div style={{ display: "flex", justifyContent: "center" }}>
				<ol style={{ display: "flex", listStyle: "none", gap: "10px" }}>
					<li>About Us</li>
					<li>Our Team</li>
					<li>Services</li>
					<li>Gallary-Contact Us</li>
				</ol>
			</div>
			<div>
				<img src={logo} alt="logo"></img>
			</div>
			<Nav />
		</div>
	);
}

export default App;
