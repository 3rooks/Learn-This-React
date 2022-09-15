import { FILTERS_ACTIONS } from '../../constants/filtersActions';

export const searchChanged = (search) => {
	return {
		type: FILTERS_ACTIONS.SEARCH,
		payload: search
	};
};

export const onlyActiveChanged = (onlyActive) => {
	return {
		type: FILTERS_ACTIONS.ONLY_ACTIVE,
		payload: onlyActive
	};
};

export const sortByChanged = (sortBy) => {
	return {
		type: FILTERS_ACTIONS.SORT_BY,
		payload: sortBy
	};
};

export const pageChanged = (page) => {
	return {
		type: FILTERS_ACTIONS.PAGE,
		payload: page
	};
};

export const itemsPerPageChanged = (itemsPerPage) => {
	return {
		type: FILTERS_ACTIONS.ITEMS_PER_PAGE,
		payload: itemsPerPage
	};
};

export const reset = () => {
	return {
		type: FILTERS_ACTIONS.RESET
	};
};
