import { useEffect } from 'react';

import useAppDispatch from '@/hooks/useAppDispatch';
import useAppSelector from '@/hooks/useAppSelector';

import { getAuth } from '@/redux/auth/auth-selectors';
import { getCurrentUser } from '@/redux/auth/auth-operations';

import About from '@/sections/About/About';
import Technologies from '@/sections/Technologies/Technologies';
import Welcome from '@/sections/Welcome/Welcome';

export default function Home() {

  const {isSigned, accessToken} = useAppSelector(getAuth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!accessToken || isSigned) {
      return;
    }
    dispatch(getCurrentUser(accessToken));
  }, []);

  return (
    <>
      <About />
      <Technologies />
      <Welcome />
    </>);
}
