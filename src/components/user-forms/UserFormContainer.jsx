import { useContext } from 'react';
import { USER_FORMS } from '../../constants/userForms';
import { UsersFormsContext } from '../../lib/contexts/UsersFormsContext';
import IconButton from '../buttons/IconButton';
import CrossIcon from '../icons/CrossIcon';
import style from './UserFormContainer.module.css';
import UserCreateForm from './UserCreateForm';
import UserDeleteForm from './UserDeleteForm';
import UserEditForm from './UserEditForm';

const FORMS = {
	[USER_FORMS.CREATE]: <UserCreateForm />,
	[USER_FORMS.EDIT]: <UserEditForm />,
	[USER_FORMS.DELETE]: <UserDeleteForm />
};

const UserFormContainer = () => {
	const { currentForm, setFiltersForm } = useContext(UsersFormsContext);
	const form = FORMS[currentForm];
	if (!form) return null;

	return (
		<div className={style.wrapper}>
			<IconButton
				className={style.close}
				icon={CrossIcon}
				filled
				onClick={setFiltersForm}
			/>
			{form}
		</div>
	);
};

export default UserFormContainer;
