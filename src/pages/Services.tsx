import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Home, Building2, Factory, Wrench, MessageCircle, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Home,
    title: "Residential Solar Installation",
    description: "Transform your home into a clean energy powerhouse with our residential solar solutions.",
    features: [
      "Customized system design for your home",
      "High-efficiency rooftop solar panels",
      "Net metering setup and support",
      "25-year performance warranty",
      "Professional installation by certified team",
      "Hassle-free government subsidy assistance",
    ],
  },
  {
    icon: Building2,
    title: "Commercial Solar Solutions",
    description: "Reduce operational costs and boost your green credentials with commercial solar power.",
    features: [
      "Tailored solutions for offices and retail spaces",
      "Optimal system sizing based on energy audit",
      "Minimal rooftop footprint with high output",
      "Grid-tied and hybrid options available",
      "Quick ROI with significant bill savings",
      "Comprehensive project management",
    ],
  },
  {
    icon: Factory,
    title: "Industrial Solar EPC Projects",
    description: "Large-scale solar installations with complete EPC execution for manufacturing units and industrial facilities.",
    features: [
      "MW-scale ground mount and rooftop systems",
      "Complete EPC from design to commissioning",
      "High Voltage connectivity solutions",
      "Power Purchase Agreement (PPA) options",
      "SCADA monitoring integration",
      "Dedicated project team and timeline management",
    ],
  },
  {
    icon: Wrench,
    title: "Operation & Maintenance",
    description: "Keep your solar system performing at its best with our comprehensive O&M services.",
    features: [
      "Regular preventive maintenance visits",
      "Remote monitoring and analytics",
      "Panel cleaning and inspection",
      "Inverter and component health checks",
      "Performance reporting and optimization",
      "24/7 breakdown support",
    ],
  },
];

const processSteps = [
  {
    step: 1,
    title: "Site Assessment",
    description: "Our experts visit your site to evaluate solar potential and energy requirements.",
  },
  {
    step: 2,
    title: "Custom Design",
    description: "We design a tailored solar system optimized for maximum energy generation.",
  },
  {
    step: 3,
    title: "Procurement",
    description: "We source high-quality equipment from trusted tier-1 manufacturers.",
  },
  {
    step: 4,
    title: "Installation",
    description: "Our certified team installs your system with precision and care.",
  },
  {
    step: 5,
    title: "Commissioning",
    description: "System testing, grid connectivity, and handover with complete documentation.",
  },
  {
    step: 6,
    title: "Ongoing Support",
    description: "Continuous monitoring and maintenance to ensure optimal performance.",
  },
];

const Services = () => {
  const handleServiceEnquiry = (serviceName: string) => {
    const message = encodeURIComponent(`Hello Green Valley Enterprises, I am interested in ${serviceName}. Please provide more information.`);
    window.open(`https://wa.me/919999999999?text=${message}`, "_blank");
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-95" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary-foreground mb-6">
              Our Solar Services
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Comprehensive solar EPC solutions for every scale and requirement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`grid lg:grid-cols-2 gap-10 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-16 h-16 rounded-xl bg-gradient-hero flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground text-lg mb-6">{service.description}</p>
                  <Button 
                    variant="whatsapp" 
                    size="lg"
                    onClick={() => handleServiceEnquiry(service.title)}
                  >
                    <MessageCircle className="w-5 h-5" />
                    Enquire on WhatsApp
                  </Button>
                </div>

                <div className={`bg-muted rounded-xl p-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h4 className="font-heading font-semibold text-lg text-foreground mb-4">
                    What's Included:
                  </h4>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
              Our EPC Process
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A streamlined process to take you from concept to clean energy in no time.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-card border border-border relative"
              >
                <div className="absolute -top-4 left-6 w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-heading font-bold">
                  {item.step}
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2 mt-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-cta">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
              Ready to Start Your Solar Journey?
            </h2>
            <p className="text-foreground/80 text-lg max-w-2xl mx-auto mb-8">
              Get a free site assessment and custom quote for your solar project today.
            </p>
            <Link to="/contact">
              <Button variant="default" size="xl">
                Get Free Quote
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;