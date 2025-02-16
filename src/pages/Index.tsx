
import { Camera, Video, Building2 } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import Navigation from '../components/Navigation';

const services = [
  {
    title: "360° Virtual Tours",
    description: "Immersive virtual experiences for real estate and businesses",
    icon: Camera,
    path: "/virtual-tours",
    imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
  },
  {
    title: "Event Photography",
    description: "Capturing your special moments with style",
    icon: Camera,
    path: "/events",
    imageUrl: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop"
  },
  {
    title: "Interior Photography",
    description: "Showcasing spaces in their best light",
    icon: Building2,
    path: "/interior",
    imageUrl: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2032&auto=format&fit=crop"
  },
  {
    title: "Drone Photography",
    description: "Aerial perspectives that amaze",
    icon: Camera,
    path: "/drone",
    imageUrl: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=2012&auto=format&fit=crop"
  },
  {
    title: "FPV Video",
    description: "Dynamic and immersive video experiences",
    icon: Video,
    path: "/fpv",
    imageUrl: "https://images.unsplash.com/photo-1548502499-ef49e8cf98d4?q=80&w=2070&auto=format&fit=crop"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?q=80&w=2069&auto=format&fit=crop" 
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Capturing Moments in Motion
          </h1>
          <p className="text-xl text-white/90 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Professional photography and videography services for every occasion
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={service.path} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
