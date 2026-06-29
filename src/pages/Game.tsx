import React, { useState, useCallback } from 'react';

// ============================
// DATA KATA (Jawa ↔ Indonesia)
// ============================
const PAIRS = [
  { jawa: 'Mangan', indo: 'Makan' },
  { jawa: 'Turu', indo: 'Tidur' },      // Diubah dari 'Turon' (rebahan) ke 'Turu'
  { jawa: 'Aku', indo: 'Saya' },
  { jawa: 'Arep', indo: 'Mau' },
  { jawa: 'Sego', indo: 'Nasi' },
  { jawa: 'Omah', indo: 'Rumah' },
  { jawa: 'Banyu', indo: 'Air' },
  { jawa: 'Geni', indo: 'Api' },
  { jawa: 'Lemah', indo: 'Tanah' },
  { jawa: 'Udan', indo: 'Hujan' },
  { jawa: 'Kali', indo: 'Sungai' },
  { jawa: 'Segoro', indo: 'Laut' },     // Penulisan 'Segoro' lebih dekat dengan pengucapan umum sehari-hari
  { jawa: 'Wengi', indo: 'Malam' },
  { jawa: 'Esuk', indo: 'Pagi' },
  { jawa: 'Awak', indo: 'Badan' },
  { jawa: 'Mripat', indo: 'Mata' },
  { jawa: 'Cangkem', indo: 'Mulut' },
  { jawa: 'Sikil', indo: 'Kaki' },
  { jawa: 'Bapak', indo: 'Ayah' },      // Diubah dari 'Rama' (halus/kuno) ke 'Bapak' yang lebih umum
  { jawa: 'Ibu', indo: 'Ibu' },         // Diubah dari 'Simbok' ke 'Ibu' (atau 'Mamak'/'Simbah' tergantung daerah, tapi 'Ibu' paling aman)
];

