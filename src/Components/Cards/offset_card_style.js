import styled from "styled-components";
import { DarkTheme, MainGreen } from "../../Styles/colors";

export const OffsetCardWrapper = styled.div`
	.container {
		position: relative;
	}

	.container .card {
		position: relative;
		width: 280px;
		margin: 2rem;
		height: 400px;
		background: ${MainGreen};
		border-radius: 20px;
		overflow: hidden;
	}

	.container .card:before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: ${DarkTheme};
		clip-path: circle(100px at 80% 10%);
		transition: 0.5s ease-in-out;
	}

	.container .card:hover:before {
		clip-path: circle(300px at 80% -20%);
	}

	.container .card:after {
		position: absolute;
		top: 30%;
		left: -20%;
		font-size: 12em;
		font-weight: 800;
		color: rgba(255, 255, 25, 0.05);
	}

	.container .card .imgBx {
		position: absolute;
		text-align: center;
		top: 40%;
		transform: translateY(-50%, -40%);
		z-index: 100;
		width: 100%;
		height: 220px;
		transition: 0.8s;
	}

	.container .card:hover .imgBx {
		top: 0%;
		transform: translateY(0%);
	}

	.container .card .imgBx img {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) rotate(-25deg);
		width: 270px;
	}

	.container .card .contentBx {
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 100px;
		text-align: center;
		transition: 1s;
		z-index: 10;
	}

	.container .card:hover .contentBx {
		height: 210px;
	}

	.container .card .contentBx h2 {
		position: relative;
		font-weight: 600;
		letter-spacing: 1px;
		color: #fff;
		margin: 0;
	}

	.container .card .contentBx .size,
	.container .card .contentBx .color {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 8px 20px;
		transition: 0.5s;
		opacity: 0;
		visibility: hidden;
		padding-top: 0;
		padding-bottom: 0;
	}

	.container .card:hover .contentBx .size {
		opacity: 1;
		visibility: visible;
		transition-delay: 0.5s;
	}

	.container .card:hover .contentBx .color {
		opacity: 1;
		visibility: visible;
		transition-delay: 0.6s;
	}

	.container .card .contentBx .size h3,
	.container .card .contentBx .color h3 {
		color: #fff;
		font-weight: 300;
		font-size: 14px;
		letter-spacing: 2px;
		margin-right: 10px;
	}

	p {
		font-weight: 600;
	}

	.container .card .contentBx .size span {
		width: 26px;
		height: 26px;
		text-align: center;
		line-height: 26px;
		font-size: 1rem;
		display: inline-block;
		color: #111;
		background: #fff;
		margin: 0 5px;
		transition: 0.5s;
		color: #111;
		border-radius: 4px;
		cursor: pointer;
	}

	.container .card .contentBx .size span:hover {
		background: #9bdc28;
	}

	.container .card .contentBx .color span {
		width: 20px;
		height: 20px;
		background: #ff0;
		border-radius: 50%;
		margin: 0 5px;
		cursor: pointer;
	}

	.container .card .contentBx .color span:nth-child(2) {
		background: #9bdc28;
	}

	.container .card .contentBx .color span:nth-child(3) {
		background: #03a9f4;
	}

	.container .card .contentBx .color span:nth-child(4) {
		background: #e91e63;
	}

	.container .card .contentBx a {
		display: inline-block;
		padding: 10px 20px;
		background: #fff;
		border-radius: 4px;
		margin-top: 10px;
		text-decoration: none;
		font-weight: 600;
		color: #111;
		opacity: 0;
		transform: translateY(50px);
		transition: 0.5s;
		margin-top: 0;
	}

	.container .card:hover .contentBx a {
		opacity: 1;
		transform: translateY(0px);
		transition-delay: 0.75s;
	}
`;
