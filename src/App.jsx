import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import { 
  Shield, 
  Code, 
  Smartphone, 
  Cpu, 
  Lightbulb, 
  Blocks, 
  ChevronRight, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter 
} from "lucide-react";
import Header from "@/components/Header";
import ServiceCard from "@/components/ServiceCard";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const App = () => {
  const { toast } = useToast();
  
  const services = [
    {
      title: "Ciberseguridad",
      description: "Protección avanzada para sus sistemas y datos con soluciones personalizadas.",
      icon: <Shield className="h-10 w-10 text-red-500" />,
      delay: 0.1
    },
    {
      title: "Automatización",
      description: "Optimice sus procesos empresariales con soluciones de automatización inteligente.",
      icon: <Cpu className="h-10 w-10 text-purple-500" />,
      delay: 0.2
    },
    {
      title: "Desarrollo Web",
      description: "Creación de sitios web y aplicaciones web modernas, responsivas y de alto rendimiento.",
      icon: <Code className="h-10 w-10 text-blue-500" />,
      delay: 0.3
    },
    {
      title: "Desarrollo Móvil",
      description: "Aplicaciones móviles nativas y multiplataforma para iOS y Android.",
      icon: <Smartphone className="h-10 w-10 text-pink-500" />,
      delay: 0.4
    },
    {
      title: "Asesorías Tecnológicas",
      description: "Consultoría especializada para ayudarle a tomar las mejores decisiones tecnológicas.",
      icon: <Lightbulb className="h-10 w-10 text-yellow-500" />,
      delay: 0.5
    },
    {
      title: "Blockchain e IA",
      description: "Implementación de soluciones basadas en blockchain e inteligencia artificial.",
      icon: <Blocks className="h-10 w-10 text-green-500" />,
      delay: 0.6
    }
  ];

  const handleContactSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Mensaje enviado",
      description: "Nos pondremos en contacto contigo pronto.",
      duration: 5000,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900 opacity-90"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-30" style={{ 
            backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
                <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                  Soluciones Tecnológicas <span className="gradient-text">Avanzadas</span>
                </h1>
                <p className="text-xl text-gray-200 mb-8">
                  Expertos en seguridad, automatización, desarrollo web y móvil, 
                  con servicios de asesoría y talleres en tecnologías emergentes.
                </p>
                <div className="flex flex-wrap gap-4">

                  <Button onClick={() => {
                    const section = document.getElementById('contacto');
                    section?.scrollIntoView({ behavior: 'smooth' });
                    }} size="lg" variant="outline" 
                    className="border-white text-white 
                    hover:bg-white/10">
                  Contáctanos
                  </Button>
                </div>
              </motion.div>
            </div>
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <div className="glass-effect rounded-2xl p-6 shadow-xl">
                  <img  alt="Equipo de tecnología trabajando en soluciones digitales" className="rounded-xl w-full h-auto" src="img/ciberseguridad.png" />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-4 rounded-lg shadow-lg">
                  <p className="font-bold">Innovación + Seguridad</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Servicios</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Ofrecemos soluciones tecnológicas integrales para impulsar su negocio hacia el futuro digital.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                delay={service.delay}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:w-1/2"
            >
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-600 rounded-lg"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-red-600 rounded-lg"></div>
                <div className="relative z-10 glass-effect rounded-xl overflow-hidden">
                  <img  alt="Equipo de profesionales tecnológicos" className="w-full h-auto" src="img/pulpo.png" />
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Quiénes Somos</h2>
              <p className="text-lg text-gray-300 mb-6">
                Somos un equipo de expertos apasionados por la tecnología, dedicados a proporcionar soluciones innovadoras que transforman negocios y mejoran la seguridad digital.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                Nuestra misión es ayudar a empresas y organizaciones a navegar con éxito en el complejo panorama tecnológico actual, ofreciendo servicios personalizados que combinan seguridad, eficiencia y vanguardia tecnológica.
              </p>

            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contáctanos</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Estamos listos para ayudarte con tus proyectos tecnológicos. Ponte en contacto con nosotros.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 justify-items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="glass-effect rounded-xl p-8 ">
                <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-blue-600/20 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-blue-500" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium">Email</h4>
                      <p className="text-gray-400">info@securingx.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-purple-600/20 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-purple-500" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium">Teléfono</h4>
                      <p className="text-gray-400">+52 646 385 1363</p>
                    </div>
                  </div>
                 {/*  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-indigo-600/20 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-indigo-500" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium">Ubicación</h4>
                      <p className="text-gray-400"> </p>
                    </div>
                  </div>*/}
                </div>
                
            {/*   <div className="mt-8">
                  <h4 className="text-lg font-medium mb-4">Síguenos</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors">
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors">
                      <Github className="h-5 w-5" />
                    </a>
                  </div>
                </div> */}
              </div>
            </motion.div>
            {/*
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ContactForm onSubmit={handleContactSubmit} />
            </motion.div>
            */}
          </div>
        </div>
      </section>

      <Footer />
      <Toaster />
    </div>
  );
};

export default App;