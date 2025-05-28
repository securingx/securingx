import React from "react";
import { motion } from "framer-motion";
import { 
  Shield, 
  Code, 
  Smartphone, 
  Cpu, 
  Lightbulb, 
  Blocks,
  Twitter,
  Linkedin,
  Github,
  Mail
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Servicios",
      links: [
        { name: "Seguridad Informática", href: "#" },
        { name: "Automatización", href: "#" },
        { name: "Desarrollo Web", href: "#" },
        { name: "Desarrollo Móvil", href: "#" },
        { name: "Asesorías", href: "#" },
        { name: "Blockchain e IA", href: "#" },
      ],
    },
    {
      title: "Empresa",
      links: [
        { name: "Sobre Nosotros", href: "#" },
        { name: "Equipo", href: "#" },
        { name: "Clientes", href: "#" },
        { name: "Testimonios", href: "#" },
        { name: "Carreras", href: "#" },
      ],
    },
    {
      title: "Recursos",
      links: [
        { name: "Blog", href: "#" },
        { name: "Documentación", href: "#" },
        { name: "Tutoriales", href: "#" },
        { name: "Preguntas Frecuentes", href: "#" },
        { name: "Soporte", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { icon: <Twitter className="h-5 w-5" />, href: "#" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#" },
    { icon: <Github className="h-5 w-5" />, href: "#" },
    { icon: <Mail className="h-5 w-5" />, href: "#" },
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-2xl font-bold text-white">
                Securing<span className="text-blue-500">x</span>
              </span>
              <p className="mt-4 text-gray-400 max-w-md">
                Ofrecemos soluciones tecnológicas avanzadas para empresas y organizaciones, 
                combinando seguridad, innovación y excelencia técnica.
              </p>
              <div className="mt-6 flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
                    aria-label="Social media"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {footerLinks.map((column, columnIndex) => (
            <motion.div
              key={columnIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * columnIndex }}
            >
              <p className="font-semibold text-lg mb-4">{column.title}</p>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Securingx. Todos los derechos reservados.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">
              Política de Privacidad
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">
              Términos de Servicio
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;