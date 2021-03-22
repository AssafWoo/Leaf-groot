import { Button } from "@chakra-ui/button";
import { DarkTheme,MainYellow } from "../../Styles/colors";

const RankIcon = () => {
    return(
        <Button _hover={{background:MainYellow}} bg={MainYellow} margin=".4rem" color={DarkTheme} size="sm" textAlign="left" marginBottom="1rem">Rank: 3</Button>
    )
}
export default RankIcon;