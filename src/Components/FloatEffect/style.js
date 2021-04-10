import styled from 'styled-components';
import {MainBlue, MainGreen, MainGreenBlue, MainGrey, MainYellow} from '../../Styles/colors';

export const CirclesEffect = styled.div`
position:relative;
.circles {
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: -1;
}

.circles li {
	position: absolute;
	display: block;
	list-style: none;
	width: 20px;
	height: 20px;
	background:${MainGreen};
	animation: animate 25s linear infinite;
	bottom: calc(-160px - 60vh);
}

.circles li:nth-child(1) {
	left: 25%;
	width: 15px;
	height: 15px;
	animation-delay: 0s;
	animation-duration: 20s;
	border-radius: 50%;
	border-top-left-radius: 0 !important;
	background:${MainGreen};
}

.circles li:nth-child(2) {
	left: 10%;
	width: 20px;
	height: 20px;
	animation-delay: 0s;
	animation-duration: 25s;
	border-radius: 50%;
	border-top-left-radius: 0 !important;
	background:${MainGrey}
}

.circles li:nth-child(3) {
	left: 70%;
	width: 20px;
	height: 20px;
	animation-delay: 0s;
	animation-duration: 20s;
	border-radius: 50%;
	border-top-left-radius: 0 !important;
	background:${MainBlue}
}

.circles li:nth-child(4) {
	left: 40%;
	width: 45px;
	height: 45px;
	animation-delay: 0s;
	animation-duration: 15s;
	border-radius: 50%;
	border-top-left-radius: 0 !important;
	background:${MainGreenBlue}
}

.circles li:nth-child(5) {
	left: 65%;
	width: 35px;
	height: 35px;
	animation-delay: 0s;
	animation-duration: 20s;
	border-radius: 50%;
	border-top-left-radius: 0 !important;
	background:${MainYellow}
}

.circles li:nth-child(6) {
	left: 75%;
	width: 45px;
	height: 45px;
	animation-delay: 0s;
	animation-duration: 25s;
	border-radius: 50%;
	border-top-left-radius: 0 !important;
	background:${MainGreenBlue};
}

.circles li:nth-child(7) {
	left: 35%;
	width: 50px;
	height: 50px;
	animation-delay: 0s;
	animation-duration: 30s;
	border-radius: 50%;
	border-top-left-radius: 0 !important;
	background:${MainBlue};
}

.circles li:nth-child(8) {
	left: 50%;
	width: 17px;
	height: 17px;
	animation-delay: 0s;
	animation-duration: 35s;
	border-radius: 50%;
	border-top-left-radius: 0 !important;
	background:${MainYellow};
}


@keyframes animate {
	0% {
		transform: translateY(0) rotate(0deg);
		opacity: 0;
	}
	50% {
		transform: translateY(-60vh) rotate(360deg);
		opacity: 1;
	}
	100% {
		transform: translateY(-120vh) rotate(720deg);
		opacity: 0;
	}
}`