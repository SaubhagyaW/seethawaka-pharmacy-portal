
import { Heart, Clock, Medal, Shield, PiggyBank, Home, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

interface FeaturesProps {
  className?: string;
}

const features = [
  {
    icon: Heart,
    title: "Your Trusted Healthcare Partner",
    description: "At Seethawaka Pharmacy, we pride ourselves on being more than just a place to fill prescriptions. We are your dedicated healthcare partners committed to your wellbeing.",
    delay: 0.1
  },
  {
    icon: Medal,
    title: "Expert Pharmaceutical Care",
    description: "Our team of experienced pharmacists offers personalized consultation and medication management to ensure you receive the right treatment for your needs.",
    delay: 0.2
  },
  {
    icon: Shield,
    title: "Wide Range of Products",
    description: "From prescription medications to wellness products, we stock a comprehensive selection of healthcare items to meet all your family's needs under one roof.",
    delay: 0.3
  },
  {
    icon: Clock,
    title: "Convenient Services",
    description: "Enjoy the convenience of our quick prescription refills, medication delivery service, and extended operating hours designed to accommodate your busy schedule.",
    delay: 0.5
  },
  {
    icon: Users,
    title: "Community-Centered Approach",
    description: "As a local pharmacy, we understand our community's unique healthcare needs and tailor our services accordingly, creating lasting relationships with our customers.",
    delay: 0.6
  }
];

const Features = ({ className }: FeaturesProps) => {
  return (
    <section className={cn("py-16 md:py-24 bg-white", className)}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-pharmacy font-bold tracking-tight mb-4 text-pharmacy-500">
            Why Choose Seethawaka Pharmacy
          </h2>
          <p className="text-xl text-gray-600 font-pharmacy">
            We're committed to providing exceptional pharmaceutical care and services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border border-gray-100 transition-all hover:shadow-md hover:-translate-y-1 animate-fade-up bg-gray-50"
              style={{ animationDelay: `${feature.delay}s` }}
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-pharmacy-100 to-medical-100 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="h-6 w-6 text-pharmacy-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3 font-pharmacy text-pharmacy-600">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
