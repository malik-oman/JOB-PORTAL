import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { assets } from "../assets/assets";
import { CheckCircle, Users, Briefcase, Shield, Zap, Target } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const features = [
    { icon: Briefcase, title: "Verified Jobs" },
    { icon: Zap, title: "Quick Apply" },
    { icon: Target, title: "Smart Matching" },
    { icon: Shield, title: "Secure Platform" },
  ];

  const stats = [
    { value: "10K+", label: "Active Jobs", icon: Briefcase },
    { value: "5K+", label: "Companies", icon: Users },
    { value: "1M+", label: "Users", icon: Target },
    { value: "95%", label: "Success Rate", icon: CheckCircle },
  ];

  return (
    <section ref={ref} className="py-20 md:py-28 bg-gradient-to-b from-white via-gray-50 to-white">

      <div className="max-w-7xl mx-auto px-4">

        {/* TOP SECTION */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="relative"
          >
            <img
              src={assets.hero_img}
              className="rounded-3xl shadow-2xl w-full object-cover"
            />
          </motion.div>

          {/* CONTENT */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.span variants={itemVariants}
              className="inline-block px-4 py-1 text-sm bg-primary/10 text-primary rounded-full">
              About Our Platform
            </motion.span>

            <motion.h2 variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Building the Future of <span className="text-primary">Hiring</span>
            </motion.h2>

            <motion.p variants={itemVariants}
              className="text-gray-600 leading-relaxed text-lg">
              Our job portal is designed to make job searching simple, fast, and efficient. 
              We connect skilled professionals with top companies, helping both sides 
              achieve their goals without complexity.
            </motion.p>

            <motion.p variants={itemVariants}
              className="text-gray-600 leading-relaxed text-lg">
              Whether you're looking for your dream job or searching for the perfect candidate, 
              our platform provides the right tools to make hiring smarter and more effective.
            </motion.p>

            {/* FEATURES */}
            <motion.div variants={itemVariants}
              className="flex flex-wrap gap-3 pt-2">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <div key={i}
                    className="flex items-center gap-2 px-4 py-2 bg-white border rounded-full shadow-sm hover:shadow-md transition">
                    <Icon className="w-4 h-4 text-primary" />
                    <span className="text-sm text-gray-700">{f.title}</span>
                  </div>
                );
              })}
            </motion.div>

          </motion.div>
        </div>

        {/* STATS */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center shadow hover:shadow-lg transition"
              >
                <Icon className="mx-auto mb-3 text-primary" />
                <h3 className="text-3xl font-bold">{stat.value}</h3>
                <p className="text-gray-500">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>

        {/* TRUST SECTION (IMPROVED 🔥) */}
        <div className="mt-24 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Trusted by Leading Companies
          </h3>

          <p className="text-gray-500 mb-10">
            Companies around the world trust our platform to find top talent
          </p>

          <div className="flex flex-wrap justify-center gap-10 md:gap-16">
            {['Google', 'Microsoft', 'Amazon', 'Meta', 'Apple'].map((c, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1 }}
                className="text-2xl md:text-3xl font-bold text-gray-700 opacity-80 hover:opacity-100 transition"
              >
                {c}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;