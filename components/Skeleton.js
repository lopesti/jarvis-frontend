export function SkeletonCard() {
  return (
    <div style={{
      background: 'var(--card-bg, white)',
      padding: '24px',
      borderRadius: '12px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
      border: '1px solid var(--border-color, #E8E8E8)',
      animation: 'pulse 1.5s ease-in-out infinite'
    }}>
      <div style={{
        height: '20px',
        width: '60%',
        background: 'var(--skeleton-bg, #E8E8E8)',
        borderRadius: '4px',
        marginBottom: '12px'
      }}></div>
      <div style={{
        height: '32px',
        width: '40%',
        background: 'var(--skeleton-bg, #E8E8E8)',
        borderRadius: '4px',
        marginBottom: '8px'
      }}></div>
      <div style={{
        height: '16px',
        width: '80%',
        background: 'var(--skeleton-bg, #E8E8E8)',
        borderRadius: '4px'
      }}></div>
    </div>
  );
}

export function SkeletonTable() {
  return (
    <div style={{
      background: 'var(--card-bg, white)',
      padding: '24px',
      borderRadius: '12px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
      border: '1px solid var(--border-color, #E8E8E8)',
      animation: 'pulse 1.5s ease-in-out infinite'
    }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} style={{
          display: 'flex',
          gap: '16px',
          padding: '12px 0',
          borderBottom: '1px solid var(--border-color, #E8E8E8)'
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'var(--skeleton-bg, #E8E8E8)'
          }}></div>
          <div style={{ flex: 1 }}>
            <div style={{
              height: '16px',
              width: '30%',
              background: 'var(--skeleton-bg, #E8E8E8)',
              borderRadius: '4px',
              marginBottom: '8px'
            }}></div>
            <div style={{
              height: '12px',
              width: '60%',
              background: 'var(--skeleton-bg, #E8E8E8)',
              borderRadius: '4px'
            }}></div>
          </div>
        </div>
      ))}
    </div>
  );
}
