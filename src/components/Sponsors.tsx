import React from 'react';
import { Award, Building2, Handshake, Users, Briefcase } from 'lucide-react';

const Sponsors: React.FC = () => {


  const partnershipBenefits = [
    {
      icon: Users,
      title: "Talent Pipeline",
      description: "Direct access to top engineering students for internships and full-time positions"
    },
    {
      icon: Briefcase,
      title: "Industry Projects",
      description: "Collaborate on real-world UAV projects and cutting-edge research initiatives"
    },
    {
      icon: Award,
      title: "Brand Recognition",
      description: "Showcase your company's commitment to aerospace education and innovation"
    },
    {
      icon: Handshake,
      title: "Networking",
      description: "Connect with faculty, students, and industry professionals at exclusive events"
    }
  ];

  return (
    <section id="sponsors" className="section-padding bg-dark-bg">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-nd-gold/10 border border-nd-gold/20 text-nd-gold text-sm font-medium mb-6">
            <Building2 className="w-4 h-4 mr-2" />
            Our Sponsors
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Partnering for Innovation
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're looking for industry partners who share our vision of advancing UAV technology and developing the next generation of engineers.
          </p>
        </div>

        {/* Partnership Benefits */}
        <div className="mb-16">
          <h3 className="text-3xl font-display font-bold text-white text-center mb-12">Partnership Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="card text-center">
                  <div className="w-16 h-16 bg-nd-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-nd-gold" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-3">{benefit.title}</h4>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>


        {/* Call to Action */}
        <div className="bg-gradient-to-r from-nd-blue to-nd-navy rounded-2xl p-8 border border-dark-border text-center">
          <h3 className="text-3xl font-display font-bold text-white mb-4">Become a Sponsor</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Support the next generation of UAV engineers. 
            Your partnership helps us continue our mission of innovation and education.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#contact" className="btn-primary">
              Contact Us
            </a>
            <a href="mailto:uavnd@nd.edu" className="btn-secondary">
              Email Partnership Team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
