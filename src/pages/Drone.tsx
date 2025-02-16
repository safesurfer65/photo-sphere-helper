
import Navigation from '../components/Navigation';
import { Camera } from 'lucide-react';

const Drone = () => {
  return (
    <div className="min-h-screen page-transition">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Camera className="w-8 h-8" />
            <h1 className="text-3xl font-bold">Drone Photography</h1>
          </div>
          <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto">
            Breathtaking aerial photography and videography for unique perspectives.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Drone;
