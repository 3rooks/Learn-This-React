import UserCard from './UserCard';
import UserRow from './UserRow';
import style from './UsersListRows.module.css';

const UsersListRows = ({ users, error, loading, view }) => {
	if (loading) return <p>Cargando usuarios...</p>;
	if (error) return <p>Error al cargar los usuarios...</p>;
	if (!users.length) return <p>No se encontraron usuarios...</p>;

	const UserComponent = view ? UserRow : UserCard;

	return (
		<div className={style.container}>
			{users.map((users) => {
				return <UserComponent {...users} key={users.id} />;
			})}
		</div>
	);
};

export default UsersListRows;
