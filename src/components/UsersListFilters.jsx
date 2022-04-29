import style from './UsersListFilters.module.css';

const UsersListFilters = ({
	search,
	setSearch,
	onlyActive,
	setOnlyActive,
	sortBy,
	setSortBy
}) => {
	return (
		<form className={style.form}>
			<label>
				Buscar por usuarios :
				<input
					type='text'
					value={search}
					onChange={(ev) => setSearch(ev.target.value)}
				/>
			</label>
			<div className={style.active}>
				<input
					type='checkbox'
					checked={onlyActive}
					onChange={(ev) => setOnlyActive(ev.target.checked)}
				/>
				<span>Solo activos</span>
			</div>
			<select
				value={sortBy}
				onChange={(ev) => setSortBy(Number(ev.target.value))}
			>
				<option value={0}>Por defecto</option>
				<option value={1}>Por nombre</option>
			</select>
		</form>
	);
};

export default UsersListFilters;
