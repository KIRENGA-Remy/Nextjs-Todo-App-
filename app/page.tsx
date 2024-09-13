import Hero from "@/components/Hero";
import NewProducts from "@/components/NewProducts";
import Testmonials from "@/components/Testmonials";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <NewProducts />
      <Testmonials />
    </main>
  );
}
