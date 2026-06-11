import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Hobbies } from "@/components/hobbies";
import { JsonLd } from "@/components/json-ld";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Hero />
      <About />
      <Contact />
      <Experience />
      <Education />
      <Hobbies />
    </>
  );
}
