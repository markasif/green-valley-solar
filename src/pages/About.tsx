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
      {/* Global Decorative Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-gray-50 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-gray-50 rounded-full blur-3xl opacity-60" />
      </div>

      {/* Hero Section - Matching Home Page Design */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${aboutImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />

        {/* Gradient Overlay - Dark to Transparent */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent z-10" />

        <div className="container mx-auto px-4 relative z-20 pt-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-amber font-bold tracking-widest uppercase text-sm mb-4 block">Since 2014</span>
              <h1 className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight drop-shadow-lg">
                Powering the Future with <br /><span className="text-amber">Sustainable Energy</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-100 max-w-2xl font-medium drop-shadow-md leading-relaxed">
                Your trusted EPC partner committed to delivering world-class solar solutions for a cleaner, greener tomorrow.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Decorative Bottom Fade (Reduced) */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-background/80 to-transparent z-10" />
      </section>

      {/* Company Overview */}
      <section className="py-12 md:py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-amber font-bold tracking-widest uppercase text-sm mb-3 block">Who We Are</span>
              <h2 className="font-heading font-bold text-3xl md:text-5xl text-gray-900 mb-8 leading-tight">
                Engineering Excellence across <span className="text-[#0F4C3A]">Every Project</span>
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Green Valley Enterprises is a premier Solar EPC company dedicated to transforming how the world generates and consumes energy. With over a decade of hands-on experience, we specialize in end-to-end solar solutions for residential, commercial, and industrial clients.
                </p>
                <p>
                  Our strength lies in our engineering precision and commitment to quality. We don't just install solar panels; we design energy systems optimized for maximum efficiency and longevity, backed by rigorous support and maintenance.
                </p>
              </div>
            </motion.div>

            {/* Premium Triptych Image Design (Matching Services/Home) */}
            <div className="w-full relative group h-[400px]">
              {/* Decorative Lines - Premium Amber Flow */}
              <svg className="absolute -top-10 -right-10 w-[120%] h-[120%] opacity-10 pointer-events-none text-amber transform rotate-6" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M-10 50 C 20 40, 50 70, 110 40" stroke="currentColor" strokeWidth="0.8" fill="none" />
                <path d="M-10 70 C 20 60, 50 90, 110 60" stroke="currentColor" strokeWidth="0.8" fill="none" />
              </svg>

              <div className="relative w-full h-full flex gap-3 items-end">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{
                      duration: 0.7,
                      delay: i * 0.2,
                      type: "spring",
                      bounce: 0.3
                    }}
                    className={`relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border-none group-hover:scale-[1.02] ${i === 1 ? 'w-[40%] h-full z-10' : 'w-[30%] h-[85%] grayscale-[30%] hover:grayscale-0'
                      }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F4C3A]/80 via-transparent to-transparent opacity-60 z-10" />
                    <img
                      src="/Image/about_us_imge.webp"
                      alt={`Green Valley Team ${i}`}
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                    />
                  </motion.div>
                ))}

                {/* Floating Badge (Re-integrated) */}
                <div className="absolute bottom-4 right-4 z-20 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-lg hidden md:block">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-amber flex items-center justify-center">
                      <Award className="w-5 h-5 text-[#0F4C3A]" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-xl leading-none">500+</p>
                      <p className="text-gray-200 text-xs">Projects</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission & Vision - Premium Cards (Light Theme) */}
      <section className="py-12 md:py-16 relative z-10 overflow-hidden">
        {/* Decorative Background Lines */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none text-[#0F4C3A]" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 50 Q 50 20 100 50" stroke="currentColor" strokeWidth="0.5" fill="none" />
          <path d="M0 70 Q 50 40 100 70" stroke="currentColor" strokeWidth="0.5" fill="none" />
        </svg>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {[
              {
                title: "Our Mission",
                icon: Target,
                desc: "To accelerate the global transition to sustainable energy by providing innovative, high-quality, and cost-effective solar solutions that empower communities and industries."
              },
              {
                title: "Our Vision",
                icon: Eye,
                desc: "To be the leading force in India's renewable energy sector, fostering a future where clean, independent power is accessible to every home and business."
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-white rounded-3xl p-10 border border-gray-100 shadow-xl hover:shadow-2xl hover:border-amber/20 transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-amber flex items-center justify-center mb-8 shadow-lg shadow-amber/20 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8 text-[#0F4C3A]" />
                </div>
                <h3 className="font-heading font-bold text-3xl mb-6 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed font-medium">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12 md:py-16 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-amber font-bold tracking-widest uppercase text-sm mb-3 block">The Green Valley Way</span>
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-gray-900 mb-6">
              Our Core Values
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-border/50 hover:border-amber/30 group relative overflow-hidden"
              >
                {/* Decorative Top-Right Circle matches Home Page */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-amber/10 to-transparent -mr-6 -mt-6 rounded-full group-hover:scale-150 transition-transform duration-500 ease-out" />

                <div className="w-16 h-16 rounded-2xl bg-amber/10 flex items-center justify-center mb-6 text-amber group-hover:bg-amber group-hover:text-white transition-colors duration-300 relative z-10">
                  <value.icon className="w-8 h-8" />
                </div>

                <h3 className="font-heading font-bold text-xl text-gray-900 mb-3 relative z-10 group-hover:text-[#0F4C3A] transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-medium relative z-10 group-hover:text-gray-900 transition-colors">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      {/* Final CTA (Light Theme) */}
      <section className="py-24 relative overflow-hidden text-center">
        {/* Removed Dark Background, now using global white/blobs */}

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-heading font-bold text-4xl md:text-6xl text-gray-900 mb-8 leading-tight">
              Ready to Switch to <span className="text-amber">Solar?</span>
            </h2>
            <p className="text-gray-600 text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-medium">
              Join the green revolution today with Green Valley Enterprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                variant="default"
                size="xl"
                onClick={handleWhatsAppClick}
                className="bg-amber text-[#0F4C3A] hover:bg-[#0F4C3A] hover:text-white h-16 px-12 text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Start Your Journey
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;