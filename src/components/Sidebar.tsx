import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Sidebar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const menuClass = (path: string) =>
    `mx-2 px-4 py-3 rounded-xl flex items-center gap-3 transition-all ${
      isActive(path)
        ? "bg-secondary-container text-on-secondary-container font-bold translate-x-1"
        : "text-on-surface-variant hover:bg-surface-variant/50"
    }`;

  return (
    <>
      {/* Mobile Header */}
      <header className="md:hidden fixed top-0 left-0 right-0 h-16 bg-surface-container-low shadow-md flex items-center justify-between px-4 z-50">
        <h1 className="font-bold text-2xl text-primary">SiJawa</h1>

        <button
          onClick={() => setIsOpen(true)}
          className="p-2 rounded-lg hover:bg-surface-variant/50"
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
      </header>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <nav
        className={`
          fixed top-0 left-0 h-screen w-64 bg-surface-container-low shadow-lg
          flex flex-col py-6 gap-2 z-50
          transform transition-transform duration-300

          ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }

          md:translate-x-0 md:flex
        `}
      >
        {/* Header */}
        <div className="px-6 mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-[48px] font-bold text-primary">SiJawa</h1>
            <p className="text-on-surface-variant mt-1">
              Heritage Translation
            </p>
          </div>

          {/* Close Button Mobile */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(false)}
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Menu */}
        <div className="flex-1 flex flex-col gap-2">
          <Link
            to="/"
            className={menuClass("/")}
            onClick={() => setIsOpen(false)}
          >
            <span className="material-symbols-outlined">chat_bubble</span>
            <span>AI Chat</span>
          </Link>

          <Link
            to="/game"
            className={menuClass("/game")}
            onClick={() => setIsOpen(false)}
          >
            <span className="material-symbols-outlined">
              videogame_asset
            </span>
            <span>Game</span>
          </Link>

          <Link
            to="/about"
            className={menuClass("/about")}
            onClick={() => setIsOpen(false)}
          >
            <span className="material-symbols-outlined">info</span>
            <span>About</span>
          </Link>
        </div>

        {/* Profile */}
        <div className="mt-auto px-6">
          <Link
            to="/profile"
            className="flex items-center gap-3 text-on-surface-variant hover:text-primary"
            onClick={() => setIsOpen(false)}
          >
            <span className="material-symbols-outlined">
              account_circle
            </span>
            <span>Profile</span>
          </Link>
        </div>
      </nav>
    </>
  );
}