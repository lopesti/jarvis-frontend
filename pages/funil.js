import Layout from '../components/Layout';

export default function Funil() {
  const stages = [
    { name: 'Visitantes', value: 10000, color: '#36C5F0', icon: '👀' },
    { name: 'Leads', value: 2500, color: '#ECB22E', icon: '🎯' },
    { name: 'Qualificados', value: 800, color: '#2EB67D', icon: '⭐' },
    { name: 'Propostas', value: 300, color: '#4A154B', icon: '📄' },
    { name: 'Vendas', value: 120, color: '#E01E5A', icon: '💰' },
  ];

  const maxValue = Math.max(...stages.map(s => s.value));

  return (
    <Layout>
      <div style={{ padding: '32px 0', background: '#F8F8F8', minHeight: '100vh' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ marginBottom: '32px' }}>
            <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#1D1C1D' }}>
              📊 Funil de Vendas
            </h1>
            <p style={{ color: '#616061', marginTop: '4px' }}>
              Acompanhe a jornada do cliente desde o primeiro contato até a conversão.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px', marginBottom: '32px' }}>
            <div className="slack-card">
              <p style={{ fontSize: '14px', color: '#616061' }}>Total Leads</p>
              <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#1D1C1D' }}>10.000</p>
            </div>
            <div className="slack-card">
              <p style={{ fontSize: '14px', color: '#616061' }}>Taxa de Conversão</p>
              <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#2EB67D' }}>1.2%</p>
            </div>
            <div className="slack-card">
              <p style={{ fontSize: '14px', color: '#616061' }}>Ticket Médio</p>
              <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#36C5F0' }}>R$ 249,90</p>
            </div>
          </div>

          <div className="slack-card" style={{ padding: '32px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#1D1C1D', marginBottom: '24px' }}>Jornada do Cliente</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {stages.map((stage, index) => {
                const percentage = (stage.value / maxValue) * 100;
                return (
                  <div key={index} className="animate-fade-up" style={{ animationDelay: (index * 0.1) + 's' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontSize: '20px' }}>{stage.icon}</span>
                        <span style={{ fontWeight: '600', color: '#1D1C1D' }}>{stage.name}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <span style={{ fontSize: '14px', color: '#616061' }}>{stage.value}</span>
                        <span style={{ fontSize: '14px', fontWeight: 'bold', color: stage.color }}>
                          {((stage.value / stages[0].value) * 100).toFixed(1)}%
                        </span>
                      </div>
                    </div>
                    <div style={{
                      width: '100%',
                      height: '8px',
                      background: '#E8E8E8',
                      borderRadius: '4px',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        width: percentage + '%',
                        height: '100%',
                        background: stage.color,
                        borderRadius: '4px',
                        transition: 'width 0.6s ease-out'
                      }}></div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '16px', marginTop: '32px', paddingTop: '24px', borderTop: '1px solid #E8E8E8' }}>
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontSize: '12px', color: '#616061' }}>Taxa de Conversão</p>
                <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#2EB67D' }}>1.2%</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontSize: '12px', color: '#616061' }}>Tempo Médio</p>
                <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#36C5F0' }}>7 dias</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontSize: '12px', color: '#616061' }}>Leads Perdidos</p>
                <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#E01E5A' }}>8.500</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
