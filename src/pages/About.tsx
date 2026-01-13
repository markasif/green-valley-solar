import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Target, Eye, Leaf, Award, Users, Clock, MessageCircle } from "lucide-react";
import aboutImage from "@/assets/about-solar.jpg";

const values = [
  {
    icon: Award,
    title: "Quality Excellence",
    description: "We never compromise on the quality of equipment and workmanship.",
  },
  {
    icon: Users,
    title: "Customer First",
    description: "Your satisfaction and energy goals are our top priority.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "We complete projects on schedule without compromising quality.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "We are committed to creating a greener, cleaner future.",
  },
];

const About = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello Green Valley Enterprises, I would like to learn more about your company and services.");
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
              About Green Valley Enterprises
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Your trusted partner in sustainable solar energy solutions since 2014.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
                Who We Are
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Green Valley Enterprises is a leading Solar EPC (Engineering, Procurement, and Construction) 
                  company committed to delivering reliable and sustainable solar energy solutions. With over 
                  a decade of experience, we have successfully completed more than 500 projects across 
                  residential, commercial, and industrial sectors.
                </p>
                <p>
                  Our team of certified engineers and technicians brings extensive expertise to every project, 
                  ensuring seamless installation and optimal performance of your solar power systems. We partner 
                  with top-tier equipment manufacturers to provide you with the highest quality solar panels, 
                  inverters, and mounting systems.
                </p>
                <p>
                  At Green Valley, we believe in making solar energy accessible and affordable for everyone. 
                  Our end-to-end solutions include site assessment, custom system design, installation, 
                  grid connectivity, and ongoing maintenance support.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="rounded-2xl overflow-hidden shadow-card">
                <img 
                  src={aboutImage} 
                  alt="Solar farm at sunset" 
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl p-8 shadow-card border border-border"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To accelerate the adoption of clean solar energy by providing innovative, reliable, 
                and cost-effective EPC solutions. We strive to empower homes, businesses, and industries 
                to reduce their carbon footprint while enjoying significant savings on energy costs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card rounded-xl p-8 shadow-card border border-border"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted and preferred solar EPC partner in India, leading the 
                renewable energy revolution. We envision a future where every rooftop and open 
                space contributes to a sustainable, energy-independent nation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Solar Energy */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">
              <Leaf className="w-8 h-8 text-secondary" />
            </div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
              Why Solar Energy?
            </h2>
            <p className="text-muted-foreground text-lg">
              Solar energy is clean, renewable, and increasingly affordable. Here's why millions 
              are making the switch to solar power.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Environmental Impact",
                description: "Solar energy produces zero emissions, helping reduce your carbon footprint and combat climate change.",
              },
              {
                title: "Energy Independence",
                description: "Generate your own electricity and reduce dependence on the grid and fluctuating energy prices.",
              },
              {
                title: "Financial Savings",
                description: "Dramatically cut your electricity bills and benefit from government incentives and subsidies.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center mx-auto mb-4 font-heading font-bold text-xl">
                  {index + 1}
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The principles that guide everything we do at Green Valley Enterprises.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-card border border-border text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-foreground mb-4">
              Let's Build a Greener Future Together
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
              Partner with Green Valley Enterprises for your solar energy needs and join the renewable revolution.
            </p>
            <Button 
              variant="hero" 
              size="xl" 
              onClick={handleWhatsAppClick}
            >
              <MessageCircle className="w-5 h-5" />
              Connect With Us on WhatsApp
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;