import { Target, Save } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner@2.0.3';

export function YourGoals() {
  const [formData, setFormData] = useState({
    professionalGoal: 'Build strategic partnerships with B2B SaaS companies in the marketing automation space',
    shortTermObjective: 'Connect with 5-7 potential co-marketing partners this quarter to expand brand reach',
    intentDescription: 'Looking to collaborate with complementary SaaS products that serve the same target audience (marketing teams at mid-size B2B companies). Ideal partnerships would involve co-created content, webinar collaborations, and mutual referral programs. Success means establishing 2-3 active partnerships generating qualified leads for both parties.',
    selectedOpportunities: ['Strategic Partnerships', 'Co-Marketing', 'Content Collaboration']
  });

  const handleSave = () => {
    toast.success('Goals saved successfully!');
  };

  const handleOpportunityToggle = (type: string) => {
    setFormData(prev => ({
      ...prev,
      selectedOpportunities: prev.selectedOpportunities.includes(type)
        ? prev.selectedOpportunities.filter(t => t !== type)
        : [...prev.selectedOpportunities, type]
    }));
  };

  return (
    <div className="bg-slate-900/50 rounded-xl border border-cyan-500/30 p-6 shadow-lg shadow-cyan-500/5">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Target className="w-5 h-5 text-cyan-400" />
          <h2 className="text-cyan-400">Your Goals</h2>
        </div>
        <button
          onClick={handleSave}
          className="flex items-center gap-2 px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-lg border border-cyan-500/30 hover:bg-cyan-500/30 transition-all"
        >
          <Save className="w-4 h-4" />
          Save Changes
        </button>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-slate-300 mb-2">Professional Goal</label>
          <input
            type="text"
            value={formData.professionalGoal}
            onChange={(e) => setFormData({ ...formData, professionalGoal: e.target.value })}
            placeholder="e.g., Build strategic partnerships with B2B SaaS companies"
            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50"
          />
        </div>

        <div>
          <label className="block text-slate-300 mb-2">Short-Term Objective</label>
          <input
            type="text"
            value={formData.shortTermObjective}
            onChange={(e) => setFormData({ ...formData, shortTermObjective: e.target.value })}
            placeholder="e.g., Connect with 5 potential co-marketing partners this quarter"
            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50"
          />
        </div>

        <div>
          <label className="block text-slate-300 mb-2">Types of Opportunities Sought</label>
          <div className="grid grid-cols-2 gap-3">
            {[
              'Strategic Partnerships',
              'Co-Marketing',
              'Integration Partners',
              'Referral Programs',
              'Joint Ventures',
              'Content Collaboration',
            ].map((type) => (
              <label key={type} className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                formData.selectedOpportunities.includes(type)
                  ? 'bg-cyan-500/20 border-cyan-500/50'
                  : 'bg-slate-800/30 border-slate-700/50 hover:border-cyan-500/30'
              }`}>
                <input 
                  type="checkbox" 
                  checked={formData.selectedOpportunities.includes(type)}
                  onChange={() => handleOpportunityToggle(type)}
                  className="w-4 h-4 rounded border-slate-600 text-cyan-500 focus:ring-cyan-500/50" 
                />
                <span className="text-slate-300">{type}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-slate-300 mb-2">Intent Description</label>
          <textarea
            rows={4}
            value={formData.intentDescription}
            onChange={(e) => setFormData({ ...formData, intentDescription: e.target.value })}
            placeholder="Describe what you're looking to achieve, your ideal collaboration scenario, and what success looks like..."
            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50"
          />
        </div>
      </div>
    </div>
  );
}