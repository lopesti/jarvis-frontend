// pages/_app.js
import { AuthProvider } from '../context/AuthContext';
import { Toaster } from 'react-hot-toast';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#363636',
            color: '#fff',
          },
        }}
      />
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;