export default function About() {
  const teamMembers = [
    {
      name: 'Tri Wulandari Junita Sari',
      role: 'Preprocesing / Integrasi Dataset',
      icon: 'translate',
    },
    {
      name: 'Syafrisar Putri Cadasteria',
      role: 'AI Researcher / Fine-Tuning QLoRA',
      icon: 'neurology',
    },
    {
      name: 'Dimas Adrian',
      role: 'Web Developer / Perancangan UI/UX',
      icon: 'code_blocks',
    },
  ];

  return (
    <div className="flex-1 w-full flex flex-col items-center overflow-y-auto relative z-0 h-full">
      <div className="max-w-[960px] w-full px-4 md:px-10 py-8 flex flex-col gap-12">

        {/* Hero Section */}
        <div className="w-full">
          <div
            className="relative flex min-h-[400px] md:min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-lg items-center justify-center p-8 overflow-hidden shadow-sm"
            style={{ backgroundImage: 'linear-gradient(rgba(27, 28, 28, 0.3) 0%, rgba(149, 69, 0, 0.6) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAlB2JdahKLSAhMVrrKRtuJTFEc0xB4vzxu0peTx98GcyKr0h7ghDDHkSS-blBAUFmIM2gPzUqpRB80KOuAfTDQwBZIMCFphJyoVW5AcyISGq79Bd5jOf2EoF7lTk968zjcjnH-JpPO0birDo2S2vjpz408rGzlXuz95hD73mwZ3DsvPETenNsLLavOPiN8C6AQpdCCK6N7_3LIxYOReCWNwMCInvQCKDwVPWYvy4G7UKAyT9P0VAmadQ")' }}
          >
            <div className="relative z-10 flex flex-col gap-4 text-center max-w-3xl">
              <h1 className="text-white text-[48px] font-bold drop-shadow-md">Tentang SiJawa</h1>
              <p className="text-white text-lg md:text-xl font-medium drop-shadow">
                Implementasi Metode QLoRA pada Fine-Tuning Llama 3 untuk Chatbot Penerjemah dan Pelestarian Bahasa Jawa
              </p>
            </div>
          </div>
        </div>

        {/* Tentang Proyek */}
        <section className="w-full">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-8 bg-primary rounded-full"></div>
            <h2 className="text-[32px] font-bold text-on-background">Tentang Proyek</h2>
          </div>
          <div className="bg-surface-container-lowest p-6 rounded-lg shadow-sm border border-surface-variant/50 space-y-4">
            <p className="text-on-background leading-relaxed">
              Seiring pesatnya kemajuan kecerdasan buatan, model bahasa besar (LLM) masih didominasi oleh pemahaman Bahasa Indonesia formal dan Inggris. 
              Padahal, masyarakat Indonesia sangat aktif menggunakan bahasa daerah dalam interaksi digital, salah satunya Bahasa Jawa yang memiliki penutur terbanyak. 
              Keterbatasan pemahaman terhadap variasi bahasa lokal berisiko memicu kepunahan bahasa di ekosistem digital.
            </p>
            <p className="text-on-background leading-relaxed">
              Proyek ini bertujuan mengembangkan <strong>chatbot penerjemah dua arah (Jawa–Indonesia)</strong> berbasis web dengan memanfaatkan model dasar 
              <strong> Meta Llama 3 (1B Parameters)</strong>. Karena pelatihan model besar membutuhkan spesifikasi tinggi, kami menerapkan metode 
              <strong> QLoRA (Quantized Low-Rank Adaptation)</strong> yang memperkecil model ke format 4-bit dan hanya melatih komponen tambahan kecil, 
              sehingga proses fine-tuning berjalan efisien tanpa kehilangan akurasi.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div className="bg-surface p-4 rounded-lg border border-outline-variant/30">
                <h4 className="font-bold text-primary flex items-center gap-2">
                  <span className="material-symbols-outlined">checklist</span> Luaran Proyek
                </h4>
                <ul className="list-disc list-inside text-sm text-on-surface-variant mt-2 space-y-1">
                  <li>Aplikasi web chatbot penerjemah Jawa–Indonesia</li>
                  <li>Model Llama 3 fine-tuning dalam format GGUF (diperkecil)</li>
                  <li>Dataset terstruktur JSONL dari korpus kamus & kalimat</li>
                  <li>Dokumentasi teknis, grafik loss, dan laporan akhir</li>
                </ul>
              </div>
              <div className="bg-surface p-4 rounded-lg border border-outline-variant/30">
                <h4 className="font-bold text-secondary flex items-center gap-2">
                  <span className="material-symbols-outlined">target</span> Manfaat
                </h4>
                <ul className="list-disc list-inside text-sm text-on-surface-variant mt-2 space-y-1">
                  <li>Membantu masyarakat & akademisi belajar bahasa Jawa</li>
                  <li>Melestarikan bahasa daerah di era digital</li>
                  <li>Landasan teknis untuk sistem berbasis budaya lokal</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Dataset */}
        <section className="w-full">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-8 bg-tertiary rounded-full"></div>
            <h2 className="text-[32px] font-bold text-on-background">Dataset</h2>
          </div>
          <div className="bg-surface-container-lowest p-6 rounded-lg shadow-sm border border-surface-variant/50 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-on-background flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">database</span> Sumber Data
                </h4>
                <ul className="text-sm text-on-surface-variant list-disc list-inside mt-2 space-y-1">
                  <li><a href="https://huggingface.co/datasets/mabzak/kamus-daerah-indo" className="text-primary underline" target="_blank">Kamus Daerah Indo (Hugging Face)</a></li>
                  <li><a href="https://data.mendeley.com/datasets/y3hstv4bfn/2" className="text-primary underline" target="_blank">Mendeley – variasi bahasa Jawa</a></li>
                  <li><a href="https://repositori.kemendikdasmen.go.id/2885/1/kamus%20bahasa%20jawa%20-%20bahas a%20indonesia%20i%20%20469ha.pdf" className="text-primary underline" target="_blank">Kamus online (PDF) – Kemendikdasmen</a></li>
                  <li><a href="https://huggingface.co/datasets/SEACrowd/korpus_nusantara" className="text-primary underline" target="_blank">Korpus Nusantara (SEACrowd)</a></li>
                  <li><a href="https://huggingface.co/datasets/indonlp/NusaX-MT" className="text-primary underline" target="_blank">NusaX-MT (IndoNLP)</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-on-background flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary">analytics</span> Statistik Data
                </h4>
                <ul className="text-sm text-on-surface-variant list-disc list-inside mt-2 space-y-1">
                  <li><strong>Total data gabungan:</strong> 22.709 baris (kata + kalimat)</li>
                  <li><strong>Setelah preprocessing & ekspansi:</strong> 45.418 percakapan dua arah</li>
                  <li><strong>Format awal:</strong> CSV, JSON, PDF (diekstrak ke teks)</li>
                  <li><strong>Format latih:</strong> JSONL (chat template untuk Llama 3)</li>
                  <li><strong>Split data:</strong> 95% training (43.147) – 5% validasi (2.271)</li>
                </ul>
              </div>
            </div>
            <div className="bg-surface p-4 rounded-lg border border-outline-variant/30 mt-2">
              <p className="text-sm text-on-surface-variant">
                <span className="font-bold">Proses integrasi:</span> Penggabungan dari 5 sumber, pembersihan duplikat, ekspansi variasi kata (pemisahan dengan tanda ; dan /), serta konversi ke format percakapan (system, user, assistant) siap untuk Supervised Fine-Tuning.
              </p>
            </div>
          </div>
        </section>

        {/* Teknologi & Metode */}
        <section className="w-full">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-8 bg-primary rounded-full"></div>
            <h2 className="text-[32px] font-bold text-on-background">Teknologi & Metode</h2>
          </div>
          <div className="bg-surface-container-lowest p-6 rounded-lg shadow-sm border border-surface-variant/50 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-on-background flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">model_training</span> Model & Fine-Tuning
                </h4>
                <ul className="text-sm text-on-surface-variant list-disc list-inside mt-2 space-y-1">
                  <li><strong>Model dasar:</strong> Llama 3.2 1B Instruct (4-bit quantized)</li>
                  <li><strong>Metode:</strong> QLoRA (Quantized Low-Rank Adaptation)</li>
                  <li><strong>Parameter LoRA:</strong> r=16, alpha=32, dropout=0.05</li>
                  <li><strong>Target modules:</strong> q_proj, k_proj, v_proj, o_proj, gate_proj, up_proj, down_proj</li>
                  <li><strong>Trainable params:</strong> 11,27 juta (0,9% dari total 1,24 M)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-on-background flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary">settings</span> Infrastruktur & Tools
                </h4>
                <ul className="text-sm text-on-surface-variant list-disc list-inside mt-2 space-y-1">
                  <li><strong>Library:</strong> Unsloth, Unsloth Zoo, TRL (SFTTrainer)</li>
                  <li><strong>GPU:</strong> Tesla T4 (VRAM 15,64 GB)</li>
                  <li><strong>CUDA:</strong> 12.x dengan cuda-python</li>
                  <li><strong>Max sequence length:</strong> 512 token</li>
                  <li><strong>Epoch:</strong> 1 (dengan evaluasi tiap 500 steps)</li>
                </ul>
              </div>
            </div>
            <div className="bg-surface p-4 rounded-lg border border-outline-variant/30 mt-2">
              <p className="text-sm text-on-surface-variant">
                <span className="font-bold">Hasil training:</span> Proses fine-tuning berhasil dengan memanfaatkan teknik gradient checkpointing dan LoRA untuk menghemat memori. 
                Model akhir disimpan dalam format GGUF agar efisien dijalankan di server lokal.
              </p>
            </div>
          </div>
        </section>

        {/* Timeline Singkat (Opsional) */}
        <section className="w-full">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-8 bg-tertiary rounded-full"></div>
            <h2 className="text-[32px] font-bold text-on-background">Timeline Pengerjaan</h2>
          </div>
          <div className="bg-surface-container-lowest p-6 rounded-lg shadow-sm border border-surface-variant/50">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="bg-surface p-4 rounded-lg border border-outline-variant/30">
                <span className="material-symbols-outlined text-primary text-4xl">dataset</span>
                <h4 className="font-bold mt-2">Integrasi & Preprocessing</h4>
                <p className="text-sm text-on-surface-variant">Penggabungan 5 sumber, pembersihan, ekspansi data</p>
              </div>
              <div className="bg-surface p-4 rounded-lg border border-outline-variant/30">
                <span className="material-symbols-outlined text-secondary text-4xl">model_training</span>
                <h4 className="font-bold mt-2">Fine-Tuning QLoRA</h4>
                <p className="text-sm text-on-surface-variant">Llama 3 + LoRA, training dengan Tesla T4</p>
              </div>
              <div className="bg-surface p-4 rounded-lg border border-outline-variant/30">
                <span className="material-symbols-outlined text-tertiary text-4xl">web</span>
                <h4 className="font-bold mt-2">Pengembangan Web</h4>
                <p className="text-sm text-on-surface-variant">Desain UI (Figma), integrasi model, deployment</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="w-full">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-8 bg-primary rounded-full"></div>
            <h2 className="text-[32px] font-bold text-on-background">Tim Kelompok 7</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <div key={member.name} className="flex flex-col gap-4 p-5 bg-surface-container-lowest rounded-lg shadow-sm border border-surface-variant/50 hover:scale-[1.02] transition-transform duration-300">
                <div className="w-full aspect-[4/3] bg-surface-variant/20 rounded-md flex items-center justify-center">
                  <span className="material-symbols-outlined text-6xl text-secondary/60">
                    {member.icon}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-[24px] font-bold text-on-background">{member.name}</h3>
                  <p className="text-on-surface-variant flex items-center gap-2 text-[16px]">
                    <span className="material-symbols-outlined text-secondary text-[18px]">{member.icon}</span>
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Academic Support Section */}
        <section className="w-full pb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-8 bg-tertiary rounded-full"></div>
            <h2 className="text-[32px] font-bold text-on-background">Dukungan Institusi</h2>
          </div>
          <div className="flex flex-col md:flex-row gap-8 items-center bg-surface-container-lowest p-8 rounded-lg shadow-sm border border-surface-variant/30">
            <div
              className="w-40 h-40 bg-surface-container rounded-full flex-shrink-0 flex items-center justify-center overflow-hidden bg-cover bg-center border-4 border-surface-bright shadow-inner"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC24Guo3kYfTQBDspvjgYFAaPgaDuzvt4wLprKUKsHPt5NDwfvNIUR7MbK2aQ_AiyYR6Nhbe2zK5BF0MkDHaqmCmjvHnBV8ZFhf9s7UpR-r1-ZQXSvbwH4NQBZe4dvP_OMbYlLbxjGQGU8FujoYIzUYr9c1K148sh21VHi_1tt0tqUI1al4Vyb6XQw7hgo5FE34ajxJRRTcnMooWvVMYhZ8hVRVVe9VtchieOIjHDr-QT9v1SuyhitH0w")' }}
            >
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-[24px] font-bold text-on-background mb-3">Politeknik Caltex Riau</h3>
              <p className="text-on-surface-variant mb-6 leading-relaxed">
                Kami mengucapkan terima kasih atas dukungan fasilitas komputasi, bimbingan akademik, dan arahan dari dosen pengampu serta instruktur laboratorium 
                selama proses riset dan pengembangan SiJawa.
              </p>
              <div className="inline-flex flex-col items-center md:items-start bg-surface rounded-lg p-4 border border-outline-variant/30">
                <h4 className="text-[12px] uppercase text-secondary mb-2 tracking-wider font-bold">Dosen & Instruktur</h4>
                <ul className="text-on-surface-variant flex flex-col gap-2 text-[16px]">
                  <li className="flex items-center justify-center md:justify-start gap-2">
                    <span className="material-symbols-outlined text-primary/70 text-[20px]">school</span>
                    Siti Syahidatul Helma, S.Kom., M.Kom. (Dosen Pengampu)
                  </li>
                  <li className="flex items-center justify-center md:justify-start gap-2">
                    <span className="material-symbols-outlined text-primary/70 text-[20px]">school</span>
                    Ali Munawar, S.Tr. Kom. (Instruktur Laboratorium)
                  </li>
                </ul>
              </div>
              <p className="text-on-surface-variant text-sm mt-4">TA 2025 / 2026</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}