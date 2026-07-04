import Layout from '../components/Layout';
import { useState } from 'react';
import Link from 'next/link';

export default function Perfil() {
  const [user, setUser] = useState({
    name: 'João Silva',
    email: 'joao@jarvispronto.com',
    phone: '(11) 99999-9999',
    company: 'JarvisPronto',
    role: 'Administrador',
    avatar: 'JS'
  });

  const handleChange = (key, value) => {
    setUser({ ...user, [key]: value });
  };

  return (
    <Layout>
      <div style={{ padding: '24px 0', background: '#f8f9fe', minHeight: '100vh' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px' }}>
          <div style={{ marginBottom: '24px' }}>
            <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#0A192F' }}>Meu Perfil</h1>
            <p style={{ color: '#4A5568' }}>Gerencie suas informações pessoais.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '24px' }}>
            {/* Avatar */}
            <div style={{ background: 'white', padding: '24px', borderRadius: '16px', border: '1px solid #e5e7eb', textAlign: 'center' }}>
              <div style={{ width: '120px', height: '120px', borderRadius: '50%', background: '#e0fbfc', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '48px', fontWeight: 'bold', color: '#0077B6', margin: '0 auto 16px' }}>
                {user.avatar}
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#0A192F' }}>{user.name}</h3>
              <p style={{ color: '#4A5568' }}>{user.role}</p>
              <button style={{ marginTop: '16px', background: '#0077B6', color: 'white', padding: '8px 24px', border: 'none', borderRadius: '8px', cursor: 'pointer', transition: 'all 0.3s' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#005f8a'; e.currentTarget.style.transform = 'scale(1.05)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = '#0077B6'; e.currentTarget.style.transform = 'scale(1)'; }}
              >
                📷 Alterar Foto
              </button>
            </div>

            {/* Form */}
            <div style={{ background: 'white', padding: '24px', borderRadius: '16px', border: '1px solid #e5e7eb' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#0A192F', marginBottom: '16px' }}>Informações Pessoais</h3>
              
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontWeight: 'bold', color: '#0A192F', marginBottom: '4px' }}>Nome Completo</label>
                <input
                  type='text'
                  value={user.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  style={{ width: '100%', padding: '10px 12px', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                />
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontWeight: 'bold', color: '#0A192F', marginBottom: '4px' }}>E-mail</label>
                <input
                  type='email'
                  value={user.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  style={{ width: '100%', padding: '10px 12px', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                />
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontWeight: 'bold', color: '#0A192F', marginBottom: '4px' }}>Telefone</label>
                <input
                  type='text'
                  value={user.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  style={{ width: '100%', padding: '10px 12px', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                />
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontWeight: 'bold', color: '#0A192F', marginBottom: '4px' }}>Empresa</label>
                <input
                  type='text'
                  value={user.company}
                  onChange={(e) => handleChange('company', e.target.value)}
                  style={{ width: '100%', padding: '10px 12px', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                />
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontWeight: 'bold', color: '#0A192F', marginBottom: '4px' }}>Cargo</label>
                <input
                  type='text'
                  value={user.role}
                  onChange={(e) => handleChange('role', e.target.value)}
                  style={{ width: '100%', padding: '10px 12px', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                />
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <button style={{ background: '#0077B6', color: 'white', padding: '10px 32px', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', transition: 'all 0.3s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = '#005f8a'; e.currentTarget.style.transform = 'scale(1.05)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = '#0077B6'; e.currentTarget.style.transform = 'scale(1)'; }}
                >
                  Salvar Alterações
                </button>
                <button style={{ background: 'transparent', color: '#4A5568', padding: '10px 32px', border: '1px solid #e5e7eb', borderRadius: '8px', cursor: 'pointer', transition: 'all 0.3s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#0077B6'; e.currentTarget.style.color = '#0077B6'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.color = '#4A5568'; }}
                >
                  Alterar Senha
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
