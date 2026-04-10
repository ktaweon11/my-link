import Image from 'next/image';
import { MapPin, Briefcase, Mail, Link as LinkIcon, User, Globe } from 'lucide-react';

export default function ProfileHeader() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/20 shadow-2xl transition-all hover:shadow-[0_0_40px_rgba(120,119,198,0.3)]">
      {/* Background decoration */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
        {/* Avatar */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-blue-500 rounded-full blur opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
          <Image
            src="/avatar.png"
            alt="Profile Avatar"
            width={160}
            height={160}
            className="relative rounded-full border-4 border-white/10 object-cover z-10 w-40 h-40 transform transition duration-500 group-hover:scale-105"
          />
        </div>

        {/* Info */}
        <div className="flex-1 text-center md:text-left space-y-4">
          <div>
            <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 tracking-tight">
              Alex Rivera
            </h1>
            <p className="text-xl text-purple-300 font-medium mt-1 flex items-center justify-center md:justify-start gap-2">
              <Briefcase size={20} />
              Senior Frontend Engineer @ TechCorp
            </p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-gray-300">
            <span className="flex items-center gap-1.5 bg-white/5 py-1.5 px-3.5 rounded-full border border-white/10">
              <MapPin size={16} className="text-blue-400" /> San Francisco, CA
            </span>
            <span className="flex items-center gap-1.5 bg-white/5 py-1.5 px-3.5 rounded-full border border-white/10">
              <Mail size={16} className="text-purple-400" /> alex.rivera@example.com
            </span>
            <span className="flex items-center gap-1.5 bg-white/5 py-1.5 px-3.5 rounded-full border border-white/10">
              <LinkIcon size={16} className="text-pink-400" /> alexrivera.dev
            </span>
          </div>

          <p className="text-gray-400 leading-relaxed max-w-2xl text-sm md:text-base">
            Passionate about building pixel-perfect, accessible, and highly performant web applications.
            Always exploring new bounds of generative AI and modern web frameworks like Next.js 16 and Tailwind v4.
          </p>
          
          <div className="flex gap-4 justify-center md:justify-start pt-2">
            <button className="p-3 bg-white/5 rounded-full hover:bg-white/20 hover:-translate-y-1 transition-all duration-300 border border-white/10 text-white cursor-pointer">
              <User size={20} />
            </button>
            <button className="p-3 bg-white/5 rounded-full hover:bg-white/20 hover:-translate-y-1 transition-all duration-300 border border-white/10 text-white cursor-pointer">
              <Globe size={20} />
            </button>
            <button className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 rounded-full text-white font-semibold shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
