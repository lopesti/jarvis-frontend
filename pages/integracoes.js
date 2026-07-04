import Layout from '../components/Layout';
import { useState } from 'react';

export default function Integracoes() {
  const [integrations, setIntegrations] = useState([
    { id: 1, name: 'WhatsApp', icon: '💬', status: 'Conectado', color: '#25D366', connected: true },
    { id: 2, name: 'Instagram', icon: '📸', status: 'Desconectado', color: '#E4405F', connected: false },
    { id: 3, name: 'Facebook', icon: '👍', status: 'Desconectado', color: '#1877F2', connected: false },
    { id: 4, name: 'Telegram', icon: '✈️', status: 'Desconectado', color: '#26A5E4', connected: false },
    { id: 5, name: 'API Webhook', icon: '🔗', status: 'Conectado', color: '#36C5F0', connected: true },
  ]);

  const toggleIntegration = (id) => {
    setIntegrations(integrations.map(integration =>
      integration.id === id
        ? { ...integration, connected: !integration.connected, status: !integration.connected ? 'Conectado' : 'Desconectado' }
        : integration
    ));
  };

  return (
    <Layout>
      <div style={{ padding: '32px 0', background: '#F8F8F8', minHeight: '100vh' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ marginBottom: '32px' }}>
            <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#1D1C1D' }}>
              🔌 Integrações
            </h1>
            <p style={{ color: '#616061', marginTop: '4px' }}>
              Conecte suas ferramentas favoritas para automatizar seu fluxo de trabalho.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {integrations.map((integration) => (
              <div key={integration.id} className="slack-card animate-fade-up">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: integration.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '24px',
                      color: 'white'
                    }}>
                      {integration.icon}
                    </div>
                    <div>
                      <h3 style={{ fontWeight: 'bold', color: '#1D1C1D' }}>{integration.name}</h3>
                      <span style={{
                        fontSize: '12px',
                        padding: '2px 10px',
                        borderRadius: '9999px',
                        background: integration.connected ? '#2EB67D' : '#E8E8E8',
                        color: integration.connected ? 'white' : '#616061'
                      }}>
                        {integration.status}
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => toggleIntegration(integration.id)}
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: 'none',
                    borderRadius: '8px',
                    background: integration.connected ? '#E8E8E8' : '#36C5F0',
                    color: integration.connected ? '#616061' : 'white',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.02)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  {integration.connected ? 'Desconectar' : 'Conectar'}
                </button>
              </div>
            ))}
          </div>

          <div className="slack-card" style={{ marginTop: '32px', background: '#4A154B', color: 'white', border: 'none' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold' }}>🚀 API Pronta para Uso</h3>
                <p style={{ opacity: 0.8, marginTop: '4px' }}>Documentação completa para desenvolvedores</p>
              </div>
              <button className="btn-slack-primary" style={{ background: 'white', color: '#4A154B' }}>
                Ver Documentação →
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