// ============================
// FUNGSI BANTU
// ============================
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ============================
// PEMBUAT SOAL BERDASARKAN MODE
// ============================
function generateQuestions(mode) {
  // Ambil 10 pasangan (bisa random atau tetap)
  const shuffledPairs = shuffleArray(PAIRS);
  const selectedPairs = shuffledPairs.slice(0, 10); // ambil 10 pasangan

  let questions = [];

  if (mode === 'jawa_indo') {
    // Semua soal JA→ID
    questions = selectedPairs.map((pair, idx) => {
      const source = pair.jawa;
      const correct = pair.indo;
      const otherPairs = PAIRS.filter(p => p.jawa !== pair.jawa || p.indo !== pair.indo);
      const shuffledOthers = shuffleArray(otherPairs);
      const distractors = shuffledOthers.slice(0, 4).map(p => p.indo);
      let options = [correct, ...distractors];
      options = shuffleArray(options);
      // Pastikan unik
      const unique = [...new Set(options)];
      while (unique.length < 5) {
        const extra = PAIRS.find(p => {
          const val = p.indo;
          return !unique.includes(val) && (p.jawa !== pair.jawa || p.indo !== pair.indo);
        });
        if (extra) {
          const val = extra.indo;
          unique.push(val);
        } else break;
      }
      return {
        id: idx,
        type: 'jawa_indo',
        source,
        correct,
        options: unique,
        direction: 'Jawa → Indonesia',
      };
    });
  } else if (mode === 'indo_jawa') {
    // Semua soal ID→JA
    questions = selectedPairs.map((pair, idx) => {
      const source = pair.indo;
      const correct = pair.jawa;
      const otherPairs = PAIRS.filter(p => p.jawa !== pair.jawa || p.indo !== pair.indo);
      const shuffledOthers = shuffleArray(otherPairs);
      const distractors = shuffledOthers.slice(0, 4).map(p => p.jawa);
      let options = [correct, ...distractors];
      options = shuffleArray(options);
      const unique = [...new Set(options)];
      while (unique.length < 5) {
        const extra = PAIRS.find(p => {
          const val = p.jawa;
          return !unique.includes(val) && (p.jawa !== pair.jawa || p.indo !== pair.indo);
        });
        if (extra) {
          const val = extra.jawa;
          unique.push(val);
        } else break;
      }
      return {
        id: idx,
        type: 'indo_jawa',
        source,
        correct,
        options: unique,
        direction: 'Indonesia → Jawa',
      };
    });
  } else { // 'campuran'
    // 5 JA→ID dan 5 ID→JA
    const half = Math.floor(selectedPairs.length / 2);
    const firstHalf = selectedPairs.slice(0, half);
    const secondHalf = selectedPairs.slice(half, half * 2);

    const q1 = firstHalf.map((pair, idx) => {
      const source = pair.jawa;
      const correct = pair.indo;
      const otherPairs = PAIRS.filter(p => p.jawa !== pair.jawa || p.indo !== pair.indo);
      const shuffledOthers = shuffleArray(otherPairs);
      const distractors = shuffledOthers.slice(0, 4).map(p => p.indo);
      let options = [correct, ...distractors];
      options = shuffleArray(options);
      const unique = [...new Set(options)];
      while (unique.length < 5) {
        const extra = PAIRS.find(p => {
          const val = p.indo;
          return !unique.includes(val) && (p.jawa !== pair.jawa || p.indo !== pair.indo);
        });
        if (extra) {
          const val = extra.indo;
          unique.push(val);
        } else break;
      }
      return {
        id: idx,
        type: 'jawa_indo',
        source,
        correct,
        options: unique,
        direction: 'Jawa → Indonesia',
      };
    });

    const q2 = secondHalf.map((pair, idx) => {
      const source = pair.indo;
      const correct = pair.jawa;
      const otherPairs = PAIRS.filter(p => p.jawa !== pair.jawa || p.indo !== pair.indo);
      const shuffledOthers = shuffleArray(otherPairs);
      const distractors = shuffledOthers.slice(0, 4).map(p => p.jawa);
      let options = [correct, ...distractors];
      options = shuffleArray(options);
      const unique = [...new Set(options)];
      while (unique.length < 5) {
        const extra = PAIRS.find(p => {
          const val = p.jawa;
          return !unique.includes(val) && (p.jawa !== pair.jawa || p.indo !== pair.indo);
        });
        if (extra) {
          const val = extra.jawa;
          unique.push(val);
        } else break;
      }
      return {
        id: idx + half,
        type: 'indo_jawa',
        source,
        correct,
        options: unique,
        direction: 'Indonesia → Jawa',
      };
    });

    questions = [...q1, ...q2];
    // Acak urutan soal agar tercampur
    questions = shuffleArray(questions);
    // Beri id baru
    questions = questions.map((q, idx) => ({ ...q, id: idx }));
  }

  return questions;
}

