import AnimatedNavbar from "@/components/NavBar";
import HeroSection from "../components/HeroSection";
import MenuPage from "@/components/Menu";
import AboutSection from "@/components/about";
import ContactPage from "@/components/contact";

export default function Home() {
  return (
    <main>
        <HeroSection />
        <MenuPage />
        <AboutSection />
        <ContactPage />
    </main>
  );
}
