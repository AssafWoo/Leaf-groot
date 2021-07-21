import React from "react";
import { Heading } from "@chakra-ui/layout";
import { BoxSize, BreakLine, Flex, SubHeader, Parag } from "../Styles/styles";

// need to build a database for integrations data
const APICallsComponent = () => {
	return (
		<Flex>
			<Heading {...SubHeader}>Api Keys</Heading>
			<Parag style={{ color: "white" }}>Api keys unique for you</Parag>
			<BoxSize FlexSize="5">Api keys, secret etc...</BoxSize>
			<BreakLine />

			<Parag style={{ color: "white" }}>
				Explore our documentation to get more data about how to integrate with
				Leaf.
			</Parag>
			<BoxSize FlexSize="5">Using Leaf API 2021Beta</BoxSize>
		</Flex>
	);
};

export default APICallsComponent;
