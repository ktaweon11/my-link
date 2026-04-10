import { Users, BookOpen, Star, Award } from 'lucide-react';

const stats = [
  { label: 'Followers', value: '14.2K', icon: Users, color: 'text-blue-400', bg: 'bg-blue-500/10' },
  { label: 'Repositories', value: '128', icon: BookOpen, color: 'text-purple-400', bg: 'bg-purple-500/10' },
  { label: 'Stars Given', value: '3.4K', icon: Star, color: 'text-yellow-400', bg: 'bg-yellow-500/10' },
  { label: 'Awards', value: '12', icon: Award, color: 'text-pink-400', bg: 'bg-pink-500/10' },
];

export default function ProfileStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
      {stats.map((stat, idx) => {
        const Icon = stat.icon;
        return (
          <div 
            key={idx} 
            className="group relative overflow-hidden bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors duration-300 backdrop-blur-md flex flex-col items-center cursor-pointer"
          >
            <div className={`p-3 rounded-xl ${stat.bg} ${stat.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
              <Icon size={24} />
            </div>
            <h3 className="text-3xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
              {stat.value}
            </h3>
            <p className="text-sm text-gray-400 font-medium tracking-wide">
              {stat.label}
            </p>
          </div>
        )
      })}
    </div>
  );
}
