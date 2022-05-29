import { UsersFormsContext } from '../../lib/contexts/UsersFormsContext';
import { useSelectedForm } from '../../lib/hooks/useSelectedForm';

const UserFormsProvider = ({ reloadUsers, resetFilters, children }) => {
	const { setFiltersForm, ...restSelectedForm } = useSelectedForm();
	const onSuccess = () => {
		reloadUsers();
		resetFilters();
		setFiltersForm();
	};

	return (
		<UsersFormsContext.Provider
			value={{
				setFiltersForm,
				onSuccess,
				...restSelectedForm
			}}
		>
			{children}
		</UsersFormsContext.Provider>
	);
};

export default UserFormsProvider;
