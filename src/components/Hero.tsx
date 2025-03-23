
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface HeroProps {
  className?: string;
}

const Hero = ({ className }: HeroProps) => {
  return (
    <section className={cn("relative overflow-hidden py-16 md:py-24", className)}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, #4dbf89 2px, transparent 0)`,
          backgroundSize: "50px 50px"
        }}></div>
      </div>

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="max-w-xl animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <div className="inline-block rounded-full bg-pharmacy-100 px-3 py-1 text-sm font-medium text-pharmacy-800 mb-6 animate-slide-in">
              Your Trusted Health Partner
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
              Quality Healthcare <span className="text-pharmacy-600">Made Accessible</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Seethawaka Pharmacy provides expert care, quality medicines, and personalized health solutions to keep you and your family healthy.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/about" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-pharmacy-500 to-medical-500 text-white font-medium transition-all hover:shadow-lg active:scale-[0.98]"
              >
                About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <button className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white border border-gray-300 text-gray-700 font-medium transition-all hover:bg-gray-50 active:scale-[0.98] shadow-sm">
                Contact Us
              </button>
            </div>
          </div>
          <div className="relative lg:h-[500px] animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pharmacy-100 to-medical-100 transform rotate-3 scale-[0.96] animate-fade-in" style={{ animationDelay: '0.6s' }}></div>
            <div className="relative overflow-hidden rounded-2xl shadow-xl h-full">
              <img 
                src="https://images.unsplash.com/photo-1583212292454-1fe6229603b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8" 
                alt="Modern pharmacy interior with medications" 
                className="w-full h-full object-cover image-fade-in"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-medical-950/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
