import React from 'react';
import { cn } from '../lib/utils';
import { Wrench, Zap, Shield, Cpu, Globe, BookOpen } from 'lucide-react';

interface Skill {
  name: string;
  description: string;
}

interface CapabilityMapProps {
  skills: Skill[];
}

const iconMap: Record<string, any> = {
  'devops': Wrench,
  'mcp': Cpu,
  'github': Globe,
  'research': BookOpen,
  'security': Shield,
  'ai': Zap,
};

export const CapabilityMap: React.FC<CapabilityMapProps> = ({ skills }) => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill, idx) => (
          <div 
            key={idx} 
            className="group p-5 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300 cursor-default relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-30 transition-opacity">
              <Zap size={40} className="text-primary" />
            </div>
            
            <div className="flex items-start justify-between mb-3">
              <div className="p-2 rounded-lg bg-secondary text-primary">
                <Cpu size={16} />
              </div>
              <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-tighter">
                Active
              </span>
            </div>
            
            <h3 className="font-bold text-foreground group-hover:text-primary transition-colors mb-2">
              {skill.name}
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
