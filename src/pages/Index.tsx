import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { 
  Users, 
  Settings, 
  Award, 
  HeadphonesIcon, 
  Home, 
  Building2, 
  Factory, 
  Wrench,
  ArrowRight,
  MessageCircle,
  CheckCircle2
} from "lucide-react";
import heroImage from "@/assets/hero-solar.jpg";

const features = [
  {
    icon: Users,
    title: "Experienced Solar EPC Team",
    description: "Our skilled engineers bring years of expertise to every solar project.",
  },
  {
    icon: Settings,
    title: "End-to-End Installation",
    description: "From design to commissioning, we handle the complete EPC process.",
  },
  {
    icon: Award,
    title: "High-Quality Solar Panels",
    description: "We use only tier-1 solar panels and certified equipment.",
  },
  {
    icon: HeadphonesIcon,
    title: "Reliable After-Sales Support",
    description: "Dedicated support and maintenance to maximize your solar investment.",
  },
];

const services = [
  {
    icon: Home,
    title: "Residential Solar Installation",
    description: "Power your home with clean energy and reduce electricity bills.",
  },
  {
    icon: Building2,
    title: "Commercial Solar Solutions",
    description: "Sustainable energy solutions for offices and commercial spaces.",
  },
  {
    icon: Factory,
    title: "Industrial Solar EPC Projects",
    description: "Large-scale solar installations with complete EPC execution.",
  },
  {
    icon: Wrench,
    title: "Operation & Maintenance",
    description: "Performance monitoring and regular maintenance services.",
  },
];

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "50MW+", label: "Capacity Installed" },
  { value: "100+", label: "Happy Clients" },
  { value: "10+", label: "Years Experience" },
];

const Index = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello Green Valley Enterprises, I would like to get a free consultation for solar installation.");
    window.open(`https://wa.me/919999999999?text=${message}`, "_blank");
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-95" />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-6"
            >
              Powering a Greener Future with Solar Energy
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl"
            >
              Green Valley Enterprises provides end-to-end Solar EPC installation solutions 
              for residential, commercial, and industrial projects.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Button variant="heroOutline" size="xl" onClick={handleWhatsAppClick}>
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-heading font-bold text-3xl md:text-4xl text-secondary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
              Why Choose Green Valley?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We deliver reliable and sustainable solar EPC solutions that help you save money and the planet.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-card hover:shadow-lg transition-all duration-300 border border-border hover:border-secondary/50 group"
              >
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive solar solutions tailored to your needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-card hover:shadow-lg transition-all duration-300 border border-border flex gap-4 group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center flex-shrink-0">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/services">
              <Button variant="default" size="lg">
                View All Services
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
                Benefits of Going Solar
              </h2>
              <div className="space-y-4">
                {[
                  "Reduce electricity bills by up to 90%",
                  "Low maintenance with 25+ years lifespan",
                  "Increase your property value",
                  "Government subsidies and tax benefits",
                  "Contribute to a cleaner environment",
                  "Energy independence and security",
                ].map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-card">
                <img 
                  src={heroImage} 
                  alt="Solar panel installation" 
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground rounded-xl p-4 shadow-lg">
                <div className="font-heading font-bold text-2xl">25+</div>
                <div className="text-sm">Years Warranty</div>
              </div>
            </motion.div>
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
              Ready to Reduce Your Electricity Bill?
            </h2>
            <p className="text-foreground/80 text-lg max-w-2xl mx-auto mb-8">
              Start your solar journey today and enjoy clean, affordable energy for decades to come.
            </p>
            <Button 
              variant="whatsapp" 
              size="xl" 
              onClick={handleWhatsAppClick}
            >
              <MessageCircle className="w-5 h-5" />
              Talk to Our Solar Expert on WhatsApp
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;