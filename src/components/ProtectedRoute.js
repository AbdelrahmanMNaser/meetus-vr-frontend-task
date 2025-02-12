import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Cookies from 'js-cookie';

const ProtectedRoute = ({ children }) => {
  const router = useRouter();
  const token = Cookies.get('token');

  useEffect(() => {
    if (!token) {
      router.replace('/login'); // Redirect if not authenticated
    }
  }, [token, router]);

  if (!token) return null; // Prevents rendering protected content before redirecting

  return children;
};

export default ProtectedRoute;
