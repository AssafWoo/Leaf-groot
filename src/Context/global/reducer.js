export default function reducer(state, action) {
    switch (action.type) {
        case 'PLAYING_AROUND':
            return{
                companyDetails: {
                    name:action.payload.companyDetails.name,
                    rank:action.payload.companyDetails.rank,
                    numberOfWorkers:action.payload.companyDetails.numberOfWorkers,
                    street:action.payload.companyDetails.street,
                    city:action.payload.companyDetails.city,
                    state:action.payload.companyDetails.state
                },
                userDetails:{
                    name:action.payload.userDetails.name,
                    role:action.payload.userDetails.role,
                    email:action.payload.userDetails.email,
                    auth:action.payload.userDetails.auth,
                    loggedIn:action.payload.userDetails.loggedIn,
                },
                emissionsDetails:{
                    KWH:action.payload.emissionsDetails.KWH,
                    Gasoline:action.payload.emissionsDetails.Gasoline,
                },

            }
        case 'USER_CHANGE':
            return {
                ...state,
                userDetails:{
                    name:action.payload.userName.name,
                    role:action.payload.userName.role,
                    email:action.payload.userName.email,
                    auth:action.payload.userName.auth.Gasoline,
                    loggedIn:action.payload.userName.loggedIn,

                },
            }

        case 'EMISSIONS_CHANGE':
            return {
                ...state,
                emissionsDetails:{
                    KWH:action.payload.emissions.KWH,
                    Gasoline:action.payload.emissions.Gasoline,
                },
            }
      default:
        return state;
    }
  }
  