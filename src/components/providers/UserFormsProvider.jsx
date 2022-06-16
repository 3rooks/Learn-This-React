import { UsersFormsContext } from '../../lib/contexts/UsersFormsContext';
import { useSelectedForm } from '../../lib/hooks/useSelectedForm';

const UserFormsProvider = ({ resetFilters, children }) => {
	const { setFiltersForm, ...restSelectedForm } = useSelectedForm();
	const onSuccess = () => {
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
