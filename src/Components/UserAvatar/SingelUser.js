import UserAvatar from '../../Assets/images/userImage.png';
import CompanyAvatar from '../../Assets/images/leaf-logo-green-leaf.png';
import { Image } from '@chakra-ui/image';


const SingleUser = ({desiredPhoto}) => {
    
    if(desiredPhoto === 'company') {
        return(
            <img alt='company' style={{width:'60%', display:'inline-block', borderRadius:"20px"}} src={CompanyAvatar}  />
        )
    }
    return(
        <Image alt='user' borderRadius="full" w={10} h={10} src={UserAvatar}  />
    )
}

export default SingleUser;