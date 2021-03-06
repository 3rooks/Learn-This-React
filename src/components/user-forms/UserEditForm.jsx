import { useContext, useState } from 'react';
import { USER_ROLES } from '../../constants/userRoles';
import { updateUser } from '../../lib/api/usersApi';
import { UsersFormsContext } from '../../lib/contexts/UsersFormsContext';
import { useEditForm } from '../../lib/hooks/useEditForm';
import Button from '../buttons/Button';
import InputCheckbox from '../forms/InputCheckbox';
import InputText from '../forms/InputText';
import InputTextAsync from '../forms/InputTextAsync';
import Select from '../forms/Select';
import style from './UserEditForm.module.css';

const UserEditForm = () => {
	const { currentUser, onSuccess } = useContext(UsersFormsContext);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const {
		username,
		name,
		role,
		active,
		setName,
		setUsername,
		setActive,
		setRole,
		isFormInvalid
	} = useEditForm(currentUser);

	return (
		<form
			onSubmit={(ev) =>
				handleSubmit(
					ev,
					{
						id: currentUser.id,
						name: name.value,
						username: username.value,
						role,
						active
					},
					setIsSubmitting,
					onSuccess
				)
			}
		>
			<div className={style.row}>
				<InputText
					className={style.input}
					label='Nombre'
					placeholder='Artour'
					error={name.error}
					value={name.value}
					onChange={(ev) => setName(ev.target.value)}
				/>
				<InputTextAsync
					className={style.input}
					label='Username'
					placeholder='Arteezy'
					success={
						username.value !== currentUser.username &&
						!username.loading &&
						!username.error
					}
					loading={username.loading}
					error={username.error}
					value={username.value}
					onChange={(ev) => setUsername(ev.target.value)}
				/>
			</div>
			<div className={style.row}>
				<Select value={role} onChange={(ev) => setRole(ev.target.value)}>
					<option value={USER_ROLES.TEACHER}>Profesor</option>
					<option value={USER_ROLES.STUDENT}>Alumno</option>
					<option value={USER_ROLES.OTHER}>Otro</option>
				</Select>
				<div className={style.active}>
					<InputCheckbox
						checked={active}
						onChange={(ev) => setActive(ev.target.checked)}
					/>
					<span>Activo?</span>
				</div>
				<Button type='submit' disabled={isFormInvalid || isSubmitting}>
					{isSubmitting ? 'Cargando...' : 'Editar usuario'}
				</Button>
			</div>
		</form>
	);
};

const handleSubmit = async (ev, user, setIsSubmitting, onSuccess) => {
	ev.preventDefault();
	setIsSubmitting(true);
	const success = await updateUser(user);
	if (success) {
		onSuccess();
	} else {
		setIsSubmitting(false);
	}
};

export default UserEditForm;
