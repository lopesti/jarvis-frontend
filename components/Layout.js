import Sidebar from './Sidebar';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/router';

export default function Layout({ children }) {
  const { user } = useAuth();
  const router = useRouter();
  
  // Rotas públicas (sem sidebar)
  const publicRoutes = ['/', '/login', '/register'];
  const isPublic = publicRoutes.includes(router.pathname);

  if (isPublic || !user) {
    return <main>{children}</main>;
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--bg-primary, #F8F8F8)' }}>
      <Sidebar />
      <main style={{
        marginLeft: '240px',
        flex: 1,
        padding: '24px',
        transition: 'all 0.3s ease',
        minHeight: '100vh'
      }}>
        {children}
      </main>
    </div>
  );
}
