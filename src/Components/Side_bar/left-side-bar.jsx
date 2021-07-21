import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Flex, LeafIcon } from "../../Styles/styles";
import { ItemsNav, SideBarWrapper, Item } from "./style";
import LeafLogo from "../../Assets/images/leaf-green.png";
import { useState } from "react";
import { SettingsIcon } from "@chakra-ui/icons";
import {
	FaDollarSign,
	FaHome,
	FaEye,
	FaPowerOff,
	FaTruck,
	FaLock,
	FaTree,
} from "react-icons/fa";
import { GlobalContext } from "../../Context/global/global-context";
import { useHistory } from "react-router";
import { logoutUser } from "../../Context/actions/user";

const MenuNames = [
	{
		name: "Dashboard",
		link: "/",
		icon: <FaHome style={{ margin: "auto" }} />,
	},
	{
		name: "Achievments",
		link: "/achievments",
		icon: <FaEye style={{ margin: "auto" }} />,
	},
	{
		name: "Transactions",
		link: "/transactions",
		icon: <FaTruck style={{ margin: "auto" }} />,
	},
	{
		name: "Projects",
		link: "/projects",
		icon: <FaTree style={{ margin: "auto" }} />,
	},
	{
		name: "API",
		link: "/api",
		icon: <FaLock style={{ margin: "auto" }} />,
	},
	{
		name: "Billing",
		link: "/billing",
		icon: <FaDollarSign style={{ margin: "auto" }} />,
	},

	{
		name: "Profile",
		link: "/profile/company",
		icon: <SettingsIcon style={{ margin: "auto", display: "block" }} />,
	},
	{
		name: "Exit",
		link: "/login",
		icon: <FaPowerOff style={{ margin: "auto", display: "block" }} />,
	},
];

const SideBar = ({ size }) => {
	const history = useHistory();
	const [activeItem, setActiveItem] = useState("");
	const { _, userDispatch } = useContext(GlobalContext);

	const handleClick = ({ name, children }) => {
		if (name === "Exit") {
			userDispatch(logoutUser);
			history.push({
				pathname: "/login",
			});
		}
		setActiveItem(name);
	};
	return (
		<SideBarWrapper>
			<ItemsNav>
				<Link to="/">
					<LeafIcon
						src={LeafLogo}
						style={{ marginBottom: "1rem", width: size ? "40%" : "25%" }}
					/>
				</Link>
				{MenuNames.map((value, index) => (
					<Flex key={index}>
						<Item size>
							<Link
								onClick={(e) => handleClick(value)}
								className={activeItem === value.name ? "active" : ""}
								to={`${value.link}`}
							>
								{size ? (
									<span>{value.icon}</span>
								) : (
									<span style={{ fontWeight: "300", marginLeft: ".5rem" }}>
										{value.name}
									</span>
								)}
							</Link>
						</Item>
					</Flex>
				))}
			</ItemsNav>
		</SideBarWrapper>
	);
};
export default SideBar;
