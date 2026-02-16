import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { 
  Code2, 
  Palette, 
  Layers, 
  Zap,
  Server,
  Database,
  Globe,
  Cpu,
  Sparkles
} from 'lucide-react';

// Smoother easing curve
const smoothEase = [0.25, 0.1, 0.25, 1];

// Animated Counter Component with smoother animation
const AnimatedCounter = ({ value, suffix = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  
  useEffect(() => {
    if (isInView) {
      const numericValue = parseInt(value.replace(/\D/g, ''));
      const controls = animate(count, numericValue, {
        duration: 1.2,
        ease: smoothEase,
      });
      return controls.stop;
    }
  }, [isInView, value, count]);

  return (
    <span ref={ref} className="inline-flex">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
};

const frontendSkills = [
  { name: 'React.js', icon: Code2, color: 'text-blue-400' },
  { name: 'Next.js', icon: Zap, color: 'text-white' },
  { name: 'Tailwind CSS', icon: Palette, color: 'text-cyan-400' },
  { name: 'UI/UX Design', icon: Layers, color: 'text-pink-400' },
];

const backendSkills = [
  { name: 'Node.js', icon: Server, color: 'text-green-400' },
  { name: 'Database Management', icon: Database, color: 'text-yellow-400' },
  { name: 'API Integration', icon: Globe, color: 'text-purple-400' },
  { name: 'System Architecture', icon: Cpu, color: 'text-orange-400' },
];

// Reduced animation intensity and duration
const cardVariants = {
  hidden: { opacity: 0, y: 30, rotateX: -10 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.5,
      ease: smoothEase,
    },
  },
};

// Reduced stagger delay
const skillContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
};

// Reduced animation intensity
const skillItemVariants = {
  hidden: { opacity: 0, scale: 0.9, x: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: smoothEase,
    },
  },
};

const Expertise = () => {
  return (
    <section id="expertise" className="py-24 px-6 bg-background relative overflow-hidden">
      {/* Background Decorations - slower cycles */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.02, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.03, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
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
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-slate-300">What I Do</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Expertise</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A comprehensive tech stack that enables me to build end-to-end solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 perspective-1000">
          {/* Frontend Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ 
              y: -5,
              transition: { duration: 0.3, ease: smoothEase }
            }}
            className="group relative bg-white/5 backdrop-blur-xl border border-outline rounded-3xl p-8 overflow-hidden"
          >
            {/* Hover Gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />

            {/* Card Content */}
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <motion.div
                  className="p-4 bg-primary/20 rounded-2xl border border-primary/30"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3, ease: smoothEase }}
                >
                  <Code2 className="w-8 h-8 text-primary" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">Frontend Mastery</h3>
                  <p className="text-slate-400 text-sm">Building beautiful interfaces</p>
                </div>
              </div>
              
              <motion.div
                variants={skillContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
              >
                {frontendSkills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={skillItemVariants}
                    whileHover={{ 
                      scale: 1.02, 
                      backgroundColor: 'rgba(255,255,255,0.08)',
                      borderColor: 'rgba(96, 165, 250, 0.4)'
                    }}
                    transition={{ duration: 0.3, ease: smoothEase }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-outline cursor-default"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3, ease: smoothEase }}
                      className="flex-shrink-0"
                    >
                      <skill.icon className={`w-5 h-5 ${skill.color}`} />
                    </motion.div>
                    <span className="text-slate-300 font-medium text-sm leading-tight">{skill.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Decorative Corner */}
            <motion.div
              className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/15 transition-colors duration-300"
            />
          </motion.div>

          {/* Backend Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1 }}
            whileHover={{ 
              y: -5,
              transition: { duration: 0.3, ease: smoothEase }
            }}
            className="group relative bg-white/5 backdrop-blur-xl border border-outline rounded-3xl p-8 overflow-hidden"
          >
            {/* Hover Gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />

            {/* Card Content */}
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <motion.div
                  className="p-4 bg-secondary/20 rounded-2xl border border-secondary/30"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3, ease: smoothEase }}
                >
                  <Server className="w-8 h-8 text-secondary" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">Backend Core</h3>
                  <p className="text-slate-400 text-sm">Powering robust systems</p>
                </div>
              </div>
              
              <motion.div
                variants={skillContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
              >
                {backendSkills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={skillItemVariants}
                    whileHover={{ 
                      scale: 1.02, 
                      backgroundColor: 'rgba(255,255,255,0.08)',
                      borderColor: 'rgba(167, 139, 250, 0.4)'
                    }}
                    transition={{ duration: 0.3, ease: smoothEase }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-outline cursor-default"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3, ease: smoothEase }}
                      className="flex-shrink-0"
                    >
                      <skill.icon className={`w-5 h-5 ${skill.color}`} />
                    </motion.div>
                    <span className="text-slate-300 font-medium text-sm leading-tight">{skill.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Decorative Corner */}
            <motion.div
              className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-2xl group-hover:bg-secondary/15 transition-colors duration-300"
            />
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: smoothEase }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '5', suffix: '+', label: 'Years Experience' },
            { value: '50', suffix: '+', label: 'Projects Completed' },
            { value: '30', suffix: '+', label: 'Happy Clients' },
            { value: '100', suffix: '%', label: 'Satisfaction Rate' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.05, duration: 0.4, ease: smoothEase }}
              whileHover={{ scale: 1.02, y: -3 }}
              className="text-center p-6 bg-white/5 backdrop-blur-md border border-outline rounded-2xl"
            >
              <motion.div
                className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-2"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.05, duration: 0.4, ease: smoothEase }}
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </motion.div>
              <p className="text-slate-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Expertise;
