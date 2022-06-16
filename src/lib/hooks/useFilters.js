import { useState } from 'react';
import { PAGINATION } from '../../constants/pagination';
import { SORT_OPTIONS } from '../../constants/sortOptions';

const INITIAL_STATE = {
	search: '',
	onlyActive: false,
	sortBy: SORT_OPTIONS.DEFAULT,
	page: PAGINATION.DEFAUL_PAGE,
	itemsPerPage: PAGINATION.DEFAUL_ITEMS_PER_PAGE
};

export const useFilters = () => {
	const [filters, setFilters] = useState(INITIAL_STATE);

	const setSearch = (search) => {
		setFilters({
			...filters,
			page: PAGINATION.DEFAUL_PAGE,
			search
		});
	};

	const setOnlyActive = (onlyActive) => {
		const newSortBy =
			onlyActive && filters.sortBy === SORT_OPTIONS.ACTIVE
				? SORT_OPTIONS.DEFAULT
				: filters.sortBy;

		setFilters({
			...filters,
			sortBy: newSortBy,
			page: PAGINATION.DEFAUL_PAGE,
			onlyActive
		});
	};

	const setSortBy = (sortBy) => {
		setFilters({
			...filters,
			page: PAGINATION.DEFAUL_PAGE,
			sortBy
		});
	};

	const setPage = (newPage) => {
		setFilters({
			...filters,
			page: newPage
		});
	};

	const setItemsPerPage = (newItemsPerPage) => {
		setFilters({
			...filters,
			page: PAGINATION.DEFAUL_PAGE,
			itemsPerPage: newItemsPerPage
		});
	};

	const resetFilters = () => {
		setFilters({ ...INITIAL_STATE });
	};

	return {
		filters,
		filtersSetters: {
			setSearch,
			setOnlyActive,
			setSortBy
		},
		paginationSetters: {
			setPage,
			setItemsPerPage
		},
		resetFilters
	};
};
