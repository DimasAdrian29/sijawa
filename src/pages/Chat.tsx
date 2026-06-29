import { useState, useRef, useEffect } from "react";

const API_URL = "https://Dimas2005-sijawa-api.hf.space";

type Direction = "id_to_jawa" | "jawa_to_id";

interface Message {
  id: number;
  role: "user" | "ai";
  text: string;
  timestamp: string;
}

function getTimestamp() {
  return new Date().toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function TypingDots() {
  return (
    <div className="flex items-center gap-1 py-1">
      <span
        className="w-2 h-2 rounded-full bg-on-surface-variant/50 animate-bounce"
        style={{ animationDelay: "0ms" }}
      />
      <span
        className="w-2 h-2 rounded-full bg-on-surface-variant/50 animate-bounce"
        style={{ animationDelay: "150ms" }}
      />
      <span
        className="w-2 h-2 rounded-full bg-on-surface-variant/50 animate-bounce"
        style={{ animationDelay: "300ms" }}
      />
    </div>
  );
}

export default function Chat() {
  const [direction, setDirection] = useState<Direction>("id_to_jawa");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const fromLang = direction === "id_to_jawa" ? "ID" : "JV";
  const toLang = direction === "id_to_jawa" ? "JV" : "ID";
  const placeholder =
    direction === "id_to_jawa"
      ? "Ketik kata atau kalimat dalam Bahasa Indonesia..."
      : "Ketik kata utawa ukara ing Basa Jawa...";

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  function toggleDirection() {
    setDirection((prev) =>
      prev === "id_to_jawa" ? "jawa_to_id" : "id_to_jawa"
    );
    setInput("");
    inputRef.current?.focus();
  }

  async function handleSend() {
    const text = input.trim();
    if (!text || isLoading) return;

    const userMsg: Message = {
      id: Date.now(),
      role: "user",
      text,
      timestamp: getTimestamp(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch(`${API_URL}/translate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, direction }),
      });

      if (!res.ok) throw new Error("API error");
      const data = await res.json();

      const aiMsg: Message = {
        id: Date.now() + 1,
        role: "ai",
        text: data.result,
        timestamp: getTimestamp(),
      };
      setMessages((prev) => [...prev, aiMsg]);
    } catch {
      const errMsg: Message = {
        id: Date.now() + 1,
        role: "ai",
        text: "Gagal menghubungi server. Coba beberapa saat lagi.",
        timestamp: getTimestamp(),
      };
      setMessages((prev) => [...prev, errMsg]);
    } finally {
      setIsLoading(false);
      inputRef.current?.focus();
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  function handleCopy(id: number, text: string) {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  }

  return (
    <div className="flex flex-col h-screen pt-16 md:pt-0 relative bg-surface">

      {/* Chat Header */}
      <div className="sticky top-16 md:top-0 z-20 w-full bg-surface/90 backdrop-blur-sm border-b border-outline-variant/30 py-3 px-4 md:px-12 shrink-0">
        <div className="flex justify-center">
          <div className="bg-surface-container rounded-full p-1 flex items-center shadow-sm">

            {/* From lang */}
            <button
              onClick={toggleDirection}
              className={`px-4 py-1.5 rounded-full font-label-md transition-all ${
                direction === "id_to_jawa"
                  ? "bg-surface shadow-sm text-primary"
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              ID
            </button>

            {/* Swap button */}
            <button
              onClick={toggleDirection}
              className="text-outline hover:text-primary transition-colors mx-1"
              title="Balik arah terjemahan"
            >
              <span className="material-symbols-outlined text-[18px]">
                swap_horiz
              </span>
            </button>

            {/* To lang */}
            <button
              onClick={toggleDirection}
              className={`px-4 py-1.5 rounded-full font-label-md transition-all ${
                direction === "jawa_to_id"
                  ? "bg-surface shadow-sm text-primary"
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              JV
            </button>

          </div>
        </div>

        {/* Direction label */}
        <div className="flex justify-center mt-1.5">
          <span className="font-label-sm text-outline/70 text-xs">
            {direction === "id_to_jawa"
              ? "Indonesia → Jawa"
              : "Jawa → Indonesia"}
          </span>
        </div>
      </div>

      {/* Chat History */}
      <div className="flex-1 overflow-y-auto chat-scroll relative px-4 md:px-12 py-6 md:py-8 pb-44 md:pb-36">

        {/* Watermark */}
        <div className="absolute inset-0 batik-watermark opacity-50 pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto flex flex-col gap-6">

          {/* Empty state */}
          {messages.length === 0 && !isLoading && (
            <div className="flex flex-col items-center justify-center gap-3 mt-16 text-center">
              <div className="w-14 h-14 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center shadow-sm">
                <span
                  className="material-symbols-outlined text-[28px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  translate
                </span>
              </div>
              <p className="font-body-md text-on-surface-variant">
                Masukkan kata atau kalimat untuk diterjemahkan
              </p>
              <p className="font-label-sm text-outline/60 text-xs">
                Arah terjemahan:{" "}
                <span className="text-primary font-medium">
                  {fromLang} → {toLang}
                </span>
              </p>
            </div>
          )}

          {/* Date separator — shown once at top if there are messages */}
          {messages.length > 0 && (
            <div className="flex justify-center">
              <span className="font-label-sm text-outline bg-surface-container px-3 py-1 rounded-full">
                {new Date().toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>
          )}

          {/* Messages */}
          {messages.map((msg) =>
            msg.role === "user" ? (
              /* User Bubble */
              <div key={msg.id} className="flex justify-end">
                <div className="max-w-[92%] sm:max-w-[85%] md:max-w-[70%]">
                  <div className="bg-surface-container-highest text-on-surface rounded-2xl rounded-tr-sm px-5 py-4 shadow-sm">
                    <p className="font-body-md">{msg.text}</p>
                  </div>
                  <p className="text-right font-label-sm text-outline/50 text-xs mt-1 pr-1">
                    {msg.timestamp}
                  </p>
                </div>
              </div>
            ) : (
              /* AI Bubble */
              <div key={msg.id} className="flex justify-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center shrink-0 mt-1 shadow-sm">
                  <span
                    className="material-symbols-outlined text-[18px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    smart_toy
                  </span>
                </div>

                <div className="max-w-[92%] sm:max-w-[85%] md:max-w-[70%]">
                  <div className="bg-surface border border-outline-variant/20 rounded-2xl rounded-tl-sm px-5 py-4 shadow-sm">
                    <p className="font-body-md">
                      {msg.text}
                    </p>

                    <div className="mt-4 pt-3 border-t border-outline-variant/30 flex gap-2">
                      <button
                        onClick={() => handleCopy(msg.id, msg.text)}
                        className="text-outline hover:text-primary transition-colors p-1"
                        title="Salin teks"
                      >
                        <span className="material-symbols-outlined text-[20px]">
                          {copiedId === msg.id ? "check" : "content_copy"}
                        </span>
                      </button>

                      <button
                        className="text-outline hover:text-primary transition-colors p-1"
                        title="Dengarkan"
                        onClick={() => {
                          const utterance = new SpeechSynthesisUtterance(msg.text);
                          utterance.lang = direction === "id_to_jawa" ? "jv" : "id";
                          window.speechSynthesis.speak(utterance);
                        }}
                      >
                        <span className="material-symbols-outlined text-[20px]">
                          volume_up
                        </span>
                      </button>
                    </div>
                  </div>

                  <p className="font-label-sm text-outline/50 text-xs mt-1 pl-1">
                    {msg.timestamp}
                  </p>
                </div>
              </div>
            )
          )}

          {/* Loading / Typing indicator */}
          {isLoading && (
            <div className="flex justify-start gap-3">
              <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center shrink-0 mt-1 shadow-sm">
                <span
                  className="material-symbols-outlined text-[18px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  smart_toy
                </span>
              </div>
              <div className="bg-surface border border-outline-variant/20 rounded-2xl rounded-tl-sm px-5 py-4 shadow-sm">
                <TypingDots />
              </div>
            </div>
          )}

          <div ref={bottomRef} />
        </div>
      </div>

      {/* Input */}
      <div className="fixed bottom-0 left-0 right-0 md:left-64 bg-gradient-to-t from-surface via-surface/95 to-transparent pt-8 pb-4 px-4 md:px-12 z-30">

        {/* Hint */}
        <div className="max-w-3xl mx-auto mb-2">
          <p className="font-label-sm text-outline/50 text-xs text-center">
            Masukkan satu kata atau kalimat · tekan{" "}
            <kbd className="px-1 py-0.5 rounded bg-surface-container text-[10px]">
              Enter
            </kbd>{" "}
            untuk menerjemahkan
          </p>
        </div>

        <div className="max-w-3xl mx-auto flex items-end gap-2 md:gap-3">

          {/* Input Box */}
          <div className="flex-1 bg-surface rounded-xl border border-outline-variant/30 shadow-sm flex items-center px-3 py-2 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">

            <button className="text-on-surface-variant hover:text-primary transition-colors p-2 shrink-0">
              <span className="material-symbols-outlined">mic</span>
            </button>

            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={placeholder}
              disabled={isLoading}
              className="w-full bg-transparent outline-none border-none px-3 py-2 text-sm md:text-base placeholder:text-on-surface-variant/60 disabled:opacity-50"
            />

            {input && (
              <button
                onClick={() => setInput("")}
                className="text-on-surface-variant hover:text-primary transition-colors p-1 shrink-0"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            )}
          </div>

          {/* Send */}
          <button
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className="bg-primary hover:bg-primary/90 text-white rounded-xl w-11 h-11 md:w-12 md:h-12 shrink-0 shadow-sm transition-all flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <span className="material-symbols-outlined">
              {isLoading ? "hourglass_empty" : "send"}
            </span>
          </button>

        </div>
      </div>

    </div>
  );
}
