import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthContext';
import Layout from '../components/Layout';

export default function Register() {
  const router = useRouter();
  const { register } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const result = await register(name, email, password);
    setLoading(false);
    if (result.success) {
      router.push('/dashboard');
    }
  };

  return (
    <Layout>
      <div style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: '24px',
        background: 'linear-gradient(135deg, #f8f9fe 0%, #e0fbfc 100%)'
      }}>
        <div style={{ 
          background: 'white', 
          padding: '48px 40px', 
          borderRadius: '20px', 
          maxWidth: '420px', 
          width: '100%', 
          boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
          border: '1px solid rgba(0,119,182,0.08)'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <div style={{ fontSize: '48px', marginBottom: '8px' }}>🚀</div>
            <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: '#0A192F' }}>Criar conta</h2>
            <p style={{ color: '#4A5568', marginTop: '4px' }}>Comece sua jornada gratuitamente</p>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', marginBottom: '6px', color: '#0A192F', fontWeight: '600', fontSize: '14px' }}>Nome completo</label>
              <input
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Seu nome'
                style={{ 
                  width: '100%', 
                  padding: '14px 16px', 
                  border: '2px solid #e5e7eb', 
                  borderRadius: '12px', 
                  fontSize: '16px',
                  transition: 'all 0.3s',
                  outline: 'none',
                  background: '#f8f9fe'
                }}
                onFocus={(e) => { e.currentTarget.style.borderColor = '#0077B6'; e.currentTarget.style.background = 'white'; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.background = '#f8f9fe'; }}
                required
              />
            </div>
            
            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', marginBottom: '6px', color: '#0A192F', fontWeight: '600', fontSize: '14px' }}>E-mail</label>
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='seu@email.com'
                style={{ 
                  width: '100%', 
                  padding: '14px 16px', 
                  border: '2px solid #e5e7eb', 
                  borderRadius: '12px', 
                  fontSize: '16px',
                  transition: 'all 0.3s',
                  outline: 'none',
                  background: '#f8f9fe'
                }}
                onFocus={(e) => { e.currentTarget.style.borderColor = '#0077B6'; e.currentTarget.style.background = 'white'; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.background = '#f8f9fe'; }}
                required
              />
            </div>
            
            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', marginBottom: '6px', color: '#0A192F', fontWeight: '600', fontSize: '14px' }}>Senha</label>
              <input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Mínimo 6 caracteres'
                style={{ 
                  width: '100%', 
                  padding: '14px 16px', 
                  border: '2px solid #e5e7eb', 
                  borderRadius: '12px', 
                  fontSize: '16px',
                  transition: 'all 0.3s',
                  outline: 'none',
                  background: '#f8f9fe'
                }}
                onFocus={(e) => { e.currentTarget.style.borderColor = '#0077B6'; e.currentTarget.style.background = 'white'; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.background = '#f8f9fe'; }}
                minLength={6}
                required
              />
            </div>
            
            <button
              type='submit'
              disabled={loading}
              style={{ 
                width: '100%', 
                background: '#0077B6', 
                color: 'white', 
                padding: '16px', 
                borderRadius: '12px', 
                border: 'none', 
                fontWeight: 'bold', 
                fontSize: '16px', 
                cursor: 'pointer', 
                opacity: loading ? 0.6 : 1,
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => { if (!loading) { e.currentTarget.style.background = '#005f8a'; e.currentTarget.style.transform = 'translateY(-2px)'; } }}
              onMouseLeave={(e) => { if (!loading) { e.currentTarget.style.background = '#0077B6'; e.currentTarget.style.transform = 'translateY(0)'; } }}
            >
              {loading ? 'Criando conta...' : 'Criar conta'}
            </button>
          </form>
          
          <div style={{ marginTop: '24px', textAlign: 'center' }}>
            <p style={{ color: '#4A5568', fontSize: '14px' }}>
              Já tem uma conta?{' '}
              <Link href='/login' style={{ color: '#0077B6', textDecoration: 'none', fontWeight: 'bold' }}>
                Fazer login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
