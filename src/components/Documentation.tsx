import React from 'react';
import { FileText, Download, ExternalLink, BookOpen, Shield, Users, FileCheck } from 'lucide-react';
import charterDoc from '../docs/uavnd_charter.pdf';
import constitutionDoc from '../docs/club_constitution__summer_sao_submission_.pdf';
import flyerDoc from '../docs/uavnd_flyer_final_2.0.pdf';
import tpDoc from '../docs/uavnd_tp__submission.pdf';
import safetyDoc from '../docs/uavnd_safety_handbook.pdf';

const Documentation: React.FC = () => {
  const documents = [
    {
      id: 1,
      title: "AUVSI Technical Design Paper 2021",
      description: "2021 AUVSI Technical Design Paper - comprehensive technical documentation of our UAV systems and design specifications.",
      icon: ExternalLink,
      file: tpDoc,
      category: "Technical",
      size: "1.1MB"
    },
    {
      id: 2,
      title: "Safety Handbook",
      description: "2020-2021 Safety Manual - comprehensive safety guidelines and procedures for UAV operations and club activities.",
      icon: Shield,
      file: safetyDoc,
      category: "Safety",
      size: "170KB"
    },
    {
      id: 3,
      title: "Club Charter",
      description: "2020-2021 Club Charter - official charter document outlining the club's mission, structure, and governance.",
      icon: BookOpen,
      file: charterDoc,
      category: "Governance",
      size: "238KB"
    },
    {
      id: 4,
      title: "Club Constitution",
      description: "2020-2021 Club Constitution - constitutional document defining club rules, procedures, and member responsibilities.",
      icon: FileCheck,
      file: constitutionDoc,
      category: "Governance",
      size: "65KB"
    },
    {
      id: 5,
      title: "Club Advertisement",
      description: "2020-2021 Club Advertisement - informational flyer about UAV ND, our projects, and how to get involved.",
      icon: FileText,
      file: flyerDoc,
      category: "Information",
      size: "492KB"
    }
  ];

  const categories = [
    { name: "All", count: documents.length },
    { name: "Governance", count: documents.filter(doc => doc.category === "Governance").length },
    { name: "Safety", count: documents.filter(doc => doc.category === "Safety").length },
    { name: "Information", count: documents.filter(doc => doc.category === "Information").length },
    { name: "Technical", count: documents.filter(doc => doc.category === "Technical").length }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Governance':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Safety':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'Information':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Technical':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <section id="documentation" className="section-padding bg-dark-bg">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-nd-gold/10 border border-nd-gold/20 text-nd-gold text-sm font-medium mb-6">
            <FileText className="w-4 h-4 mr-2" />
            Documentation
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Club Resources
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Access our official documents, safety guidelines, and technical resources. All documents are available for download.
          </p>
        </div>

        {/* Document Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.name}
              className="px-4 py-2 bg-dark-surface border border-dark-border rounded-lg text-gray-300 hover:text-nd-gold hover:border-nd-gold/50 transition-colors duration-200"
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {documents.map((doc, index) => {
            const Icon = doc.icon;
            return (
              <div
                key={doc.id}
                className="card group hover:shadow-2xl hover:shadow-nd-gold/10 transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Document Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-nd-gold/20 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-nd-gold" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(doc.category)}`}>
                    {doc.category}
                  </span>
                </div>

                {/* Document Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-display font-semibold text-white group-hover:text-nd-gold transition-colors">
                    {doc.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    {doc.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>Size: {doc.size}</span>
                    <span>PDF Document</span>
                  </div>

                  {/* Download Button */}
                  <a
                    href={doc.file}
                    download
                    className="inline-flex items-center justify-center w-full px-4 py-3 bg-nd-gold/10 border border-nd-gold/20 text-nd-gold hover:bg-nd-gold/20 hover:border-nd-gold/40 transition-colors duration-200 rounded-lg font-medium group"
                  >
                    <Download className="w-4 h-4 mr-2 group-hover:translate-y-[-2px] transition-transform" />
                    Download PDF
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Resources */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-nd-blue to-nd-navy rounded-2xl p-8 border border-dark-border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-display font-bold text-white mb-4">
                  Need More Information?
                </h3>
                <p className="text-gray-300 mb-6">
                  Can't find what you're looking for? Our leadership team is always available to answer questions and provide additional resources.
                </p>
                <a href="#contact" className="btn-primary inline-flex items-center group">
                  Contact Us
                  <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-white mb-4">
                  Stay Updated
                </h3>
                <p className="text-gray-300 mb-6">
                  Documents are regularly updated. Check back frequently for the latest versions of our policies and procedures.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://www.instagram.com/uavnd_?igsh=MXVicmVyZDV3cTJvcQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-nd-gold hover:text-yellow-400 transition-colors"
                    aria-label="Instagram"
                  >
                    <Users className="w-6 h-6" />
                  </a>
                  <a
                    href="https://github.com/uavnd-hub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-nd-gold hover:text-yellow-400 transition-colors"
                    aria-label="GitHub"
                  >
                    <FileText className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Documentation;
