import UserAvatar from '../../Assets/images/userImage.png';
import CompanyAvatar from '../../Assets/images/Leaf-logo-white-leaf.png';
import { MainGreen } from "../../Styles/colors";
import { Image } from '@chakra-ui/image';


const SingleUser = ({desiredPhoto}) => {
    
    if(desiredPhoto === 'company') {
        return(
            <img alt='company' style={{width:'100%', display:'inline-block', border:`2px solid ${MainGreen}`, borderRadius:"20px"}} src={CompanyAvatar}  />
        )
    }
    return(
        <Image alt='user' borderRadius="full" w={10} h={10} src={UserAvatar}  />
    )
}

export default SingleUser;