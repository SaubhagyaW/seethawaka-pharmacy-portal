
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

const Logo = ({ className, size = 'md', showText = false }: LogoProps) => {
  const sizeClasses = {
    sm: "h-8 w-auto",
    md: "h-10 w-auto",
    lg: "h-14 w-auto",
    xl: "h-16 w-auto"
  };

  return (
    <div className={cn("relative", className)}>
      <img 
        src="/lovable-uploads/9d6229f5-ead6-45ba-9ef9-f6abc262058b.png" 
        alt="Seethawaka Pharmacy Logo" 
        className={cn("object-contain", sizeClasses[size])}
      />
    </div>
  );
};

export default Logo;
