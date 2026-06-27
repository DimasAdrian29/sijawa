import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

export default function MainLayout() {
  return (
    <div className="bg-surface text-on-surface min-h-screen flex font-sans">
      <Sidebar />
      {/* Area konten utama, md:ml-64 memberi ruang agar tidak tertutup sidebar */}
      <main className="flex-1 flex flex-col h-screen relative md:ml-64">
        <Outlet /> {/* Halaman (Chat, Game, dll) akan dirender di sini */}
      </main>
    </div>
  );
}