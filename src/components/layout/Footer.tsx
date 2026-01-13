import { Link } from "react-router-dom";
import { Sun, Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const Footer = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello Green Valley Enterprises, I would like to inquire about your solar services.");
    window.open(`https://wa.me/919999999999?text=${message}`, "_blank");
  };

  return (
    <footer className="bg-[#0F4C3A] text-white pt-20 pb-10 border-t border-amber/20 font-sans relative z-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-amber/10 flex items-center justify-center border border-amber/20">
                <Sun className="w-6 h-6 text-amber" />
              </div>
              <span className="font-heading font-bold text-2xl tracking-tight text-white">Green Valley</span>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm">
              Green Valley Enterprises is your trusted partner for end-to-end solar EPC solutions,
              helping you embrace clean energy for a sustainable future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-amber">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              {["Home", "About Us", "Services", "Contact Us"].map((item) => (
                <Link
                  key={item}
                  to={item === "Home" ? "/" : item === "About Us" ? "/about" : `/#${item.toLowerCase().split(' ')[0]}`}
                  className="text-gray-300 hover:text-amber hover:translate-x-1 transition-all duration-300 text-sm"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-amber">Our Services</h4>
            <nav className="flex flex-col gap-3">
              {["Residential Solar", "Commercial Solar", "Industrial Solar EPC", "O&M Services"].map((item) => (
                <Link
                  key={item}
                  to="/#services"
                  className="text-gray-300 hover:text-amber hover:translate-x-1 transition-all duration-300 text-sm"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-amber">Contact Us</h4>
            <div className="flex flex-col gap-4">
              <a href="tel:+919999999999" className="flex items-center gap-4 text-gray-300 hover:text-amber transition-colors group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-amber/10 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-sm">+91 99999 99999</span>
              </a>
              <a href="mailto:info@greenvalley.com" className="flex items-center gap-4 text-gray-300 hover:text-amber transition-colors group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-amber/10 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-sm">info@greenvalley.com</span>
              </a>
              <div className="flex items-start gap-4 text-gray-300 group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-sm leading-relaxed">123 Solar Street, Green City, India - 400001</span>
              </div>
              {/* 
              <button
                onClick={handleWhatsAppClick}
                className="mt-4 flex items-center gap-3 bg-amber text-black px-6 py-3 rounded-xl font-bold hover:bg-white transition-colors w-fit"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat on WhatsApp</span>
              </button> */}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Green Valley Enterprises. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-amber transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-amber transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;