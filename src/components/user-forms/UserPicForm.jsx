import { useContext, useState, useRef } from 'react';
import { updateUserPic } from '../../lib/api/usersApi';
import { UsersFormsContext } from '../../lib/contexts/UsersFormsContext';
import { fileToDataURL } from '../../lib/utils/file-utils';
import Button from '../buttons/Button';
import IconButton from '../buttons/IconButton';
import PencilIcon from '../icons/PencilIcon';
import PictureIcon from '../icons/PictureIcon';
import style from './UserPicForm.module.css';

const ALLOWED_MIME_TYPES = ['image/jpeg', 'image/png'];
const MAX_SIZE = 102400;

const UserPicForm = ({ closeModal, currentUser }) => {
	const { onSuccess } = useContext(UsersFormsContext);
	const [preview, setPreview] = useState();
	const [isSubmitting, setIsSubmitting] = useState(false);
	const message = getMessage(preview);
	const inputRef = useRef(null);

	return (
		<div className={style.wrapper}>
			<div className={style.preview}>
				{preview && preview.src ? (
					<img src={preview.src} alt='Preview' />
				) : (
					<PictureIcon className={style.icon} />
				)}
				<IconButton
					className={style.iconButton}
					icon={PencilIcon}
					onClick={() => inputRef.current.click()}
					filled
				/>
			</div>
			{message}
			<input
				ref={inputRef}
				className={style.input}
				type='file'
				accept={ALLOWED_MIME_TYPES.join(',')}
				onChange={(ev) => handleChange(ev, setPreview)}
			/>
			<Button
				className={style.button}
				disabled={isSubmitting || !preview || preview.src}
				onClick={() =>
					handleClick(
						currentUser.id,
						closeModal,
						onSuccess,
						preview,
						setIsSubmitting
					)
				}
			>
				{isSubmitting ? 'Cargando...' : 'Actualizar foto'}
			</Button>
		</div>
	);
};

const getMessage = (preview) => {
	if (!preview) return <span>JPG/PNG | Max 100KB</span>;
	return preview.filename ? (
		<span className={style.filename}>{preview.filename}</span>
	) : (
		<span className={style.error}>{preview.error}</span>
	);
};

const handleChange = async (ev, setPreview) => {
	const file = ev.target.files[0];

	if (!file) {
		return setPreview();
	}

	if (!ALLOWED_MIME_TYPES.includes(file.type)) {
		return setPreview({
			error: 'Solo JPG/PNG'
		});
	}

	if (file.size > MAX_SIZE) {
		return setPreview({
			error: 'Maximo 100KB'
		});
	}

	try {
		const dataUrl = await fileToDataURL(file);

		setPreview({
			src: dataUrl,
			filename: file.name
		});
	} catch (error) {
		setPreview({
			error: error.message
		});
	}
};

const handleClick = async (
	userId,
	closeModal,
	onSuccess,
	preview,
	setIsSubmitting
) => {
	if (!preview) return;
	setIsSubmitting(true);
	const success = await updateUserPic(userId, preview.src);

	if (success) {
		onSuccess();
		closeModal();
	} else {
		setIsSubmitting(false);
	}
};

export default UserPicForm;
