import React, { useState } from 'react';
import { cn } from '../lib/utils';
import { Menu, X } from 'lucide-react';

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex relative">
      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar Navigation */}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 border-r border-border bg-layout-secondary flex flex-col transition-transform duration-300 ease-in-out",
        "md:relative md:translate-x-0",
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="p-6 border-b border-border flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold tracking-tighter flex items-center gap-2">
              <span className="text-primary">HERMES</span> OS
            </h1>
            <p className="text-xs text-muted-foreground mt-1">v0.1.0 // Autonomous Agent</p>
          </div>
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="md:hidden p-2 text-muted-foreground hover:text-foreground"
          >
            <X size={20} />
          </button>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
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
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="h-16 border-b border-border bg-background/50 backdrop-blur-sm flex items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 text-muted-foreground hover:text-foreground"
            >
              <Menu size={20} />
            </button>
            <div className="text-sm font-medium text-muted-foreground hidden sm:block">
              Current Node: <span className="text-foreground font-mono">hermes-core-01</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
             <div className="px-3 py-1 rounded-full bg-secondary border border-border text-[10px] font-mono">
               TSR: 94.2%
             </div>
          </div>
        </header>
        <div className="flex-1 overflow-auto p-4 md:p-8">
          {children}
        </div>
      </main>
    </div>
  );
};
