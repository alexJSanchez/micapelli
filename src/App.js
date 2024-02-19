import { Analytics } from "@vercel/analytics/react";
import "./App.css";
import Footer from "./components/footer";
import Main from "./components/Main";
import Nav from "./components/nav";
import Gallery from "./components/gallery";
import { Route, Routes } from "react-router-dom";

// import frontdesk from "./frontdesk.webp";
// import pinterest from "./pinterest_icon.png";
// import instagram from "./instagram_icon.png";
// import linkedin from "./linkedin_icon.png";
// import facebook from "./facebook_icon.png";
// import twitter from "./twitter_icon.png";

function App() {
	return (
		<>
			<Nav />
			<Routes>
				<Route path="/" Component={Main}></Route>
				<Route path="/gallery" Component={Gallery} />
			</Routes>
			<Footer />
			<Analytics />
		</>
	);
}

export default App;

{
	/* <div className="App" style={{ backgroundColor: "#453823" }}>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					backgroundColor: "rgb(249,248,217)",
					padding: "20px ",
				}}
			>
				<ol style={{ display: "flex", listStyle: "none", gap: "25px" }}>
					<li>About Us</li>
					<li>Our Team</li>
					<li>Services</li>
					<li>Gallary-Contact Us</li>
				</ol>
			</div>
			<div
				style={{
					position: "relative",
					textAlign: "center",
					color: "white",
					fontSize: "18px",
				}}
			>
				<img
					style={{ marginLeft: "200px", width: "100%", height: "700px" }}
					src={frontdesk}
					alt="frontdesk"
				></img>
				<div
					style={{
						position: "absolute",
						top: "50%",
						left: "60%",
						transform: "translate(-50%, -50%)",
						display: "flex",
						alignItems: "center",
						gap: "50px",
					}}
				>
					<div
						style={{
							color: "lightblue",
							backgroundColor: "rgba(0, 0, 0, 0.7)", // Change the last value (0.5) for opacity
							padding: "10px",
						}}
					>
						<h2>Capelli Curl® by My Capelli Salon</h2>
						<p>
							A unique salon located in White Plains, NY specializing in Deva
							technique: dry cut, natural curly hair set & Pintura highlights,
							lowlights, single process color, updos and more for all kinds of
							wavy, curly and super curly hair textures.
						</p>

						<h2>Our mission </h2>
						<p>
							Our promise to our clients: Our stylists will help you to achieve
							the desired style you've been dreaming of wearing and help you
							embrace your natural hair texture.
						</p>
					</div>
					<h1
						style={{
							width: "250px",
							height: "50px",
							borderRadius: "25px",
							backgroundColor: "lightblue",
							padding: "5px",
							textWrap: "nowrap",
						}}
					>
						Book Now
					</h1>
				</div>
				<div
					style={{
						position: "absolute",
						top: "90%",
						left: "60%",
						transform: "translate(-50%, -50%)",
						backgroundColor: "rgba(0, 0, 0, 0.8)",
						color: "lightblue",
						padding: "3px 5px",
					}}
				>
					Click here to learn more about our services...
				</div>
			</div>
			<div
				style={{
					backgroundColor: "rgb(249,248,217)",
					display: "grid",
					alignItems: "center",
					padding: "30px",
					fontSize: "18px",
					gridTemplateColumns: "1fr 1fr 1fr 1fr",
					gridTemplateRows: "auto",
					gridTemplateAreas:
						"'. title title .''address contact hours social''address contact hours social''address contact hours social'",
				}}
			>
				<h3
					style={{
						fontSize: "30px",
						gridArea: "title",
						marginBottom: "25px",
					}}
				>
					Get In Touch!
				</h3>
				<div style={{ gridArea: "address" }}>
					<h4>Capelli Curl® by My Capelli Salon</h4>
					<p>Ad​d​ress & Parking Deatils </p>
					<h4>
						<a href="https://www.google.com/maps/place/79+Mamaroneck+Ave,+White+Plains,+NY+10601/@41.0304615,-73.7680001,17z/data=!3m1!4b1!4m6!3m5!1s0x89c29430b4cd3573:0xb2677b5733add367!8m2!3d41.0304575!4d-73.7654252!16s%2Fg%2F11bw4lwz4m?entry=ttu">
							79 Mamaroneck Ave., White Plains, NY 10601
						</a>
					</h4>
					<p>
						Two municipal parking lots available close to the salon. 20 Mitchell
						Pl, and 125 Court St. next to Inca & Guacho Restuarant (on the
						corner of Court St and Quarropas St.)
					</p>
				</div>
				<div style={{ gridArea: "contact" }}>
					<h4>Contact</h4>
					<p>Frontdesk</p>
					<h5>914-572-9923</h5>
					<p>Email</p>
					<h5>capellicurl@mycapellisalon.com</h5>
					<p>
						To book online,
						<a href="https://www.vagaro.com/mycapellisaloninc/services/">
							Click Here: Book Now!!
						</a>
					</p>
				</div>
				<div
					style={{
						gridArea: "hours",
						display: "flex",
						flexDirection: "column",
						margin: "10px 10px",
						textWrap: "nowrap",
					}}
				>
					<h5>Hours</h5>
					<div style={{ display: "flex", gap: "10px" }}>
						<div>
							<p>Tuesday</p>
							<h5>9:30am - 5:45pm</h5>
							<p>Wednesday</p>
							<h5>9:30am - 5:45pm</h5>
						</div>
						<div>
							<p>Thursday</p>
							<h5>10:30am - 7:00pm</h5>
							<p>Friday</p>
							<h5>9:30am - 5:45pm</h5>
						</div>
						<div>
							<p>Saturday</p>
							<h5>9:30am - 5:45pm</h5>
							<p>Sun-Mon</p>
							<h5>Closed</h5>
						</div>
					</div>
				</div>
				<div
					style={{
						gridArea: "social",
					}}
				>
					<h4>Social</h4>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: "20px",
						}}
					>
						<img src={pinterest} alt="pinterest icon"></img>
						<img src={facebook} alt="facebook icon"></img>
						<img src={instagram} alt="instagram icon"></img>
						<img src={linkedin} alt="linkedin icon"></img>
						<img src={twitter} alt="twitter icon"></img>
					</div>
				</div>
			</div>
		</div> */
}
