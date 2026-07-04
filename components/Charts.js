import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement,  // ← IMPORTANTE: Adicionar ArcElement
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';

// Registrar TODOS os elementos necessários
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement  // ← IMPORTANTE: Registrar ArcElement
);

export function LineChart({ data, options, title }) {
  const defaultOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: 'var(--text-primary, #1D1C1D)'
        }
      },
      title: {
        display: !!title,
        text: title,
        color: 'var(--text-primary, #1D1C1D)'
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'var(--border-color, #E8E8E8)'
        },
        ticks: {
          color: 'var(--text-secondary, #616061)'
        }
      },
      x: {
        grid: {
          display: false
        },
        ticks: {
          color: 'var(--text-secondary, #616061)'
        }
      }
    }
  };

  return (
    <div style={{ height: '280px', position: 'relative' }}>
      <Line data={data} options={{ ...defaultOptions, ...options }} />
    </div>
  );
}

export function BarChart({ data, options, title }) {
  const defaultOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: 'var(--text-primary, #1D1C1D)'
        }
      },
      title: {
        display: !!title,
        text: title,
        color: 'var(--text-primary, #1D1C1D)'
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'var(--border-color, #E8E8E8)'
        },
        ticks: {
          color: 'var(--text-secondary, #616061)'
        }
      },
      x: {
        grid: {
          display: false
        },
        ticks: {
          color: 'var(--text-secondary, #616061)'
        }
      }
    }
  };

  return (
    <div style={{ height: '280px', position: 'relative' }}>
      <Bar data={data} options={{ ...defaultOptions, ...options }} />
    </div>
  );
}

export function DoughnutChart({ data, options, title }) {
  const defaultOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: 'var(--text-primary, #1D1C1D)',
          padding: 16
        }
      },
      title: {
        display: !!title,
        text: title,
        color: 'var(--text-primary, #1D1C1D)'
      }
    }
  };

  return (
    <div style={{ height: '280px', position: 'relative' }}>
      <Doughnut data={data} options={{ ...defaultOptions, ...options }} />
    </div>
  );
}