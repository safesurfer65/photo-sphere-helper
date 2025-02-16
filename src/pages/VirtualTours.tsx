
import Navigation from '../components/Navigation';
import { Image360 } from 'lucide-react';

const VirtualTours = () => {
  return (
    <div className="min-h-screen page-transition">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Image360 className="w-8 h-8" />
            <h1 className="text-3xl font-bold">360° Virtual Tours</h1>
          </div>
          <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience spaces like never before with our immersive virtual tours. Perfect for real estate, businesses, and event venues.
          </p>
        </div>
      </section>
    </div>
  );
};

export default VirtualTours;
