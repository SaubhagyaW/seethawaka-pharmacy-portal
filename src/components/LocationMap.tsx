
import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';

const LocationMap = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4 text-pharmacy-500">
            Find Us on the Map
          </h2>
          <p className="text-xl text-gray-600">
            We're located in the heart of Hanwella, easily accessible from the main road
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 rounded-xl overflow-hidden shadow-md animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <img 
              src="/lovable-uploads/e0870b6b-c90a-4286-81a1-553200d6bfa2.png" 
              alt="Location Map of Seethawaka Pharmacy" 
              className="w-full h-auto object-cover"
            />
          </div>
          
          <div className="bg-pharmacy-50 p-8 rounded-xl shadow-md animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-2xl font-semibold mb-6 text-pharmacy-600">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-r from-pharmacy-100 to-medical-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-pharmacy-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1 text-pharmacy-700">Address</h4>
                  <p className="text-gray-600">
                    123 Main Street,<br />
                    Hanwella,<br />
                    Sri Lanka
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-r from-pharmacy-100 to-medical-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-pharmacy-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1 text-pharmacy-700">Phone</h4>
                  <p className="text-gray-600">+94 11 123 4567</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-r from-pharmacy-100 to-medical-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 text-pharmacy-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1 text-pharmacy-700">Opening Hours</h4>
                  <p className="text-gray-600">
                    Monday - Saturday: 8:00 AM - 8:00 PM<br />
                    Sunday: 9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
