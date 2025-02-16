
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  path: string;
  imageUrl: string;
}

const ServiceCard = ({ title, description, icon: Icon, path, imageUrl }: ServiceCardProps) => {
  return (
    <Link 
      to={path}
      className="group relative overflow-hidden rounded-lg transition-all-300 hover:-translate-y-1"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10" />
      <img 
        src={imageUrl} 
        alt={title}
        className="w-full h-[300px] object-cover transition-all-300 group-hover:scale-105"
      />
      <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
        <div className="flex items-center space-x-3 mb-2">
          <Icon className="w-6 h-6 text-white" />
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
        <p className="text-white/80">{description}</p>
      </div>
    </Link>
  );
};

export default ServiceCard;
