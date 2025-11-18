// import { ThemeToggle } from '../Components/ThemeToggle'
import { NavBar } from '../Components/NavBar';
import { HeroSection } from '../Components/HeroSection';
export const Home = () => {
  return (
    <div className="min-h-screen bg-[#FCF0DA] text-foreground overflow-x-hidden">
      {/* <ThemeToggle /> */}
      
      <NavBar />
      <main>
        <HeroSection />
      </main>
    </div>
  );
};