import { Code, Palette, Zap } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Code size={32} />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code that stands the test of time.',
    },
    {
      icon: <Palette size={32} />,
      title: 'Beautiful Design',
      description: 'Creating visually stunning interfaces with attention to detail.',
    },
    {
      icon: <Zap size={32} />,
      title: 'Performance',
      description: 'Optimizing every pixel and byte for blazing-fast experiences.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          About <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Me</span>
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Passionate developer with 5+ years of experience building web applications
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I'm a full-stack developer based in San Francisco, specializing in building
              exceptional digital experiences. With a strong foundation in both frontend
              and backend technologies, I bring ideas to life through code.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              My journey in web development started with a curiosity about how things work
              behind the scenes. Today, I've had the privilege of working with startups,
              agencies, and enterprises to create impactful solutions.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing
              to open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-lg">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Experience</h3>
                <p className="text-3xl font-bold text-blue-600">5+ Years</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Projects Completed</h3>
                <p className="text-3xl font-bold text-blue-600">50+</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Happy Clients</h3>
                <p className="text-3xl font-bold text-blue-600">30+</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="inline-block p-4 bg-gradient-to-br from-blue-600 to-cyan-600 text-white rounded-xl mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
