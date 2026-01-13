import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/Hero";
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
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send
} from "lucide-react";
import heroImage from "@/assets/hero-solar.jpg";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

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
    image: "/Image/Residential_solar.webp",
  },
  {
    icon: Building2,
    title: "Commercial Solar Solutions",
    description: "Sustainable energy solutions for offices and commercial spaces.",
    image: "/Image/Commercial-Solar.webp",
  },
  {
    icon: Factory,
    title: "Industrial Solar EPC Projects",
    description: "Large-scale solar installations with complete EPC execution.",
    image: "/Image/Industrial_solar.webp",
  },
  {
    icon: Wrench,
    title: "Operation & Maintenance",
    description: "Performance monitoring and regular maintenance services.",
    image: "/Image/operation_maintenance.webp",
  },
];

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "50MW+", label: "Capacity Installed" },
  { value: "100+", label: "Happy Clients" },
  { value: "10+", label: "Years Experience" },
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

const Index = () => {
  const { scrollY } = useScroll();
  const yCenter = useTransform(scrollY, [0, 800], [0, 40]);
  const ySides = useTransform(scrollY, [0, 800], [0, -40]);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello Green Valley Enterprises, I would like to get a free consultation for solar installation.");
    window.open(`https://wa.me/919999999999?text=${message}`, "_blank");
  };

  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    location: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<any>({});

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 88; // account for header
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, [location.hash]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof formData]) {
      setErrors((prev: any) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleServiceChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }));
    if (errors.service) setErrors((prev: any) => ({ ...prev, service: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // minimal client-side validation
    const schema = z.object({
      fullName: z.string().min(2),
      phone: z.string().min(10),
      email: z.string().email(),
      location: z.string().min(2),
      service: z.string().min(1),
      message: z.string().optional(),
    });

    const result = schema.safeParse(formData);
    if (!result.success) {
      toast({ title: "Please fix errors", variant: "destructive" });
      const fieldErrors: any = {};
      result.error.errors.forEach((err) => (fieldErrors[err.path[0] as string] = err.message));
      setErrors(fieldErrors);
      return;
    }

    const message = `Hello Green Valley Enterprises,%0A%0AName: ${formData.fullName}%0APhone: ${formData.phone}%0AEmail: ${formData.email}%0ALocation: ${formData.location}%0AService: ${formData.service}%0AMessage: ${formData.message || 'N/A'}`;
    window.open(`https://wa.me/919999999999?text=${encodeURIComponent(message)}`, "_blank");
    toast({ title: "Redirecting to WhatsApp", description: "Please send the message to complete your inquiry." });
  };

  return (
    <Layout>
      <Hero />

      {/* Global Decorative Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-gray-50 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-gray-50 rounded-full blur-3xl opacity-60" />
      </div>

      {/* Product Feature Section - Premium Triptych Design */}
      <section className="py-12 md:py-16 relative z-10 overflow-hidden">
        {/* Local decorative lines for this section only */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 50 Q 50 20 100 50" stroke="currentColor" strokeWidth="0.5" fill="none" />
          <path d="M0 60 Q 50 30 100 60" stroke="currentColor" strokeWidth="0.5" fill="none" />
          <path d="M0 70 Q 50 40 100 70" stroke="currentColor" strokeWidth="0.5" fill="none" />
        </svg>

        <div className="container mx-auto px-4 relative">


          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

            {/* Left Side - Typography Block */}
            <div className="w-full lg:w-5/12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-[#0F4C3A] mb-8 leading-tight">
                  Green Valley
                </h2>
                <p className="text-gray-600 text-lg md:text-xl mb-10 leading-relaxed font-light">
                  Elevating solar technology with precision engineering and sustainable innovation. Experience the future of clean energy with our premium, high-efficiency solar solutions designed for modern living.
                </p>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 py-6 text-base font-medium text-gray-700 border-gray-200 hover:bg-gray-100 hover:text-gray-900 transition-all duration-300"
                >
                  Discover Our Products
                </Button>
              </motion.div>
            </div>

            {/* Right Side - Triptych Visual */}
            <div className="w-full lg:w-7/12 relative h-[500px] flex items-center justify-center perspective-1000">
              {/* Center Panel - Forward */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="w-48 md:w-64 h-80 md:h-[450px] bg-black rounded-lg shadow-2xl z-20 relative overflow-hidden border-2 border-white/20 transform hover:scale-[1.02] transition-transform duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-black/60 z-10" />
                <img src={heroImage} alt="Solar Detail Center" className="w-full h-full object-cover" />
              </motion.div>

              {/* Left Panel - Angled Back */}
              <motion.div
                initial={{ opacity: 0, x: 20, rotateY: -10 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 15 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="absolute left-[10%] md:left-[15%] w-40 md:w-56 h-72 md:h-[400px] bg-black rounded-lg shadow-xl z-10 overflow-hidden opacity-90 transform -translate-x-[60%] border border-gray-200"
                style={{ transform: "perspective(1000px) rotateY(15deg) translateZ(-50px)" }}
              >
                <div className="absolute inset-0 bg-black/20 z-10" />
                <img src={heroImage} alt="Solar Detail Left" className="w-full h-full object-cover grayscale-[30%]" />
              </motion.div>

              {/* Right Panel - Angled Back */}
              <motion.div
                initial={{ opacity: 0, x: -20, rotateY: 10 }}
                whileInView={{ opacity: 1, x: 0, rotateY: -15 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="absolute right-[10%] md:right-[15%] w-40 md:w-56 h-72 md:h-[400px] bg-black rounded-lg shadow-xl z-10 overflow-hidden opacity-90 transform translate-x-[60%] border border-gray-200"
                style={{ transform: "perspective(1000px) rotateY(-15deg) translateZ(-50px)" }}
              >
                <div className="absolute inset-0 bg-black/20 z-10" />
                <img src={heroImage} alt="Solar Detail Right" className="w-full h-full object-cover grayscale-[30%]" />
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Relocated Stats Section - Subtle Strip */}
      <section className="py-6 bg-[#0F4C3A] text-white border-t border-white/10 relative z-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-12 text-center md:text-left">
            {stats.map((stat, index) => (
              <div key={stat.label} className="flex flex-col md:flex-row items-center md:items-baseline gap-2">
                <span className="font-heading font-bold text-3xl md:text-4xl text-amber">{stat.value}</span>
                <span className="text-white/80 text-sm font-medium uppercase tracking-wide">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Modern Cards */}
      <section className="py-12 md:py-16 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-amber font-bold tracking-widest uppercase text-sm mb-3 block">Why Choose Us</span>
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground mb-6">
              Powering Your World with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Excellence</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              We deliver reliable, efficient, and sustainable solar EPC solutions designed to maximize your savings and minimize your carbon footprint.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-border/50 hover:border-amber/30 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-amber/10 to-transparent -mr-6 -mt-6 rounded-full group-hover:scale-150 transition-transform duration-500 ease-out" />

                <div className="w-16 h-16 rounded-2xl bg-amber/10 flex items-center justify-center mb-6 text-amber group-hover:bg-amber group-hover:text-amber-foreground transition-colors duration-300 relative z-10">
                  <feature.icon className="w-8 h-8" />
                </div>

                <h3 className="font-heading font-bold text-xl text-foreground mb-3 relative z-10 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed relative z-10 group-hover:text-foreground/80 transition-colors">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Next Level Design */}
      <section id="services" className="py-12 md:py-16 relative z-10 overflow-hidden">


        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-amber font-bold tracking-widest uppercase text-sm mb-3 block">Our Expertise</span>
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground mb-6">
              Comprehensive Solar Solutions
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Tailored energy systems engineered for maximum efficiency and long-term performance.
            </p>
          </motion.div>

          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                  } gap-12 lg:gap-20 items-center`}
              >
                {/* Visual Side */}
                <div className="w-full lg:w-1/2 relative group h-[400px]">
                  {/* Decorative Lines - Premium Amber Flow */}
                  <svg className="absolute -top-20 -left-20 w-[150%] h-[150%] opacity-10 pointer-events-none text-amber transform -rotate-6" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M-10 50 C 20 40, 50 70, 110 40" stroke="currentColor" strokeWidth="0.8" fill="none" />
                    <path d="M-10 70 C 20 60, 50 90, 110 60" stroke="currentColor" strokeWidth="0.8" fill="none" />
                  </svg>
                  {/* Triptych / 3-Cut Design - Bottom Aligned & Staggered */}
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
                        className={`flex-1 relative overflow-hidden rounded-xl shadow-lg border-none group-hover:shadow-2xl transition-all duration-500 z-10 bg-white ${i === 1 ? 'h-full scale-105 z-20 shadow-xl' : 'h-[85%] grayscale-[30%] hover:grayscale-0'
                          }`}
                      >
                        <img
                          src={service.image}
                          alt={service.title}
                          className="absolute h-full w-[300%] max-w-none object-cover transition-transform duration-700 group-hover:scale-110"
                          style={{ left: `-${i * 100}%` }}
                        />
                        {/* Subtle dark gradient at bottom for depth */}
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent opacity-70" />
                      </motion.div>
                    ))}

                    {/* Floating Icon Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
                      <motion.div
                        initial={{ opacity: 0, scale: 0, rotate: -45 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5, type: "spring" }}
                        className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-2xl relative"
                      >
                        <div className="absolute inset-0 rounded-full bg-white/5 animate-pulse" />
                        <service.icon className="w-10 h-10 text-white drop-shadow-lg relative z-10" />
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-px w-12 bg-amber" />
                    <span className="text-amber font-bold uppercase tracking-wider text-sm">Service {index + 1}</span>
                  </div>

                  <h3 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="bg-muted/50 rounded-2xl p-6 mb-8 border border-border/50">
                    <h4 className="font-heading font-semibold text-foreground mb-4 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-amber" />
                      What's Included:
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {((service as any).features || ["High quality equipment", "Professional installation", "Warranty support", "Performance monitoring"]).map((feature: string) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-amber flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    variant="default" // Using default for now to contrast with visual side, or make a custom outline
                    className="bg-primary text-primary-foreground hover:bg-primary/90 border-0 shadow-lg hover:translate-y-[-2px] transition-all"
                    size="lg"
                    onClick={() => {
                      setFormData(prev => ({ ...prev, service: service.title }));
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Enquire Now
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process - Extracted for spacing consistency */}
      <section className="py-12 md:py-16 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-amber font-bold tracking-widest uppercase text-sm mb-3 block">How It Works</span>
            <h3 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">Streamlined Execution Process</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">From consultation to switch-on, we handle everything.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-8 shadow-sm border border-border/50 relative hover:border-amber/30 transition-colors group"
              >
                <div className="absolute -top-6 left-8 w-12 h-12 rounded-xl bg-gradient-to-br from-amber to-orange-400 text-white flex items-center justify-center font-heading font-bold text-xl shadow-lg group-hover:scale-110 transition-transform">
                  {item.step}
                </div>
                <h4 className="font-heading font-bold text-xl text-foreground mb-3 mt-6 group-hover:text-amber transition-colors">
                  {item.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section - Clean White Mode */}
      <section className="py-12 md:py-16 text-foreground relative z-10">

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-amber font-bold tracking-widest uppercase text-sm mb-3 block">Why Solar?</span>
              <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground mb-8 leading-tight">
                Switch to Solar & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber to-yellow-500">Start Saving Today</span>
              </h2>

              <div className="space-y-6">
                {[
                  { title: "Slash Electricity Bills", desc: "Reduce your monthly overheads by up to 90% instantly." },
                  { title: "25+ Years of Reliability", desc: "Tier-1 panels ensuring decades of peak performance." },
                  { title: "Increase Property Value", desc: "Solar-equipped properties have higher market resale value." },
                  { title: "Government Incentives", desc: "Avail subsidies and tax benefits for going green." },
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors border border-transparent hover:border-muted-foreground/10"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber to-yellow-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-amber/20">
                      <CheckCircle2 className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-foreground mb-1">{benefit.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{benefit.desc}</p>
                    </div>
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
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10" />
                <img
                  src="/Image/safe.webp"
                  alt="Solar panel installation"
                  className="w-full h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-8 left-8 right-8 z-20">
                  <div className="bg-white/80 backdrop-blur-md border border-white/40 rounded-2xl p-6 flex items-center gap-6 shadow-xl">
                    <div className="text-center border-r border-gray-300 pr-6">
                      <div className="font-heading font-bold text-4xl text-amber">25+</div>
                      <div className="text-xs text-foreground uppercase tracking-wider font-semibold">Years Warranty</div>
                    </div>
                    <div>
                      <div className="text-foreground font-medium text-lg leading-tight">Guaranteed Performance & <br />Peace of Mind</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section - Glassmorphism & Modern Form */}
      <section id="contact" className="py-12 md:py-16  relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-12">

            {/* Contact Info Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 flex flex-col justify-between h-full"
            >
              <div>
                <span className="text-amber font-bold tracking-widest uppercase text-sm mb-3 block">Get in Touch</span>
                <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground mb-6">
                  Ready to Go Solar?
                </h2>
                <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
                  Have questions? Our experts are here to help you design the perfect solar solution for your needs.
                </p>

                <div className="space-y-8">
                  {[
                    { icon: Phone, title: "Phone", content: "+91 99999 99999", link: "tel:+919999999999" },
                    { icon: Mail, title: "Email", content: "info@greenvalley.com", link: "mailto:info@greenvalley.com" },
                    { icon: MapPin, title: "Headquarters", content: "123 Solar Street, Green City, India", link: "#" },
                  ].map((item, index) => (
                    <a key={index} href={item.link} className="flex items-center gap-6 group">
                      <div className="w-14 h-14 rounded-2xl bg-white border border-border shadow-sm flex items-center justify-center group-hover:border-amber group-hover:scale-110 transition-all duration-300">
                        <item.icon className="w-6 h-6 text-foreground group-hover:text-amber transition-colors" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground text-lg">{item.title}</h4>
                        <p className="text-muted-foreground group-hover:text-primary transition-colors">{item.content}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Instant Response Card - Brand Redesign */}
              <div className="mt-12 p-8 bg-[#0F4C3A] rounded-3xl text-white relative overflow-hidden group cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-300" onClick={handleWhatsAppClick}>
                <div className="absolute top-0 right-0 w-40 h-40 bg-amber/20 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-amber/30 transition-colors" />

                <div className="relative z-10 flex items-center justify-between gap-4">
                  <div>
                    <h4 className="font-heading font-bold text-2xl mb-2 text-white">Instant Response?</h4>
                    <p className="text-gray-200 font-medium">Chat with us on WhatsApp now</p>
                  </div>
                  <div className="w-14 h-14 rounded-full bg-amber flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-white group-hover:text-amber transition-all duration-300">
                    <MessageCircle className="w-7 h-7 text-[#0F4C3A] group-hover:text-primary" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-2xl border border-border/50">
                <h3 className="font-heading font-bold text-2xl text-foreground mb-8">Request a Free Quote</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="font-semibold text-foreground">Full Name</Label>
                      <Input name="fullName" placeholder="John Doe" value={formData.fullName} onChange={handleInputChange} className="h-12 rounded-xl bg-muted/30 border-muted-foreground/20 focus:border-amber focus:ring-amber/20" />
                      {errors.fullName && <p className="text-destructive text-xs">{errors.fullName}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label className="font-semibold text-foreground">Phone Number</Label>
                      <Input name="phone" placeholder="+91 98765 43210" value={formData.phone} onChange={handleInputChange} className="h-12 rounded-xl bg-muted/30 border-muted-foreground/20 focus:border-amber focus:ring-amber/20" />
                      {errors.phone && <p className="text-destructive text-xs">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="font-semibold text-foreground">Email Address</Label>
                    <Input name="email" type="email" placeholder="john@example.com" value={formData.email} onChange={handleInputChange} className="h-12 rounded-xl bg-muted/30 border-muted-foreground/20 focus:border-amber focus:ring-amber/20" />
                    {errors.email && <p className="text-destructive text-xs">{errors.email}</p>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="font-semibold text-foreground">Location</Label>
                      <Input name="location" placeholder="City, State" value={formData.location} onChange={handleInputChange} className="h-12 rounded-xl bg-muted/30 border-muted-foreground/20 focus:border-amber focus:ring-amber/20" />
                      {errors.location && <p className="text-destructive text-xs">{errors.location}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label className="font-semibold text-foreground">Requirement</Label>
                      <Select value={formData.service} onValueChange={handleServiceChange}>
                        <SelectTrigger className="h-12 rounded-xl bg-muted/30 border-muted-foreground/20 focus:border-amber focus:ring-amber/20">
                          <SelectValue placeholder="Select Service" />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl border-border/50 shadow-xl">
                          <SelectItem value="Residential Solar Installation">Residential</SelectItem>
                          <SelectItem value="Commercial Solar Solutions">Commercial</SelectItem>
                          <SelectItem value="Industrial Solar EPC Projects">Industrial</SelectItem>
                          <SelectItem value="Operation & Maintenance">O&M</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.service && <p className="text-destructive text-xs">{errors.service}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="font-semibold text-foreground">Message</Label>
                    <Textarea name="message" placeholder="Details about your inquiry..." value={formData.message} onChange={handleInputChange} className="min-h-[140px] rounded-xl bg-muted/30 border-muted-foreground/20 focus:border-amber focus:ring-amber/20 resize-none p-4" />
                  </div>

                  <Button type="submit" variant="amber" size="xl" className="w-full text-lg h-14 rounded-xl shadow-amber/20 shadow-lg">
                    Submit Inquiry <Send className="w-5 h-5 ml-2" />
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 md:py-16 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-heading font-bold text-4xl md:text-6xl text-foreground mb-8 leading-tight">
              Ready to Power Your Future with <br /> <span className="text-amber">Free Energy?</span>
            </h2>
            <p className="text-muted-foreground text-xl md:text-2xl mb-10 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have switched to Green Valley Solar.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact">
                <Button variant="amber" size="xl" className="w-full sm:w-auto min-w-[200px] h-16 text-lg hover:scale-105 transition-transform">
                  Get Free Consultation
                </Button>
              </Link>
              <Button
                variant="outline"
                size="xl"
                onClick={handleWhatsAppClick}
                className="w-full sm:w-auto min-w-[200px] h-16 text-lg border-2 border-foreground/10 text-foreground hover:bg-foreground hover:text-background transition-colors"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;