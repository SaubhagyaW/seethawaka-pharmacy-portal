
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import { ArrowRight } from "lucide-react";
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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Prescription Services",
                description: "Quick and accurate dispensing of your medications with professional guidance.",
                delay: 0.1
              },
              {
                title: "Health Consultations",
                description: "Personal health advice from our experienced pharmacists.",
                delay: 0.3
              },
              {
                title: "Health Products",
                description: "Quality healthcare, wellness, and beauty products for all your needs.",
                delay: 0.5
              },
            ].map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-8 border border-gray-100 transition-all hover:shadow-md hover:-translate-y-1 animate-fade-up"
                style={{ animationDelay: `${service.delay}s` }}
              >
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
