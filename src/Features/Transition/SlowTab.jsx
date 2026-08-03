import { useState, useTransition } from 'react';

// A component that intentionally blocks the main thread to simulate a heavy render
const SlowAnalytics = () => {
  const startTime = performance.now();
  while (performance.now() - startTime < 800) {
    // Artificial 800ms delay
  }
  return <div>📊 Complex Analytics Rendered!</div>;
};

export default function SlowTab() {
  const [tab, setTab] = useState('home');
  const [isPending, startTransition] = useTransition()

  const selectTab = (nextTab) => {
    // This blocks the UI immediately!
    startTransition(() => {
        setTab(nextTab);
    })
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Admin Dashboard</h2>
      
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <button 
          onClick={() => selectTab('home')} 
          disabled={tab === 'home'}
        >
          Home
        </button>
        <button 
          onClick={() => selectTab('profile')} 
          disabled={tab === 'profile'}
        >
          Profile
        </button>
        <button 
          onClick={() => selectTab('analytics')} 
          disabled={tab === 'analytics'}
        >
          Analytics (Slow)
        </button>
      </div>

      <div style={{ padding: '20px', border: '1px solid #ccc', minHeight: '100px', opacity: isPending ? '50%' : '100%' }}>
        {tab === 'home' && <div>🏠 Welcome Home!</div>}
        {tab === 'profile' && <div>👤 User Profile Data</div>}
        {tab === 'analytics' && <SlowAnalytics />}
      </div>
    </div>
  );
}