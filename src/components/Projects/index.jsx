import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight, Folder, Eye } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'Tritanium Global',
    category: 'Web Agency',
    description: 'A modern web agency platform delivering cutting-edge digital solutions for businesses worldwide.',
    url: 'https://www.tritaniumglobal.com',
    image: '/Tritanium.png',
    tags: ['React', 'Next.js', 'Tailwind CSS'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    title: 'Realestate360',
    category: 'US Real Estate',
    description: 'A luxury real estate platform for Real Estate 360 agency featuring IDX/MLS integration for seamless property listings and advanced search capabilities.',
    url: 'https://realestatesite-bay.vercel.app/',
    image: '/RealEstate360.png',
    tags: ['Next.js', 'Node.js', 'Database'],
    color: 'from-amber-500 to-yellow-400',
  },
  {
    id: 3,
    title: 'NexLeed',
    category: 'SEO Services',
    description: 'An SEO services platform helping businesses improve their online visibility and search rankings.',
    url: 'https://nexleed.vercel.app/',
    image: '/NexLeed.png',
    tags: ['React', 'SEO', 'Analytics'],
    color: 'from-yellow-600 to-amber-500',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={cardVariants}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <motion.div
        animate={{ 
          y: isHovered ? -8 : 0,
          scale: isHovered ? 1.01 : 1
        }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative bg-surface-variant rounded-3xl overflow-hidden border border-outline hover:border-primary/50 transition-colors duration-500"
      >
        {/* Gradient Overlay on Hover */}
        <motion.div
          animate={{ opacity: isHovered ? 0.15 : 0 }}
          transition={{ duration: 0.4 }}
          className={`absolute inset-0 bg-gradient-to-br ${project.color} z-10 pointer-events-none`}
        />

        {/* Project Image */}
        <div className="relative h-56 overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            animate={{ scale: isHovered ? 1.08 : 1 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-variant via-surface-variant/50 to-transparent" />
          
          {/* Category Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + index * 0.05, duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute top-4 left-4 z-20"
          >
            <span className={`px-4 py-1.5 bg-gradient-to-r ${project.color} text-white text-sm font-medium rounded-full shadow-lg`}>
              {project.category}
            </span>
          </motion.div>

          {/* View Project Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-20"
          >
            <motion.a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: isHovered ? 1 : 0.8, 
                opacity: isHovered ? 1 : 0 
              }}
              transition={{ duration: 0.3, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex items-center gap-2 px-6 py-3 bg-white text-slate-900 font-semibold rounded-full hover:bg-slate-100 transition-colors duration-300"
            >
              <Eye className="w-5 h-5" />
              View Project
            </motion.a>
          </motion.div>
        </div>

        {/* Project Content */}
        <div className="relative p-6 z-20">
          <motion.h3
            animate={{ color: isHovered ? 'rgb(96, 165, 250)' : 'rgb(255, 255, 255)' }}
            transition={{ duration: 0.3 }}
            className="text-xl font-bold mb-2"
          >
            {project.title}
          </motion.h3>
          
          <p className="text-slate-400 text-sm mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Tags - Smooth refined animation */}
          <motion.div 
            className="flex flex-wrap gap-2 mb-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.06,
                  delayChildren: 0.2
                }
              }
            }}
          >
            {project.tags.map((tag) => (
              <motion.span
                key={tag}
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { 
                    opacity: 1, 
                    scale: 1,
                    transition: {
                      duration: 0.3,
                      ease: [0.25, 0.1, 0.25, 1]
                    }
                  }
                }}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: 'rgba(96, 165, 250, 0.15)',
                  borderColor: 'rgba(96, 165, 250, 0.4)',
                  transition: { duration: 0.2 }
                }}
                className="px-3 py-1.5 bg-white/5 text-slate-300 text-xs rounded-lg border border-outline cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

          {/* Visit Link */}
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-medium group/link"
          >
            <span className="relative">
              Visit Live Site
              <motion.span 
                className="absolute -bottom-1 left-0 h-0.5 bg-primary"
                initial={{ width: 0 }}
                animate={{ width: isHovered ? '100%' : 0 }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              />
            </span>
            <motion.span
              animate={{ 
                x: isHovered ? [0, 4, 0] : 0,
                y: isHovered ? [0, -2, 0] : 0
              }}
              transition={{ 
                duration: 1.5, 
                repeat: isHovered ? Infinity : 0, 
                ease: [0.25, 0.1, 0.25, 1] 
              }}
            >
              <ArrowUpRight className="w-4 h-4" />
            </motion.span>
          </a>
        </div>

        {/* Decorative Elements */}
        <motion.div
          animate={{ 
            opacity: isHovered ? 0.3 : 0.1,
            scale: isHovered ? 1.1 : 1
          }}
          transition={{ duration: 0.5 }}
          className="absolute -bottom-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl pointer-events-none"
        />
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-background relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: [0.25, 0.1, 0.25, 1] }}
        />
        <motion.div
          className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: [0.25, 0.1, 0.25, 1] }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-outline rounded-full mb-6"
          >
            <Folder className="w-4 h-4 text-primary" />
            <span className="text-sm text-slate-300">Portfolio</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Projects</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A selection of my recent work showcasing full-stack development and design expertise
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 border-2 border-outline text-white font-semibold rounded-xl hover:bg-white/10 hover:border-primary/50 transition-all duration-300 group"
          >
            <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            View All Projects
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: [0.25, 0.1, 0.25, 1] }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
