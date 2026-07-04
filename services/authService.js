// services/authService.js
// 🔧 LOGIN MOCKADO - Não precisa de backend

// Usuário fixo para teste
const USUARIO_TESTE = {
  email: 'admin@jarvis.com',
  password: '123456',
  name: 'Administrador',
  token: 'mock-token-123456'
};

export const authService = {
  // 🔐 Login mockado
  login: async (email, password) => {
    // Simula delay de rede
    await new Promise(resolve => setTimeout(resolve, 800));

    // Valida credenciais
    if (email === USUARIO_TESTE.email && password === USUARIO_TESTE.password) {
      // Salva token no localStorage
      localStorage.setItem('token', USUARIO_TESTE.token);
      localStorage.setItem('user', JSON.stringify({
        name: USUARIO_TESTE.name,
        email: USUARIO_TESTE.email
      }));
      
      return {
        success: true,
        token: USUARIO_TESTE.token,
        user: {
          name: USUARIO_TESTE.name,
          email: USUARIO_TESTE.email
        }
      };
    }

    throw new Error('Email ou senha incorretos');
  },

  // 🚪 Logout
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },

  // ✅ Verificar se está autenticado
  isAuthenticated: () => {
    return !!localStorage.getItem('token');
  },

  // 👤 Buscar usuário atual
  getCurrentUser: () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }
};