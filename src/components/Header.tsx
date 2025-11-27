import { Activity } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Header() {
  const [timeRemaining, setTimeRemaining] = useState({
    hours: 14,
    minutes: 22,
    seconds: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(prev => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="bg-slate-900 border-b border-cyan-500/30 shadow-lg shadow-cyan-500/10">
      <div className="container mx-auto px-6 py-4 max-w-7xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center shadow-lg shadow-cyan-500/50">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
              HELLO! LeadScout™
            </h1>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-lg shadow-green-500/50"></div>
              <span className="text-slate-300">Status: Active</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/50 border border-violet-500/30">
              <span className="text-slate-400">Next Scout Run:</span>
              <span className="text-violet-400 font-mono">
                {String(timeRemaining.hours).padStart(2, '0')}h {String(timeRemaining.minutes).padStart(2, '0')}m {String(timeRemaining.seconds).padStart(2, '0')}s
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}