// services/userService.js
// 🔧 DADOS MOCKADOS - Depois substituir pelo backend

// Dados em memória
let usuarios = [
  { 
    id: 1, 
    name: 'João Silva', 
    email: 'joao@email.com', 
    created_at: '2026-07-01T10:00:00Z' 
  },
  { 
    id: 2, 
    name: 'Maria Santos', 
    email: 'maria@email.com', 
    created_at: '2026-07-02T14:30:00Z' 
  },
  { 
    id: 3, 
    name: 'Carlos Souza', 
    email: 'carlos@email.com', 
    created_at: '2026-07-03T09:15:00Z' 
  },
  { 
    id: 4, 
    name: 'Ana Oliveira', 
    email: 'ana@email.com', 
    created_at: '2026-07-04T16:45:00Z' 
  },
];

let proximoId = 5;

// Simula delay de rede
const delay = (ms = 500) => new Promise(resolve => setTimeout(resolve, ms));

export const userService = {
  // 📋 LISTAR todos
  listar: async () => {
    await delay(300);
    return [...usuarios];
  },

  // 🔍 BUSCAR por ID
  buscarPorId: async (id) => {
    await delay(200);
    const usuario = usuarios.find(u => u.id === id);
    if (!usuario) throw new Error('Usuário não encontrado');
    return { ...usuario };
  },

  // ➕ CRIAR
  criar: async (dados) => {
    await delay(500);
    const novoUsuario = {
      id: proximoId++,
      name: dados.name,
      email: dados.email,
      created_at: new Date().toISOString(),
    };
    usuarios.push(novoUsuario);
    return { ...novoUsuario };
  },

  // ✏️ ATUALIZAR
  atualizar: async (id, dados) => {
    await delay(500);
    const index = usuarios.findIndex(u => u.id === id);
    if (index === -1) throw new Error('Usuário não encontrado');
    
    usuarios[index] = {
      ...usuarios[index],
      name: dados.name,
      email: dados.email,
    };
    return { ...usuarios[index] };
  },

  // 🗑️ DELETAR
  deletar: async (id) => {
    await delay(500);
    const index = usuarios.findIndex(u => u.id === id);
    if (index === -1) throw new Error('Usuário não encontrado');
    
    usuarios.splice(index, 1);
    return { message: 'Usuário deletado com sucesso' };
  },
};