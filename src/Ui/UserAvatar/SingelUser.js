import UserAvatar from '../../Assets/images/userImage.png';
import CompanyAvatar from '../../Assets/images/Leaf-logo-white-leaf.png';
import { MainGreen } from "../../Styles/colors";
import { ShadowEffect } from '../../Styles/effects';


const SingleUser = ({desiredPhoto}) => {
    
    if(desiredPhoto === 'company') {
        return(
            <img alt='company' style={{width:'100%', display:'inline-block', border:`2px solid ${MainGreen}`, borderRadius:"20px"}} src={CompanyAvatar}  />
        )
    }
    return(
        <img alt='user' style={{width:'100%', display:'inline-block', boxShadow:ShadowEffect, borderRadius:"20px"}} src={UserAvatar}  />
    )
}

export default SingleUser;