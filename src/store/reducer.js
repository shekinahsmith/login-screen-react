import * as actionTypes from './actions/actionTypes';

const initialState = {
	isExistingUser: true,
	userNotFound: false,
	existingUserData: {
		email: null,
		companyId: null,
	},
	signInSuccess: false,
	signUpSuccess: false,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.CHECK_EXISTING_USER:
			return {
				...state,
				isExistingUser: action.isExistingUser,
			};

		case actionTypes.SET_EXISTING_USER:
			return {
				...state,
				existingUserData: {
					...state.existingUserData,
					email: action.existingUserData.email,
					companyId: action.existingUserData.companyId,
				},
				signInSuccess: action.signInSuccess,
			};

		case actionTypes.SET_NEW_USER:
			return {
				...state,
				isExistingUser: action.isExistingUser,
				signUpSuccess: action.signUpSuccess,
				userNotFound: action.userNotFound,
			};

		case actionTypes.USER_NOT_FOUND:
			return {
				...state,
				userNotFound: action.userNotFound,
			};

		default:
			return state;
	}
};

export default reducer;
