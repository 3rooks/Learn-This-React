import { useContext } from 'react';
import { SORT_OPTIONS } from '../../constants/sortOptions';
import { USER_FORMS } from '../../constants/userForms';
import {
	onlyActiveChanged,
	searchChanged,
	sortByChanged
} from '../../lib/actions/filtersActions';
import { UsersFormsContext } from '../../lib/contexts/UsersFormsContext';
import Button from '../buttons/Button';
import InputCheckbox from '../forms/InputCheckbox';
import InputSearch from '../forms/InputSearch';
import Select from '../forms/Select';
import style from './UsersListFilters.module.css';

const UsersListFilters = ({ search, onlyActive, sortBy, dispatchFilters }) => {
	const { currentForm, setCreateForm } = useContext(UsersFormsContext);
	if (currentForm !== USER_FORMS.FILTERS) return null;

	return (
		<div className={style.form}>
			<div className={style.row}>
				<InputSearch
					placeholder='Buscar...'
					value={search}
					onChange={(ev) => dispatchFilters(searchChanged(ev.target.value))}
				/>
				<Select
					value={sortBy}
					onChange={(ev) =>
						dispatchFilters(sortByChanged(Number(ev.target.value)))
					}
				>
					<option value={SORT_OPTIONS.DEFAULT}>Por defecto</option>
					<option value={SORT_OPTIONS.NAME}>Por nombre</option>
					<option value={SORT_OPTIONS.ROLE}>Por rol</option>
					{!onlyActive && (
						<option value={SORT_OPTIONS.ACTIVE}>Por activos</option>
					)}
				</Select>
			</div>
			<div className={style.row}>
				<div className={style.active}>
					<InputCheckbox
						className={style.checkbox}
						checked={onlyActive}
						onChange={(ev) =>
							dispatchFilters(onlyActiveChanged(ev.target.checked))
						}
					/>
					<p>Mostrar solo activos</p>
				</div>
				<Button onClick={setCreateForm}>Añadir Usuario</Button>
			</div>
		</div>
	);
};

export default UsersListFilters;
