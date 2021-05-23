export default function reducer(state, action) {
    switch (action.type) {
        case 'USER_LOGOUT':
            localStorage.removeItem('id');
            return {
                ...state,
                user:{
                    ...state.user,
                    loggedIn:false,
                },
           }
           case 'USER_LOGIN':
            localStorage.setItem('id', action.payload)
            return {
                ...state,
                user:{
                    ...state.user,
                    loggedIn:true,
                },
           }
      default:
        return state;
    }
  }
  