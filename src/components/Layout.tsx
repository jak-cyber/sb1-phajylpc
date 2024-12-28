import React from 'react';
import { Menu, Users, Calendar, Settings, LogOut, Stethoscope } from 'lucide-react';
import type { Page } from '../App';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: Page;
  onPageChange: (page: Page) => void;
}

export default function Layout({ children, currentPage, onPageChange }: LayoutProps) {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-48 bg-green-600 shadow-md">
        <div className="p-4">
          <h1 className="text-xl font-bold text-white leading-tight">
            Community
            <br />
            Health
          </h1>
        </div>
        <nav className="mt-8">
          <NavItem
            icon={<Menu />}
            text="Dashboard"
            active={currentPage === 'dashboard'}
            onClick={() => onPageChange('dashboard')}
          />
          <NavItem
            icon={<Users />}
            text="Patients"
            active={currentPage === 'patients'}
            onClick={() => onPageChange('patients')}
          />
          <NavItem
            icon={<Stethoscope />}
            text="Exam"
            active={currentPage === 'exam'}
            onClick={() => onPageChange('exam')}
          />
          <NavItem
            icon={<Calendar />}
            text="Appointments"
            active={currentPage === 'appointments'}
            onClick={() => onPageChange('appointments')}
          />
          <NavItem
            icon={<Settings />}
            text="Settings"
            active={currentPage === 'settings'}
            onClick={() => onPageChange('settings')}
          />
          <div className="absolute bottom-4 w-48">
            <NavItem
              icon={<LogOut />}
              text="Logout"
              onClick={() => console.log('Logout clicked')}
            />
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
}

interface NavItemProps {
  icon: React.ReactNode;
  text: string;
  active?: boolean;
  onClick: () => void;
}

function NavItem({ icon, text, active = false, onClick }: NavItemProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center px-4 py-3 text-white hover:bg-green-700 ${
        active ? 'bg-green-700' : ''
      }`}
    >
      <span className="w-5 h-5 mr-2">{icon}</span>
      {text}
    </button>
  );
}