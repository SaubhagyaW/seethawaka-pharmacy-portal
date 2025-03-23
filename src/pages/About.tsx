
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
              Your Health, <span className="text-pharmacy-600">Our Priority</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Seethawaka Pharmacy was established with a vision to provide exceptional pharmaceutical care to our community. As a newly opened pharmacy, we bring fresh energy and modern approaches to healthcare while maintaining the personalized attention that only a neighborhood pharmacy can offer.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 lg:h-[500px] animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <div className="h-full relative overflow-hidden rounded-2xl">
                <img 
                  src="/lovable-uploads/8ef0b3d5-e017-42d4-a769-638b75773b86.png" 
                  alt="Mission, Vision, and Values" 
                  className="w-full h-full object-contain bg-white p-6"
                  loading="lazy"
                />
              </div>
            </div>
            
            <div className="order-1 lg:order-2 animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-6">
                Our Mission & Values
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                As a brand new establishment, we're dedicated to bringing innovative healthcare solutions with a personal touch to our community.
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
                    title: "Our Beginning",
                    description: "We're excited to open our doors for the first time, bringing fresh perspectives and modern healthcare solutions to serve you better."
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
              name="Mr. Gihan Wickramaarachchi"
              title="Owner"
              description="As the founder of Seethawaka Pharmacy, Mr. Wickramaarachchi brings his vision of modern, accessible healthcare to our community."
              imageUrl="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
              delay={0.1}
            />
            
            <PharmacistCard 
              name="Ms. Bla bla"
              title="Head Pharmacist"
              description="With extensive training and education, our Head Pharmacist leads our team with expertise in medication management and patient care."
              imageUrl="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
              delay={0.2}
            />
            
            <PharmacistCard 
              name="Mr. Lahiru"
              title="Pharmacist"
              description="Dedicated to patient education and medication safety, Mr. Lahiru ensures our customers receive the best pharmaceutical care."
              imageUrl="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
              delay={0.3}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
