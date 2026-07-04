import Link from 'next/link';

export default function CtaSection() {
  return (
    <section style={{ padding: '60px 0', background: 'linear-gradient(135deg, #0077B6, #003d66)', textAlign: 'center' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: 'white' }}>
          Pronto para vender mais com <span style={{ color: '#e0fbfc' }}>menos esforço</span>?
        </h2>
        <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.9)', marginTop: '16px', maxWidth: '640px', margin: '16px auto' }}>
          Junte-se a milhares de negócios que já transformaram o atendimento com o JarvisPronto.
        </p>
        <Link href='/register' style={{ 
          display: 'inline-block', 
          marginTop: '32px', 
          background: 'white', 
          color: '#0077B6', 
          padding: '16px 48px', 
          borderRadius: '9999px', 
          textDecoration: 'none', 
          fontWeight: 'bold', 
          fontSize: '18px',
          transition: 'all 0.3s'
        }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.2)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none'; }}
        >
          🚀 Começar Minha Avaliação Grátis
        </Link>
        <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', marginTop: '16px' }}>Teste grátis por 14 dias. Sem compromisso.</p>
      </div>
    </section>
  );
}