// ============================
// KOMPONEN UTAMA
// ============================
export default function Game() {
  // State untuk menu mode
  const [mode, setMode] = useState(null); // null, 'jawa_indo', 'indo_jawa', 'campuran'
  const [gameStarted, setGameStarted] = useState(false);

  // State soal
  const [questions, setQuestions] = useState([]);
  const totalQuestions = questions.length;

  // State permainan
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lives, setLives] = useState(5);
  const [score, setScore] = useState(0);
  const [selectedWord, setSelectedWord] = useState(null);
  const [status, setStatus] = useState('playing'); // 'playing' | 'correct' | 'wrong' | 'gameover' | 'completed'
  const [feedback, setFeedback] = useState('');

  // Fungsi memulai game dengan mode tertentu
  const startGame = (selectedMode) => {
    setMode(selectedMode);
    const newQuestions = generateQuestions(selectedMode);
    setQuestions(newQuestions);
    setCurrentIndex(0);
    setLives(5);
    setScore(0);
    setSelectedWord(null);
    setStatus('playing');
    setFeedback('');
    setGameStarted(true);
  };

  // Fungsi kembali ke menu (reset)
  const goToMenu = () => {
    setMode(null);
    setGameStarted(false);
    setQuestions([]);
    setCurrentIndex(0);
    setLives(5);
    setScore(0);
    setSelectedWord(null);
    setStatus('playing');
    setFeedback('');
  };

  // Handler untuk tombol di game (Check / Next / Main Lagi)
  const handleMainButton = useCallback(() => {
    // Jika status correct, lanjut ke soal berikutnya atau selesai
    if (status === 'correct') {
      if (currentIndex + 1 < totalQuestions) {
        setCurrentIndex(prev => prev + 1);
        setSelectedWord(null);
        setStatus('playing');
        setFeedback('');
      } else {
        setStatus('completed');
        setFeedback(`🎉 Selesai! Skor: ${score} dari ${totalQuestions}`);
      }
      return;
    }

    // Jika gameover atau completed, tombol "Main Lagi" akan kembali ke menu
    if (status === 'gameover' || status === 'completed') {
      goToMenu();
      return;
    }

    // Status playing atau wrong
    if (!selectedWord) {
      setFeedback('Pilih satu kata terlebih dahulu!');
      return;
    }

    // Cek jawaban
    const currentQuestion = questions[currentIndex];
    if (selectedWord === currentQuestion.correct) {
      // Benar
      setScore(prev => prev + 1);
      setStatus('correct');
      setFeedback('✅ Benar!');
    } else {
      // Salah
      const newLives = lives - 1;
      setLives(newLives);
      if (newLives === 0) {
        setStatus('gameover');
        setFeedback('💔 Game Over!');
      } else {
        setStatus('wrong');
        setFeedback('❌ Salah, coba lagi!');
        setSelectedWord(null);
      }
    }
  }, [status, selectedWord, questions, currentIndex, totalQuestions, score, lives]);

  // Tentukan teks tombol
  let buttonText = 'Check';
  let buttonDisabled = false;
  if (status === 'correct') {
    buttonText = currentIndex + 1 < totalQuestions ? 'Lanjut ➜' : 'Lihat Hasil';
  } else if (status === 'gameover' || status === 'completed') {
    buttonText = 'Kembali ke Menu';
  } else {
    // playing atau wrong
    buttonDisabled = !selectedWord;
  }

  // ============================
  // RENDER MENU PEMILIHAN MODE
  // ============================
  if (!gameStarted) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center h-full bg-surface relative z-10 p-6">
        <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-8 max-w-md w-full shadow-lg">
          <h1 className="text-3xl font-bold text-on-surface text-center mb-2">🧠 Belajar Bahasa Jawa</h1>
          <p className="text-center text-on-surface-variant mb-6">Pilih mode permainan:</p>

          <div className="space-y-4">
            <button
              onClick={() => startGame('jawa_indo')}
              className="w-full bg-primary-container text-on-primary-container font-bold text-xl py-4 rounded-xl shadow-[0_4px_0_0_#b0a090] active:shadow-none active:translate-y-1 transition-all hover:bg-primary-container/80"
            >
              Jawa → Indonesia
            </button>
            <button
              onClick={() => startGame('indo_jawa')}
              className="w-full bg-primary-container text-on-primary-container font-bold text-xl py-4 rounded-xl shadow-[0_4px_0_0_#b0a090] active:shadow-none active:translate-y-1 transition-all hover:bg-primary-container/80"
            >
              Indonesia → Jawa
            </button>
            <button
              onClick={() => startGame('campuran')}
              className="w-full bg-primary text-white font-bold text-xl py-4 rounded-xl shadow-[0_4px_0_0_#743500] active:shadow-none active:translate-y-1 transition-all hover:bg-primary/90"
            >
              Campuran (5+5)
            </button>
          </div>

          <p className="text-xs text-on-surface-variant text-center mt-6">
            Setiap mode berisi 10 soal. Kamu memiliki 5 nyawa.
          </p>
        </div>
      </div>
    );
  }

  // ============================
  // RENDER HASIL (completed / gameover)
  // ============================
  if (status === 'completed' || status === 'gameover') {
    const isCompleted = status === 'completed';
    return (
      <div className="flex-1 flex flex-col items-center justify-center h-full bg-surface relative z-10 p-6">
        <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-8 max-w-md w-full text-center shadow-lg">
          <h2 className="text-3xl font-bold mb-4" style={{ color: isCompleted ? '#2e7d32' : '#c62828' }}>
            {isCompleted ? '🏁 Selesai!' : '💔 Game Over'}
          </h2>
          <p className="text-xl text-on-surface-variant mb-2">Skor Anda:</p>
          <p className="text-5xl font-bold text-primary">{score} / {totalQuestions}</p>
          {feedback && <p className="mt-4 text-on-surface-variant">{feedback}</p>}
          <button
            onClick={goToMenu}
            className="mt-6 w-full bg-primary text-white font-bold text-xl py-3 rounded-xl shadow-[0_4px_0_0_#743500] active:shadow-none active:translate-y-1 focus:outline-none focus:ring-4 focus:ring-primary/30 transition-all"
          >
            Kembali ke Menu
          </button>
        </div>
      </div>
    );
  }

  // ============================
  // RENDER GAME (playing / wrong)
  // ============================
  const currentQuestion = questions[currentIndex];
  const progress = totalQuestions > 0 ? Math.round(((currentIndex) / totalQuestions) * 100) : 0;

  return (
    <div className="flex-1 flex flex-col overflow-hidden h-full bg-surface relative z-10">
      {/* Header: Progress Bar & Lives */}
      <header className="flex items-center justify-between px-4 py-4 w-full">
        <button
          onClick={goToMenu}
          aria-label="Kembali ke Menu"
          className="text-on-surface-variant hover:text-on-surface transition-colors p-2 -ml-2 rounded-full focus:outline-none focus:ring-2 focus:ring-outline-variant"
        >
          <span className="material-symbols-outlined text-2xl">arrow_back</span>
        </button>

        <div
          aria-valuemax={100}
          aria-valuemin={0}
          aria-valuenow={progress}
          className="flex-1 mx-4 bg-surface-variant rounded-full h-3 overflow-hidden relative"
          role="progressbar"
        >
          <div
            className="bg-primary h-full rounded-full relative transition-all duration-500"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-white/30 rounded-t-full"></div>
          </div>
        </div>

        <div className="flex items-center gap-1 text-error font-bold text-[24px]">
          <span
            className="material-symbols-outlined text-error"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            favorite
          </span>
          <span className="leading-none text-error">{lives}</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-4 md:px-8 flex flex-col pt-6 pb-20 overflow-y-auto max-w-3xl mx-auto w-full">
        {/* Soal */}
        <h1 className="text-[28px] font-bold text-on-surface mb-8">
          {currentQuestion.direction} <br />
          <span className="text-primary-container">"{currentQuestion.source}"</span>
        </h1>

        {/* Karakter & gelembung petunjuk */}
        <div className="flex items-end mb-8 relative">
          <div className="w-24 h-24 flex-shrink-0 relative">
            <img
              alt="Karakter maskot SiJawa"
              className="w-full h-full object-contain drop-shadow-sm"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCl6ut324IHQQTz6-hSH_OTxonL4b8MC20GmfnIkkOsTSL5WxXWpYFfV0RlNoVeUv58YXvqa5NSqRJddrC8_AdgFkneYGv4a36b-CMC0y9rVaYBTS0Xl2R41623_9HfEo8XotEGGUL2SNOQkkMfq1uunQseX7YRFjF77OWDL3tbUJB9_21t1k_zs6bgtYPiqLZGVPBz1FscZlpczFZ8D7CZmuzi8fYRu-88yjTT8jGxpg9BzplE09e5ig"
            />
          </div>
          <div className="ml-4 mb-4 relative bg-surface-container-lowest border border-outline-variant rounded-xl rounded-bl-none p-4 shadow-sm min-w-[120px]">
            <div
              className="absolute -left-[9px] bottom-0 w-4 h-4 bg-surface-container-lowest border-l border-b border-outline-variant"
              style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)', bottom: '-1px', left: '-9px' }}
            ></div>
            <p className="text-lg text-on-surface">Pilih kata yang tepat</p>
          </div>
        </div>

        {/* Drop Zone */}
        <div
          className={`w-full min-h-[64px] border-2 border-dashed rounded-xl mb-4 flex flex-wrap items-center p-2 gap-2 bg-surface-container-low/50 relative cursor-pointer transition-colors ${
            status === 'playing' || status === 'wrong' ? 'border-outline-variant hover:border-primary' : 'border-outline-variant'
          }`}
          onClick={() => {
            if (status === 'playing' || status === 'wrong') {
              setSelectedWord(null);
              setFeedback('');
            }
          }}
        >
          {selectedWord ? (
            <span className="inline-flex items-center gap-2 bg-surface-container-lowest border-2 border-primary rounded-xl px-4 py-2 text-xl font-semibold text-on-surface select-none">
              {selectedWord}
              <span className="material-symbols-outlined text-base text-on-surface-variant hover:text-error cursor-pointer">
                close
              </span>
            </span>
          ) : (
            <span className="w-full text-center text-sm font-bold text-on-surface-variant opacity-50 pointer-events-none select-none">
              {status === 'playing' || status === 'wrong' ? 'Tarik kata ke sini' : '—'}
            </span>
          )}
        </div>

        {/* Feedback */}
        {feedback && (
          <div className={`text-center font-bold mb-4 ${
            status === 'correct' ? 'text-success' :
            status === 'wrong' ? 'text-warning' :
            'text-on-surface-variant'
          }`}>
            {feedback}
          </div>
        )}

        {/* Pilihan kata */}
        <div className="flex flex-wrap justify-center gap-x-3 gap-y-4">
          {currentQuestion.options.map((word) => {
            const isSelected = selectedWord === word;
            return (
              <button
                key={word}
                onClick={() => {
                  if (status === 'playing' || status === 'wrong') {
                    setSelectedWord(word);
                    setFeedback('');
                  }
                }}
                disabled={status !== 'playing' && status !== 'wrong'}
                className={`
                  bg-surface-container-lowest border-2 rounded-xl px-5 py-3 text-[24px] font-semibold text-on-surface
                  shadow-[0_4px_0_0_#dcc1b3] active:shadow-none active:translate-y-1
                  select-none focus:outline-none focus:ring-2 focus:ring-primary-container transition-all
                  ${isSelected ? 'border-primary ring-2 ring-primary' : 'border-outline-variant'}
                  ${(status !== 'playing' && status !== 'wrong') ? 'opacity-50 cursor-not-allowed' : 'hover:border-primary'}
                `}
              >
                {word}
              </button>
            );
          })}
        </div>
        <div className="h-10"></div>
      </main>

      {/* Footer Button */}
      <footer className="p-4 bg-surface border-t border-outline-variant/30 pb-8 sm:pb-6">
        <button
          onClick={handleMainButton}
          disabled={buttonDisabled}
          className={`
            w-full text-white font-bold text-[28px] py-4 rounded-xl shadow-[0_4px_0_0_#743500]
            active:shadow-none active:translate-y-1 flex justify-center items-center gap-2
            focus:outline-none focus:ring-4 focus:ring-primary/30 transition-all
            ${buttonDisabled ? 'opacity-50 cursor-not-allowed bg-primary' : 'bg-primary hover:bg-primary-dark'}
          `}
        >
          {buttonText}
        </button>
      </footer>
    </div>
  );
}