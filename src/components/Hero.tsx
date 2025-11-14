import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Alex Morgan
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-6">
              Full Stack Developer & UI/UX Enthusiast
            </p>
            <p className="text-lg text-gray-500 mb-8 max-w-2xl">
              I craft beautiful, functional web experiences that make a difference.
              Passionate about clean code, intuitive design, and solving complex problems.
            </p>
            <div className="flex gap-4 justify-center md:justify-start mb-8">
              <button
                onClick={scrollToContact}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                Get In Touch
              </button>
              <a
                href="#projects"
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transform hover:-translate-y-1 transition-all duration-300"
              >
                View Work
              </a>
            </div>
            <div className="flex gap-6 justify-center md:justify-start">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
              >
                <Github size={28} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
              >
                <Linkedin size={28} />
              </a>
              <a
                href="mailto:contact@example.com"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
              >
                <Mail size={28} />
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center shadow-2xl">
              <div className="w-72 h-72 rounded-full bg-slate-100 flex items-center justify-center">
                <div className="text-8xl">👨‍💻</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-16 animate-bounce">
          <ArrowDown size={32} className="text-gray-400" />
        </div>
      </div>
    </section>
  );
}
