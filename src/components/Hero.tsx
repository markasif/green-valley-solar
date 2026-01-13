import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";

const Hero = () => {
    const handleWhatsAppClick = () => {
        const message = encodeURIComponent("Hello Green Valley Enterprises, I would like to get a free solar quote.");
        window.open(`https://wa.me/919999999999?text=${message}`, "_blank");
    };

    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white">
            <div className="absolute inset-0 pointer-events-none z-0">
                <svg className="absolute bottom-0 left-0 w-full h-[60%] lg:h-[70%] text-amber transform origin-bottom scale-y-110" viewBox="0 0 1440 320" preserveAspectRatio="none">
                    <path fill="currentColor" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
                <svg className="absolute bottom-0 left-0 w-full h-[60%] lg:h-[70%] text-[#0F4C3A] transform origin-bottom scale-y-90 opacity-20" viewBox="0 0 1440 320" preserveAspectRatio="none">
                    <path fill="currentColor" fillOpacity="1" d="M0,160L48,176C96,192,192,224,288,229.3C384,235,480,213,576,192C672,171,768,149,864,154.7C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>

            <div className="container mx-auto px-4 relative z-10 pt-20 lg:pt-0">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-2xl"
                    >
                        <span className="text-[#0F4C3A] font-bold tracking-wider uppercase mb-4 block text-lg">We Provide</span>
                        <h1 className="font-heading font-extrabold text-5xl md:text-7xl text-gray-900 leading-[0.9] mb-6">
                            The Best <br />
                            <span className="text-amber">SOLAR</span> <br />
                            <span className="text-[#0F4C3A]">ENERGY</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg font-medium leading-relaxed">
                            Green Valley Enterprises provides end-to-end Solar EPC installation solutions for a cleaner, greener tomorrow.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 items-start">
                            <Link to="/contact">
                                <Button className="bg-[#0F4C3A] hover:bg-[#093026] text-white rounded-full px-10 py-7 text-lg font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                                    CALL NOW <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right Column: Image */}
                    <div className="relative h-[500px] lg:h-[850px] flex items-end justify-center lg:translate-y-24 z-20">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, x: 50 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="w-full h-full flex items-end justify-center"
                        >
                            {/* Image with seamless blend (Transparent PNG) */}
                            <img
                                src="/Image/solar_man_transparent_final.png"
                                alt="Solar Engineer"
                                className="h-full w-auto object-contain drop-shadow-2xl"
                            />

                            {/* Discount/Badge Floater */}
                            <div className="absolute top-24 left-0 lg:-left-4 bg-amber text-white p-6 rounded-2xl shadow-xl transform -rotate-12 z-30 hidden md:block border-4 border-white">
                                <p className="font-black text-4xl leading-none">25%</p>
                                <p className="font-bold text-sm uppercase tracking-wide">Discount</p>
                                <p className="text-xs opacity-90 mt-1">On Installation</p>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
