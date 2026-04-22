import Hero from "@/components/Hero/Hero";
import Resources from "@/components/ResourcesPage/Resource";
import AboutUsAndCommunity from "@/components/About-us-and-Community/AandC";

export default async function Home() {

  return (
    <main>
      <Hero />
      <Resources />
      <AboutUsAndCommunity />
    </main>
  );
}