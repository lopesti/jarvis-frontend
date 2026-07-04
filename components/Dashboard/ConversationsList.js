import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export default function ConversationsList({ conversations, onSelect, selected }) {
  return (
    <div className="card overflow-hidden">
      <div className="p-4 border-b border-gray-100">
        <h3 className="font-bold">Conversas Recentes</h3>
      </div>
      <div className="divide-y divide-gray-100 max-h-[600px] overflow-y-auto">
        {conversations.length === 0 ? (
          <div className="p-8 text-center text-[#4A5568]">
            <p>Nenhuma conversa ainda</p>
          </div>
        ) : (
          conversations.map((conv) => (
            <button
              key={conv.id}
              onClick={() => onSelect(conv)}
              className={`w-full p-4 text-left hover:bg-gray-50 transition-colors ${
                selected?.id === conv.id ? 'bg-[#E0FBFC]' : ''
              }`}
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0077B6]/10 flex items-center justify-center text-[#0077B6] font-bold flex-shrink-0">
                  {conv.phone?.slice(-4) || '??'}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <p className="font-medium truncate">{conv.phone || 'Desconhecido'}</p>
                    <span className="text-xs text-[#4A5568] flex-shrink-0 ml-2">
                      {formatDistanceToNow(new Date(conv.lastMessageAt), {
                        addSuffix: true,
                        locale: ptBR,
                      })}
                    </span>
                  </div>
                  <p className="text-sm text-[#4A5568] truncate">
                    {conv.lastMessage || 'Sem mensagens'}
                  </p>
                  {conv.tags?.length > 0 && (
                    <div className="flex gap-1 mt-1 flex-wrap">
                      {conv.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="text-xs px-2 py-0.5 rounded-full bg-[#E0FBFC] text-[#0077B6]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </button>
          ))
        )}
      </div>
    </div>
  );
}