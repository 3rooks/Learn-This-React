import UserRow from './UserRow';

const UsersListRows = ({ users }) => {
	if (!users.length) return <p>No se encontraron usuarios...</p>;

	return users.map((users) => {
		return <UserRow data={users} key={users.username} />;
	});
};

export default UsersListRows;
