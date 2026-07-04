import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

export default function Header() {
  const router = useRouter();
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const isActive = (path) => router.pathname === path;

  const navItems = [
    { href: '/dashboard', label: 'Dashboard', icon: '📊' },
    { href: '/conversas', label: 'Conversas', icon: '💬' },
    { href: '/funil', label: 'Funil', icon: '📈' },
    { href: '/produtos', label: 'Produtos', icon: '📦' },
    { href: '/integracoes', label: 'Integrações', icon: '🔌' },
    { href: '/perfil', label: 'Perfil', icon: '👤' },
  ];

  return (
    <header style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      right: 0, 
      zIndex: 50, 
      background: '#4A154B', 
      borderBottom: '2px solid #36C5F0',
      padding: '8px 0',
      transition: 'all 0.3s'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href='/' style={{ fontSize: '22px', fontWeight: 'bold', color: 'white', textDecoration: 'none' }}>
          Jarvis<span style={{ color: '#36C5F0' }}>Pronto</span>
        </Link>

        <nav style={{ display: 'flex', gap: '4px', alignItems: 'center', flexWrap: 'wrap' }}>
          {user && navItems.map((item) => (
            <Link 
              key={item.href}
              href={item.href} 
              style={{ 
                padding: '6px 14px',
                background: isActive(item.href) ? '#36C5F0' : 'transparent',
                color: isActive(item.href) ? '#4A154B' : 'rgba(255,255,255,0.8)',
                borderRadius: '6px',
                textDecoration: 'none',
                fontSize: '13px',
                fontWeight: isActive(item.href) ? 'bold' : 'normal',
                transition: 'all 0.3s',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}
              onMouseEnter={(e) => { if (!isActive(item.href)) { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'white'; } }}
              onMouseLeave={(e) => { if (!isActive(item.href)) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'rgba(255,255,255,0.8)'; } }}
            >
              <span>{item.icon}</span> {item.label}
            </Link>
          ))}
          
          {!user ? (
            <>
              <Link href='/login' style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', padding: '6px 14px' }}>Login</Link>
              <Link href='/register' style={{ 
                background: '#36C5F0', 
                color: '#4A154B', 
                padding: '6px 18px', 
                borderRadius: '6px', 
                textDecoration: 'none',
                fontWeight: 'bold'
              }}>Começar</Link>
            </>
          ) : (
            <button
              onClick={logout}
              style={{ 
                background: '#E01E5A', 
                color: 'white', 
                padding: '6px 18px', 
                borderRadius: '6px', 
                border: 'none',
                cursor: 'pointer',
                fontWeight: 'bold',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#C4174D'; e.currentTarget.style.transform = 'scale(1.02)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#E01E5A'; e.currentTarget.style.transform = 'scale(1)'; }}
            >
              Sair
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}
