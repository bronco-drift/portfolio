import { Hero } from "@/components/hero";
import { WorkList } from "@/components/work-list";
import { Studio } from "@/components/studio";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <main id="top">
      <Hero />
      <WorkList />
      <Studio />
      <Contact />
    </main>
  );
}
