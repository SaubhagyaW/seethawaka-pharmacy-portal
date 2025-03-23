
import Layout from "@/components/Layout";
import PharmacistCard from "@/components/PharmacistCard";
import { Award, Users, History, Target } from "lucide-react";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-pharmacy-50 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, #0ca1ea 2px, transparent 0)`,
            backgroundSize: "50px 50px"
          }}></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <div className="inline-block rounded-full bg-pharmacy-100 px-3 py-1 text-sm font-medium text-pharmacy-800 mb-6">
              About Us
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
              Committed to Your Health Since <span className="text-pharmacy-600">2000</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Seethawaka Pharmacy has been serving the community with quality healthcare products and personalized service for over two decades.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 lg:h-[500px] animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <div className="h-full relative overflow-hidden rounded-2xl shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8" 
                  alt="Pharmacy team" 
                  className="w-full h-full object-cover image-fade-in"
                  loading="lazy"
                />
              </div>
            </div>
            
            <div className="order-1 lg:order-2 animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-6">
                Our Mission & Values
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We're dedicated to improving the health and wellbeing of our community through personalized care and quality products.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    icon: Target,
                    title: "Our Mission",
                    description: "To provide accessible, high-quality healthcare products and services to improve the health and wellbeing of our community."
                  },
                  {
                    icon: Users,
                    title: "Customer-Centered",
                    description: "We put our customers' needs first, providing personalized care and advice for every individual."
                  },
                  {
                    icon: Award,
                    title: "Quality Assurance",
                    description: "We ensure that all our products meet the highest standards of quality and effectiveness."
                  },
                  {
                    icon: History,
                    title: "Our History",
                    description: "Founded in 2000, we've grown from a small family pharmacy to a trusted healthcare provider in the community."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-10 h-10 bg-pharmacy-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-pharmacy-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              Our qualified professionals are committed to providing you with the best service and care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PharmacistCard 
              name="Dr. Amara Silva"
              title="Head Pharmacist"
              description="With over 15 years of experience, Dr. Silva leads our team with expertise in medication management and patient care."
              imageUrl="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
              delay={0.1}
            />
            
            <PharmacistCard 
              name="Nadun Perera"
              title="Owner"
              description="As the founder of Seethawaka Pharmacy, Mr. Perera has built our reputation on quality service and community care since 2000."
              imageUrl="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
              delay={0.3}
            />
            
            <PharmacistCard 
              name="Tharushi Jayawardena"
              title="Pharmacist"
              description="Specializing in patient counseling, Ms. Jayawardena ensures our customers understand their medications and health needs."
              imageUrl="https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
              delay={0.5}
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
            <div className="inline-block rounded-full bg-pharmacy-100 px-3 py-1 text-sm font-medium text-pharmacy-800 mb-6">
              Testimonials
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              We take pride in the trust our community places in us
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Chamara Ranasinghe",
                text: "The pharmacists at Seethawaka are incredibly knowledgeable and always take the time to explain my medications. I wouldn't go anywhere else!",
                delay: 0.1
              },
              {
                name: "Kumari Bandara",
                text: "I've been coming to Seethawaka Pharmacy for years. The service is always friendly, and they go above and beyond to help with all my health needs.",
                delay: 0.3
              },
              {
                name: "Dinesh Fernando",
                text: "What sets Seethawaka apart is their genuine care for customers. They remember my name and always check in on how I'm doing with my medications.",
                delay: 0.5
              }
            ].map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-gray-50 rounded-xl p-8 border border-gray-100 shadow-sm animate-fade-up"
                style={{ animationDelay: `${testimonial.delay}s` }}
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <p className="font-semibold">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
