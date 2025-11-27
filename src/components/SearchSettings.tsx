import { Settings, Save } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner@2.0.3';

export function SearchSettings() {
  const [formData, setFormData] = useState({
    frequency: 'daily',
    playwrightMode: 'headless',
    crawlDepth: 3,
    allowedDomains: 'linkedin.com, twitter.com, producthunt.com, indiehackers.com, medium.com, substack.com',
    blockedDomains: ''
  });

  const handleSave = () => {
    toast.success('Search settings saved successfully!');
  };

  return (
    <div className="bg-slate-900/50 rounded-xl border border-violet-500/30 p-6 shadow-lg shadow-violet-500/5">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Settings className="w-5 h-5 text-violet-400" />
          <h2 className="text-violet-400">Search Settings</h2>
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
          <label className="block text-slate-300 mb-2">Search Frequency</label>
          <select 
            value={formData.frequency}
            onChange={(e) => setFormData({ ...formData, frequency: e.target.value })}
            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-100 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50"
          >
            <option value="daily">Daily (Recommended)</option>
            <option value="12h">Every 12 hours</option>
            <option value="6h">Every 6 hours</option>
            <option value="weekly">Weekly</option>
          </select>
        </div>

        <div>
          <label className="block text-slate-300 mb-2">Playwright Mode</label>
          <div className="grid grid-cols-2 gap-3">
            <label className={`flex items-center gap-3 p-4 rounded-lg border cursor-pointer transition-all ${
              formData.playwrightMode === 'headless'
                ? 'bg-violet-500/20 border-violet-500/50'
                : 'bg-slate-800/30 border-slate-700/50 hover:border-violet-500/30'
            }`}>
              <input 
                type="radio" 
                name="playwright-mode" 
                value="headless"
                checked={formData.playwrightMode === 'headless'}
                onChange={(e) => setFormData({ ...formData, playwrightMode: e.target.value })}
                className="w-4 h-4 text-violet-500 focus:ring-violet-500/50" 
              />
              <div>
                <div className="text-slate-300">Headless</div>
                <div className="text-slate-500">Faster, recommended</div>
              </div>
            </label>
            <label className={`flex items-center gap-3 p-4 rounded-lg border cursor-pointer transition-all ${
              formData.playwrightMode === 'stealth'
                ? 'bg-violet-500/20 border-violet-500/50'
                : 'bg-slate-800/30 border-slate-700/50 hover:border-violet-500/30'
            }`}>
              <input 
                type="radio" 
                name="playwright-mode" 
                value="stealth"
                checked={formData.playwrightMode === 'stealth'}
                onChange={(e) => setFormData({ ...formData, playwrightMode: e.target.value })}
                className="w-4 h-4 text-violet-500 focus:ring-violet-500/50" 
              />
              <div>
                <div className="text-slate-300">Stealth</div>
                <div className="text-slate-500">More discreet</div>
              </div>
            </label>
          </div>
        </div>

        <div>
          <label className="block text-slate-300 mb-2">Crawl Depth</label>
          <div className="flex items-center gap-4">
            <input
              type="range"
              min="1"
              max="5"
              value={formData.crawlDepth}
              onChange={(e) => setFormData({ ...formData, crawlDepth: parseInt(e.target.value) })}
              className="flex-1 h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #8b5cf6 0%, #8b5cf6 ${(formData.crawlDepth - 1) * 25}%, #1e293b ${(formData.crawlDepth - 1) * 25}%, #1e293b 100%)`
              }}
            />
            <span className="text-violet-400 px-3 py-1 rounded-lg bg-slate-800/50 border border-slate-700/50 w-24 text-center font-mono">
              {formData.crawlDepth} level{formData.crawlDepth > 1 ? 's' : ''}
            </span>
          </div>
          <p className="text-slate-500 mt-2">How many clicks deep to scan each site</p>
        </div>

        <div>
          <label className="block text-slate-300 mb-2">Allowed Domains</label>
          <textarea
            rows={3}
            value={formData.allowedDomains}
            onChange={(e) => setFormData({ ...formData, allowedDomains: e.target.value })}
            placeholder="linkedin.com, twitter.com, producthunt.com, indiehackers.com"
            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50"
          />
        </div>

        <div>
          <label className="block text-slate-300 mb-2">Blocked Domains</label>
          <textarea
            rows={3}
            value={formData.blockedDomains}
            onChange={(e) => setFormData({ ...formData, blockedDomains: e.target.value })}
            placeholder="spam-site.com, low-quality.net"
            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50"
          />
        </div>

        <div className="p-4 bg-slate-800/30 rounded-lg border border-slate-700/50">
          <div className="text-slate-300 mb-2">Query Expansion Preview</div>
          <div className="flex flex-wrap gap-2">
            {[
              'B2B SaaS partnerships',
              'co-marketing opportunities',
              'strategic alliances',
              'integration partners',
              'referral programs',
            ].map((query) => (
              <span key={query} className="px-3 py-1 bg-violet-500/20 text-violet-300 rounded-full border border-violet-500/30">
                {query}
              </span>
            ))}
          </div>
          <p className="text-slate-500 mt-3">
            These expanded queries will be used alongside your primary criteria
          </p>
        </div>
      </div>
    </div>
  );
}