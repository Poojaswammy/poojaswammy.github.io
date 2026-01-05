import { motion } from 'framer-motion'
import { Code, Database, Cloud, Brain, BarChart, Wrench } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code size={32} />,
      title: 'Programming',
      skills: ['Python', 'SQL', 'R', 'JavaScript', 'HTML/CSS', 'Django']
    },
    {
      icon: <Brain size={32} />,
      title: 'Data & ML',
      skills: ['Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'TensorFlow (basic)', 'SpaCy', 'NLTK', 'Transformers']
    },
    {
      icon: <Database size={32} />,
      title: 'Databases & Graph',
      skills: ['PostgreSQL', 'MySQL', 'SQLite', 'Neo4j (Cypher)', 'AWS Neptune (Gremlin)']
    },
    {
      icon: <Cloud size={32} />,
      title: 'Cloud & Tools',
      skills: ['AWS (EC2, S3, Glue)', 'Jupyter', 'Git/GitHub', 'Tableau', 'Power BI', 'Excel']
    }
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            A comprehensive toolkit for data analytics, machine learning, and full-stack development
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={item}
              whileHover={{ y: -10 }}
              className="glass-card p-6 rounded-2xl hover-lift"
            >
              <div className="flex flex-col items-center text-center">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="mb-4 p-4 rounded-full bg-gray-800/50 text-primary-400 border border-gray-600"
                >
                  {category.icon}
                </motion.div>
                
                <h3 className="text-xl font-semibold text-white mb-4">
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap justify-center gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: skillIndex * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 text-sm bg-gray-800/60 text-gray-200 rounded-full border border-gray-600 backdrop-blur-sm"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
