import UserDisplay from '../user/UserDisplay';
import UserRole from '../user/UserRole';
import style from './UserCard.module.css';
import UserStatus from '../user/UserStatus';
import UserActions from '../user/UserActions';

const UserCard = ({ user }) => {
	return (
		<div className={style.wrapper}>
			<div className={style.card}>
				<div className={style.name}>
					<UserDisplay
						name={user.name}
						username={user.username}
						picture={user.picture}
					/>
				</div>
				<div className={style.info}>
					<UserRole role={user.role} />
					<UserStatus active={user.active} />
					<div className={style.actions}>
						<UserActions user={user} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserCard;
