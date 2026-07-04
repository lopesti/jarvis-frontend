import Layout from '../components/Layout';
import { useState } from 'react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import Papa from 'papaparse';

export default function Relatorios() {
  const [exporting, setExporting] = useState(false);

  const data = [
    { date: '10/06/2026', name: 'Carlos Silva', phone: '(11) 98765-4321', status: 'Ativo', value: 'R$ 149,00' },
    { date: '09/06/2026', name: 'Maria Santos', phone: '(11) 91234-5678', status: 'Finalizado', value: 'R$ 99,00' },
    { date: '09/06/2026', name: 'João Oliveira', phone: '(11) 99876-5432', status: 'Ativo', value: 'R$ 199,00' },
    { date: '08/06/2026', name: 'Ana Pereira', phone: '(11) 98765-1234', status: 'Pendente', value: 'R$ 49,00' }
  ];

  const exportPDF = () => {
    setExporting(true);
    try {
      const doc = new jsPDF();
      doc.setFontSize(18);
      doc.text('Relatório de Conversas', 14, 22);
      doc.setFontSize(12);
      doc.text('Gerado em: ' + new Date().toLocaleDateString(), 14, 30);

      autoTable(doc, {
        head: [['Data', 'Nome', 'Telefone', 'Status', 'Valor']],
        body: data.map(r => [r.date, r.name, r.phone, r.status, r.value]),
        startY: 38,
        styles: { fontSize: 10 },
        headStyles: { fillColor: '#36C5F0' }
      });

      doc.save('relatorio-conversas.pdf');
    } catch (error) {
      alert('Erro ao gerar PDF: ' + error.message);
    }
    setExporting(false);
  };

  const exportCSV = () => {
    setExporting(true);
    try {
      const csv = Papa.unparse(data);
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'relatorio-conversas.csv';
      link.click();
    } catch (error) {
      alert('Erro ao gerar CSV: ' + error.message);
    }
    setExporting(false);
  };

  return (
    <Layout>
      <div style={{ padding: '32px 0' }}>
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: 'var(--text-primary, #1D1C1D)' }}>📄 Relatórios</h1>
          <p style={{ color: 'var(--text-secondary, #616061)' }}>Exporte relatórios em PDF ou CSV.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '32px' }}>
          <div className="slack-card" style={{ textAlign: 'center' }}>
            <span style={{ fontSize: '48px' }}>📊</span>
            <h3 style={{ margin: '16px 0 8px', fontSize: '18px', color: 'var(--text-primary, #1D1C1D)' }}>Total de Registros</h3>
            <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#36C5F0' }}>{data.length}</p>
          </div>
          <div className="slack-card" style={{ textAlign: 'center' }}>
            <span style={{ fontSize: '48px' }}>💰</span>
            <h3 style={{ margin: '16px 0 8px', fontSize: '18px', color: 'var(--text-primary, #1D1C1D)' }}>Valor Total</h3>
            <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#2EB67D' }}>R$ 496,00</p>
          </div>
          <div className="slack-card" style={{ textAlign: 'center' }}>
            <span style={{ fontSize: '48px' }}>📈</span>
            <h3 style={{ margin: '16px 0 8px', fontSize: '18px', color: 'var(--text-primary, #1D1C1D)' }}>Média por Registro</h3>
            <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#ECB22E' }}>R$ 124,00</p>
          </div>
        </div>

        <div className="slack-card" style={{ marginBottom: '32px' }}>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <button
              onClick={exportPDF}
              disabled={exporting}
              style={{
                padding: '12px 32px',
                background: '#E01E5A',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 'bold',
                transition: 'all 0.3s',
                opacity: exporting ? 0.6 : 1
              }}
              onMouseEnter={(e) => { if (!exporting) { e.currentTarget.style.background = '#C4174D'; e.currentTarget.style.transform = 'scale(1.02)'; } }}
              onMouseLeave={(e) => { if (!exporting) { e.currentTarget.style.background = '#E01E5A'; e.currentTarget.style.transform = 'scale(1)'; } }}
            >
              {exporting ? '⏳ Gerando...' : '📄 Exportar PDF'}
            </button>
            <button
              onClick={exportCSV}
              disabled={exporting}
              style={{
                padding: '12px 32px',
                background: '#2EB67D',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 'bold',
                transition: 'all 0.3s',
                opacity: exporting ? 0.6 : 1
              }}
              onMouseEnter={(e) => { if (!exporting) { e.currentTarget.style.background = '#1D9A65'; e.currentTarget.style.transform = 'scale(1.02)'; } }}
              onMouseLeave={(e) => { if (!exporting) { e.currentTarget.style.background = '#2EB67D'; e.currentTarget.style.transform = 'scale(1)'; } }}
            >
              📊 Exportar CSV
            </button>
          </div>
        </div>

        <div className="slack-card">
          <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: 'var(--text-primary, #1D1C1D)', marginBottom: '16px' }}>📋 Dados a serem exportados</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--border-color, #E8E8E8)' }}>
                  <th style={{ padding: '12px', textAlign: 'left', color: 'var(--text-secondary, #616061)' }}>Data</th>
                  <th style={{ padding: '12px', textAlign: 'left', color: 'var(--text-secondary, #616061)' }}>Nome</th>
                  <th style={{ padding: '12px', textAlign: 'left', color: 'var(--text-secondary, #616061)' }}>Telefone</th>
                  <th style={{ padding: '12px', textAlign: 'left', color: 'var(--text-secondary, #616061)' }}>Status</th>
                  <th style={{ padding: '12px', textAlign: 'left', color: 'var(--text-secondary, #616061)' }}>Valor</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <tr key={index} style={{ borderBottom: '1px solid var(--border-color, #E8E8E8)' }}>
                    <td style={{ padding: '12px', color: 'var(--text-secondary, #616061)' }}>{row.date}</td>
                    <td style={{ padding: '12px', fontWeight: 'bold', color: 'var(--text-primary, #1D1C1D)' }}>{row.name}</td>
                    <td style={{ padding: '12px', color: 'var(--text-secondary, #616061)' }}>{row.phone}</td>
                    <td style={{ padding: '12px' }}>
                      <span style={{
                        padding: '4px 12px',
                        borderRadius: '9999px',
                        fontSize: '12px',
                        fontWeight: 'bold',
                        background: row.status === 'Ativo' ? '#d1fae5' : row.status === 'Finalizado' ? '#fef3c7' : '#fce4ec',
                        color: row.status === 'Ativo' ? '#065f46' : row.status === 'Finalizado' ? '#92400e' : '#b91c1c'
                      }}>
                        {row.status}
                      </span>
                    </td>
                    <td style={{ padding: '12px', fontWeight: 'bold', color: '#2EB67D' }}>{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
}
