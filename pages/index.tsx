import { motion } from 'framer-motion'
import Head from 'next/head'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'

export default function Home() {
  return (
    <>
      <Head>
        <title>Pooja Manjunatha Swamy — Data Analytics Engineer</title>
        <meta name="description" content="Data Analytics Engineer with expertise in Python, SQL, Machine Learning, and Cloud Technologies. Experience in data science, full-stack analytics, and graph databases." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>

      <div className="relative min-h-screen">
        <Header />
        
        <main>
          <Hero />
          
          {/* About Section */}
          <section id="about" className="py-20 px-6 bg-gray-900/30">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">
                  About Me
                </h2>
                <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                  Passionate about transforming data into actionable insights
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* About Content */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <div className="glass-card p-8 rounded-2xl">
                    <h3 className="text-2xl font-bold text-white mb-4">Professional Summary</h3>
                    <p className="text-gray-200 leading-relaxed mb-4">
                      Data Analytics graduate with hands-on experience in data science, machine learning, 
                      and full-stack analytics solutions. Currently pursuing M.S. in Data Analytics Engineering 
                      at George Mason University with a strong focus on practical applications and research.
                    </p>
                    <p className="text-gray-200 leading-relaxed">
                      Skilled in Python, SQL, Tableau, Power BI, and AWS with strong exposure to graph analytics, 
                      NLP, and LLM/RAG-style systems. Passionate about leveraging data to solve complex problems 
                      and drive business decisions.
                    </p>
                  </div>

                  <div className="glass-card p-8 rounded-2xl">
                    <h3 className="text-2xl font-bold text-white mb-4">What I Do</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                        <span className="text-gray-200">Data Science & Machine Learning Solutions</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-secondary-400 rounded-full"></div>
                        <span className="text-gray-200">Full-Stack Analytics Development</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-accent-400 rounded-full"></div>
                        <span className="text-gray-200">Business Intelligence & Visualization</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-gray-200">Front-End & Web Development</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span className="text-gray-200">Research & Innovation in AI/ML</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Contact Info & Stats */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <div className="glass-card p-8 rounded-2xl">
                    <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 text-gray-200">
                        <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <a href="mailto:poojam742000@gmail.com" className="hover:text-primary-400 transition-colors">
                          poojam742000@gmail.com
                        </a>
                      </div>
                      <div className="flex items-center space-x-3 text-gray-200">
                        <svg className="w-5 h-5 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span>+1 571-241-2282</span>
                      </div>
                      <div className="flex items-center space-x-3 text-gray-200">
                        <svg className="w-5 h-5 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>Fairfax, Virginia</span>
                      </div>
                    </div>

                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                      <motion.a
                        href="/Pooja_Resume.pdf"
                        download
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Download Resume
                      </motion.a>
                      
                      <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary-500 text-primary-500 font-semibold rounded-full hover:bg-primary-500 hover:text-white transition-all duration-300"
                      >
                        Get In Touch
                      </motion.a>
                    </div>
                  </div>

                  <div className="glass-card p-8 rounded-2xl">
                    <h3 className="text-2xl font-bold text-white mb-6">Quick Stats</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold gradient-text">3.73</div>
                        <div className="text-gray-300 text-sm">GPA</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold gradient-text">2+</div>
                        <div className="text-gray-300 text-sm">Years Experience</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold gradient-text">2</div>
                        <div className="text-gray-300 text-sm">Publications</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold gradient-text">50+</div>
                        <div className="text-gray-300 text-sm">Students Mentored</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
          
          <Skills />
          
          {/* Projects Section */}
          <section id="projects" className="py-20 px-6 bg-gray-900/30">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">
                  Featured Projects
                </h2>
                <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                  A showcase of my work in data analytics, machine learning, and web development.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Project 1 - Lung Cancer Detection */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="glass-card p-6 rounded-2xl group hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-full h-48 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-pink-500/10"></div>
                    <div className="relative z-10 w-20 h-20 border-4 border-primary-400/50 rounded-full flex items-center justify-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 w-3 h-3 bg-primary-400 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-4 left-4 w-2 h-2 bg-secondary-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Lung Cancer Detection using CNN</h3>
                  <p className="text-gray-200 mb-4 text-sm leading-relaxed">
                    Developed an automatic lung cancer detection system using Convolutional Neural Networks. 
                    Achieved high accuracy in identifying cancerous patterns in medical imaging data.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-xs">Python</span>
                    <span className="px-3 py-1 bg-secondary-500/20 text-secondary-300 rounded-full text-xs">TensorFlow</span>
                    <span className="px-3 py-1 bg-accent-500/20 text-accent-300 rounded-full text-xs">CNN</span>
                    <span className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-xs">Medical AI</span>
                  </div>
                  <div className="flex gap-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-sm font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                    >
                      View Details
                    </motion.button>
                  </div>
                </motion.div>

                {/* Project 2 - Water Flow Monitoring */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-6 rounded-2xl group hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-full h-48 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10"></div>
                    <div className="relative z-10 flex flex-col items-center">
                      <div className="w-16 h-16 border-3 border-blue-400/50 rounded-lg flex items-center justify-center mb-2">
                        <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div className="flex space-x-1">
                        <div className="w-1 h-8 bg-cyan-400 rounded-full animate-bounce"></div>
                        <div className="w-1 h-6 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                        <div className="w-1 h-10 bg-cyan-300 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        <div className="w-1 h-4 bg-blue-300 rounded-full animate-bounce" style={{animationDelay: '0.3s'}}></div>
                      </div>
                    </div>
                    <div className="absolute top-6 right-6 w-4 h-4 border-2 border-cyan-400 rounded-full animate-spin"></div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Water Flow Monitoring System</h3>
                  <p className="text-gray-200 mb-4 text-sm leading-relaxed">
                    Built an IoT-based system to compute volumetric water flow rates with real-time data 
                    storage and visualization through a web interface.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">IoT</span>
                    <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs">Arduino</span>
                    <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-xs">Web Dev</span>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">Sensors</span>
                  </div>
                  <div className="flex gap-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                    >
                      View Details
                    </motion.button>
                  </div>
                </motion.div>

                {/* Project 3 - Data Analytics Dashboard */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="glass-card p-6 rounded-2xl group hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-full h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10"></div>
                    <div className="relative z-10 grid grid-cols-3 gap-2 w-20 h-16">
                      <div className="bg-purple-400 rounded-sm h-12 animate-pulse"></div>
                      <div className="bg-pink-400 rounded-sm h-8 mt-4 animate-pulse" style={{animationDelay: '0.2s'}}></div>
                      <div className="bg-purple-300 rounded-sm h-10 mt-2 animate-pulse" style={{animationDelay: '0.4s'}}></div>
                      <div className="bg-pink-300 rounded-sm h-6 mt-6 animate-pulse" style={{animationDelay: '0.6s'}}></div>
                      <div className="bg-purple-500 rounded-sm h-14 animate-pulse" style={{animationDelay: '0.8s'}}></div>
                      <div className="bg-pink-500 rounded-sm h-9 mt-3 animate-pulse" style={{animationDelay: '1s'}}></div>
                    </div>
                    <div className="absolute top-4 left-4 w-6 h-6 border-2 border-purple-400 rounded-md flex items-center justify-center">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    </div>
                    <div className="absolute bottom-4 right-4 flex space-x-1">
                      <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-pink-300 rounded-full"></div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Interactive Analytics Dashboard</h3>
                  <p className="text-gray-200 mb-4 text-sm leading-relaxed">
                    Created comprehensive data visualization dashboards with real-time analytics, 
                    interactive charts, and automated reporting capabilities.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">Python</span>
                    <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-xs">Streamlit</span>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">Plotly</span>
                    <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs">Pandas</span>
                  </div>
                  <div className="flex gap-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                    >
                      View Details
                    </motion.button>
                  </div>
                </motion.div>

                {/* Project 4 - Machine Learning Pipeline */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="glass-card p-6 rounded-2xl group hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-full h-48 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10"></div>
                    <div className="relative z-10 flex items-center space-x-3">
                      <div className="w-8 h-8 border-2 border-emerald-400 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                      </div>
                      <div className="flex flex-col space-y-1">
                        <div className="w-6 h-1 bg-teal-400 rounded-full"></div>
                        <div className="w-4 h-1 bg-emerald-400 rounded-full"></div>
                        <div className="w-5 h-1 bg-teal-300 rounded-full"></div>
                      </div>
                      <div className="w-10 h-10 border-2 border-teal-400 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <div className="flex flex-col space-y-1">
                        <div className="w-6 h-1 bg-emerald-300 rounded-full"></div>
                        <div className="w-4 h-1 bg-teal-300 rounded-full"></div>
                        <div className="w-5 h-1 bg-emerald-400 rounded-full"></div>
                      </div>
                      <div className="w-8 h-8 border-2 border-emerald-400 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-emerald-400 rounded-full animate-ping"></div>
                      </div>
                    </div>
                    <div className="absolute top-3 right-3 flex space-x-1">
                      <div className="w-1 h-1 bg-teal-400 rounded-full animate-pulse"></div>
                      <div className="w-1 h-1 bg-emerald-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">ML Model Deployment Pipeline</h3>
                  <p className="text-gray-200 mb-4 text-sm leading-relaxed">
                    Built end-to-end machine learning pipelines with automated model training, 
                    validation, and deployment using cloud infrastructure.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs">Scikit-learn</span>
                    <span className="px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-xs">AWS</span>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">Docker</span>
                    <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-xs">MLOps</span>
                  </div>
                  <div className="flex gap-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                    >
                      View Details
                    </motion.button>
                  </div>
                </motion.div>

                {/* Project 5 - Sentiment Analysis */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="glass-card p-6 rounded-2xl group hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-full h-48 bg-gradient-to-br from-indigo-500/20 to-violet-500/20 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-violet-500/10"></div>
                    <div className="relative z-10 w-24 h-16 flex flex-col items-center justify-center">
                      <div className="flex space-x-2 mb-3">
                        <div className="w-3 h-3 bg-indigo-400 rounded-full animate-bounce"></div>
                        <div className="w-3 h-3 bg-violet-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                        <div className="w-3 h-3 bg-indigo-300 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                      </div>
                      <div className="w-16 h-2 bg-gradient-to-r from-indigo-400 to-violet-400 rounded-full relative">
                        <div className="absolute left-1/3 w-2 h-2 bg-white rounded-full -top-0.5 animate-pulse"></div>
                      </div>
                      <div className="flex space-x-1 mt-2">
                        <div className="w-6 h-1 bg-indigo-300 rounded-full"></div>
                        <div className="w-4 h-1 bg-violet-300 rounded-full"></div>
                        <div className="w-5 h-1 bg-indigo-400 rounded-full"></div>
                      </div>
                    </div>
                    <div className="absolute top-4 left-4 w-8 h-8 border border-indigo-400/30 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                      </svg>
                    </div>
                    <div className="absolute bottom-4 right-4 flex space-x-1">
                      <div className="w-1 h-4 bg-violet-400 rounded-full"></div>
                      <div className="w-1 h-6 bg-indigo-400 rounded-full"></div>
                      <div className="w-1 h-3 bg-violet-300 rounded-full"></div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Social Media Sentiment Analysis</h3>
                  <p className="text-gray-200 mb-4 text-sm leading-relaxed">
                    Developed NLP models to analyze sentiment patterns in social media data, 
                    providing insights into public opinion and brand perception.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs">NLP</span>
                    <span className="px-3 py-1 bg-violet-500/20 text-violet-300 rounded-full text-xs">NLTK</span>
                    <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-xs">spaCy</span>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">API Integration</span>
                  </div>
                  <div className="flex gap-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-indigo-500 to-violet-500 text-white text-sm font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                    >
                      View Details
                    </motion.button>
                  </div>
                </motion.div>

                {/* Project 6 - Database Optimization */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="glass-card p-6 rounded-2xl group hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-full h-48 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-500/10"></div>
                    <div className="relative z-10 flex items-center justify-center">
                      <div className="relative w-20 h-20">
                        <div className="absolute inset-0 border-2 border-amber-400/30 rounded-full"></div>
                        <div className="absolute inset-2 border-2 border-orange-400/50 rounded-full"></div>
                        <div className="absolute inset-4 border-2 border-amber-400 rounded-full"></div>
                        <div className="absolute inset-6 w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                          </svg>
                        </div>
                        <div className="absolute -top-1 left-1/2 w-2 h-2 bg-amber-400 rounded-full animate-ping"></div>
                        <div className="absolute -bottom-1 left-1/4 w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse"></div>
                        <div className="absolute top-1/4 -right-1 w-1.5 h-1.5 bg-amber-300 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                      </div>
                    </div>
                    <div className="absolute top-6 left-6 flex space-x-1">
                      <div className="w-1 h-3 bg-amber-400 rounded-full"></div>
                      <div className="w-1 h-2 bg-orange-400 rounded-full"></div>
                      <div className="w-1 h-4 bg-amber-300 rounded-full"></div>
                    </div>
                    <div className="absolute bottom-6 right-6 w-6 h-6 border border-orange-400/40 rounded-md rotate-45"></div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Graph Database Analytics</h3>
                  <p className="text-gray-200 mb-4 text-sm leading-relaxed">
                    Implemented graph database solutions for complex relationship analysis, 
                    optimizing query performance and data visualization.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-amber-500/20 text-amber-300 rounded-full text-xs">Neo4j</span>
                    <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-xs">Cypher</span>
                    <span className="px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-xs">Graph Theory</span>
                    <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-xs">Data Viz</span>
                  </div>
                  <div className="flex gap-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                    >
                      View Details
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
          
          {/* Experience Section */}
          <section id="experience" className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">
                  Experience
                </h2>
              </motion.div>

              <div className="space-y-8">
                {/* Experience Items */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="glass-card p-8 rounded-2xl"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">Web Developer & Project Lead — CARP Lab</h3>
                    <span className="text-lg text-primary-400 font-semibold">July 2025 – Present</span>
                  </div>
                  <ul className="space-y-2 text-gray-200">
                    <li>• Led end-to-end migration and redesign of the CARP Lab website using WordPress and Hostinger. Configured hosting, domains, SSL, themes, plugins, and content architecture.</li>
                    <li>• Cleaned legacy HTML, fixed broken links, standardized navigation, and improved UX and responsiveness. Implementing Newsletters, Secure Payments, Subscriptions forms, monitoring the analytics.</li>
                    <li>• Collaborated with faculty to design web-based platforms for research dissemination and digital learning tools. Implementing the SEO.</li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="glass-card p-8 rounded-2xl"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">UI/UX Developer — Crux Acuity</h3>
                    <span className="text-lg text-primary-400 font-semibold">Sept 2025 – Nov 2025</span>
                  </div>
                  <ul className="space-y-2 text-gray-200">
                    <li>• Developed and refactored frontend modules using JavaScript and component-based UI patterns. Improved performance, readability, and maintainability of existing web components.</li>
                    <li>• Writing and Maintaining the unit test cases.</li>
                    <li>• Followed Git-based workflows, code reviews, and testing practices to ensure stable releases.</li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="glass-card p-8 rounded-2xl"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">Data Analyst & Project Manager — CARP Lab</h3>
                    <span className="text-lg text-primary-400 font-semibold">July 2025 – Present</span>
                  </div>
                  <ul className="space-y-2 text-gray-200">
                    <li>• Supported research analytics through data-backed web tools and dashboards, prototyped AI-powered Q&A concepts using NLP and vector-search approaches and collaborated with faculty to translate research needs into technical implementations.</li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="glass-card p-8 rounded-2xl"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">Data Analyst — Crux Acuity</h3>
                    <span className="text-lg text-primary-400 font-semibold">Sept 2025 – Nov 2025</span>
                  </div>
                  <ul className="space-y-2 text-gray-200">
                    <li>• Supported analytics-driven internal tools by building Python- and SQL-based data extraction and transformation workflows, improving data-backed decision-making through testing, validation, and agile Git-based collaboration.</li>
                    <li>• Collaborated in agile teams using Git-based workflows, pull requests, and sprint-based delivery.</li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="glass-card p-8 rounded-2xl"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">Makerspace Associate — Mason Innovation Exchange (MIX)</h3>
                    <span className="text-lg text-primary-400 font-semibold">Feb 2024 – May 2025</span>
                  </div>
                  <ul className="space-y-2 text-gray-200">
                    <li>• Supported students and faculty on technical projects involving dashboards, data visualization, and web tools. Supported development and maintenance of web-based tools, dashboards, and digital interfaces used in academic and student projects.</li>
                    <li>• Assisted with frontend-related tasks including UI updates, content structuring, and integration of data visualizations into web platforms.</li>
                    <li>• Conducted workshops and provided technical guidance for interdisciplinary projects.</li>
                    <li>• Mentored 50+ students on EDA, data cleaning, and visualization workflows; analyzed 2,500+ operational records to identify usage and engagement trends; delivered insights supporting scheduling optimization and resource planning.</li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="glass-card p-8 rounded-2xl"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">Software Engineering Trainee — Mphasis Limited</h3>
                    <span className="text-lg text-primary-400 font-semibold">Aug 2022 – Oct 2022</span>
                  </div>
                  <ul className="space-y-2 text-gray-200">
                    <li>• Developed a task-tracking web application using Django, HTML, CSS, JavaScript, and SQL. Designed backend logic and database schemas; integrated frontend interfaces with backend services. Worked in an agile SDLC environment using Git and collaborative development practices.</li>
                    <li>• Applied Python and SQL for data analysis, backend data handling, and query optimization.</li>
                    <li>• Worked with structured and semi-structured datasets within SDLC and agile frameworks.</li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="glass-card p-8 rounded-2xl"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">Sonar & Naval Systems Analyst (Intern) — BEL</h3>
                    <span className="text-lg text-primary-400 font-semibold">Sept 2021 – Oct 2021</span>
                  </div>
                  <ul className="space-y-2 text-gray-200">
                    <li>• Analyzed SONAR signal datasets using Python, SQL, FFT, and filtering techniques.</li>
                    <li>• Documented analytical pipelines aligned with defense research and validation standards.</li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section id="education" className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">
                  Education
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="glass-card p-8 rounded-2xl text-center"
                >
                  <h3 className="text-2xl font-bold text-white mb-2">M.S., Data Analytics Engineering</h3>
                  <h4 className="text-xl text-primary-400 font-semibold mb-2">George Mason University</h4>
                  <p className="text-gray-200 mb-2">Class of 2025 • GPA: 3.73/4.00</p>
                  <p className="text-gray-400">Fairfax, VA</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="glass-card p-8 rounded-2xl text-center"
                >
                  <h3 className="text-2xl font-bold text-white mb-2">Bachelor of Engineering, Electronics & Communication Engineering</h3>
                  <h4 className="text-xl text-primary-400 font-semibold mb-2">SJC Institute of Technology</h4>
                  <p className="text-gray-200 mb-2">2018 – 2022 • GPA: 9.1 / 10</p>
                  <p className="text-gray-400">Bangalore, India</p>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Publications Section */}
          <section id="publications" className="py-20 px-6 bg-gray-900/30">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">
                  Publications
                </h2>
              </motion.div>

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="glass-card p-6 rounded-2xl"
                >
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Automatic Detection of Lung Cancer Based on Convolution Neural Network
                  </h3>
                  <p className="text-gray-200">
                    Ravi M.V., and Pooja M., IRUMETS, Vol. 4, Issue 06, June 2022.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="glass-card p-6 rounded-2xl"
                >
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Computing Volumetric Water Flow Rate and Storing the Data in Website
                  </h3>
                  <p className="text-gray-200">
                    Manasa C., Nisarga Y. P., Pavani K. N., Pooja M., and Ravi M. V., IJCESR, Vol. IX, Issue VI, June 2022. DOI:10.21276/ijcesr.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-20 px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">
                  Let's Connect
                </h2>
                <p className="text-xl text-gray-200">
                  Ready to collaborate? Get in touch and let's create something amazing together.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-2xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Contact Info */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <a href="mailto:poojam742000@gmail.com" className="text-gray-300 hover:text-primary-400 transition-colors">
                          poojam742000@gmail.com
                        </a>
                      </div>
                      <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-gray-300">Fairfax, VA</span>
                      </div>
                    </div>

                    {/* Social Links */}
                    <div className="mt-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Connect With Me</h4>
                      <div className="flex space-x-4">
                        <motion.a
                          href="https://www.linkedin.com/in/pooja-manjunatha-swamy/"
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-10 h-10 bg-blue-600/20 border border-blue-500/30 text-blue-400 rounded-lg flex items-center justify-center hover:border-blue-500/60 hover:bg-blue-600/30 transition-all duration-300"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        </motion.a>
                        <motion.a
                          href="https://github.com/poojaswammy"
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-10 h-10 bg-gray-600/20 border border-gray-500/30 text-gray-400 rounded-lg flex items-center justify-center hover:border-gray-500/60 hover:bg-gray-600/30 transition-all duration-300"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        </motion.a>
                        <motion.a
                          href="/Pooja_Resume.pdf"
                          download
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-10 h-10 bg-green-600/20 border border-green-500/30 text-green-400 rounded-lg flex items-center justify-center hover:border-green-500/60 hover:bg-green-600/30 transition-all duration-300"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </motion.a>
                      </div>
                    </div>
                  </div>

                  {/* Quick Message Form */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Send a Quick Message</h3>
                    <form className="space-y-4">
                      <div>
                        <input
                          type="text"
                          name="name"
                          required
                          placeholder="Your Name"
                          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-primary-400 focus:ring-1 focus:ring-primary-400 focus:outline-none transition-all duration-300"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="Your Email"
                          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-primary-400 focus:ring-1 focus:ring-primary-400 focus:outline-none transition-all duration-300"
                        />
                      </div>
                      <div>
                        <textarea
                          name="message"
                          required
                          rows={4}
                          placeholder="Your message..."
                          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-primary-400 focus:ring-1 focus:ring-primary-400 focus:outline-none transition-all duration-300 resize-none"
                        ></textarea>
                      </div>
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                        onClick={(e) => {
                          e.preventDefault();
                          const form = (e.target as HTMLElement).closest('form') as HTMLFormElement;
                          const formData = new FormData(form);
                          const name = formData.get('name') as string;
                          const email = formData.get('email') as string;
                          const message = formData.get('message') as string;
                          
                          if (name && email && message) {
                            const mailtoLink = `mailto:poojam742000@gmail.com?subject=${encodeURIComponent('Message from ' + name)}&body=${encodeURIComponent(
                              `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
                            )}`;
                            window.location.href = mailtoLink;
                          } else {
                            alert('Please fill in all fields.');
                          }
                        }}
                      >
                        Send Message
                      </motion.button>
                    </form>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="py-8 text-center text-gray-400 border-t border-gray-800">
          <p>&copy; 2024 Pooja Manjunatha Swamy. Built with Next.js and Tailwind CSS.</p>
        </footer>
      </div>
    </>
  )
}
