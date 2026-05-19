import React from 'react';
import { cn } from '../lib/utils';
import { User, Target, Sparkles } from 'lucide-react';

interface MemoryCoreProps {
  memory: {
    core_goals: string;
    user_profile: string;
    current_focus: string;
  };
}

export const MemoryCore: React.FC<MemoryCoreProps> = ({ memory }) => {
  const sections = [
    { 
      id: 'goals', 
      label: 'Core Goals', 
      value: memory.core_goals, 
      icon: Target, 
      color: 'text-blue-400' 
    },
    { 
      id: 'profile', 
      label: 'User Profile', 
      value: memory.user_profile, 
      icon: User, 
      color: 'text-purple-400' 
    },
    { 
      id: 'focus', 
      label: 'Current Focus', 
      value: memory.current_focus, 
      icon: Sparkles, 
      color: 'text-yellow-400' 
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6">
        {sections.map((section) => (
          <div 
            key={section.id} 
            className="p-6 rounded-2xl border border-border bg-card text-card-foreground relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="flex items-center gap-3 mb-4">
              <div className={cn("p-2 rounded-lg bg-secondary", section.color)}>
                <section.icon size={20} />
              </div>
              <h3 className="font-bold tracking-tight">{section.label}</h3>
            </div>
            
            <p className="text-sm text-muted-foreground leading-relaxed font-mono">
              {section.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
