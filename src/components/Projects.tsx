import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured online shopping platform with real-time inventory management, payment integration, and admin dashboard.',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      image: '🛒',
      demoLink: '#',
      githubLink: '#',
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates, team workspaces, and advanced filtering capabilities.',
      tags: ['Next.js', 'TypeScript', 'MongoDB', 'WebSocket'],
      image: '✅',
      demoLink: '#',
      githubLink: '#',
    },
    {
      title: 'Weather Dashboard',
      description: 'Beautiful weather application with forecasts, interactive maps, and personalized weather alerts.',
      tags: ['React', 'Tailwind', 'Weather API', 'Maps'],
      image: '🌤️',
      demoLink: '#',
      githubLink: '#',
    },
    {
      title: 'Social Media Analytics',
      description: 'Comprehensive analytics platform for tracking social media metrics, engagement rates, and audience insights.',
      tags: ['Python', 'React', 'D3.js', 'PostgreSQL'],
      image: '📊',
      demoLink: '#',
      githubLink: '#',
    },
    {
      title: 'Portfolio Builder',
      description: 'Drag-and-drop portfolio builder allowing users to create professional portfolios without coding.',
      tags: ['Vue.js', 'Node.js', 'MongoDB', 'AWS S3'],
      image: '🎨',
      demoLink: '#',
      githubLink: '#',
    },
    {
      title: 'Fitness Tracker',
      description: 'Mobile-first fitness application with workout plans, progress tracking, and nutrition guidance.',
      tags: ['React Native', 'Firebase', 'TypeScript'],
      image: '💪',
      demoLink: '#',
      githubLink: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Featured <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Projects</span>
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          A selection of my recent work and personal projects
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="h-48 bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center">
                <div className="text-8xl">{project.image}</div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.demoLink}
                    className="flex items-center gap-2 text-blue-600 hover:text-cyan-600 font-semibold transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                    Demo
                  </a>
                  <a
                    href={project.githubLink}
                    className="flex items-center gap-2 text-blue-600 hover:text-cyan-600 font-semibold transition-colors duration-300"
                  >
                    <Github size={20} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
