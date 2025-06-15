
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const ServiceCard = ({ title, description, icon, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-gray-800 rounded-xl overflow-hidden card-hover"
    >
      <div className="p-6">
        <div className="bg-gray-700/50 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-400 mb-6">{description}</p>
      </div>
      <div className="h-1 bg-gradient-to-r from-blue-500 to-red-600"></div>
    </motion.div>
  );
};

export default ServiceCard;
