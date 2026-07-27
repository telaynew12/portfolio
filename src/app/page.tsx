import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { GitHubStats } from "@/components/GitHubStats";
import { TechStack } from "@/components/TechStack";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <GitHubStats />
      <TechStack />
      <Testimonials />
    </div>
  );
}
