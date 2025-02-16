
import Navigation from '../components/Navigation';
import { Video } from 'lucide-react';

const FPV = () => {
  return (
    <div className="min-h-screen page-transition">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Video className="w-8 h-8" />
            <h1 className="text-3xl font-bold">FPV Video</h1>
          </div>
          <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto">
            Dynamic and immersive first-person view videos for unique perspectives.
          </p>
        </div>
      </section>
    </div>
  );
};

export default FPV;
