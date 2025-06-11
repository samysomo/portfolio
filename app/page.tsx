import { Approach } from "@/components/Approach";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { RecentProjects } from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col mx-auto sm:px-10 overflow-clip" style={{background: "radial-gradient(circle, rgba(33,75,103,1) 0%, rgba(36,36,36,1) 100%)"}}>
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={navItems}
        />
        <Hero/>
        <RecentProjects/>
        <Experience/>
        <Approach/>
        <Footer/>
      </div>
    </main>
  );
}
