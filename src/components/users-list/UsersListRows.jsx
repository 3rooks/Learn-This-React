import UserRow from './UserRow';

const UsersListRows = ({ users, error, loading }) => {
	if (loading) return <p>Cargando usuarios...</p>;
	if (error) return <p>Error al cargar los usuarios...</p>;
	if (!users.length) return <p>No se encontraron usuarios...</p>;

	return users.map((users) => {
		return <UserRow {...users} key={users.id} />;
	});
};

export default UsersListRows;
