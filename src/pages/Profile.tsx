import { useState } from 'react';

export default function Profile() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className="flex-1 overflow-y-auto h-full p-4 md:p-12 w-full max-w-[1200px] mx-auto relative z-10">
      
      {/* Mobile Top Nav Placeholder */}
      <div className="md:hidden flex justify-between items-center mb-8 pt-4">
        <h1 className="text-[24px] font-bold text-primary">SiJawa</h1>
      </div>
      
      <div className="max-w-3xl mx-auto space-y-8 pb-20 md:pb-8">
        
        {/* Profile Header */}
        <section className="flex flex-col items-center justify-center text-center space-y-4">
          <div className="relative">
            <img 
              alt="Budi Santoso Avatar Large" 
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-surface-container-highest shadow-sm" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjadftfU16ZSb7v70aRUj0ZeszVYsYGFNfN2pFix1k2uhJw78l3ubZGxIDRq0x6dio1uGHWiynO9e1k_z-8FwDaTArJxBq90wZxxVRIEqTxE0jucJHSVgLMsyayyqbWUg5YdEdr-0WLb129bMWIDnmwH2hevQiZzdR6oPtL231ihAL5_w-6uv3f4l8GdK1H56q-IwLh8jFL2WkrQfF55hdXAMpltJNmj7AW_tAC7F_fpfLeX-OfUuBlQ" 
            />
            <div className="absolute bottom-0 right-0 bg-[#f6be3b] text-[#5c4300] p-2 rounded-full border-2 border-surface flex items-center justify-center" title="Ngoko Master">
              <span className="material-symbols-outlined text-xl">verified</span>
            </div>
          </div>
          <div>
            <h1 className="text-[28px] md:text-[32px] font-bold text-on-surface">Budi Santoso</h1>
            <p className="text-on-surface-variant flex items-center justify-center gap-2 mt-1">
              <span className="material-symbols-outlined text-[#956e00] text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>military_tech</span>
              Ngoko Master
            </p>
          </div>
        </section>

        {/* Gamification Stats Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm flex flex-col items-center justify-center text-center space-y-2 relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-2 bg-primary/10"></div>
            <div className="w-12 h-12 rounded-full bg-primary-fixed/30 flex items-center justify-center text-primary mb-2">
              <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
            </div>
            <h3 className="text-[12px] font-bold text-on-surface-variant uppercase tracking-wider">Current Streak</h3>
            <p className="text-[24px] font-bold text-on-surface">12 Days</p>
          </div>
          <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm flex flex-col items-center justify-center text-center space-y-2 relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#ffa26a]/20"></div>
            <div className="w-12 h-12 rounded-full bg-[#ffdbc9]/30 flex items-center justify-center text-secondary mb-2">
              <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>menu_book</span>
            </div>
            <h3 className="text-[12px] font-bold text-on-surface-variant uppercase tracking-wider">Words Learned</h3>
            <p className="text-[24px] font-bold text-on-surface">450</p>
          </div>
          <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm flex flex-col items-center justify-center text-center space-y-2 relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#ffdea0]/30"></div>
            <div className="w-12 h-12 rounded-full bg-[#ffdea0]/30 flex items-center justify-center text-[#956e00] mb-2">
              <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>emoji_events</span>
            </div>
            <h3 className="text-[12px] font-bold text-on-surface-variant uppercase tracking-wider">Game Score</h3>
            <p className="text-[24px] font-bold text-on-surface">12,450 XP</p>
          </div>
        </section>

        {/* Settings List */}
        <section className="bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden">
          <div className="flex flex-col">
            <a className="flex items-center justify-between p-4 md:p-6 border-b border-surface-variant hover:bg-surface-container-low transition-colors group" href="#">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant group-hover:bg-primary-fixed group-hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">person</span>
                </div>
                <span className="text-lg text-on-surface">Edit Profile</span>
              </div>
              <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
            </a>
            
            <a className="flex items-center justify-between p-4 md:p-6 border-b border-surface-variant hover:bg-surface-container-low transition-colors group" href="#">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant group-hover:bg-primary-fixed group-hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">translate</span>
                </div>
                <span className="text-lg text-on-surface">Language Preference</span>
              </div>
              <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
            </a>

            {/* Dark Mode Toggle yang dikonversi dari script HTML */}
            <div 
              className="flex items-center justify-between p-4 md:p-6 border-b border-surface-variant hover:bg-surface-container-low transition-colors group cursor-pointer"
              onClick={() => setIsDarkMode(!isDarkMode)}
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant group-hover:bg-primary-fixed group-hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">dark_mode</span>
                </div>
                <span className="text-lg text-on-surface">Dark Mode</span>
              </div>
              <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
                <input 
                  type="checkbox"
                  checked={isDarkMode}
                  onChange={(e) => setIsDarkMode(e.target.checked)}
                  className={`absolute block w-6 h-6 rounded-full bg-surface border-4 appearance-none cursor-pointer transition-transform duration-200 ease-in-out ${isDarkMode ? 'translate-x-6 border-primary' : 'translate-x-0 border-surface-variant'}`}
                  style={{ top: '2px', left: '2px' }}
                />
                <label className={`block overflow-hidden h-7 rounded-full cursor-pointer transition-colors ${isDarkMode ? 'bg-[#ffdbc8]' : 'bg-surface-variant'}`}></label>
              </div>
            </div>

            <a className="flex items-center justify-between p-4 md:p-6 border-b border-surface-variant hover:bg-surface-container-low transition-colors group" href="#">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant group-hover:bg-primary-fixed group-hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">help</span>
                </div>
                <span className="text-lg text-on-surface">Help Center</span>
              </div>
              <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
            </a>

            <a className="flex items-center justify-between p-4 md:p-6 hover:bg-error-container/20 transition-colors group" href="#">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-error-container/30 flex items-center justify-center text-error group-hover:bg-error group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">logout</span>
                </div>
                <span className="text-lg text-error font-medium">Log Out</span>
              </div>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}