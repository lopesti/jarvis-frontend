import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';

export default function Sidebar() {
  const router = useRouter();
  const { user, logout } = useAuth();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const isActive = (path) => router.pathname === path;

  const navItems = [
    { href: '/dashboard', label: 'Dashboard', icon: '📊' },
    { href: '/conversas', label: 'Conversas', icon: '💬' },
    { href: '/funil', label: 'Funil', icon: '📈' },
    { href: '/produtos', label: 'Produtos', icon: '📦' },
    { href: '/integracoes', label: 'Integrações', icon: '🔌' },
    { href: '/usuarios', label: 'Usuários', icon: '👥' }, // 👈 ADICIONADO
    { href: '/perfil', label: 'Perfil', icon: '👤' },
  ];

  return (
    <div style={{
      position: 'fixed',
      left: 0,
      top: 0,
      bottom: 0,
      width: isCollapsed ? '70px' : '240px',
      background: 'var(--sidebar-bg, #4A154B)',
      color: 'white',
      transition: 'all 0.3s ease',
      zIndex: 100,
      overflow: 'hidden',
      boxShadow: '2px 0 10px rgba(0,0,0,0.1)'
    }}>
      <div style={{ padding: '20px 16px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {!isCollapsed && (
            <span style={{ fontSize: '18px', fontWeight: 'bold' }}>
              Jarvis<span style={{ color: '#36C5F0' }}>Pronto</span>
            </span>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              fontSize: '20px',
              padding: '4px 8px'
            }}
          >
            {isCollapsed ? '→' : '←'}
          </button>
        </div>
      </div>

      <nav style={{ padding: '16px 8px' }}>
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '10px 12px',
              marginBottom: '4px',
              borderRadius: '8px',
              background: isActive(item.href) ? '#36C5F0' : 'transparent',
              color: isActive(item.href) ? '#4A154B' : 'rgba(255,255,255,0.8)',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: isActive(item.href) ? 'bold' : 'normal',
              transition: 'all 0.3s',
              justifyContent: isCollapsed ? 'center' : 'flex-start'
            }}
            onMouseEnter={(e) => {
              if (!isActive(item.href)) {
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.color = 'white';
              }
            }}
            onMouseLeave={(e) => {
              if (!isActive(item.href)) {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = 'rgba(255,255,255,0.8)';
              }
            }}
          >
            <span style={{ fontSize: '20px' }}>{item.icon}</span>
            {!isCollapsed && <span>{item.label}</span>}
          </Link>
        ))}
      </nav>

      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: '16px',
        borderTop: '1px solid rgba(255,255,255,0.1)'
      }}>
        <button
          onClick={logout}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            width: '100%',
            padding: '10px 12px',
            borderRadius: '8px',
            border: 'none',
            background: '#E01E5A',
            color: 'white',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'all 0.3s',
            justifyContent: isCollapsed ? 'center' : 'flex-start'
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = '#C4174D'; e.currentTarget.style.transform = 'scale(1.02)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = '#E01E5A'; e.currentTarget.style.transform = 'scale(1)'; }}
        >
          <span style={{ fontSize: '20px' }}>🚪</span>
          {!isCollapsed && <span>Sair</span>}
        </button>
      </div>
    </div>
  );
}