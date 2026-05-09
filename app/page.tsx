import HeroSection from '@/components/sections/HeroSection';
import ProjectsOverview from '@/components/sections/ProjectsOverview';
import CaseStudies from '@/components/sections/CaseStudies';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProcessSection from '@/components/sections/ProcessSection';
import WhyMeSection from '@/components/sections/WhyMeSection';
import ContactSection from '@/components/sections/ContactSection';
import { getFeaturedProjects, getAllProjects } from '@/lib/projects';

export default function Home() {
  const allProjects = getAllProjects();
  const featuredProjects = getFeaturedProjects();

  return (
    <>
      <HeroSection />
      <ProjectsOverview projects={allProjects} />
      <CaseStudies projects={featuredProjects} />
      <AboutSection />
      <SkillsSection />
      <ProcessSection />
      <WhyMeSection />
      <ContactSection />
    </>
  );
}
