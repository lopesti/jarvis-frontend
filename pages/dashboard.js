import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/router';
import { LineChart, BarChart, DoughnutChart } from '../components/Charts';
import { SkeletonCard, SkeletonTable } from '../components/Skeleton';

export default function Dashboard() {
  const { user } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (!user) {
      router.push('/login');
      return;
    }
    // Simular carregamento
    setTimeout(() => setLoading(false), 1500);
  }, [user]);

  // Dados para gráficos
  const lineData = {
    labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
    datasets: [
      {
        label: 'Conversas',
        data: [65, 78, 90, 85, 102, 95, 120],
        borderColor: '#36C5F0',
        backgroundColor: 'rgba(54, 197, 240, 0.1)',
        fill: true,
        tension: 0.4
      },
      {
        label: 'Vendas',
        data: [20, 25, 30, 28, 35, 32, 40],
        borderColor: '#2EB67D',
        backgroundColor: 'rgba(46, 182, 125, 0.1)',
        fill: true,
        tension: 0.4
      }
    ]
  };

  const barData = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    datasets: [
      {
        label: 'Leads',
        data: [120, 150, 180, 170, 200, 220],
        backgroundColor: '#36C5F0',
        borderRadius: 6
      },
      {
        label: 'Vendas',
        data: [30, 45, 55, 50, 70, 85],
        backgroundColor: '#2EB67D',
        borderRadius: 6
      }
    ]
  };

  const doughnutData = {
    labels: ['WhatsApp', 'Instagram', 'Facebook', 'Telegram'],
    datasets: [
      {
        data: [60, 20, 12, 8],
        backgroundColor: ['#25D366', '#E4405F', '#1877F2', '#26A5E4'],
        borderWidth: 0
      }
    ]
  };

  const stats = [
    { label: 'Total de Conversas', value: '1.247', icon: '💬', change: '+12%', color: '#36C5F0' },
    { label: 'Leads Qualificados', value: '348', icon: '🎯', change: '+8%', color: '#2EB67D' },
    { label: 'Taxa de Conversão', value: '24.6%', icon: '📊', change: '+3.2%', color: '#ECB22E' },
    { label: 'Mensagens Hoje', value: '234', icon: '✉️', change: '+18%', color: '#E01E5A' }
  ];

  if (loading) {
    return (
      <Layout>
        <div style={{ padding: '32px 0' }}>
          <div style={{ marginBottom: '32px' }}>
            <div style={{ height: '32px', width: '200px', background: 'var(--skeleton-bg, #E8E8E8)', borderRadius: '4px', marginBottom: '8px' }}></div>
            <div style={{ height: '20px', width: '300px', background: 'var(--skeleton-bg, #E8E8E8)', borderRadius: '4px' }}></div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '32px' }}>
            {[1, 2, 3, 4].map((i) => <SkeletonCard key={i} />)}
          </div>
          <SkeletonTable />
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div style={{ padding: '32px 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
          <div>
            <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: 'var(--text-primary, #1D1C1D)' }}>Dashboard</h1>
            <p style={{ color: 'var(--text-secondary, #616061)' }}>Bem-vindo de volta, {user?.name || 'Usuário'}!</p>
          </div>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <button
              onClick={() => {
                setDarkMode(!darkMode);
                document.documentElement.setAttribute('data-theme', darkMode ? 'light' : 'dark');
              }}
              style={{
                padding: '10px 20px',
                borderRadius: '8px',
                border: '1px solid var(--border-color, #E8E8E8)',
                background: 'var(--card-bg, white)',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
            >
              {darkMode ? '☀️ Light' : '🌙 Dark'}
            </button>
            <Link href='/conversas' style={{
              background: '#36C5F0',
              color: 'white',
              padding: '10px 24px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 'bold',
              transition: 'all 0.3s'
            }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#1D9FD1'; e.currentTarget.style.transform = 'scale(1.02)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#36C5F0'; e.currentTarget.style.transform = 'scale(1)'; }}
            >
              + Nova Conversa
            </Link>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '32px' }}>
          {stats.map((stat, index) => (
            <div key={index} className="slack-card" style={{ animationDelay: (index * 0.1) + 's' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                <div>
                  <p style={{ fontSize: '14px', color: 'var(--text-secondary, #616061)' }}>{stat.label}</p>
                  <p style={{ fontSize: '28px', fontWeight: 'bold', color: 'var(--text-primary, #1D1C1D)', marginTop: '4px' }}>{stat.value}</p>
                </div>
                <span style={{ fontSize: '32px' }}>{stat.icon}</span>
              </div>
              <p style={{ fontSize: '14px', color: stat.color, marginTop: '8px', fontWeight: '600' }}>{stat.change}</p>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px', marginBottom: '32px' }}>
          <div className="slack-card">
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: 'var(--text-primary, #1D1C1D)', marginBottom: '16px' }}>📈 Conversas x Vendas</h3>
            <LineChart data={lineData} />
          </div>
          <div className="slack-card">
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: 'var(--text-primary, #1D1C1D)', marginBottom: '16px' }}>🎯 Distribuição</h3>
            <DoughnutChart data={doughnutData} />
          </div>
        </div>

        <div className="slack-card" style={{ marginBottom: '32px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: 'var(--text-primary, #1D1C1D)', marginBottom: '16px' }}>📊 Leads x Vendas (Mensal)</h3>
          <BarChart data={barData} />
        </div>
      </div>
    </Layout>
  );
}
