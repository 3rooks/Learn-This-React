import { CREATE_FORM_ACTIONS } from '../../constants/createFormActions';

export const nameChanged = (name) => {
	return {
		type: CREATE_FORM_ACTIONS.NAME,
		payload: name
	};
};

export const usernameChanged = (username) => {
	return {
		type: CREATE_FORM_ACTIONS.USERNAME,
		payload: username
	};
};

export const usernameErrorChanged = (error) => {
	return {
		type: CREATE_FORM_ACTIONS.USERNAME_ERROR,
		payload: error
	};
};
