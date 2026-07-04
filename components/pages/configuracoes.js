import Layout from '../components/Layout';
import { useState } from 'react';

export default function Configuracoes() {
  const [settings, setSettings] = useState({
    botName: 'JarvisPronto',
    welcomeMessage: 'Olá! Como posso ajudar você hoje?',
    autoResponse: true,
    workingHours: '08:00 - 18:00',
    language: 'pt-BR',
    timezone: 'America/Sao_Paulo'
  });

  const handleChange = (key, value) => {
    setSettings({ ...settings, [key]: value });
  };

  return (
    <Layout>
      <div style={{ padding: '24px 0', background: '#f8f9fe', minHeight: '100vh' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px' }}>
          <div style={{ marginBottom: '24px' }}>
            <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#0A192F' }}>Configurações</h1>
            <p style={{ color: '#4A5568' }}>Gerencie as configurações do seu sistema.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>
            <div style={{ background: 'white', padding: '24px', borderRadius: '16px', border: '1px solid #e5e7eb' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#0A192F', marginBottom: '16px' }}>Configurações Gerais</h3>
              
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontWeight: 'bold', color: '#0A192F', marginBottom: '4px' }}>Nome do Bot</label>
                <input
                  type='text'
                  value={settings.botName}
                  onChange={(e) => handleChange('botName', e.target.value)}
                  style={{ width: '100%', padding: '10px 12px', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                />
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontWeight: 'bold', color: '#0A192F', marginBottom: '4px' }}>Mensagem de Boas-Vindas</label>
                <textarea
                  rows='3'
                  value={settings.welcomeMessage}
                  onChange={(e) => handleChange('welcomeMessage', e.target.value)}
                  style={{ width: '100%', padding: '10px 12px', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                />
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontWeight: 'bold', color: '#0A192F', marginBottom: '4px' }}>Horário de Funcionamento</label>
                <input
                  type='text'
                  value={settings.workingHours}
                  onChange={(e) => handleChange('workingHours', e.target.value)}
                  style={{ width: '100%', padding: '10px 12px', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                />
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontWeight: 'bold', color: '#0A192F', marginBottom: '4px' }}>Idioma</label>
                <select
                  value={settings.language}
                  onChange={(e) => handleChange('language', e.target.value)}
                  style={{ width: '100%', padding: '10px 12px', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                >
                  <option value='pt-BR'>Português (Brasil)</option>
                  <option value='en-US'>Inglês (EUA)</option>
                  <option value='es'>Espanhol</option>
                </select>
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontWeight: 'bold', color: '#0A192F', marginBottom: '4px' }}>Fuso Horário</label>
                <select
                  value={settings.timezone}
                  onChange={(e) => handleChange('timezone', e.target.value)}
                  style={{ width: '100%', padding: '10px 12px', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                >
                  <option value='America/Sao_Paulo'>Brasil (GMT-3)</option>
                  <option value='America/New_York'>EUA (GMT-5)</option>
                  <option value='Europe/London'>Reino Unido (GMT+0)</option>
                </select>
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                  <input
                    type='checkbox'
                    checked={settings.autoResponse}
                    onChange={(e) => handleChange('autoResponse', e.target.checked)}
                  />
                  Ativar Respostas Automáticas
                </label>
              </div>

              <button style={{ background: '#0077B6', color: 'white', padding: '10px 32px', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', transition: 'all 0.3s' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#005f8a'; e.currentTarget.style.transform = 'scale(1.05)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = '#0077B6'; e.currentTarget.style.transform = 'scale(1)'; }}
              >
                Salvar Configurações
              </button>
            </div>

            <div style={{ background: 'white', padding: '24px', borderRadius: '16px', border: '1px solid #e5e7eb', alignSelf: 'start' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#0A192F', marginBottom: '16px' }}>Ações Rápidas</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <button style={{ padding: '12px', background: '#f8f9fe', border: '1px solid #e5e7eb', borderRadius: '8px', cursor: 'pointer', textAlign: 'left', transition: 'all 0.3s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = '#e0fbfc'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = '#f8f9fe'; }}
                >
                  🔄 Sincronizar Agora
                </button>
                <button style={{ padding: '12px', background: '#f8f9fe', border: '1px solid #e5e7eb', borderRadius: '8px', cursor: 'pointer', textAlign: 'left', transition: 'all 0.3s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = '#e0fbfc'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = '#f8f9fe'; }}
                >
                  📤 Exportar Dados
                </button>
                <button style={{ padding: '12px', background: '#f8f9fe', border: '1px solid #e5e7eb', borderRadius: '8px', cursor: 'pointer', textAlign: 'left', transition: 'all 0.3s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = '#e0fbfc'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = '#f8f9fe'; }}
                >
                  📥 Importar Backup
                </button>
                <button style={{ padding: '12px', background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '8px', cursor: 'pointer', textAlign: 'left', color: '#dc2626', transition: 'all 0.3s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = '#fee2e2'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = '#fef2f2'; }}
                >
                  🗑️ Limpar Cache
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
