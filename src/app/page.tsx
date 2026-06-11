import { About } from "@/components/about";
import { ClientProjects } from "@/components/client-projects";
import { Contact } from "@/components/contact";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Hobbies } from "@/components/hobbies";
import { JsonLd } from "@/components/json-ld";
import { TechStack } from "@/components/tech-stack";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Hero />
      <About />
      <Contact />
      <Experience />
      <ClientProjects />
      <TechStack />
      <Education />
      <Hobbies />
    </>
  );
}
