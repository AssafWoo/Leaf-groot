import { Button } from "@chakra-ui/button";
import { useContext } from "react";
import Store from "../../Context/global/global-context";
import { DarkTheme,MainBlue,MainYellow } from "../../Styles/colors";

const RankIcon = () => {
    const {state} = useContext(Store);
    const Rank = state.companyDetails.rank;
    if(Rank > 4){
        return(
            <Button _hover={{background:MainYellow}} mt=".4rem" bg={MainYellow} color={DarkTheme} size="sm" textAlign="left" marginBottom="1rem">Rank: {state.companyDetails.rank}</Button>
        )
    }
    if(Rank < 4){
        return(
            <Button _hover={{background:MainBlue}} mt=".4rem" bg={MainBlue} color={DarkTheme} size="sm" textAlign="left" marginBottom="1rem">Rank: {state.companyDetails.rank}</Button>
        )
    }
    else {
        return(
            <Button _hover={{background:DarkTheme}} mt=".4rem" bg={DarkTheme} color={DarkTheme} size="sm" textAlign="left" marginBottom="1rem">Rank: {state.companyDetails.rank}</Button>
        )
    }
}
export default RankIcon;