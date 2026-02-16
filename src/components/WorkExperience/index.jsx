import { motion } from 'framer-motion';
import { Briefcase, ExternalLink } from 'lucide-react';
import { useState } from 'react';

const smoothEase = [0.25, 0.1, 0.25, 1];

const experiences = [
  {
    id: 1,
    company: 'Orlando Web Pros.LLC',
    role: 'GBP SEO Expert, Web Designer',
    website: 'https://orlandowebpros.com/',
    description: 'Specialized in Google Business Profile optimization and modern web design solutions. Delivered comprehensive SEO strategies and responsive websites that significantly improved client visibility and engagement metrics.',
  },
  {
    id: 2,
    company: 'Tritanium Global.LLC',
    role: 'Research & Development Engineer',
    website: 'https://tritaniumglobal.com/',
    description: 'Led innovative research initiatives and developed cutting-edge technical solutions. Collaborated with cross-functional teams to build scalable systems and drive technological advancement across multiple projects.',
  },
  {
    id: 3,
    company: 'NexLeed (subsidiary of Tritanium Global.LLC)',
    role: 'GBP SEO Expert, Full Stack Web Developer and Designer',
    website: 'https://nexleed.com/',
    description: 'Spearheaded end-to-end web development and SEO optimization for enterprise clients. Combined technical expertise with creative design to deliver high-performance websites that achieved top search rankings and exceptional user experiences.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: smoothEase,
    },
  },
};

const ExperienceCard = ({ experience, index, isLast }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative flex gap-6 md:gap-8">
      {/* Timeline Line and Dot */}
      <div className="flex flex-col items-center">
        {/* Dot */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.15, ease: smoothEase }}
          className="relative z-10"
        >
          <motion.div
            animate={{ 
              scale: isHovered ? 1.2 : 1,
              backgroundColor: isHovered ? 'rgb(96, 165, 250)' : 'rgb(30, 41, 59)'
            }}
            transition={{ duration: 0.3 }}
            className="w-5 h-5 rounded-full bg-slate-800 border-2 border-primary shadow-lg shadow-primary/30"
          />
        </motion.div>
        
        {/* Line */}
        {!isLast && (
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 + 0.2, ease: smoothEase }}
            className="w-0.5 flex-1 bg-gradient-to-b from-primary/50 to-primary/10 origin-top"
          />
        )}
      </div>

      {/* Card */}
      <motion.div
        variants={cardVariants}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex-1 pb-12"
      >
        <motion.div
          animate={{ 
            y: isHovered ? -3 : 0,
          }}
          transition={{ duration: 0.3, ease: smoothEase }}
          className="relative bg-white/5 backdrop-blur-xl border border-outline rounded-3xl p-8 overflow-hidden hover:border-primary/50 transition-colors duration-300"
        >
          {/* Blue Gradient Overlay on Hover */}
          <motion.div
            animate={{ opacity: isHovered ? 0.08 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 z-10 pointer-events-none"
          />

          {/* Card Content */}
          <div className="relative z-20">
            {/* Company Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: smoothEase }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-medium rounded-full shadow-lg">
                {experience.company}
              </span>
            </motion.div>

            {/* Role */}
            <motion.h3
              animate={{ color: isHovered ? 'rgb(96, 165, 250)' : 'rgb(255, 255, 255)' }}
              transition={{ duration: 0.3 }}
              className="text-2xl font-bold mb-4"
            >
              {experience.role}
            </motion.h3>

            {/* Description */}
            <p className="text-slate-400 leading-relaxed mb-6 max-w-2xl">
              {experience.description}
            </p>

            {/* Visit Website Link */}
            <motion.a
              href={experience.website}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 text-primary font-medium group/link"
            >
              <span className="relative">
                Visit Website
                <motion.span 
                  className="absolute -bottom-1 left-0 h-0.5 bg-primary"
                  initial={{ width: 0 }}
                  animate={{ width: isHovered ? '100%' : 0 }}
                  transition={{ duration: 0.3, ease: smoothEase }}
                />
              </span>
              <motion.span
                animate={{ 
                  x: isHovered ? [0, 3, 0] : 0,
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: isHovered ? Infinity : 0, 
                  ease: smoothEase 
                }}
              >
                <ExternalLink className="w-4 h-4" />
              </motion.span>
            </motion.a>
          </div>

          {/* Decorative Corner */}
          <motion.div
            animate={{ 
              opacity: isHovered ? 0.15 : 0.05,
              scale: isHovered ? 1.05 : 1
            }}
            transition={{ duration: 0.4 }}
            className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl pointer-events-none"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

const WorkExperience = () => {
  return (
    <section id="work-experience" className="py-24 px-6 bg-background relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.02, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.03, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: smoothEase }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: smoothEase }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-outline rounded-full mb-6"
          >
            <Briefcase className="w-4 h-4 text-primary" />
            <span className="text-sm text-slate-300">Career Journey</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Experience</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A track record of delivering exceptional results across diverse industries and roles
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col"
        >
          {experiences.map((experience, index) => (
            <ExperienceCard 
              key={experience.id} 
              experience={experience} 
              index={index}
              isLast={index === experiences.length - 1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WorkExperience;
