import { Sliders, Save, RotateCcw } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner@2.0.3';

export function MatchingPriorities() {
  const [priorities, setPriorities] = useState({
    intentMatch: 85,
    skillMatch: 70,
    domainOverlap: 90,
    momentumSignals: 65,
    valueAddScore: 75,
    communicationStyleFit: 80,
  });

  const defaultPriorities = {
    intentMatch: 85,
    skillMatch: 70,
    domainOverlap: 90,
    momentumSignals: 65,
    valueAddScore: 75,
    communicationStyleFit: 80,
  };

  const handleSliderChange = (key: keyof typeof priorities, value: number) => {
    setPriorities({ ...priorities, [key]: value });
  };

  const handleSave = () => {
    toast.success('Matching priorities saved successfully!');
  };

  const handleReset = () => {
    setPriorities(defaultPriorities);
    toast.success('Priorities reset to defaults');
  };

  const sliders = [
    { key: 'intentMatch' as const, label: 'Intent Match', color: 'cyan' },
    { key: 'skillMatch' as const, label: 'Skill Match', color: 'violet' },
    { key: 'domainOverlap' as const, label: 'Domain Overlap', color: 'cyan' },
    { key: 'momentumSignals' as const, label: 'Momentum Signals', color: 'violet' },
    { key: 'valueAddScore' as const, label: 'Value-Add Score', color: 'cyan' },
    { key: 'communicationStyleFit' as const, label: 'Communication Style Fit', color: 'violet' },
  ];

  return (
    <div className="bg-slate-900/50 rounded-xl border border-cyan-500/30 p-6 shadow-lg shadow-cyan-500/5">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Sliders className="w-5 h-5 text-cyan-400" />
          <h2 className="text-cyan-400">Matching Priorities</h2>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleReset}
            className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 text-slate-400 rounded-lg border border-slate-600/30 hover:bg-slate-700 hover:text-slate-300 transition-all"
          >
            <RotateCcw className="w-4 h-4" />
            Reset
          </button>
          <button
            onClick={handleSave}
            className="flex items-center gap-2 px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-lg border border-cyan-500/30 hover:bg-cyan-500/30 transition-all"
          >
            <Save className="w-4 h-4" />
            Save Changes
          </button>
        </div>
      </div>

      <div className="space-y-6">
        <p className="text-slate-400">
          Adjust the importance of each matching dimension. Higher values mean this factor will have more weight in lead compatibility scoring.
        </p>

        <div className="space-y-6">
          {sliders.map((slider) => (
            <div key={slider.key} className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-slate-300">{slider.label}</label>
                <span className={`${slider.color === 'cyan' ? 'text-cyan-400' : 'text-violet-400'} px-3 py-1 rounded-lg bg-slate-800/50 border border-slate-700/50 min-w-[60px] text-center font-mono`}>
                  {priorities[slider.key]}%
                </span>
              </div>
              <div className="relative">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={priorities[slider.key]}
                  onChange={(e) => handleSliderChange(slider.key, parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer slider"
                  style={{
                    background: `linear-gradient(to right, 
                      ${slider.color === 'cyan' ? '#06b6d4' : '#8b5cf6'} 0%, 
                      ${slider.color === 'cyan' ? '#06b6d4' : '#8b5cf6'} ${priorities[slider.key]}%, 
                      #1e293b ${priorities[slider.key]}%, 
                      #1e293b 100%)`
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 bg-slate-800/30 rounded-lg border border-slate-700/50">
          <div className="flex items-center justify-between">
            <span className="text-slate-300">Overall Match Threshold</span>
            <span className="text-cyan-400">70%</span>
          </div>
          <p className="text-slate-500 mt-2">
            Leads must score at least 70% overall to appear in your daily output
          </p>
        </div>
      </div>
    </div>
  );
}