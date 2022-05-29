import { useContext, useState } from 'react';
import { deleteUserById } from '../../lib/api/usersApi';
import { UsersFormsContext } from '../../lib/contexts/UsersFormsContext';
import Button from '../buttons/Button';
import style from './UserDeleteForm.module.css';

const UserDeleteForm = () => {
	const { setFiltersForm, currentUser, onSuccess } =
		useContext(UsersFormsContext);
	const [isSubmitting, setIsSubmitting] = useState(false);

	return (
		<form
			onSubmit={(ev) =>
				handleSubmit(ev, currentUser.id, setIsSubmitting, onSuccess)
			}
		>
			<p className={style.text}>
				Estas seguro de eliminar al usuario: &quot;{currentUser.name}&quot;?
			</p>
			<div className={style.row}>
				<Button
					type='button'
					kind='secondary'
					disabled={isSubmitting}
					onClick={setFiltersForm}
				>
					{isSubmitting ? 'Cargando...' : 'Cancelar'}
				</Button>
				<Button type='submit' disabled={isSubmitting}>
					{isSubmitting ? 'Cargando...' : 'Eliminar usuario'}
				</Button>
			</div>
		</form>
	);
};

const handleSubmit = async (ev, userId, setIsSubmitting, onSuccess) => {
	ev.preventDefault();
	setIsSubmitting(true);
	const success = await deleteUserById(userId);
	if (success) {
		onSuccess();
	} else {
		setIsSubmitting(false);
	}
};

export default UserDeleteForm;
