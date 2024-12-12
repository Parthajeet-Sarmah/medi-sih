import { useEffect, useState } from 'react';
import { Bell, Menu, X } from 'lucide-react';

interface HeaderProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}

export function Header({ isMobileMenuOpen, setIsMobileMenuOpen }: HeaderProps) {

  const [ name, setName ] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("currentUser");
    if(user)
    {
      const parsed = JSON.parse(user);
      console.log(parsed);
      setName(parsed.firstName + " " + parsed.lastName);
    }
  }, [])

  return (
    <header className="bg-white border-b border-gray-200 fixed w-full z-30">
      <div className="px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-500 hover:text-gray-600 md:hidden"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
            <h1 className="text-xl font-semibold text-gray-800 md:hidden ml-2">
              Patient Portal
            </h1>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="relative text-gray-500 hover:text-gray-600">
              <Bell className="h-6 w-6" />
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Profile"
                className="h-8 w-8 rounded-full"
              />
              <span className="ml-2 text-sm font-medium text-gray-700 hidden sm:block">
                {name}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}