export default function Game() {
    const words = ['Mangan', 'Turon', 'Aku', 'Arep', 'Sego'];

    return (
        <div className="flex-1 flex flex-col overflow-hidden h-full bg-surface relative z-10">
            {/* Header: Progress Bar */}
            <header className="flex items-center justify-between px-4 py-4 w-full">
                <button aria-label="Tutup Latihan" className="text-on-surface-variant hover:text-on-surface transition-colors p-2 -ml-2 rounded-full focus:outline-none focus:ring-2 focus:ring-outline-variant">
                    <span className="material-symbols-outlined text-2xl">close</span>
                </button>
                {/* PERBAIKAN: Ubah nilai string "100" menjadi angka {100} */}
                <div aria-valuemax={100} aria-valuemin={0} aria-valuenow={75} className="flex-1 mx-4 bg-surface-variant rounded-full h-3 overflow-hidden relative" role="progressbar">
                    <div className="bg-primary h-full rounded-full w-[75%] relative">
                        <div className="absolute top-0 left-0 w-full h-1 bg-white/30 rounded-t-full"></div>
                    </div>
                </div>
                <div className="flex items-center gap-1 text-error font-bold text-[24px]">
                    <span className="material-symbols-outlined text-error" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                    <span className="leading-none text-error">5</span>
                </div>
            </header>

            {/* Main Content Area */}
            <main className="flex-1 px-4 md:px-8 flex flex-col pt-6 pb-20 overflow-y-auto max-w-3xl mx-auto w-full">
                <h1 className="text-[28px] font-bold text-on-surface mb-8">
                    Terjemahkan kalimat ini ke bahasa Jawa: <br />
                    <span className="text-primary-container">"Saya Mau Makan"</span>
                </h1>

                <div className="flex items-end mb-8 relative">
                    <div className="w-24 h-24 flex-shrink-0 relative">
                        <img alt="Karakter maskot SiJawa" className="w-full h-full object-contain drop-shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCl6ut324IHQQTz6-hSH_OTxonL4b8MC20GmfnIkkOsTSL5WxXWpYFfV0RlNoVeUv58YXvqa5NSqRJddrC8_AdgFkneYGv4a36b-CMC0y9rVaYBTS0Xl2R41623_9HfEo8XotEGGUL2SNOQkkMfq1uunQseX7YRFjF77OWDL3tbUJB9_21t1k_zs6bgtYPiqLZGVPBz1FscZlpczFZ8D7CZmuzi8fYRu-88yjTT8jGxpg9BzplE09e5ig" />
                    </div>
                    <div className="ml-4 mb-4 relative bg-surface-container-lowest border border-outline-variant rounded-xl rounded-bl-none p-4 shadow-sm min-w-[120px]">
                        {/* Segitiga Ekor Chat */}
                        <div className="absolute -left-[9px] bottom-0 w-4 h-4 bg-surface-container-lowest border-l border-b border-outline-variant" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)', bottom: '-1px', left: '-9px' }}></div>
                        <p className="text-lg text-on-surface">Aku arep...</p>
                    </div>
                </div>

                <div className="w-full min-h-[64px] border-2 border-dashed border-outline-variant rounded-xl mb-10 flex flex-wrap items-center p-2 gap-2 bg-surface-container-low/50 relative">
                    <span className="w-full text-center text-sm font-bold text-on-surface-variant opacity-50 absolute left-0 pointer-events-none">Tarik kata ke sini</span>
                </div>

                <div className="flex flex-wrap justify-center gap-x-3 gap-y-4">
                    {words.map((word) => (
                        <button key={word} className="bg-surface-container-lowest border-2 border-outline-variant rounded-xl px-5 py-3 text-[24px] font-semibold text-on-surface shadow-[0_4px_0_0_#dcc1b3] active:shadow-none active:translate-y-1 select-none focus:outline-none focus:ring-2 focus:ring-primary-container transition-all">
                            {word}
                        </button>
                    ))}
                </div>
                <div className="h-10"></div>
            </main>

            <footer className="p-4 bg-surface border-t border-outline-variant/30 pb-8 sm:pb-6">
                <button className="w-full bg-primary text-white font-bold text-[28px] py-4 rounded-xl shadow-[0_4px_0_0_#743500] active:shadow-none active:translate-y-1 flex justify-center items-center gap-2 focus:outline-none focus:ring-4 focus:ring-primary/30 transition-all">
                    Check
                </button>
            </footer>
        </div>
    );
}