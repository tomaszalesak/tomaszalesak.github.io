import { About } from "@/components/about";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Hobbies } from "@/components/hobbies";
import { HowIWork } from "@/components/how-i-work";
import { JsonLd } from "@/components/json-ld";
import { Services } from "@/components/services";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Hero />
      <About />
      <Services />
      <HowIWork />
      <Experience />
      <Education />
      <Hobbies />
    </>
  );
}
