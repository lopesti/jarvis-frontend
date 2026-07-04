export default function Features() {
  const features = [
    { icon: '⚡', title: 'Respostas Automáticas', description: 'Responda perguntas frequentes, qualifique leads e agende reuniões sem precisar digitar uma linha.' },
    { icon: '🎯', title: 'Funis de Venda', description: 'Crie fluxos personalizados que guiam o cliente desde o primeiro contato até a compra.' },
    { icon: '📊', title: 'Gestão de Leads', description: 'Identifique os clientes com maior potencial, acompanhe o histórico e aumente sua taxa de conversão.' },
    { icon: '🧠', title: 'IA Contextual', description: 'Nossa IA entende o contexto da conversa e oferece respostas personalizadas, como um atendente humano.' },
    { icon: '📈', title: 'Relatórios em Tempo Real', description: 'Monitore métricas de desempenho, taxa de resposta e conversões em um dashboard intuitivo.' },
    { icon: '🔐', title: 'Segurança e Conformidade', description: 'Seus dados estão protegidos com criptografia e práticas alinhadas à LGPD.' }
  ];

  return (
    <section id='features' style={{ padding: '60px 0', background: '#f8f9fe' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px' }}>
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 48px' }}>
          <div style={{ display: 'inline-block', padding: '4px 16px', background: '#e0fbfc', color: '#0077B6', borderRadius: '9999px', fontSize: '14px', fontWeight: '600' }}>
            🚀 Recursos Poderosos
          </div>
          <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#0A192F', marginTop: '16px' }}>
            Transforme conversa em <span style={{ color: '#0077B6' }}>conversão</span>
          </h2>
          <p style={{ fontSize: '18px', color: '#4A5568', marginTop: '8px' }}>
            Automações inteligentes para engajar, qualificar e vender pelo WhatsApp
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {features.map((feature, index) => (
            <div key={index} style={{ background: 'white', padding: '32px', borderRadius: '16px', border: '1px solid #e5e7eb', transition: 'all 0.3s', cursor: 'pointer' }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.1)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={{ fontSize: '40px', marginBottom: '16px' }}>{feature.icon}</div>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#0A192F', marginBottom: '8px' }}>{feature.title}</h3>
              <p style={{ color: '#4A5568' }}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
