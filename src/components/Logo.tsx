
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Logo = ({ className, size = 'md' }: LogoProps) => {
  const sizeClasses = {
    sm: "h-8 w-auto",
    md: "h-10 w-auto",
    lg: "h-14 w-auto",
    xl: "h-16 w-auto"
  };

  return (
    <div className={cn("relative", className)}>
      <img 
        src="/lovable-uploads/d3e557ac-7a85-493a-b570-b893987e3a78.png" 
        alt="Seethawaka Pharmacy Logo" 
        className={cn("object-contain", sizeClasses[size])}
      />
    </div>
  );
};

export default Logo;
