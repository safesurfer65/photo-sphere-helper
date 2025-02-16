
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Camera, Video, Home, Building2 } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

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

  const serviceItems = [{
    path: '/virtual-tours',
    label: '360° Tours',
    icon: Camera
  }, {
    path: '/events',
    label: 'Events',
    icon: Camera
  }, {
    path: '/interior',
    label: 'Interior',
    icon: Building2
  }, {
    path: '/drone',
    label: 'Drone',
    icon: Camera
  }, {
    path: '/fpv',
    label: 'FPV',
    icon: Video
  }];

  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all-300 ${scrolled ? 'glass-effect py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex-shrink-0">
            <img 
              src="/lovable-uploads/3cffc790-0011-4db9-839e-c0fc286f247a.png" 
              alt="Mark Purmal Photography"
              className="h-24 w-auto"
            />
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/" className={`text-slate-50 hover:text-primary transition-all-300 ${location.pathname === '/' ? 'font-medium' : ''}`}>
                    Home
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-slate-50 hover:text-primary hover:bg-transparent focus:bg-transparent">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white/90 backdrop-blur-md">
                    <ul className="p-4 w-[200px] grid gap-2">
                      {serviceItems.map(item => (
                        <li key={item.path}>
                          <Link 
                            to={item.path} 
                            className={`flex items-center space-x-2 p-2 rounded hover:bg-slate-100 transition-all-300 ${
                              location.pathname === item.path ? 'text-primary font-medium' : 'text-slate-700'
                            }`}
                          >
                            <item.icon className="w-4 h-4" />
                            <span>{item.label}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/contact" className="text-slate-50 hover:text-primary transition-all-300">
                    Contact
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </div>
    </nav>;
};

export default Navigation;
