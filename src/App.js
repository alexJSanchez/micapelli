import "./App.css";
import Nav from "./components/nav";
import frontdesk from "./frontdesk.webp";
import pinterest from "./pinterest_icon.png";
import instagram from "./instagram_icon.png";
import linkedin from "./linkedin_icon.png";
import facebook from "./facebook_icon.png";
import twitter from "./twitter_icon.png";

function App() {
	return (
		<div className="App" style={{ backgroundColor: "#453823" }}>
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
					style={{ width: "100%", height: "700px" }}
					src={frontdesk}
					alt="logo"
				></img>
				<div
					style={{
						position: "absolute",
						top: "50%",
						left: "50%",
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
						top: "80%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						backgroundColor: "rgba(0, 0, 0, 0.8)",
						color: "lightblue",
					}}
				>
					Click here to learn more about our services...
				</div>
			</div>
			<div
				style={{
					display: "grid",
					fontSize: "22px",
					alignItems: "center",
					margin: "20px 50px",
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
					}}
				>
					Get In Touch!
				</h3>
				<div style={{ gridArea: "address" }}>
					<h4>Ad​d​ress & Parking Deatils</h4>
					<p>Capelli Curl® by My Capelli Salon</p>

					<h4>79 Mamaroneck Ave., White Plains, NY 10601.</h4>
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
						To book online, <a>Click Here: Book Now!!</a>
					</p>
				</div>
				<div style={{ gridArea: "hours" }}>
					<h5>Hours</h5>
					<p>Tuesday</p>
					<h5>9:30am - 5:45pm</h5>
					<p>Wednesday</p>
					<h5>9:30 am - 5:45 pm</h5>
					<p>Thursday</p>
					<h5>10:30 am - 7:00 pm</h5>
					<p>Friday</p>
					<h5>9:30 am - 5:45 pm</h5>
					<p>Saturday</p>
					<h5>9:30 am - 5:45 pm</h5>
					<p>Sunday</p>
					<h5>Closed</h5>
					<p>Monday</p>
					<h5>Closed</h5>
				</div>
				<div
					style={{
						gridArea: "social",
					}}
				>
					<h4>Social</h4>
					<img src={pinterest}></img>
					<img src={facebook}></img>
					<img src={instagram}></img>
					<img src={linkedin}></img>
					<img src={twitter}></img>
				</div>
			</div>
		</div>
	);
}

export default App;
