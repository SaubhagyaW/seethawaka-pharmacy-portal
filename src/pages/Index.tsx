
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import { ArrowRight, Pill, MessageCircleHeart, Stethoscope, Truck, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      
      {/* Services Section */}
      <section className="py-16 md:py-24 bg-pharmacy-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600">
              Introducing our comprehensive healthcare solutions for you and your family
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Pill,
                title: "Prescription Dispensing",
                description: "Fast, accurate filling of your prescriptions with clear instructions and expert advice from our qualified pharmacists.",
                delay: 0.1
              },
              {
                icon: MessageCircleHeart,
                title: "Therapeutic Management and Counselling",
                description: "Our pharmacists provide personalized guidance on medication therapy, helping you understand your treatment plan, potential side effects, and how to maximize therapeutic benefits while minimizing risks.",
                delay: 0.2
              },
              {
                icon: Stethoscope,
                title: "Health Screenings",
                description: "Regular blood pressure checks, blood glucose monitoring, and basic health assessments to help you stay on top of your health.",
                delay: 0.3
              },
              {
                icon: Truck,
                title: "Home Delivery",
                description: "Convenient delivery of medications to your doorstep, especially beneficial for elderly patients, those with chronic conditions, or busy individuals.",
                delay: 0.4
              },
              {
                icon: ShoppingBag,
                title: "Health Products",
                description: "Wide selection of vitamins, supplements, first aid supplies, and personal care items carefully chosen for quality and effectiveness.",
                delay: 0.5
              },
            ].map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-8 border border-gray-100 transition-all hover:shadow-md hover:-translate-y-1 animate-fade-up"
                style={{ animationDelay: `${service.delay}s` }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-pharmacy-100 to-medical-100 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="h-6 w-6 text-pharmacy-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link 
                  to="/about" 
                  className="inline-flex items-center text-pharmacy-600 font-medium hover:text-pharmacy-700"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block rounded-full bg-pharmacy-100 px-3 py-1 text-sm font-medium text-pharmacy-800 mb-6 animate-fade-up">
              Get In Touch
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-6 animate-fade-up">
              We're Here to Help
            </h2>
            <p className="text-xl text-gray-600 mb-8 animate-fade-up max-w-3xl mx-auto">
              Visit our brand new pharmacy for personalized care or contact us through our dedicated contact page for more information about our services.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-pharmacy-500 to-medical-500 text-white font-medium transition-all hover:shadow-lg active:scale-[0.98] animate-fade-up"
            >
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
