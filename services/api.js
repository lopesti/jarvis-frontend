// services/api.js
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para adicionar token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('jarvis_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor para tratar erros
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('jarvis_token');
      localStorage.removeItem('jarvis_user');
      if (typeof window !== 'undefined') {
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

// ===== DADOS MOCKADOS PARA TESTE =====
const MOCK_USER = {
  id: 1,
  name: 'Administrador',
  email: 'admin@jarvis.com',
  role: 'admin',
  created_at: new Date().toISOString()
};

// Simula delay de rede
const delay = (ms = 500) => new Promise(resolve => setTimeout(resolve, ms));

// ===== SERVIÇOS DE AUTENTICAÇÃO (MOCKADO) =====
export const authService = {
  // 🔐 Login MOCKADO
  login: async (email, password) => {
    await delay(800);
    
    // Aceita qualquer email/senha (modo teste)
    // Ou use credenciais específicas:
    // if (email === 'admin@jarvis.com' && password === '123456')
    
    if (email && password && password.length >= 3) {
      const token = 'mock-token-' + Date.now();
      const user = { ...MOCK_USER, email };
      
      return {
        data: { token, user },
        status: 200,
        statusText: 'OK'
      };
    }
    
    // Simula erro de autenticação
    const error = {
      response: {
        data: { message: 'Email ou senha incorretos' },
        status: 401
      }
    };
    throw error;
  },

  // 📝 Register MOCKADO
  register: async (name, email, password) => {
    await delay(800);
    
    const token = 'mock-token-' + Date.now();
    const user = { ...MOCK_USER, name, email };
    
    return {
      data: { token, user },
      status: 200,
      statusText: 'OK'
    };
  },

  // 👤 Me MOCKADO
  me: async () => {
    await delay(300);
    
    const userData = localStorage.getItem('jarvis_user');
    if (userData) {
      try {
        return {
          data: JSON.parse(userData),
          status: 200,
          statusText: 'OK'
        };
      } catch {
        // Se não conseguir parsear, retorna mock
      }
    }
    
    return {
      data: MOCK_USER,
      status: 200,
      statusText: 'OK'
    };
  },

  // 🚪 Logout
  logout: () => {
    localStorage.removeItem('jarvis_token');
    localStorage.removeItem('jarvis_user');
  }
};

// ===== SERVIÇOS DE CONVERSAS (MOCKADO) =====
export const conversationService = {
  list: async () => {
    await delay(500);
    return {
      data: [
        { id: 1, name: 'João', lastMessage: 'Olá!', date: '2026-07-04' },
        { id: 2, name: 'Maria', lastMessage: 'Tudo bem?', date: '2026-07-03' },
      ],
      status: 200
    };
  },
  get: async (id) => {
    await delay(300);
    return {
      data: { id, messages: [{ text: 'Mensagem 1', date: '2026-07-04' }] },
      status: 200
    };
  },
  sendMessage: async (id, message) => {
    await delay(300);
    return {
      data: { success: true, message },
      status: 200
    };
  },
  getStats: async () => {
    await delay(400);
    return {
      data: { total: 150, active: 45, today: 12 },
      status: 200
    };
  }
};

export default api;