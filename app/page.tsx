import { Hero } from "@/components/hero";
import { WorkGrid } from "@/components/work-grid";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <main id="top">
      <Hero />
      <WorkGrid />
      <About />
      <Contact />
    </main>
  );
}
