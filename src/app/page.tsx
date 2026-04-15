import Hero from "@/components/Hero/Hero";
import Resources from "@/components/ResourcesPage/Resource";
import AboutUsAndCommunity from "@/components/About-us-and-Community/AandC";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Resources />
      <AboutUsAndCommunity />
      <Footer />
    </main>
  );
}