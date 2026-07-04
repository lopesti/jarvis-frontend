import Layout from '../components/Layout';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

export default function Perfil() {
  const { user } = useAuth();
  const [form, setForm] = useState({
    name: user?.name || 'João Silva',
    email: user?.email || 'joao@jarvispronto.com',
    phone: '(11) 99999-9999',
    company: 'JarvisPronto',
    role: 'Administrador'
  });

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  return (
    <Layout>
      <div style={{ padding: '24px 0', background: '#f8f9fe', minHeight: '100vh' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px' }}>
          <div style={{ marginBottom: '32px' }}>
            <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#0A192F' }}>Meu Perfil</h1>
            <p style={{ color: '#4A5568' }}>Gerencie suas informações pessoais.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '24px' }}>
            <div style={{ 
              background: 'white', 
              padding: '32px', 
              borderRadius: '16px', 
              border: '1px solid #e5e7eb',
              textAlign: 'center'
            }}>
              <div style={{ 
                width: '120px', 
                height: '120px', 
                borderRadius: '50%', 
                background: 'linear-gradient(135deg, #e0fbfc, #0077B6)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                fontSize: '48px', 
                fontWeight: 'bold', 
                color: 'white',
                margin: '0 auto 16px'
              }}>
                {form.name.charAt(0)}
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#0A192F' }}>{form.name}</h3>
              <p style={{ color: '#4A5568' }}>{form.role}</p>
              <button style={{ 
                marginTop: '16px', 
                background: '#0077B6', 
                color: 'white', 
                padding: '10px 24px', 
                border: 'none', 
                borderRadius: '12px', 
                cursor: 'pointer',
                fontWeight: 'bold',
                transition: 'all 0.3s'
              }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#005f8a'; e.currentTarget.style.transform = 'scale(1.05)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = '#0077B6'; e.currentTarget.style.transform = 'scale(1)'; }}
              >
                📷 Alterar Foto
              </button>
            </div>

            <div style={{ background: 'white', padding: '32px', borderRadius: '16px', border: '1px solid #e5e7eb' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#0A192F', marginBottom: '24px' }}>Informações Pessoais</h3>
              
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontWeight: 'bold', color: '#0A192F', marginBottom: '6px', fontSize: '14px' }}>Nome Completo</label>
                <input
                  type='text'
                  value={form.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  style={{ 
                    width: '100%', 
                    padding: '12px 16px', 
                    border: '2px solid #e5e7eb', 
                    borderRadius: '12px',
                    fontSize: '16px',
                    transition: 'all 0.3s',
                    outline: 'none',
                    background: '#f8f9fe'
                  }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = '#0077B6'; e.currentTarget.style.background = 'white'; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.background = '#f8f9fe'; }}
                />
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontWeight: 'bold', color: '#0A192F', marginBottom: '6px', fontSize: '14px' }}>E-mail</label>
                <input
                  type='email'
                  value={form.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  style={{ 
                    width: '100%', 
                    padding: '12px 16px', 
                    border: '2px solid #e5e7eb', 
                    borderRadius: '12px',
                    fontSize: '16px',
                    transition: 'all 0.3s',
                    outline: 'none',
                    background: '#f8f9fe'
                  }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = '#0077B6'; e.currentTarget.style.background = 'white'; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.background = '#f8f9fe'; }}
                />
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontWeight: 'bold', color: '#0A192F', marginBottom: '6px', fontSize: '14px' }}>Telefone</label>
                <input
                  type='text'
                  value={form.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  style={{ 
                    width: '100%', 
                    padding: '12px 16px', 
                    border: '2px solid #e5e7eb', 
                    borderRadius: '12px',
                    fontSize: '16px',
                    transition: 'all 0.3s',
                    outline: 'none',
                    background: '#f8f9fe'
                  }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = '#0077B6'; e.currentTarget.style.background = 'white'; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.background = '#f8f9fe'; }}
                />
              </div>

              <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
                <button style={{ 
                  background: '#0077B6', 
                  color: 'white', 
                  padding: '12px 32px', 
                  border: 'none', 
                  borderRadius: '12px', 
                  cursor: 'pointer', 
                  fontWeight: 'bold',
                  transition: 'all 0.3s'
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = '#005f8a'; e.currentTarget.style.transform = 'scale(1.05)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = '#0077B6'; e.currentTarget.style.transform = 'scale(1)'; }}
                >
                  Salvar Alterações
                </button>
                <button style={{ 
                  background: 'transparent', 
                  color: '#4A5568', 
                  padding: '12px 32px', 
                  border: '2px solid #e5e7eb', 
                  borderRadius: '12px', 
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
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
