import ProfileHeader from '@/components/profile/ProfileHeader';
import ProfileStats from '@/components/profile/ProfileStats';
import SkillSection from '@/components/profile/SkillSection';

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-gray-100 selection:bg-purple-500/30 font-sans">
      {/* Background gradients for premium ambient feel */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-900/20 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/20 blur-[120px]"></div>
      </div>

      <main className="relative z-10 max-w-5xl mx-auto px-6 py-12 md:py-20 flex flex-col gap-6">
        <ProfileHeader />
        <ProfileStats />
        <SkillSection />
        
        {/* Footer / Extra spacing */}
        <div className="mt-12 text-center text-gray-500 text-sm pb-10">
          <p>© {new Date().getFullYear()} Alex Rivera. Crafted with Next.js 16 & Tailwind v4.</p>
        </div>
      </main>
    </div>
  );
}
