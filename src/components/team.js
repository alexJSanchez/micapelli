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
						<h2>judy</h2>
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
					<h3>Our Services</h3>
					dry cut, natural curly hair set & Pintura highlights, lowlights,
					single process color, updos and more for all kinds of wavy, curly and
					super curly hair textures.
				</p>
				<p>
					<h3>Our promise</h3>
					Our stylists will help you to achieve the desired style you've been
					dreaming of wearing and help you embrace your natural hair texture.
				</p>
			</div>
			<div></div>
		</div>
	);
}

export default Team;
