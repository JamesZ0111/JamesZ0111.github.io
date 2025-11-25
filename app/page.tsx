import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import GeminiTransition from "@/components/GeminiTransition";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { AuroraBackground } from "@/components/ui/aurora-background";

const Home = () => {
  return (
    <AuroraBackground className="items-start justify-start pb-24">
      <main className="relative flex w-full flex-col items-center justify-start mx-auto sm:px-10 px-5 overflow-clip">
        <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems} />
          <Hero />
          <GeminiTransition />
          <RecentProjects />
          <Experience />
          <Footer />
        </div>
      </main>
    </AuroraBackground>
  );
};

export default Home;
