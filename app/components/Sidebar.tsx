'use client'
import { useState } from "react";
import { Home, Settings, User, ChartLine, Menu } from "lucide-react";

interface NavItemProps {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="overflow-hidden">
      <div className="md:hidden fixed bottom-4 left-4 z-50">
        <button
          className="p-2 bg-black text-white rounded-lg focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu size={24} />
        </button>
      </div>

      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 fixed md:sticky top-0 h-screen w-56 bg-white text-black z-40 transition-transform duration-300 md:flex md:flex-col shadow-lg`}
      >
        <div className="p-4">
          <h1 className="text-xl font-bold sm:text-md">Textify Analytics</h1>
        </div>
        <nav className="flex-1 space-y-1 p-4">
          <NavItem href="/" icon={<Home size={20} />}>
            Home
          </NavItem>
          <NavItem href="/analytics" icon={<ChartLine size={20} />}>
            Analytics
          </NavItem>
          <NavItem href="/profile" icon={<User size={20} />}>
            You
          </NavItem>
          <NavItem href="/settings" icon={<Settings size={20} />}>
            Settings
          </NavItem>
        </nav>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
}

function NavItem({ href, icon, children }: NavItemProps) {
  return (
    <a
      href={href}
      className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-black hover:text-white transition-colors duration-200"
    >
      {icon}
      <span className="sm:hidden md:block">{children}</span>
    </a>
  );
}
