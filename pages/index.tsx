import { useEffect } from 'react';
import { getCurrent } from '@/service/externalApi';

export default function Home() {

  useEffect(() => {
    const getCurrentUser = async () => {
      const user = await getCurrent();
      console.log(user);
    }
    getCurrentUser();
  }, []);
  return (
      <p>Home page</p>
  )
}
