import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import menu from "../menu_icon.png";
import logo from "../logo_img.png";

function Nav() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};
	return (
		<div
			className="Nav"
			style={{
				backgroundColor: "rgb(249,248,217)",
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				padding: "5px 15px",
			}}
		>
			<div>
				<img src={logo} style={{ width: "50px" }}></img>
			</div>
			<div
				className="dropdown"
				style={{
					display: "flex",
					justifyContent: "center",
				}}
			>
				<div onClick={toggleMenu} className="dropdown-toggle">
					<img src={menu} style={{ width: "30px" }}></img>
				</div>
				{isOpen && (
					<div
						className="dropdown-menu"
						style={{
							position: "absolute",
							textAlign: "center",
							width: "100%",
							top: "10%",
							left: "50%",
							transform: "translate(-50%, -50%)",
							zIndex: "1000",
						}}
					>
						<ul
							style={{
								color: "lightblue",
								backgroundColor: "#453823",
								listStyle: "none",
								padding: "10px 0px",
								fontSize: "25px",
							}}
							onClick={() => setIsOpen(false)}
						>
							<li>
								<Link
									to="/"
									style={{ textDecoration: "none", color: "lightblue" }}
								>
									Main
								</Link>
							</li>
							<li>
								<Link
									to="/gallery"
									style={{ textDecoration: "none", color: "lightblue" }}
								>
									Gallery
								</Link>
							</li>
						</ul>
					</div>
				)}
			</div>
		</div>
	);
}

export default Nav;
