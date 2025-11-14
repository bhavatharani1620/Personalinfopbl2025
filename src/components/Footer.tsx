import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Alex Morgan
            </h3>
            <p className="text-gray-400">Full Stack Developer & UI/UX Enthusiast</p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
            >
              <Github size={28} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:contact@example.com"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p className="flex items-center justify-center gap-2">
            Made with <Heart size={18} className="text-red-500" fill="currentColor" /> by Alex Morgan
          </p>
          <p className="mt-2">&copy; {currentYear} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
