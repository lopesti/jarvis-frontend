import Link from 'next/link';

export default function Pricing() {
  const plans = [
    { name: 'Starter', price: 'R$ 49', period: '/mês', features: ['Até 500 conversas/mês', 'Automações básicas', 'Suporte por e-mail', '1 usuário'], popular: false },
    { name: 'Professional', price: 'R$ 99', period: '/mês', features: ['Conversas ilimitadas', 'Funis de venda avançados', 'Suporte prioritário', '5 usuários', 'IA contextual'], popular: true },
    { name: 'Enterprise', price: 'R$ 199', period: '/mês', features: ['Conversas ilimitadas', 'Automações personalizadas', 'Suporte 24/7', 'Usuários ilimitados', 'API dedicada', 'Treinamento incluso'], popular: false }
  ];

  return (
    <section id='pricing' style={{ padding: '60px 0', background: 'white' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px' }}>
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 48px' }}>
          <div style={{ display: 'inline-block', padding: '4px 16px', background: '#e0fbfc', color: '#0077B6', borderRadius: '9999px', fontSize: '14px', fontWeight: '600' }}>
            💰 Planos e Preços
          </div>
          <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#0A192F', marginTop: '16px' }}>
            Escolha o plano <span style={{ color: '#0077B6' }}>ideal</span>
          </h2>
          <p style={{ fontSize: '18px', color: '#4A5568', marginTop: '8px' }}>
            Comece gratuitamente e evolua conforme seu negócio cresce
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', maxWidth: '1024px', margin: '0 auto' }}>
          {plans.map((plan, index) => (
            <div key={index} style={{ 
              background: plan.popular ? 'linear-gradient(135deg, #0077B6, #00A8E8)' : 'white', 
              padding: '32px', 
              borderRadius: '16px', 
              border: plan.popular ? '2px solid #0077B6' : '1px solid #e5e7eb',
              color: plan.popular ? 'white' : '#0A192F',
              position: 'relative',
              transform: plan.popular ? 'scale(1.05)' : 'scale(1)',
              transition: 'all 0.3s'
            }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.15)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = plan.popular ? 'scale(1.05)' : 'scale(1)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              {plan.popular && (
                <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: 'white', color: '#0077B6', padding: '4px 20px', borderRadius: '9999px', fontSize: '12px', fontWeight: 'bold' }}>
                  ⭐ MAIS POPULAR
                </div>
              )}
              <h3 style={{ fontSize: '20px', fontWeight: 'bold' }}>{plan.name}</h3>
              <div style={{ marginTop: '16px' }}>
                <span style={{ fontSize: '32px', fontWeight: 'bold' }}>{plan.price}</span>
                <span style={{ opacity: 0.7 }}>{plan.period}</span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: '24px' }}>
                {plan.features.map((feature, idx) => (
                  <li key={idx} style={{ padding: '8px 0', borderBottom: '1px solid ' + (plan.popular ? 'rgba(255,255,255,0.1)' : '#f3f4f6') }}>
                    <span style={{ color: plan.popular ? 'white' : '#0077B6' }}>✓</span> {feature}
                  </li>
                ))}
              </ul>
              <Link href='/register' style={{ 
                display: 'block', 
                marginTop: '32px', 
                textAlign: 'center', 
                background: plan.popular ? 'white' : '#0077B6', 
                color: plan.popular ? '#0077B6' : 'white', 
                padding: '12px', 
                borderRadius: '9999px', 
                textDecoration: 'none', 
                fontWeight: 'bold',
                transition: 'all 0.3s'
              }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
              >
                {plan.popular ? 'Assinar Agora' : 'Começar'}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
