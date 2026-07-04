import { useState } from 'react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { conversationService } from '../../services/api';
import toast from 'react-hot-toast';

export default function ConversationDetail({ conversation, onMessageSent }) {
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [messages, setMessages] = useState(conversation.messages || []);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    setSending(true);
    try {
      const response = await conversationService.sendMessage(conversation.id, message);
      setMessages([...messages, response.data]);
      setMessage('');
      onMessageSent();
      toast.success('Mensagem enviada!');
    } catch (error) {
      toast.error('Erro ao enviar mensagem');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="card flex flex-col h-[600px]">
      {/* Header */}
      <div className="p-4 border-b border-gray-100 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[#0077B6]/10 flex items-center justify-center text-[#0077B6] font-bold">
          {conversation.phone?.slice(-4) || '??'}
        </div>
        <div>
          <h4 className="font-medium">{conversation.phone || 'Desconhecido'}</h4>
          <span className="text-xs text-[#4A5568]">
            {conversation.tags?.join(', ') || 'Sem etiquetas'}
          </span>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.length === 0 ? (
          <div className="text-center text-[#4A5568] py-8">
            <p>Nenhuma mensagem ainda</p>
          </div>
        ) : (
          messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.role === 'assistant' ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-[80%] px-4 py-2 rounded-2xl ${
                  msg.role === 'assistant'
                    ? 'bg-gray-100 text-[#0A192F]'
                    : 'bg-[#0077B6] text-white'
                }`}
              >
                <p className="text-sm">{msg.content}</p>
                <span className="text-xs opacity-70 mt-1 block">
                  {format(new Date(msg.createdAt), 'HH:mm', { locale: ptBR })}
                </span>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Input */}
      <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-100">
        <div className="flex gap-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Digite sua mensagem..."
            className="input-field flex-1"
            disabled={sending}
          />
          <button
            type="submit"
            disabled={sending || !message.trim()}
            className="btn-primary px-6"
          >
            {sending ? 'Enviando...' : 'Enviar'}
          </button>
        </div>
      </form>
    </div>
  );
}