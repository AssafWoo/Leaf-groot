import React from 'react';

const userDetails = {
        name:'',
        email:'',
        auth:'',
        loggedIn:false
}



const Store = React.createContext({
        user:userDetails,
});

export default Store;