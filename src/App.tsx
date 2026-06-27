import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Chat from './pages/Chat';
import Game from './pages/Game';
import About from './pages/About';
import Profile from './pages/Profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* MainLayout membungkus semua halaman yang memiliki rute di dalamnya */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Chat />} /> {/* Muncul di path "/" */}
          <Route path="game" element={<Game />} />
          <Route path="about" element={<About />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;