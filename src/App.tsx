import React, { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { CapabilityMap } from './components/CapabilityMap';
import { MemoryCore } from './components/MemoryCore';
import { EvolutionLog } from './components/EvolutionLog';

function App() {
  const [activeTab, setActiveTab] = useState('capabilities');
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(setData)
      .catch(err => console.error("Error loading dashboard data:", err));
  }, []);

  if (!data) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center font-mono text-sm">
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 bg-primary rounded-full animate-bounce" />
          Loading Hermes OS Core...
        </div>
      </div>
    );
  }

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      {activeTab === 'capabilities' && (
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
          <h2 className="text-3xl font-bold tracking-tight mb-6">Capability Map</h2>
          <p className="text-muted-foreground mb-8">Modular skill-set and architectural competencies.</p>
          <CapabilityMap skills={data.skills} />
        </div>
      )}

      {activeTab === 'memory' && (
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
          <h2 className="text-3xl font-bold tracking-tight mb-6">Memory Core</h2>
          <p className="text-muted-foreground mb-8">Persistent knowledge and user profile synthesis.</p>
          <MemoryCore memory={data.memory} />
        </div>
      )}

      {activeTab === 'evolution' && (
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
          <h2 className="text-3xl font-bold tracking-tight mb-6">Evolution Log</h2>
          <p className="text-muted-foreground mb-8">Growth trajectory and performance benchmarks.</p>
          <EvolutionLog metrics={data.metrics} />
        </div>
      )}
    </Layout>
  );
}

export default App;
