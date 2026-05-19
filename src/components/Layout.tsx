import React from 'react';
import { cn } from '../lib/utils';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const tabs = [
  { id: 'capabilities', label: 'Capability Map', icon: '🛠️' },
  { id: 'memory', label: 'Memory Core', icon: '🧠' },
  { id: 'evolution', label: 'Evolution Log', icon: '📈' },
];

export const Layout: React.FC<LayoutProps> = ({ children, activeTab, setActiveTab }) => {
  return (
    <div className="min-h-screen bg-background text-foreground flex">
      {/* Sidebar Navigation */}
      <aside className="w-64 border-r border-border bg-layout-secondary flex flex-col">
        <div className="p-6 border-b border-border">
          <h1 className="text-xl font-bold tracking-tighter flex items-center gap-2">
            <span className="text-primary">HERMES</span> OS
          </h1>
          <p className="text-xs text-muted-foreground mt-1">v0.1.0 // Autonomous Agent</p>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2 rounded-md transition-all text-sm font-medium",
                activeTab === tab.id 
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" 
                  : "text-muted-foreground hover:bg-accent hover:text-foreground"
              )}
            >
              <span>{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-border">
          <div className="bg-background/50 rounded-lg p-3 border border-border/50">
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-2">System Status</p>
            <div className="flex items-center gap-2 text-xs">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="font-mono">ONLINE // STABLE</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 border-b border-border bg-background/50 backdrop-blur-sm flex items-center justify-between px-8">
          <div className="text-sm font-medium text-muted-foreground">
            Current Node: <span className="text-foreground font-mono">hermes-core-01</span>
          </div>
          <div className="flex items-center gap-4">
             <div className="px-3 py-1 rounded-full bg-secondary border border-border text-[10px] font-mono">
               TSR: 94.2%
             </div>
          </div>
        </header>
        <div className="flex-1 overflow-auto p-8">
          {children}
        </div>
      </main>
    </div>
  );
};
