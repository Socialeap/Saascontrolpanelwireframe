import { Activity, CheckCircle, Clock, Globe, Zap, Download } from 'lucide-react';
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer } from 'recharts';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

export function SystemStatus() {
  const [cycleTime, setCycleTime] = useState({ hours: 9, minutes: 38, seconds: 12 });
  const [showExportModal, setShowExportModal] = useState(false);
  
  const alignmentData = [
    { dimension: 'Intent', value: 85 },
    { dimension: 'Skills', value: 72 },
    { dimension: 'Domain', value: 90 },
    { dimension: 'Momentum', value: 68 },
    { dimension: 'Value', value: 78 },
    { dimension: 'Style', value: 82 },
    { dimension: 'Timing', value: 75 },
    { dimension: 'Network', value: 70 },
    { dimension: 'Growth', value: 88 },
  ];

  const [recentActivity, setRecentActivity] = useState([
    { time: '2 min ago', event: 'Lead matching cycle completed', status: 'success' },
    { time: '14 min ago', event: 'Playwright scan of 247 pages successful', status: 'success' },
    { time: '32 min ago', event: 'New high-value lead detected: Series B SaaS Founder', status: 'highlight' },
    { time: '1h 12m ago', event: 'Daily compatibility recalculation finished', status: 'success' },
    { time: '2h 45m ago', event: 'Intent signals updated from 12 data sources', status: 'success' },
  ]);

  // Simulate countdown timer
  useEffect(() => {
    const interval = setInterval(() => {
      setCycleTime(prev => {
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

  // Simulate new activity log entries
  useEffect(() => {
    const activityUpdates = [
      { event: 'Compatibility score recalculated for 142 leads', status: 'success' },
      { event: 'New domain signals detected from LinkedIn activity', status: 'success' },
      { event: 'High-priority lead match: VP Marketing at FinTech startup', status: 'highlight' },
      { event: 'Search query expansion yielded 89 new prospects', status: 'success' },
    ];

    let updateIndex = 0;
    const interval = setInterval(() => {
      if (updateIndex < activityUpdates.length) {
        setRecentActivity(prev => [
          { time: 'Just now', ...activityUpdates[updateIndex] },
          ...prev.slice(0, 4)
        ]);
        updateIndex++;
      }
    }, 15000); // Add new activity every 15 seconds

    return () => clearInterval(interval);
  }, []);

  const handleExport = (format: string) => {
    toast.success(`Exporting system report as ${format.toUpperCase()}...`);
    setTimeout(() => {
      toast.success(`System report exported successfully!`);
      setShowExportModal(false);
    }, 1500);
  };

  return (
    <div className="space-y-6">
      {/* Export Modal */}
      {showExportModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-cyan-500/30 rounded-xl p-6 max-w-md w-full mx-4 shadow-2xl shadow-cyan-500/20 animate-in zoom-in-95 duration-200">
            <h3 className="text-cyan-400 mb-4">Export System Report</h3>
            <p className="text-slate-400 mb-6">Choose your preferred export format:</p>
            
            <div className="space-y-3">
              <button
                onClick={() => handleExport('pdf')}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-100 hover:border-cyan-500/50 transition-all text-left"
              >
                <div className="flex items-center justify-between">
                  <span>PDF Report</span>
                  <Download className="w-4 h-4 text-cyan-400" />
                </div>
                <div className="text-slate-500 mt-1">Complete system metrics and visualizations</div>
              </button>
              
              <button
                onClick={() => handleExport('csv')}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-100 hover:border-cyan-500/50 transition-all text-left"
              >
                <div className="flex items-center justify-between">
                  <span>CSV Data Export</span>
                  <Download className="w-4 h-4 text-cyan-400" />
                </div>
                <div className="text-slate-500 mt-1">Raw data for analysis</div>
              </button>
              
              <button
                onClick={() => handleExport('json')}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-100 hover:border-cyan-500/50 transition-all text-left"
              >
                <div className="flex items-center justify-between">
                  <span>JSON Export</span>
                  <Download className="w-4 h-4 text-cyan-400" />
                </div>
                <div className="text-slate-500 mt-1">Machine-readable format</div>
              </button>
            </div>

            <button
              onClick={() => setShowExportModal(false)}
              className="w-full mt-4 px-4 py-2 bg-slate-800/30 border border-slate-700 rounded-lg text-slate-400 hover:text-slate-300 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* System Activity Summary */}
      <div className="bg-slate-900/50 rounded-xl border border-cyan-500/30 p-6 shadow-lg shadow-cyan-500/5">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Activity className="w-5 h-5 text-cyan-400" />
            <h2 className="text-cyan-400">System Activity Summary</h2>
          </div>
          <button
            onClick={() => setShowExportModal(true)}
            className="flex items-center gap-2 px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-lg border border-cyan-500/30 hover:bg-cyan-500/30 transition-all"
          >
            <Download className="w-4 h-4" />
            Export Report
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-4 h-4 text-violet-400" />
              <span className="text-slate-400">Cycle Timer</span>
            </div>
            <div className="text-2xl text-slate-100 font-mono">
              {String(cycleTime.hours).padStart(2, '0')}:{String(cycleTime.minutes).padStart(2, '0')}:{String(cycleTime.seconds).padStart(2, '0')}
            </div>
            <div className="text-slate-500">Until next cycle</div>
          </div>

          <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-slate-400">Last Run</span>
            </div>
            <div className="text-2xl text-slate-100">14:22:18</div>
            <div className="text-slate-500">Nov 27, 2025</div>
          </div>

          <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span className="text-slate-400">Retrieval Health</span>
            </div>
            <div className="text-2xl text-slate-100">98.4%</div>
            <div className="text-slate-500">Avg latency: 1.2s</div>
          </div>

          <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
            <div className="flex items-center gap-2 mb-2">
              <Globe className="w-4 h-4 text-violet-400" />
              <span className="text-slate-400">Sites Scanned</span>
            </div>
            <div className="text-2xl text-slate-100">1,247</div>
            <div className="text-slate-500">Last 24 hours</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Alignment Vector Snapshot */}
        <div className="bg-slate-900/50 rounded-xl border border-violet-500/30 p-6 shadow-lg shadow-violet-500/5">
          <div className="flex items-center gap-3 mb-6">
            <Zap className="w-5 h-5 text-violet-400" />
            <h2 className="text-violet-400">Alignment Vector Snapshot</h2>
          </div>
          
          <div className="w-full h-80 flex items-center justify-center">
            <ResponsiveContainer width="100%" height={320}>
              <RadarChart data={alignmentData}>
                <PolarGrid stroke="#334155" strokeDasharray="3 3" />
                <PolarAngleAxis 
                  dataKey="dimension" 
                  tick={{ fill: '#94a3b8', fontSize: 12 }}
                />
                <Radar
                  dataKey="value"
                  stroke="#06b6d4"
                  fill="#06b6d4"
                  fillOpacity={0.3}
                  strokeWidth={2}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          
          <div className="mt-4 flex items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-cyan-500"></div>
              <span className="text-slate-400">9-Dimension Match Profile</span>
            </div>
          </div>
        </div>

        {/* Recent Activity Log */}
        <div className="bg-slate-900/50 rounded-xl border border-cyan-500/30 p-6 shadow-lg shadow-cyan-500/5">
          <div className="flex items-center gap-3 mb-6">
            <Activity className="w-5 h-5 text-cyan-400" />
            <h2 className="text-cyan-400">Recent Activity Log</h2>
          </div>
          
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div
                key={index}
                className={`
                  flex items-start gap-3 p-3 rounded-lg border
                  ${
                    activity.status === 'highlight'
                      ? 'bg-violet-500/10 border-violet-500/30'
                      : 'bg-slate-800/30 border-slate-700/50'
                  }
                `}
              >
                <div className="flex-shrink-0 mt-1">
                  {activity.status === 'highlight' ? (
                    <div className="w-2 h-2 rounded-full bg-violet-500 animate-pulse shadow-lg shadow-violet-500/50"></div>
                  ) : (
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-slate-300">{activity.event}</div>
                  <div className="text-slate-500">{activity.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}