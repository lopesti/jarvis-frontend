# 🚀 Jarvis - Sistema de Gestão de Vendas com WhatsApp

Sistema completo para automação de vendas e gestão de relacionamento com clientes, integrado com WhatsApp e inteligência artificial.

---

## 📋 **Sobre o Projeto**

O **Jarvis** é um sistema de gestão de vendas desenvolvido para otimizar o atendimento ao cliente e automatizar processos comerciais. O sistema integra:

- ✅ Gestão de conversas via WhatsApp
- ✅ Automação com Inteligência Artificial (Gemini/Groq)
- ✅ CRUD completo de usuários
- ✅ Dashboard com métricas em tempo real
- ✅ Funil de vendas
- ✅ Gestão de produtos

---

## 🛠️ **Tecnologias Utilizadas**

### **Frontend**
- Next.js 14 (React)
- Tailwind CSS
- React Hook Form
- React Query
- Axios
- Chart.js

### **Backend**
- Node.js + Express
- PostgreSQL
- JWT Authentication
- Baileys (WhatsApp)
- Google Gemini API / Groq API

---

## 🎯 **Funcionalidades Implementadas**

### **1. 🔐 Autenticação**
- Login com validação
- Registro de novos usuários
- JWT para autenticação
- Proteção de rotas

### **2. 👥 CRUD de Usuários** (✅ Concluído)
| Operação | Descrição | Status |
|----------|-----------|--------|
| **Criar** | Cadastro de novos usuários | ✅ |
| **Consultar** | Listagem de todos os usuários | ✅ |
| **Alterar** | Edição de dados do usuário | ✅ |
| **Excluir** | Remoção de usuários | ✅ |

**Campos do usuário:**
- `id` - Identificador único
- `name` - Nome completo
- `email` - E-mail único
- `password` - Senha criptografada
- `created_at` - Data de cadastro
- `updated_at` - Última atualização

### **3. 📊 Dashboard**
- Métricas de conversas
- Leads qualificados
- Taxa de conversão
- Mensagens do dia
- Gráficos de evolução

### **4. 💬 Gestão de Conversas**
- Listagem de conversas ativas
- Histórico de mensagens
- Filtro por status
- Busca por nome/telefone

### **5. 📈 Funil de Vendas**
- Estatísticas do funil
- Jornada do cliente
- Taxa de conversão
- Leads perdidos

### **6. 📦 Produtos**
- Gestão de produtos
- Controle de estoque
- Categorias
- Preços

---

## 🖥️ **Telas do Sistema**

### **1. Login**
![Login](https://via.placeholder.com/800x400/4A154B/FFFFFF?text=Tela+de+Login)
- Entrada com e-mail e senha
- Link para registro

### **2. Dashboard**
![Dashboard](https://via.placeholder.com/800x400/4A154B/FFFFFF?text=Dashboard)
- Métricas principais
- Gráficos de conversas x vendas
- Distribuição por canal
- Leads x Vendas mensal

### **3. Conversas**
![Conversas](https://via.placeholder.com/800x400/4A154B/FFFFFF?text=Conversas)
- Lista de conversas
- Busca por conversas
- Status de atendimento
- Última mensagem

### **4. Funil de Vendas**
![Funil](https://via.placeholder.com/800x400/4A154B/FFFFFF?text=Funil+de+Vendas)
- Total de Leads
- Taxa de Conversão
- Ticket Médio
- Jornada do Cliente

### **5. Produtos**
![Produtos](https://via.placeholder.com/800x400/4A154B/FFFFFF?text=Produtos)
- Lista de produtos
- Botão "Novo Produto"
- Campos: ID, Nome, Preço, Categoria, Estoque, Status

### **6. Integrações**
![Integrações](https://via.placeholder.com/800x400/4A154B/FFFFFF?text=Integrações)
- WhatsApp (Conectado)
- Instagram (Desconectado)
- Facebook (Desconectado)
- Telegram (Desconectado)
- API Webhook (Conectado)

### **7. Usuários**
![Usuários](https://via.placeholder.com/800x400/4A154B/FFFFFF?text=Usuários)
- **CRUD completo**:
  - ✅ Listagem de usuários
  - ✅ Cadastro de novos usuários
  - ✅ Edição de usuários
  - ✅ Exclusão de usuários

### **8. Perfil**
![Perfil](https://via.placeholder.com/800x400/4A154B/FFFFFF?text=Perfil)
- Informações pessoais
- Alterar foto
- Alterar senha
- Salvar alterações

---

## 📊 **Modelo do Banco de Dados**

### **Tabela: `users`**
```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
