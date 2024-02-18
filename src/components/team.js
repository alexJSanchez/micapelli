import React from "react";
import pedro from "../pedro_working.jpg";
import angie from "../angie_working.jpg";
import lucas from "../lucas_image.png";
function Team() {
	return (
		<div className="team">
			<h2>Our Team</h2>
			<div className="team-container">
				<div className="employee-card">
					<img className="employee-card-image" src={pedro}></img>
					<p>Owner/Stylists</p>
					<h2>Pedro</h2>
				</div>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						flexWrap: "wrap",
						margin: "10px 10px",
						gap: "10px",
					}}
				>
					<div>
						<img className="employee-card-image" src={lucas}></img>
						<p>Manager</p>
						<h2>Lucas</h2>
					</div>
					<div>
						<img className="employee-card-image" src={angie}></img>
						<p>Stylists</p>
						<h2>Angie</h2>
					</div>
					<div>
						<img className="employee-card-image" src={lucas}></img>
						<p>Stylists</p>
						<h2>Judy</h2>
					</div>
					<div>
						<img className="employee-card-image" src={lucas}></img>
						<p>Stylists</p>
						<h2>Emily</h2>
					</div>
				</div>
			</div>
			<div className="team-text-container">
				<p>
					dry cut, natural curly hair set & Pintura highlights, lowlights,
					single process color, updos and more for all kinds of wavy, curly and
					super curly hair textures.
				</p>
				<p>
					Our stylists will help you to achieve the desired style you've been
					dreaming of wearing and help you embrace your natural hair texture.
				</p>
			</div>
			<div className="services-caontainer">
				<h2 style={{ color: "#ca8134" }}>Our Services</h2>
			</div>
			<div className="services">
				<div style={{ border: "solid 2px", padding: "0px 20px" }}>
					<h4>Dry cut - Deva technique</h4>
					<p>
						The haircut is performed on dry hair in its natural state using the
						Deva cut technique.
					</p>
					<h4>Wet cut - Traditional technique</h4>
					<p>
						The haircut is performed on wet hair using a comb (after shampoo).{" "}
					</p>
					<h4>This service is temporarily unavailable until further notice.</h4>
					<h3>Gift certificates available</h3>
				</div>
				<div style={{ border: "solid 2px" }}>
					<h4 className="">Dry cut - Deva technique</h4>
				</div>
			</div>
		</div>
	);
}

export default Team;
