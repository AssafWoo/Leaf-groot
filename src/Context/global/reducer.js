export default function reducer(state, action) {
    switch (action.type) {
        case 'PLAYING_AROUND':
            return{
                company: {
                    name:action.payload.company.name,
                    rank:action.payload.company.rank,
                    numberOfWorkers:action.payload.company.numberOfWorkers,
                    street:action.payload.company.street,
                    city:action.payload.company.city,
                    states:[...state.company.states, action.payload.company.states],
                    image: action.payload.company.image,
                    countries: [...state.company.countries, action.payload.company.countries],
                    sectors:[...state.company.sectors, action.payload.company.sectors]
                },
                user:{
                    name:action.payload.user.name,
                    image:action.payload.user.image,
                    role:action.payload.user.role,
                    email:action.payload.user.email,
                    auth:action.payload.user.auth,
                    loggedIn:action.payload.user.loggedIn,

                },
                emissions:{
                    KWH:action.payload.emissions.KWH,
                    Gasoline:action.payload.emissions.Gasoline,

                },

            }
        case 'USER_CHANGE':
            return {
                ...state,
                user:{
                    name:action.payload.name,
                    role:action.payload.role,
                    email:action.payload.email,
                    auth:action.payload.auth.Gasoline,
                    loggedIn:action.payload.loggedIn,
                },
            }

        case 'EMISSIONS_CHANGE':
            return {
                ...state,
                emissions:{
                    KWH:action.payload.emissions.KWH,
                    Gasoline:action.payload.emissions.Gasoline,

                },
            }
      default:
        return state;
    }
  }
  