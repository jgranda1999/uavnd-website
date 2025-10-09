import React from 'react';
import { Award, Building2, Handshake, Star, Users, Briefcase } from 'lucide-react';
import boeingImage from '../img/boeing.jpg';

const Sponsors: React.FC = () => {
  const sponsors = [
    {
      name: "Boeing",
      logo: boeingImage,
      description: "Leading aerospace manufacturer supporting our mission to develop the next generation of aerospace engineers.",
      level: "Platinum",
      website: "https://www.boeing.com",
      support: "Funding and mentorship"
    }
  ];


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
            We're grateful for the support of industry leaders who share our vision of advancing UAV technology and developing the next generation of engineers.
          </p>
        </div>

        {/* Current Sponsors */}
        <div className="mb-16">
          <h3 className="text-3xl font-display font-bold text-white text-center mb-12">Current Sponsors</h3>
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
            {sponsors.map((sponsor, index) => (
              <div key={index} className="card max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  {/* Sponsor Logo */}
                  <div className="flex-shrink-0">
                    <div className="w-48 h-24 bg-white rounded-lg flex items-center justify-center p-4">
                      <img 
                        src={sponsor.logo} 
                        alt={`${sponsor.name} Logo`} 
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>

                  {/* Sponsor Info */}
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                      <h4 className="text-2xl font-display font-bold text-white">{sponsor.name}</h4>
                    </div>
                    <p className="text-gray-300 mb-4 leading-relaxed">{sponsor.description}</p>
                    <a
                      href={sponsor.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary inline-flex items-center"
                    >
                      Visit Website
                      <Star className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
            Join industry leaders like Boeing in supporting the next generation of aerospace engineers. 
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
