import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import {CalendarCheck, Mail, MapPin, Phone, SendIcon} from "lucide-react";
import {useEffect, useState} from "react";
import {toast} from "sonner";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("submitted") === "true") {
      toast.success("Thank you for your message! We'll get back to you soon.", {
        description: "Your message has been sent successfully to info@seethawakapharmacy.com",
      });
      // Clean up the URL
      window.history.replaceState({}, "", "/contact");
    }
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log("Form submission started");

    // Get form data for debugging
    const formData = new FormData(e.target as HTMLFormElement);
    console.log("Form data:", {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    });

    const isProduction = !window.location.hostname.includes('localhost') && !window.location.hostname.startsWith('127.');

    if (isProduction) {
      console.log("Production mode - letting Netlify handle form");
      setIsSubmitting(true);
      // Let form submit naturally to Netlify
      return;
    } else {
      console.log("Development mode - preventing default");
      e.preventDefault();
      setIsSubmitting(true);

      setTimeout(() => {
        toast.success("Message captured locally.", {
          description: "Deploy to Netlify to send actual emails.",
        });
        setIsSubmitting(false);
        (e.target as HTMLFormElement).reset();
      }, 1000);
    }
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
              <div
                  className="inline-block rounded-full bg-pharmacy-100 px-3 py-1 text-sm font-medium text-pharmacy-800 mb-4">
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
                    <div
                        className="w-10 h-10 bg-pharmacy-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-pharmacy-600"/>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Address</h3>
                      <p className="text-gray-600">61/E, Ihala Hanwella, Hanwella, Sri Lanka</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div
                        className="w-10 h-10 bg-pharmacy-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-pharmacy-600"/>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Phone</h3>
                      <p className="text-gray-600">+94 72 383 6007</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div
                        className="w-10 h-10 bg-pharmacy-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-pharmacy-600"/>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Email</h3>
                      <p className="text-gray-600">info@seethawakapharmacy.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div
                        className="w-10 h-10 bg-pharmacy-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CalendarCheck className="h-5 w-5 text-pharmacy-600"/>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Hours</h3>
                      <p className="text-gray-600">Monday - Sunday: 9:00 AM - 9:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm animate-fade-up"
                   style={{animationDelay: '0.2s'}}>
                <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>

                {/* Simple, foolproof HTML form */}
                <form
                    name="contact"
                    method="POST"
                    action="/contact?submitted=true"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                >
                  {/* Hidden fields for Netlify */}
                  <input type="hidden" name="form-name" value="contact"/>
                  <div style={{display: 'none'}}>
                    <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                  </div>

                  {/* Name Field */}
                  <div style={{marginBottom: '1.5rem'}}>
                    <label
                        htmlFor="name"
                        style={{
                          display: 'block',
                          fontSize: '0.875rem',
                          fontWeight: '500',
                          color: '#374151',
                          marginBottom: '0.25rem'
                        }}
                    >
                      Name *
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your full name"
                        required
                        disabled={isSubmitting}
                        style={{
                          display: 'flex',
                          height: '2.5rem',
                          width: '100%',
                          borderRadius: '0.375rem',
                          border: '1px solid #d1d5db',
                          backgroundColor: '#ffffff',
                          padding: '0.5rem 0.75rem',
                          fontSize: '0.875rem',
                          lineHeight: '1.25rem'
                        }}
                    />
                  </div>

                  {/* Email Field */}
                  <div style={{marginBottom: '1.5rem'}}>
                    <label
                        htmlFor="email"
                        style={{
                          display: 'block',
                          fontSize: '0.875rem',
                          fontWeight: '500',
                          color: '#374151',
                          marginBottom: '0.25rem'
                        }}
                    >
                      Email *
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        required
                        disabled={isSubmitting}
                        style={{
                          display: 'flex',
                          height: '2.5rem',
                          width: '100%',
                          borderRadius: '0.375rem',
                          border: '1px solid #d1d5db',
                          backgroundColor: '#ffffff',
                          padding: '0.5rem 0.75rem',
                          fontSize: '0.875rem',
                          lineHeight: '1.25rem'
                        }}
                    />
                  </div>

                  {/* Message Field */}
                  <div style={{marginBottom: '1.5rem'}}>
                    <label
                        htmlFor="message"
                        style={{
                          display: 'block',
                          fontSize: '0.875rem',
                          fontWeight: '500',
                          color: '#374151',
                          marginBottom: '0.25rem'
                        }}
                    >
                      Message *
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="How can we help you? Please describe your inquiry in detail."
                        rows={5}
                        required
                        disabled={isSubmitting}
                        style={{
                          display: 'flex',
                          minHeight: '5rem',
                          width: '100%',
                          borderRadius: '0.375rem',
                          border: '1px solid #d1d5db',
                          backgroundColor: '#ffffff',
                          padding: '0.5rem 0.75rem',
                          fontSize: '0.875rem',
                          lineHeight: '1.25rem',
                          resize: 'none'
                        }}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                      type="submit"
                      disabled={isSubmitting}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        height: '2.5rem',
                        borderRadius: '0.375rem',
                        background: 'linear-gradient(to right, #00A99D, #F5A623)',
                        color: 'white',
                        fontWeight: '500',
                        border: 'none',
                        cursor: isSubmitting ? 'not-allowed' : 'pointer',
                        opacity: isSubmitting ? 0.5 : 1
                      }}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <SendIcon style={{marginLeft: '0.5rem', width: '1rem', height: '1rem'}} />
                  </button>
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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.978732939736!2d80.08208501538759!3d6.897066030341858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae250a3802c64e9%3A0xf556a5c3a099a9f!2sSeethawaka%20Pharmacy!5e0!3m2!1sen!2sus!4v1710867742913!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{border: 0}}
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
