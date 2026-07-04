import Layout from '../components/Layout';

export default function Analises() {
  const metrics = [
    { label: 'Total de Conversas', value: '1.247', change: '+12%', icon: '💬' },
    { label: 'Leads Qualificados', value: '348', change: '+8%', icon: '🎯' },
    { label: 'Taxa de Conversão', value: '24.6%', change: '+3.2%', icon: '📊' },
    { label: 'Mensagens Hoje', value: '234', change: '+18%', icon: '✉️' },
    { label: 'Vendas', value: '289', change: '+15%', icon: '💰' },
    { label: 'Faturamento', value: 'R$ 12.8k', change: '+22%', icon: '📈' }
  ];

  return (
    <Layout>
      <div style={{ padding: '24px 0', background: '#f8f9fe', minHeight: '100vh' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px' }}>
          <div style={{ marginBottom: '24px' }}>
            <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#0A192F' }}>Análises</h1>
            <p style={{ color: '#4A5568' }}>Acompanhe as métricas e indicadores do seu negócio.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '24px' }}>
            {metrics.map((metric, index) => (
              <div key={index} style={{ background: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #e5e7eb', transition: 'all 0.3s' }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.1)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                  <div>
                    <p style={{ fontSize: '14px', color: '#4A5568' }}>{metric.label}</p>
                    <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#0A192F', marginTop: '4px' }}>{metric.value}</p>
                  </div>
                  <span style={{ fontSize: '32px' }}>{metric.icon}</span>
                </div>
                <p style={{ fontSize: '14px', color: '#10B981', marginTop: '8px' }}>{metric.change}</p>
              </div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>
            <div style={{ background: 'white', padding: '24px', borderRadius: '16px', border: '1px solid #e5e7eb' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#0A192F', marginBottom: '16px' }}>📈 Desempenho Semanal</h3>
              <div style={{ padding: '40px', textAlign: 'center', background: '#f8f9fe', borderRadius: '8px' }}>
                <span style={{ fontSize: '48px' }}>📊</span>
                <p style={{ color: '#4A5568', marginTop: '8px' }}>Gráficos em breve</p>
              </div>
            </div>

            <div style={{ background: 'white', padding: '24px', borderRadius: '16px', border: '1px solid #e5e7eb' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#0A192F', marginBottom: '16px' }}>📊 Resumo</h3>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #f3f4f6' }}>
                  <span style={{ color: '#4A5568' }}>Melhor Dia</span>
                  <span style={{ fontWeight: 'bold', color: '#0A192F' }}>Quarta-feira</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #f3f4f6' }}>
                  <span style={{ color: '#4A5568' }}>Média Diária</span>
                  <span style={{ fontWeight: 'bold', color: '#0A192F' }}>187 mensagens</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #f3f4f6' }}>
                  <span style={{ color: '#4A5568' }}>Meta Mensal</span>
                  <span style={{ fontWeight: 'bold', color: '#0A192F' }}>78%</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0' }}>
                  <span style={{ color: '#4A5568' }}>Ticket Médio</span>
                  <span style={{ fontWeight: 'bold', color: '#0A192F' }}>R$ 44,50</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
