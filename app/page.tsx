import { Hero } from "@/components/Home/hero";
import Projects from "@/components/Home/projects";
import Skills from "@/components/Home/skills";

export default function Home() {
  return (
    <main className="w-full h-full text-xl flex items-center justify-center mx-auto my-5">
      <div className="flex flex-col justify-center items-start w-full max-w-2xl mx-auto mb-16">
      <Hero/>
      <Projects/>
      <Skills/>
      </div>
    </main>
  );
}
