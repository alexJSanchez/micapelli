import React from "react";
import "../App.css";
import frontdesk from "../frontdesk_mobile.png";
function Main() {
	return (
		<div>
			<div
				className="main"
				style={{
					backgroundImage: `url(${frontdesk})`,
					backgroundPosition: "center",
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					width: "100%",
					height: "500px",
					position: "relative",
					textAlign: "center",
					color: "white",
				}}
			>
				<div
					style={{
						position: "absolute",
						width: "100%",
						height: "100%",
						backgroundColor: "rgb(0,0,0,0.7)",
					}}
				></div>
				<div>
					<div
						className="header-text-container"
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
								// Change the last value (0.5) for opacity
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
						</div>
						<h1
							style={{
								width: "250px",
								height: "50px",
								borderRadius: "35px",
								padding: "15px",
								textWrap: "nowrap",
								color: "lightblue",
							}}
						>
							Book Now
						</h1>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Main;
