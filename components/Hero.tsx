import { motion } from 'framer-motion'
import Image from 'next/image'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative mb-8"
        >
          <div className="relative w-48 h-48 lg:w-56 lg:h-56 mx-auto">
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-400/20 via-secondary-400/20 to-accent-400/20 opacity-30"
            />
            <div className="absolute inset-4 rounded-full overflow-hidden glass-card">
              <Image
                src="/profile-new.jpg"
                alt="Pooja Manjunatha Swamy"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl lg:text-6xl font-bold mb-4"
        >
          <span className="gradient-text">Pooja Manjunatha Swamy</span>
        </motion.h1>

        {/* One-line Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl lg:text-2xl text-gray-200 font-light"
        >
          Data Analyst & Web Developer
        </motion.p>
      </div>

      {/* Floating Shapes */}
      <div className="floating-shapes">
        <div className="floating-shape" />
        <div className="floating-shape" />
        <div className="floating-shape" />
      </div>
    </section>
  )
}

export default Hero
