import UserRow from './UserRow';

const UsersListRows = ({ users, toggleUserActive }) => {
	if (!users.length) return <p>No se encontraron usuarios...</p>;

	return users.map((users) => {
		return (
			<UserRow
				data={users}
				key={users.id}
				toggleUserActive={toggleUserActive}
			/>
		);
	});
};

export default UsersListRows;
