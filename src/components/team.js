import React from "react";
import Services from "./services";
import pedro from "../pedro_working.jpg";
import angie from "../angie_working.jpg";
import lucas from "../lucas_image.png";
import judy from "../judy.png";
import emily from "../emily_image.jpg";
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
					className="employee-team-card"
					style={{
						display: "flex",
						justifyContent: "center",
						flexWrap: "wrap",
						margin: "10px 10px",
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
						<img className="employee-card-image" src={judy}></img>
						<p>Stylists</p>
						<h2>Judy</h2>
					</div>
					<div>
						<img className="employee-card-image" src={emily}></img>
						<p>Stylists</p>
						<h2>Emily</h2>
					</div>
				</div>
			</div>
			<Services />
		</div>
	);
}

export default Team;
