import {
	LOAD_PROJECTS,
	LOAD_PROJECTS_SUCCESS,
	LOAD_PROJECTS_FAILURE,
	SET_PROJECTS,
	SET_FAVORITE_PROJECT,
} from "../actions/projects";

const reducer = (state, action) => {
	switch (action.type) {
		case LOAD_PROJECTS:
			return { error: action.payload };
		case LOAD_PROJECTS_SUCCESS:
			return { ...state, allProjects: action.payload, error: null };
		case LOAD_PROJECTS_FAILURE:
			return { ...state, error: action.payload };
		case SET_PROJECTS:
			return { ...state, allProjects: action.payload, error: null };
		case SET_FAVORITE_PROJECT:
			const doesExists = state.favoriteProjects.filter((item) => {
				return item.id === action.payload.id;
			});
			if (doesExists.length > 0) {
				const newFavoriteProjectsArray = state.favoriteProjects.filter(
					(item) => {
						return item.id !== action.payload.id;
					}
				);
				return {
					...state,
					favoriteProjects: newFavoriteProjectsArray, // splice returns the new array
					error: null,
				};
			} else {
				return {
					...state,
					favoriteProjects: state.favoriteProjects.concat(action.payload),
					error: null,
				};
			}

		default:
			return state;
	}
};

export default reducer;
