import HeroSection from '@/components/sections/HeroSection';
import ManifestoSection from '@/components/sections/ManifestoSection';
import WorkSection from '@/components/sections/WorkSection';
import PracticeSection from '@/components/sections/PracticeSection';
import MarqueeSection from '@/components/sections/MarqueeSection';
import ProcessSection from '@/components/sections/ProcessSection';
import PhilosophySection from '@/components/sections/PhilosophySection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ManifestoSection />
      <WorkSection />
      <PracticeSection />
      <MarqueeSection />
      <ProcessSection />
      <PhilosophySection />
      <ContactSection />
    </>
  );
}
