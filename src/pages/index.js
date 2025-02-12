import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get('token');
    
    if (token) {
      router.replace('/dashboard'); // Redirect to dashboard if logged in
    } else {
      router.replace('/login'); // Otherwise, go to login page
    }
  }, [router]);

  return null; // No content needed since it redirects instantly
};

export default Home;
