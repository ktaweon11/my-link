import Image from "next/image";

export default function ProfilePage() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black p-8">
      <main className="flex flex-col items-center text-center max-w-2xl gap-8">
        {/* Profile Image / Avatar Placeholder */}
        <div className="w-32 h-32 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center overflow-hidden border-4 border-white dark:border-zinc-900 shadow-xl">
          <span className="text-4xl font-bold text-zinc-400">김</span>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            김태원
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 font-medium">
            Software Engineer
          </p>
        </div>

        <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-md">
          안녕하세요, 단순함과 효율성을 추구하는 개발자 김태원입니다. 
          더 나은 사용자 경험을 위해 고민하고 코드를 작성합니다.
        </p>

        <div className="flex gap-4 pt-4">
          <a
            href="mailto:contact@example.com"
            className="px-6 py-3 rounded-full bg-zinc-900 text-zinc-50 hover:bg-zinc-800 transition-all font-medium dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 shadow-sm"
          >
            Contact Me
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border border-zinc-200 bg-white text-zinc-900 hover:bg-zinc-50 transition-all font-medium dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 dark:hover:bg-zinc-900 shadow-sm"
          >
            GitHub
          </a>
        </div>
      </main>
    </div>
  );
}
