import { Code2, MonitorPlay, Database, Palette, Terminal, Globe } from 'lucide-react';

const skills = [
  { name: 'React & Next.js', icon: Code2, level: 95 },
  { name: 'TypeScript', icon: Terminal, level: 90 },
  { name: 'Tailwind CSS', icon: Palette, level: 98 },
  { name: 'Backend (Node.js)', icon: Database, level: 85 },
  { name: 'UI/UX Design', icon: MonitorPlay, level: 80 },
  { name: 'Web Performance', icon: Globe, level: 88 },
];

const languages = [
  { language: 'English', level: 'Native / Bilingual' },
  { language: 'Korean', level: 'Professional' },
  { language: 'Spanish', level: 'Conversational' },
];

export default function SkillSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
      {/* Tech Stack */}
      <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <Terminal className="text-purple-400" />
          Technical Stack
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, idx) => {
            const Icon = skill.icon;
            return (
              <div key={idx} className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="flex items-center gap-2 text-gray-200">
                    <Icon size={16} className="text-gray-400" /> {skill.name}
                  </span>
                  <span className="text-gray-400 font-medium">{skill.level}%</span>
                </div>
                <div className="h-2 w-full bg-black/40 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Languages */}
      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <Globe className="text-blue-400" />
          Languages
        </h3>
        <div className="space-y-6">
          {languages.map((lang, idx) => (
            <div key={idx} className="p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-white/20 transition-colors">
              <h4 className="text-white font-semibold text-lg">{lang.language}</h4>
              <p className="text-purple-300 text-sm mt-1">{lang.level}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
