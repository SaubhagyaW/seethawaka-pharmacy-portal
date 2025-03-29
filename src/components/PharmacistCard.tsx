
import { cn } from "@/lib/utils";

interface PharmacistCardProps {
  name: string;
  title: string;
  description: string;
  imageUrl: string;
  delay?: number;
  className?: string;
}

const PharmacistCard = ({
  name,
  title,
  description,
  imageUrl,
  delay = 0,
  className
}: PharmacistCardProps) => {
  return (
    <div 
      className={cn(
        "bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 transition-all hover:shadow-md animate-fade-up",
        className
      )}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-cover object-top transition-transform hover:scale-105 duration-500 image-fade-in"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <div className="inline-block rounded-full bg-gradient-to-r from-pharmacy-100 to-medical-100 px-3 py-1 text-sm font-medium text-pharmacy-800 mb-3">
          {title}
        </div>
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default PharmacistCard;
