import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import {CalendarCheck, Mail, MapPin, Phone, SendIcon} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {useEffect, useState} from "react";
import {toast} from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setFormData(prev => ({...prev, [name]: value}));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simple approach - open email client with pre-filled data
    const subject = encodeURIComponent(`Website Contact: ${formData.name}`);
    const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n\n` +
        `Message:\n${formData.message}\n\n` +
        `---\nSent from Seethawaka Pharmacy website contact form`
    );

    const mailtoLink = `mailto:info@seethawakapharmacy.com?subject=${subject}&body=${body}`;

    try {
      // Open the email client
      window.location.href = mailtoLink;

      // Show success message
      toast.success("Email client opened!", {
        description: "Please send the pre-filled email from your email app.",
      });

      // Clear form after a short delay
      setTimeout(() => {
        setFormData({ name: "", email: "", message: "" });
      }, 1000);

    } catch (error) {
      toast.error("Could not open email client", {
        description: "Please manually email us at info@seethawakapharmacy.com",
      });
    } finally {
      setIsSubmitting(false);
    }
  };web3forms.com/submit', {
  method: 'POST',
      headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    access_key: "YOUR_WEB3FORMS_ACCESS_KEY", // Replace this
    name: formData.name,
    email: formData.email,
    message: formData.message,
    subject: `New message from ${formData.name} - Seethawaka Pharmacy Website`,
    from_name: "Seethawaka Pharmacy Website",
    to: "info@seethawakapharmacy.com"
  }),
});

const result = await response.json();

if (result.success) {
  toast.success("Message sent successfully!", {
    description: "We've received your message and will get back to you soon.",
  });
  setFormData({ name: "", email: "", message: "" });
} else {
  throw new Error(result.message || 'Form submission failed');
}
} catch (error) {
  console.error('Error:', error);

  // Simple fallback - open email client
  const subject = encodeURIComponent(`Message from ${formData.name}`);
  const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
  const mailtoLink = `mailto:info@seethawakapharmacy.com?subject=${subject}&body=${body}`;

  toast.error("Unable to send message automatically", {
    description: "Click OK to open your email client, or call us at +94 72 383 6007",
    action: {
      label: "Open Email",
      onClick: () => window.open(mailtoLink)
    }
  });
} finally {
  setIsSubmitting(false);
}
};

useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  if (params.get("submitted") === "true") {
    toast.success("Thank you for your message! We'll get back to you soon.", {
      description: "Your message has been sent successfully.",
    });
    window.history.replaceState({}, "", "/contact");
  }
}, []);

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

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Hidden spam prevention field */}
                <input type="checkbox" name="botcheck" className="hidden" style={{display: 'none'}} />

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
                      disabled={isSubmitting}
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
                      disabled={isSubmitting}
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
                      disabled={isSubmitting}
                  />
                </div>

                <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-pharmacy-500 to-medical-500 font-medium transition-all hover:shadow-lg"
                    disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <SendIcon className="ml-2 h-4 w-4"/>
                </Button>
              </form>

              <div className="mt-4 text-center text-sm text-gray-500">
                Having trouble? Email us directly at{" "}
                <a href="mailto:info@seethawakapharmacy.com" className="text-pharmacy-600 hover:underline">
                  info@seethawakapharmacy.com
                </a>
              </div>
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
