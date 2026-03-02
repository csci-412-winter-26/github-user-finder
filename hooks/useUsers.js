// create a custom hook to access theme context
import { useContext } from 'react';
import { UsersContext } from 'context/users';

const useUsers = () => {
    const context = useContext(UsersContext);

    if (!context) {
        throw new Error('useUsers must be used within a UsersProvider');
    }

    return context;
}

export default useUsers;
export { useUsers };