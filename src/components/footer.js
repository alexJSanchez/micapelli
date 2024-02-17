import React from "react";
import pinterest from "../pinterest_icon.png";
import facebook from "../facebook_icon.png";
import instagram from "../instagram_icon.png";
import linkedin from "../linkedin_icon.png";
import twitter from "../twitter_icon.png";
function Footer() {
	return (
		<div
			className="footer"
			style={{
				backgroundColor: "rgb(249,248,217)",
				alignItems: "center",
				padding: "30px",
				width: "100%",
			}}
		>
			<h3
				className="getintouch"
				style={{
					gridArea: "title",
					marginBottom: "25px",
				}}
			>
				Get In Touch!
			</h3>
			<div className="footer-address-container">
				<h4>Capelli Curl® by My Capelli Salon</h4>
				<p>Ad​d​ress & Parking Deatils </p>
				<h4>
					<a href="https://www.google.com/maps/place/79+Mamaroneck+Ave,+White+Plains,+NY+10601/@41.0304615,-73.7680001,17z/data=!3m1!4b1!4m6!3m5!1s0x89c29430b4cd3573:0xb2677b5733add367!8m2!3d41.0304575!4d-73.7654252!16s%2Fg%2F11bw4lwz4m?entry=ttu">
						79 Mamaroneck Ave., White Plains, NY 10601
					</a>
				</h4>
				<p>
					Two municipal parking lots available close to the salon. 20 Mitchell
					Pl, and 125 Court St. next to Inca & Guacho Restuarant (on the corner
					of Court St and Quarropas St.)
				</p>
			</div>
			<div>
				<h4>Contact</h4>
				<p>Frontdesk</p>
				<h5>914-572-9923</h5>
				<p>Email</p>
				<h5>capellicurl@mycapellisalon.com</h5>
				<p>
					<a href="https://www.vagaro.com/mycapellisaloninc/services/">
						Click Here: Book Now!!
					</a>
				</p>
			</div>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					margin: "10px 10px",
					textWrap: "nowrap",
				}}
			>
				<h5>Hours</h5>
				<div>
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
			<div>
				<h4>Social</h4>
				<div
					className="footer-icons-container"
					style={{
						display: "flex",
						alignItems: "center",
						gap: "20px",
						flexWrap: "wrap",
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
	);
}

export default Footer;
