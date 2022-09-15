import { FILTER_ACTIONS } from '../../constants/filtersActions';
import { PAGINATION } from '../../constants/pagination';
import PageSelector from '../forms/PageSelector';
import Select from '../forms/Select';
import style from './UsersListPagination.module.css';

const UsersListPagination = ({
	page,
	itemsPerPage,
	totalUsers,
	dispatchFilters
}) => {
	return (
		<div className={style.wrapper}>
			<div className={style.itemsPerPage}>
				<Select
					value={itemsPerPage}
					onChange={(ev) =>
						dispatchFilters({
							type: FILTER_ACTIONS.ITEMS_PER_PAGE,
							value: Number(ev.target.value)
						})
					}
				>
					{PAGINATION.ITEMS_PER_PAGE_VALUES.map((value) => (
						<option key={value} value={value}>
							{value}
						</option>
					))}
				</Select>
				<p>Elementos por Pagina</p>
			</div>
			<PageSelector
				page={page}
				totalPages={Math.ceil(totalUsers / itemsPerPage)}
				setPage={(newPage) =>
					dispatchFilters({ type: FILTER_ACTIONS.PAGE, value: newPage })
				}
			/>
		</div>
	);
};

export default UsersListPagination;
