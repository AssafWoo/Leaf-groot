import { UserType } from "../../interfaces/user";


export const userInitialState: UserType = {
    userData: {
        name:'Assaf',
        email:'assaf@gmail.com',
        company:'Leaf',
        credits:1230,
        profileImage:'',
        accountOwner:'',
        totalCO2Saved:2213,
        treesEquilavant:201,
        siteURL:'',
        billingPack:''
    },
    loggedIn:false,
    error:null
};