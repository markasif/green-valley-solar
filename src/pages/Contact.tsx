import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
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
import { Phone, Mail, MapPin, MessageCircle, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  fullName: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
  phone: z.string().trim().min(10, "Please enter a valid phone number").max(15, "Phone number is too long"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email is too long"),
  location: z.string().trim().min(2, "Please enter your location").max(200, "Location is too long"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().trim().max(1000, "Message is too long").optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    phone: "",
    email: "",
    location: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleServiceChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }));
    if (errors.service) {
      setErrors((prev) => ({ ...prev, service: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data
    const result = contactSchema.safeParse(formData);
    
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
        }
      });
      setErrors(fieldErrors);
      toast({
        title: "Please fix the errors",
        description: "Some fields need your attention.",
        variant: "destructive",
      });
      return;
    }

    // Build WhatsApp message
    const message = `Hello Green Valley Enterprises,

Name: ${formData.fullName}
Phone: ${formData.phone}
Email: ${formData.email}
Location: ${formData.location}
Service Required: ${formData.service}
Message: ${formData.message || "No additional message"}

Please contact me for further discussion.`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919999999999?text=${encodedMessage}`, "_blank");

    toast({
      title: "Redirecting to WhatsApp",
      description: "Please send the message to complete your inquiry.",
    });
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello Green Valley Enterprises, I would like to inquire about your solar services.");
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
              Contact Us
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Get in touch with our solar experts for a free consultation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-6">
                Send Us an Inquiry
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Label htmlFor="fullName" className="text-foreground">
                    Full Name *
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className={`mt-1.5 ${errors.fullName ? "border-destructive" : ""}`}
                  />
                  {errors.fullName && (
                    <p className="text-destructive text-sm mt-1">{errors.fullName}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone" className="text-foreground">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 99999 99999"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`mt-1.5 ${errors.phone ? "border-destructive" : ""}`}
                    />
                    {errors.phone && (
                      <p className="text-destructive text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-foreground">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`mt-1.5 ${errors.email ? "border-destructive" : ""}`}
                    />
                    {errors.email && (
                      <p className="text-destructive text-sm mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <Label htmlFor="location" className="text-foreground">
                    Location *
                  </Label>
                  <Input
                    id="location"
                    name="location"
                    type="text"
                    placeholder="City, State"
                    value={formData.location}
                    onChange={handleInputChange}
                    className={`mt-1.5 ${errors.location ? "border-destructive" : ""}`}
                  />
                  {errors.location && (
                    <p className="text-destructive text-sm mt-1">{errors.location}</p>
                  )}
                </div>

                <div>
                  <Label className="text-foreground">Service Requirement *</Label>
                  <Select value={formData.service} onValueChange={handleServiceChange}>
                    <SelectTrigger className={`mt-1.5 ${errors.service ? "border-destructive" : ""}`}>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent className="bg-card">
                      <SelectItem value="Residential Solar Installation">
                        Residential Solar Installation
                      </SelectItem>
                      <SelectItem value="Commercial Solar Solutions">
                        Commercial Solar Solutions
                      </SelectItem>
                      <SelectItem value="Industrial Solar EPC">
                        Industrial Solar EPC
                      </SelectItem>
                      <SelectItem value="Operation & Maintenance">
                        Operation & Maintenance
                      </SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.service && (
                    <p className="text-destructive text-sm mt-1">{errors.service}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="message" className="text-foreground">
                    Message (Optional)
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your requirements..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`mt-1.5 min-h-[120px] ${errors.message ? "border-destructive" : ""}`}
                  />
                  {errors.message && (
                    <p className="text-destructive text-sm mt-1">{errors.message}</p>
                  )}
                </div>

                <Button type="submit" variant="whatsapp" size="lg" className="w-full">
                  <Send className="w-5 h-5" />
                  Send via WhatsApp
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:pl-8"
            >
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-6">
                Get In Touch
              </h2>
              <p className="text-muted-foreground mb-8">
                Have questions about solar installation? Our team is here to help you 
                make the switch to clean energy. Reach out to us through any of the 
                channels below.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground mb-1">Phone</h4>
                    <a href="tel:+919999999999" className="text-muted-foreground hover:text-secondary transition-colors">
                      +91 99999 99999
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground mb-1">Email</h4>
                    <a href="mailto:info@greenvalley.com" className="text-muted-foreground hover:text-secondary transition-colors">
                      info@greenvalley.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground mb-1">Address</h4>
                    <p className="text-muted-foreground">
                      123 Solar Street, Green City,<br />India - 400001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground mb-1">Business Hours</h4>
                    <p className="text-muted-foreground">
                      Monday - Saturday: 9:00 AM - 6:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA Card */}
              <div className="bg-gradient-hero rounded-xl p-6 text-center">
                <MessageCircle className="w-10 h-10 text-primary-foreground mx-auto mb-4" />
                <h3 className="font-heading font-semibold text-xl text-primary-foreground mb-2">
                  Prefer WhatsApp?
                </h3>
                <p className="text-primary-foreground/80 mb-4">
                  Chat with us directly for quick responses.
                </p>
                <Button 
                  variant="hero" 
                  size="lg" 
                  onClick={handleWhatsAppClick}
                  className="w-full"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="h-[400px] bg-muted relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-secondary mx-auto mb-4" />
            <p className="text-muted-foreground">
              Map integration can be added here with your preferred service.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;