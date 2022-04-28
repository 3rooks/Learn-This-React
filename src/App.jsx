import { UserList } from './components/UserList';

const USERS = [
	{
		name: 'Pablo Castellanos',
		active: true,
		role: 'teacher'
	},
	{
		name: 'Jose Miguel Fernandez',
		active: true,
		role: 'teacher'
	},
	{
		name: 'Brayhan Calle',
		active: false,
		role: 'student'
	}
];

const App = () => {
	return <UserList data={USERS} />;
};

export default App;
