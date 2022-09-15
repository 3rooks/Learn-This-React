import { EDIT_FORM_ACTIONS } from '../../constants/editFormActions';

export const nameChanged = (name) => {
	return {
		type: EDIT_FORM_ACTIONS.NAME,
		payload: name
	};
};

export const usernameChanged = (username, currentUsername) => {
	return {
		type: EDIT_FORM_ACTIONS.USERNAME,
		payload: { username, isInitial: username === currentUsername }
	};
};

export const roleChanged = (role) => {
	return {
		type: EDIT_FORM_ACTIONS.ROLE,
		payload: role
	};
};

export const activeChanged = (active) => {
	return {
		type: EDIT_FORM_ACTIONS.ACTIVE,
		payload: active
	};
};

export const usernameErrorChanged = (error) => {
	return {
		type: EDIT_FORM_ACTIONS.USERNAME_ERROR,
		payload: error
	};
};

export const replace = (newState) => {
	return {
		type: EDIT_FORM_ACTIONS.REPLACE,
		payload: newState
	};
};
