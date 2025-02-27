import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Services />
      <About />
      <Testimonials />
    </div>
  );
}
