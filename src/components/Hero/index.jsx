import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 py-32 bg-background overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, -20, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="flex justify-center lg:justify-end order-1 lg:order-1"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 rounded-full border-2 border-primary/20"
                  initial={{ scale: 1, opacity: 0.3 }}
                  animate={{
                    scale: [1, 1.2, 1.4],
                    opacity: [0.3, 0.2, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeOut",
                    delay: i * 1.3,
                  }}
                />
              ))}

              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-2xl"
                animate={{
                  opacity: [0.4, 0.6, 0.4],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              <motion.div
                className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <img
                  src="/shayan.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -right-4 px-4 py-2 bg-surface-variant/90 backdrop-blur-md border border-outline rounded-full"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-white">Open for Collaborations</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left order-2 lg:order-2"
          >
            <motion.div variants={itemVariants} className="mb-4">
              <motion.span
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-outline rounded-full text-sm text-slate-300"
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.08)' }}
                transition={{ duration: 0.2 }}
              >
                <motion.span
                  className="w-2 h-2 bg-green-400 rounded-full"
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                />
                Crafting Digital Excellence
              </motion.span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            >
              Hi, I am{' '}
              <motion.span
                className="relative inline-block"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Shayan Ali
                </span>
                <motion.span
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                />
              </motion.span>
            </motion.h1>

            <motion.div variants={itemVariants} className="mb-6">
              <p className="text-2xl md:text-3xl text-slate-300 font-light">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  Full Stack Developer
                </motion.span>{' '}
                <motion.span
                  className="text-secondary"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                >
                  &
                </motion.span>{' '}
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                >
                  UI/UX Designer
                </motion.span>
              </p>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-slate-400 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8"
            >
              I am a Full Stack Developer and UI/UX Designer dedicated to crafting 
              high-performance digital experiences. Specializing in React.js, Next.js, 
              and Node.js, I bridge the gap between creative design and technical 
              engineering to build scalable, pixel-perfect web solutions.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center lg:justify-start mb-12">
              <motion.a
                href="#projects"
                className="group relative px-8 py-4 bg-primary text-white font-semibold rounded-xl overflow-hidden"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-secondary to-primary"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                />
                <span className="relative z-10 flex items-center gap-2">
                  View Projects
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    →
                  </motion.span>
                </span>
              </motion.a>

              <motion.a
                href="#contact"
                className="px-8 py-4 border-2 border-outline-variant text-white font-semibold rounded-xl hover:bg-white/5 transition-colors duration-300"
                whileHover={{ scale: 1.03, borderColor: 'rgba(96, 165, 250, 0.5)' }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                Get in Touch
              </motion.a>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-sm text-slate-500 mb-4">Tech Stack</p>
              <motion.div 
                className="flex flex-wrap gap-2 justify-center lg:justify-start"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.06,
                      delayChildren: 0.3
                    }
                  }
                }}
              >
                {['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind'].map((tech) => (
                  <motion.span
                    key={tech}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { 
                        opacity: 1, 
                        y: 0,
                        transition: {
                          duration: 0.4,
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
                    className="px-4 py-2 bg-white/5 border border-outline rounded-lg text-sm text-slate-300 cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
