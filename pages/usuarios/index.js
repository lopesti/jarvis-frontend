// pages/usuarios/index.js
import React, { useState, useEffect } from 'react';
import { userService } from '../../services/userService';
import { toast } from 'react-hot-toast';

const styles = {
  container: {
    minHeight: '100vh',
    background: '#f0f4ff',
    padding: '24px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  card: {
    maxWidth: '1100px',
    margin: '0 auto',
    background: '#ffffff',
    borderRadius: '16px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
    overflow: 'hidden',
  },
  header: {
    padding: '20px 24px',
    borderBottom: '1px solid #e5e7eb',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '12px',
  },
  title: {
    fontSize: '22px',
    fontWeight: 'bold',
    color: '#0A192F',
    margin: 0,
  },
  subtitle: {
    color: '#6b7280',
    fontSize: '14px',
    marginTop: '4px',
  },
  buttonPrimary: {
    background: '#0077B6',
    color: 'white',
    border: 'none',
    padding: '10px 18px',
    borderRadius: '8px',
    fontWeight: 'bold',
    fontSize: '14px',
    cursor: 'pointer',
  },
  tableWrapper: {
    padding: '16px 24px 24px 24px',
    overflowX: 'auto',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    fontSize: '14px',
  },
  th: {
    textAlign: 'left',
    padding: '12px 10px',
    color: '#6b7280',
    fontWeight: '600',
    fontSize: '12px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    borderBottom: '2px solid #e5e7eb',
  },
  td: {
    padding: '12px 10px',
    borderBottom: '1px solid #f3f4f6',
  },
  input: {
    border: '2px solid #0077B6',
    borderRadius: '6px',
    padding: '6px 10px',
    fontSize: '14px',
    width: '100%',
    outline: 'none',
  },
  btnEdit: {
    background: '#dbeafe',
    color: '#1d4ed8',
    border: 'none',
    padding: '5px 12px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '13px',
    marginRight: '4px',
  },
  btnDelete: {
    background: '#fee2e2',
    color: '#dc2626',
    border: 'none',
    padding: '5px 12px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '13px',
  },
  btnSave: {
    background: '#22c55e',
    color: 'white',
    border: 'none',
    padding: '5px 12px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '13px',
    marginRight: '4px',
  },
  btnCancel: {
    background: '#e5e7eb',
    color: '#4b5563',
    border: 'none',
    padding: '5px 12px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '13px',
  },
  actionsCell: {
    textAlign: 'right',
    whiteSpace: 'nowrap',
  },
};

export default function UsuariosPage() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '' });

  const loadUsers = async () => {
    setLoading(true);
    try {
      const data = await userService.listar();
      setUsuarios(data);
    } catch (error) {
      toast.error('Erro ao carregar usuários');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleEdit = (user) => {
    setEditingId(user.id);
    setFormData({ name: user.name, email: user.email });
  };

  const handleSave = async (id) => {
    try {
      await userService.atualizar(id, formData);
      toast.success('Usuário atualizado!');
      setEditingId(null);
      loadUsers();
    } catch (error) {
      toast.error(error.message || 'Erro ao atualizar');
    }
  };

  const handleCreate = async () => {
    const nome = prompt('Digite o nome:');
    if (!nome) return;
    const email = prompt('Digite o email:');
    if (!email) return;

    try {
      await userService.criar({ name: nome, email });
      toast.success('Usuário criado!');
      loadUsers();
    } catch (error) {
      toast.error(error.message || 'Erro ao criar');
    }
  };

  const handleDelete = async (id, name) => {
    if (!confirm(`Deletar "${name}"?`)) return;
    try {
      await userService.deletar(id);
      toast.success('Usuário deletado!');
      loadUsers();
    } catch (error) {
      toast.error(error.message || 'Erro ao deletar');
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setFormData({ name: '', email: '' });
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <div>
            <h1 style={styles.title}>👥 Gerenciar Usuários</h1>
            <p style={styles.subtitle}>{usuarios.length} usuários cadastrados</p>
          </div>
          <button onClick={handleCreate} style={styles.buttonPrimary}>
            ➕ Novo Usuário
          </button>
        </div>

        {loading ? (
          <div style={{ textAlign: 'center', padding: '40px', color: '#6b7280' }}>Carregando...</div>
        ) : usuarios.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '40px', color: '#6b7280' }}>Nenhum usuário</div>
        ) : (
          <div style={styles.tableWrapper}>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>ID</th>
                  <th style={styles.th}>Nome</th>
                  <th style={styles.th}>Email</th>
                  <th style={styles.th}>Cadastro</th>
                  <th style={{ ...styles.th, textAlign: 'right' }}>Ações</th>
                </tr>
              </thead>
              <tbody>
                {usuarios.map((user) => (
                  <tr key={user.id}>
                    <td style={styles.td}>#{user.id}</td>
                    <td style={styles.td}>
                      {editingId === user.id ? (
                        <input
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          style={styles.input}
                        />
                      ) : (
                        <strong>{user.name}</strong>
                      )}
                    </td>
                    <td style={styles.td}>
                      {editingId === user.id ? (
                        <input
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          style={styles.input}
                          type="email"
                        />
                      ) : (
                        user.email
                      )}
                    </td>
                    <td style={styles.td}>
                      {user.created_at ? new Date(user.created_at).toLocaleDateString('pt-BR') : '-'}
                    </td>
                    <td style={{ ...styles.td, textAlign: 'right' }}>
                      {editingId === user.id ? (
                        <>
                          <button onClick={() => handleSave(user.id)} style={styles.btnSave}>
                            💾 Salvar
                          </button>
                          <button onClick={handleCancel} style={styles.btnCancel}>
                            ✖
                          </button>
                        </>
                      ) : (
                        <>
                          <button onClick={() => handleEdit(user)} style={styles.btnEdit}>
                            ✏️ Editar
                          </button>
                          <button onClick={() => handleDelete(user.id, user.name)} style={styles.btnDelete}>
                            🗑️ Deletar
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}