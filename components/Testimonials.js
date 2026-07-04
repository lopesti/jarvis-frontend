export default function Testimonials() {
  const testimonials = [
    { name: 'Carlos Andrade', role: 'E-commerce, 2k+ clientes', text: 'O JarvisPronto aumentou nossas vendas em 40% no primeiro mês. A automação é simples e poderosa.', initials: 'CA' },
    { name: 'Fernanda Maia', role: 'Imobiliária, 500+ leads/mês', text: 'Nunca perdi uma venda por falta de resposta. O bot entende o cliente e qualifica leads perfeitamente.', initials: 'FM' },
    { name: 'Rafael Souza', role: 'Consultoria, 300+ clientes', text: 'Recomendo para qualquer negócio que queira escalar o atendimento sem perder a personalidade.', initials: 'RS' }
  ];

  return (
    <section style={{ padding: '60px 0', background: '#f8f9fe' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px' }}>
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 48px' }}>
          <div style={{ display: 'inline-block', padding: '4px 16px', background: '#e0fbfc', color: '#0077B6', borderRadius: '9999px', fontSize: '14px', fontWeight: '600' }}>
            💬 Depoimentos
          </div>
          <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#0A192F', marginTop: '16px' }}>
            Amado por quem <span style={{ color: '#0077B6' }}>vende</span>
          </h2>
          <p style={{ fontSize: '18px', color: '#4A5568', marginTop: '8px' }}>
            O que nossos clientes dizem sobre transformar conversas em conversões
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {testimonials.map((testimonial, index) => (
            <div key={index} style={{ background: 'white', padding: '24px', borderRadius: '16px', border: '1px solid #e5e7eb', transition: 'all 0.3s' }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.1)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={{ color: '#f6b83d', fontSize: '20px', marginBottom: '12px' }}>★★★★★</div>
              <p style={{ color: '#4A5568', fontStyle: 'italic', marginBottom: '16px' }}>"{testimonial.text}"</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#e0fbfc', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0077B6', fontWeight: 'bold' }}>
                  {testimonial.initials}
                </div>
                <div>
                  <div style={{ fontWeight: 'bold', color: '#0A192F' }}>{testimonial.name}</div>
                  <div style={{ fontSize: '12px', color: '#4A5568' }}>{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
