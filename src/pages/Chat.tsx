export default function Chat() {
  return (
    <div className="flex flex-col h-screen pt-16 md:pt-0 relative bg-surface">

      {/* Chat Header */}
      <div className="sticky top-16 md:top-0 z-20 w-full bg-surface/90 backdrop-blur-sm border-b border-outline-variant/30 py-3 px-4 md:px-12 shrink-0">
        <div className="flex justify-center">
          <div className="bg-surface-container rounded-full p-1 flex items-center shadow-sm">
            <button className="px-4 py-1.5 rounded-full bg-surface shadow-sm font-label-md text-primary transition-all">
              ID
            </button>

            <span className="material-symbols-outlined text-outline mx-2 text-[18px]">
              swap_horiz
            </span>

            <button className="px-4 py-1.5 rounded-full text-on-surface-variant font-label-md hover:text-primary transition-all">
              JV
            </button>
          </div>
        </div>
      </div>

      {/* Chat History */}
      <div className="flex-1 overflow-y-auto chat-scroll relative px-4 md:px-12 py-6 md:py-8 pb-44 md:pb-36">

        {/* Watermark */}
        <div className="absolute inset-0 batik-watermark opacity-50 pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl mx-auto flex flex-col gap-6">

          {/* Date */}
          <div className="flex justify-center">
            <span className="font-label-sm text-outline bg-surface-container px-3 py-1 rounded-full">
              Today, 10:42 AM
            </span>
          </div>

          {/* User Bubble */}
          <div className="flex justify-end">
            <div className="max-w-[92%] sm:max-w-[85%] md:max-w-[70%] bg-surface-container-highest text-on-surface rounded-2xl rounded-tr-sm px-5 py-4 shadow-sm">
              <p className="font-body-md">
                Apa bahasa jawanya balas?
              </p>
            </div>
          </div>

          {/* AI Bubble */}
          <div className="flex justify-start gap-3">

            {/* Avatar */}
            <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center shrink-0 mt-1 shadow-sm">
              <span
                className="material-symbols-outlined text-[18px]"
                style={{
                  fontVariationSettings: "'FILL' 1",
                }}
              >
                smart_toy
              </span>
            </div>

            {/* Bubble */}
            <div className="max-w-[92%] sm:max-w-[85%] md:max-w-[70%] bg-surface border border-outline-variant/20 rounded-2xl rounded-tl-sm px-5 py-4 shadow-sm">

              <p className="font-body-md">
                Dalam bahasa Jawa, kata <b>balas</b> diterjemahkan menjadi{" "}
                <b>wales</b>.
              </p>

              <div className="mt-4 pt-3 border-t border-outline-variant/30 flex gap-2">

                <button
                  className="text-outline hover:text-primary transition-colors p-1"
                  title="Copy"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    content_copy
                  </span>
                </button>

                <button
                  className="text-outline hover:text-primary transition-colors p-1"
                  title="Listen"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    volume_up
                  </span>
                </button>

              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Input */}
      <div className="fixed bottom-0 left-0 right-0 md:left-64 bg-gradient-to-t from-surface via-surface/95 to-transparent pt-8 pb-4 px-4 md:px-12 z-30">

        <div className="max-w-3xl mx-auto flex items-end gap-2 md:gap-3">

          {/* Input Box */}
          <div className="flex-1 bg-surface rounded-xl border border-outline-variant/30 shadow-sm flex items-center px-3 py-2 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">

            <button className="text-on-surface-variant hover:text-primary transition-colors p-2 shrink-0">
              <span className="material-symbols-outlined">
                mic
              </span>
            </button>

            <input
              type="text"
              placeholder="Ask anything about Javanese..."
              className="w-full bg-transparent outline-none border-none px-3 py-2 text-sm md:text-base placeholder:text-on-surface-variant/60"
            />

          </div>

          {/* Send */}
          <button className="bg-primary hover:bg-primary-container text-white rounded-xl w-11 h-11 md:w-12 md:h-12 shrink-0 shadow-sm transition-colors flex items-center justify-center">
            <span className="material-symbols-outlined">
              send
            </span>
          </button>

        </div>

      </div>

    </div>
  );
}