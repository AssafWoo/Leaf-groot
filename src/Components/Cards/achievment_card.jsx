import { AchievmentCardWrapper } from "./achievment_card_style";

const AchievmentCard = ({ item }) => {
	return (
		<AchievmentCardWrapper>
			<div class="container">
				<div class="card">
					<div class="face face1">
						<div class="content">{item.icon}</div>
					</div>
					<div class="face face2">
						<div class="content">
							<h4>{item.header}</h4>
							<p>{item.content}</p>
						</div>
					</div>
				</div>
			</div>
		</AchievmentCardWrapper>
	);
};

export default AchievmentCard;
