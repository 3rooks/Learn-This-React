import UserList from './components/UserList';
import { USER_ROLES } from './constants/userRoles';

const USERS = [
	{
		username: 'pablo',
		name: 'Pablo Castellanos',
		active: true,
		role: USER_ROLES.TEACHER
	},
	{
		username: 'jose',
		name: 'Jose Miguel Fernandez',
		active: true,
		role: USER_ROLES.TEACHER
	},
	{
		username: 'brayhan',
		name: 'Brayhan Calle',
		active: true,
		role: USER_ROLES.STUDENT
	},
	{
		username: 'frank',
		name: 'Frank Fuertes',
		active: false,
		role: USER_ROLES.STUDENT
	},
	{
		username: 'fernando',
		name: 'Fernando Bonifacio',
		active: false,
		role: USER_ROLES.OTHER
	},
	{
		username: 'enzo',
		name: 'Enzo Rivera',
		active: false,
		role: USER_ROLES.OTHER
	}
];

const App = () => {
	return <UserList initialUsers={USERS} />;
};

export default App;
