import { Button } from "@chakra-ui/button";
import { useContext } from "react";
import Store from "../../global-context/global-context";
import { DarkTheme,MainBlue,MainYellow } from "../../Styles/colors";

const RankIcon = () => {
    const {state} = useContext(Store);
    const Rank = state.companyDetails.rank;
    if(Rank > 4){
        return(
            <Button _hover={{background:MainYellow}} bg={MainYellow} margin=".2rem" color={DarkTheme} size="sm" textAlign="left" marginBottom="1rem">Rank: {state.companyDetails.rank}</Button>
        )
    }
    if(Rank < 4){
        return(
            <Button _hover={{background:MainBlue}} bg={MainBlue} margin=".2rem" color={DarkTheme} size="sm" textAlign="left" marginBottom="1rem">Rank: {state.companyDetails.rank}</Button>
        )
    }
    else {
        return(
            <Button _hover={{background:DarkTheme}} bg={DarkTheme} margin=".2rem" color={DarkTheme} size="sm" textAlign="left" marginBottom="1rem">Rank: {state.companyDetails.rank}</Button>
        )
    }
}
export default RankIcon;