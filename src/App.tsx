import { useState } from 'react';
import { Toaster } from 'sonner@2.0.3';
import { Header } from './components/Header';
import { TabBar } from './components/TabBar';
import { SystemStatus } from './components/SystemStatus';
import { YourGoals } from './components/YourGoals';
import { LeadCriteria } from './components/LeadCriteria';
import { MatchingPriorities } from './components/MatchingPriorities';
import { SearchSettings } from './components/SearchSettings';
import { DailyOutput } from './components/DailyOutput';

export default function App() {
  const [activeTab, setActiveTab] = useState('system-status');

  const tabs = [
    { id: 'system-status', label: 'System Status' },
    { id: 'your-goals', label: 'Your Goals' },
    { id: 'lead-criteria', label: 'Lead Criteria' },
    { id: 'matching-priorities', label: 'Matching Priorities' },
    { id: 'search-settings', label: 'Search Settings' },
    { id: 'daily-output', label: 'Daily Output' },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'system-status':
        return <SystemStatus />;
      case 'your-goals':
        return <YourGoals />;
      case 'lead-criteria':
        return <LeadCriteria />;
      case 'matching-priorities':
        return <MatchingPriorities />;
      case 'search-settings':
        return <SearchSettings />;
      case 'daily-output':
        return <DailyOutput />;
      default:
        return <SystemStatus />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <Toaster position="top-right" theme="dark" richColors />
      <Header />
      <TabBar tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="container mx-auto px-6 py-8 max-w-7xl">
        {renderTabContent()}
      </main>
    </div>
  );
}