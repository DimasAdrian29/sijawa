export default function About() {
  const teamMembers = [
    { name: 'Dimas', role: 'Pengembang / Mahasiswa', icon: 'code_blocks', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWjcHG7yYFr9UiGyW-S78hZS5-v1sAddR3quQeItwxVXivg_y04nC75jGyU3ZP9DmnhXanetKwf2zzGmpdfqHEDpyImnUf7vm1u5enQESAKxse6ldSLhQCgIFtGa6T2JfvLDpScsYI5WOFH1Qj7J8c1W3jp5vWZCO_2QqzVuECN1mZNyZbCg4LzGTLmCOvOXOnbja0HY05962XTKHl57VECqRNoVVsw2eqLbLAYOi_GdvcKFCk-scxCw' },
    { name: 'Syafrisar', role: 'Peneliti AI / Mahasiswa', icon: 'neurology', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9bOwxgLkzFPsTrzszH3Gb9wXTjyTEFIQnPYeCC1CvjS7Z3uIDYD_IMbYmgpR5vE1wuJ7ZpJsit8K9y3Fn8astmIM2Si1g2WXXd8Z6OZCiMiRSDca6ZElZ578xU_nrDACzSHz4jOp_NIJkZtSlortiaGdQs6_WHgZ1rrl61NrfRYCkCWF5oaY-R8lBmPvLdk-pudDK5ysUd-Gjy_Vwbsl-Z7UR5-38HwZCJ9eof4TFqZhBi05il3cBkA' },
    { name: 'Tri', role: 'Kurator Data / Mahasiswa', icon: 'translate', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6JvBoMdos8cFl3v3_A0DnxAleBHqGBhNfYKieLG9IMnb9MazTDMvyPmccUJcYURXRN7Rg7WleRCj2pBH6Pe8FIeg4Jt8PK7GdmRJ20cIFlv_Z63bRYn32f09_aAj6N__7hsNLigSBwdfC0J0n5SGxWHGsvqm8FVwP_b5Wzx-z_EdS2Lg-q6Dn65VolsQv5l4okh6EBjgnxVpRi10KbpIjLfVDxsUZS0FwGHBgvDStiuCtv7v6SefkFw' }
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
                Melestarikan bahasa dan budaya Jawa melalui teknologi Natural Language Processing (NLP) mutakhir, memanfaatkan kekuatan arsitektur Llama 3 dengan fine-tuning QLoRA untuk akurasi terjemahan tingkat lanjut.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <section className="w-full">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-8 bg-primary rounded-full"></div>
            <h2 className="text-[32px] font-bold text-on-background">Tim Kelompok 7</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <div key={member.name} className="flex flex-col gap-4 p-5 bg-surface-container-lowest rounded-lg shadow-sm border border-surface-variant/50 hover:scale-[1.02] transition-transform duration-300">
                <div className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-md" style={{ backgroundImage: `url("${member.img}")` }}></div>
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
                Kami mengucapkan terima kasih yang sebesar-besarnya atas dukungan fasilitas komputasi tingkat lanjut dan bimbingan akademik yang tak ternilai dari institusi tercinta kami selama proses riset dan pengembangan model bahasa SiJawa.
              </p>
              <div className="inline-flex flex-col items-center md:items-start bg-surface rounded-lg p-4 border border-outline-variant/30">
                <h4 className="text-[12px] uppercase text-secondary mb-2 tracking-wider font-bold">Dosen Pembimbing Akademik</h4>
                <ul className="text-on-surface-variant flex flex-col gap-2 text-[16px]">
                  <li className="flex items-center justify-center md:justify-start gap-2">
                    <span className="material-symbols-outlined text-primary/70 text-[20px]">school</span> 
                    Dr. Yuyun Umaidah, M.Kom
                  </li>
                  <li className="flex items-center justify-center md:justify-start gap-2">
                    <span className="material-symbols-outlined text-primary/70 text-[20px]">school</span> 
                    Mr. Budi Setiawan, S.T., M.T.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}