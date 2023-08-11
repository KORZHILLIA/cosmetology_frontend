import { useEffect } from 'react';
import { useRouter } from 'next/router';

import useAppDispatch from '@/hooks/useAppDispatch';
import useAppSelector from '@/hooks/useAppSelector';

import { getAuth } from '@/redux/auth/auth-selectors';
import { getCurrentUser } from '@/redux/auth/auth-operations';

export default function Home() {

  const {accessToken, error} = useAppSelector(getAuth);
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    if (!accessToken) {
      return;
    }
    dispatch(getCurrentUser(accessToken));
    if (error?.status === 401) {
      router.push('/auth/login');
      return;
    }
    router.push('/cabinet');
  }, [error]);
  
  return (
      <p>Home page</p>
  )
}
