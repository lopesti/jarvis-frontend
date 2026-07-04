// context/AuthContext.js
import { createContext, useContext, useState, useEffect } from 'react';
import { api, authService } from '../services/api';
import toast from 'react-hot-toast';  // ← Importação correta

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('jarvis_token');
    if (token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      fetchUser();
    } else {
      setLoading(false);
    }
  }, []);

  const fetchUser = async () => {
    try {
      const response = await authService.me();
      setUser(response.data);
      localStorage.setItem('jarvis_user', JSON.stringify(response.data));
    } catch (error) {
      console.error('Erro ao buscar usuário:', error);
      localStorage.removeItem('jarvis_token');
      localStorage.removeItem('jarvis_user');
      delete api.defaults.headers.common['Authorization'];
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    try {
      setLoading(true);
      const response = await authService.login(email, password);
      const { token, user } = response.data;
      
      localStorage.setItem('jarvis_token', token);
      localStorage.setItem('jarvis_user', JSON.stringify(user));
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setUser(user);
      
      toast.success('Bem-vindo de volta!');
      return { success: true, user };
    } catch (error) {
      const message = error.response?.data?.message || 'Erro ao fazer login';
      toast.error(message);
      return { success: false, error: message };
    } finally {
      setLoading(false);
    }
  };

  const register = async (name, email, password) => {
    try {
      setLoading(true);
      const response = await authService.register(name, email, password);
      const { token, user } = response.data;
      
      localStorage.setItem('jarvis_token', token);
      localStorage.setItem('jarvis_user', JSON.stringify(user));
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setUser(user);
      
      toast.success('Conta criada com sucesso!');
      return { success: true, user };
    } catch (error) {
      const message = error.response?.data?.message || 'Erro ao criar conta';
      toast.error(message);
      return { success: false, error: message };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    authService.logout();
    delete api.defaults.headers.common['Authorization'];
    setUser(null);
    toast.success('Deslogado com sucesso');
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}