import { USER_ROLES } from '../../constants/userRoles';
import { useCreateForm } from '../../lib/hooks/useCreateForm';
import Button from '../buttons/Button';
import IconButton from '../buttons/IconButton';
import InputCheckbox from '../forms/InputCheckbox';
import InputText from '../forms/InputText';
import InputTextAsync from '../forms/InputTextAsync';
import Select from '../forms/Select';
import CrossIcon from '../icons/CrossIcon';
import style from './UserCreateForm.module.css';

const UserCreateForm = ({ onClose }) => {
	const { username, name, setName, setUsername } = useCreateForm();
	return (
		<form className={style.form}>
			<IconButton
				className={style.close}
				icon={CrossIcon}
				filled
				onClick={onClose}
			/>
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
					success={username.value && !username.loading && !username.error}
					loading={username.loading}
					error={username.error}
					value={username.value}
					onChange={(ev) => setUsername(ev.target.value)}
				/>
			</div>
			<div className={style.row}>
				<Select name='role'>
					<option value={USER_ROLES.TEACHER}>Profesor</option>
					<option value={USER_ROLES.STUDENT}>Alumno</option>
					<option value={USER_ROLES.OTHER}>Otro</option>
				</Select>
				<div className={style.active}>
					<InputCheckbox name='active' />
					<span>Activo?</span>
				</div>
				<Button type='submit'>Crear Usuario</Button>
			</div>
		</form>
	);
};

export default UserCreateForm;
