import React from 'react';

const emissionsInitialData = [
    {
        KWH:1,
        Gasoline:1,
    }
]

const userDetails = {
        name:'',
        image:'',
        role:'',
        email:'',
        auth:'',
        loggedIn:false
}

const companyDetails = {
    name:'Leaf',
    rank:1,
    numberOfWorkers:100,
    street:'Baker',
    city:'NYC',
    states:['N/A'],
    image:'',
    countries:['ISRAEL','USA'],
    sectors:['SaaS'],
}


const Store = React.createContext({
        company:companyDetails,
        user:userDetails,
        emissions:emissionsInitialData,
});

export default Store;