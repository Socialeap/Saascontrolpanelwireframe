import { Filter, Save } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner@2.0.3';

export function LeadCriteria() {
  const [formData, setFormData] = useState({
    industries: 'B2B SaaS, Marketing Automation, Sales Enablement, Analytics & BI',
    selectedRoles: ['Founder / CEO', 'VP Marketing', 'Head of Partnerships'],
    painPointsTheyNeed: 'Lead generation challenges, difficulty proving marketing ROI, content distribution and reach, customer acquisition costs, attribution modeling',
    painPointsYouSolve: 'Audience reach and brand awareness, content amplification, qualified lead generation, thought leadership positioning, community access',
    excluded: 'Agencies, Consultants, Individual freelancers, Companies under 5 employees'
  });

  const handleSave = () => {
    toast.success('Lead criteria saved successfully!');
  };

  const handleRoleToggle = (role: string) => {
    setFormData(prev => ({
      ...prev,
      selectedRoles: prev.selectedRoles.includes(role)
        ? prev.selectedRoles.filter(r => r !== role)
        : [...prev.selectedRoles, role]
    }));
  };

  return (
    <div className="bg-slate-900/50 rounded-xl border border-violet-500/30 p-6 shadow-lg shadow-violet-500/5">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Filter className="w-5 h-5 text-violet-400" />
          <h2 className="text-violet-400">Lead Criteria</h2>
        </div>
        <button
          onClick={handleSave}
          className="flex items-center gap-2 px-4 py-2 bg-violet-500/20 text-violet-400 rounded-lg border border-violet-500/30 hover:bg-violet-500/30 transition-all"
        >
          <Save className="w-4 h-4" />
          Save Changes
        </button>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-slate-300 mb-2">Industries of Interest</label>
          <input
            type="text"
            value={formData.industries}
            onChange={(e) => setFormData({ ...formData, industries: e.target.value })}
            placeholder="e.g., B2B SaaS, FinTech, HR Tech, Sales Enablement"
            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50"
          />
        </div>

        <div>
          <label className="block text-slate-300 mb-2">Roles to Target</label>
          <div className="grid grid-cols-2 gap-3">
            {[
              'Founder / CEO',
              'VP Marketing',
              'VP Sales',
              'Head of Partnerships',
              'Product Manager',
              'Business Development',
            ].map((role) => (
              <label key={role} className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                formData.selectedRoles.includes(role)
                  ? 'bg-violet-500/20 border-violet-500/50'
                  : 'bg-slate-800/30 border-slate-700/50 hover:border-violet-500/30'
              }`}>
                <input 
                  type="checkbox" 
                  checked={formData.selectedRoles.includes(role)}
                  onChange={() => handleRoleToggle(role)}
                  className="w-4 h-4 rounded border-slate-600 text-violet-500 focus:ring-violet-500/50" 
                />
                <span className="text-slate-300">{role}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-slate-300 mb-2">Pain Points They Need Solved</label>
            <textarea
              rows={4}
              value={formData.painPointsTheyNeed}
              onChange={(e) => setFormData({ ...formData, painPointsTheyNeed: e.target.value })}
              placeholder="e.g., Lead generation, customer retention, marketing attribution..."
              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50"
            />
          </div>

          <div>
            <label className="block text-slate-300 mb-2">Pain Points You Can Solve</label>
            <textarea
              rows={4}
              value={formData.painPointsYouSolve}
              onChange={(e) => setFormData({ ...formData, painPointsYouSolve: e.target.value })}
              placeholder="e.g., Content distribution, audience reach, brand awareness..."
              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50"
            />
          </div>
        </div>

        <div>
          <label className="block text-slate-300 mb-2">Excluded Categories</label>
          <input
            type="text"
            value={formData.excluded}
            onChange={(e) => setFormData({ ...formData, excluded: e.target.value })}
            placeholder="e.g., Agencies, Consultants, Freelancers"
            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50"
          />
        </div>
      </div>
    </div>
  );
}