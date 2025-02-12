import "@/styles/globals.css";

import { Provider } from 'react-redux';
import ProtectedRoute from '../components/ProtectedRoute';
import { useRouter } from 'next/router';
import { store } from './../store/index';

const protectedRoutes = ['/dashboard']; // Add your protected pages here

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const isProtected = protectedRoutes.includes(router.pathname);

  return (
    <Provider store={store}>
      {isProtected ? (
        <ProtectedRoute>
          <Component {...pageProps} />
        </ProtectedRoute>
      ) : (
        <Component {...pageProps} />
      )}
    </Provider>
  );
}

export default MyApp;
