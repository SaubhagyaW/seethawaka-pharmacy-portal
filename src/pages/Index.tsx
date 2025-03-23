import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import { ArrowRight, CalendarCheck, MapPin, Phone } from "lucide-react";
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
              Comprehensive healthcare solutions for you and your family
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
      
      {/* Contact Info Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-up">
                <div className="inline-block rounded-full bg-pharmacy-100 px-3 py-1 text-sm font-medium text-pharmacy-800 mb-6">
                  Visit Us Today
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-6">
                  We're Here to Help
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Visit our pharmacy for personalized care or contact us for more information about our services.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-pharmacy-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-pharmacy-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Address</h3>
                      <p className="text-gray-600">61/E, Ihala Hanwella, Hanwella, Sri Lanka</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-pharmacy-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-pharmacy-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Phone</h3>
                      <p className="text-gray-600">+94 72 383 6007</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-pharmacy-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CalendarCheck className="h-5 w-5 text-pharmacy-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Hours</h3>
                      <p className="text-gray-600">Monday - Sunday: 7:00 AM - 10:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:h-[500px] animate-fade-up" style={{ animationDelay: '0.3s' }}>
                <div className="h-full relative overflow-hidden rounded-2xl shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8" 
                    alt="Pharmacy storefront" 
                    className="w-full h-full object-cover image-fade-in"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
