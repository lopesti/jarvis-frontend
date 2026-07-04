import Link from 'next/link';

export default function Hero() {
  return (
    <section style={{ padding: '60px 0', background: 'white' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#e0fbfc', color: '#0077B6', padding: '4px 16px', borderRadius: '9999px', fontSize: '14px', fontWeight: '600' }}>
              <span style={{ display: 'flex', width: '8px', height: '8px', position: 'relative' }}>
                <span style={{ position: 'absolute', display: 'inline-flex', width: '100%', height: '100%', borderRadius: '50%', background: '#0077B6', opacity: 0.75, animation: 'pulse 1.5s infinite' }}></span>
                <span style={{ position: 'relative', display: 'inline-flex', width: '8px', height: '8px', borderRadius: '50%', background: '#0077B6' }}></span>
              </span>
              Online agora • 24/7
            </div>

            <h1 style={{ fontSize: '48px', fontWeight: 'bold', color: '#0A192F', marginTop: '16px', lineHeight: 1.1 }}>
              Automação que <span style={{ color: '#0077B6' }}>vende</span> no WhatsApp
            </h1>

            <p style={{ fontSize: '18px', color: '#4A5568', marginTop: '16px', maxWidth: '480px' }}>
              Transforme cada conversa em uma oportunidade de venda com o JarvisPronto.
              Respostas automáticas, funis inteligentes e gestão de leads 24/7.
            </p>

            <div style={{ display: 'flex', gap: '16px', marginTop: '32px', flexWrap: 'wrap' }}>
              <Link href='/register' style={{ 
                background: '#0077B6', 
                color: 'white', 
                padding: '12px 32px', 
                borderRadius: '9999px', 
                textDecoration: 'none', 
                fontWeight: 'bold',
                transition: 'all 0.3s'
              }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#005f8a'; e.currentTarget.style.transform = 'scale(1.05)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = '#0077B6'; e.currentTarget.style.transform = 'scale(1)'; }}
              >
                Começar Agora →
              </Link>
              <a href='#features' style={{ 
                background: 'transparent', 
                color: '#0A192F', 
                padding: '12px 32px', 
                borderRadius: '9999px', 
                textDecoration: 'none', 
                fontWeight: 'bold', 
                border: '2px solid #e5e7eb',
                transition: 'all 0.3s'
              }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#0077B6'; e.currentTarget.style.color = '#0077B6'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.color = '#0A192F'; }}
              >
                Ver Recursos
              </a>
            </div>

            <div style={{ display: 'flex', gap: '40px', marginTop: '48px', paddingTop: '32px', borderTop: '1px solid #e5e7eb' }}>
              <div>
                <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#0077B6' }}>+1.200</div>
                <div style={{ fontSize: '14px', color: '#4A5568' }}>Conversas ativas</div>
              </div>
              <div>
                <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#0077B6' }}>98%</div>
                <div style={{ fontSize: '14px', color: '#4A5568' }}>Taxa de resposta</div>
              </div>
              <div>
                <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#0077B6' }}>24/7</div>
                <div style={{ fontSize: '14px', color: '#4A5568' }}>Atendimento contínuo</div>
              </div>
            </div>
          </div>

          <div style={{ background: '#f8f9fe', padding: '40px', borderRadius: '16px', textAlign: 'center', border: '1px solid rgba(0,119,182,0.1)' }}>
            <div style={{ fontSize: '72px', marginBottom: '16px' }}>💬</div>
            <div style={{ background: 'white', padding: '12px 24px', borderRadius: '9999px', display: 'inline-block', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
              ⚡ <span style={{ color: '#0077B6' }}>JarvisPronto</span> • Online agora
            </div>
            <p style={{ marginTop: '24px', color: '#4A5568' }}>
              Interface intuitiva para gerenciar<br />
              todas as conversas em um só lugar
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
