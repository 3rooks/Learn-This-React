import { FILTER_ACTIONS } from '../../constants/filtersActions';
import { PAGINATION } from '../../constants/pagination';
import { SORT_OPTIONS } from '../../constants/sortOptions';

export const FILTERS_INITIAL_STATE = {
	search: '',
	onlyActive: false,
	sortBy: SORT_OPTIONS.DEFAULT,
	page: PAGINATION.DEFAUL_PAGE,
	itemsPerPage: PAGINATION.DEFAUL_ITEMS_PER_PAGE
};

export const filtersReducer = (state, action) => {
	switch (action.type) {
		case FILTER_ACTIONS.SEARCH:
			return {
				...state,
				page: PAGINATION.DEFAUL_PAGE,
				search: action.value
			};
		case FILTER_ACTIONS.ONLY_ACTIVE: {
			const newSortBy =
				action.value && state.sortBy === SORT_OPTIONS.ACTIVE
					? SORT_OPTIONS.DEFAULT
					: state.sortBy;

			return {
				...state,
				sortBy: newSortBy,
				page: PAGINATION.DEFAUL_PAGE,
				onlyActive: action.value
			};
		}
		case FILTER_ACTIONS.SORT_BY:
			return {
				...state,
				page: PAGINATION.DEFAUL_PAGE,
				sortBy: action.value
			};
		case FILTER_ACTIONS.PAGE:
			return {
				...state,
				page: action.value
			};
		case FILTER_ACTIONS.ITEMS_PER_PAGE:
			return {
				...state,
				page: PAGINATION.DEFAUL_PAGE,
				itemsPerPage: action.value
			};
		case FILTER_ACTIONS.RESET:
			return { ...FILTERS_INITIAL_STATE };

		default:
			throw new Error('Invalid action type');
	}
};
