import { Link, useLocation } from 'react-router-dom';

export default function Sidebar() {
  const location = useLocation(); // Untuk mendeteksi halaman aktif
  
  // PERBAIKAN: Tambahkan tipe data ': string' pada parameter path
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="hidden md:flex flex-col h-screen w-64 bg-surface-container-low shadow-lg py-6 gap-2 z-40 fixed left-0 top-0">
      <div className="px-6 mb-8">
        <h1 className="font-display-lg text-[48px] font-bold text-primary">SiJawa</h1>
        <p className="font-label-sm text-on-surface-variant mt-1">Heritage Translation</p>
      </div>
      
      <div className="flex-1 flex flex-col gap-2">
        <Link 
          to="/" 
          className={`mx-2 px-4 py-3 rounded-xl flex items-center gap-3 transition-all ${isActive('/') ? 'bg-secondary-container text-on-secondary-container font-bold translate-x-1' : 'text-on-surface-variant hover:bg-surface-variant/50'}`}
        >
          <span className="material-symbols-outlined">chat_bubble</span>
          <span className="font-label-md">AI Chat</span>
        </Link>
        
        <Link 
          to="/game" 
          className={`mx-2 px-4 py-3 rounded-xl flex items-center gap-3 transition-all ${isActive('/game') ? 'bg-secondary-container text-on-secondary-container font-bold translate-x-1' : 'text-on-surface-variant hover:bg-surface-variant/50'}`}
        >
          <span className="material-symbols-outlined">videogame_asset</span>
          <span className="font-label-md">Game</span>
        </Link>
        
        <Link 
          to="/about" 
          className={`mx-2 px-4 py-3 rounded-xl flex items-center gap-3 transition-all ${isActive('/about') ? 'bg-secondary-container text-on-secondary-container font-bold translate-x-1' : 'text-on-surface-variant hover:bg-surface-variant/50'}`}
        >
          <span className="material-symbols-outlined">info</span>
          <span className="font-label-md">About</span>
        </Link>
      </div>

      <div className="mt-auto px-6">
        <Link to="/profile" className="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-colors">
          <span className="material-symbols-outlined">account_circle</span>
          <span className="font-label-md">Profile</span>
        </Link>
      </div>
    </nav>
  );
}