import UserList from './components/UserList';

const USERS = [
	{
		id: 0,
		name: 'Pablo Castellanos',
		active: true,
		role: 'teacher'
	},
	{
		id: 1,
		name: 'Jose Miguel Fernandez',
		active: true,
		role: 'teacher'
	},
	{
		id: 2,
		name: 'Brayhan Calle',
		active: true,
		role: 'student'
	},
	{
		id: 3,
		name: 'Frank Fuertes',
		active: false,
		role: 'student'
	},
	{
		id: 4,
		name: 'Fernando Bonifacio',
		active: false,
		role: 'other'
	},
	{
		id: 5,
		name: 'Enzo Rivera',
		active: false,
		role: 'other'
	}
];

const App = () => {
	return <UserList initialUsers={USERS} />;
};

export default App;
