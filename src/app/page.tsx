import { Dashboard } from "@/components/Dashboard";

export default function Home() {
  return (
    <main className="flex-1 relative z-10">
      {/* Decorative background elements */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-accent-blue/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent-purple/5 blur-[120px]" />
      </div>
      
      <Dashboard />
    </main>
  );
}
