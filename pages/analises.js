import Layout from '../components/Layout';

export default function Analises() {
  return (
    <Layout>
      <div style={{ padding: '24px 0', background: '#f8f9fe', minHeight: '100vh' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px' }}>
          <div style={{ marginBottom: '24px' }}>
            <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#0A192F' }}>Análises</h1>
            <p style={{ color: '#4A5568' }}>Acompanhe as métricas e indicadores do seu negócio.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '24px' }}>
            <div style={{ background: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #e5e7eb' }}>
              <p style={{ fontSize: '14px', color: '#4A5568' }}>Total de Conversas</p>
              <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#0A192F' }}>1.247</p>
            </div>
            <div style={{ background: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #e5e7eb' }}>
              <p style={{ fontSize: '14px', color: '#4A5568' }}>Leads Qualificados</p>
              <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#0A192F' }}>348</p>
            </div>
            <div style={{ background: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #e5e7eb' }}>
              <p style={{ fontSize: '14px', color: '#4A5568' }}>Taxa de Conversão</p>
              <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#0A192F' }}>24.6%</p>
            </div>
            <div style={{ background: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #e5e7eb' }}>
              <p style={{ fontSize: '14px', color: '#4A5568' }}>Mensagens Hoje</p>
              <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#0A192F' }}>234</p>
            </div>
          </div>

          <div style={{ background: 'white', padding: '24px', borderRadius: '16px', border: '1px solid #e5e7eb' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#0A192F', marginBottom: '16px' }}>📊 Desempenho</h3>
            <div style={{ padding: '40px', textAlign: 'center', background: '#f8f9fe', borderRadius: '8px' }}>
              <span style={{ fontSize: '48px' }}>📈</span>
              <p style={{ color: '#4A5568', marginTop: '8px' }}>Gráficos estarão disponíveis em breve</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}