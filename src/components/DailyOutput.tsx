import { TrendingUp, Mail, Linkedin, ExternalLink, Download, Filter } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner@2.0.3';

export function DailyOutput() {
  const [showExportModal, setShowExportModal] = useState(false);
  const [selectedLead, setSelectedLead] = useState<number | null>(null);

  const leads = [
    {
      name: 'Sarah Chen',
      role: 'VP Marketing',
      company: 'DataFlow Analytics',
      industry: 'B2B SaaS',
      compatibilityScore: 92,
      alignments: ['Intent Match: 95%', 'Domain Overlap: 90%', 'Momentum: 89%'],
      recentActivity: 'Posted about partnership opportunities on LinkedIn',
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Head of Partnerships',
      company: 'CloudSync Pro',
      industry: 'Sales Enablement',
      compatibilityScore: 88,
      alignments: ['Intent Match: 87%', 'Skill Match: 91%', 'Value-Add: 86%'],
      recentActivity: 'Launched new integration marketplace',
    },
    {
      name: 'Emily Watson',
      role: 'Founder & CEO',
      company: 'GrowthMetrics',
      industry: 'Marketing Tech',
      compatibilityScore: 85,
      alignments: ['Intent Match: 90%', 'Style Fit: 88%', 'Domain: 77%'],
      recentActivity: 'Raised Series A, expanding co-marketing efforts',
    },
  ];

  const handleExport = (format: string) => {
    toast.success(`Exporting ${leads.length} leads as ${format.toUpperCase()}...`);
    setTimeout(() => {
      toast.success(`Lead export completed successfully!`);
      setShowExportModal(false);
    }, 1500);
  };

  const handleContact = (leadName: string, method: string) => {
    toast.success(`Opening ${method} for ${leadName}...`);
  };

  const handleViewProfile = (leadName: string) => {
    setSelectedLead(leads.findIndex(l => l.name === leadName));
    toast.success(`Loading full profile for ${leadName}...`);
    setTimeout(() => {
      toast.success('Suggested outreach message generated!');
    }, 1000);
  };

  return (
    <div className="space-y-6">
      {/* Export Modal */}
      {showExportModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-cyan-500/30 rounded-xl p-6 max-w-md w-full mx-4 shadow-2xl shadow-cyan-500/20 animate-in zoom-in-95 duration-200">
            <h3 className="text-cyan-400 mb-4">Export Lead List</h3>
            <p className="text-slate-400 mb-6">Export {leads.length} leads in your preferred format:</p>
            
            <div className="space-y-3">
              <button
                onClick={() => handleExport('csv')}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-100 hover:border-cyan-500/50 transition-all text-left"
              >
                <div className="flex items-center justify-between">
                  <span>CSV Spreadsheet</span>
                  <Download className="w-4 h-4 text-cyan-400" />
                </div>
                <div className="text-slate-500 mt-1">Import into CRM or Excel</div>
              </button>
              
              <button
                onClick={() => handleExport('pdf')}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-100 hover:border-cyan-500/50 transition-all text-left"
              >
                <div className="flex items-center justify-between">
                  <span>PDF Report</span>
                  <Download className="w-4 h-4 text-cyan-400" />
                </div>
                <div className="text-slate-500 mt-1">Complete profiles with compatibility breakdown</div>
              </button>
              
              <button
                onClick={() => handleExport('json')}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-100 hover:border-cyan-500/50 transition-all text-left"
              >
                <div className="flex items-center justify-between">
                  <span>JSON Export</span>
                  <Download className="w-4 h-4 text-cyan-400" />
                </div>
                <div className="text-slate-500 mt-1">API-ready format</div>
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

      <div className="bg-slate-900/50 rounded-xl border border-cyan-500/30 p-6 shadow-lg shadow-cyan-500/5">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <TrendingUp className="w-5 h-5 text-cyan-400" />
            <h2 className="text-cyan-400">Today's High-Value Leads</h2>
            <span className="ml-2 px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full border border-cyan-500/30">
              {leads.length} new matches
            </span>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 text-slate-400 rounded-lg border border-slate-600/30 hover:bg-slate-700 hover:text-slate-300 transition-all">
              <Filter className="w-4 h-4" />
              Filter
            </button>
            <button
              onClick={() => setShowExportModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-lg border border-cyan-500/30 hover:bg-cyan-500/30 transition-all"
            >
              <Download className="w-4 h-4" />
              Export Leads
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {leads.map((lead, index) => (
            <div
              key={index}
              className={`bg-slate-800/50 rounded-lg border p-6 transition-all ${
                selectedLead === index
                  ? 'border-cyan-500/50 shadow-lg shadow-cyan-500/10'
                  : 'border-slate-700/50 hover:border-cyan-500/30'
              }`}
            >
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                      <span className="text-white">{lead.name.charAt(0)}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-slate-100">{lead.name}</h3>
                        <span className="px-2 py-0.5 bg-slate-700/50 text-slate-400 rounded">
                          {lead.role}
                        </span>
                      </div>
                      <div className="text-slate-400 mb-3">
                        {lead.company} · {lead.industry}
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-3">
                        {lead.alignments.map((alignment, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-cyan-500/10 text-cyan-300 rounded border border-cyan-500/20"
                          >
                            {alignment}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 text-slate-500">
                        <TrendingUp className="w-4 h-4" />
                        <span>{lead.recentActivity}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-4">
                  <div className="relative w-24 h-24">
                    <svg className="transform -rotate-90 w-24 h-24">
                      <circle
                        cx="48"
                        cy="48"
                        r="40"
                        stroke="#1e293b"
                        strokeWidth="8"
                        fill="none"
                      />
                      <circle
                        cx="48"
                        cy="48"
                        r="40"
                        stroke="url(#gradient)"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray={`${2 * Math.PI * 40}`}
                        strokeDashoffset={`${2 * Math.PI * 40 * (1 - lead.compatibilityScore / 100)}`}
                        strokeLinecap="round"
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#06b6d4" />
                          <stop offset="100%" stopColor="#8b5cf6" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl text-slate-100">{lead.compatibilityScore}%</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <button 
                      onClick={() => handleContact(lead.name, 'Email')}
                      className="p-2 bg-cyan-500/20 text-cyan-400 rounded-lg border border-cyan-500/30 hover:bg-cyan-500/30 transition-colors"
                      title="Send email"
                    >
                      <Mail className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => handleContact(lead.name, 'LinkedIn')}
                      className="p-2 bg-violet-500/20 text-violet-400 rounded-lg border border-violet-500/30 hover:bg-violet-500/30 transition-colors"
                      title="View on LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => handleContact(lead.name, 'Website')}
                      className="p-2 bg-slate-700/50 text-slate-400 rounded-lg border border-slate-600/30 hover:bg-slate-700 transition-colors"
                      title="Visit website"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-700/50">
                <button 
                  onClick={() => handleViewProfile(lead.name)}
                  className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-violet-500 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
                >
                  View Full Profile & Suggested Outreach
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}