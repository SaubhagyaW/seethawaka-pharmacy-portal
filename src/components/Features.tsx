
import { Heart, Clock, Medal, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeaturesProps {
  className?: string;
}

const features = [
  {
    icon: Heart,
    title: "Quality Healthcare",
    description: "We provide only the highest quality medicines and healthcare products to ensure your wellbeing.",
    delay: 0.1
  },
  {
    icon: Clock,
    title: "Extended Hours",
    description: "Open early and late to accommodate your busy schedule and urgent healthcare needs.",
    delay: 0.3
  },
  {
    icon: Medal,
    title: "Expert Pharmacists",
    description: "Our qualified pharmacists offer professional advice and personalized healthcare guidance.",
    delay: 0.5
  },
  {
    icon: Shield,
    title: "Trusted Service",
    description: "Serving the community with integrity and care for over 20 years.",
    delay: 0.7
  }
];

const Features = ({ className }: FeaturesProps) => {
  return (
    <section className={cn("py-16 md:py-24 bg-white", className)}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4">
            Why Choose Seethawaka Pharmacy
          </h2>
          <p className="text-xl text-gray-600">
            We're committed to providing exceptional pharmaceutical care and services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-xl p-8 border border-gray-100 transition-all hover:shadow-md hover:-translate-y-1 animate-fade-up"
              style={{ animationDelay: `${feature.delay}s` }}
            >
              <div className="w-12 h-12 bg-pharmacy-100 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="h-6 w-6 text-pharmacy-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
