// context/AuthContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import { toast } from 'react-hot-toast';

const AuthContext = createContext();

// 🔧 Dados mockados para teste
const USUARIO_TESTE = {
  email: 'admin@jarvis.com',
  password: '123456',
  name: 'Administrador',
  token: 'mock-token-123456'
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Verifica se já tem token salvo
  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    
    if (token && userData) {
      try {
        setUser(JSON.parse(userData));
      } catch {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      }
    }
    setLoading(false);
  }, []);

  // 🔐 Login mockado
  const login = async (email, password) => {
    setLoading(true);
    setError(null);

    try {
      // Simula delay de rede
      await new Promise(resolve => setTimeout(resolve, 800));

      // Valida credenciais
      if (email === USUARIO_TESTE.email && password === USUARIO_TESTE.password) {
        const userData = {
          name: USUARIO_TESTE.name,
          email: USUARIO_TESTE.email,
          token: USUARIO_TESTE.token
        };

        // Salva no localStorage
        localStorage.setItem('token', USUARIO_TESTE.token);
        localStorage.setItem('user', JSON.stringify(userData));
        
        setUser(userData);
        toast.success('Login realizado com sucesso!');
        return { success: true };
      } else {
        toast.error('Email ou senha incorretos');
        return { success: false };
      }
    } catch (error) {
      toast.error('Erro ao fazer login');
      setError(error.message);
      return { success: false };
    } finally {
      setLoading(false);
    }
  };

  // 🚪 Logout
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    toast.success('Logout realizado com sucesso');
  };

  // ✅ Verifica se está autenticado
  const isAuthenticated = () => {
    return !!user && !!localStorage.getItem('token');
  };

  const value = {
    user,
    login,
    logout,
    loading,
    error,
    isAuthenticated
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
}