import UserRow from './UserRow';
import style from './UserList.module.css';

export const UserList = ({ data }) => {
	return (
		<div className={style.list}>
			{data.length > 0 ? (
				data.map((e) => {
					return <UserRow data={e} key={e.name} />;
				})
			) : (
				<p>Users not found</p>
			)}
		</div>
	);
};
