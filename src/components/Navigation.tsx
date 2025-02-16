
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Camera, Video, Home, Building2 } from 'lucide-react';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/virtual-tours', label: '360° Tours', icon: Camera },
    { path: '/events', label: 'Events', icon: Camera },
    { path: '/interior', label: 'Interior', icon: Building2 },
    { path: '/drone', label: 'Drone', icon: Camera },
    { path: '/fpv', label: 'FPV', icon: Video },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all-300 ${
      scrolled ? 'glass-effect py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-semibold">
            PhotoStudio
          </Link>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 transition-all-300 hover:text-primary ${
                  location.pathname === item.path ? 'text-primary font-medium' : 'text-muted-foreground'
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
