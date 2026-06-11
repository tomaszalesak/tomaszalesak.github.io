import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Expertise } from "@/components/expertise";
import { Hero } from "@/components/hero";
import { Hobbies } from "@/components/hobbies";
import { JsonLd } from "@/components/json-ld";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Hero />
      <Expertise />
      <Experience />
      <Education />
      <Hobbies />
    </>
  );
}
