import { Link } from "react-router-dom";
import { Sun, Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const Footer = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello Green Valley Enterprises, I would like to inquire about your solar services.");
    window.open(`https://wa.me/919999999999?text=${message}`, "_blank");
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <Sun className="w-6 h-6 text-accent" />
              </div>
              <span className="font-heading font-bold text-xl">Green Valley</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Green Valley Enterprises is your trusted partner for end-to-end solar EPC solutions, 
              helping you embrace clean energy for a sustainable future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-primary-foreground/80 hover:text-accent transition-colors">Home</Link>
              <Link to="/about" className="text-primary-foreground/80 hover:text-accent transition-colors">About Us</Link>
              <Link to="/services" className="text-primary-foreground/80 hover:text-accent transition-colors">Services</Link>
              <Link to="/contact" className="text-primary-foreground/80 hover:text-accent transition-colors">Contact Us</Link>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Our Services</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/services" className="text-primary-foreground/80 hover:text-accent transition-colors">Residential Solar</Link>
              <Link to="/services" className="text-primary-foreground/80 hover:text-accent transition-colors">Commercial Solar</Link>
              <Link to="/services" className="text-primary-foreground/80 hover:text-accent transition-colors">Industrial Solar EPC</Link>
              <Link to="/services" className="text-primary-foreground/80 hover:text-accent transition-colors">O&M Services</Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact Us</h4>
            <div className="flex flex-col gap-3">
              <a href="tel:+919999999999" className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors">
                <Phone className="w-5 h-5" />
                <span>+91 99999 99999</span>
              </a>
              <a href="mailto:info@greenvalley.com" className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors">
                <Mail className="w-5 h-5" />
                <span>info@greenvalley.com</span>
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin className="w-5 h-5 mt-0.5" />
                <span>123 Solar Street, Green City, India - 400001</span>
              </div>
              <button 
                onClick={handleWhatsAppClick}
                className="flex items-center gap-3 text-accent hover:text-accent/80 transition-colors mt-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="font-medium">Chat on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-10 pt-8 text-center text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Green Valley Enterprises. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;