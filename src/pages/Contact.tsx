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

  // Encode form data for Netlify
  const encode = (data: Record<string, string>) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  };

  // Handle form submission with toast notification (no redirect)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Always prevent default to avoid redirect
    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    // Convert FormData to object for Netlify
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    // Add form-name for Netlify
    data['form-name'] = 'contact';

    try {
      // Submit to Netlify with proper encoding
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode(data)
      });

      if (response.ok) {
        toast.success("Thank you for your message! We'll get back to you soon.", {
          description: "Your message has been sent successfully to info@seethawakapharmacy.com",
        });
        form.reset();
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      toast.error("Failed to send message", {
        description: "Please try again or contact us directly at info@seethawakapharmacy.com",
      });
    } finally {
      setIsSubmitting(false);
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
                      <MapPin className="h-5 w-5 text-pharmacy-600"/>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Address</h3>
                      <p className="text-gray-600">61/E, Ihala Hanwella, Hanwella, Sri Lanka</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-pharmacy-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-pharmacy-600"/>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Phone</h3>
                      <p className="text-gray-600">+94 72 383 6007</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-pharmacy-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-pharmacy-600"/>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Email</h3>
                      <p className="text-gray-600">info@seethawakapharmacy.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-pharmacy-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CalendarCheck className="h-5 w-5 text-pharmacy-600"/>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Hours</h3>
                      <p className="text-gray-600">Monday - Sunday: 9:00 AM - 9:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form - EXACTLY matching the working test-form.html */}
              <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm animate-fade-up"
                   style={{animationDelay: '0.2s'}}>
                <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>

                {/* CRITICAL: This form must match test-form.html exactly */}
                <form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                >
                  {/* Hidden form-name field */}
                  <input type="hidden" name="form-name" value="contact" />

                  {/* Honeypot field - must match exactly */}
                  <div style={{display: 'none'}}>
                    <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                  </div>

                  {/* Name field - exact same structure as test-form.html */}
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                        name="name"
                        type="text"
                        placeholder="Name"
                        required
                        disabled={isSubmitting}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>

                  {/* Email field - exact same structure as test-form.html */}
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        required
                        disabled={isSubmitting}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>

                  {/* Message field - exact same structure as test-form.html */}
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                        name="message"
                        placeholder="Message"
                        required
                        rows={5}
                        disabled={isSubmitting}
                        className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                    />
                  </div>

                  {/* Submit button - exact same structure as test-form.html */}
                  <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center w-full h-10 px-4 py-2 rounded-md bg-gradient-to-r from-pharmacy-500 to-medical-500 text-white font-medium transition-all hover:shadow-lg active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Send"}
                    <SendIcon className="ml-2 h-4 w-4" />
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
