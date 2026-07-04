import Layout from '../components/Layout';
import { useState } from 'react';

export default function Conversas() {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('Todos');
  const [dateFilter, setDateFilter] = useState('');

  const conversations = [
    { id: 1, name: 'Carlos Silva', phone: '(11) 98765-4321', lastMessage: 'Quero saber mais sobre os planos', date: '10/06/2026', time: '14:30', status: 'Ativo' },
    { id: 2, name: 'Maria Santos', phone: '(11) 91234-5678', lastMessage: 'Como funciona a automação?', date: '09/06/2026', time: '09:15', status: 'Finalizado' },
    { id: 3, name: 'João Oliveira', phone: '(11) 99876-5432', lastMessage: 'Gostei muito do atendimento!', date: '09/06/2026', time: '16:45', status: 'Ativo' },
    { id: 4, name: 'Ana Pereira', phone: '(11) 98765-1234', lastMessage: 'Pode me enviar o contrato?', date: '08/06/2026', time: '11:00', status: 'Pendente' },
    { id: 5, name: 'Roberto Alves', phone: '(11) 97654-3210', lastMessage: 'Qual o valor do plano Pro?', date: '08/06/2026', time: '08:30', status: 'Ativo' }
  ];

  const filteredConversations = conversations.filter(conv => {
    const matchSearch = conv.name.toLowerCase().includes(search.toLowerCase()) ||
                        conv.phone.includes(search) ||
                        conv.lastMessage.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === 'Todos' || conv.status === statusFilter;
    const matchDate = !dateFilter || conv.date === dateFilter;
    return matchSearch && matchStatus && matchDate;
  });

  const statusOptions = ['Todos', 'Ativo', 'Finalizado', 'Pendente'];

  return (
    <Layout>
      <div style={{ padding: '32px 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <div>
            <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: 'var(--text-primary, #1D1C1D)' }}>Conversas</h1>
            <p style={{ color: 'var(--text-secondary, #616061)' }}>Gerencie todas as conversas do sistema.</p>
          </div>
          <button style={{ background: '#36C5F0', color: 'white', padding: '10px 24px', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
            + Nova Conversa
          </button>
        </div>

        <div style={{ display: 'flex', gap: '16px', marginBottom: '24px', flexWrap: 'wrap' }}>
          <input
            type='text'
            placeholder='🔍 Buscar conversas...'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              flex: 1,
              padding: '12px 16px',
              border: '1px solid var(--border-color, #E8E8E8)',
              borderRadius: '8px',
              background: 'var(--card-bg, white)',
              color: 'var(--text-primary, #1D1C1D)',
              minWidth: '200px'
            }}
          />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            style={{
              padding: '12px 16px',
              border: '1px solid var(--border-color, #E8E8E8)',
              borderRadius: '8px',
              background: 'var(--card-bg, white)',
              color: 'var(--text-primary, #1D1C1D)'
            }}
          >
            {statusOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
          </select>
          <input
            type='date'
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
            style={{
              padding: '12px 16px',
              border: '1px solid var(--border-color, #E8E8E8)',
              borderRadius: '8px',
              background: 'var(--card-bg, white)',
              color: 'var(--text-primary, #1D1C1D)'
            }}
          />
          <button
            onClick={() => { setSearch(''); setStatusFilter('Todos'); setDateFilter(''); }}
            style={{
              padding: '12px 24px',
              border: '1px solid var(--border-color, #E8E8E8)',
              borderRadius: '8px',
              background: 'var(--card-bg, white)',
              cursor: 'pointer',
              color: 'var(--text-secondary, #616061)'
            }}
          >
            Limpar
          </button>
        </div>

        <div className="slack-card" style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--border-color, #E8E8E8)' }}>
                <th style={{ padding: '12px', textAlign: 'left', color: 'var(--text-secondary, #616061)' }}>Nome</th>
                <th style={{ padding: '12px', textAlign: 'left', color: 'var(--text-secondary, #616061)' }}>Telefone</th>
                <th style={{ padding: '12px', textAlign: 'left', color: 'var(--text-secondary, #616061)' }}>Última Mensagem</th>
                <th style={{ padding: '12px', textAlign: 'left', color: 'var(--text-secondary, #616061)' }}>Data</th>
                <th style={{ padding: '12px', textAlign: 'left', color: 'var(--text-secondary, #616061)' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredConversations.map((conv) => (
                <tr key={conv.id} style={{ borderBottom: '1px solid var(--border-color, #E8E8E8)' }}>
                  <td style={{ padding: '12px', fontWeight: 'bold', color: 'var(--text-primary, #1D1C1D)' }}>{conv.name}</td>
                  <td style={{ padding: '12px', color: 'var(--text-secondary, #616061)' }}>{conv.phone}</td>
                  <td style={{ padding: '12px', color: 'var(--text-secondary, #616061)' }}>{conv.lastMessage}</td>
                  <td style={{ padding: '12px', color: 'var(--text-secondary, #616061)' }}>{conv.date} {conv.time}</td>
                  <td style={{ padding: '12px' }}>
                    <span style={{
                      padding: '4px 12px',
                      borderRadius: '9999px',
                      fontSize: '12px',
                      fontWeight: 'bold',
                      background: conv.status === 'Ativo' ? '#d1fae5' : conv.status === 'Finalizado' ? '#fef3c7' : '#fce4ec',
                      color: conv.status === 'Ativo' ? '#065f46' : conv.status === 'Finalizado' ? '#92400e' : '#b91c1c'
                    }}>
                      {conv.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredConversations.length === 0 && (
            <div style={{ textAlign: 'center', padding: '40px', color: 'var(--text-secondary, #616061)' }}>
              Nenhuma conversa encontrada
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
