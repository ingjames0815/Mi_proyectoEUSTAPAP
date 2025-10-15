
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { APP_NAME, APP_SUBTITLE, APP_ROUTES } from '../constants';
import { NavItem } from '../types';
import { HomeIcon, BookOpenIcon, HeartIcon, CalendarIcon, BriefcaseIcon, UsersIcon, Bars3Icon, XMarkIcon } from './icons/HeroIcons';


interface NavbarProps {
  interestedCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({ interestedCount }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { name: 'Inicio', path: APP_ROUTES.HOME, icon: HomeIcon, isMain: true },
    { name: 'Especialidades', path: APP_ROUTES.EXPLORE, icon: BookOpenIcon, isMain: true },
    { name: 'Mis Intereses', path: APP_ROUTES.MY_INTERESTS, icon: HeartIcon, isMain: true },
    { name: 'Calendario', path: APP_ROUTES.CALENDAR, icon: CalendarIcon, isMain: false },
    { name: 'Noticias', path: APP_ROUTES.NEWS, icon: BriefcaseIcon, isMain: false },
    { name: 'Panel Padres', path: APP_ROUTES.PARENTS_PANEL, icon: UsersIcon, isBottom: true },
  ];

  const baseLinkClasses = "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 ease-in-out";
  const inactiveLinkClasses = "text-slate-300 hover:bg-sky-600 hover:text-white";
  const activeLinkClasses = "bg-sky-700 text-white";

  const mobileBaseLinkClasses = "block px-3 py-2 rounded-md text-base font-medium transition-colors duration-150 ease-in-out";
  const mobileInactiveLinkClasses = "text-slate-700 hover:bg-sky-100 hover:text-sky-700";
  const mobileActiveLinkClasses = "bg-sky-600 text-white";

  const renderNavLink = (item: NavItem, isMobile: boolean = false) => (
    <NavLink
      key={item.name}
      to={item.path}
      onClick={() => isMobile && setIsMobileMenuOpen(false)}
      className={({ isActive }) => 
        `${isMobile ? mobileBaseLinkClasses : baseLinkClasses} ${isActive ? (isMobile ? mobileActiveLinkClasses : activeLinkClasses) : (isMobile ? mobileInactiveLinkClasses : inactiveLinkClasses)} flex items-center space-x-2`
      }
    >
      <item.icon className="h-5 w-5" />
      <span>{item.name}</span>
      {item.path === APP_ROUTES.MY_INTERESTS && interestedCount > 0 && (
        <span className="ml-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
          {interestedCount}
        </span>
      )}
    </NavLink>
  );

  return (
    <nav className="bg-sky-800 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <NavLink to={APP_ROUTES.HOME} className="flex-shrink-0 text-white flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-sky-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.902 59.902 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
              </svg>
              <div>
                <span className="font-bold text-xl">{APP_NAME}</span>
                <span className="block text-xs text-sky-300">{APP_SUBTITLE}</span>
              </div>
            </NavLink>
          </div>
          <div className="hidden md:flex items-center space-x-2">
            {navItems.filter(item => item.isMain && !item.isBottom).map(item => renderNavLink(item))}
          </div>
          <div className="hidden md:flex items-center space-x-2">
             {navItems.filter(item => !item.isMain && !item.isBottom).map(item => renderNavLink(item))}
             {navItems.filter(item => item.isBottom).map(item => renderNavLink(item))}
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-300 hover:text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map(item => renderNavLink(item, true))}
          </div>
        </div>
      )}
    </nav>
  );
};
    