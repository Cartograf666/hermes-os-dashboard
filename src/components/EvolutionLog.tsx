import React from 'react';
import { cn } from '../lib/utils';
import { TrendingUp, Activity, Zap, Clock } from 'lucide-react';

interface EvolutionLogProps {
  metrics: {
    tsr: string;
    tte: string;
    autonomy_rate: string;
    skills_count: number;
  };
}

export const EvolutionLog: React.FC<EvolutionLogProps> = ({ metrics }) => {
  const metricItems = [
    { label: 'Task Success Rate', value: metrics.tsr, icon: TrendingUp, color: 'text-green-400' },
    { label: 'Token Efficiency', value: metrics.tte, icon: Activity, color: 'text-blue-400' },
    { label: 'Autonomy Rate', value: metrics.autonomy_rate, icon: Zap, color: 'text-yellow-400' },
    { label: 'Total Skills', value: metrics.skills_count, icon: Clock, color: 'text-purple-400' },
  ];

  return (
    <div className="space-y-8">
      {/* Metrics Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {metricItems.map((m) => (
          <div key={m.label} className="p-4 rounded-xl border border-border bg-card">
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
              <m.icon size={14} className={m.color} />
              <span className="text-[10px] uppercase font-bold tracking-widest">{m.label}</span>
            </div>
            <div className="text-2xl font-mono font-bold">{m.value}</div>
          </div>
        ))}
      </div>

      {/* Timeline */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold tracking-tight flex items-center gap-2">
          <Activity size={20} className="text-primary" />
          Evolutionary Timeline
        </h3>
        <div className="relative pl-6 border-l-2 border-border space-y-6">
          <div className="relative">
            <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-primary border-4 border-background" />
            <div className="p-4 rounded-xl border border-border bg-card">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-mono text-primary">MAY 19, 2026</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-bold">MAJOR UPDATE</span>
              </div>
              <h4 className="font-bold text-sm mb-1">Implemented Autonomous Persona Pipeline</h4>
              <p className="text-xs text-muted-foreground">Integrated agency-agents library and established a dynamic role-switching loop for all non-trivial requests.</p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-muted border-4 border-background" />
            <div className="p-4 rounded-xl border border-border bg-card opacity-60">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-mono text-muted-foreground">MAY 18, 2026</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-muted-foreground font-bold">SCAUTING</span>
              </div>
              <h4 className="font-bold text-sm mb-1">Evolutionary Fit Analysis</h4>
              <p className="text-xs text-muted-foreground">Scouted for architectural improvements in distributed agent frameworks.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
