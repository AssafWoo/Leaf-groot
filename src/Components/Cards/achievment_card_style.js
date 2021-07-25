import styled from "styled-components";
import { Black, LightBlue, MainGreen } from "../../Styles/colors";

export const AchievmentCardWrapper = styled.div`
	.container {
		width: 10rem;
		position: relative;
		display: flex;
		justify-content: space-between;
	}

	.container .card {
		position: relative;
	}

	i {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		transition: 0.7s;
		color: #fff;
	}

	.container .card .face {
		width: 10rem;
		height: 10rem;
		transition: 0.5s;
	}

	.container .card .face.face1 {
		position: relative;
		background: ${LightBlue};
		border-top-right-radius: 15px;
		border-top-left-radius: 15px;
		border-bottom-right-radius: 15px;
		border-bottom-left-radius: 15px;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1;
		transform: translateY(100px);
	}

	.container .card:hover .face.face1 {
		background: ${MainGreen};
		transform: translateY(0px);
		border-bottom-right-radius: 0px;
		border-bottom-left-radius: 0px;
	}

	.container .card .face.face1 .content {
		opacity: 1;
		transition: 0.5s;
	}

	.container .card:hover .face.face1 .content {
		opacity: 1;
	}

	.container .card .face.face1 .content i {
		max-width: 100px;
	}

	.container .card .face.face2 {
		position: relative;
		display: flex;
		border-bottom-right-radius: 15px;
		border-bottom-left-radius: 15px;
		justify-content: center;
		align-items: center;
		box-sizing: border-box;
		transform: translateY(-3.76rem);
	}

	.container .card:hover .face.face2 {
		transform: translateY(0);
		background: #fff;
	}

	.container .card .face.face2 .content p {
		margin: 0;
		padding: 0.4rem;
		text-align: center;
		color: ${Black};
	}

	.container .card .face.face2 .content h4 {
		margin: 0 0 10px 0;
		padding: 0.4rem;
		color: #fff;
		font-size: 1.3rem;
		text-align: center;
		color: ${Black};
	}

	.container a {
		text-decoration: none;
		color: #414141;
	}
`;
