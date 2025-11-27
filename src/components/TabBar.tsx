interface Tab {
  id: string;
  label: string;
}

interface TabBarProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export function TabBar({ tabs, activeTab, onTabChange }: TabBarProps) {
  return (
    <div className="bg-slate-900/50 border-b border-slate-800">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex gap-1">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`
                  px-6 py-4 relative transition-all duration-200
                  ${
                    isActive
                      ? 'text-cyan-400 bg-slate-800/50'
                      : 'text-slate-400 hover:text-slate-300 hover:bg-slate-800/30'
                  }
                `}
              >
                {tab.label}
                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-violet-500 shadow-lg shadow-cyan-500/50"></div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
