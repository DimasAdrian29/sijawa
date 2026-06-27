export default function Chat() {
  return (
    <div className="flex-1 flex flex-col h-full relative">
      {/* Chat Header */}
      <div className="w-full bg-surface/90 backdrop-blur-sm border-b border-outline-variant/30 py-3 px-4 md:px-12 flex justify-center items-center z-30 shrink-0">
        <div className="bg-surface-container rounded-full p-1 flex items-center shadow-sm">
          <button className="px-4 py-1.5 rounded-full bg-surface shadow-sm font-label-md text-primary transition-all">ID</button>
          <span className="material-symbols-outlined text-outline mx-2 text-[18px]">swap_horiz</span>
          <button className="px-4 py-1.5 rounded-full text-on-surface-variant font-label-md hover:text-primary transition-all">JV</button>
        </div>
      </div>

      {/* Chat History */}
      <div className="flex-1 overflow-y-auto chat-scroll px-4 md:px-12 py-8 relative">
        <div className="absolute inset-0 batik-watermark opacity-50 pointer-events-none"></div>
        <div className="max-w-3xl mx-auto flex flex-col gap-6 relative z-10 pb-24">
          
          <div className="flex justify-center mb-4">
            <span className="font-label-sm text-outline bg-surface-container px-3 py-1 rounded-full">Today, 10:42 AM</span>
          </div>

          {/* User Bubble */}
          <div className="flex justify-end w-full">
            <div className="max-w-[85%] md:max-w-[70%] bg-surface-container-highest text-on-surface rounded-2xl rounded-tr-sm px-5 py-4 shadow-sm">
              <p className="font-body-md">Apa bahasa jawanya balas?</p>
            </div>
          </div>

          {/* AI Response Bubble */}
          <div className="flex justify-start w-full gap-3">
            <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center shrink-0 shadow-sm mt-1">
              <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>smart_toy</span>
            </div>
            <div className="max-w-[85%] md:max-w-[70%] bg-surface text-on-surface rounded-2xl rounded-tl-sm px-5 py-4 shadow-sm border border-outline-variant/20">
              <p className="font-body-md mb-3">Dalam bahasa Jawa, balas disebut wales</p>
              <div className="mt-4 pt-3 border-t border-outline-variant/30 flex gap-2">
                <button className="text-outline hover:text-primary transition-colors p-1" title="Copy">
                  <span className="material-symbols-outlined text-[20px]">content_copy</span>
                </button>
                <button className="text-outline hover:text-primary transition-colors p-1" title="Listen">
                  <span className="material-symbols-outlined text-[20px]">volume_up</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-surface via-surface/90 to-transparent pt-10 pb-6 px-4 md:px-12 z-30">
        <div className="max-w-3xl mx-auto flex items-center gap-3">
          <div className="flex-1 bg-surface shadow-sm rounded-xl border border-outline-variant/30 flex items-center px-4 py-2 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
            <button className="text-on-surface-variant hover:text-primary transition-colors p-2 shrink-0">
              <span className="material-symbols-outlined">mic</span>
            </button>
            <input 
              className="w-full bg-transparent border-none focus:ring-0 font-body-md text-on-surface placeholder:text-on-surface-variant/50 px-3 py-2 outline-none" 
              placeholder="Ask anything about Javanese..." 
              type="text" 
            />
          </div>
          <button className="bg-primary hover:bg-primary-container text-white rounded-xl w-12 h-12 flex items-center justify-center shrink-0 shadow-sm transition-colors">
            <span className="material-symbols-outlined">send</span>
          </button>
        </div>
      </div>
    </div>
  );
}