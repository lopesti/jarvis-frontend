import { FiMessageSquare, FiUsers, FiTrendingUp, FiClock } from 'react-icons/fi';

export default function StatsCards({ stats }) {
  const cards = [
    {
      icon: FiMessageSquare,
      label: 'Total de Conversas',
      value: stats?.totalConversations || 0,
      color: 'text-[#0077B6]',
      bg: 'bg-[#E0FBFC]',
    },
    {
      icon: FiUsers,
      label: 'Leads Qualificados',
      value: stats?.qualifiedLeads || 0,
      color: 'text-green-600',
      bg: 'bg-green-50',
    },
    {
      icon: FiTrendingUp,
      label: 'Taxa de Conversão',
      value: `${stats?.conversionRate || 0}%`,
      color: 'text-purple-600',
      bg: 'bg-purple-50',
    },
    {
      icon: FiClock,
      label: 'Tempo Médio de Resposta',
      value: `${stats?.avgResponseTime || 0}s`,
      color: 'text-orange-600',
      bg: 'bg-orange-50',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, index) => {
        const Icon = card.icon;
        return (
          <div key={index} className="card p-6">
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-xl ${card.bg}`}>
                <Icon className={`w-6 h-6 ${card.color}`} />
              </div>
              <div>
                <p className="text-sm text-[#4A5568]">{card.label}</p>
                <p className="text-2xl font-extrabold">{card.value}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}