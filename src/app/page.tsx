"use client";

import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;

    // For static deployment, show success message with email instructions
    setTimeout(() => {
      alert(`Thank you for your message, ${name}!\n\nSince this is a static deployment, please email me directly at:\nmaverik_90@hotmail.com\n\nI'll get back to you as soon as possible!`);
      e.currentTarget.reset();
      setIsSubmitting(false);
    }, 1000);
  };
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-lg z-50 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
          >
            Muzammil Mirza
          </motion.div>
          <div className="hidden md:flex space-x-8">
            <motion.a 
              href="#about" 
              className="text-gray-300 hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              About
            </motion.a>
            <motion.a 
              href="#projects" 
              className="text-gray-300 hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Projects
            </motion.a>
            <motion.a 
              href="#skills" 
              className="text-gray-300 hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Skills
            </motion.a>
            <motion.a 
              href="#contact" 
              className="text-gray-300 hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact
            </motion.a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="pt-32 pb-20 px-6 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-4xl font-bold shadow-2xl shadow-purple-500/50">
              MM
            </div>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Hi, I&apos;m <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Muzammil Mirza</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Lead Frontend Engineer | CRO Specialist | Web Performance Expert
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            A dedicated Lead Frontend Engineer with over a decade of experience, translating complex requirements into elegant, high-performance web solutions.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(59, 130, 246, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <Mail className="inline-block mr-2 h-4 w-4" />
              Get In Touch
            </motion.button>
            <motion.a 
              href="/muzammil-mirza-resume.pdf"
              download="muzammil-mirza-resume.pdf"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(255, 255, 255, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 border border-gray-600 rounded-full font-semibold text-white hover:bg-gray-800 transition-all duration-300"
            >
              <Download className="inline-block mr-2 h-4 w-4" />
              Download Resume
            </motion.a>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex justify-center space-x-6"
          >
            <motion.a 
              href="https://github.com/maverik90" 
              className="text-gray-400 hover:text-white transition-colors p-3 rounded-full hover:bg-gray-800"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="h-6 w-6" />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/muzammil-mirza-5182531a/" 
              className="text-gray-400 hover:text-white transition-colors p-3 rounded-full hover:bg-gray-800"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="h-6 w-6" />
            </motion.a>
            <motion.a 
              href="mailto:maverik_90@hotmail.com" 
              className="text-gray-400 hover:text-white transition-colors p-3 rounded-full hover:bg-gray-800"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail className="h-6 w-6" />
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        id="about" 
        className="py-20 px-6 bg-gray-900/50 backdrop-blur-sm"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">About Me</span>
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-300 mb-6">
                I&apos;m a Lead Frontend Engineer at Spiralyze with over a decade of experience in web development and conversion rate optimization. 
                I excel at translating complex requirements into elegant, high-performance web solutions.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                My expertise spans across modern frontend technologies, CRO strategies, and performance optimization. 
                When I&apos;m not coding, you&apos;ll find me exploring new technologies, optimizing user experiences, or contributing to innovative web projects.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-800/50 p-4 rounded-lg border border-gray-700"
                >
                  <h4 className="font-semibold text-white mb-2">Experience</h4>
                  <p className="text-gray-400">10+ Years</p>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-800/50 p-4 rounded-lg border border-gray-700"
                >
                  <h4 className="font-semibold text-white mb-2">Current Role</h4>
                  <p className="text-gray-400">Lead Frontend Engineer</p>
                </motion.div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.2 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4"
              >
                <h3 className="text-lg font-semibold text-white mb-3">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">React</Badge>
                  <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">Vue.js</Badge>
                  <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">TypeScript</Badge>
                  <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">JavaScript ES6+</Badge>
                  <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">HTML5</Badge>
                  <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">CSS3</Badge>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.2 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4"
              >
                <h3 className="text-lg font-semibold text-white mb-3">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-green-500/20 text-green-300 border-green-500/30">Node.js</Badge>
                  <Badge className="bg-green-500/20 text-green-300 border-green-500/30">Webflow</Badge>
                  <Badge className="bg-green-500/20 text-green-300 border-green-500/30">WordPress</Badge>
                  <Badge className="bg-green-500/20 text-green-300 border-green-500/30">Shopify</Badge>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.2 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4"
              >
                <h3 className="text-lg font-semibold text-white mb-3">Tools</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">CRO</Badge>
                  <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">Web Performance</Badge>
                  <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">Git</Badge>
                  <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">OpenAI</Badge>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.2 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4"
              >
                <h3 className="text-lg font-semibold text-white mb-3">Other</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30">Conversion Rate Optimization</Badge>
                  <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30">A/B Testing</Badge>
                  <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30">Performance Optimization</Badge>
                  <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30">UI/UX Design</Badge>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        id="projects" 
        className="py-20 px-6 bg-gray-900/30 backdrop-blur-sm"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Featured Projects</span>
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:border-purple-500/50 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-3">AI Therapist Chatbot</h3>
              <p className="text-gray-400 mb-4">Developed using ChatGPT Assistant API for real-time online therapy with session recording and analysis</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">OpenAI</Badge>
                <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">ChatGPT API</Badge>
                <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">React</Badge>
              </div>
              <div className="text-sm text-gray-500">
                <p>🏆 First AI project at Spiralyze</p>
                <p>📈 Boosted website engagement significantly</p>
                <p>💡 Planned for subscription service expansion</p>
                <p>🌐 Live: dialecticalbehaviortherapy.com/mindfulness/observing/virtual-coach</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:border-purple-500/50 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-3">Interactive Storytelling Website</h3>
              <p className="text-gray-400 mb-4">Immersive narrative experience using GSAP and ScrollMagic for scroll-driven animations</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="bg-green-500/20 text-green-300 border-green-500/30">GSAP</Badge>
                <Badge className="bg-green-500/20 text-green-300 border-green-500/30">ScrollMagic</Badge>
                <Badge className="bg-green-500/20 text-green-300 border-green-500/30">JavaScript</Badge>
              </div>
              <div className="text-sm text-gray-500">
                <p>🎭 Dynamic scene reveals on scroll</p>
                <p>🌱 Vegan storytelling experience</p>
                <p>🎨 &quot;Demokratie Fan&quot; portfolio project</p>
                <p>🌐 Live: demokratie-fan.de</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:border-purple-500/50 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-3">Seamless WordPress SPA</h3>
              <p className="text-gray-400 mb-4">Single-page application experience with Barba.js integration for smooth page transitions</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">WordPress</Badge>
                <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">Elementor</Badge>
                <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">Barba.js</Badge>
              </div>
              <div className="text-sm text-gray-500">
                <p>⚡ Reload-free page transitions</p>
                <p>🔧 Custom Elementor integration</p>
                <p>🏆 CTO praise, 3+ years stable</p>
                <p>🌐 Live: proactivity-management.com</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Publications Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        id="publications" 
        className="py-20 px-6 bg-black"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            <span className="bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">Publications & Features</span>
          </motion.h2>
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8 hover:border-green-500/50 transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">P</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Transforming Web User Experiences: How Developer Muzammil Mirza Is Pushing the Frontend Frontier
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Featured article highlighting my contributions to frontend development, CRO expertise, and innovative web solutions that enhance user experiences and drive business growth.
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <span className="font-medium text-green-400">Propakistani.pk</span>
                    <span className="mx-2">•</span>
                    <span>December 21, 2021</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    <p>🌐 propakistani.pk/2021/12/21/transforming-web-user-experiences-how-developer-muzammil-mirza-is-pushing-the-frontend-frontier/</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        id="skills" 
        className="py-20 px-6 bg-gray-900/50 backdrop-blur-sm"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            <span className="bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">Skills & Expertise</span>
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold text-white mb-6">Frontend Development</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-300">React/Vue.js</span>
                    <span className="text-sm text-gray-400">95%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "95%" }}
                      transition={{ duration: 1, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-300">JavaScript ES6+</span>
                    <span className="text-sm text-gray-400">98%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "98%" }}
                      transition={{ duration: 1, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-300">HTML5/CSS3</span>
                    <span className="text-sm text-gray-400">96%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "96%" }}
                      transition={{ duration: 1, delay: 0.4 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold text-white mb-6">Backend Development</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-300">CRO & A/B Testing</span>
                    <span className="text-sm text-gray-400">92%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "92%" }}
                      transition={{ duration: 1, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-300">Web Performance</span>
                    <span className="text-sm text-gray-400">90%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "90%" }}
                      transition={{ duration: 1, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-300">Node.js</span>
                    <span className="text-sm text-gray-400">85%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "85%" }}
                      transition={{ duration: 1, delay: 0.4 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold text-white mb-6">Design & Tools</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-300">Webflow/WordPress</span>
                    <span className="text-sm text-gray-400">88%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "88%" }}
                      transition={{ duration: 1, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-300">OpenAI Integration</span>
                    <span className="text-sm text-gray-400">85%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "85%" }}
                      transition={{ duration: 1, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-300">UI/UX Design</span>
                    <span className="text-sm text-gray-400">80%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "80%" }}
                      transition={{ duration: 1, delay: 0.4 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        id="contact" 
        className="py-20 px-6 bg-gray-900/30 backdrop-blur-sm"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-8"
          >
            <span className="bg-gradient-to-r from-pink-400 to-orange-600 bg-clip-text text-transparent">Let&apos;s Connect</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-300 mb-12"
          >
            I&apos;m always interested in hearing about new projects and opportunities.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="max-w-2xl mx-auto bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-left text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-500 transition-all duration-300"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-left text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-500 transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-left text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-500 transition-all duration-300"
                  placeholder="Your message..."
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(168, 85, 247, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 flex justify-center space-x-6"
          >
            <motion.a 
              href="https://github.com/maverik90" 
              className="text-gray-400 hover:text-white transition-colors p-3 rounded-full hover:bg-gray-800"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="h-6 w-6" />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/muzammil-mirza-5182531a/" 
              className="text-gray-400 hover:text-white transition-colors p-3 rounded-full hover:bg-gray-800"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="h-6 w-6" />
            </motion.a>
            <motion.a 
              href="mailto:maverik_90@hotmail.com" 
              className="text-gray-400 hover:text-white transition-colors p-3 rounded-full hover:bg-gray-800"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail className="h-6 w-6" />
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2026 Muzammil Mirza. Built with Next.js, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
