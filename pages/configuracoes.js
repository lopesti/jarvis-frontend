import Layout from '../components/Layout';

export default function Configuracoes() {
  return (
    <Layout>
      <div style={{ padding: '24px 0', background: '#f8f9fe', minHeight: '100vh' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px' }}>
          <div style={{ marginBottom: '24px' }}>
            <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#0A192F' }}>Configurações</h1>
            <p style={{ color: '#4A5568' }}>Gerencie as configurações do seu sistema.</p>
          </div>

          <div style={{ background: 'white', padding: '24px', borderRadius: '16px', border: '1px solid #e5e7eb' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#0A192F', marginBottom: '16px' }}>Configurações Gerais</h3>

            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', fontWeight: 'bold', color: '#0A192F', marginBottom: '4px' }}>Nome do Bot</label>
              <input type='text' defaultValue='JarvisPronto' style={{ width: '100%', padding: '10px 12px', border: '1px solid #e5e7eb', borderRadius: '8px' }} />
            </div>

            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', fontWeight: 'bold', color: '#0A192F', marginBottom: '4px' }}>Mensagem de Boas-Vindas</label>
              <textarea rows='3' defaultValue='Olá! Como posso ajudar você hoje?' style={{ width: '100%', padding: '10px 12px', border: '1px solid #e5e7eb', borderRadius: '8px' }} />
            </div>

            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', fontWeight: 'bold', color: '#0A192F', marginBottom: '4px' }}>Horário de Funcionamento</label>
              <input type='text' defaultValue='08:00 - 18:00' style={{ width: '100%', padding: '10px 12px', border: '1px solid #e5e7eb', borderRadius: '8px' }} />
            </div>

            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', fontWeight: 'bold', color: '#0A192F', marginBottom: '4px' }}>Idioma</label>
              <select style={{ width: '100%', padding: '10px 12px', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
                <option value='pt-BR'>Português (Brasil)</option>
                <option value='en-US'>Inglês (EUA)</option>
                <option value='es'>Espanhol</option>
              </select>
            </div>

            <button style={{ background: '#0077B6', color: 'white', padding: '10px 32px', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', transition: 'all 0.3s' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#005f8a'; e.currentTarget.style.transform = 'scale(1.05)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#0077B6'; e.currentTarget.style.transform = 'scale(1)'; }}
            >
              Salvar Configurações
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}