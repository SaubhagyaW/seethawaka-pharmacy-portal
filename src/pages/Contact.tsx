
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { CalendarCheck, Mail, MapPin, Phone, SendIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your message! We'll get back to you soon.", {
      description: "Your message has been sent successfully.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Layout>
      <SEO 
        title="Contact Us" 
        description="Get in touch with Seethawaka Pharmacy. Visit our location in Hanwella or send us a message for any inquiries about our pharmaceutical services."
        canonicalUrl="https://seethawakapharmacy.com/contact"
      />
      
      <section className="py-16 md:py-24 bg-pharmacy-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
            <div className="inline-block rounded-full bg-pharmacy-100 px-3 py-1 text-sm font-medium text-pharmacy-800 mb-4">
              Get In Touch
            </div>
            <h1 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600">
              We're here to help with any questions you may have about our services
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm animate-fade-up">
              <h2 className="text-2xl font-semibold mb-6">Visit Our Location</h2>
              <p className="text-gray-600 mb-8">
                Visit our brand new pharmacy for personalized care or contact us using any of the methods below.
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
                    <Mail className="h-5 w-5 text-pharmacy-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <p className="text-gray-600">info@seethawakapharmacy.com</p>
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

            {/* Contact Form */}
            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <Input 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name" 
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com" 
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?" 
                    rows={5} 
                    required
                    className="w-full resize-none"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-pharmacy-500 to-medical-500 font-medium transition-all hover:shadow-lg"
                >
                  Send Message
                  <SendIcon className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-display font-bold tracking-tight mb-4">
                Find Us on the Map
              </h2>
              <p className="text-xl text-gray-600">
                We're located in the heart of Hanwella, easily accessible from the main road
              </p>
            </div>
            <div className="h-[400px] rounded-xl overflow-hidden shadow-lg animate-fade-up">
              <iframe 
                src="https://www.google.com/maps/place/Seethawaka+Pharmacy/@6.8970549,80.0846616,17z/data=!4m2!3m1!1s0x3ae250a3802c64e9:0xf556a5c3a099a9f?entry=ttu" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Seethawaka Pharmacy location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
