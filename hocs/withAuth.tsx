import { NextComponentType } from 'next';

import useAppSelector from '@/hooks/useAppSelector';
import { getAuth } from '@/redux/auth/auth-selectors';

import Home from '@/pages';

function withAuth (Component: NextComponentType) {
    const WithAuth = () => {
        const { isSigned } = useAppSelector(getAuth);

        if (isSigned) {
            return <Component />;
        }
        return <Home />;
    }
    return WithAuth;
};

export default withAuth;
