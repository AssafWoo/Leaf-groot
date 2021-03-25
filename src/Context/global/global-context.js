import React from 'react';

const emissionsInitialData = [
    {
        KWH:Number,
        Gasoline:Number,
    }
]

const userDetails = {
        name:String,
        image:String,
        role:String,
        email:String,
        auth:String,
        loggedIn:Boolean
}

const companyDetails = {
    name:String,
    rank:String,
    numberOfWorkers:Number,
    street:String,
    city:String,
    state:String,
    image:String,

}


const Store = React.createContext({
        company:companyDetails,
        userDetails:userDetails,
        emissionsDetails:emissionsInitialData,
});

export default Store;