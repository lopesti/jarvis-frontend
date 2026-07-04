import Layout from '../components/Layout';
import { useState, useEffect } from 'react';
import { api } from '../services/api';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/router';

export default function Produtos() {
  const { user } = useAuth();
  const router = useRouter();
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({
    nome: '',
    descricao: '',
    preco: '',
    categoria: '',
    estoque: '',
    status: 'Ativo'
  });

  useEffect(() => {
    if (!user) {
      router.push('/login');
      return;
    }
    carregarProdutos();
  }, [user]);

  const carregarProdutos = async () => {
    try {
      const response = await api.get('/api/produtos');
      setProdutos(response.data || []);
    } catch (error) {
      console.error('Erro ao carregar produtos:', error);
      setProdutos([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!form.nome || !form.preco) {
        alert('Nome e preço são obrigatórios!');
        return;
      }

      const produtoData = {
        nome: form.nome,
        descricao: form.descricao || '',
        preco: parseFloat(form.preco) || 0,
        categoria: form.categoria || '',
        estoque: parseInt(form.estoque) || 0,
        status: form.status || 'Ativo'
      };

      let response;
      if (editing) {
        response = await api.put(`/api/produtos/${editing}`, produtoData);
      } else {
        response = await api.post('/api/produtos', produtoData);
      }

      if (response && response.data) {
        alert(response.data.message || 'Produto salvo com sucesso!');
      } else {
        alert('Produto salvo com sucesso!');
      }

      setShowModal(false);
      setEditing(null);
      setForm({ nome: '', descricao: '', preco: '', categoria: '', estoque: '', status: 'Ativo' });
      carregarProdutos();
    } catch (error) {
      console.error('Erro detalhado:', error);
      const errorMsg = error.response?.data?.error || error.response?.data?.message || error.message || 'Erro ao salvar produto';
      alert('Erro ao salvar produto: ' + errorMsg);
    }
  };

  const handleEdit = (produto) => {
    setEditing(produto.id);
    setForm({
      nome: produto.nome || '',
      descricao: produto.descricao || '',
      preco: produto.preco || '',
      categoria: produto.categoria || '',
      estoque: produto.estoque || 0,
      status: produto.status || 'Ativo'
    });
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (!confirm('Tem certeza que deseja excluir este produto?')) return;
    try {
      await api.delete(`/api/produtos/${id}`);
      alert('Produto excluído com sucesso!');
      carregarProdutos();
    } catch (error) {
      console.error('Erro ao excluir:', error);
      alert('Erro ao excluir produto: ' + (error.response?.data?.error || error.message));
    }
  };

  if (loading) {
    return (
      <Layout>
        <div style={{ padding: '32px', textAlign: 'center' }}>
          <p>Carregando...</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div style={{ padding: '32px 0', background: '#F8F8F8', minHeight: '100vh' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
            <div>
              <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#1D1C1D' }}>📦 Produtos</h1>
              <p style={{ color: '#616061' }}>Gerencie seus produtos e serviços.</p>
            </div>
            <button
              onClick={() => {
                setEditing(null);
                setForm({ nome: '', descricao: '', preco: '', categoria: '', estoque: '', status: 'Ativo' });
                setShowModal(true);
              }}
              style={{
                background: '#36C5F0',
                color: 'white',
                padding: '10px 24px',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              + Novo Produto
            </button>
          </div>

          <div className="slack-card" style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #E8E8E8' }}>
                  <th style={{ padding: '12px', textAlign: 'left', color: '#616061' }}>ID</th>
                  <th style={{ padding: '12px', textAlign: 'left', color: '#616061' }}>Nome</th>
                  <th style={{ padding: '12px', textAlign: 'left', color: '#616061' }}>Preço</th>
                  <th style={{ padding: '12px', textAlign: 'left', color: '#616061' }}>Categoria</th>
                  <th style={{ padding: '12px', textAlign: 'left', color: '#616061' }}>Estoque</th>
                  <th style={{ padding: '12px', textAlign: 'left', color: '#616061' }}>Status</th>
                  <th style={{ padding: '12px', textAlign: 'center', color: '#616061' }}>Ações</th>
                </tr>
              </thead>
              <tbody>
                {produtos.length === 0 ? (
                  <tr>
                    <td colSpan="7" style={{ textAlign: 'center', padding: '40px', color: '#616061' }}>
                      Nenhum produto cadastrado
                    </td>
                  </tr>
                ) : (
                  produtos.map((produto) => (
                    <tr key={produto.id} style={{ borderBottom: '1px solid #E8E8E8' }}>
                      <td style={{ padding: '12px', color: '#616061' }}>{produto.id}</td>
                      <td style={{ padding: '12px', fontWeight: 'bold', color: '#1D1C1D' }}>{produto.nome}</td>
                      <td style={{ padding: '12px', color: '#2EB67D' }}>
                        R$ {parseFloat(produto.preco).toFixed(2)}
                      </td>
                      <td style={{ padding: '12px', color: '#616061' }}>{produto.categoria || '-'}</td>
                      <td style={{ padding: '12px', color: '#616061' }}>{produto.estoque}</td>
                      <td style={{ padding: '12px' }}>
                        <span style={{
                          padding: '4px 12px',
                          borderRadius: '9999px',
                          fontSize: '12px',
                          fontWeight: 'bold',
                          background: produto.status === 'Ativo' ? '#d1fae5' : '#fce4ec',
                          color: produto.status === 'Ativo' ? '#065f46' : '#b91c1c'
                        }}>
                          {produto.status}
                        </span>
                      </td>
                      <td style={{ padding: '12px', textAlign: 'center' }}>
                        <button
                          onClick={() => handleEdit(produto)}
                          style={{
                            background: '#36C5F0',
                            color: 'white',
                            border: 'none',
                            padding: '6px 12px',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            marginRight: '8px'
                          }}
                        >
                          ✏️ Editar
                        </button>
                        <button
                          onClick={() => handleDelete(produto.id)}
                          style={{
                            background: '#E01E5A',
                            color: 'white',
                            border: 'none',
                            padding: '6px 12px',
                            borderRadius: '4px',
                            cursor: 'pointer'
                          }}
                        >
                          🗑️ Excluir
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {showModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}>
          <div style={{
            background: 'white',
            padding: '32px',
            borderRadius: '12px',
            maxWidth: '500px',
            width: '100%',
            maxHeight: '90vh',
            overflowY: 'auto'
          }}>
            <h2 style={{ marginBottom: '24px', color: '#1D1C1D' }}>
              {editing ? '✏️ Editar Produto' : '➕ Novo Produto'}
            </h2>

            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', marginBottom: '4px', fontWeight: 'bold', color: '#1D1C1D' }}>Nome *</label>
                <input
                  type="text"
                  value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  required
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    border: '1px solid #E8E8E8',
                    borderRadius: '8px',
                    fontSize: '14px'
                  }}
                />
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', marginBottom: '4px', fontWeight: 'bold', color: '#1D1C1D' }}>Descrição</label>
                <textarea
                  value={form.descricao}
                  onChange={(e) => setForm({ ...form, descricao: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    border: '1px solid #E8E8E8',
                    borderRadius: '8px',
                    fontSize: '14px',
                    minHeight: '80px'
                  }}
                />
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', marginBottom: '4px', fontWeight: 'bold', color: '#1D1C1D' }}>Preço *</label>
                <input
                  type="number"
                  step="0.01"
                  value={form.preco}
                  onChange={(e) => setForm({ ...form, preco: e.target.value })}
                  required
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    border: '1px solid #E8E8E8',
                    borderRadius: '8px',
                    fontSize: '14px'
                  }}
                />
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', marginBottom: '4px', fontWeight: 'bold', color: '#1D1C1D' }}>Categoria</label>
                <input
                  type="text"
                  value={form.categoria}
                  onChange={(e) => setForm({ ...form, categoria: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    border: '1px solid #E8E8E8',
                    borderRadius: '8px',
                    fontSize: '14px'
                  }}
                />
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', marginBottom: '4px', fontWeight: 'bold', color: '#1D1C1D' }}>Estoque</label>
                <input
                  type="number"
                  value={form.estoque}
                  onChange={(e) => setForm({ ...form, estoque: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    border: '1px solid #E8E8E8',
                    borderRadius: '8px',
                    fontSize: '14px'
                  }}
                />
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', marginBottom: '4px', fontWeight: 'bold', color: '#1D1C1D' }}>Status</label>
                <select
                  value={form.status}
                  onChange={(e) => setForm({ ...form, status: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    border: '1px solid #E8E8E8',
                    borderRadius: '8px',
                    fontSize: '14px'
                  }}
                >
                  <option value="Ativo">Ativo</option>
                  <option value="Inativo">Inativo</option>
                  <option value="Em Alta">Em Alta</option>
                </select>
              </div>

              <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  style={{
                    padding: '10px 24px',
                    background: '#E8E8E8',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    color: '#1D1C1D'
                  }}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  style={{
                    padding: '10px 24px',
                    background: '#36C5F0',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: 'bold'
                  }}
                >
                  {editing ? 'Atualizar' : 'Criar'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </Layout>
  );
}
